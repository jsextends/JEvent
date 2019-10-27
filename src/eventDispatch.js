import {J19Event} from "./event"

export class J19DispatchEvent{
    /**
     * 普通事件监听组
     * @protected
     * @property _listeners
     * @type Object
     **/
    _listeners = null;
		
    /**
     * 捕获事件监听组
     * @protected
     * @property _captureListeners
     * @type Object
     **/
    _captureListeners = null;

    /**
	 * 事件初始化
	 * @method init
	 * @static
	 * @param {J19Event|Event} target
	 **/
	 static init(target){
	 	let o = new J19DispatchEvent()
        target.addListener = o.addEventListener;
		target.on = o.on;
		target.removeListener = target.off =  o.removeEventListener;
		target.removeAllListeners = o.removeAllEventListeners;
		target.hasListener = o.hasEventListener;
		target.assignEvent = o.dispatchEvent;
		target._assignEvent = o._dispatchEvent;
		target.hasTrigger = o.willTrigger;
    }

    /**
	 * 将指定的监听器注册到target上
	 * @method addEventListener
	 * @param {String} type 
	 * @param {Function | Object} listener
	 * the event is dispatched.
	 * @param {Boolean} [useCapture] 指定需要移除的 EventListener 函数是否为捕获监听器
	 * @return {Function | Object} 
	 **/
    addEventListener(type, listener, useCapture){
        let listeners;
		if (useCapture) {
			listeners = this._captureListeners = this._captureListeners||{}
		} else {
			listeners = this._listeners = this._listeners||{}
		}
        let arr = listeners[type];
		if (arr) {
            this.removeEventListener(type, listener, useCapture)
        }
		arr = listeners[type]
		if (!arr) { 
            listeners[type] = [listener]
        } else { 
            arr.push(listener) 
        }
		return listener;
    }

    /**
	 * 将指定的监听器注册到eventTarget上 可注册一次 可指定参数和作用域
     * @method on
	 * @param {String} type 
	 * @param {Function | Object} listener 
	 * @param {Object} [scope] 
	 * @param {Boolean} [once=false] 
	 * @param {*} [data]
	 * @param {Boolean} [useCapture=false] 
	 * @return {Function | Object}
	 **/
    on(type, listener, scope, once = false, data = null, useCapture = false) {
		if (listener.handleEvent) {
			scope = scope||listener;
			listener = listener.handleEvent;
		}
		scope = scope||this;
		return this.addEventListener(type,function(evt) {
			listener.call(scope, evt, data);
			once&&evt.remove();
		}, useCapture);
    };
    
    /**
	 * 将指定的监听器从EventTarget上移除
     * @method removeEventListener
	 * @param {String} type
	 * @param {Function | Object} listener 
	 * @param {Boolean} [useCapture] 
	 **/
    removeEventListener(type, listener, useCapture = false) {
		let listeners = useCapture ? this._captureListeners : this._listeners;
		if (!listeners) { return }
		let arr = listeners[type]
		if (!arr) { return }
		for (let i=0,l=arr.length; i<l; i++) {
			if (arr[i] == listener) {
				if (l==1) { 
                    delete(listeners[type])
                } else { 
                    arr.splice(i,1)
                }
				break;
			}
		}
    };

    /**
	 * 将所有指定类型的监听器从EventTarget上移除
     * @method removeAllEventListeners
	 * @param {String} type
     * 
	 **/
    removeAllEventListeners(type){
        if (!type) { 
            this._listeners = this._captureListeners = null
        } else {
			if (this._listeners) { delete(this._listeners[type]) }
			if (this._captureListeners) { delete(this._captureListeners[type]) }
		}
    }

    /**
     * 事件分发
	 * @method dispatchEvent
	 * @param {Object | String | EL_Event} eventObj
	 * @param {Boolean} [bubbles] 
	 * @param {Boolean} [cancelable] 
	 * @return {Boolean}
	 **/
    dispatchEvent(eventObj, bubbles = false , cancelable = false){
        if (typeof eventObj == "string") {
			let listeners = this._listeners;
			if (!bubbles && (!listeners || !listeners[eventObj])) { return true }
			eventObj = new J19Event(eventObj, bubbles, cancelable);
		} else if (eventObj.target && eventObj.clone) {
			eventObj = eventObj.clone();
		}
		try { eventObj.target = this } catch (e) {}
		if (!eventObj.bubbles || !this.parent) {
			this._dispatchEvent(eventObj, 2);
		} else {
			let top=this, list=[top];
			while (top.parent) { list.push(top = top.parent) }
			var i, l=list.length;
			for (i=l-1; i>=0 && !eventObj.propagationStopped; i--) {
				list[i]._dispatchEvent(eventObj, 1+(i==0));
			}
			for (i=1; i<l && !eventObj.propagationStopped; i++) {
				list[i]._dispatchEvent(eventObj, 3);
			}
		}
		return !eventObj.defaultPrevented;
    }

    /**
	 * 是否存在指定type的事件
	 * @method hasEventListener
	 * @param {String} type
	 * @return {Boolean}
	 **/
    hasEventListener(type){
        let listeners = this._listeners, captureListeners = this._captureListeners;
		return !!((listeners && listeners[type]) || (captureListeners && captureListeners[type]));
    }
    /**
     * 判断指定事件类型是否至少有一个侦听器
	 * @method willTrigger
	 * @param {String} type
	 * @return {Boolean}
	 **/
    willTrigger(type){
        let self = this;
		while (self) {
			if (self.hasEventListener(type)) { return true; }
			self = self.parent;
		}
		return false;
    }

    /**
	 * 事件分发
	 * @method _dispatchEvent
	 * @param {Object | J19Event} eventObj
	 * @param {Object} eventPhase
	 * @protected
	 **/

    //eventPhase 属性返回事件传播的当前阶段。{1:'捕获阶段',2:'派发阶段',3:'冒泡阶段'}

	/*
	|----------|----------------------------------------------------------------------------------|
	|     0    | 没有事件正在被处理                                                                 |
	|----------|----------------------------------------------------------------------------------|
	|     1    | 事件正在被目标元素的祖先对象处理. 逐级 直到目标元素的父元素。                          |
	|----------|----------------------------------------------------------------------------------|
	|     2    | 事件已经到达了目标对象并且被调用,如果bubbles为false,事件到此为止                     |
	|----------|----------------------------------------------------------------------------------|
	|     3    | 事件从父亲元素开始逐级到目标元素的祖先元素                                           |
	|----------|----------------------------------------------------------------------------------|
	 */
    _dispatchEvent(eventObj, eventPhase){
		let l, arr, listeners = (eventPhase <= 2) ? this._captureListeners : this._listeners;
		if (eventObj && listeners && (arr = listeners[eventObj.type]) && (l=arr.length)) {
			try { eventObj.currentTarget = this } catch (e) {}
			try { eventObj.eventPhase = eventPhase | 0 } catch (e) {}
			eventObj.removed = false;

			arr = arr.slice();

			for (let i=0; i<l && !eventObj.immediatePropagationStopped; i++) {
				
				let o = arr[i];
				o(eventObj)
				if (eventObj.removed) {
					this.removeEventListener(eventObj.type, o, eventPhase==1);
					eventObj.removed = false;
				}
			}
		}
		if (eventPhase === 2) { this._dispatchEvent(eventObj, 2.1); }
    }
}