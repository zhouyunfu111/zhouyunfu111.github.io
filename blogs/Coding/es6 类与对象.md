---
categories:
  - coding
tags:
  - js
date: 2020-05-12
title: es6 类与对象
---

ES5中的近类结构

ES5以及之前的版本，没有类的概念，为了实现面向对象，创建了特殊的近类结构。

ES5中创建类的方法：新建一个构造函数，定义一个方法并且赋值给构造函数的原型。

``` js
function Person(name){
  this.name = name;
}
Person.prototype.sayName = function(age){
  return this.name + age;
}
var p = new Person('hmm');
var setterPerson = p.sayName(18);
console.log(p);
console.log(setterPerson);
```

ES6

``` js
class Person{
  constructor(name){
    this.name = name;
  }
  sayName(age){
    return this.name + age;
  }
}
const p = new Person('hmm');
const sayName = p.sayName(18);
console.info(p);
console.log(sayName);
```

## 类的继承

ES5中实现继承的方法：新建一个构造函数，将父类构造函数的this指向子类构造函数，将父类构造函数的prototype指向子类构造函数的prototype。

``` js
function Person(name){
  this.name = name;
}
Person.prototype.sayName = function(){
  return this.name;
}
function Student(name, age){
  Person.call(this, name);
  this.age = age;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.sayAge = function(){
  return this.age;
}

``` 

ES6中实现继承的方法：使用extends关键字，将父类作为子类的原型。

``` js
class Person{
  constructor(name){
    this.name = name;
  }
  sayName(){
    return this.name;
  }
}
class Student extends Person{
  constructor(name, age){
    super(name);
    this.age = age;
  }
  sayAge(){
    return this.age;
  }
}
const p = new Student('hmm', 18);
console.log(p);
console.log(p.sayName());
console.log(p.sayAge());
```

## 类的静态方法

ES5中实现静态方法的方法：在构造函数上添加方法。

``` js
function Person(name){
  this.name = name;
}
Person.sayName = function(){
  return 'hmm';
}
```

ES6中实现静态方法的方法：在方法前添加static关键字。

``` js
class Person{
  constructor(name){
    this.name = name;
  }
  static sayName(){
    return 'hmm';
  }
}
console.log(Person.sayName());
```
## 类的私有方法

ES5中实现私有方法的方法：使用#定义私有方法。

``` js
class Person{
  constructor(name){
    this.name = name;
  }
  #sayName(){
    return this.name;
  }
  sayAge(){
    return this.#sayName();
  }
}
const p = new Person('hmm');
console.log(p.sayAge());
```

## 类的私有属性

ES5中实现私有属性的方法：使用#定义私有属性。

``` js
class Person{
  #name;
  constructor(name){
    this.#name = name;
  }
  sayName(){
    return this.#name;
  }
}
const p = new Person('hmm');
console.log(p.sayName());
```

## 类的私有字段

ES5中实现私有字段的方法：使用#定义私有字段。

``` js
class Person{
  #name;
  constructor(name){
    this.#name = name;
  }
  sayName(){
    return this.#name;
  }
}
const p = new Person('hmm');
console.log(p.sayName());
```