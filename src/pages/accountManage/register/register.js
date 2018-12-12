
import Vue from 'vue';
import App from './registerApp';
import '../../../config/rem';

new Vue({
  render: h => h(App)
}).$mount('#app')
