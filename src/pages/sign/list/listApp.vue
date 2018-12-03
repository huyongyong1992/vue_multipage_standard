<template>
<div class="sign">
  <grid :rows="3">
    <grid-item label="拼图游戏" @click.native="onPinTu">
      
    </grid-item>
    <grid-item label="俄罗斯方块" @click.native="onFangkuai">
    </grid-item>
  </grid>
</div>
</template>

<script>
import { Grid, GridItem } from 'vux'
export default {
  data() {
    return {
    };
  },
  components: {
    Grid,
    GridItem
  },
  created() {},
  methods: {
    onFangkuai() {
      window.location.href="http://binaryify.github.io/vue-tetris/?lan=zh"
    },
    onPinTu() {
      window.location.href="../fun/puzzle.html"
    }
  }
};
</script>

<style lang="less">
body {
  padding: 0 10px;
}
li {
  padding: 5px 10px !important;
  font-size: 20px;
  line-height: 20px;
  list-style: none;
}
</style>
