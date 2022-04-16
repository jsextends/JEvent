import { AT_TARGET } from "./constant";
import { JEvent } from "./event"

/**
 * Class JEventTarget.
 */
export class JEventTarget {
	/**
	 * 普通事件监听组
	 * @protected
	 * @property _listeners
	 * @type Object
	 **/
	_listeners = null;

	constructor() {
		this._listeners = {};
	}

	/**
	 * 将指定的监听器注册到target上
	 * @param {String} type 
	 * @param {Function} listener
	 * @param {Object} [option] 指定需要移除的 EventListener 函数是否为捕获监听器
	 **/
	addEventListener(type, listener, option) {
		if (!this._listeners[type] && !Array.isArray(this._listeners[type])) {
			this._listeners[type] = [];
		}
		this._listeners[type].push({ once: option?.once ?? false, handler: listener, capture: option?.capture ?? false });
	}

	/**
	 * 将指定的监听器从EventTarget上移除
	 * @param {String} type
	 * @param {Function} listener 
	 * @param {Boolean} [useCapture] 
	 **/
	removeEventListener(type, listener, useCapture = false) {
		let listeners = this._listeners;
		if (listeners) {
			let handlers = listeners[type];
			if (handlers && Array.isArray(handlers)) {
				for (let i = 0, l = handlers.length; i < l; i++) {
					if (handlers[i].handler == listener && handlers[i].capture === useCapture) {
						if (l == 1) {
							delete listeners[type]
						} else {
							handlers.splice(i, 1)
						}
						break;
					}
				}
			}
		}
	};

	/**
	 * 将所有指定类型的监听器从EventTarget上移除
	 * @param {String} type
	 **/
	removeAllEventListeners(type) {
		if (!type) {
			this._listeners = null
		} else {
			if (this._listeners) { delete this._listeners[type] }
		}
	}

	/**
	 * 将指定的监听器注册到eventTarget上 可注册一次 可指定参数和作用域
	 * @param {String} type 
	 * @param {Function} listener 
	 * @param {Object} [scope] 
	 * @param {*} [data]
	 * @param {Object} [option] 
	 * @return {Function | Object}
	 **/
	on(type, listener, scope, data = null, option) {
		scope = scope || this;
		return this.addEventListener(type, function (evt) {
			listener.call(scope, evt, data);
		}, option);
	};

	/**
	 * 事件分发
	 * @param {JEvent | Event} eventObj
	 * @return {Boolean}
	 **/
	dispatchEvent(eventObj) {
		try { eventObj.target = this } catch (e) { }
		if (!eventObj.bubbles) {
			this._dispatchEvent(eventObj, 2);
		} else {
			let top = this, list = [top];
			while (top.parent) { list.push(top = top.parent) }
			var i, l = list.length;
			for (i = l - 1; i >= 0 && !eventObj.propagationStopped; i--) {
				list[i]._dispatchEvent(eventObj, 1 + (i == 0));
			}
			for (i = 1; i < l && !eventObj.propagationStopped; i++) {
				list[i]._dispatchEvent(eventObj, 3);
			}
		}
	}

	/**
	 * 事件分发
	 * @param {JEvent | Event} eventObj
	 * @param {Object} eventPhase
	 * @protected
	 **/
	_dispatchEvent(eventObj, eventPhase) {
		let handlers;
		if (eventPhase <= AT_TARGET) {
			handlers = this._listeners[eventObj.type]?.filter(el => !el.capture) ?? []
		} else {
			handlers = this._listeners[eventObj.type]?.filter(el => el.capture) ?? []
		}
		const size = handlers.length
		try {
			eventObj.currentTarget = this
			eventObj.eventPhase = eventPhase | 0
		} catch (e) { }

		for (let i = 0; i < size && !eventObj.immediatePropagationStopped; i++) {
			handlers[i].handler(eventObj)
			if (handlers[i].once) {
				this.removeEventListener(eventObj.type, handlers[i].handler, handlers[i].capture);
			}
		}
	}
}