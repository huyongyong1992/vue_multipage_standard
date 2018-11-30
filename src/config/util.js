import { wechatShareAPI } from '../service/getData'; //获取微信分享所需的appid等

let CryptoJS = require("crypto-js");
/**
 * AES加密
 * @param {*} value 
 */
export const encryptWithAES = (value) => {
        let str = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value), CryptoJS.enc.Utf8.parse('abcdefgabcdefg12'), {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        }).toString();
        return str;
    }
    /**
     * 获取url上的参数
     * @param {} key 
     */
export const getQuery = (key) => {
    const location = window.location;
    const query = {};
    const params = location.href.split('?')[1] || ''
    if (params) {
        params.split('&').forEach((item) => {
            const queryPair = item.split('=');
            query[queryPair[0]] = queryPair[1];
        });
    }
    const rst = query[key];
    //解码一个编码的 URI。
    return rst ? window.decodeURIComponent(query[key]) : '';
};

/**
 * 获取当前日期
 */
export const getDate = () => {
    let now = new Date(),
        year = now.getFullYear(),
        month = now.getMonth() + 1,
        day = now.getDate();
    month = month < 10 ? ('0' + month) : month;
    day = day < 10 ? ('0' + day) : day;
    return {
        year: year,
        month: month,
        day: day
    }
};
/**
 * 图片旋转-90deg
 */
export const rotateImg = (img, width, height) => {
        // console.log(img.src)
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext('2d');
        canvas.width = height;
        canvas.height = width;
        console.log('width=' + width)
        console.log('height=' + height)
        let degree = -90 * Math.PI / 180;

        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 注意顺序，先填充，再旋转，然后输出,drawImg时注意坐标
        ctx.rotate(degree); //旋转角度
        ctx.drawImage(img, -width, 0, width, height);

        let dataURL = canvas.toDataURL('image/jpeg', 1);
        return dataURL; //输出压缩后的图片base64码
    }
    /**
     * 图片压缩
     * @param {图片base64码} base64 
     */
export const compress = (base64) => {
    if (base64.length < 70000) { //小于70K的借据不压缩
        return base64;
    }
    var img = new Image();
    img.src = base64;
    let width = img.naturalWidth;
    let height = img.naturalHeight;
    //用于压缩图片的canvas
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext('2d');

    var expectWidth = '';
    var expectHeight = '';
    if (width > height && width > 480) {
        expectWidth = 480;
        expectHeight = expectWidth * height / width;
    } else if (height > width && height > 600) {
        expectHeight = 600;
        expectWidth = expectHeight * width / height;
    }
    canvas.width = expectWidth;
    canvas.height = expectHeight;
    //铺底色
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, expectWidth, expectHeight);
    //进行最小压缩
    let dataURL = canvas.toDataURL('image/jpeg', 1);
    // console.log('压缩后：' + dataURL.length);
    // console.log('压缩率：' + ~~(100 * (initSize - dataURL.length) / initSize) + "%");
    // console.log(dataURL)
    return dataURL; //输出压缩后的图片base64码
}

/**
 * app端邀请有礼分享
 * @param {分享标题} title 
 * @param {描述} description 
 * @param {分享小图标url} thumImage 
 */
export const appShare = (description, thumImage, inviteCode) => {
        let u = window.navigator.userAgent;
        let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        // let shareUrl = window.location.origin + '/pages/loginAndRegister/ddkZJSRegister.html?inviteCode='+inviteCode;
        let shareUrl = window.location.href;
        let title = document.title;
        if (isiOS) {
            window.webkit.messageHandlers.NATIVE.postMessage({
                FunctionName: 'shareUrl',
                Parameter: {
                    title: title,
                    description: description,
                    thumImage: thumImage,
                    shareUrl: shareUrl
                }
            });
        } else {
            window.control.shareUrl(title, description, thumImage, shareUrl);
        }
    }
    /**
     * 贷贷看微信端微信分享
     * @param {标题} title 
     * @param {描述} desc 
     * @param {分享小图标url} imgUrl 
     */
export const wechatShare = (desc, imgUrl, tab, inviteCode) => {
    let shareUrl;
    /**
     * tab 0:扫码注册 1：扫码下载
     */
    // if(tab ==1) {
    //   shareUrl = window.location.origin+'/pages/loginAndRegister/ddkDownload.html';
    // }else{
    // shareUrl = window.location.origin + '/pages/loginAndRegister/ddkZJSRegister.html?inviteCode='+inviteCode;
    shareUrl = window.location.href
        // }
    let wx = window.wx;
    let timestamp = Date.parse(new Date()); //时间戳
    let url = location.href.split('#')[0]; //可把字符串作为URI 组件进行编码
    wechatShareAPI({
        url: url,
        product: 'daidaikan'
    }).then(data => {
        wx.config({
            debug: false,
            appId: data.data.appId,
            timestamp: data.data.timestamp,
            nonceStr: data.data.nonceStr,
            signature: data.data.signature,
            jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareQZone'
            ]
        });
    })
    wx.ready(function() {
        //分享到朋友圈
        wx.onMenuShareTimeline({
            title: document.title, // 分享标题
            link: shareUrl, // 分享链接
            imgUrl: imgUrl, // 分享图标
        });
        //分享给朋友
        wx.onMenuShareAppMessage({
            title: document.title, // 分享标题
            desc: desc, // 分享描述
            link: shareUrl, // 分享链接
            imgUrl: imgUrl, // 分享图标
        });
        wx.onMenuShareQQ({
            title: document.title, // 分享标题
            desc: desc, // 分享描述
            link: shareUrl, // 分享链接
            imgUrl: imgUrl, // 分享图标
        });
        wx.onMenuShareQZone({
            title: document.title, // 分享标题
            desc: desc, // 分享描述
            link: shareUrl, // 分享链接
            imgUrl: imgUrl, // 分享图标

        });
    });
}

/**
 * 维粒贷微信端微信分享
 * @param {标题} title 
 * @param {描述} desc 
 * @param {分享小图标url} imgUrl 
 */
export const wldWechatShare = (desc, imgUrl) => {
    let shareUrl;
    shareUrl = window.location.href;
    let wx = window.wx;
    let timestamp = Date.parse(new Date()); //时间戳
    let url = location.href.split('#')[0]; //可把字符串作为URI 组件进行编码
    wechatShareAPI({
        url: url,
        product: 'weilidai'
    }).then(data => {
        wx.config({
            debug: false,
            appId: data.data.appId,
            timestamp: data.data.timestamp,
            nonceStr: data.data.nonceStr,
            signature: data.data.signature,
            jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareQZone'
            ]
        });
    })
    wx.ready(function() {
        //分享到朋友圈
        wx.onMenuShareTimeline({
            title: document.title, // 分享标题
            link: shareUrl, // 分享链接
            imgUrl: imgUrl, // 分享图标
        });
        //分享给朋友
        wx.onMenuShareAppMessage({
            title: document.title, // 分享标题
            desc: desc, // 分享描述
            link: shareUrl, // 分享链接
            imgUrl: imgUrl, // 分享图标
        });
        wx.onMenuShareQQ({
            title: document.title, // 分享标题
            desc: desc, // 分享描述
            link: shareUrl, // 分享链接
            imgUrl: imgUrl, // 分享图标

        });
        wx.onMenuShareQZone({
            title: document.title, // 分享标题
            desc: desc, // 分享描述
            link: shareUrl, // 分享链接
            imgUrl: imgUrl, // 分享图标

        });
    });
}