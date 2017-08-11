import Vue from 'vue';
import Router from 'vue-router';
// import VueLocalStorage from 'vue-localstorage';

import NoteList from '@/components/NoteList';
import Note from '@/components/Note';
import CreateNote from '@/components/CreateNote';

Vue.use(Router);
// Vue.use(VueLocalStorage);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'All Notes',
      component: NoteList
    },
    {
      path: '/view/:id',
      name: 'View Note',
      component: Note,
      props: true,
    },
    {
      path: '/edit/:id',
      name: 'Edit Note',
      component: CreateNote,
      props: true,
    },
    {
      path: '/new',
      name: 'Create Note',
      component: CreateNote,
    }
  ]
})
