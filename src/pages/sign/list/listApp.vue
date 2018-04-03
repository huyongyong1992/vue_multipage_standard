<template>
	<div >
    欢迎
    <li @click="linkTo('/accountManage/register.html')">注册</li>
    
	</div>
</template>
<script>
  export default {

    //相关操作事件
    methods: {
      linkTo(e) {
        window.location.href = "/pages" + e;
      }
    }
  }
</script>

<style lang="less">
  body{
    padding:0 10px;
  }
  p{
    font-size:20px;
    margin-left:10px;
    margin-top:10px !important;
    color:#f00;
  }
  .sign{
    display: flex;
    flex-wrap: wrap;
  }
	li{
    padding:5px 10px !important;
    font-size:16px;
    line-height:20px;
    color:#f00;
    // list-style: none;
  }

</style>
