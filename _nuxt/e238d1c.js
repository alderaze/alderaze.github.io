(window.webpackJsonp=window.webpackJsonp||[]).push([[12,14],{500:function(t,e,r){"use strict";r.r(e);var l={props:["info"],data:function(){return{dialog:!1}},methods:{dilo:function(){return this.dialog=!0}}},o=r(26),n=r(35),c=r.n(n),v=r(562),d=r(232),f=r(198),m=r(50),_=r(491),h=r(499),y=r(492),x=r(493),O=r(560),C=r(494),k=r(479),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){e.on;var r=e.attrs;return[t._t("default",null,{close:t.dilo},r)]}}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[t._v("User Profile")])]),t._v(" "),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Legal first name*",required:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Legal middle name",hint:"example of helper text only on focus"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Legal last name*",hint:"example of persistent helper text","persistent-hint":"",required:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Email*",required:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Password*",type:"password",required:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-select",{attrs:{items:["0-17","18-29","30-54","54+"],label:"Age*",required:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-autocomplete",{attrs:{items:["Skiing","Ice hockey","Soccer","Basketball","Hockey","Reading","Writing","Coding","Basejump"],label:"Interests",multiple:""}})],1)],1)],1),t._v(" "),r("small",[t._v("*indicates required field")])],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Close\n        ")]),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Save\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAutocomplete:v.a,VBtn:d.a,VCard:f.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VCol:_.a,VContainer:h.a,VDialog:y.a,VRow:x.a,VSelect:O.a,VSpacer:C.a,VTextField:k.a})},522:function(t,e,r){"use strict";r.r(e);var l=r(0),o=r(500),n=r(21);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"appCss",computed:v(v({},Object(n.b)("sklis",["cmd","githup","admin"])),Object(n.b)(["colortext","maincolor"])),components:{appDilo:o.default}},f=r(26),m=r(35),_=r.n(m),h=r(232),y=r(198),x=r(50),O=r(190),C=r(199),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:"",color:"transparent"}},[r("v-card-title",{staticClass:"display-1 font-weight-bold"},[t._v(" githup")]),t._v(" "),r("v-card",{staticClass:"mt-8",attrs:{flat:"",color:"transparent"}},[r("v-icon",{class:t.colortext,attrs:{size:"30"}},[t._v(t._s(t.githup.icon))]),t._v(" "),r("v-card-title",{staticClass:"d-inline"},[t._v(" "+t._s(t.githup.name))]),t._v(" "),r("v-progress-linear",{staticClass:"mt-3",attrs:{value:t.githup.val,height:"20",striped:"",color:"blue-grey"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.value;return[r("strong",[t._v(t._s(Math.ceil(l))+"%")])]}}])})],1),t._v(" "),r("v-card-title",{staticClass:"display-1 font-weight-bold"},[t._v("command line ")]),t._v(" "),r("v-card",{staticClass:"mt-8",attrs:{flat:"",color:"transparent"}},[r("v-icon",{class:t.colortext,attrs:{size:"30"}},[t._v(t._s(t.cmd.icon))]),t._v(" "),r("v-card-title",{staticClass:"d-inline"},[t._v(" "+t._s(t.cmd.name))]),t._v(" "),r("v-progress-linear",{staticClass:"mt-3",attrs:{value:t.cmd.val,height:"20",striped:"",color:"blue-grey"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.value;return[r("strong",[t._v(t._s(Math.ceil(l))+"%")])]}}])})],1),t._v(" "),r("appDilo",{attrs:{info:t.cmd},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.close;return[t.admin?r("v-btn",{staticClass:"mt-5",attrs:{fab:"",dark:"",small:"",color:t.maincolor},on:{click:l}},[r("v-icon",{attrs:{dark:""}},[t._v("\n               mdi-plus\n           ")])],1):t._e()]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VBtn:h.a,VCard:y.a,VCardTitle:x.c,VIcon:O.a,VProgressLinear:C.a})}}]);