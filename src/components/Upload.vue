<template>
  <div class="upload">
    <div class='imgs'>
      <img :src="(isSuccess ? (showImg ? showImg :  defaultImg) : '' ) " v-if="isSuccess" class="img"/>
      <slot name="bgPicture"></slot>
      <img :src="result" id="img"/>
      <input @change='addImg' type="file" accept="image/*" v-if="defaultImg==''||step<=2"/>
    </div>
    <p :class="[isSuccess  ? 'success' : '']">{{isSuccess ? '上传成功' : text}}</p>
  </div>
</template>

<script>
  import {compress} from '../config/util';
  export default {
    data(){
      return {
        showImg: '',
        result: ''
      }
    },
    computed: {
      step: function () {
        return this.$store.state.step;
      }
    }, 
    mounted() {
      console.log(this.defaultImg)
    },
    props: {
      defaultImg: {   //默认图片
        type: String
      },
      isSuccess: {   //是否已上传成功 -->据此展示对应提示
        type: Boolean,
        default: false
      },
      text: {        //底部解释性文字
        type: String,
      }
    },
    watch: {
      isSuccess(cur, old) {  //监听isSuccess的变化，如果成功，则显示上传的图片
        if (cur) {
            this.showImg = this.result;
        }
//        console.log(this.showImg);
      }
    },
    methods: {
      addImg(event) {
        var imgFile = event.target.files[0];
        //判断类型是不是图片
        if (!/image\/\w+/.test(imgFile.type)) {
          alert("请确保文件为图像类型");
          return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(imgFile);
        const that = this;
        reader.onloadend = function () {  //文件读取结束的时候上传到服务器
//          that.result = reader.result;
//          that.$vux.loading.show({
//            text: '上传中'
//          })
          var img = new Image();
          img.src = reader.result;
          var width = img.naturalWidth;
          var height = img.naturalHeight;
          that.result = compressImg(img, width, height);
          console.log(that.result);
//          that.showImg = that.result ;
          that.$emit('sendImgInfo', that.result);   //将上传的图片以base64形式传给父组件
        }
      }

    },
  }
</script>

<style lang="scss">
  .upload {
    width: 45%;
    height: auto;
    padding-bottom: 0.24rem;
    p {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #999999;
      line-height: 12px;
      margin-top: 10px;
      width: 100%;
      text-align: center;
    }
    .success {
      color: #F63F5B !important;
    }
    input {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      z-index: 11;
      opacity: 0;
    }
    .imgs {
      width: 100%;
      height: 98px;
      margin-right: 0.3%;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
        position: absolute;
        top: 50%;
        left: -50%;
        transform: translate(50%, -50%);
      }
      #img {
        z-index: -1;
      }
      .img {
        display: block;
      }
      span {
        position: absolute;
        width: 20px;
        height: 20px;
        right: 5px;
        /*top:3px;*/
      }
    }

  }
</style>
