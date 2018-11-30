<template>
  <div id="signature-pad" class="signaturePad" v-if="isShow">
    <div class="btnpanel">
      <button class="btn" id="clear" @click="clear">重置</button>
      <button class="btn" id="save" @click="save">确认</button>
    </div>
    <div class="signature" id="signature"></div> 
  </div>
</template>

<script>
import Lib from 'assets/js/Lib';
import { rotateImg } from '../config/util';
export default {
  name: 'signPad',
  data () {
    return {
    }
  },
  props:{
    isShow:{
      type:Boolean
    }

  },
  created(){

  },
  methods:{
    clear() {
			this.$nextTick(function() {
				$('.signature').jSignature('reset');
			})
		},
		save() {
			this.$nextTick(function() {
				
				let datapair = $('.signature').jSignature('getData', 'image');
					let coordinate = datapair[2];	//签名轨迹
				          
          if(coordinate.length === 0) {
            this.$vux.alert.show({
              title: '提示',
              content: '签名不能为空',
             
            })
          }else{
            this.isShow = false;
            let rImg = new Image();
            rImg.src = 'data:image/jpeg;base64,'+datapair[1];
            let that = this ;
            setTimeout(function() {
              let width = rImg.naturalWidth;
              let height = rImg.naturalHeight;
              let signBase64 = rotateImg(rImg,width,height).split(',')[1]
              // console.log(signBase64)
              that.$emit('signInfo',coordinate,signBase64)
            },100)
            
          }
				
			})
    },
    // orient() {  //横屏竖屏判断
    //     if (window.orientation == 0 || window.orientation == 180) {
    //         $("body").attr("class", "portrait");
    //         orientation = 'portrait';
    //         return false;
    //     }
    //     else if (window.orientation == 90 || window.orientation == -90) {
    //         $("body").attr("class", "landscape");
    //         orientation = 'landscape';
    //         alert('请竖屏，并将手机开启竖屏锁定后签名！');
    //         // return false;
    //     }
    // }
  }
}
</script>

<style  lang="less" >
  .signaturePad {
    position: fixed;
    top:0;
    display:flex;
    width:100vw;
    height:100vh;
    background-color: #f1f1f1;
    .btnpanel {
      width:60px;
      height:100vh;
      background: #fff;
      display: flex;
      display: -webkit-flex;
      flex-direction: column;
      -webkit-flex-direction: column;
      justify-content: space-around;
      -webkit-justify-content: space-around;
      align-items: center;
      -webkit-align-items: center;
    }
    .btnpanel .btn{
      width:45vh;
      height: 42px;
      
      border-radius: 4px;
      background: #F63F5B;
      color:#fff;
      
      transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
      outline: none;
      border:none;
    }
    .signature{
      width: 100% ;
      height: 100vh;
      background: rgba(0,0,0,0);
    }
    .jSignature{ 
      width: 100% !important;
      height: 100% !important;
    }
  }
  .weui-dialog__btn_primary{
    color:#F63F5B;
  }
</style>
