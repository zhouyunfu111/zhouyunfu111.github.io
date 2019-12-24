// .vuepress/config.js

module.exports = {
  base: '/zhouyunfu111.github.io/',
  // 网站 Title
  title: 'cloudfloat Blog',

  // 网站描述
  description: 'This is my blog',
  //自定义<head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/assets/img/avatar.jpg' }]
  ],
  // 网站语言
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },

  // 使用的主题
  theme: 'meteorlxy',

  // 主题配置
  themeConfig: { 
    
    // 主题语言，参考下方 [主题语言] 章节
    lang: Object.assign(require('vuepress-theme-meteorlxy/lib/langs/zh-CN'), {
      home: '事常与人违，事总在人为',
      posts: '韬光养晦,厚积薄发', 
    }),

    
    // 个人信息（没有或不想设置的，删掉对应字段即可）
    personalInfo: {
      // 昵称
      nickname: 'cloudfloat',

      // 个人简介
      description: 'Not everything that is faced can be changed, but nothing can be changed until it is faced.',

      // 电子邮箱
      email: '1301964096@qq.com',

      // 所在地
      location: 'Chang\'sha city, China',

      // 组织
      organization: '',

      // 头像
      // 设置为外部链接
      avatar: '/assets/img/avatar.jpg',
      // 或者放置在 .vuepress/public 文件夹，例如 .vuepress/public/img/avatar.jpg
      // avatar: '/img/avatar.jpg',
      

      // 社交平台帐号信息
      sns: {
        // Github 帐号和链接
        github: {
          account: 'zhouyunfu111',
          link: 'https://github.com/zhouyunfu111',
        },
      },
    },

    // 上方 header 的相关设置
    header: {
      // header 的背景，可以使用图片，或者随机变化的图案（geopattern）
      background: {
        // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
        url:[ '/assets/img/vn.jpg','/assets/img/hzw.jpg'],

        // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
        //useGeo: true,
      },

      // 是否在 header 显示标题
      showTitle: true,
    },

    // 是否显示文章的最近更新时间
    lastUpdated: true,
    // 底部 footer 的相关设置 (可选)
    footer: {
      // 是否显示 Powered by VuePress
      poweredBy: true,

      // 是否显示使用的主题
      poweredByTheme: true,

      // 添加自定义 footer (支持 HTML)
      custom: '',
    },
    // 顶部导航栏内容
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Acticle', link: '/posts/', exact: false },
    ],

    // 评论配置，参考下方 [页面评论] 章节
    comments: false,

    // 分页配置
    pagination: {
      perPage: 5,
    },

    // 默认页面（可选，默认全为 true）
    defaultPages: {
      // 是否允许主题自动添加 Home 页面 (url: /)
      home: true,
      // 是否允许主题自动添加 Posts 页面 (url: /posts/)
      posts: true,
    },
  },
}