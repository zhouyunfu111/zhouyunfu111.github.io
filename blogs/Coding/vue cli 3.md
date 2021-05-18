---

categories:
  - coding
tags:
  - vue
date: 2019-05-30
title: Vue cli 3!
---

安装与运行

``` git
npm install -g @vue/cli
# OR
yarn global add @vue/cli

# 检测版本号
vue --version

# 使用vue cli 搭建项目
vue create hello-world
```

::: git
创建的时候 你会被提示选取一个 `preset`。你可以选默认的包含了基本的 `Babel + ESLint` 设置的 `preset`，也可以选“手动选择特性”来选取需要的特性。
:::

``` git
Vue CLI v3.0.0-rc.5
? Please pick a preset: (Use arrow keys)
 >default (babel, eslint)
  Manually select features
```

运行项目

``` git
cd hello-world
yarn run serve
```

文件目录

``` git
`hello-world`
├── `public` _(**公共文件**)_
│     ├── favicon.ico _(**ico图标**)_
│     └──index.html _(**首页入口文件**)_
├── `src`
│     ├──`assets` _(**资源目录**)_
│     └──`components` _(**组件**)_
├── package.json
├── .gitignore
├── babel.config.js
├── README.md
└── yarn.lock
```
在现有的项目中安装插件

``` git
vue add @vue/eslint
# or 
vue ui
```

插件

其实这些插件是放在了 npm 中的，和其他模块类似。下面是从尤大的npm中找到的插件包：

- @vue/cli-plugin-babel
- @vue/cli-plugin-e2e-cypress
- @vue/cli-plugin-e2e-nightwatch
- @vue/cli-plugin-eslint
- @vue/cli-plugin-typescript
- @vue/cli-plugin-pwa
- @vue/cli-plugin-unit-mocha
- @vue/cli-plugin-unit-jest
- @vue/cli-service 这个项目存放了 vue add router 和 vue add vuex 命令的模板项目。
这些插件项目源码都包含在 vue-cli 项目中。 所以，插件包这东西得从 npm 找，或者自己写插件

vue cil 打包优化
11M => 3.3M

``` git
productionSourceMap: process.env.NODE_ENV !== 'production',
```                       