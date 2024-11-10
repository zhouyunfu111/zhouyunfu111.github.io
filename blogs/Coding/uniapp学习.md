---
categories:
  - coding
tags:
  - uniapp
date: 2022-04-20
title: uniapp学习!
---

**此篇文章作为学习笔记，部分参考于网上资料**

## 前言

最近接触一个项目要用 `uniapp` 做一个移动端双平台的(安卓 和 IOS),之前没有用过`uniapp`开发移动端，正好学习一下，记录一下项目中的各种问题

## 什么是 uniapp?

`uniapp`是一个使用 `Vue.js` 开发所有前端应用的框架，开发者编写一套代码，可发布到 `iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用`等多个平台

## 快速上手

uni-app 支持通过 可视化界面、vue-cli 命令行 两种方式快速创建项目。

### 通过 HBuilderX 可视化界面

可视化的方式比较简单，HBuilderX 内置相关环境，开箱即用，无需配置 nodejs。

开始之前，开发者需先下载安装如下工具：

- HBuilderX：官方 IDE 下载地址

HBuilderX 是通用的前端开发工具，但为 uni-app 做了特别强化。

### 通过 vue-cli 命令行

**环境安装**

全局安装 vue-cli

```git
npm install -g @vue/cli
```

**创建 uni-app**
使用正式版（对应 HBuilderX 最新正式版）

```git
vue create -p dcloudio/uni-preset-vue my-project
```

使用 alpha 版（对应 HBuilderX 最新 alpha 版）

## 开发中遇到的问题

### uniapp 使用 font-awesome 编译后报错，图标不显示

::: danger
`错误提示：App 平台 v3 模式暂不支持在 js 文件中引用'font-awsome'请改在 style 内引用`
:::

解决方法：
百度搜索`uniapp引入阿里图标库iconfont的三种方式`

1、下载 font class 文件至本地

2、解压后，将字体文件.ttf,.woff,.woff2 和 iconfont.css 一起拷贝到 static 目录下

3、修改 iconfont.css 文件（非常重要），在 url 中添加 `~@/static`

### 苹果(ios 端)时间日期格式不支持存在`“-”`符号,否则会获取不到正确的时间

解决方法：

使用`“/”`替代`“-”`后可以正确获取到时间戳

### 打包后提示本应用使用 HBuilderX 3.1.12 或对应的 cli 版本编译，而手机端 SDK 版本是 3.1.13，不匹配的版本可能造成应用异常

HBuilderX1.7.0 及以上版本 uni-app 添加了运行环境版本和编译环境版本的校验机制，当两个版本不一致时会弹出如上弹框的提示。

**什么时候会出现这种问题**
情况 1：HBuilderX 版本很老，或 cli 编译器一直没升级，而云打包服务器已经升级，此时编译环境版本低，而运行环境版本高，就会报错。

情况 2：使用老版 HBuilderX 打包了 App 后，后来使用新版 HBuilderX 或新版 cli 制作了 wgt 升级包。此时编译环境会高于运行环境，也会报错。

情况 3：使用了 cli 或自定义基座或本地打包，虽然 HBuilderX 升级了，但这些配套并没有手动升级，也是报错。

情况 4：如果 HBuilderX 版本高于 SDK 版本，有可能是 HBuilderX 在升级时出现问题，手机端基座没有升级成功。如果是这种情况，在插件管理里卸载“真机运行插件”，然后重新安装这个插件。

解决方法：

1、比较简单的就是全部升级，保持 HBuilderX、自定义基座、cli 项目编译器都是最新版。

2、wgt 升级时遇到这个问题，首先你可以自测，看老的运行引擎和新版编译器编的 wgt 是否搭配，如果测试有问题，那不能使用 wgt 升级，请使用整包升级。

如果测试正常，可以在 manifest.json 文件的源码视图中配置忽略这个提醒，在“app-plus”->"compatible" 节点下添加配置 方式如下：

HBuilderX1.9.0 及以上版本新增以下配置避免弹出提示框。

```json
"app-plus": {
    "compatible": {
        "ignoreVersion": true //true表示忽略版本检查提示框，HBuilderX1.9.0及以上版本支持
    },
    //....
}
```

以下方法可针对指定版本避免弹出提示框

```json
"app-plus": {
    "compatible": {
        "runtimeVersion": "1.7.0", //根据实际情况填写
        "compilerVersion": "1.7.1" //根据实际情况填写
    },
    //....
}
```
### 苹果(ios 端)模板字符串(``)里面不能加空格和回车字符

ios系统会模板字符串把回车和空格等都解析出来，在使用模板字符串时如果字符串里不需要空格和回车最好不要加，否则会解析错误

不要为了可读性和美观而加回车和空格，在ios系统会出问题

### 苹果(ios 端)如何进行开发调式

