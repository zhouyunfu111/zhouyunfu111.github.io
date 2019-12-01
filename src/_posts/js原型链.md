---
top: 1
category: JS
# tags:
#   - 原型链
date: 2019-06-03
title: js原型链!
---
## 创建对象的三种方法

#### 字面量
```js
const obj = { name: 'zhouYunFu' }

const obj2 = new Object({ name: 'zhouYunFu })
```

### 构造函数
```js
function Obj () { this.name = 'zhouYunFu' }
const obj = new Obj()
```


### Objcet.create()
```js
const obj = Object.create({ name: 'zhouYunFu' })
```


## 原型，构造函数，实例，原型链

#### 关系图
![关系图](https://ae01.alicdn.com/kf/HTB1RIvPKFzqK1RjSZFo762fcXXaU.png)

::: tip
 - 实例对象其实是引用的原型对象`(M.prototype)`上的属性

 - 判断实例对象的__proto__与构造函数的prototype是不是同一个引用（只要再同一条原型链上都返回true）
:::

#### 代码演示
```js
function M() {
  this.name = 'zhouYunFu'
}
const m = new M()

m instanceof M // true

// 因为在同一条原型链上 所以以下示例也为 true
m instanceof Object // true
M.prototype.__proto__ === Object.prototype // true

// 精准判断 使用constructor
m.constructor === M 
```

## new运算符
:::tip
- 当代码 `new M(...)` 执行时
    1. 一个新对象被创建，它继承`M.prototype`。
    2. 构造函数`M`被执行，执行的时候，相应的的传参会被传入，同时上下文(this)会被指定为这个新实例。在不传入参数的时候，`new M` 等同于 `new M()`。
    3. 由构造函数返回的对象就是 `new` 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。(一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤)
:::

### 模拟实现
```js 
function Otaku (name, age) {
    this.name = name
    this.age = age
    this.habit = 'Games'
}
function objectFactory() {
    const obj = new Object()
    Constructor = [].shift.call(arguments)
    obj.__proto__ = Constructor.prototype
    const ret = Constructor.apply(obj, arguments)
    return typeof ret === 'object' ? ret : obj
}
const person = objectFactory(Otaku, 'Kevin', '18')
```
[new 运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)