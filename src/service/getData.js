import { getInfo } from '../config/axios';

import { apiUrl } from '../config/env'

/**
 * 微信分享api
 * @param { string } product()
 * @param { string } url(分享的url) 
 */
export const wechatShareAPI = (params) => getInfo(apiUrl + '/management/wx/query/wxConfig', params, 'post')
