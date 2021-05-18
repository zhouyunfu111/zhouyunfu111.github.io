---
categories:
  - coding
tags:
  - js
date: 2020-04-03
title: es6-块级作用域的绑定
---

## var

::: tip
`JavaScript`中，我们通常说的作用域是`函数作用域`，使用`var`声明的变量，无论是在代码的哪个地方声明的，都会提升到当前`作用域的最顶部`，这种行为叫做`变量提升（Hoisting）`
:::

也就是说，如果在函数内部声明的变量，都会被提升到该函数开头，而在全局声明的变量，就会提升到`全局作用域的顶部`。

``` javascript
function test() {
    console.log('1: ', a) //undefined
    if (false) {
      var a = 1
    }
    console.log('3: ', a) //undefined
}
test()
//实际执行时，上面的代码中的变量a会提升到函数顶部声明，即使if语句的条件是false，也一样不影响a变量提升。
function test() {
    var a
    //a声明没有赋值
    console.log('1: ', a) //undefined
    if (false) {
      a = 1
    }
    //a声明没有赋值
    console.log('3: ', a) //undefined
}
```

在函数嵌套函数的场景下，变量只会提升到最近的一个函数顶部，而不会提升到外部函数。

``` javascript
// b提升到函数a顶部，但不会提升到函数test。
    function test() {
        function a() {
          if (false) {
            var b = 2
          }
        }
        console.log('b: ', b)
    }
    
    test() //b is not defined
```

如果a没有声明，那么就会报错，没有声明和声明后没有赋值是不一样的，这点一定要区分开，有助于我们找bug。

``` javascirpt
// a没有声明的情况

a is not defined
```

## let

::: tip
`let`和`const`都能够声明块级作用域，用法和`var`是类似的，`let`的特点是`不会变量提升`，而是被锁在当前块中。
:::
 一个非常简单的例子：

 ``` javascript
  function test() {
        if(true) {
          console.log(a)//TDZ，俗称临时死区，用来描述变量不提升的现象
          let a = 1
        }
    }
    test()  // a is not defined

    function test() {
        if(true) {
          let a = 1
        }
        console.log(a)
    }    
    test() // a is not defined
 ```

 唯一正确的使用方法：先声明，再访问。

 ``` javascript
    function test() {
        if(true) {
          let a = 1
          console.log(a)
        }
    }
    test() // 1
 ```

 ## const

 ::: tip
声明常量，一旦声明，不可更改，而且常量必须初始化赋值。
 :::

`const type = "ACTION"` 我们试试重新声明`type`，看看会报什么错：
``` javascript
const type = "ACTION"
type = 1
console.log(type) //"type" is read-only

const type = "ACTION"
let type = 1
console.log(type) //Duplicate declaration "type"
```

