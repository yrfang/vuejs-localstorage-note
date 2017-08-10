<template lang="pug">
.NoteList
  .row
    h3 Keep Your Notes with Local Storage
  .row.infoBar
    i.fa.fa-search
    input.form-control.search(placeholder="search your notes")
    button.addNote Add Note
  .row.NoteListItem
    .noteContainer(v-for="note in notes")
      .topper
        i.fa.fa-bars
        span
          a.title(href="#") {{ note.title }}
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
        { title: 'And another 3', meta: 'Added 3 days ago' , text: 'hi', tag: ''},
        {title: 'the example from Bootstrapping', meta: 'created and learned on 2017/07/25'}
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

.infoBar
  position: relative

  i.fa.fa-search
    position: absolute
    top: 10px
    left: 15px
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
    width: 90%
    height: 45px

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

.noteContainer
  border: solid 1px #bbb
  border-radius: 5px
  padding: 20px
  letter-spacing: 1.5px
  margin: 10px
  width: 100%
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
