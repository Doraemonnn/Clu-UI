webpackJsonp([0],{"7dva":function(t,n){},ECEM:function(t,n){},KSaF:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),s={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var i=e("VU/8")({name:"App"},s,!1,function(t){e("KSaF")},null,null).exports,l=e("/ocq"),r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("ul",{staticClass:"home-mav"},t._l(t.navList,function(n,a){return e("li",{key:a,class:{active:a==t.itemIndex},on:{click:function(e){return t.toPage(n,a)}}},[t._v(t._s(n.label))])}),0),t._v(" "),e("div",{staticClass:"home-content"},[e("router-view")],1)])},staticRenderFns:[]},o=e("VU/8")({name:"Home",data:function(){return{itemIndex:0,navList:[{label:"按钮",name:"button",path:"/button"},{label:"弹框",name:"modal",path:"/modal"},{label:"树形控件",name:"tree",path:"/tree"}]}},methods:{toPage:function(t,n){this.$router.push({name:t.name}),this.itemIndex=n}}},r,!1,null,null,null).exports,c={name:"Button",data:function(){return{}},methods:{handleClick:function(){console.log(111)}}},u={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"row"},[e("cl-button",{on:{click:t.handleClick}},[t._v("按钮")]),t._v(" "),e("cl-button",{attrs:{round:""}},[t._v("按钮")]),t._v(" "),e("cl-button",{attrs:{disabled:""}},[t._v("按钮")])],1),t._v(" "),e("div",{staticClass:"row"},[e("cl-button",{attrs:{type:"primary"}},[t._v("primary")]),t._v(" "),e("cl-button",{attrs:{type:"success"}},[t._v("success")]),t._v(" "),e("cl-button",{attrs:{type:"warning"}},[t._v("warning")]),t._v(" "),e("cl-button",{attrs:{type:"danger"}},[t._v("danger")]),t._v(" "),e("cl-button",{attrs:{type:"info"}},[t._v("info")])],1),t._v(" "),e("div",{staticClass:"row"},[e("cl-button",{attrs:{plain:"",type:"primary"}},[t._v("primary")]),t._v(" "),e("cl-button",{attrs:{plain:"",type:"success"}},[t._v("success")]),t._v(" "),e("cl-button",{attrs:{plain:"",type:"warning"}},[t._v("warning")]),t._v(" "),e("cl-button",{attrs:{plain:"",type:"danger"}},[t._v("danger")]),t._v(" "),e("cl-button",{attrs:{plain:"",type:"info"}},[t._v("info")])],1),t._v(" "),e("div",{staticClass:"row"},[e("cl-button",{attrs:{type:"primary",disabled:""}},[t._v("primary")]),t._v(" "),e("cl-button",{attrs:{type:"success",disabled:""}},[t._v("success")]),t._v(" "),e("cl-button",{attrs:{type:"warning",disabled:""}},[t._v("warning")]),t._v(" "),e("cl-button",{attrs:{type:"danger",disabled:""}},[t._v("danger")]),t._v(" "),e("cl-button",{attrs:{type:"info",disabled:""}},[t._v("info")])],1),t._v(" "),e("div",{staticClass:"row"},[e("cl-button",{attrs:{plain:"",type:"primary",disabled:""}},[t._v("primary")]),t._v(" "),e("cl-button",{attrs:{plain:"",type:"success",disabled:""}},[t._v("success")]),t._v(" "),e("cl-button",{attrs:{plain:"",type:"warning",disabled:""}},[t._v("warning")]),t._v(" "),e("cl-button",{attrs:{plain:"",type:"danger",disabled:""}},[t._v("danger")]),t._v(" "),e("cl-button",{attrs:{plain:"",type:"info",disabled:""}},[t._v("info")])],1),t._v(" "),e("div",{staticClass:"row"},[e("cl-button",{attrs:{size:"medium"}},[t._v("medium")]),t._v(" "),e("cl-button",{attrs:{size:"small"}},[t._v("small")]),t._v(" "),e("cl-button",{attrs:{size:"mini"}},[t._v("mini")])],1)])},staticRenderFns:[]},d=e("VU/8")(c,u,!1,null,null,null).exports,v={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var p=e("VU/8")({},v,!1,function(t){e("U1lk")},null,null).exports,_={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var b=e("VU/8")({},_,!1,function(t){e("aIc5")},null,null).exports;a.a.use(l.a);var m=new l.a({routes:[{path:"/",redirect:"/button",name:"Home",component:o,children:[{path:"/button",name:"button",component:d},{path:"/modal",name:"modal",component:p},{path:"/tree",name:"tree",component:b}]}]}),f={name:"ClButton",props:{type:{type:String,default:"default"},size:String,disabled:Boolean,plain:Boolean,round:Boolean},computed:{buttonSize:function(){return this.size},buttonDisabled:function(){return this.disabled}},methods:{handleClick:function(t){this.$emit("click",t)}}},y={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"cl-button--",class:[t.type?"cl-button--"+t.type:"",t.buttonSize?"cl-button--"+t.buttonSize:"",{"is-disabled":t.buttonDisabled,"is-plain":t.plain,"is-round":t.round}],attrs:{disabled:t.buttonDisabled},on:{click:t.handleClick}},[t.$slots.default?e("span",[t._t("default")],2):t._e()])},staticRenderFns:[]};var h=e("VU/8")(f,y,!1,function(t){e("7dva")},null,null).exports;h.install=function(t){t.component(h.name,h)};const g=[h];var w={version:"1.0.0",install:function(t,n={}){g.forEach(n=>{t.component(n.name,n)})}};e("ECEM");a.a.config.productionTip=!1,a.a.use(w),new a.a({el:"#app",router:m,components:{App:i},template:"<App/>"})},U1lk:function(t,n){},aIc5:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.34720291031e3af4c546.js.map