1.首先要下载 [iTunes](https://www.apple.com.cn/itunes/),之前使用的版本是12.11.3.17

2.用数据线链接pc苹果手机，打开HBuilder X

3.在苹果手机里打开设置->信任可选项目->将HBuilder X设为信任项

### uniapp里view组件不能使用ref配合this.$refs获取到节点

小程序和App平台不能引用 view 等内置组件。

可以使用`uni.createSelectorQuery()`uni自带的选择节点方法

### 在uniapp使用静态资源路径时使用@符号代替根目录

推荐使用@符号来代替相对路径，使用@/static/images/goodsSort/icon-down.png。

如果用到模板字符串，可使用require(`@/static/images/goodsSort/icon-down.png`)

### 使用plus.downloader.\

plus.downloader.createDownload下载会在data/media/0/android/data/uni.(打包时的appid)/_dwnloads目录下面存在，如不删除会一直占据存储空间

建议安装完之后使用plus.io.resolveLocalFileSystemURL删除

### ios的实现热更新替代方案

因为ios端的限制，发布新版本必须要上架苹果商店进行审核。软件应用内无法像安卓端实现整包和更新或是增量更新，可以当新版本通过审核时弹出更新提示，用户点击确定之后，使用链接跳到苹果应用商店自动进行更新版本。

### scroll-view组件无法设置滚动条位置

直接更改`scroll-top`的值无法让scroll-view滚动到指定位置，必须按照官方示例来
``` js
export default {
  data() {
    return {
        scrollTop: 0,
        old: {
            scrollTop: 0
        }
    }
  },
  methods: {
    upper: function(e) {
      console.log(e)
    },
    lower: function(e) {
      console.log(e)
    },
    scroll: function(e) {
      console.log(e)
      this.old.scrollTop = e.detail.scrollTop
    },
    goTop: function(e) {
      this.scrollTop = this.old.scrollTop
      this.$nextTick(() => {
          this.scrollTop = 0
      });
      uni.showToast({
          icon:"none",
          title:"纵向滚动 scrollTop 值已被修改为 0"
      })
    }
  }
}
```
## uniapp想用安装包做程序覆盖更新，可是安装之后，在手机上会出现两个相同名称的软件，不会覆盖之前装的软件

因为uni-app的应用标识(appid)没有统一导致系统会认为这是一个新的软件，不会覆盖安装。解决办法：使用统一的appid，不要随意更改appid，否则会导致热更新失败，或者插件失效等问题。


## 使用uniapp真机调式报错`request:fail abort statusCode:-1 java.security.cert.CertPathValidatorException: Trust a`

最近使用uni.request请求升级服务器报错了,去网上搜索说是服务器端的证书问题。参考说是有些CA的中间证书下载地址因为种种原因被“墙”掉了，也会

造成我们无法获得中间证书，进而无法建立可信链接。[myssl](https://www.myssl.cn/home/article-0406-42.html)。但后面排查发现切换

wifi后居然可以正常访问。最后发现这个可能和阿里云服务器有关，可能生成的域名证书有问题。


## 在app端使用toLocaleString去转换Date对象时和浏览器生成的字符格式不一样

在app端去使用toLocaleString转换Date时间对象时，发现和浏览器生成的字符会不一样,app端转换后为 `Wed Apr 20 2022 10:24:48 GMT

+0800 (CST)`。所以在app端使用toLocaleString转换字符去做操作的时候要注意


## uniapp的scroll-view在使用时必须设定一个固定的高度，不能设定100%这种，在低端机上面会出现性能问题


最近用scroll-view组件使用了flex布局然后设置百分比的高度，在低端机上面出现了不能滑动的bug，排查后发现是scroll-view组件不能用百分比的高度，必须设置一个固定高度才行


## 小程序跳转公众号的三种方法

方法1: 直接放个公众号二维码, 在小程序里长按识别, 就能跳了 (最简单)

方法2:  公众号组件<official-account></official-account> 跳转 (场景有要求)

方法3:  webview内嵌的公众号链接, 可以直接跳 (需要配置下)


## uniapp在小程序使用picker组件时，如果picker组件滑动太快会导致选中的值与实际获得值不一样

- 场景：小程序一个新增门店信息里面有一个选择城市组件，选择城市组件使用的是picker组件，在安卓端滑动选择城市时，如果滑动速度过快会导致选择的城市与实际获得的城市不一样，最后导致新增门店信息失败。排查发现是picker组件在安卓端滑动过快时，会导致picker组件的值与实际获得值不一样，最后导致新增门店信息失败。

- 解决办法：

1.使用picker-view组件，或是使用Uview的picker组件，这两个组件在安卓端滑动过快时，不会出现上述问题。

2.在安卓端使用picker组件时，设置一个定时器，每次滑动时都清除定时器，然后重新设置定时器，当定时器执行时，获取picker组件的值，然后设置picker组件的值，这样就可以避免picker组件滑动过快导致的问题。

## uniapp h5项目使用uni.getLocation()API，type的值为gcj02时，在本地浏览没有问题，但是在正式环境报错`getLocation:fail translateGeo fai`

- 场景：在uniapp h5项目使用uni.getLocation()API，type的值为gcj02时，在本地浏览没有问题，但是在正式环境报错`getLocation:fail translateGeo fai`

- 解决办法：

使用type的值为wgs84，这样就可以避免这个问题。




