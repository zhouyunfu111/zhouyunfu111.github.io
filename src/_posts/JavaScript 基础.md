---
top: 1
category: Coding
# tags:
#   - 图标
date: 2019-05-29
title: JavaScript 基础---变量类型!
---

## I. 数据类型
最新的 `ECMAScript` 标准定义了 `7` 种数据类型
- 6 种<a class="glossaryLink" href="/en-US/docs/Glossary/Primitive" title="原始类型: 在 JavaScript 中，共有6种基本类型：string，number，boolean，null，undefined，symbol (ECMAScript 2015新增)。所有基本类型的值都是不可改变的。但需要注意的是，基本类型本身和一个赋值为基本类型的变量的区别。变量会被赋予一个新值，而原值不能像数组、对象以及函数那样被改变。">原始类型</a>
   - <a class="glossaryLink" href="/en-US/docs/Glossary/Boolean" title="Boolean: 在计算机科学中，布尔值是一种取值仅能为 真 或 假 的数据类型，它赋予了编程语言在逻辑上表达真 或 假 的能力。">Boolean</a>
   - <a class="glossaryLink" href="/en-US/docs/Glossary/Null" title="在计算机学科， null 值一直是一个被讨论点，通常来说，表示一个不存在或者无效object或者地址引用。语言实现中空引用的含义各不相同。">Null</a>
   - <a class="glossaryLink" href="/en-US/docs/Glossary/Number" title="Number: 在 JavaScript 中, Number 是一种 定义为 64位双精度浮点型（double-precision 64-bit floating point format） (IEEE 754)的数字数据类型。在其他编程语言中，有不同的数字类型存在，比如：整型（Integers），单精度浮点型（Floats），双精度浮点型（Doubles），大数（Bignums）。">Number</a>
   - <a class="glossaryLink" href="/en-US/docs/Glossary/String" title="String: 在任何计算机编程语言中，字符串都是用来表示文本的字符序列。">String</a>
   - <a class="glossaryLink" href="/en-US/docs/Glossary/Symbol" title="Symbol: 这个技术术语页面同时描述了一种称为 “symbol” 的数据类型，还有一个像类的函数 “Symbol()”，用来创建 symbol 数据类型实例。">Symbol</a> (ECMAScript 6 新定义)
   - <a class="glossaryLink" href="/en-US/docs/Glossary/Null" title="在计算机学科， null 值一直是一个被讨论点，通常来说，表示一个不存在或者无效object或者地址引用。语言实现中空引用的含义各不相同。">Null</a>
- 和 <a class="glossaryLink" href="/en-US/docs/Glossary/Object" title="Object: 对象 指包含数据和用于处理数据的指令的数据结构. 对象有时也指现实世界中的一些事, 例如在赛车游戏当中一辆车或者一幅地图都可以是一个对象. JavaScript, Java, C++, Python, 还有 Ruby 这些例子都是面向对象的程序设计 语言.">Object</a>

