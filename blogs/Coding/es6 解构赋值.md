---
categories:
  - coding
tags:
  - js
date: 2020-06-22
title: es6 解构赋值
---

## 解构的分类

1. 对象解构

2. 数组解构

3. 混合解构

4. 解构参数

## 对象解构
``` javascript
const obj = {
  str,
  arr:[1,2]
}

const {str = 'power',arr} = obj
//解构可传默认值
console.log(str,arr) //power,[1,2]
```
### 解构赋值
``` javascript
let business = {
  a:1,
  b:2
},
a = 3,
b = 3
//解构赋值
({a,b} = business)
console.log(a,b)//1,2
```

### 嵌套对象解构

``` javascirpt
let obj = {
  a:{
    b:{
      c:{
        d:5
      }
    }
  }
}
const {a:{b:{c:{d}}}} = obj
console.log(d) //5
```

### 对象解构中的 Rest

对象解构中的 Rest Rest/Spread Properties for ECMAScript 提案（阶段 4）将 rest 语法添加到解构中。Rest 属性收集那些尚未被解构模式拾取的剩余可枚举属性键。

``` javascript
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
a; // 10 
b; // 20 
rest; // { c: 30, d: 40 }
```

### 无效的 JavaScript 标识符作为属性名称

通过提供有效的替代标识符，解构可以与不是有效的JavaScript标识符的属性名称一起使用。

``` javascirpt
const foo = { 'fizz-buzz': true };
const { 'fizz-buzz': fizzBuzz } = foo;

console.log(fizzBuzz); // "true"
```

### 解构对象时会查找原型链（如果属性不在对象自身，将从原型链中查找）
``` javascript
// 声明对象 和 自身 self 属性
const obj = {self: '123'};
// 在原型链中定义一个属性 prot
obj.__proto__.prot = '456';
// test
const {self, prot} = obj;
// self "123"
// prot "456"（访问到了原型链）
```

## 数组解构

### 数组解构

选择性的解构元素，不需要解构的元素就使用逗号代替`(,)`。不需要像对象解构一样使用`key`属性。

``` javascript
let arr = [1,2,3]
const [a,b,c] = arr
console.log(a,b,c)//1,2,3

let arr2 = [1,2,3]
const [,d] = arr2
console.log(d)//3
```
### 解构赋值

如果你没有看明白上面说到的对象解构赋值的含义，那么看完下面的数组解构赋值，或许你会有比较清晰的理解。

这个例子中，正常情况下打印a的值是therefore，但是将数组arr的第一个元素解构赋值给a，a的值就变成了1。

``` javascript
// 初始化一个变量
let a = "therefore"
//定义一个数组
let arr = [1, 2, 3]
//解构赋值a，将arr数组的第一个元素解构赋值给a，
[a] = arr
console.log(a) // 1
```
使用解构赋值，还可以调换2个变量的值。

``` javscript
let a = 1, b = 2
[a, b] = [b, a]
console.log(a, b) // 2 1
```

### 嵌套数组解构

``` javascript
let arr = [1,[11,22,33],2,3]
const [a,[b,c,d]] = arr
console.log(a,b,c,d)//1,11,22,33


//同于
"use strict"

var arr = [1, [11, 22, 33], 2, 3]
var a = arr[0],
    _arr$ = arr[1],
    b = _arr$[0],
    c = _arr$[1],
    d = _arr$[2]

console.log(a, b, c, d)//1,11,22,33
//so easy
```

### 不定元素解构

``` javascript
let arr = [1,2,3,4]
const [...a] = arr
console.log(a)//[1,2,3,4]这种做法就是克隆arr数组
```

## 混合解构

``` javascript
let obj = {
  a:{
    aa:1
  },
  b:[2,3]
}
const {
  a:{aa},
  b:[...arr]
} = obj
console.log(aa,b)//1,[2,3]
```
## 解构参数

当给函数传递参数时，我们可以对每个参数进行解构，我给option的参数设置了默认值，这样可以防止没有给option传参导致的报错情况。

``` javascript
function Ajax(url, options) {
  const {timeout = 0, jsonp = true} = options
  console.log(url, timeout, jsonp)
}
Ajax('baidu.com', {
  timeout: 1000,
  jsonp: false
}) // "baidu.com" 1000 false
```

## 无声明赋值

``` javscript
var a, b
({a, b} = {a: 1, b: 2})
```
::: warning
注意：赋值语句周围的圆括号 ( ... ) 在使用对象字面量无声明解构赋值时是必须的。

{a, b} = {a: 1, b: 2} 不是有效的独立语法，因为左边的 {a, b} 被认为是一个块而不是对象字面量。

然而，({a, b} = {a: 1, b: 2}) 是有效的，正如 var {a, b} = {a: 1, b: 2}

你的 ( ... ) 表达式之前需要有一个分号，否则它可能会被当成上一行中的函数执行。
:::

## 给新的变量名赋值

``` javascript
var o = {p: 42, q: true}
var {p: foo, q: bar} = o
 
console.log(foo) // 42 
console.log(bar) // true 
```

## 给新的变量命名并提供默认值

``` javascript
var {a:aa = 10, b:bb = 5} = {a: 3}

console.log(aa) // 3
console.log(bb) // 5
```

## 解构嵌套对象和数组

``` javascript
const metadata = {
  title: 'Scratchpad',
  translations: [
    {
      locale: 'de',
      localization_tags: [],
      last_edit: '2014-04-14T08:43:37',
      url: '/de/docs/Tools/Scratchpad',
      title: 'JavaScript-Umgebung'
    }
  ],
  url: '/en-US/docs/Tools/Scratchpad'
}

let {
  title: englishTitle, // rename
  translations: [
    {
       title: localeTitle, // rename
    },
  ],
} = metadata

console.log(englishTitle) // "Scratchpad"
console.log(localeTitle)  // "JavaScript-Umgebung"
```


## 对象属性计算名和解构

``` javascript
let key = "z"
let { [key]: foo } = { z: "bar" }

console.log(foo) // "bar"
```

## 总结

**对象解构赋值和数组解构赋值，以及对象和数组混合情况下的解构赋值操作，最后一个知识点是解构函数的参数。每一个都是重点，特别是最后一个，解构参数恐怕你经常在用了，只是通常你没发现。**

