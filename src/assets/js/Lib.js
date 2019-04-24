
import { AlertPlugin,LoadingPlugin,ToastPlugin,ConfirmPlugin  } from 'vux';
import Vue from 'vue';
//------ VUX UI 注册，如果不需要  VUX UI 请删除以下注册 -------
Vue.use(AlertPlugin); //全局注册alert事件，注册之后，不需要每个页面都import alert
Vue.use(LoadingPlugin ); //全局注册loading事件，注册之后，不需要每个页面都import loding
Vue.use(ToastPlugin ); //全局注册toast事件，注册之后，不需要每个页面都import toast
Vue.use(ConfirmPlugin);
//--- VUX UI 注册 END --

//解决click点击300毫秒延时问题
import FastClick from 'fastclick';
FastClick.attach(document.body);	
