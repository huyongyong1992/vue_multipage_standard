/**
 * 配置编译环境和线上环境之间的切换
 * BASE_URL: 接口地址
 */
let BASE_URL;

if (process.env.NODE_ENV === 'production') {      // 生产环境配置
  BASE_URL = 'https://api.xxx.com'
} else if (process.env.NODE_ENV === 'test') {     // 测试环境
  BASE_URL = 'https://api.xxx.com'
} else if (process.env.NODE_ENV === 'test2') {    // 测试环境2
  BASE_URL = 'https://api.xxx.com'
} else if (process.env.NODE_ENV === 'uat') {      // 预发环境
  BASE_URL = 'https://api.xxx.com'
} else {                                          // 开发环境
  BASE_URL = 'https://api.xxx.com'
}
export {
  BASE_URL
}
