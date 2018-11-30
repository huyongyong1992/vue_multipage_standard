/**
 * 配置编译环境和线上环境之间的切换
 * wldApi: 维立贷接口地址
 * wldUrl: 维立贷页面地址
 * ddkApi: 贷贷看接口地址
 * redirectUrl: 贷贷看页面地址
 * thisProjectUrl: 本项目所处域名环境
 * routerMode: 路由模式
 */
let wldApi,
    redirectUrl,
    routerMode,
    thisProjectUrl,
    wldUrl,
    ddkApi;
if (process.env.NODE_ENV === 'production') {    //生产环境配置
    wldApi = 'https://wld-wechat.vcash.cn/o2o/platform/api'; 
    wldUrl = 'https://wld-wechat.vcash.cn';
    ddkApi = 'https://ddk-api.vcredit.com/o2o/platform/api'; 
    redirectUrl = 'https://ddk-wechat.vcash.cn';
    thisProjectUrl = 'https://web.vcredit.com';
    routerMode = 'hash'
} else { //开发环境、测试环境地址
    wldApi = 'http://wld-dev.vcredit.com/o2o/platform/api'; 
    wldUrl = 'http://wld-dev.vcredit.com';
    ddkApi = 'http://ddk-dev.vcredit.com/o2o/platform/api';
    redirectUrl = 'http://ddk-dev.vcredit.com'; 
    thisProjectUrl = 'http://o2o-dev.vcredit.com'; 
    routerMode = 'hash';
}

export {
    wldApi,
    redirectUrl,
    routerMode,
    ddkApi,
    thisProjectUrl,
    wldUrl
}