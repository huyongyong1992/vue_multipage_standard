import { getInfo } from '../config/axios';

import { ddkApi } from '../config/env'





/**
 * 微信分享api
 * @param { string } product(daidaikan,weilidai)
 * @param { string } url(分享的url) 
 */
export const wechatShareAPI = (params) => getInfo(ddkApi + '/management/wx/query/wxConfig', params, 'post')
