---
top: 1
category: Coding
# tags:
#   - 图标
date: 2019-05-30
title: vsCode!
---

## 隐藏工作区中的node_modules文件夹
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
## 默认设置
```json
{
    "window.zoomLevel": 0,
    "workbench.iconTheme": "vscode-great-icons",
    "editor.fontLigatures": false,
    "files.exclude": {
        "node_modules/": true
    },
    "editor.tabSize": 2,
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true, 
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
    "explorer.confirmDelete": false,  
    "eslint.validate": [
        "javascript",
        "html",
        "vue",
        {
            "language": "vue",
            "autoFix": true
        }
    ],
    "files.associations": {
        "*.vue ": "vue"
    },
    "search.location": "sidebar",
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "eslint.autoFixOnSave": true,
    },
    "editor.fontFamily": "Fira Code",
    "editor.fontSize": 18,
    // 控制字体粗细。
    "editor.fontWeight": "normal",
    "terminal.integrated.fontFamily": "monospace",
    "workbench.colorTheme": "One Dark Pro"
}
```