import { JEvent } from "./event"

/**
 * Class JErrorEvent.
 * @extends JEvent
 */
export class JErrorEvent extends JEvent {

    /**
     * 错误标题
     * @property title
     * @type String
     * @readonly
     */
    title = null

    /**
     * 错误信息
     * @property message
     * @type String
     * @readonly
     */
    message = null

    /**
     * 其他可能需要的数据 可能和错误有关可能和错误无关
     * @property data
     * @type {Object}
     */
    data = null

    /**
     * 构造函数
     * @param title {string}
     * @param message {string}
     * @param data {object}
     */
    constructor(title, message = null, data = null) {
        super("JError")

        this.title = title

        this.message = message || title

        this.data = data
    }

    /**
     *
     * @return {String}
     **/
    toString() {
        return `[JEvent] type=${this.type} title=${this.title};message=${this.message}`
    }
}