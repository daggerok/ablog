(window.webpackJsonp=window.webpackJsonp||[]).push([[4,8],{357:function(t,e,n){},361:function(t,e,n){"use strict";n(357)},391:function(t,e,n){},396:function(t,e,n){"use strict";n.r(e);var s={name:"Tags",data:function(){return{enabled:!1}},computed:{tags:function(){return["one","two","3"]}},methods:{toggle:function(){this.enabled=!this.enabled}}},o=(n(361),n(35)),a=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tags"},[n("h3",{staticClass:"tags__title",on:{click:t.toggle}},[t._v("Tags")]),t._v(" "),t._l(t.tags,(function(e){return t.enabled?n("ul",{staticClass:"tags__list"},[n("li",[t._v(t._s(e))])]):t._e()}))],2)}),[],!1,null,"7e496ab8",null);e.default=a.exports},445:function(t,e,n){"use strict";n(391)},452:function(t,e,n){"use strict";n.r(e);var s=n(449),o=n(396);console.log("Initialize Tags component");var a={name:"FooterredLayout",components:{ParentLayout:s.default,Tags:o.default},mounted:function(){console.log("Mount Tags component")}},i=(n(445),n(35)),r=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"layout-with-footer__parent-layout-content"},[e("ParentLayout")],1),this._v(" "),e("Tags"),this._v(" "),this._m(0)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"layout-with-footer__footer-content"},[this._v("\n    Copyright © 2022-present "),e("strong",[this._v("MIT")]),this._v(" | "),e("a",{attrs:{href:"https://github.com/daggerok/ablog"}},[this._v("Maksim Kostromin")])])}],!1,null,"a6172480",null);e.default=r.exports}}]);