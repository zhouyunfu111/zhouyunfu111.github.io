---

categories:
  - coding
tags:
  - js
date: 2020-05-12
title: es6 扩展对象的功能性
---

## 对象类别

在ES6中，对象分为下面几种叫法。

- 普通对象

- 特异对象

- 标准对象

- 内建对象

## 对象字面量语法拓展

- ES6针对对象的语法扩展了一下功能
``` javascript
//es5
function obj(id){
  return{
    id
  }
}

//es6
const obj = id => ({
  id
})
```
- 对象方法简写

``` javascript
//es5
var obj = {
  id:1,
  getId:function(){
    console.log(this.id);
  }
}

//es6
const obj = {
  id:1,
  getId(){
    console.log(this.id);
  }
}
```
- 属性名可计算

属性名可以传入变量或者常量，而不只是一个固定的字符串。

``` javascript
const name = "winni";
const obj = {
[`${name}_22`]:'girl'
}
console.log(obj);//{winni-22: "girl"}
console.log(obj['winni_22']);//girl
console.log(obj.winni_22);//girl
```

## ES6对象新增方法

- Object.is()

**用来解决JavaScript中特殊类型 == 或者 === 异常的情况。**

``` javascript
//ES5 异常情况
  NaN === NaN  //false
  -0 === +0    //true
  0 == "0"      //true

//ES6
//为了解决历遗留问题，新增了Object.is()来处理2个值的比较。
  Object.is(NaN,NaN);//true
  Object.is(-0,+0); //false
  Object.is(0,"0");//false
```

- object.assign()

**实现了拷贝一个对象给另外一个对象，返回一个新的对象。**

``` javascript
//Object.assign(target, ...sources)
let obj = { a: 1 };
let copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

//如果目标对象中的属性具有相同的键，则属性将被源中的属性覆盖。后来的源的属性将类似地覆盖早先的属性。
let obj = { a: 1 ,b:2};
let copy = Object.assign({a:0}, obj);
console.log(copy); //  { a: 1 ,b:2}
```

::: warning
Es6中扩展运算符`(…)`与`Object.assign()`中复制是浅拷贝，所谓的浅拷贝和深拷贝：浅拷贝是在在拷贝过程中，`遍历时那部分为对象/数组类型指向原来的地址`，而深拷贝，则是完全开辟新的内存地址。
:::

## 重复的对象字面量属性

ES5的严格模式下，如果你的对象中出现了key相同的情况，那么就会抛出错误。而在ES6的严格模式下，不会报错，后面的key会覆盖掉前面相同的key。

``` javascript
const state = {
  id: 1,
  id: 2
}
console.log(state.id) // 2
```

## 自有属性枚举顺序

ES6新增标准

- 首先遍历所有数值键，按照数值升序排列。
- 其次遍历所有字符串键，按照加入时间升序排列。
- 最后遍历所有 Symbol 键，按照加入时间升序排列。

``` javascript
const obj = {
  a:1,
  id:1,
  name:'winni',
  1:112,
  10:110,
  2:199,

}
console.log(Object.getOwnPropertyNames(obj));
// ["1", "2", "10", "a", "id", "name"]
console.log(Object.assign(obj,null));
//{1: 112, 2: 199, 10: 110, a: 1, id: 1, name: "winni"}
```

## 增强对象原型

定义一个对象    

``` javascript
let obj = {};
let A = Object.create(obj);
function B (){};
class C {};
```

## 方法的定义

ES6明确了方法的定义。

``` javascript
let a = {
  //方法
  name() {
    return 'eryue'
  }
}
//函数
function name() {}
```
::: tip
函数`（function）`是一段代码，需要通过名字来进行调用。它能将一些数据（函数的参数）传递进去进行处理，然后返回一些数据（函数的返回值），也可以不返回数据。

方法`（method）`是通过对象调用的`javascript`函数。也就是说，方法也是函数，只是比较特殊的函数。

当将函数和对象和写在一起时，函数`（function）`就变成了方法`（method）`。
:::



