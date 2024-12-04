# miniprogram-template

## 开始

**npm准备**

```bash
cd miniprogram
npm install
```

【微信开发工具】-【工具】选项-执行【构建npm】

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

- npm支持
- 小程序API Promise化
- 路径别名
- scss/less（todo）
- eslint/prettier（todo）

## 封装

- http 请求api
- config 环境配置
- Store 官方全局状态管理  （todo）
- watch/computed 官方 behavior（todo）
- 组价库（todo）

## 其它

- WXAPI 提供后端服务

## 性能

### 使用lib取代npm

当依赖的第三方库npm包过大，请改用第三方库的压缩版js，存放到lib中项目引入，如本项目 `/lib/lodash.min.js`