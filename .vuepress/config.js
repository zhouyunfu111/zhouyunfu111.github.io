module.exports = {
  "title": "zhouyunfu",
  "description": "",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  plugins: [
    [
      "@vuepress-reco/kan-ban-niang",
      {
        "theme": ["blackCat","whiteCat"],
        "clean": true,
        "width": 200,
        "height": 220,
        "modelStyle":{right: '10px',bottom: '0'}
      }
    ],
    [
      "meting",
      {
        meting: {
          auto: 'https://music.163.com/playlist?id=2004526164'
        },
        aplayer: {
          fixed: true,
          mini: true,
        }
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "subSidebar": 'auto', // 详情页右侧菜单栏
    valineConfig: {
      appId: '6IQgUQRj724d18tNK272WegB-gzGzoHsz',// valineConfig your appId
      appKey: 'X2OdmO3esgrgbDSkkXvuyQJx', // valineConfig your appKey
    },
    "nav": [
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date",
      },
      // {
      //   "text": "Docs",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "vuepress-reco",
      //       "link": "/docs/theme-reco/"
      //     }
      //   ]
      // },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/zhouyunfu111",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 1,
        "text": "Category"
      },
      "tag": {
        "location": 2,
        "text": "Tag"
      }
    },
    // "socialLinks": [     // 信息栏展示社交信息
    //   { icon: 'reco-github', link: 'https://github.com/zhouyunfu111' }
    // ],
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/avatar.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "",
    "authorAvatar": "/avatar.jpg",
    // "record": "xxxx", 备案号
    "startYear": "zhouyunfu 2019"
  },
  "markdown": {
    "lineNumbers": true
  }
}