<template>
<div class="face">
  <img :src="imgSrc" class="image" />
  <div class="imgDiv">
    <div class="draw" v-html="drawText"> </div>
    <br/>
    <input type="button" value="开始识别" @click="onIdentifyFace">
    <input type="file" @change="onSelectImg" />
  </div>
</div>
</template>

<script>
import Lib from '../../../assets/js/Lib'
import { Group, Cell, XButton, XInput } from 'vux'
export default {
  data() {
    return {
      imgSrc: '',
      drawText: ''
    };
  },
  components: {
    Group, Cell, XButton, XInput
  },
  created() {
    
  },
  methods: {
    onIdentifyFace() {
      this.$vux.loading.show({
        text: '识别中...'
      })
      const that = this
      $('.image').faceDetection({
        complete(faces) {
          console.log('complete:', faces)
          that.$vux.loading.hide()
          if (faces.length === 0) return
          for (var i in faces) {
            console.log(i)
            //识别结果循环传入方法drawFace
            this.drawFace(faces[i].x, faces[i].y, faces[i].width, faces[i].height,faces[i].confidence);
          }
        }
      })
    },
    drawFace(x,y,width,height,confidence) {
      var confidenceStr='';
            if(confidence<0){
                confidenceStr='自信满满'
            }else if(confidence>2){
                confidenceStr='很不自信啊'
            }else{
                confidenceStr='一般般'
            }
          //将框框套上去
          this.drawText+='<div class="drawDiv" style="left:'+x+'px;top:'+y+'px;width:'+width+'px;height:'+height+'px;">'+confidenceStr+'</div>'
    },
    onSelectImg(e) {
      if(!e.target.files || !e.target.files[0]) return
      let reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      const that = this
      reader.onload = function(evt) {
        that.imgSrc = reader.result
      }
      
    }
  }
};
</script>

<style lang="less">
  .image{
    width: 100vw;
  }
</style>
