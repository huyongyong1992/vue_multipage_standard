<template>
  <div class="anthor_item" :class="`${number==='4' ?'noborder' :''}`">
        <p class="item_left">
           <img src="../images/itemPic/rzicon1.png" v-show="number==='1'">
           <img src="../images/itemPic/rzicon2.png" v-show="number==='2'">
           <img src="../images/itemPic/rzicon3.png" v-show="number==='3'">
           <img src="../images/itemPic/rzicon4.png" v-show="number==='4'">
        </p>
        <p class="item_center" >
          <span>{{itemTitle}}</span>
          <span class="right_bottom">{{itemMain}}</span>
        </p>
        <p class="item_right" >
            {{itemRight}}
        </p>
  </div>
  
</template>
<script>
export default {
  data(){
    return{
      // number:1
    }
  },
  props: {
        itemMain:{
          type:String,
          default:''
        },
        itemTitle:{
          type:String,
          default:''

        },
        itemRight:{
          type:String,
          default:''

        },
        number:{
          type: String,
          default: ''
        },
        unfinished: {
        type: String,
        default: ''
        },
        noborder:{
          type: Number,
          default: ''

        }
  }
}
  
</script>
<style lang="less">
  .anthor_item{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin:0.4rem;
      border-bottom:1px solid #eee;
      .item_center{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        text-align: left;
        width:8rem;
        span{
          color:#111;
          font-size: 14px;
          font-weight: bold;

        }
        .right_bottom{
          color:#666;
          font-size:12px;
          font-weight: 500;
          padding: 6px 0;
        }
      }
      .item_left{
        width:1rem;
        img{
          width:0.8rem;
        }
      }
      .item_right{
        font-size:12px ;
        color:#666;
        // width:1.8rem;
        // text-align: left;
      }
      .yes{
          color:#f00;
      }
    
   }
   .noborder{
      border-bottom:0px;

   }

</style>


