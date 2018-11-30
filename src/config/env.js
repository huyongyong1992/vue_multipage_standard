/**
 * 配置编译环境和线上环境之间的切换
 * wldApi: 维立贷接口地址
 * wldUrl: 维立贷页面地址
 * ddkApi: 贷贷看接口地址
 * redirectUrl: 贷贷看页面地址
 * thisProjectUrl: 本项目所处域名环境
 * routerMode: 路由模式
 */


let apiUrl;
let routerMode;
if (process.env.NODE_ENV === 'production') { //生产环境配置
    //apiUrl = 'https://api.pdabc.com';
    apiUrl = 'http://api.saintleon.net/';
    routerMode = 'hash'
} else { //开发环境、测试环境地址
    //apiUrl = 'http://10.0.1.207:8087';
    apiUrl = 'http://192.168.0.219:8080';

    routerMode = 'hash';
}

export {
    apiUrl,
    routerMode
}
