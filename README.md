## 使用前注意事项
1、新建页面，可能需重新`npm run dev`才可以正常访问新建的页面。
2.所有的目录都要求为二级，不能一个目录下为一级，另一个目录下有二级。
3.只需要在`*.vue`里导入`import Lib from 'assets/js/Lib';'`，就可以使用全局模块了。
## 前言


### 安装依赖
npm install
### 本地调试环境 `npm run dev`
### 测试环境 （跟生产环境打包方式一样，只是将NODE_ENV 设置为test）`npm run test`
为方便本地用http-server调试测试环境，将config/index.js里test 的assetsPublicPath 设置为/test/
### 生产环境 `npm run build`

本地默认访问端口为8091，如需更改，请到项目目录文件`config/index.js`修改。


