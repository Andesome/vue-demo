import Vue from 'vue';
import App from './App.vue';
import router from './route';

console.log(router);


Vue.config.productionTip = false;

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
