<template lang="pug">
.Note
  header
    a.backToList
      span(@click="goBack()")
        i.fa.fa-chevron-left
      span.menuText Viewing Note
    a(@click="editNote()")
      i.fa.fa-pencil
    a(@click="deleteNote()")
      i.fa.fa-trash
  .content
    .title {{ note.title }}
    .time {{ parseTimeCreate(note.meta) }}
    .tag  {{ note.tag }}
    .text {{ note.text }}
</template>

<script>
const moment = require('moment');

export default {
  props: ['id',],
  data() {
    return {
      note: {},
    }
  },
  mounted() {
    this.loadNote();
  },
  methods: {
    loadNote() {
      const getLocalNotes = localStorage.getItem('vuejs-note');
      // const notes = JSON.parse(getLocalNotes);
      const notes = (null === getLocalNotes?[]:JSON.parse(getLocalNotes));
      this.note = notes.find((note) => note.id === this.id);

      if (!this.note) {
        this.$router.push('/');
      }
    },
    parseTimeCreate(time) {
      return moment(time).format('LLL');
    },
    goBack() {
      this.$router.push('/');
    },
    editNote() {
      if (this.note) {
        this.$router.push({ name: 'Edit Note', params: { id: this.note.id } });
      }
    },
    deleteNote() {
      const getLocalNotes = localStorage.getItem('vuejs-note');
      const notes = (null === getLocalNotes?[]:JSON.parse(getLocalNotes));
      const meetIndex = notes.findIndex((note) => note.id === this.id);

      if (confirm('Delete note?')) {
        notes.splice(meetIndex, 1);
        localStorage.setItem('vuejs-note', JSON.stringify(notes));
        this.$router.push('/');
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.Note

header
  padding: 10px 20px
  background-color: #eee
  color: #555
  font-size: 20px
  font-weight: 100
  position: relative

  i.fa.fa-chevron-left
    margin-right: 20px
    padding: 10px
    padding-right: 20px
    border-right: solid 2px #dbdbdb
    cursor: pointer

  .menuText
    color: #36D1DC
    font-size: 24px
    font-weight: bold

  i.fa.fa-pencil
    cursor: pointer
    position: absolute
    top: 10px
    right: 70px
    padding: 10px
    padding-right: 20px
    border-right: solid 2px #dbdbdb

  i.fa.fa-trash
    cursor: pointer
    position: absolute
    top: 20px
    right: 30px

.content
  margin-top: 40px
  margin-left: auto
  margin-right: auto
  padding: 10px 20px
  width: 60%
  border: solid 1px rgba(#000,0.2)
  border-radius: 5px

  .title
    font-size: 28px
    font-weight: bold
    color: #5B86E5
    padding-top: 10px
    padding-bottom: 10px

  .time
    font-size: 16px
    color: #666
    padding-top: 5px
    padding-bottom: 5px

  .tag
    font-size: 16px
    padding-top: 5px
    padding-bottom: 5px
    color: #e8651c

  .text
    font-size: 20px
    padding-top: 10px
    padding-bottom: 10px

@media screen and (max-width: 480px)
  header
    padding: 10px
    height: 110px

    i.fa.fa-chevron-left


    .menuText
      font-size: 22px

    i.fa.fa-pencil
      top: 57px
      right: initial
      left: 7px

    i.fa.fa-trash
      top: 65px
      right: initial
      left: 75px

  .content
    width: 80%
</style>
