
import { request } from './axios'

export const wechatShareAPI = (params) => request('/pdabc-common/wx/getShareParam', params, 'post')
