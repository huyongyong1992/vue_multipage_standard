import axios from 'axios';
import Lib from 'assets/js/Lib';
import Vue from 'vue';
import { BASE_URL } from './env';
export const request = (url = '', data = {}, type = 'get', token = false) => {
  let fetch = axios.create({
    headers: {
      'Content-Type': 'application/json',
      'access-token': window.localStorage.getItem('accessToken')
    },
    timeout: 15000,
    baseURL: BASE_URL
  })
  if (type === 'get') {
    return fetch.get(url,{params: data}).then(function(resp) {
      if (!resp.data.success) { //弹出错误信息
        const errMsg = resp.data.errorCode === 102 ? '登录已过期,请重新登录' : (resp.data.errorMessage || '服务异常，请稍后再试')
        Vue.$vux.toast.text(errMsg, 'middle')
      }
      return resp.data;
    }).catch((e) => {
      Vue.$vux.loading.hide();
      console.log(e)
      Vue.$vux.toast.text(e, 'middle')
    });
  }

  if (type === 'post' || type === 'put') { 
    return fetch({
      method: type,
      url: url,
      data: data
    }).then(function(resp) {
      if (!resp.data.success) { //弹出错误信息
        const errMsg = resp.data.errorCode === 102 ? '登录已过期,请重新登录' : (resp.data.errorMessage || '服务异常，请稍后再试')
        Vue.$vux.toast.text(errMsg, 'middle')
      }
      return resp.data;
    }).catch((e) => {
      Vue.$vux.loading.hide();
      Vue.$vux.toast.text(e, 'middle')
    })
  }
};