## II.对象的底层数据结构
🛵[JS 原型链](https://summery1874.site/posts/2018/11/17/js-proto.html)

## III. Symbol类型在实际开发中的应用,手动实现一个简单的Symbol
[ES6 Symbol]()
[ES6 系列之模拟实现 Symbol 类型]()

## IV. 变量在内存中的具体存储形式
::: tip
栈内存：`原始类型`  以键值对的方式储存在栈内存中

堆内存：`复杂类型` 会在堆内存中开辟一块空间，储存这个对象的值，并同时在栈内存中储存变量和指向对象的指针
:::



<img src='https://ae01.alicdn.com/kf/HTB1r4iqaRWD3KVjSZKP761p7FXap.png' style='cursor:zoom-in;'>

栈内存|堆内存
:------:|:------:
存储基础数据类型|存储引用数据类型
按值访问|按引用访问
存储的值大小固定|存储的值大小不定，可动态调整
由系统自动分配内存空间|由程序员通过代码进行分配
主要用来执行程序|主要用来存放对象
空间小，运行效率高|空间大，但是运行效率相对较低
先进后出，后进先出|无序存储，可根据引用直接获取

## 基本类型对应的内置对象，装箱拆箱操作

#### i. 基本类型对应的内置对象

- `Boolean`
- `Number`
- `String`


```js
true === new Boolean(true) // false
1874 === new Number(1874) // false 
'hello' === new String('hello') // false

true === new Boolean(true).valueOf() // true
```

::: warning
引用类型和包装类型的主要区别就是对象的生存期，使用new操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中，而自基本类型则只存在于一行代码的执行瞬间，然后立即被销毁，这意味着我们不能在运行时为基本类型添加属性和方法。
:::

```js
const name = 'hello'
name.age = 24
=> name.age // undefined
```

#### ii. 装箱拆箱操作
- 装箱转换：把基本类型转换为对应的包装类型
- 拆箱操作：把引用类型转换为基本类型

既然原始类型不能扩展属性和方法，那么我们是如何使用原始类型调用方法的呢？

每当我们操作一个基础类型时，后台就会自动创建一个包装类型的对象，从而让我们能够调用一些方法和属性，例如下面的代码：

```js
var name = "ConardLi";
var name2 = name.substring(2);
```

复制代码实际上发生了以下几个过程：

- 创建一个`String`的包装类型实例
- 在实例上调用`substring`方法
- 销毁实例

也就是说，我们使用基本类型调用方法，就会自动进行装箱和拆箱操作，相同的，我们使用Number和Boolean类型时，也会发生这个过程。

从引用类型到基本类型的转换，也就是拆箱的过程中，会遵循ECMAScript规范规定的toPrimitive原则，一般会调用引用类型的valueOf和toString方法，你也可以直接重写toPeimitive方法。一般转换成不同类型的值遵循的原则不同，例如：

- 引用类型转换为`Number`类型，先调用`valueOf`，再调用`toString`
- 引用类型转换为`String`类型，先调用`toString`，再调用`valueOf`

[Symbol​.toPrimitive](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)

除了程序中的自动拆箱和自动装箱，我们还可以手动进行拆箱和装箱操作。我们可以直接调用包装类型的valueOf或toString，实现拆箱操作：

```js
const num = new Number('123')
console.log( typeof num.valueOf() ) // number
console.log( typeof num.toString() ) // string
```
## VI. 理解值类型和引用类型
- 值类型等于原始类型： 以键值对的方式储存在栈内存中
- 复杂类型等于引用类型：会在堆内存中开辟一块空间，储存这个对象的值，并同时在栈内存中储存变量和指向对象的指针

## VII. null 和 undefined 的区别
### i. `null`

`null`表示"没有对象"，即该处不应该有值。典型用法是：
- 作为函数的参数，表示该函数的参数不是对象。
- 作为对象原型链的终点。

```js
Object.getPrototypeOf(Object.prototype)
// null
```

### ii. `undefined`
undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。典型用法是：
- 变量被声明了，但没有赋值时，就等于`undefined`。
- 调用函数时，应该提供的参数没有提供，该参数等于`undefined`。
- 对象没有赋值的属性，该属性的值为`undefined`。
- 函数没有返回值时，默认返回`undefined`。

```js
var i;
i // undefined

function f(x){console.log(x)}
f() // undefined

var  o = new Object();
o.p // undefined

var x = f();
x // undefined
```

## VIII. 判断 JavaScript 数据类型

### i. 判断JS数据类型的四种方法
- `typeof`
- `instanceof`
- `constructor`
- `toString`
```js
['Boolean', 'Number', 'String', 'Null', 'Undefined', 'Symbol', 'Object', 'Function', 'Array', 'Error', 'RegExp', 'Math', 'JSON', 'global']
```
#### `typeof`

`typeof` 操作符返回一个字符串，表示未经计算的操作数的类型。

| 调用                   | 结果               |
| -------------          | -------------     |
| `typeof true`          | `boolean`         |
| `typeof 1874`          | `number`          |
| `typeof 'hello'`       | `string`          |
| `typeof null`          | <del>object</del> |
| `typeof undefined`     | `undefined`       |
| `typeof Symbol()`      | `symbol`          |
| `typeof {}`            | `object`          |
| `typeof function() {}` | `function`        |
| `typeof []`            | <del>object</del> |
| `typeof new Error()`   | <del>object</del> |
| `typeof new RegExp()`  | <del>object</del> |
| `typeof Math`          | <del>object</del> |
| `typeof JSON`          | <del>object</del> |
| `typeof window`        | <del>object</del> |

#### `instanceof`
🛵[JS 原型链 > instanceof的原理]()

>`instanceof`运算符用于测试构造函数的`prototype`属性是否出现在对象的原型链中的任何位置。
> 
>1.所有引用类型都具有对象特性，即可以自由扩展属性\
>2.所有引用类型都具有一个`__proto__`（隐式原型）属性，是一个普通对象\
>3.所有的函数都具有`prototype`（显式原型）属性，也是一个普通对象\
>4.所有引用类型`__proto__`值指向它构造函数的`prototype`\
>5.当试图得到一个对象的属性时，如果对象本身没有这个属性，则会去他的`__proto__`中去找
>
>`[] instanceof Array`实际上是判断`Foo.prototype`是否在`[]`的原型链上

```js
[] instanceof Array // true
new Date() instanceof Date // true
new RegExp() instanceof RegExp // true
```

::: warning
使用`instanceof`来检测数据类型，不会很准确，这不是它设计的初衷:
```js
[] instanceof Object // true
function(){}  instanceof Object // true
```
使用`instanceof`也不能检测基本数据类型，所以instanceof并不是一个很好的选择。
:::

#### `constructor`
[🛵JS 原型链 > constructor]()

#### `toString`
>每一个引用类型都有toString方法，默认情况下，toString()方法被每个Object对象继承。如果此方法在自定义对象中未被覆盖，toString() 返回 "[object type]"，其中type是对象的类型。

::: tip
注意，上面提到了如果此方法在自定义对象中未被覆盖，toString才会达到预想的效果，事实上，大部分引用类型比如Array、Date、RegExp等都重写了toString方法。

>我们可以直接调用Object原型上未被覆盖的toString()方法，使用call来改变this指向来达到我们想要的效果。
:::

| 调用                   | 结果           |
| -------------          | ------------- |
| `Object.prototype.toString.call(true)`          | `[object Boolean]`     |
| `Object.prototype.toString.call(1874)`          | `number`      |
| `Object.prototype.toString.call('hello')`       | `[object String]`      |
| `Object.prototype.toString.call(null)`          | `[object Null]`        |
| `Object.prototype.toString.call(undefined)`     | `[object Undefined]`   |
| `Object.prototype.toString.call(Symbol())`      | `[object Symbol]`      |
| `Object.prototype.toString.call({})`            | `[object Object]`      |
| `Object.prototype.toString.call(function() {})` | `[object Function]`    |
| `Object.prototype.toString.call([])`            | `[object Array]`        |
| `Object.prototype.toString.call(new Error())`   | `[object Error]`        |
| `Object.prototype.toString.call(new RegExp())`  | `[object RegExp]`        |
| `Object.prototype.toString.call(Math)`          | `[object Math]`        |
| `Object.prototype.toString.call(JSON)`          | `[object JSON]`        |
| `Object.prototype.toString.call(window)`        | `[object Window]`        |

利用`闭包` and `toString`封装
>不推荐将这个函数用来检测可能会产生包装类型的基本数据类型上,因为 call 会将第一个参数进行装箱操作
```js
// es6
const typeValidate = type => target => `[object ${type}]` === Object.prototype.toString.call(target)
// es5
function typeValidate(type) {
  return function (target) {
    return "[object " + type + "]" === Object.prototype.toString.call(target)
  }
}

const isArray = typeValidate('Array')
const isString = typeValidate('String')

isString(new String('summer')) // true
isArray([]) // true
```
>当你想判断一个基本类型的数据时，你可以用`typeof`去判断，它很简单，而且可靠；当你想判断一个对象属于哪个子类型时，你可以使用`instanceof`运算符或`constructor`属性，但是你需要有个预期的类型，不然就要针对每一种类型写不一样的`if...else...`语句，还有一点需要注意的就是`constructor`属性可以被修改，所以并不可靠；如果你不嫌代码量多，要求准确且全面，那你可以用`Object.prototype.toString.call()`进行判断


## IX. 可能发生隐式类型转换的场景以及转换原则，应如何避免或巧妙应用

### 非严格相等 `==`
>相等操作符比较两个值是否相等，在比较前将两个被比较的值转换为相同类型。在转换后（等式的一边或两边都可能被转换），最终的比较方式等同于全等操作符 ===的比较方式。 相等操作符满足交换律。

<img src='https://ae01.alicdn.com/kf/HTB1Bcrba3aH3KVjSZFj763FWpXaE.png' style='cursor:zoom-in;'>

### 判等

| `x`                 | `y`              | `==`        | `===`  | `Object.is` |
| ----------          | ---------        | ------      | ------ | ---------   |
| `undefined`	        | `undefined`      |	`true`     | `true` |	`true`      |
| `null`	            | `null`           |	`true`     | `true` |	`true`      |
| `true`	            | `true`           |	`true`     | `true` |	`true`      |
| `false`	            | `false`          |	`true`     | `true` |	`true`      |
| `"foo"`	            | `"foo"`          |	`true`     | `true` |	`true`      |
| `0`	                | `0`              |	`true`     | `true` |	`true`      |
| `+0`	              | `-0`             |	`true`     | `true` |	false       |
| `0`	                | `false`          |	`true`     |	false |	false       |
| `""`	              | `false`          |	`true`     |	false |	false       |
| `""`	              | `0`              |	`true`     |	false |	false       |
| `"0"`	              | `0`              |	`true`     |	false |	false       |
| `"17"`              | `17`             |	`true`     |	false |	false       |
| `new String("foo")` | `"foo"`          |	`true`	   |	false |	false       |
| `0`                 | `undefined`      |	`true`	   |	false |	false       |
| `null`              | `false`          |	false	     |	false |	false       |
| `undefined`         | `false"`         |	false	     |	false |	false       |
| `{ foo: "bar" }`    | `{ foo: "bar" }` |	false	     |	false |	false       |
| `0`                 | `null`           |	false	     |	false |	false       |
| `0`                 | `NaN`            |	false	     |	false |	false       |
| `"foo"`             | `NaN`            |	false	     |	false |	false       |
| `NaN`               | `NaN`            |	false	     |	false |	`true`      |

### Truthy (真值)
>在 `JavaScript` 中，`Truthy` (真值)指的是在 布尔值 上下文中转换后的值为真的值。所有值都是真值，除非它们被定义为 `falsy` (即除了 `false`，`0`，`""`，`null`，undefined和 NaN 外)。 JavaScript 中的真值示例如下（将被转换为 true，if 后的代码段将被执行）：

```js
if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

## X. 出现小数精度丢失的原因，JavaScript 可以存储的最大数字,最大安全数字，JavaScript 处理大数字的方法,避免精度丢失的方法

### i. [出现小数精度丢失的原因]()

### ii. 最大数字,最大安全数字
- `Number.MAX_VALUE`
- `Number.MAX_SAFE_INTEGER`

### 处理大数字的方法,避免精度丢失的方法
- `node-bignum`
- `node-bigint`
- `bigInt类型在es10中被提出，现在Chrome中已经可以使用`

## 参考
- [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)
- [https://juejin.im/entry/589c29a9b123db16a3c18adf](https://juejin.im/entry/589c29a9b123db16a3c18adf)
- [http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)
- [https://juejin.im/post/5cec1bcff265da1b8f1aa08f#heading-7](https://juejin.im/post/5cec1bcff265da1b8f1aa08f#heading-7)
- [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)
