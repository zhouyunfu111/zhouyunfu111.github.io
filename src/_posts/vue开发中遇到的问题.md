---
top: 1
category: 文章
# tags:
#   - 图标
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
## 避免` v-if` 和 `v-for` 用在一起

`v-for`和`v-if`避免在同一节点上使用，永远不要把 v-if 和 v-for 同时用在同一个元素上。

::: tip
一般我们在两种常见的情况下会倾向于这样做：

为了过滤一个列表中的项目 (比如 v-for="user in users" v-if="user.isActive")。在这种情形下，请将 users 替换为一个计算属性 (比如 activeUsers)，让其返回过滤后的列表。

为了避免渲染本应该被隐藏的列表 (比如 v-for="user in users" v-if="shouldShowUsers")。这种情形下，请将 v-if 移动至容器元素上 (比如 ul, ol)。
:::

