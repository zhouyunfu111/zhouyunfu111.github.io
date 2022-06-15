---
categories:
  - coding
tags:
  - typescript
date: 2019-05-30
title: typescript学习!
---

**此篇文章作为学习笔记，大部分参考于网上资料**

- [TypeScript 入门教程]()
- [TypeScript 中文网]()

## 什么是 typescript?

`typescirpt`不是一门全新的语言，准确来说它是`javascirpt`的`超集`.任何合法的`javascirpt`代码都可以在`typescirpt`中运行,但反过来`typescipt`却包含一些目前版本中`javascript`没有功能，
更准确的说包含了`ES5`当前标准以及`ES6\7\8`未来的标准，还包含了一些实验阶段的语法.

给原生的`javasciprt`带来了强类型的定义，typescipt 无法在浏览器中运行，使用`typescript`完成代码之后，还需要用编译器把`typescirpt`编译为`javascirpt`运行。

**强类型**

- 函数的实参与形参的类型必须相同

- 类型约束

- 不允许隐式类型转换
**弱类型**

- 函数的实参与形参的类型在语法上不必相同

- 类型上约束少

- 允许任意的数据隐式类型转换

- JavaScript的TypeError是在运行时通过逻辑判断抛出的，而不是编译时就会抛出
**使用`typesciript`强类型可以编写代码可以：**

- 规范我们的代码

- 代码的编译阶段就能及时发现错误

- 在原生 JS 的基础上加上路了一层类型定义


## 为什么要使用 typescipt

假设要运行两个数字相加的函数：

```js
const num1 = document.getElementByid("num1");
const num2 = document.getElementByid("num2");

function add(num1, num2) {
  return num1 + num2;
}

cnosole.log(add(num1.value, num1.value)); //结果为11，两个都为字符串类型，相加结果为拼接字符串
```

这是一个语义级别上的逻辑错误，我们要的数字相加的结果，而不是字符串拼接。如果要代码按期望运行，我们需要在 return 阶段进行条件判断，但如果类似代码都这样进行编写，难免会显得繁琐。

使用 `typescipt`开发可以带 4 个方面的优势：

- 类型推演与类型匹配

- 开发编译时报错

- 极大程度的避免了低级错误

- 支持 javascript 最新特性(包含 ES6\7\8)

```js
const num1 = document.getElementByid("num1") as HTMLInputElment // as 在ts里表示强制转换类型 js中无法使用
const num2 = document.getElementByid("num2") as HTMLInputElment

function add(num1: number, num2: number){
  return num1 + num2
}

cnosole.log(add(+num1.value, +num1.value))
```


## 加密函数类型接口

``` js
interface encrypt {
  (key:string, value: string): string;
}

var md5:encrypt = function(key:string, value: string):string {
  retrun key + value
}
```

## 可索引接口：数组、对象的约束

``` js
interface UserArr {
  [index:number]: string
} 

var arr:userArr = ['aa','bb']

```

## 类类型接口：对类的约束 和 抽象类有点像

``` js
interface Animal {
  name: string
  eat(str:string):void
} 

class dog implements Animal {
  name:string
  constuctore(name: string){
    this.name = name
  }

  eat() {
    console.log(this.name+'吃粮食')
  }
}
```
## typescirp定义静态方法和属性

``` js
class Person {
  public name:string
  pubic age:number =  21
  //静态属性

  static sex = '男'
  constructor(name:string) {
    this.name = name 
  }

  run() {
    alert(`${this.name}在运动`)
  }

  work() {
    alert(`${this.name}在工作`)
  }
  static print() {
    alert('print方法')
  }
}

Person.print() //print 是静态方法直接调用，不需要初始化实例
```

## ts中的多态

父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现

多态属于继承
``` js
class Animal {
  name:string;
  constructor(name:string) {

  }
  eat () { //具体吃的什么 不知道 具体吃什么？继承它的子类去实现，每一个子类的表现不一样
    console.log('吃的方法')
  }
}

class Dog extends Animal{
  constcutor(name:string) {
    
  }

  eat() {
    return this.name + '吃粮食'
  }
}
``` 

## ts中的抽象类

用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体的实现并且必须在派生类中实现。

abstract抽象方法只能放在抽象类里面

抽象类和抽象方法用来定义标准  

``` js
abstract calss Animal { //抽象类不能被实例化
  public name:string
  constructor () {
    this.name = name
  }
  abstract eat():any
} 

class Dog extends Animal {
  //抽象类的子类必须实现抽象类里面的抽象方法
  constructor (name:any){
    super(name)
  }
  eat() {
     console.log(this.name + '吃粮食')
  }
}

var d = new Dog('小狗')
d.eat()


```