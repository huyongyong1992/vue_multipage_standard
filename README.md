## 使用前注意事项
1、新建页面，可能需重新`npm run dev`才可以正常访问新建的页面。
2.所有的目录都要求为二级，不能一个目录下为一级，另一个目录下有二级。
3.只需要在`*.vue`里导入`import Lib from 'assets/js/Lib';'`，就可以使用全局模块了。
## 前言
基于vue2+axios+vux+vue-router搭建的多页面项目，主要模块包括：
- 1.维粒贷&贷贷看活动页：ddk/inviteGiftContent(贷贷看转介绍入口页面)；ddk/wldZjs(维立贷转介绍入口页面)；activityPages/(转介绍具体内容页)
- 2. 贷贷看APP内嵌网页(只有App用，不与H5共用)：
    - 2.1 ddkApp/changeAvatar  APP端用户更改头像
- 3.APP端与H5共用页面：
  - 3.1 第一条：活动页
  - 3.2 一些介绍型的静态页面，在ddk/文件夹下
  - 3.3 静态协议书： protocol/(芝麻分)，注册协议：ddk/registerProtocol
- 4.其他
  - 4.1 贷贷看下载：loginAndRegister/ddkDownload
  - 4.2 贷贷看转介绍注册：loginAndRegister/ddkZJSRegister
  - 4.3 维立贷转介绍注册：loginAndRegister/wldZJSRegister

### 安装依赖
npm install
### 本地调试环境 `npm run dev`
### 测试环境 （跟生产环境打包方式一样，只是将NODE_ENV 设置为test）`npm run test`
为方便本地用http-server调试测试环境，将config/index.js里test 的assetsPublicPath 设置为/test/
### 生产环境 `npm run build`

本地默认访问端口为8091，如需更改，请到项目目录文件`config/index.js`修改。


