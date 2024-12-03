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

## 封装

- http 请求api
- Store 官方全局状态管理  
- watch/computed 官方 behavior
- 组价库