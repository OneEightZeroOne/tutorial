# 什么是node.js

1.是一个Chrome V8引擎的封装（chrome浏览器的控制台抽离的部分）

2.相对其他环境(java,php,python,199x)，出现的较晚

3.脱离浏览器环境运行的，浏览器环境（前端，客户端）  node.js其实可以充当服务器（后端，服务端）

node.js  vs  php,java,python

|语言|||
|-|-|-|
|js|前端语言 |chrome浏览器|
|nodejs| 后端语言 | node (chrome v8)浏览器控制台|

# npm

npm就是nodejs的应用商店

nodejs环境下的包管理中心（npm）  setInterval(系统包) gulp(第三方包)

android手机打电话，信息，相册，设置(系统应用)，微信，饿了么，QQ支付宝（第三方应用） 生态环境

# npm包安装

直接从npm包管理中心下载xxx包到本地的nodejs环境使用
```js
npm install xxx
npm i xxx
```

全局安装-g
```js
npm install -g xxx
```

使用包，配合`require("xxx")`
```js
var gulp = require("gulp")
```

# 运行脚本

```js
node xxx.js
```


# cnpm

```bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
