import { getInfo } from '../config/axios';
import { apiUrl } from '../config/env';

export const wechatShareAPI = (params) => getInfo(apiUrl + '/pdabc-common/wx/getShareParam', params, 'post');

export const register = (params) => getInfo(apiUrl + '/pdabc-common/wx/getShareParam', params, 'post');

export const getYanzhengCode = (params) => getInfo(apiUrl + '/pdabc-common/wx/getShareParam', params, 'post');

