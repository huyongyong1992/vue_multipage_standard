<template>
<div >
  <div class="sign">
    <li @click="onGenerate">生成</li>
    <group >
      <cell :title="key" :value="value" v-for="(value, key) in obj" :key="key"></cell>
    </group>
  </div>
</div>
</template>

<script>
import { generateObj } from './func'
import Lib from '../../../assets/js/Lib'
import {Group, Cell} from 'vux'
export default {
  data() {
    return {
      obj: {}
    };
  },
  components: {
    Group, Cell
  },
  created() {},
  methods: {
    onGenerate () {
      this.obj = generateObj()
      console.log(this.obj)
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
