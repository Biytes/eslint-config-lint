### 仓库说明

    1. 解决目前规范只是文档输出，只能通过code review代码，以及靠个人意识约束，规范没起到作用。
    2. 目前市面上虽然有 eslint-config-airbnb 或 eslint-config-standard等规范了，但各业务各使用各的没做到统一。
    3. 可按自己团队规范自己实现plugin，以及将各种框架集成在一起如vue,react ,node, navtive等，目前支持vue , vue3.0

### 使用方法 - Usage

请仔细阅读文章

#### 安装

```javascript
    cnpm i --save-dev @nostalgiaswag/eslint-plugin-lint

    // 使用后，记得将原有项目内的package.json里的包删除
    // 引入了该配置后，所有lint相关的包，统一版本在项目包里管理
    // 同名的包都可以删除
    {
        "@typescript-eslint/parser": "^4.18.0",
        "eslint": "^7.32.0",
        "eslint-plugin-vue": "^7.19.1",
        "eslint-plugin-node": "~10.0.0",
        "eslint-plugin-eslint-plugin": "~2.1.0",
        "eslint-plugin-promise": "5.2.0",
        "eslint-plugin-babel": "^5.3.1"
    }
```

#### 修改配置

`root`根目录下的`.eslintrc.js` 或者 .eslintrc（没有就创建一个）

```javascript
// 详情阅读configs文件

module.exports = {
    extends: ['plugin:@nostalgiaswag/lint/xxx'], // xxx的配置
    extends: ['plugin:@nostalgiaswag/lint/vue'] // vue2的配置
};

// 如果需要在旧项目引入，宽松一点的包，引入base-loose
module.exports = {
    extends: ['plugin:@nostalgiaswag/lint/vue'], // vue2的配置
    extends: ['plugin:@nostalgiaswag/lint/base-loose'] // 放松一点的配置
};
```

---

### 备注：

如果需要自动修复能力，请在项目的根目录下按需创建文件

> vscode 配置方式

必备：需要安装两个拓展编辑器插件

1. eslint extension
2. prettier extension
3. 创建.vscode 文件夹 并在其中创建 settings.json
4. 贴代码

```Javascript

{
    "files.eol": "\n",
    "editor.tabSize": 4,
    "eslint.validate": ["javascript", "javascriptreact", "vue"],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}

```

> prettier 配置

```Javascript

{
    // 引入了prettier的复制下面配置
    "editor.formatOnSave": true,
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```

#### 参考文章

-   [.eslintrc 详解](https://blog.csdn.net/chenlu5201314/article/details/105930368/)
-   [eslint plugin 官方文档](https://eslint.bootcss.com/docs/developer-guide/working-with-plugins)
-   [eslint 中文文档](https://eslint.bootcss.com/docs/rules/)

#### 引入插件

-   [eslint-plugin-vue](https://eslint.vuejs.org/rules/)
-   [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise#rules)
-   [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)
-   [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)

---

#### ts 相关插件

-   [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
-   [@types/node](https://www.npmjs.com/package/@types/node)
-   [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
-   [eslint-define-config](https://www.npmjs.com/package/eslint-define-config)

#### prettier 相关插件

-   [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
-   [eslint-config-prettier](npmjs.com/package/eslint-config-prettier)

#### 关于 parser 的额外说明

-   [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser)
-   [@babel/eslint-parser(原 babel-eslint)](https://www.npmjs.com/package/@babel/eslint-parser)

```javascript
@babel/eslint-parser 一定要放在最上面
如果是 vue 的配置，请使用 vue-eslint-parser
e.g

{
    // 这个是无法解析vue文件的
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false
    },
}

// 解析vue文件
{
    parser: 'vue-eslint-plugin'
}

```
