
import Vue from 'vue';
import App from './facedetection.vue';
import '../../../config/rem';
// import 'jquery.facedetection/src/ccv.js'
import 'jquery.facedetection/dist/jquery.facedetection.min.js'
// import 'jquery.facedetection/src/cascade.js'
new Vue({
  render: h => h(App)
}).$mount('#app')
