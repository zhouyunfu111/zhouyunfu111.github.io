---

categories:
  - coding
tags:
  - nuxt
date: 2019-06-03
title: 使用nuxt遇到的问题!
---

## 持久化存储

[Nuxt with Vuex persisted state (localStorage)](https://github.com/nuxt/nuxt.js/tree/dev/examples/vuex-persistedstate?tdsourcetag=s_pctim_aiomsg)


## sitemap-module

[@nuxtjs/sitemap](https://www.npmjs.com/package/@nuxtjs/sitemap)

## `[Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>;, or missing <tbody>. Bailing hydration and performing full client-side render.`

- 将所有`dom`操作移动到`mounted`的生命周期钩子

- 使用`<no-ssr></no-ssr>`包裹dom

``` js
<no-ssr>
  ...
</no-ssr>
```

## nuxt 路由鉴权

- 官网示例采用的是使用 Express 和 Sessions

- 由于太懒 决定纯前端实现
  - 1 step
  `plugins/after-each.js` 
  ``` js
  export default async ({ app }) => {
    app.router.afterEach((to, from) => {
      const token = app.$cookies.get('token')
      if(token) {
        app.store.commit('user/SET_TOKEN', token)
      } else {
        app.store.dispatch('user/removerToken')
      }
    })
  }
   
  ```
  - 2 step
 `nuxt.config.js`
  ``` js
    ...
    plugins: [
      { src: '~/plugins/after-each.js', ssr: false } 
    ]
    ...
  ```
  - asyncData时拿取token

  ``` js
    async asyncData({$axios, req }) {
      function getItem(cookie, sKey) {
          return decodeURIComponent(cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
      }
      getItem(req.headers.cookie, 'token')
    }
  ```

## 使用ssr后遇到新闻列表页，使用翻页会有问题

- 点击翻页后数据虽然会变，但对应的html标签没有重新生成，导致翻页过后的内容seo爬虫无法爬取到

- 解决方案：使用`<no-ssr>`包裹需要ssr的dom
``` js
<no-ssr>
  <div class="news-list">
    ...
  </div>
</no-ssr>
``` 
