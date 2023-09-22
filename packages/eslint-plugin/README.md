# `zl-eslint-plugin`

eslint 扩展插件

## 安装

除了本包，你需要同时安装 [ESlint](https://eslint.org/)

```shell
$ npm install zl-eslint-plugin eslint --save-dev
```

## 使用

### 引入插件

```js
// .eslintrc.js
module.exports = {
  plugin: ['zl-eslint-config'],
  rules: {
    'zl-eslint-plugin/no-secret-info': 'error',
  },
};
```

### 使用 presets

```js
// .eslintrc.js
module.exports = {
  extends: 'plugin:zl-eslint-plugin/recommended',
};
```

## 支持的规则

- [`no-broad-semantic-versioning`](https://github.com/zhengzl-brave/zl-lint-code) 不要指定宽泛的版本范围
- [`no-http-url`](https://github.com/zhengzl-brave/zl-lint-code) 使用 HTTPS 协议头的 URL，而不是 HTTP
- [`no-js-in-ts-project`](https://github.com/zhengzl-brave/zl-lint-code) 不要在 TS 项目中使用 JS
- [`no-secret-info`](https://github.com/zhengzl-brave/zl-lint-code) 不要在代码中直接设置 `password` `token` and `secret` 信息
