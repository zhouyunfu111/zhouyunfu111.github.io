---

categories:
  - coding
tags:
  - vue
date: 2020-1-7
title: vue开发需要注意的问题!
---

## 父子组件传递props


## `Prop` 定义
**Prop 定义应该尽量详细。**

在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。
``` js
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```
## 为 `v-for` 设置键值
总是用 `key` 配合 `v-for`。

在组件上总是必须用 `key` 配合 `v-for`，以便维护内部组件及其子树的状态。甚至在元素上维护可预测的行为，比如动画中的对象固化 (object constancy)，也是一种好的做法。

``` js
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
## 避免`v-if` 和 `v-for` 用在一起

`v-for`和`v-if`避免在同一节点上使用，永远不要把 v-if 和 v-for 同时用在同一个元素上。

::: tip
一般我们在两种常见的情况下会倾向于这样做：

为了过滤一个列表中的项目 (比如 v-for="user in users" v-if="user.isActive")。在这种情形下，请将 users 替换为一个计算属性 (比如 activeUsers)，让其返回过滤后的列表。

为了避免渲染本应该被隐藏的列表 (比如 v-for="user in users" v-if="shouldShowUsers")。这种情形下，请将 v-if 移动至容器元素上 (比如 ul, ol)。
:::

## data应该使用`return`返回

不使用`return`包裹的数据会在项目的全局可见，会造成变量污染；使用`return`包裹后数据中变量只在当前组件中生效，不会影响其他组件。

::: tip
当一个组件被定义， `data` 必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例。如果 `data` 仍然是一个纯粹的对象，则所有的实例将共享引用同一个数据对象！通过提供 `data` 函数，每次创建一个新实例后，我们能够调用 `data` 函数，从而返回初始数据的一个全新副本数据对象。
:::

## 由于 JavaScript 的限制，Vue 不能检测到以下数组的变动

- 当你利用索引直接设置一个数组项时，例如：`vm.items[indexOfItem] = newValue`

- 当你修改数组的长度时，例如：`vm.items.length = newLength`

为了解决第一个问题，Vue 提供了以下操作方法：

``` js
// Vue.set
Vue.set(vm.items, indexOfItem, newValue)
// vm.$set，Vue.set的一个别名
vm.$set(vm.items, indexOfItem, newValue)
// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)
```

为了解决第二个问题，Vue 提供了以下操作方法：

``` js
// Array.prototype.splice
vm.items.splice(newLength)
```

## 在使用vue绑定数据的时候，渲染页面时会出现变量闪烁

**解决办法**:

给最外层的标签 加上 `v-cloak`

``` css
[v-cloak]{
  display:none !important;
}
```

如果没用可能是`[v-cloak]{　display:none } `的层级被覆盖掉了,你需要提高它的层级 `[v-cloak]{display:none !important}` 也有可能你把它放进了`@import`引入的`css`文件中 ， 它放在`@import`引入的文件的是没有作用的，你可以放在link引入的文件来使用，或者直接写在页面的标签中！


## 子组件中修改props值报错的解决办法

所有的 `prop` 都使得其父子 `prop` 之间形成了一个单向下行绑定：父级 `prop` 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。

额外的，每次父级组件发生更新时，子组件中所有的 `prop` 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 `prop`。如果你这样做了，`Vue` 会在浏览器的控制台中发出警告。

**解决办法**：

1. 父组件使用`v-model`绑定`props`值(vue3.0)或者使用修饰符`sync`

2. 在子组件里用`computed`监听`props`的值




