---
categories:
  - coding
tags:
  - js
date: 2019-06-03
title: nextTick!
---

## 原理

- nextTick 是基于 JavaScript 的异步回调任务队列实现的。它利用了微任务（microtask）机制，将回调函数添加到微任务队列中，确保在当前任务执行完成后立即执行这些微任务。

- Vue.js 的 nextTick 实现主要依赖于 Promise 和 MutationObserver。如果环境支持 Promise，则使用 Promise.then 和 Promise.resolve 来实现 nextTick。否则，如果支持 MutationObserver，则通过创建一个 MutationObserver 实例来监听数据变化，从而触发回调函数。此外，如果这些方法都不支持，nextTick 会回退使用 setTimeout。

## 作用

- nextTick 用于在 DOM 更新之后执行回调函数。由于 Vue 的异步更新策略，当数据发生变化时，Vue 不会立即更新 DOM，而是将更新任务放入队列中，等待下一个事件循环迭代时再进行更新。

- 使用 nextTick 可以确保在视图更新之后再获取或修改 DOM 元素，避免因数据尚未更新而导致的错误操作。

- 在某些情况下，比如当 DOM1 的数据发生变化，而 DOM2 需要从 DOM1 中获取数据时，使用 nextTick 可以确保 DOM2 获取的是最新的数据，避免因 DOM 未更新而导致的视图错误。

## 使用场景

- 当需要基于最新数据生成的 DOM 进行操作时，比如动态生成文本框或实现自动聚焦功能。

- 在使用第三方库（如 swiper）时，需要等待挂载的 DOM 生成后再生成 swiper 对象，以确保库能够正确地操作 DOM。