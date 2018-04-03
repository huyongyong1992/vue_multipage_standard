import axios from 'axios';
import Lib from 'assets/js/Lib';
import Vue from 'vue';


export const getInfo = (url = '', data = {}, type = 'get') => {
    
    let fetch = axios.create({
        headers: {
            'Content-Type': 'application/json',
        },
        timeout: 150000
    })
    if (type === 'get') { //对象拼接成字符串
        return fetch.get(url,{params: data}).then(function(resp) {
            if (!resp.data.success) { //弹出错误信息
                let errMsg = resp.data.errorMessage || resp.data.message || '服务异常，请稍后再试';
                Vue.$vux.toast.text(errMsg, 'middle')
            }
            return resp.data;
        }).catch((e) => {
            Vue.$vux.loading.hide();
            
            Vue.$vux.toast.text(e, 'middle')
        });
    }

    if (type === 'post' || type === 'put') { //对象拼接成字符串
        return fetch({
            method: type,
            url: url,
            data: data
        }).then(function(resp) {
            if (!resp.data.success) { //弹出错误信息
                let errMsg = resp.data.errorMessage || resp.data.message || '服务异常，请稍后再试';
                // alert(resp.data.message);
                Vue.$vux.toast.text(errMsg, 'middle')
            }
            return resp.data;
        }).catch((e) => {
            Vue.$vux.loading.hide();
            Vue.$vux.toast.text(e, 'middle')
        })
    }
};
