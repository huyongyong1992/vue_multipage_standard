<template>
<div class="sign">
  <grid :cols="3">
    <grid-item :label="item.name" @click.native="onClick(item.url)" v-for="(item, index) in gameList" :key="index">
    </grid-item>
    
  </grid>
</div>
</template>

<script>
import { Grid, GridItem } from 'vux'
export default {
  data() {
    return {
      gameList: [
        {
          name: '拼图游戏',
          url: '../fun/puzzle.html'
        },
        {
          name: '俄罗斯方块',
          url: 'http://binaryify.github.io/vue-tetris/?lan=zh'
        },
        {
          name: '小李飞刀',
          url: '../game/stickGame.html'
        },
        {
          name: '水果忍者',
          url: 'https://www.jqhtml.com/yanshi?demourl=wp-content%2Fuploads%2F2017%2F01%2Ftx%2Ftx201701189%2F&demotitle=HTML5%E7%89%88%E5%88%87%E6%B0%B4%E6%9E%9C%E6%B8%B8%E6%88%8F'
        },
        {
          name: '奔月游戏',
          url: 'https://www.jqhtml.com/yanshi?demourl=wp-content%2Fuploads%2F2017%2F02%2Ftx%2Ftx20170230%2F&demotitle=HTML5%E5%A5%94%E6%9C%88%E6%B8%B8%E6%88%8F'
        },
        {
          name: '打方块',
          url: '../game/rect.html'
        },
      ]
    };
  },
  components: {
    Grid,
    GridItem
  },
  created() {},
  methods: {
    onClick(url) {
      window.location.href = url
    }
  }
};
</script>

<style lang="less">

</style>
