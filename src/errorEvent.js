import {Event} from "./event"

export class ErrorEvent extends Event{
    /**
     * 错误标题
     * @property title
     * @type String
     */
    title = null
    /**
     * 错误信息
     * @property message
     * @type String
     */
    message = null 
    /**
     * 错误的其他属性
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
    constructor(title, message, data = null){
        super("error")

        this.title = title

        this.message = message 

        this.data = data
    }

    /**
	 * 复制一个相同类型的事件
	 * @method clone
	 * @return {ErrorEvent}
	 **/
	clone(){
		return new ErrorEvent(this.title,this.message,this.data);
    }
    /**
	 * 
	 * @method toString
	 * @return {String}
	 **/
    toString(){
        return  `[Event (type=error)] ${this.title} ${this.message}`
    }
}