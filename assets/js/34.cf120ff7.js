(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{630:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v("此篇文章作为学习笔记，部分参考于网上资料")])]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("最近接触一个项目要用 "),a("code",[t._v("uniapp")]),t._v(" 做一个移动端双平台的(安卓 和 IOS),之前没有用过"),a("code",[t._v("uniapp")]),t._v("开发移动端，正好学习一下，记录一下项目中的各种问题")]),t._v(" "),a("h2",{attrs:{id:"什么是-uniapp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-uniapp"}},[t._v("#")]),t._v(" 什么是 uniapp?")]),t._v(" "),a("p",[a("code",[t._v("uniapp")]),t._v("是一个使用 "),a("code",[t._v("Vue.js")]),t._v(" 开发所有前端应用的框架，开发者编写一套代码，可发布到 "),a("code",[t._v("iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用")]),t._v("等多个平台")]),t._v(" "),a("h2",{attrs:{id:"快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),a("p",[t._v("uni-app 支持通过 可视化界面、vue-cli 命令行 两种方式快速创建项目。")]),t._v(" "),a("h3",{attrs:{id:"通过-hbuilderx-可视化界面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-hbuilderx-可视化界面"}},[t._v("#")]),t._v(" 通过 HBuilderX 可视化界面")]),t._v(" "),a("p",[t._v("可视化的方式比较简单，HBuilderX 内置相关环境，开箱即用，无需配置 nodejs。")]),t._v(" "),a("p",[t._v("开始之前，开发者需先下载安装如下工具：")]),t._v(" "),a("ul",[a("li",[t._v("HBuilderX：官方 IDE 下载地址")])]),t._v(" "),a("p",[t._v("HBuilderX 是通用的前端开发工具，但为 uni-app 做了特别强化。")]),t._v(" "),a("h3",{attrs:{id:"通过-vue-cli-命令行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-vue-cli-命令行"}},[t._v("#")]),t._v(" 通过 vue-cli 命令行")]),t._v(" "),a("p",[a("strong",[t._v("环境安装")])]),t._v(" "),a("p",[t._v("全局安装 vue-cli")]),t._v(" "),a("div",{staticClass:"language-git line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("npm install -g @vue/cli\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("创建 uni-app")]),t._v("\n使用正式版（对应 HBuilderX 最新正式版）")]),t._v(" "),a("div",{staticClass:"language-git line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[t._v("vue create -p dcloudio/uni-preset-vue my-project\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("使用 alpha 版（对应 HBuilderX 最新 alpha 版）")]),t._v(" "),a("h2",{attrs:{id:"开发中遇到的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发中遇到的问题"}},[t._v("#")]),t._v(" 开发中遇到的问题")]),t._v(" "),a("h3",{attrs:{id:"uniapp-使用-font-awesome-编译后报错-图标不显示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uniapp-使用-font-awesome-编译后报错-图标不显示"}},[t._v("#")]),t._v(" uniapp 使用 font-awesome 编译后报错，图标不显示")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"title"}),a("p",[a("code",[t._v("错误提示：App 平台 v3 模式暂不支持在 js 文件中引用'font-awsome'请改在 style 内引用")])])]),a("p",[t._v("解决方法：\n百度搜索"),a("code",[t._v("uniapp引入阿里图标库iconfont的三种方式")])]),t._v(" "),a("p",[t._v("1、下载 font class 文件至本地")]),t._v(" "),a("p",[t._v("2、解压后，将字体文件.ttf,.woff,.woff2 和 iconfont.css 一起拷贝到 static 目录下")]),t._v(" "),a("p",[t._v("3、修改 iconfont.css 文件（非常重要），在 url 中添加 "),a("code",[t._v("~@/static")])]),t._v(" "),a("h3",{attrs:{id:"苹果-ios-端-时间日期格式不支持存在-符号-否则会获取不到正确的时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#苹果-ios-端-时间日期格式不支持存在-符号-否则会获取不到正确的时间"}},[t._v("#")]),t._v(" 苹果(ios 端)时间日期格式不支持存在"),a("code",[t._v("“-”")]),t._v("符号,否则会获取不到正确的时间")]),t._v(" "),a("p",[t._v("解决方法：")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("“/”")]),t._v("替代"),a("code",[t._v("“-”")]),t._v("后可以正确获取到时间戳")]),t._v(" "),a("h3",{attrs:{id:"打包后提示本应用使用-hbuilderx-3-1-12-或对应的-cli-版本编译-而手机端-sdk-版本是-3-1-13-不匹配的版本可能造成应用异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包后提示本应用使用-hbuilderx-3-1-12-或对应的-cli-版本编译-而手机端-sdk-版本是-3-1-13-不匹配的版本可能造成应用异常"}},[t._v("#")]),t._v(" 打包后提示本应用使用 HBuilderX 3.1.12 或对应的 cli 版本编译，而手机端 SDK 版本是 3.1.13，不匹配的版本可能造成应用异常")]),t._v(" "),a("p",[t._v("HBuilderX1.7.0 及以上版本 uni-app 添加了运行环境版本和编译环境版本的校验机制，当两个版本不一致时会弹出如上弹框的提示。")]),t._v(" "),a("p",[a("strong",[t._v("什么时候会出现这种问题")]),t._v("\n情况 1：HBuilderX 版本很老，或 cli 编译器一直没升级，而云打包服务器已经升级，此时编译环境版本低，而运行环境版本高，就会报错。")]),t._v(" "),a("p",[t._v("情况 2：使用老版 HBuilderX 打包了 App 后，后来使用新版 HBuilderX 或新版 cli 制作了 wgt 升级包。此时编译环境会高于运行环境，也会报错。")]),t._v(" "),a("p",[t._v("情况 3：使用了 cli 或自定义基座或本地打包，虽然 HBuilderX 升级了，但这些配套并没有手动升级，也是报错。")]),t._v(" "),a("p",[t._v("情况 4：如果 HBuilderX 版本高于 SDK 版本，有可能是 HBuilderX 在升级时出现问题，手机端基座没有升级成功。如果是这种情况，在插件管理里卸载“真机运行插件”，然后重新安装这个插件。")]),t._v(" "),a("p",[t._v("解决方法：")]),t._v(" "),a("p",[t._v("1、比较简单的就是全部升级，保持 HBuilderX、自定义基座、cli 项目编译器都是最新版。")]),t._v(" "),a("p",[t._v("2、wgt 升级时遇到这个问题，首先你可以自测，看老的运行引擎和新版编译器编的 wgt 是否搭配，如果测试有问题，那不能使用 wgt 升级，请使用整包升级。")]),t._v(" "),a("p",[t._v('如果测试正常，可以在 manifest.json 文件的源码视图中配置忽略这个提醒，在“app-plus”->"compatible" 节点下添加配置 方式如下：')]),t._v(" "),a("p",[t._v("HBuilderX1.9.0 及以上版本新增以下配置避免弹出提示框。")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"app-plus"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compatible"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ignoreVersion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true表示忽略版本检查提示框，HBuilderX1.9.0及以上版本支持")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//....")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("以下方法可针对指定版本避免弹出提示框")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"app-plus"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compatible"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"runtimeVersion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.7.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//根据实际情况填写")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerVersion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.7.1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//根据实际情况填写")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//....")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h3",{attrs:{id:"苹果-ios-端-模板字符串-里面不能加空格和回车字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#苹果-ios-端-模板字符串-里面不能加空格和回车字符"}},[t._v("#")]),t._v(" 苹果(ios 端)模板字符串(``)里面不能加空格和回车字符")]),t._v(" "),a("p",[t._v("ios系统会模板字符串把回车和空格等都解析出来，在使用模板字符串时如果字符串里不需要空格和回车最好不要加，否则会解析错误")]),t._v(" "),a("p",[t._v("不要为了可读性和美观而加回车和空格，在ios系统会出问题")]),t._v(" "),a("h3",{attrs:{id:"苹果-ios-端-如何进行开发调式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#苹果-ios-端-如何进行开发调式"}},[t._v("#")]),t._v(" 苹果(ios 端)如何进行开发调式")]),t._v(" "),a("p",[t._v("1.首先要下载 "),a("a",{attrs:{href:"https://www.apple.com.cn/itunes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("iTunes"),a("OutboundLink")],1),t._v(",之前使用的版本是12.11.3.17")]),t._v(" "),a("p",[t._v("2.用数据线链接pc苹果手机，打开HBuilder X")]),t._v(" "),a("p",[t._v("3.在苹果手机里打开设置->信任可选项目->将HBuilder X设为信任项")]),t._v(" "),a("h3",{attrs:{id:"uniapp里view组件不能使用ref配合this-refs获取到节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uniapp里view组件不能使用ref配合this-refs获取到节点"}},[t._v("#")]),t._v(" uniapp里view组件不能使用ref配合this.$refs获取到节点")]),t._v(" "),a("p",[t._v("小程序和App平台不能引用 view 等内置组件。")]),t._v(" "),a("p",[t._v("可以使用"),a("code",[t._v("uni.createSelectorQuery()")]),t._v("uni自带的选择节点方法")]),t._v(" "),a("h3",{attrs:{id:"在uniapp使用静态资源路径时使用-符号代替根目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在uniapp使用静态资源路径时使用-符号代替根目录"}},[t._v("#")]),t._v(" 在uniapp使用静态资源路径时使用@符号代替根目录")]),t._v(" "),a("p",[t._v("推荐使用@符号来代替相对路径，使用@/static/images/goodsSort/icon-down.png。")]),t._v(" "),a("p",[t._v("如果用到模板字符串，可使用require("),a("code",[t._v("@/static/images/goodsSort/icon-down.png")]),t._v(")")]),t._v(" "),a("h3",{attrs:{id:"使用plus-downloader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用plus-downloader"}},[t._v("#")]),t._v(" 使用plus.downloader.\\")]),t._v(" "),a("p",[t._v("plus.downloader.createDownload下载会在data/media/0/android/data/uni.(打包时的appid)/_dwnloads目录下面存在，如不删除会一直占据存储空间")]),t._v(" "),a("p",[t._v("建议安装完之后使用plus.io.resolveLocalFileSystemURL删除")]),t._v(" "),a("h3",{attrs:{id:"ios的实现热更新替代方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios的实现热更新替代方案"}},[t._v("#")]),t._v(" ios的实现热更新替代方案")]),t._v(" "),a("p",[t._v("因为ios端的限制，发布新版本必须要上架苹果商店进行审核。软件应用内无法像安卓端实现整包和更新或是增量更新，可以当新版本通过审核时弹出更新提示，用户点击确定之后，使用链接跳到苹果应用商店自动进行更新版本。")]),t._v(" "),a("h3",{attrs:{id:"scroll-view组件无法设置滚动条位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scroll-view组件无法设置滚动条位置"}},[t._v("#")]),t._v(" scroll-view组件无法设置滚动条位置")]),t._v(" "),a("p",[t._v("直接更改"),a("code",[t._v("scroll-top")]),t._v("的值无法让scroll-view滚动到指定位置，必须按照官方示例来")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scrollTop")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("old")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scrollTop")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("methods")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("upper")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("lower")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("scroll")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("old"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("goTop")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("old"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      uni"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showToast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("icon")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"纵向滚动 scrollTop 值已被修改为 0"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br")])]),a("h2",{attrs:{id:"uniapp想用安装包做程序覆盖更新-可是安装之后-在手机上会出现两个相同名称的软件-不会覆盖之前装的软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uniapp想用安装包做程序覆盖更新-可是安装之后-在手机上会出现两个相同名称的软件-不会覆盖之前装的软件"}},[t._v("#")]),t._v(" uniapp想用安装包做程序覆盖更新，可是安装之后，在手机上会出现两个相同名称的软件，不会覆盖之前装的软件")]),t._v(" "),a("p",[t._v("因为uni-app的应用标识(appid)没有统一导致系统会认为这是一个新的软件，不会覆盖安装。解决办法：使用统一的appid，不要随意更改appid，否则会导致热更新失败，或者插件失效等问题。")]),t._v(" "),a("h2",{attrs:{id:"使用uniapp真机调式报错request-fail-abort-statuscode-1-java-security-cert-certpathvalidatorexception-trust-a"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用uniapp真机调式报错request-fail-abort-statuscode-1-java-security-cert-certpathvalidatorexception-trust-a"}},[t._v("#")]),t._v(" 使用uniapp真机调式报错"),a("code",[t._v("request:fail abort statusCode:-1 java.security.cert.CertPathValidatorException: Trust a")])]),t._v(" "),a("p",[t._v("最近使用uni.request请求升级服务器报错了,去网上搜索说是服务器端的证书问题。参考说是有些CA的中间证书下载地址因为种种原因被“墙”掉了，也会")]),t._v(" "),a("p",[t._v("造成我们无法获得中间证书，进而无法建立可信链接。"),a("a",{attrs:{href:"https://www.myssl.cn/home/article-0406-42.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("myssl"),a("OutboundLink")],1),t._v("。但后面排查发现切换")]),t._v(" "),a("p",[t._v("wifi后居然可以正常访问。最后发现这个可能和阿里云服务器有关，可能生成的域名证书有问题。")]),t._v(" "),a("h2",{attrs:{id:"在app端使用tolocalestring去转换date对象时和浏览器生成的字符格式不一样"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在app端使用tolocalestring去转换date对象时和浏览器生成的字符格式不一样"}},[t._v("#")]),t._v(" 在app端使用toLocaleString去转换Date对象时和浏览器生成的字符格式不一样")]),t._v(" "),a("p",[t._v("在app端去使用toLocaleString转换Date时间对象时，发现和浏览器生成的字符会不一样,app端转换后为 `Wed Apr 20 2022 10:24:48 GMT")]),t._v(" "),a("p",[t._v("+0800 (CST)`。所以在app端使用toLocaleString转换字符去做操作的时候要注意")]),t._v(" "),a("h2",{attrs:{id:"uniapp的scroll-view在使用时必须设定一个固定的高度-不能设定100-这种-在低端机上面会出现性能问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uniapp的scroll-view在使用时必须设定一个固定的高度-不能设定100-这种-在低端机上面会出现性能问题"}},[t._v("#")]),t._v(" uniapp的scroll-view在使用时必须设定一个固定的高度，不能设定100%这种，在低端机上面会出现性能问题")]),t._v(" "),a("p",[t._v("最近用scroll-view组件使用了flex布局然后设置百分比的高度，在低端机上面出现了不能滑动的bug，排查后发现是scroll-view组件不能用百分比的高度，必须设置一个固定高度才行")]),t._v(" "),a("h2",{attrs:{id:"小程序跳转公众号的三种方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序跳转公众号的三种方法"}},[t._v("#")]),t._v(" 小程序跳转公众号的三种方法")]),t._v(" "),a("p",[t._v("方法1: 直接放个公众号二维码, 在小程序里长按识别, 就能跳了 (最简单)")]),t._v(" "),a("p",[t._v("方法2:  公众号组件"),a("official-account"),t._v(" 跳转 (场景有要求)")],1),t._v(" "),a("p",[t._v("方法3:  webview内嵌的公众号链接, 可以直接跳 (需要配置下)")]),t._v(" "),a("h2",{attrs:{id:"uniapp在小程序使用picker组件时-如果picker组件滑动太快会导致选中的值与实际获得值不一样"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uniapp在小程序使用picker组件时-如果picker组件滑动太快会导致选中的值与实际获得值不一样"}},[t._v("#")]),t._v(" uniapp在小程序使用picker组件时，如果picker组件滑动太快会导致选中的值与实际获得值不一样")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("场景：小程序一个新增门店信息里面有一个选择城市组件，选择城市组件使用的是picker组件，在安卓端滑动选择城市时，如果滑动速度过快会导致选择的城市与实际获得的城市不一样，最后导致新增门店信息失败。排查发现是picker组件在安卓端滑动过快时，会导致picker组件的值与实际获得值不一样，最后导致新增门店信息失败。")])]),t._v(" "),a("li",[a("p",[t._v("解决办法：")])])]),t._v(" "),a("p",[t._v("1.使用picker-view组件，或是使用Uview的picker组件，这两个组件在安卓端滑动过快时，不会出现上述问题。")]),t._v(" "),a("p",[t._v("2.在安卓端使用picker组件时，设置一个定时器，每次滑动时都清除定时器，然后重新设置定时器，当定时器执行时，获取picker组件的值，然后设置picker组件的值，这样就可以避免picker组件滑动过快导致的问题。")]),t._v(" "),a("h2",{attrs:{id:"uniapp-h5项目使用uni-getlocation-api-type的值为gcj02时-在本地浏览没有问题-但是在正式环境报错getlocation-fail-translategeo-fai"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uniapp-h5项目使用uni-getlocation-api-type的值为gcj02时-在本地浏览没有问题-但是在正式环境报错getlocation-fail-translategeo-fai"}},[t._v("#")]),t._v(" uniapp h5项目使用uni.getLocation()API，type的值为gcj02时，在本地浏览没有问题，但是在正式环境报错"),a("code",[t._v("getLocation:fail translateGeo fai")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("场景：在uniapp h5项目使用uni.getLocation()API，type的值为gcj02时，在本地浏览没有问题，但是在正式环境报错"),a("code",[t._v("getLocation:fail translateGeo fai")])])]),t._v(" "),a("li",[a("p",[t._v("解决办法：")])])]),t._v(" "),a("p",[t._v("使用type的值为wgs84，这样就可以避免这个问题。")])])}),[],!1,null,null,null);s.default=e.exports}}]);