import Vue from 'vue';
import Router from 'vue-router';
import HelloAgain from './components/HelloAgain.vue';
import Me from './pages/Me.vue';

Vue.use(Router);


export default new Router({
  routes: [{
    path: '/',
    component: HelloAgain,
  }, {
    path: '/me',
    component: Me,
  }],
});

