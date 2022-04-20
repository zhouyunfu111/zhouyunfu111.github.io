---

categories:
  - coding
tags:
  - vue
date: 2019-05-30
title: vue3碰到的问题 !
---

## vue3+ts声明全局过滤器后，在编辑器内使用报ts错误
挂载全局属性和方法，使用app.config.globalProperties， 但是在组件中获取全局上下文的时候getCurrentInstance会报错。

在main.js中
``` js 
import { createApp } from 'vue'
import App from "./App.vue"
// 初始化
improt api from '@/utils/api'

const app = createApp(app) 
app.config.globalProperties.$asyncPost = api.nextPost

app.mount('#app')
```
页面中：

``` js
<template>
<div class='container'>
  <div>获取全局</div>
</div>
</template>
```

<script>
import { getCurrentInternce } from 'vue'
export default {
  componets: {

  },
  setup (){
    const instance = getCurrentInterance()
    console.log('instance', instance.appContext.config.globalProperties)
    return {}
  }
}
</script>