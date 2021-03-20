import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAgile from 'vue-agile';
import VueSession from 'vue-session';
import VCalendar from 'v-calendar';
import axios from "axios";
import FileSelector from 'vue-file-selector';
import VueLazyload from 'vue-lazyload'
 
Vue.use(VueLazyload)
Vue.use(FileSelector);
Vue.use(axios);
Vue.use(VueSession)


Vue.use(VCalendar);
Vue.use(VueAgile);
Vue.prototype.$liff = window.liff
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");