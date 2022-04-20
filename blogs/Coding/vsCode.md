---
categories:
  - coding
# tags:
#   - 图标
date: 2019-05-30
title: vsCode!
---

## 隐藏工作区中的 node_modules 文件夹

`主菜单:文件>首选项>用户设置`

```json
"files.exclude": {
    "node_modules/": true
}
```

[How do I hide certain files from the sidebar in Visual Studio Code?](https://stackoverflow.com/questions/30140112/how-do-i-hide-certain-files-from-the-sidebar-in-visual-studio-code/30142299#30142299)

## FiraCode 字体

[https://github.com/tonsky/FiraCode](https://github.com/tonsky/FiraCode)

## 插件

- [Atom One Dark Theme](https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark)
- [Flat UI](https://marketplace.visualstudio.com/items?itemName=lkytal.FlatUI)
- [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)
- [One Monokai Theme](https://marketplace.visualstudio.com/items?itemName=azemoh.one-monokai)
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
- [cssrem](https://github.com/cipchk/vscode-cssrem/blob/master/README.zh-CN.md)
- [Document This](href="https://marketplace.visualstudio.com/items?itemName=joelday.docthis")
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Full React/React Native/React Router/Redux/GraphQL/ES7/Testing/PropTypes snippets](https://marketplace.visualstudio.com/items?itemName=walter-ribeiro.full-react-snippets)
- [language-stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)
- [open in browser](https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser)
- [Sass](https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented)
- [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [VSCode Great Icons](https://marketplace.visualstudio.com/items?itemName=emmanuelbeziat.vscode-great-icons)
- [Vue 2 Snippets](https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets)
- [小程序助手](https://marketplace.visualstudio.com/items?itemName=debian001.app-migrator)
- [koroFileHeader](https://marketplace.visualstudio.com/items?itemName=OBKoro1.korofileheader)
- [Manta's Stylus Supremacy](https://marketplace.visualstudio.com/items?itemName=thisismanta.stylus-supremacy)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)

- 说明: 显示git上传记录, 文件修改的记录对比分支或者提交记录

- [background](https://marketplace.visualstudio.com/items?itemName=shalldie.background)

## 默认设置

```json
{
  "window.zoomLevel": 0,
  "workbench.iconTheme": "vscode-great-icons",
  "editor.fontLigatures": true,
  "editor.formatOnSave": true,
  "files.exclude": {
    "node_modules/": true
  },
  "editor.tabSize": 2,
  "terminal.integrated.profiles.windows": {
    "Git-Bash": {
      "path": "E:\\Git\\bin\\bash.exe"
    },
    "PowerShell": {
      "source": "PowerShell",
      "icon": "terminal-powershell"
    }
    // "Git Bash": {
    //     "source": "Git Bash",
    //     "path": "E:\\Git\\bin\\bash.exe"
    // }
  },
  "explorer.confirmDelete": false,
  "eslint.validate": ["javascript", "html", "vue"],
  "files.associations": {
    "*.vue ": "vue"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "vetur.format.defaultFormatterOptions": {
    "prettier": {
      "semi": false,
      "singleQuote": true
    },
    "prettyhtml": {
      "wrapAttributes": true,
      "sortAttributes": true
    }
  },
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "editor.fontFamily": "Fira Code",
  "editor.fontSize": 18,
  // 控制字体粗细。
  "editor.fontWeight": "normal",
  "terminal.integrated.fontFamily": "Fira Code",
  "editor.renderControlCharacters": true,
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "stylusSupremacy.insertColons": false, // 是否插入冒号
  "stylusSupremacy.insertSemicolons": false, // 是否插入分好
  "stylusSupremacy.insertBraces": false, // 是否插入大括号
  "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
  "stylusSupremacy.insertNewLineAroundBlocks": false,
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "workbench.colorTheme": "One Dark Pro",
  "terminal.integrated.automationShell.windows": "E:\\Git\\bin\\bash.exe",
  "terminal.integrated.defaultProfile.windows": "Git-Bash",
  "git.autofetch": true,
    "docthis.includeDescriptionTag": true,
        //background
    "background.enabled": true,
    "background.useDefault": false,
    "background.customImages": [
       // "file:///F:/img/wallhaven.jpg"
        "file:///F:/img/vn.jpg"
       // "file:///F:/img/4.jpeg"
    ],
    "background.style": {
        "content": "''",
        "pointer-events": "none",
        "position": "absolute",
        "z-index": "99999",
        "width": "100%",
        "height": "100%",
        "background-position": "center",
        "background-repeat": "no-repeat",
        "background-size": "100%,100%",
        "opacity": 0.20
    }
}
```
