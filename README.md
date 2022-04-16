# j19-event
这是一个关于event的实现

---

*author* : **usernameisregistered**

*email*：**liming_longxi@163.com**

*buildDate*:**2019年10月27日 12:51**

---

## 安装  npm i @jsextend19/j19-event

## 引入

```
import { JEvent , JErrorEvent , JEventTarget } from "@jsextend19/j19-event"

```


## 注意
| 函数名称 | 描述 | 参数 |
| - | - | - |
| apply | 方法调用一个具有给定this值的函数 | thisArg, [argsArray] |
| call | 使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数 | thisArg, arg1, arg2, ... |
| bind | 会创建一个新绑定函数 | thisArg[,arg1[,arg2[, ...]]] |

### 事件阶段常量
| 常量 | 值 | 描述 |
| - | - | - |
|Event.NONE|	0	|这个时间，没有事件正在被处理|
|Event.CAPTURING_PHASE|	1	|事件正在被目标元素的祖先对象处理. 这个处理过程从Window开始，然后Document, 然后是HTMLHtmlElement, 一直这样，直到目标元素的父元素。 通过EventTarget.addEventListener() 注册为捕获模式的Event listeners 被调用。|
|Event.AT_TARGET	|2	|事件对象已经抵达the event's target. 为这个阶段注册的事件监听被调用。 如果 Event.bubbles 的值为false, 对事件对象的处理在这个阶段后就会结束.|
|Event.BUBBLING_PHASE	|3	|事件对象逆向向上传播回目标元素的祖先元素, 从父亲元素开始，并且最终到达包含元素 Window. 这就是冒泡，并且只有Event.bubbles 值为true的时候才会发生。 为这个阶段注册的Event listeners 在这个过程中被触发|

### 绑定函数[bound function，BF]
[[BoundTargetFunction]] - 包装的函数对象
[[BoundThis]] - 在调用包装函数时始终作为this值传递的值。
[[BoundArguments]] - 列表，在对包装函数做任何调用都会优先用列表元素填充参数列表。
[[Call]] - 执行与此对象关联的代码。通过函数调用表达式调用。内部方法的参数是一个this值和一个包含通过调用表达式传递给函数的参数的列表。

绑定函数也可以使用new运算符构造，它会表现为目标函数已经被构建完毕了似的。提供的this值会被忽略，但前置参数仍会提供给模拟函数。