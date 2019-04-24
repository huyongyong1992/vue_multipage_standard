## 使用前注意事项
1、新建页面，可能需重新`npm run dev`才可以正常访问新建的页面。
2.所有的目录都要求为二级，不能一个目录下为一级，另一个目录下有二级。
3.只需要在`*.vue`里导入`import Lib from 'assets/js/Lib';'`，就可以使用全局模块了。
## 前言
##### 1.基于vue2+axios搭建的多页面项目
##### 2. 移动端页面引入 `rem.js`, 1rem = 37.5px， UI库为`vux`
##### 3. 后台页面 使用Element UI

### 安装依赖
npm install
#### 本地调试环境 `npm run dev`
#### 测试环境 （跟生产环境打包方式一样，只是将NODE_ENV 设置为test）`npm run test`
#### 预发环境 `npm run uat`
#### 生产环境 `npm run build`

本地默认访问端口为8091，如需更改，请到项目目录文件`config/index.js`修改。

## 目录结构
``` 
|---build
|---src
    |---assets                                 #资源
        |---css/common.css                      #css
        |---font/                               #字体图标
        |---js/common.js                        #自己定义的全局通用事件
    |---components                              #组件
        |---answer.vue                          #等级测试 回答 模板
        |---blackboard.vue                      #等级测试 黑板里题目模板
        |--- process.vue                        #等级测试 熊猫进度条
    |---images                                  #公共图片库,页面单独图片放在各自文件夹内
    |---service                                 #接口调度中心
        |---getData.js                          #axios封装
    |---pages                                   #各个页面模块
        |---admin                               #一级目录 详见项目wiki
            |---levelTestAdmin                  #二级目录 等级测试后台页面
                |---levelTestAdmin.html
                |---levelTestAdmin.js
                |---levelTestAdminApp.vue
            |---stuDetailAdmin                  #营销活动入口 学生 报名详情
            |---waijiaoAdmin                    # 官网 外教报名入口  外教信息详情
        |--- channelLogin                       # 让渠道方 查看的后台（移动端）
        |--- entryFlow                          # 渠道推广流程
            |---introduction                    # 渠道推广入口页面（支付跳转回 官网项目中）
        |--- feedback                           # 家长反馈情况
        |--- levelTest                          # 等级测试所有页面
            |--- notice                         # 入口，提示性信息
            |--- baseInfo                       # 填写孩子基本信息
            |--- level1-5                       # 五个等级的题目，具体逻辑见页面内部注释
            |--- result                         # 测试结果(五星制)
            |--- testResult                     # 测试结果（柱状图 等级制）
        |--- manage                             # 教师助教管理后台页面
            |--- manageAssistant                # 助教管理
            |--- manageTeacher                  # 外教管理
```
