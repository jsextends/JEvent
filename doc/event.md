### Event 

### 事件对象

### 构造函数
> type String 事件类型
> bubbles Boolean false 事件是否冒泡
> cancelable Boolean false 事件的默认行为是否可以取消

### 属性

| 键名 | 类型 | 默认值 | 说明 |
| - | - | - | - |
| bubbles | Boolean | false | 事件是否冒泡 |
| cancelable | Boolean | false | 事件的默认行为是否可以取消 |
| currentTarget | Object | null | 正在从中分派冒泡事件的当前目标。对于非冒泡事件，这将始终与目标相同 |
| defaultPrevented | Boolean | false | 表示是否在此事件上调用了preventDefault |
| [eventPhase](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/eventPhase) | Number | 0 | 事件阶段 |
| immediatePropagationStopped | Boolean | false | 表示是否在此事件上调用了stopimmediate传播 |
| propagationStopped | Boolean | false | 判断是否在此事件上调用了stopPropagation或stopImmediatePropagation |
| removed | Boolean | false | 此事件是否调用了remove | 
| target | Object | null | 产生一个事件的对象 |
| timeStamp  | Date | Date.now() | 事件的创建时间 |
| type  | String | null | 时间类型 |

### 方法
+ clone 返回事件实例的克隆
>> 参数 
>> 返回 Event 返回事件实例的克隆
+ preventDefault 调用了preventDefault()的可取消事件将取消与该事件关联的默认行为
>> 参数 
>> 返回 
+ remove 设置removed为true
>> 参数 
>> 返回 
+ set 用于设置实例上的属性
>> 参数 props Object
>> 返回 
+ stopImmediatePropagation 将Event/propagationStopped和Event/immediatePropagationStopped设置为true
>> 参数 
>> 返回 
+ stopPropagation 设置事件/传播停止为真
>> 参数 
>> 返回 
+ toString 
>> 参数 
>> 返回 实例的字符串表示形式。

