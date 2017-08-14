<template lang="pug">
.NoteListItems
  .noteContainer
    .topper
      i.fa.fa-bars
      span
        router-link(:to="{ name: 'View Note', params: { id: note.id } }")
          a.title(href="#") {{ note.title }}
    .time {{ parseTimeCreate(note.meta) }}
    .tag {{ note.tag }}
</template>

<script>
const moment = require('moment');

export default {
  props: ['note'],
  methods: {
    parseTimeCreate(time) {
      return moment(time).format('LLL');
    }
  }
}
</script>

<style lang="sass">
.noteContainer
  border: solid 1px #bbb
  border-radius: 5px
  padding: 20px
  letter-spacing: 1.5px
  margin: 10px
  margin-left: auto
  margin-right: auto
  width: 80%
  height: 150

  @media screen and (max-width: 480px)
    width: 100%

  .topper
    i.fa.fa-bars
      margin-right: 10px
      color: #b6b6b6
      font-size: 18px
      // cursor: grab

    .title
      color: #366ce2
      font-size: 26px
      font-weight: bold

  .time
    font-size: 16px
    margin-top: 10px

  .tag
    font-size: 18px
    margin-top: 10px
    color: #e8651c
</style>
