---
categories:
  - coding
tags:
  - 通信协议
date: 2022-03-20
title: WebSocket 学习!
---

**from** [WebSocket 教程](https://www.ruanyifeng.com/blog/2017/05/websocket.html)

WebSocket是一种网络通信协议，很多高级功能都需要它。

## 为什么需要webSocket

初次接触 `WebSocket` 的人，都会问同样的问题：我们已经有了 `HTTP` 协议，为什么还需要另一个协议？它能带来什么好处？

答案很简单，因为 `HTTP` 协议有一个缺陷：通信只能由客户端发起。

举例来说，我们想了解今天的天气，只能是客户端向服务器发出请求，服务器返回查询结果。`HTTP` 协议做不到服务器主动向客户端推送信息。

<img src='../../.vuepress/public/bg2017051507.jpg' />

这种单向请求的特点，注定了如果服务器有连续的状态变化，客户端要获知就非常麻烦。我们只能使用"轮询"：每隔一段时候，就发出一个询问，了解

服务器有没有新的信息。最典型的场景就是聊天室。

轮询的效率低，非常浪费资源（因为必须不停连接，或者 `HTTP` 连接始终打开）。因此，工程师们一直在思考，有没有更好的方法。WebSocket 就是这样发明的。


## 简介

`WebSocket` 协议在2008年诞生，2011年成为国际标准。所有浏览器都已经支持了。

它的最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。

其他特点包括：

1. 建立在 `TCP` 协议之上，服务器端的实现比较容易。

2. 与 `HTTP` 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 `HTTP` 协议，因此握手时不容易屏蔽，能通过各种 `HTTP` 代理服务器。

3. 数据格式比较轻量，性能开销小，通信高效。

4. 可以发送文本，也可以发送二进制数据。

5. 没有同源限制，客户端可以与任意服务器通信

6. 协议标识符是`ws`（如果加密，则为`wss`），服务器网址就是 URL。

``` html
ws://example.com:80/some/path
```

## 客户端的简单示例

WebSocket 的用法相当简单。

下面是一个网页脚本的例子（点击这里看运行结果），基本上一眼就能明白。

``` js
var ws = new WebSocket("wss://echo.websocket.org");

ws.onopen = function(evt) { 
  console.log("Connection open ..."); 
  ws.send("Hello WebSockets!");
};

ws.onmessage = function(evt) {
  console.log( "Received Message: " + evt.data);
  ws.close();
};

ws.onclose = function(evt) {
  console.log("Connection closed.");
};      
```

## 客户端的 API

WebSocket 客户端的 API 如下。

### 4.1 WebSocket 构造函数

WebSocket 对象作为一个构造函数，用于新建 WebSocket 实例。

``` html
var ws = new WebSocket('ws://localhost:8080');
```
执行上面语句之后，客户端就会与服务器进行连接。

实例对象的所有属性和方法清单，参见[websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)。

###  4.2 webSocket.readyState

readyState属性返回实例对象的当前状态，共有四种。

::: tip
- CONNECTING：值为0，表示正在连接。
- OPEN：值为1，表示连接成功，可以通信了。
- CLOSING：值为2，表示连接正在关闭。
- CLOSED：值为3，表示连接已经关闭，或者打开连接失败。
:::

下面是一个示例。

``` js
  case WebSocket.CONNECTING:
    // do something
    break;
  case WebSocket.OPEN:
    // do something
    break;
  case WebSocket.CLOSING:
    // do something
    break;
  case WebSocket.CLOSED:
    // do something
    break;
  default:
    // this never happens
    break;
}
```

### 4.3 webSocket.onopen

实例对象的onopen属性，用于指定连接成功后的回调函数。

``` js
ws.onopen = function () {
  ws.send('Hello Server!');
}
```

如果要指定多个回调函数，可以使用addEventListener方法。

``` js
ws.addEventListener('open', function (event) {
  ws.send('Hello Server!');
});
```

### 4.4 webSocket.onclose

实例对象的onclose属性，用于指定连接关闭后的回调函数。

``` js
ws.onclose = function(event) {
  var code = event.code;
  var reason = event.reason;
  var wasClean = event.wasClean;
  // handle close event
};

ws.addEventListener("close", function(event) {
  var code = event.code;
  var reason = event.reason;
  var wasClean = event.wasClean;
  // handle close event
});
```

### 4.5 webSocket.onmessage

实例对象的onmessage属性，用于指定收到服务器数据后的回调函数。

``` js

ws.onmessage = function(event) {
  var data = event.data;
  // 处理数据
};

ws.addEventListener("message", function(event) {
  var data = event.data;
  // 处理数据
});
```

注意，服务器数据可能是文本，也可能是二进制数据（blob对象或Arraybuffer对象）

``` js

ws.onmessage = function(event){
  if(typeof event.data === String) {
    console.log("Received data string");
  }

  if(event.data instanceof ArrayBuffer){
    var buffer = event.data;
    console.log("Received arraybuffer");
  }
}
```

除了动态判断收到的数据类型，也可以使用binaryType属性，显式指定收到的二进制数据类型。

``` js
// 收到的是 blob 数据
ws.binaryType = "blob";
ws.onmessage = function(e) {
  console.log(e.data.size);
}

// 收到的是 ArrayBuffer 数据
ws.binaryType = "arraybuffer";
ws.onmessage = function(e) {
  console.log(e.data.byteLength);
}
```

### webSocket.send()

实例对象的send()方法用于向服务器发送数据。

发送文本的例子。

``` js
ws.send('your message');
```

发送 Blob 对象的例子。

``` js
var file = document
  .querySelector('input[type="file"]')
  .files[0];
ws.send(file);
```

发送 ArrayBuffer 对象的例子。


``` js
var img = canvas_context.getImageData(0, 0, 400, 320);
var binary = new Uint8Array(img.data.length);
for (var i = 0; i < img.data.length; i++) {
  binary[i] = img.data[i];
}
ws.send(binary.buffer);
```

### 4.7 webSocket.bufferedAmount

实例对象的bufferedAmount属性，表示还有多少字节的二进制数据没有发送出去。它可以用来判断发送是否结束。

``` js

var data = new ArrayBuffer(10000000);
socket.send(data);

if (socket.bufferedAmount === 0) {
  // 发送完毕
} else {
  // 发送还没结束
}
4.8 webSocket.onerror
```

### 4.8 webSocket.onerror

实例对象的onerror属性，用于指定报错时的回调函数。 

``` js
socket.onerror = function(event) {
  // handle error event
};

socket.addEventListener("error", function(event) {
  // handle error event
});
```
### 服务端的实现

常用的 Node 实现有以下三种。

- µWebSockets

- Socket.IO

- WebSocket-Node

### 扩展

- SockJs

`SockJS`是一个`JavaScript`库，为了应对许多浏览器不支持`WebSocket`协议的问题，设计了备选`SockJs`。`SockJS` 是 `WebSocket` 技术

的一种模拟。`SockJS`会尽可能对应 `WebSocket API`，但如果 `WebSocket` 技术不可用的话，会自动降为轮询的方式。

SockJS会优先选择WebSocket进行连接，但是当服务器或客户端不支持WebSocket时，会自动在 XHR流、XDR流、iFrame事件源、iFrame HTML文件、

XHR轮询、XDR轮询、iFrame XHR轮询、JSONP轮询 这几个方案中择优进行连接

- Stompjs

Stompjs 为 WebSocket 提供了 备选方案。但无论哪种场景，对于实际应用来说，这种通信形式层级过低。 STOMP协议，来为浏览器 和 server 间的 

通信增加适当的消息语义。

WebSocket、SockJs、STOMP三者关系

简而言之，WebSocket 是底层协议，SockJS 是WebSocket 的备选方案，也是底层协议，而 STOMP 是基于 WebSocket（SockJS）的上层协议。

1.HTTP协议解决了 web 浏览器发起请求以及 web 服务器响应请求的细节，假设 HTTP 协议 并不存在，只能使用 TCP 套接字来 编写 web 应用，那将是一件非常痛苦的事情。

2.直接使用 WebSocket（SockJS） 就很类似于 使用 TCP 套接字来编写 web 应用，因为没有高层协议，就需要我们定义应用间所发送消息的语义，还需要确保连接的两端都能遵循这些语义；

3.同HTTP在TCP 套接字上添加请求-响应模型层一样，STOMP在WebSocket 之上提供了一个基于帧的线路格式层，用来定义消息语义；

## websocket订阅时可以添加自定义头部

在订阅websocket消息服务时，可以添加自定义头部参数，来设定消息过期时间，是否手动确认消息，消息最大长度等。

``` js
  subscribe(topic,callback,headers){
		console.log('订阅消息',{topic,callback,headers})
		//订阅地址 
		this.client.subscribe(topic,async (message) =>{
			let data = JSON.parse(JSON.parse(message.body))
			console.log('来新消息了',data)
			if( headers['client-staticdata'] ){
				let initData = this.updateOrderStatus(data,'_message')
				console.log('计算结果',initData)
				callback(data,initData,message)
			}else{
				callback(data,message)
			}
		
			console.log('消息消费',message)
			message.ack()
		},{
			'durable': true,  //消息设置持久化
			'prefetch-count': 30, // 每次发给消费者的最大消息数
			'auto-delete': false, //是否自动删除队列
			'x-message-ttl': 1000 * 60 * 60 * 6, // 消息设置过期时间
			'ack':'client', //客户端手动确认消息
			...headers
		});
	}
```
1.x-message-ttl：Number

1个发布的消息在队列中存在多长时间后被取消（单位毫秒）
*可以对单个消息设置过期时间

2.x-expires：Number

当Queue（队列）在指定的时间未被访问，则队列将被自动删除。

3.x-max-length：Number

队列所能容下消息的最大长度。当超出长度后，新消息将会覆盖最前面的消息，类似于Redis的LRU算法。

4.x-max-length-bytes：Number

限定队列的最大占用空间，当超出后也使用类似于Redis的LRU算法。

5.x-overflow：String

设置队列溢出行为。这决定了当达到队列的最大长度时，消息会发生什么。有效值为Drop Head或Reject Publish。
* queue溢出行为，这将决定当队列达到设置的最大长度或者最大的存储空间时发送到消息队列的消息的处理方式；
* 有效的值是：
* drop-head（删除queue头部的消息）、
* reject-publish（最近发来的消息将被丢弃）、
* reject-publish-dlx（拒绝发送消息到死信交换器）
* 类型为quorum 的queue只支持drop-head;

6.x-dead-letter-exchange：String

有时候我们希望当队列的消息达到上限后溢出的消息不会被删除掉，而是走到另一个队列中保存起来。

7.x-dead-letter-routing-key：String

如果不定义，则默认为溢出队列的routing-key，因此，一般和6一起定义。

8.x-max-priority：Number

如果将一个队列加上优先级参数，那么该队列为优先级队列。

1）、给队列加上优先级参数使其成为优先级队列
  x-max-priority=10【值不要太大，本质是一个树结构】

2）、给消息加上优先级属性
  通过优先级特性，将一个队列编程stack（堆栈）

9.x-queue-mode：String

队列类型　　x-queue-mode=lazy　　懒队列，在磁盘上尽可能多地保留消息以减少RAM使用；如果未设置，则队列将保留内存缓存以尽可能快地传递消息。

10.x-queue-master-locator：String

将队列设置为主位置模式，确定在节点集群上声明时队列主位置所依据的规则。

## websocket每次重连后队列名称不一致，导致接收不到消息

最近碰到websocket重连后发现rebbitMQ交换机上的队列名会跟上一次的不一致，导致生产者消息产生的消息和消费者要消费的队列不一致。

解决办法：需要与后端统一消息订阅地址的规则，确保生产者和消费都处于同一个队列中，在订阅自定义头部里面添加一个x-queue-name用来规范队列名

称，否则每次断开重连之后会重新创建一条新的队列,导致接收不到消息
``` js
uni.WebScoket.subscribe('/exchange/exchange.create.app/routingKey.' + tag, (res) => {
   uni.$u.debounce(this.initData, 1000, false)
},{ 'x-queue-name': 'exchange.create.app,queue.app,routingKey.' + tag , 'client-staticdata': true})
```
## websocket断开重连之后会出现第一条消息丢失的情况

最近碰到websocket断网重连后发现，生产者产生的第一条消息会丢失的情况。

解决办法： 前端把自动确认消息消费改为手动确认消息消费。后台也要做对应的处理

总结：rebbmitMQ的消息机制原因，第一条消息发送出去了，但是没有回应。rebbmitMQ消息服务器会认为你已经接收了，可以在自定义头里设置 `ack: client`, //客户端手动确认消息

## 华为鸿蒙系统上onLoad里使用uni.navigateTo跳转页面出现无法正常跳转的问题

最近在华为平板上跳转页面出现了问题，本应该是点击按钮跳转到一个用于过渡的中间件页面(用来先把屏幕旋转成横屏之后在去跳转到真正的页面)。可是卡

在了中间件页面无法跳转。

解决办法：在onLoad里面执行`uni.redirectTo`去跳转。

总结：不太清楚为啥会出这个问题，可能跟鸿蒙系统的兼容性有关。可以尝试用redirectTo方法去跳转

## 华为鸿蒙系统上从竖屏转横屏之后的页面样式全部错乱

在华为平板上先是竖屏然后通过`uniapp`自带的api方法去旋转屏幕到横屏，横屏页面的样式全部错乱了。其他平板从旋转切换后到，也会出现延样式方面
的问题

解决办法：对于需要在竖屏和横屏来换切换的应用，页面的样式的像素单位应该要从rpx改为vw和vh这种相对单位来开发

总结：不同机型会存在不一样的差异可能是系统导致，uniapp的`rpx`不支持动态横屏竖屏切换计算，使用`rpx`建议锁定屏幕方向，使用vw相对单位来解

决，通过设计图给出的基础展示单位除于整个设计图的最大宽度(或者高度)在乘于100那么就得出了相对去当前窗口的大小
``` css
@function calcVw($px) {
		@return ($px / 1280 * 100) + vw; 
	}
@function calcVh($px) {
  @return ($px / 750 * 100) + vh; 
}
.app-header {
  height: calcVh(102);
  line-height: calcVh(102);

  text {
    font-size: calcVw(34);
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: calcVh(36);
    color: #F4F4F4;
    margin-left: calcVw(32);
  }
}
```