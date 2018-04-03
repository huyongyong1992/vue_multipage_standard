<template>
  <div class="content">
    <header>
      <img src="./assets/share_en.png" >
    </header>

    <section>
      <img src="./assets/invite_award.png"  class="award">
      <img src="./assets/share_invite.png"  class="invite">
      
    </section>

    <footer>
      分享给好友
    </footer>
	</div>
  
</template>

<script>
import { register, getYanzhengCode } from '../../../service/getData';
export default {  
  data () {
    return {
      phone:null,
      
    }
  },
  created() {
   
  },
  methods: {
    
  }
}
</script>

<style lang="less">
body{
  background: url('./assets/share_bg.png') no-repeat;
  background-size:100% 100%;
  width:100%;
  min-height: 100vh;
}
header{
  width:100%;
  
  img{
    width:48%;
    margin-top:28px;
    margin-left:26%;
  }
}
section{
  width:70%;
  position: absolute;
  left:15%;
  bottom:8rem;
  img{
    width:100%;
  }
}

footer{
  position: absolute;
  width: 78%;
  left:11%;
  height:48px;
  border-radius: 24px;
  background-color: #c5a47e;
  color:#fff;
  font-size:18px;
  line-height:48px;
  text-align: center;
  bottom:2rem;
}
</style>
