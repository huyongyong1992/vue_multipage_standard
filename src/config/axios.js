import axios from 'axios';
import Lib from 'assets/js/Lib';
import Vue from 'vue';

function json2url(json) {
    let arr = [];
    let str = '';
    for (let i in json) {
        str = i + '=' + json[i];
        arr.push(str);
    }
    return arr.join('&');
}
export const getInfo = (url = '', data = {}, type = 'get', clientType='', token='') => {
    // if(!token ) {
    //     Vue.$vux.toast.text('请传入token', 'middle');
    //     return ;
    // }
    let fetch = axios.create({
        headers: {
            'Content-Type': 'application/json',
            'clientType': clientType,
            'accessToken': token
        },
        timeout: 150000
    })
    if (type === 'get') { //对象拼接成字符串
        let params = json2url(data);
        let getUrl = params ? (url + '?' + params) : url; //若传参data为空的话，就不拼接，不为空，则拼接url
        return fetch.get(getUrl).then(function(resp) {
            if (resp.data.error) { //弹出错误信息
                let errMsg = resp.data.message || '服务异常，请稍后再试';
                Vue.$vux.toast.text(errMsg, 'middle')
            }
            return resp.data;
        }).catch((e) => {
            Vue.$vux.loading.hide();
            if (e.toString().indexOf('Network') > -1) {
                Vue.$vux.toast.text('网络异常，请检查网络连接', 'middle');
                return;
            }
            if (e.toString().indexOf('time') > -1) {
                Vue.$vux.toast.text('请求超时，请稍后再试', 'middle');
                return;
            }
            Vue.$vux.toast.text(e, 'middle')
        });
    }

    if (type === 'post') { //对象拼接成字符串

        return fetch({
            method: type,
            url: url,
            data: data
        }).then(function(resp) {
            if (resp.data && resp.data.error) { //弹出错误信息
                let errMsg = resp.data.message || '服务异常，请稍后再试';
                // alert(resp.data.message);
                Vue.$vux.toast.text(errMsg, 'middle')
            }
            return resp.data;
        }).catch((e) => {
            Vue.$vux.loading.hide();
            if (e.toString().indexOf('Network') > -1) {
                Vue.$vux.toast.text('网络异常，请检查网络连接', 'middle');
                return;
            }
            if (e.toString().indexOf('time') > -1) {
                Vue.$vux.toast.text('请求超时，请稍后再试', 'middle');
                return;
            }
            Vue.$vux.toast.text(e, 'middle')
        })
    }
};
