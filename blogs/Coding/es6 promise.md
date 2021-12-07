---
categories:
  - coding
tags:
  - js
date: 2020-05-12
title: es6 promise
---

## promise

`Promise`是一个构造函数，自己身上有`all、reject、resolve`这几个眼熟的方法，原型上有`then、catch`等同样很眼熟的方法。

<img src="../../.vuepress/public/promise.png" />

## 解决异步回调地狱 a->b,事件触发，回调

es5

``` js
let ajax = function(callback){
    console.log('进入')
    setTimeout(()=>{
        callback && callback()
    },1000)
} 
ajax(()=>{
    console.log('回调成功！')
})
```
es6  
``` js
function promise(a){
    return new Promise((resolve,reject) => {
        if(a){
            resolve();
        }else{
            reject();
        }
    })
}
promise().then(()=>{console.log(1)})
```