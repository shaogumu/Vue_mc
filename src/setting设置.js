{
  "security.workspace.trust.untrustedFiles": "open",
  "[html]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}


{
    // vscode默认启用了根据文件类型自动设置tabsize的选项
    "editor.detectIndentation": false,
    "editor.fontSize": 20,
    // 重新设定tabsize
    "editor.tabSize": 2,
    // #值设置为true时，每次保存的时候自动格式化；值设置为false时，代码格式化请按shift+alt+F
    "editor.formatOnSave": false,
    //  #去掉代码结尾的分号
    "prettier.semi": false,
    //  #使用带引号替代双引号
    "prettier.singleQuote": true,
    "prettier.tabWidth": 2,
    //  #让函数(名)和后面的括号之间加个空格
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  
    // #这个按用户自身习惯选择
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    // #让vue中的js按"prettier"格式进行格式化
    "vetur.format.defaultFormatter.js": "prettier",
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            // #vue组件中html代码格式化样式
            "wrap_attributes": "force-aligned", //也可以设置为“auto”，效果会不一样
            "wrap_line_length": 200,
            "end_with_newline": false,
            "semi": false,
            "singleQuote": true
        },
        "prettier": {
            "semi": false,
            "singleQuote": true
        }
    },
    "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    // 格式化stylus, 需安装Manta's Stylus Supremacy插件
    "stylusSupremacy.insertColons": false, // 是否插入冒号
    "stylusSupremacy.insertSemicolons": false, // 是否插入分号
    "stylusSupremacy.insertBraces": false, // 是否插入大括号
    "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
    "stylusSupremacy.insertNewLineAroundBlocks": false,
    "prettier.useTabs": true,
    "files.autoSave": "off",
    "explorer.confirmDelete": false,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "diffEditor.ignoreTrimWhitespace": false,
    "[vue]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "files.associations": {
      "*.cjson": "jsonc",
      "*.wxss": "css",
      "*.wxs": "javascript"
    },
    "emmet.includeLanguages": {
      "wxml": "html"
    },
    "minapp-vscode.disableAutoConfig": true,
     
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "javascript.updateImportsOnFileMove.enabled": "always" // 两个选择器中是否换行
  }

