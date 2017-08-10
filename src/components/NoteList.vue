<template lang="pug">
.NoteList
  .topBar
    .row.searchBar
      i.fa.fa-search
      input.form-control.search(placeholder="search your notes")
    .row
      select.tagSelect
        option(v-for="i in 5") {{i}}
      button.addNote Add Note
  .row.NoteListItem
    .noteContainer(v-for="(note,id) in notes")
      .topper
        i.fa.fa-bars
        span
          a.title(href="#") {{id}} : {{ note.title }}
      .time {{ note.meta }}
      .tag {{ note.tag }}
</template>

<script>
export default {
  data() {
    return {
      notes: [],
    }
  },
  mounted() {
    this.loadNotes();
  },
  methods: {
    loadNotes() {
      var testData = [
        { title: 'note title 1', meta: 'Added 20 days ago', text: 'the example from Bootstrapping', tag: 'work' },
        { title: 'note title 2', meta: 'Added 15 days ago', text: 'the example from Bootstrapping', tag: 'family' },
        { title: 'And another one', meta: 'Added 10 days ago', text: 'the example', tag: 'family' },
        {title: 'the example from Bootstrapping', meta: 'created and learned on 2017/07/25', tag: 'important'},
        { title: 'And another one', meta: 'Added 10 days ago', text: 'the example', tag: 'family' }
      ];
      // console.log(testData);
      this.notes = testData;
    }
  },
}
</script>

<style lang="sass">
h3
  font-weight: bold

.NoteList
  position: relative

.topBar
  padding: 20px 30px
  margin-bottom: 30px
  position: fixed
  top: 0px
  left: 0px
  width: 100%
  background-color: #eee

  .searchBar
    position: relative

    i.fa.fa-search
      position: absolute
      top: 10px
      left: 20px
      font-size: 24px
      font-weight: 100
      color: rgba(#000, 0.2)

    input.search
      padding-top: 10px
      padding-bottom: 10px
      padding-left: 50px
      margin-right: 15px
      margin-bottom: 10px
      font-size: 18px
      width: 100%
      height: 45px

  select.tagSelect
    width: 20%
    height: 45px
    margin-right: 15px
    padding: 5px 10px
    background-color: #fff
    border: solid 1px rgba(#000, 0.2)

  button.addNote
    border: none
    border-radius: 5px
    background-color: #366ce2
    color: #fff
    font-size: 18px
    padding: 5px 10px
    height: 45px
    cursor: pointer
    &:focus
      outline: none
    &:hover
      background-color: rgba(#366ce2,0.7)

.NoteListItem
  padding-left: 100px
  padding-right: 100px
  position: fixed
  top: 200px
  left: 0px
  right: 0px
  bottom: 20px
  width: 100%
  overflow-y: scroll
  z-index: -10

.noteContainer
  border: solid 1px #bbb
  border-radius: 5px
  padding: 20px
  letter-spacing: 1.5px
  margin: 10px
  margin-left: auto
  margin-right: auto
  width: 80%
  height: 150px

  .topper
    i.fa.fa-bars
      margin-right: 10px
      color: #b6b6b6
      font-size: 18px
      cursor: grab

    .title
      color: #366ce2
      font-size: 24px
      font-weight: bold

  .time
    font-size: 16px
    margin-top: 10px

  .tag
    font-size: 18px
    margin-top: 10px

@media (min-width:480px)
  input
    width: 100%
</style>
