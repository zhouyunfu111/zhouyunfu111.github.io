---
categories:
  - coding
tags:
  - react
date: 2023-05-30
title: nodejs学习!
---

## fs文件系统模块

fs模块是Nodejs官方提供的、用来操作文件模块。它提供了一系列的方法和属性。用来满足对文件的操作需求。

例如：
  - fs.readFile()方法，用来读取指定文件种的内容
  - fs.writeFile()方法，用来向指定的文件种写入内容


如果要在Javascript代码中，使用Fs模块来操作文件，则需要使用如下的方式先导入它：
``` javascript
 const fs  = reqier('fs') 

```
### fs.readFile()的语法格式

使用fs.readFile()方法，可以读取指定文件中的内容，语法格式如下：

``` javascript

fs.readFile(path[,options],callback)

```
参数解读：

1.参数1：必选参数，字符串，表示文件的路径。
2.参数2：可选参数，表示以什么编码格式来读取文件。
3.参数3：必选参数，文件读取完成后，通过回调函数拿到读取的结果。

### 读取指定文件中的内容

2.fs.readfile()的示例代码

以utf8的编码格式，读取指定文件的内容，并打印err和 dataStr的值：

``` javascript
const fs = require('fs')

fs.readfile('./files/11.txt','utf8',function(err,dataStr) {

  // 打印失败的结果

  // 如果读取成功，则 err 的值为 null

  // 如果读取失败，则 err 的值为 错位对象，dataStr 的值为 undefined
  console.log(err)
  console.log('-----')
  console.log(dataStr)
})

 
```

3.判断文件是否读取成功

``` javascript
const fs = require('fs')

fs.readfile('./files/1.txt','utf8',function(err,dataStr) {

  if(err) {
    
    return console.log('文件读取失败' + err.message)

  }
  console.log('文件读取成功，内容是：' + result)
})

 
```
### 向指定的文件中写入内容

1. fs.writeFile()的示例代码

向指定的文件路径中，写入文件内容：

``` javascript

fs.witeFile(path[,options],callback)

```

参数解读：
 
 参数1：表示文件的存放路径

 参数2：表示要写入的内容

 参数3：回调函数

``` javascript

const fs = require('fs')

fs.witeFile('./files/2.txt', 'hello Node.js!', function(err){
   // 参数1: 表示文件的存放路径

   // 2.1 如果文件写入成功，则 err 的值等于 null

   // 2.2 如果文件写入失败，则 err 的值等于一个 错误对象
   console.log(err) 
})  

```

3.判断文件是否写入成功


``` javascript

const fs = require('fs')

fs.witeFile('./files/2.txt', 'hello Node.js!', function(err){
    if(err) {
      return console.log('文件写入失败' + err.message)

    }
    console.log('文件写入成功！')
})  

```

## 处理路径问题

在使用fs模块操作文件时，如果提供的操作路径是以./或../开头的相对路径时，很容易出现路径动态拼接错误的问题

原因: 代码在运行的时候，`会以执行node命令时所处的目录`，动态拼出被操作文件的完整路径。

解决方案：在使用fs模块操作文件时，`直接提供完整的路径`，不要提供./或 ../开头的相对路径，从而防止路径动态拼接的问题。


## path路径模块

path模块时nodejs 官方提供的，用来处理路径的模块，它提供了一系列的方法和属性，用来满足对路径的处理和需求

例如：

- path.join()方法，用来将多个路径片段拼接成一个完整的路径字符串
 
- path.basename()方法，用来从路径字符串中，将文件名解析出来

``` javascript

const path = require('path')

```
1. path.join()的代码示例

使用 path.join方法，可以把多个路径片段拼接为完整的路径字符串：

``` javascript

const path = require('path')

const pathStr = path.join('/a','/b/c/','../','./d','e') //../会抵消前面一层路径
console.log(pathStr)

const pathStr2 = path.join(__dirname,'./files/1.txt')

console.log(pathStr2)
``` 

## app.use函数的作用

app.use()函数的作用，就是用来注册全局中间件，用来处理每一次请求。

vue.use()函数，用来注册全局组件。 

## express中的路由

路由就是映射关系，简单来说，url地址与处理函数之间的对应关系。

在Express中，路由是由三部分组成的，分别是请求的类型、请求的URL地址、处理函数，格式如下：

``` javascript

app.METHOD(PATH,HANDLER)

```

例如：

``` javascript

app.get('/user/getuser',function(req,res) {

  res.send('Get user page')

})

app.post('/user/uerinfo',function(req,res) {

  res.send('Get user info page')

})

## express中的内置中间件,express.urlencoded()方法中的extended属性是什么意思

``` javascript

app.use(express.urlencoded({extended:false}))

```
当extended参数设置为true时，express.urlencoded()会使用:ml-search[qs]库来解析URL编码的数据，这允许解析嵌套对象和数组。这意味着你可以在表单中提交复杂的数据结构，如对象和数组，而不仅仅是简单的键值对。这种解析方式使得express.urlencoded()`能够处理更复杂的数据类型，适用于需要提交复杂表单数据的场景‌

相比之下，当extended参数设置为false时，express.urlencoded()会使用`querystring库来解析URL编码的数据，这限制了只能解析简单的键值对，不支持嵌套对象和数组。这种解析方式适用于提交简单表单数据的情况‌

extended: false表示使用系统模块querystring来处理，也是官方推荐的

extended: true表示使用第三方模块qs来处理

## nodejs中的五大中间类型

1.应用级别的中间件

2.路由级别的中间件

3.错误级别的中间件

4.Express内置的中间件

5.第三方的中间件



