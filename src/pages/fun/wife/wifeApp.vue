<template>
<div >
  <div class="sign">
    <!-- <x-input placeholder="请输入你的身高" v-model="height"></x-input> -->
    <x-button @click.native="onGenerate" type="warn" text="一键生成" style="margin:20px 0"></x-button>
    <group >
      <cell :title="key" :value="value" v-for="(value, key) in obj" :key="key"></cell>
    </group>
  </div>
</div>
</template>

<script>
import { generateObj } from './func'
import Lib from '../../../assets/js/Lib'
import { Group, Cell, XButton, XInput } from 'vux'
export default {
  data() {
    return {
      obj: {},
      height: ''
    };
  },
  components: {
    Group, Cell, XButton, XInput
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
