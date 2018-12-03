<template>
<div >
  <div class="sign">
    <!-- <x-input placeholder="请输入你的身高" v-model="height"></x-input> -->
    <x-button @click.native="onGenerate" type="warn" text="一键生成" style="margin:20px 0"></x-button>
    <group v-if="count > 0">
      <cell title="身高" :value="obj.height"></cell>
      <cell title="体重" :value="obj.weight"></cell>
      <cell title="发型" :value="obj.hair" is-link @click.native="onClick(obj.hair)"></cell>
      <cell title="属性" :value="obj.attr" is-link @click.native="onClick(obj.attr)"></cell>
      <cell title="性格" :value="obj.character" is-link @click.native="onClick(obj.character)"></cell>
      <cell title="CUP" :value="obj.CUP"></cell>
      <cell title="肤色" :value="obj.skin" is-link  @click.native="onClick(obj.skin)"></cell>
      <cell title="脸型" :value="obj.face" is-link @click.native="onClick(obj.face)"></cell>
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
      height: '',
      count: 0
    };
  },
  components: {
    Group, Cell, XButton, XInput
  },
  created() {
    this.count = Number(window.localStorage.getItem('count')) || 0
  },
  methods: {
    onGenerate() {
      this.count += 1
      window.localStorage.setItem('count', this.count)
      if(this.count % 5 === 1) {
        this.obj = generateObj()
      } else {
        this.$vux.toast.text('你已经生成过了哟!');
      }
    },
    onClick(e) {
      if(!e) return
      window.location.href = `https://m.baidu.com/sf/vsearch?pd=image_content&word=女明星+${e}&tn=vsearch&atn=page`
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
