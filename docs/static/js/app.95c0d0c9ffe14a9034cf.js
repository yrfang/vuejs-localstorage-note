webpackJsonp([1],{158:function(t,e,s){"use strict";var n=s(26),a=s(25),o=s(220),i=s.n(o),r=s(219),l=s.n(r),c=s(218),u=s.n(c);n.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"All Notes",component:i.a},{path:"/view/:id",name:"View Note",component:l.a,props:!0},{path:"/edit/:id",name:"Edit Note",component:u.a,props:!0},{path:"/new",name:"Create Note",component:u.a}]})},160:function(t,e){},161:function(t,e){},162:function(t,e,s){function n(t){s(210)}var a=s(13)(s(163),s(224),n,null,null);t.exports=a.exports},163:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},164:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(27),a=s.n(n),o=s(217);e.default={props:["id"],data:function(){return{note:{}}},mounted:function(){void 0!==this.id&&this.loadNote()},methods:{loadNote:function(){var t=this,e=localStorage.getItem("vuejs-note"),s=JSON.parse(e);void 0!==this.id?this.note=s.find(function(e){return e.id===t.id}):this.$router.push("/")},saveNote:function(){var t=this,e=localStorage.getItem("vuejs-note"),s=null===e?[]:JSON.parse(e),n=document.querySelector(".title"),i=(document.querySelector("textarea"),{title:this.note.title,id:this.note.id||o(),meta:Date.now(),tag:this.note.tag,text:this.note.text}),r=s.findIndex(function(e){return e.id===t.id});if(""==n.value.trim())return this.$router.push("/");void 0!==r&&r>=0?s[r]=i:s.push(i),localStorage.setItem("vuejs-note",a()(s)),this.$router.push("/")},goBack:function(){this.$router.push("/")}}}},165:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(27),a=s.n(n),o=s(0);e.default={props:["id"],data:function(){return{note:{}}},mounted:function(){this.loadNote()},methods:{loadNote:function(){var t=this,e=localStorage.getItem("vuejs-note"),s=null===e?[]:JSON.parse(e);this.note=s.find(function(e){return e.id===t.id}),this.note||this.$router.push("/")},parseTimeCreate:function(t){return o(t).format("LLL")},goBack:function(){this.$router.push("/")},editNote:function(){this.note&&this.$router.push({name:"Edit Note",params:{id:this.note.id}})},deleteNote:function(){var t=this,e=localStorage.getItem("vuejs-note"),s=null===e?[]:JSON.parse(e),n=s.findIndex(function(e){return e.id===t.id});confirm("Delete note?")&&(s.splice(n,1),localStorage.setItem("vuejs-note",a()(s)),this.$router.push("/"))}}}},166:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(169),a=s.n(n),o=s(221),i=s.n(o);e.default={components:{NoteListItems:i.a},data:function(){return{notes:[],searchWord:"",tags:(new a.a).add("all tags"),tag:"all tags"}},mounted:function(){this.loadNotes()},computed:{notesFiltered:function(){var t=this.searchWord.trim().toLowerCase(),e=this.tag;return this.notes.filter(function(e){if(""!==e.title){var s=function(e){return-1!==e.toLowerCase().indexOf(t)};return e.text=void 0===e.text?"":e.text,e.tag=void 0===e.tag?"":e.tag,""===t||s(e.title)||s(e.text)||s(e.tag)}}).filter(function(t){return"all tags"==e?t:"all tags"!==e?-1!==t.tag.indexOf(e):void 0})}},methods:{loadNotes:function(){var t=this,e=localStorage.getItem("vuejs-note");this.notes=null===e?[]:JSON.parse(e),this.notes.forEach(function(e){return t.tags.add(e.tag)})},createNote:function(){this.$router.push("new")}}}},167:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(0);e.default={props:["note"],methods:{parseTimeCreate:function(t){return n(t).format("LLL")}}}},168:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(26),a=s(25),o=s(162),i=s.n(o),r=s(158),l=s(159),c=s(161),u=(s.n(c),s(160));s.n(u);n.a.config.productionTip=!1,n.a.use(l.a),n.a.use(a.a),new n.a({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})},208:function(t,e){},209:function(t,e){},210:function(t,e){},211:function(t,e){},212:function(t,e){},213:function(t,e,s){function n(t){return s(a(t))}function a(t){var e=o[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var o={"./af":42,"./af.js":42,"./ar":49,"./ar-dz":43,"./ar-dz.js":43,"./ar-kw":44,"./ar-kw.js":44,"./ar-ly":45,"./ar-ly.js":45,"./ar-ma":46,"./ar-ma.js":46,"./ar-sa":47,"./ar-sa.js":47,"./ar-tn":48,"./ar-tn.js":48,"./ar.js":49,"./az":50,"./az.js":50,"./be":51,"./be.js":51,"./bg":52,"./bg.js":52,"./bn":53,"./bn.js":53,"./bo":54,"./bo.js":54,"./br":55,"./br.js":55,"./bs":56,"./bs.js":56,"./ca":57,"./ca.js":57,"./cs":58,"./cs.js":58,"./cv":59,"./cv.js":59,"./cy":60,"./cy.js":60,"./da":61,"./da.js":61,"./de":64,"./de-at":62,"./de-at.js":62,"./de-ch":63,"./de-ch.js":63,"./de.js":64,"./dv":65,"./dv.js":65,"./el":66,"./el.js":66,"./en-au":67,"./en-au.js":67,"./en-ca":68,"./en-ca.js":68,"./en-gb":69,"./en-gb.js":69,"./en-ie":70,"./en-ie.js":70,"./en-nz":71,"./en-nz.js":71,"./eo":72,"./eo.js":72,"./es":74,"./es-do":73,"./es-do.js":73,"./es.js":74,"./et":75,"./et.js":75,"./eu":76,"./eu.js":76,"./fa":77,"./fa.js":77,"./fi":78,"./fi.js":78,"./fo":79,"./fo.js":79,"./fr":82,"./fr-ca":80,"./fr-ca.js":80,"./fr-ch":81,"./fr-ch.js":81,"./fr.js":82,"./fy":83,"./fy.js":83,"./gd":84,"./gd.js":84,"./gl":85,"./gl.js":85,"./gom-latn":86,"./gom-latn.js":86,"./he":87,"./he.js":87,"./hi":88,"./hi.js":88,"./hr":89,"./hr.js":89,"./hu":90,"./hu.js":90,"./hy-am":91,"./hy-am.js":91,"./id":92,"./id.js":92,"./is":93,"./is.js":93,"./it":94,"./it.js":94,"./ja":95,"./ja.js":95,"./jv":96,"./jv.js":96,"./ka":97,"./ka.js":97,"./kk":98,"./kk.js":98,"./km":99,"./km.js":99,"./kn":100,"./kn.js":100,"./ko":101,"./ko.js":101,"./ky":102,"./ky.js":102,"./lb":103,"./lb.js":103,"./lo":104,"./lo.js":104,"./lt":105,"./lt.js":105,"./lv":106,"./lv.js":106,"./me":107,"./me.js":107,"./mi":108,"./mi.js":108,"./mk":109,"./mk.js":109,"./ml":110,"./ml.js":110,"./mr":111,"./mr.js":111,"./ms":113,"./ms-my":112,"./ms-my.js":112,"./ms.js":113,"./my":114,"./my.js":114,"./nb":115,"./nb.js":115,"./ne":116,"./ne.js":116,"./nl":118,"./nl-be":117,"./nl-be.js":117,"./nl.js":118,"./nn":119,"./nn.js":119,"./pa-in":120,"./pa-in.js":120,"./pl":121,"./pl.js":121,"./pt":123,"./pt-br":122,"./pt-br.js":122,"./pt.js":123,"./ro":124,"./ro.js":124,"./ru":125,"./ru.js":125,"./sd":126,"./sd.js":126,"./se":127,"./se.js":127,"./si":128,"./si.js":128,"./sk":129,"./sk.js":129,"./sl":130,"./sl.js":130,"./sq":131,"./sq.js":131,"./sr":133,"./sr-cyrl":132,"./sr-cyrl.js":132,"./sr.js":133,"./ss":134,"./ss.js":134,"./sv":135,"./sv.js":135,"./sw":136,"./sw.js":136,"./ta":137,"./ta.js":137,"./te":138,"./te.js":138,"./tet":139,"./tet.js":139,"./th":140,"./th.js":140,"./tl-ph":141,"./tl-ph.js":141,"./tlh":142,"./tlh.js":142,"./tr":143,"./tr.js":143,"./tzl":144,"./tzl.js":144,"./tzm":146,"./tzm-latn":145,"./tzm-latn.js":145,"./tzm.js":146,"./uk":147,"./uk.js":147,"./ur":148,"./ur.js":148,"./uz":150,"./uz-latn":149,"./uz-latn.js":149,"./uz.js":150,"./vi":151,"./vi.js":151,"./x-pseudo":152,"./x-pseudo.js":152,"./yo":153,"./yo.js":153,"./zh-cn":154,"./zh-cn.js":154,"./zh-hk":155,"./zh-hk.js":155,"./zh-tw":156,"./zh-tw.js":156};n.keys=function(){return Object.keys(o)},n.resolve=a,t.exports=n,n.id=213},218:function(t,e,s){function n(t){s(212)}var a=s(13)(s(164),s(226),n,"data-v-7e93f6c0",null);t.exports=a.exports},219:function(t,e,s){function n(t){s(211)}var a=s(13)(s(165),s(225),n,"data-v-7bb03f04",null);t.exports=a.exports},220:function(t,e,s){function n(t){s(208)}var a=s(13)(s(166),s(222),n,null,null);t.exports=a.exports},221:function(t,e,s){function n(t){s(209)}var a=s(13)(s(167),s(223),n,null,null);t.exports=a.exports},222:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"NoteList"},[s("div",{staticClass:"topBar"},[s("div",{staticClass:"row searchBar"},[s("i",{staticClass:"fa fa-search"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchWord,expression:"searchWord"}],staticClass:"form-control search",attrs:{placeholder:"search the notes"},domProps:{value:t.searchWord},on:{input:function(e){e.target.composing||(t.searchWord=e.target.value)}}})]),s("div",{staticClass:"row"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.tag,expression:"tag"}],staticClass:"tagSelect",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.tag=e.target.multiple?s:s[0]}}},t._l(Array.from(t.tags),function(e){return s("option",[t._v(t._s(e))])})),s("button",{staticClass:"addNote",on:{click:t.createNote}},[t._v("Add Note")])])]),s("div",{staticClass:"items"},[s("ul",t._l(t.notesFiltered,function(t){return s("li",[s("NoteListItems",{attrs:{note:t}})],1)}))])])},staticRenderFns:[]}},223:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"NoteListItems"},[s("div",{staticClass:"noteContainer"},[s("div",{staticClass:"topper"},[s("i",{staticClass:"fa fa-bars"}),s("span",[s("router-link",{attrs:{to:{name:"View Note",params:{id:t.note.id}}}},[s("a",{staticClass:"title",attrs:{href:"#"}},[t._v(t._s(t.note.title))])])],1)]),s("div",{staticClass:"time"},[t._v(t._s(t.parseTimeCreate(t.note.meta)))]),s("div",{staticClass:"tag"},[t._v(t._s(t.note.tag))])])])},staticRenderFns:[]}},224:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}},225:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Note"},[s("header",[s("a",{staticClass:"backToList"},[s("span",{on:{click:function(e){t.goBack()}}},[s("i",{staticClass:"fa fa-chevron-left"})]),s("span",{staticClass:"menuText"},[t._v("Viewing Note")])]),s("a",{on:{click:function(e){t.editNote()}}},[s("i",{staticClass:"fa fa-pencil"})]),s("a",{on:{click:function(e){t.deleteNote()}}},[s("i",{staticClass:"fa fa-trash"})])]),s("div",{staticClass:"content"},[s("div",{staticClass:"title"},[t._v(t._s(t.note.title))]),s("div",{staticClass:"time"},[t._v(t._s(t.parseTimeCreate(t.note.meta)))]),s("div",{staticClass:"tag"},[t._v(" "+t._s(t.note.tag))]),s("div",{staticClass:"text"},[t._v(t._s(t.note.text))])])])},staticRenderFns:[]}},226:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"CreateNote"},[s("header",[s("a",{staticClass:"backToList"},[s("span",{on:{click:t.goBack}},[s("i",{staticClass:"fa fa-chevron-left"})]),s("span",{staticClass:"menuText"},[t._v(t._s(void 0!==this.id?"Editing Note":"Create Note"))])]),s("a",{on:{click:t.saveNote}},[s("button",{staticClass:"saveNote"},[t._v("Save")])])]),s("div",{staticClass:"content"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.note.title,expression:"note.title"}],staticClass:"title",attrs:{placeholder:"Note title is required"},domProps:{value:t.note.title},on:{input:function(e){e.target.composing||(t.note.title=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.note.tag,expression:"note.tag"}],staticClass:"tag",attrs:{placeholder:"Note tag"},domProps:{value:t.note.tag},on:{input:function(e){e.target.composing||(t.note.tag=e.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note.text,expression:"note.text"}],attrs:{placeholder:"Note..."},domProps:{value:t.note.text},on:{input:function(e){e.target.composing||(t.note.text=e.target.value)}}})])])},staticRenderFns:[]}}},[168]);
//# sourceMappingURL=app.95c0d0c9ffe14a9034cf.js.map