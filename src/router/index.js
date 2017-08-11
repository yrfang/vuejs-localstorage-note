import Vue from 'vue';
import Router from 'vue-router';

import NoteList from '@/components/NoteList';
import Note from '@/components/Note';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NoteList',
      component: NoteList
    },
    {
      path: '/view/:id',
      name: 'View Note',
      component: Note,
      props: true,
    },
    // {
    //   path: '/',
    //   name: 'View Note',
    //   component: Note,
    //   props: true,
    // },
  ]
})
