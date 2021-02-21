import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAgile from 'vue-agile';
import VueSession from 'vue-session';
Vue.use(VueSession)

import VCalendar from 'v-calendar';
Vue.use(VCalendar);

Vue.use(VueAgile);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");