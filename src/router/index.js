import Vue from 'vue';
import Router from 'vue-router';
import NoteList from '@/components/NoteList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'note',
      component: NoteList
    }
  ]
})
