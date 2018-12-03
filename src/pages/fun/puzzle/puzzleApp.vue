<template>
<div >
  <div class="container">
    <puzzle-board
      style="width:100vw;height:100vw"
      :autoResize="true"
      :cols="cols"
      :rows="rows"
      :showNumber="showNumber"
      :src="img" />

    <div class="btn">
      <x-button type="warn" mini plain @click.native="onWarn">查看提示</x-button>
      <x-button :type="active === 'easy' ? 'primary' : ''" mini @click.native="onTypeChange('easy')">简单模式</x-button>
      <x-button :type="active === 'diff'? 'primary' : ''" mini @click.native="onTypeChange('diff')">困难模式</x-button>
      <img :src="img"/>
      <x-button  type="primary" @click.native="onChange">换一张</x-button>
    </div>
  </div>
</div>
</template>

<script>
import PuzzleBoard from 'vue-8-puzzle'
import Lib from '../../../assets/js/Lib'
import { XButton } from 'vux'
export default {
  data() {
    return {
      cols: 3,
      rows: 3,
      img: require('./images/animal1.jpg'),
      showNumber: false,
      active: 'easy'
    };
  },
  components: {
    PuzzleBoard, XButton
  },
  watch: {
    active(cur, old) {
      if(cur === 'easy') {
        this.cols = this.rows = 3
      } else if(cur === 'diff') {
        this.cols = this.rows = 4
      }
    }
  },
  methods: {
    onChange() {
      const index = parseInt(Math.random()*8)
      console.log(index)
      this.img = require(`./images/animal${index}.jpg`)
      this.showNumber = false
    },
    onWarn() {
      this.showNumber = true
    },
    onTypeChange(e) {
      this.active = e
    }
  }
};
</script>

<style lang="less">
.container{
  .btn{
    width: 100%;
    position: fixed;
    bottom: 0;
    img{
      width: 40%;
      margin: 10px 30%;
    }
  }
}
  
</style>
