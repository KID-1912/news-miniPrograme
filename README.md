# miniprogram-template

## 开始

**npm 准备**

```bash
cd miniprogram
npm install
```

【微信开发工具】-【工具】选项-执行【构建 npm】

## 项目目录

```
miniprogram-template
├─miniprogram
|      ├─components 组件
|      ├─config 应用配置
|      ├─constants 应用常量
|      ├─lib 第三方库
|      ├─miniprogram_npm 小程序构建npm产物
|      ├─node_modules
|      ├─pages
|      ├─utils
|      ├─app.js
|      ├─app.json
|      ├─app.wxss
|      ├─package-lock.json
|      ├─package.json
|      ├─sitemap.json
├─project.config.json
├─project.private.config.json
├─README.md
```

## 特性

- npm 支持
- 小程序 API Promise 化
- 路径别名
- scss/less（https://developers.weixin.qq.com/miniprogram/dev/devtools/compilets.html#%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8）
- eslint/prettier（todo）

## 封装

- http 请求 api
- config 环境配置
- mobx-miniprogram 基于 mobx 全局状态管理（https://github.com/wechat-miniprogram/mobx-miniprogram-bindings）
- miniprogram-computed 官方 watch/computed behavior（https://github.com/wechat-miniprogram/computed）
- 自定义原子类支持（miniprogram/assets/styles/atom.scss）
- 组件库（todo）

## eslint/prettier

**配置文件**：`.eslintrc.js`，`.prettierrc.js`

**拓展配置**：配置 rules 选项、添加 eslint/extends

**wxml 配置**：https://github.com/wxmlfile/eslint-plugin-wxml

**注**：小程序开发工具确保已安装 eslint、prettier 拓展

## 其它

- WXAPI 提供后端服务

## 性能

### 使用 lib 取代 npm

当依赖的第三方库 npm 包过大，请改用第三方库的压缩版 js，存放到 lib 中项目引入，如本项目 `/lib/lodash.min.js`
