<template>
<div >
  <div class="container">
    <puzzle-board
      style="width:100vw;height:100vw"
      :autoResize="true"
      :cols="cols"
      :rows="rows"
      :src="img" />

    <x-button class="btn" type="primary" @click.native="onChange">换一张</x-button>
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
      img: require('./images/animal1.jpg')
    };
  },
  components: {
    PuzzleBoard, XButton
  },
  created() {
  },
  methods: {
    onChange() {
      const index = parseInt(Math.random()*8)
      console.log(index)
      this.img = require(`./images/animal${index}.jpg`)
    }
  }
};
</script>

<style lang="less">
.container{
  .btn{
    position: fixed;
    bottom: 0;
  }
}
  
</style>
