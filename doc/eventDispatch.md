### EventDispatch

### 提供了一些方法来管理队列的事件监听器和分派任务事件

### 构造函数

### 属性
| 键名 | 类型 | 默认值 | 说明 |
| - | - | - | - |


### 方法
- addEventListener 将指定的监听器注册到target上
>> 参数 type String
>> 参数 listener Function | Object
>> 参数 [useCapture] Boolean
>> 返回 Function | Object 返回用于链接或赋值的侦听器
- dispatchEvent 将指定的事件分派给所有侦听器。
>> 参数 eventObj Object | String | Event
>> 参数 [bubbles] Boolean
>> 参数 [cancelable] Boolean
>> 返回 Boolean 如果在可取消事件上调用了preventDefault()，则返回false，否则返回true。
- hasEventListener 指定指定事件类型是否至少有一个侦听器。
>> 参数 type String
>> 返回 如果指定事件至少有一个侦听器，则返回true
- init static 将EventDispatcher方法混合到目标对象或原型中的静态初始化器。
>> 参数 target Object
>> 返回
- off removeEventListener方法的快捷方式
>> 参数 type String
>> 参数 listener Function | Object
>> 参数 [useCapture] Boolean
>> 返回 Function | Object 返回用于链接或赋值的侦听器
- on addEventListener方法的快捷方式
>> 参数 type String
>> 参数 listener Function | Object
>> 参数 [scope] Object
>> 参数 [once=false] Boolean
>> 参数 [data] Object
>> 参数 [useCapture=false] Boolean
>> 返回 Function 返回作为侦听器创建和分配的匿名函数
- removeAllEventListeners 删除指定类型的所有侦听器，或所有类型的所有侦听器。
>> 参数 [type] String
>> 返回
- removeEventListener
>> 参数 type String
>> 参数 listener Function | Object
>> 参数 [useCapture] Boolean
>> 返回
- toString
>> 参数 
>> 返回
- willTrigger 这类似于hasEventListener，但它搜索整个事件流来寻找侦听器，而不仅仅是这个对象
>> 参数 type String
>> 返回 Boolean 如果指定事件至少有一个侦听器，则返回true。