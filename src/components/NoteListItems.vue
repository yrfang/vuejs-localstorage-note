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

@media screen and (max-width: 480px)
  .noteContainer
    margin-bottom: 15px

@media screen and (max-width: 767px)
  .noteContainer
    padding: 20px 15px
    width: 100%

    .topper
      .title
        font-size: 22px
      .time
        font-size: 10px
      .tag
        font-size: 14px

@media (min-width: 480px) and (max-width: 960px)
  .noteContainer
    padding: 20px 30px
    width: 90%

@media screen and (min-width: 960px)
  .noteContainer
    width: 90%

</style>
