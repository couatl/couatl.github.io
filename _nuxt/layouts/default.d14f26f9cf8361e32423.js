webpackJsonp([4],{"+BPp":function(t,e,o){"use strict";var i=o("ov1I"),a=!1;var n=function(t){a||o("cZ1u")},s=o("VU/8")(null,i.a,!1,n,null,null);s.options.__file="components/CustomFooter.vue",e.a=s.exports},"0Wwx":function(t,e,o){var i=o("yryj");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("rjj0")("30c330bc",i,!1,{sourceMap:!1})},"18CE":function(t,e,o){var i=o("vnbr");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("rjj0")("08a4f2ae",i,!1,{sourceMap:!1})},DLCH:function(t,e,o){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("app-header"),e("nuxt"),e("custom-footer")],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[]};e.a=a},Ma2J:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("enx4"),a=o("DLCH"),n=!1;var s=function(t){n||o("0Wwx")},r=o("VU/8")(i.a,a.a,!1,s,null,null);r.options.__file="layouts/default.vue",e.default=r.exports},O7IV:function(t,e,o){"use strict";var i=o("PKtZ"),a=o("V6Rc"),n=!1;var s=function(t){n||o("18CE")},r=o("VU/8")(i.a,a.a,!1,s,null,null);r.options.__file="components/AppHeader.vue",e.a=r.exports},PKtZ:function(t,e,o){"use strict";e.a={data:function(){return{showMobileMenu:!1,scrollPosition:null}},methods:{toggle:function(){this.showMobileMenu=!this.showMobileMenu},updateScroll:function(){this.scrollPosition=window.scrollY}},mounted:function(){window.addEventListener("scroll",this.updateScroll)},destroy:function(){window.removeEventListener("scroll",this.updateScroll)}}},V6Rc:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("div",{staticClass:"navbar",class:{navbar__show:t.scrollPosition>0}},[o("div",{staticClass:"navbar__links"},[o("div",{staticClass:"navbar__link"},[o("nuxt-link",{staticClass:"menu-item",attrs:{to:"/"}},[t._v("Home")])],1),o("span",[t._v("/")]),o("div",{staticClass:"navbar__link"},[o("nuxt-link",{staticClass:"menu-item",attrs:{to:"/about"}},[t._v("About")])],1),o("span",[t._v("/")]),o("div",{staticClass:"navbar__link"},[o("nuxt-link",{staticClass:"menu-item",attrs:{to:"/projects"}},[t._v("Projects")])],1),o("span",[t._v("/")]),o("div",{staticClass:"navbar__link"},[o("nuxt-link",{staticClass:"menu-item",attrs:{to:"/contact"}},[t._v("Contact")])],1)]),t._m(0)]),o("div",{staticClass:"mobile-navbar__overlay",class:{mobileNavbar__overlayActive:t.showMobileMenu},on:{click:t.toggle}}),o("div",{staticClass:"mobile-navbar-icon ",class:{active:t.showMobileMenu},on:{click:t.toggle}},[o("span",{staticClass:"line-1"}),o("span",{staticClass:"line-2"}),o("span",{staticClass:"line-3"})]),o("div",{staticClass:"mobile-navbar",class:{mobileNavbar__triggered:t.showMobileMenu}},[o("div",{staticClass:"mobile-navbar__header"},[o("nuxt-link",{attrs:{to:"/"}},[t._v("\n      Home\n      ")])],1),o("div",{staticClass:"mobile-navbar__link"},[o("nuxt-link",{staticClass:"menu-item",attrs:{to:"/about"},on:{click:t.toggle}},[o("font-awesome-icon",{attrs:{icon:"address-card"}}),t._v("\n        About\n      ")],1),o("nuxt-link",{staticClass:"menu-item",attrs:{to:"/projects"}},[o("font-awesome-icon",{attrs:{icon:"briefcase"}}),t._v("\n        Projects\n      ")],1),o("nuxt-link",{staticClass:"menu-item",attrs:{to:"/contact"}},[o("font-awesome-icon",{attrs:{icon:"phone"}}),t._v("\n        Contact\n      ")],1)],1),t._m(1)])])};i._withStripped=!0;var a={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"lang"},[e("div",{staticClass:"lang__ru"},[this._v("Русский")]),e("span",[this._v("/")]),e("div",{staticClass:"lang__eng"},[this._v("eng")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mobile-navbar-lang"},[e("div",{staticClass:"mobile-navbar-lang__ru"},[this._v("Русский")]),e("span",[this._v(" / ")]),e("div",{staticClass:"mobile-navbar-lang__eng active"},[this._v("Eng")])])}]};e.a=a},cZ1u:function(t,e,o){var i=o("w/Yv");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("rjj0")("75f30d70",i,!1,{sourceMap:!1})},enx4:function(t,e,o){"use strict";var i=o("O7IV"),a=o("+BPp");e.a={components:{AppHeader:i.a,CustomFooter:a.a}}},kxFB:function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},n2k6:function(t,e,o){t.exports=o.p+"fonts/Nickainley-Normal.4e9af62.otf"},ov1I:function(t,e,o){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"custom-footer"},[e("div",{staticClass:"custom-footer__grid"},[this._m(0),this._m(1),e("div",{staticClass:"custom-footer__links"},[e("div",{staticClass:"custom-footer__links_item"},[e("a",{attrs:{href:"https://www.facebook.com/nadia.svoykina"}},[e("font-awesome-icon",{attrs:{icon:["fab","facebook-f"]}})],1)]),e("div",{staticClass:"custom-footer__links_item"},[e("a",{attrs:{href:"https://t.me/couatl"}},[e("font-awesome-icon",{attrs:{icon:["fab","telegram"]}})],1)]),e("div",{staticClass:"custom-footer__links_item"},[e("a",{attrs:{href:"https://github.com/couatl"}},[e("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)]),e("div",{staticClass:"custom-footer__links_item"},[e("a",{attrs:{href:"https://www.instagram.com/couatl/"}},[e("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1)])])])])};i._withStripped=!0;var a={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"custom-footer__name"},[this._v("\n        Svoykina "),e("br"),this._v("\n        Nadya\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"custom-footer__thanks"},[e("div",{staticClass:"custom-footer__thanks-title"},[this._v("Thanks:")]),e("div",[e("a",{attrs:{href:"https://www.behance.net/seniorsstudio"}},[this._v("Seniors Studio")]),this._v(" - "),e("a",{attrs:{href:"http://www.fontfabric.com/nickainley-free-font"}},[this._v("Nickainley font")])]),e("div",[e("a",{attrs:{href:"http://www.fontfabric.com/nickainley-free-font"}},[this._v("Cathedral Icon")])])])}]};e.a=a},vnbr:function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,".navbar{position:fixed;top:2em;left:2em;right:5em;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;text-transform:uppercase;letter-spacing:3px;z-index:999;-webkit-transition:all .25s ease;transition:all .25s ease}.navbar div{display:inline;margin:.5em}.navbar .menu-item{color:#000;outline:none;cursor:pointer;text-decoration:none;-webkit-transition:all .25s ease;transition:all .25s ease}.navbar .menu-item:hover{color:darkred;-webkit-box-shadow:0 2px darkred;box-shadow:0 2px darkred}.navbar__show{background-color:#722a30;color:#fff;top:0;left:0;width:100%;padding:1em 5em 1em 2em;border-bottom:1px solid #4c1a1e}.navbar__show .menu-item{color:#fff}.navbar__show .lang div:hover,.navbar__show .menu-item:hover{color:#fff;-webkit-box-shadow:0 2px #fff;box-shadow:0 2px #fff}.lang{text-transform:uppercase;letter-spacing:1px;display:none}.lang div{display:inline;margin:.5em;-webkit-transition:all .25s ease;transition:all .25s ease;cursor:pointer;display:none}.lang *{display:none}.lang div:hover{color:darkred;-webkit-box-shadow:0 2px darkred;box-shadow:0 2px darkred}.mobile-navbar-icon{display:none;-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;position:fixed;top:2em;left:2em;z-index:200;background-color:darkred;padding:1em;border-radius:100%;background:-webkit-gradient(linear,left top,right top,from(#722a30),to(#ef8e49));background:linear-gradient(90deg,#722a30,#ef8e49);-webkit-box-shadow:0 2px 3em -1em #722a30;box-shadow:0 2px 3em -1em #722a30;width:4em;height:4em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.mobile-navbar__overlay{width:100%;height:100%;background:rgba(0,0,0,.3);position:fixed;z-index:100;display:none}.mobileNavbar__overlayActive{display:block}.mobile-navbar-icon .line-1,.mobile-navbar-icon .line-2,.mobile-navbar-icon .line-3{border-top:2px solid #fff;display:block;-webkit-transition:margin .5s,-webkit-transform .5s;transition:margin .5s,-webkit-transform .5s;transition:margin .5s,transform .5s;transition:margin .5s,transform .5s,-webkit-transform .5s;width:2em}.mobile-navbar-icon .line-2{margin:.5em 0}.mobile-navbar{position:fixed;width:100%;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#fff;z-index:150;-webkit-transition:all .5s;transition:all .5s;-webkit-transform:translate3d(0,-200%,0);transform:translate3d(0,-200%,0);-webkit-box-shadow:#000 0 -9px 50px -10px;box-shadow:0 -9px 50px -10px #000;border-radius:0 0 2em 2em;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.mobile-navbar,.mobile-navbar__link .menu-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.mobile-navbar__link .menu-item{text-decoration:none;color:#000;background:#f6f6f6;padding:5px;border-radius:8px;width:5em;margin:5px}.mobile-navbar__link{font-size:1.6em;font-weight:600;margin-top:1em;margin-bottom:1em;display:-webkit-box;display:-ms-flexbox;display:flex}.active .line-1,.active .line-2,.active .line-3{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.active .line-2{opacity:0;margin:-2px 0}.active .line-3{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.mobileNavbar__triggered{-webkit-transform:translateZ(0);transform:translateZ(0)}.mobile-navbar__header{font-size:1.7em;padding:1.5em;font-weight:700;color:#000;width:100%;text-align:center;border-bottom:2px solid hsla(0,0%,50%,.2);color:darkred;margin-left:2em}.mobile-navbar-lang{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:1.4em;padding:1em;display:none}.mobile-navbar-lang div{margin-left:5px;margin-right:5px;border:1px solid hsla(0,0%,66%,.85098);border-radius:5px;padding-right:10px;padding-left:10px}@media (max-width:680px){.lang,.navbar{display:none}.mobile-navbar-icon{display:-webkit-box;display:-ms-flexbox;display:flex}}",""])},"w/Yv":function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,"footer{background-color:#732a2f;color:#fff;padding:2em;text-align:center}footer a{color:hsla(0,0%,100%,.6)}footer a:hover{color:hsla(0,0%,100%,.8)}.custom-footer{color:hsla(0,0%,100%,.6)}.custom-footer__name{text-transform:uppercase;color:hsla(0,0%,100%,.4);letter-spacing:8px;text-align:left;font-size:1.2em;cursor:default}.custom-footer__grid{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.custom-footer__grid,.custom-footer__links{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.custom-footer__links{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:1.8em}.custom-footer__thanks{width:60%;text-align:left}.custom-footer__links_item{margin-top:.5em;margin-left:.7em;text-align:left}.custom-footer__thanks-title{font-style:italic}@media (max-width:680px){.custom-footer__name{display:none}}",""])},yryj:function(t,e,o){var i=o("kxFB");(t.exports=o("FZ+f")(!1)).push([t.i,"body{margin:0}html{font-family:Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}*,:after,:before,html{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{margin:0}a{color:#000}li{list-style:none}a,a>*{outline:none;cursor:pointer;text-decoration:none}.button-orange{display:inline-block;border-radius:4px;border:1px solid #b86323;color:#b86323;text-decoration:none;padding:10px 30px}.button-orange:hover{color:#fff;background-color:#b86323}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}@font-face{font-family:Nickainley;src:url("+i(o("n2k6"))+");font-weight:400;font-style:normal}@media (max-width:680px){html{font-size:12px}}",""])}});