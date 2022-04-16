import {
    EVENT_NONE
} from "./constant";

/**
 * Class JEvent.
 */
export class JEvent {
    /**
     * 表明当前事件是否会向DOM树上层元素冒泡
     * @property bubbles
     * @type Boolean
     * @default false
     */
    bubbles = false

    /**
     * 表示该事件能否被取消,
     * @property cancelable
     * @type Boolean
     * @default false
     */
    cancelable = false

    /**
     * 标识是当事件沿着DOM触发时事件的当前目标
     * @property currentTarget
     * @type EventTarget 
     * @default null
     */
    currentTarget = null

    /**
     * 表明当前事件是否调用了preventDefault()方法。
     * @property defaultPrevented
     * @type Boolean
     * @default false
     */
    defaultPrevented = false;

    /**
     * 表示事件流当前处于哪一个阶段
     * @property eventPhase
     * @type Number
     * @default 0
     */
    eventPhase = EVENT_NONE;

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
     * @default Date.now
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
     * 构造方法
     * @param { String } type 表示所创建事件的名称
     * @param { EventInit } eventInit
     */
    constructor(type, eventInit) {
        this.type = type
        this.bubbles = eventInit?.bubbles ?? this.bubbles
        this.cancelable = eventInit?.cancelable ?? this.cancelable
        this.composed = eventInit?.composed ?? this.composed
    }

    /**
     * 如果事件的默认行为可以被取消则取消 并设置defaultPrevented为true
     **/
    preventDefault() {
        this.defaultPrevented = this.cancelable && true;
    }

    /**
     * 阻止捕获和冒泡阶段中当前事件的进一步传播。
     **/
    stopPropagation() {
        this.propagationStopped = true
    }

    /**
     * 设置阻止事件被其他侦听器被调用并且设置事件不允许被捕获或者冒泡。
     **/
    stopImmediatePropagation() {
        this.stopPropagation()
        this.immediatePropagationStopped = true;
    };

    /**
     * 
     * @return {String}
     **/
    toString() {
        return "[JEvent (type=" + this.type + ")]";
    }
}