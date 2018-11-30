<template>
<!-- linkUs 不传则不显示右边图片 -->
  <div class="head_top">
    <header id='head_top'>
      <div class="head_left">
        <span v-if="isBack"></span>
        <span @click="goBack()" class="iconfont icon-btn_back" v-else>
          <img src="../images/itemPic/turnback.png" class="icon-btn_back">
        </span>
      </div>
      <div class="head-title">{{headTitle}}</div>
      <div v-if='linkUs'  class="head_right">
        <a >
          <img src="../images/itemPic/kfcall.png" @click="Call()"/>
        </a>
      </div>
      <div v-else  class="head_right"  ></div>
    </header>
    <div class="null"></div>
  </div>
</template>

<script>
// import { redirectUrl } from '../../../config/env';
  export default {
  	data(){
      return{
        isShowTel:true
      }
    },
    mounted(){

    },
    props: ['linkUs','headTitle','isBack'],
    computed: {

    },
    methods: {
      goBack() {
        this.$emit('back');
        // window.location.href =  + '/#/firstPage';
      },
      Call(val){
        this.isShowTel = true;
        this.$emit('click',this.isShowTel);
      }
    }

  }

</script>

<style lang="less">
  #head_top{
    // padding:0 0;
    width: 100%;
    height:48px;
    background:linear-gradient(to right, #f63f5b, #ff6363);
    display:flex;
    font-size:16px;
    justify-content:space-between;
    align-items:center;
    text-align: center;
    position:fixed;
    top:0px;
    left:0;
    z-index: 99999;
    div{
      height:40px;
      display: flex;
      align-items: center;
      color:#fff;
      font-size:16px;
      // text-align: center;
      // width:3.3rem;
      span{
        font-size:16px;
        color:#fff;
      }
    }
    .head_left{
      padding:0 4%;
      width: 10%;
      display: flex;
      justify-content: flex-start;
      .icon-btn_back{
        color:#fff;
        width:10px;
      }
    }
    .head_title{
      display: flex;
      justify-content:center;
      text-align:center; 
      width:80%;
    }
    .head_right{
      padding:0 4%;
      width: 10%;
    a{
      text-decoration: none;
      width:30px;
      padding:0px 15px;
      img{
        width:25px;
        // margin-right:100px;
      }
    }

  }
  }
  .null{
    height:48px;
    width: 100%;
  }
</style>
