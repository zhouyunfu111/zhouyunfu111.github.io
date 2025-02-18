---
categories:
  - coding
tags:
  - react
date: 2019-05-30
title: react学习!
---

## React 安装

你可以直接使用 Staticfile CDN 的 React CDN 库，地址如下：
``` js
<script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
<script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
<!-- 生产环境中不建议使用 -->
<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
```
官方提供的 CDN 地址：
``` js
script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<!-- 生产环境中不建议使用 -->
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
```
## 通过 npm 使用 React

我们建议在 React 中使用 CommonJS 模块系统，比如 browserify 或 webpack，本教程使用 webpack。

国内使用 npm 速度很慢，你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:
``` git
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
$ npm config set registry https://registry.npm.taobao.org
```

这样就可以使用 cnpm 命令来安装模块了：

``` git
$ cnpm install [name]
```

## react中的组件
react中的组件分为函数组件和类组件
### 函数组件
``` js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
### 类组件
``` js
class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
## react中的事件
react中的事件和原生事件类似，但是有一些区别，比如在react中事件名称需要使用驼峰命名法，并且需要通过{}来包裹事件处理函数
``` js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    console.log('点击了按钮');
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        点击按钮
      </button>
    );
  }
}
```
## react中的状态
react中的状态是通过this.state来获取的，可以通过this.setState来更新状态，但是不能直接修改状态，需要通过this.setState来更新状态
``` js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    // 这个绑定是必要的，使`this`在回调中起作用
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```
## react中的属性
react中的属性是通过props来获取的，可以通过this.props来获取属性，但是不能直接修改属性,需要通过this.setState来更新属性
``` js
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.handClick = this.handClick.bind(this)
  }
  handClick() {
    this.setState({
      name: 'aaa'
    })
  }
  render() {
    return <h1 onClick={handClick}>Hello, {this.props.name}</h1>;
  }
}
ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting name="abc" />,
  document.getElementById('root')
);
```
## react中的条件渲染
react中的条件渲染是通过if语句来实现的，可以通过if语句来判断是否渲染某个组件
``` js
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);

```
