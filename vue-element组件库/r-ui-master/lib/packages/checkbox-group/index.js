!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("checkbox-group",[],t):"object"==typeof exports?exports["checkbox-group"]=t():e["checkbox-group"]=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=194)}({137:function(e,t,n){},15:function(e,t,n){"use strict";function o(e,t,n,o,r,i,u,c){var f,s="function"==typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=n,s._compiled=!0),o&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),u?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},s._ssrRegister=f):r&&(f=c?function(){r.call(this,this.$root.$options.shadowRoot)}:r),f)if(s.functional){s._injectStyles=f;var a=s.render;s.render=function(e,t){return f.call(t),a(e,t)}}else{var p=s.beforeCreate;s.beforeCreate=p?[].concat(p,f):[f]}return{exports:e,options:s}}n.d(t,"a",(function(){return o}))},194:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this.$createElement;return(this._self._c||e)("div",[this._t("default")],2)};o._withStripped=!0;var r={name:"r-checkbox-group",props:{value:{type:Array}},provide:function(){return{CKGroup:this}}},i=n(15),u=Object(i.a)(r,o,[],!1,null,"5b0ed47d",null);u.options.__file="packages/components/checkbox-group/index.vue";var c=u.exports;n(137);c.install=function(e){e.component("r-checkbox-group",c)};t.default=c}}).default}));
//# sourceMappingURL=index.js.map