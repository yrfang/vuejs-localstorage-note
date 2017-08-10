import Vue from 'vue';
import Router from 'vue-router';
import Listpage from '@/components/Listpage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Listpage',
      component: Listpage
    }
  ]
})
