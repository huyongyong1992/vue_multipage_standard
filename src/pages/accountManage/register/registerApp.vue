<template>
  <div class="content">
    <div class="test" v-for="(item, index) in list" :key="index" :style="{fontSize: item.location.height/2 + 'px',left:item.location.left/2 + 'px',top: item.location.top/2 + 'px'}">
      {{ item.words }}
    </div>
	</div>
  
</template>

<script>
import { DATA } from './constant'
export default {  
  data () {
    return {
      list: []
    }
  },
  created() {
    this.list = DATA.words_result
  },
  methods: {
    
  }
}
</script>

<style lang="less">
.test{
  position: absolute
}
</style>
