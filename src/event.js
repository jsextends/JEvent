/**
 * 自定义事件 
 * 属性来源参看 https://developer.mozilla.org/zh-CN/docs/Web/API/Event
 */
export class J19Event {

    /**
     * 指示事件是否通过可以冒泡
     * @property bubbles
     * @type Boolean
     * @default false
     * @readonly
    */
    bubbles = false

    /**
     * 事件的默认行为是否可以被取消,
     * @property cancelable
     * @type Boolean
     * @default false
     * @readonly
    */
    cancelable = false

    /**
    * 正在从中分派冒泡事件的当前目标
    * @property currentTarget
    * @type Object
    * @default null
    * @readonly
   */
    currentTarget = null

    /**
     * 表明当前事件是否调用了preventDefault()方法。
     * @property defaultPrevented
     * @type Boolean
     * @default false
     * @readonly
    */
    defaultPrevented = false;

    /**
      * 对于冒泡事件，这表示当前事件阶段
      * @property eventPhase
      * @type Number
      * @default 0
      * @readonly
     */
    eventPhase = 0

    /**
      * 生成事件的对象
      * @property target
      * @type Object
      * @default null
      * @readonly
     */
    target = null

    /**
      * 时间的创建时间
      * @property timeStamp
      * @type Number
      * @default Date.now()
      * @readonly
     */
    timeStamp = Date.now()

    /**
     * 事件类型
     * @property type
     * @type String
     **/
    type = null

    /**
     * 返回事件是否允许捕获或者冒泡
     * @property propagationStopped
     * @type Boolean
     * @default false
     * @readonly
    */
    propagationStopped = false;
	/**
     * 返回是否阻止事件冒泡并且阻止相同事件的其他侦听器被调用。
     * on this event.
     * @property immediatePropagationStopped
     * @type Boolean
     * @default false
     * @readonly
    */
    immediatePropagationStopped = false;

    /**
     *事件是否被移除
     * @property removed
     * @type Boolean
     * @default false
     * @readonly
    */
    removed = false;

    /**
     * 构造方法
     * @param type {string}
     * @param bubbles {boolean}
     * @param cancelable {boolean}
     */
    constructor(type, bubbles = false, cancelable = false) {
        this.type = type
        this.bubbles = bubbles
        this.cancelable = cancelable
    }

    /**
	 * 如果事件的默认行为可以被取消则取消 并设置defaultPrevented为true
	 * @method preventDefault
	 **/
    preventDefault() {
        this.defaultPrevented = this.cancelable && true;
    }

    /**
	 * 阻止捕获和冒泡阶段中当前事件的进一步传播。
	 * @method stopPropagation
	 **/
    stopPropagation() {
        this.propagationStopped = true
    }

    /**
     * 设置阻止事件被其他侦听器被调用并且设置事件不允许被捕获或者冒泡。
	 * @method stopImmediatePropagation
	 **/
    stopImmediatePropagation() {
        this.stopPropagation()
        this.immediatePropagationStopped = true;
    };

    /**
	 * 移除事件
	 * @method remove
	 **/
    remove() {
        this.removed = true;
    };

    /**
	 * 复制一个相同类型的事件
	 * @method clone
	 * @return {J19vent}
	 **/
    clone() {
        return new J19Event(this.type, this.bubbles, this.cancelable);
    };

    /**
	 * 
	 * @method toString
	 * @return {String}
	 **/
    toString() {
        return "[J19Event (type=" + this.type + ")]";
    }
}
