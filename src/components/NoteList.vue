<template lang="pug">
.NoteList
  .topBar
    .row
      .searchBar
        i.fa.fa-search
        input.search(placeholder="search the notes", v-model="searchWord")
    .row
      select.tagSelect(v-model="tag")
        option(v-for="tag in Array.from(tags)") {{ tag }}
      button.addNote(@click="createNote") Add Note
  .items
    ul
      li(v-for="(note,index) in notesFiltered")
        NoteListItems(:note="note")
</template>

<script>
import NoteListItems from '@/components/NoteListItems';

export default {
  components: { NoteListItems },
  data() {
    return {
      notes: [],
      searchWord: '',
      tags: new Set().add('all tags'),
      tag: 'all tags',
    }
  },
  mounted() {
    this.loadNotes();
  },
  computed: {
    notesFiltered() {
      const searchWord = this.searchWord.trim().toLowerCase();
      const headings = ['title','text', 'tag'];
      const tag = this.tag;

      return this.notes.filter((note)=>{
        // console.log(note['title']);
        if (note['title'] !== '') {
          note['text'] = (undefined === note['text'] ? '' : note['text']);
          note['tag'] = (undefined === note['tag'] ? '' : note['tag']);

          function LowerSearch(obj) {
             return (obj.toLowerCase().indexOf(searchWord) !== -1)
          };

          return (searchWord === "" ||
          LowerSearch(note['title']) ||
          LowerSearch(note['text']) ||
          LowerSearch(note['tag']) );
        }
      }).filter((note) => {
        if (tag == 'all tags') return note;
        if (tag !== 'all tags') {
          return (note['tag'].indexOf(tag) !== -1);
        }
      });
    },
  },
  methods: {
    loadNotes() {
      const testData = [
        {
          title: 'note 1',
          meta: 1502445791235,
          tag: "work",
          text: "the first record...Strange first one",
        },
        {
          title: 'note 2',
          meta: 1502445791235,
          tag: "work",
          text: "the 2 record",
        },
        {
          title: 'note 3',
          meta: 1502445791235,
          tag: "work",
          text: "the 3 record",
        },
      ];
      // localStorage.setItem('vuejs-note', JSON.stringify(testData));
      const getLocalNotes = localStorage.getItem('vuejs-note');
      this.notes = (null === getLocalNotes?[]:JSON.parse(getLocalNotes));
      // console.log(this.notes);

      this.notes.forEach((note)=>{
        if (note['tag'] !== '') {
          return this.tags.add((note['tag']));
        }
      });
    },
    createNote() {
      this.$router.push('new');
    },
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
  position: fixed
  top: 0px
  left: 0px
  width: 100%
  background-color: #eee

  .searchBar
    position: relative
    width: 100%

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
      font-size: 18px
      width: 100%
      height: 45px

  select.tagSelect
    width: 200px
    height: 45px
    margin-right: 15px
    margin-top: 10px
    padding: 5px 10px
    background-color: #fff
    border: solid 1px rgba(#000, 0.2)

    @media screen and (max-width: 480px)
        width: 50%
        margin-right: 10px

  button.addNote
    margin-top: 10px
    border: solid 1px rgba(#000, 0.2)
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

    @media screen and (max-width: 480px)
        width: 45%

.items
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

  @media screen and (max-width: 480px)
    padding-left: 25px
    padding-right: 30px
    top: 150px

  @media (min-width: 480px) and (max-width: 960px)
    padding-left: 40px
    padding-right: 40px

  ul
    margin-left: auto
    margin-right: auto
    padding: 0px
    li
      list-style: none
      vertical-align: top

      @media screen and (min-width: 768px)
        width: 50%
        display: inline-block
</style>
