import App from "./App.vue";
import store from "./store";
import Vue from "vue";

Vue.config.production = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
