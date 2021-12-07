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

## 基础类型
### 布尔值

最基本的数据类型就是简单的true/false值，在JavaScript和TypeScript里叫做boolean（其它语言中也一样）。
``` js
let isDone: boolean = false;
```
### 数字

和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是 number。 除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量。
``` js
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
```
### 字符串

JavaScript程序的另一项基本操作是处理网页或服务器端的文本数据。 像其它语言里一样，我们使用 string表示文本数据类型。 和JavaScript一样，可以使用双引号（ "）或单引号（'）表示字符串。

``` js
let name: string = "bob";
name = "smith";
```
你还可以使用模版字符串，它可以定义多行文本和内嵌表达式。 这种字符串是被反引号包围（ `），并且以${ expr }这种形式嵌入表达式

``` js
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.

I'll be ${ age + 1 } years old next month.`;
```

### 数组

TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：

``` js
let list: number[] = [1, 2, 3];
```

第二种方式是使用数组泛型，Array<元素类型>：
``` js
let list: Array<number> = [1, 2, 3];
```
### 元组 Tuple

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同，比如，你可以定义一对值分别为string和number类型的元组
``` js
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
```

当访问一个已知索引的元素，会得到正确的类型
``` js
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
```
当访问一个越界的元素，会使用联合类型替代：
``` js
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

x[6] = true; // Error, 布尔不是(string | number)类型
```

### 枚举
enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
``` js
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：

``` js
num Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
```
或者，全部都采用手动赋值:
``` js
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
```
枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：
``` js
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2
```

## Any

有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：

``` js
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```
对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 你可能认为 Object有相似的作用，就像它在其它语言中那样。 但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：

## Void

某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
``` js
function warnUser(): void {
  console.log("This is my warning message");
}
```
声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
``` js
let unusable: void = undefined;
```

## Null 和 Undefined

TypeScript里，`undefined`和`null`两者各自有自己的类型分别叫做`undefined`和`null`。 和 `void`相似，它们的本身的类型用处不是很大：
``` js
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```
默认情况下`null`和`undefined`是所有类型的子类型。 就是说你可以把 `null`和`undefined`赋值给`number`类型的变量。

## Never

never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

下面是一些返回never类型的函数：

``` js
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```
## Object

object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。

使用object类型，就可以更好的表示像Object.create这样的API。例如：

``` js
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

## 类型断言

有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。

类型断言有两种形式。 其一是“尖括号”语法：

``` js
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

另一个为as语法：

``` js
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```





