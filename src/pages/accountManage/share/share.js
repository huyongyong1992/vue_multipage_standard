import Vue from 'vue'
import App from './shareApp'

import { LoadingPlugin, ToastPlugin } from 'vux';

Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)

new Vue({
  render: h => h(App)
}).$mount('#app')
