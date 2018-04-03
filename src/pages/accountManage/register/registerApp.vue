<template>
  <div class="content">
    <header>
      <img class="top" src="./assets/register_top.png">
      <img class="english" src="./assets/register_en_text.png">
      <img class="invite" src="./assets/register_invite.png" >
      <img class="slogan" src="./assets/register_slogan.png" >
    </header>
		
    <section>
      <div class="item">
        <img src="./assets/register_phone.png" ><input placeholder="手机号" v-model="phone" type="tel"/>
      </div>
      <div class="item">
        <img src="./assets/register_code.png" >
        <input placeholder="验证码" v-model="code" type="number"/> 
        <span @click="getCode">{{codeCtx}}</span>
      </div>
      <div class="item">
        <img src="./assets/register_psw.png" ><input placeholder="6-20位密码" v-model="password"/>
      </div>
    </section>
		<footer @click="toRegister">
      立即注册
    </footer>
	</div>
  
</template>

<script>
import { register, getYanzhengCode } from '../../../service/getData';
export default {  
  data () {
    return {
      phone:null,
      codeCtx:'获取',
      code:null,
      password:null,
      lock:false
    }
  },
  created() {
   
  },
  methods: {
    toRegister() {
      if(!this.phone || !this.code || !this.password) {
        this.$vux.toast.text('请填写完整信息');
        return;
      }
      register({
        phone:this.phone,
        code:this.code,
        password:this.password
      }).then(data => {
        if(!data.error) return; //错误处理

        // 下面是成功处理
      })
    },
    // 获取验证码
    getCode() {
      if(!this.phone ) {
        this.$vux.toast.text('请填写手机号');
        return ;
      }
      if(this.lock) {
        this.$vux.toast.text('您的操作太频繁了');
        return ;
      }
      // getYanzhengCode({
      //   phone:this.phone
      // }).then(data => {
      //   if(!data.error) return; //错误处理
           this.countDown();
      // })
    },
    countDown() {
      let that = this;
      that.codeCtx = 60
      let timer = setInterval(function(){
        that.codeCtx -= 1;
        that.lock = true;   //字的颜色变灰
        if(that.codeCtx == 0) {
          clearInterval(timer); //清除定时器
          that.codeCtx = '重新发送'; //重设
          that.lock = false;
        }
      },1000)
    }
  }
}
</script>

<style lang="less">
body{
  background: url('./assets/register_bg.png') no-repeat;
  background-size:100% 100%;
  width:100%;
  min-height: 100vh;
}
header{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .top{
    width:67%;
  }
  .english{
    width:45%;
    margin-top:10px;
    margin-bottom:15px;
  }
  .invite{
    width:76.8%;
  }
  .slogan{
    width:65.6%;
  }
}

section{
  // .item::after {
  //   width: 100%;
  //   position: absolute;
  //   left:0;
  //   bottom: 0;
  //   // background: transparent;
  //   border-bottom: 1px solid #fff;
  //   opacity: 0.2;
  // }
  .item{
    display: flex;
    width: 78%;
    height:48px;
    margin:0 11%;
    align-items: center;
    border-bottom: 1px solid #fff;
    img{
      width:16px;
      height:19px;
      margin-right:17px;
    }
    input{
      outline: none;
      border:none;
      background-color: #9d000f;
      font-size:15px;
      color:#fff;
    }
    input::-webkit-input-placeholder{
        color:#fff;
    }
    span{
      float:right;
      width:70px;
      height:35px;
      text-align: center;
      line-height:35px;
      font-size:16px;
      color:#fff;
      background-color: #C5A47E;
      border-radius: 6px;
    }
  }
}

footer{
  width: 100%;
  height:48px;
  background-color: #C5A47E;
  color:#fff;
  font-size:18px;
  position: fixed;
  bottom: 0;
  text-align: center;
  line-height: 48px;
}
</style>
