import {J19Event} from "./event"

export class J19ErrorEvent extends J19Event{

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
    constructor(title, message = null, data = null){
        super("error")

        this.title = title

        this.message = message || title

        this.data = data
    }

    /**
	 * 复制一个相同类型的事件
	 * @method clone
	 * @return {J19ErrorEvent}
	 **/
	clone(){
		return new J19ErrorEvent(this.title,this.message,this.data);
    }
    /**
	 * 
	 * @method toString
	 * @return {String}
	 **/
    toString(){
        return  `[J19Event (type=error)] title=${this.title};message=${this.message}`
    }
}