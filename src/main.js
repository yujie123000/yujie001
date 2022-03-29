import Vue from "vue";
import App from "./App.vue";

// 引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入路由
import router from "./router";
Vue.config.productionTip = false;

import "./style/index.css"
// 拦截请求
if(process.env.NODE_ENV==='development'){
  require("./mock")
}

let vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");