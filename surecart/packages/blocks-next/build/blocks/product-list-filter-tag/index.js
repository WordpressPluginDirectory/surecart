!function(){"use strict";var e={7005:function(e,t,r){var n=r(1609),a=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};t.jsx=function(e,t,r){var n,l={},u=null,i=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(i=t.ref),t)o.call(t,n)&&!s.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:a,type:e,key:u,ref:i,props:l,_owner:c.current}}},9255:function(e,t,r){e.exports=r(7005)},1609:function(e){e.exports=window.React}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e=window.wp.blocks,t=window.wp.primitives,n=r(9255),a=(0,n.jsx)(t.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(t.Path,{d:"M4.75 4a.75.75 0 0 0-.75.75v7.826c0 .2.08.39.22.53l6.72 6.716a2.313 2.313 0 0 0 3.276-.001l5.61-5.611-.531-.53.532.528a2.315 2.315 0 0 0 0-3.264L13.104 4.22a.75.75 0 0 0-.53-.22H4.75ZM19 12.576a.815.815 0 0 1-.236.574l-5.61 5.611a.814.814 0 0 1-1.153 0L5.5 12.264V5.5h6.763l6.5 6.502a.816.816 0 0 1 .237.574ZM8.75 9.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"})}),o=window.wp.blockEditor,c=window.wp.i18n,s=r(1609),l=r.n(s);function u(e){let{name:t,...r}=e;const[n,a]=(0,s.useState)(null),o=window?.scData?.plugin_url+"/dist/icon-assets";if((0,s.useEffect)((()=>{fetch(`${o}/${t}.svg`).then((e=>e.text())).then((e=>{const t=(new DOMParser).parseFromString(e,"image/svg+xml");a(t?.documentElement)})).catch(console.error)}),[t]),!n)return null;const c={...Array.from(n.attributes).reduce(((e,t)=>(e[t.name.replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()}))]=t.value,e)),{}),...r};return l().createElement(n.tagName,{...c,dangerouslySetInnerHTML:{__html:n.innerHTML}})}var i=JSON.parse('{"UU":"surecart/product-list-filter-tag"}');(0,e.registerBlockType)(i.UU,{icon:a,edit:e=>{let{context:{"surecart/filterTag/name":t},__unstableLayoutClassNames:r}=e;const n=(0,o.useBlockProps)({className:"sc-tag sc-tag--default sc-tag--medium"+r,role:"button"});return React.createElement("div",n,React.createElement("span",{className:"tag__content"},t),React.createElement(u,{name:"x",className:"sc-tag__clear","aria-label":(0,c.__)("Remove tag","surecart")}))}})}()}();