!function(){"use strict";var e,t={7652:function(e,t,n){var c=window.wp.blocks,r=window.wp.i18n,a=window.wp.blockEditor,o=window.wp.components,s=window.React,l=n.n(s);function i(e){let{name:t,...n}=e;const[c,r]=(0,s.useState)(null),a=window?.scData?.plugin_url+"/dist/icon-assets";if((0,s.useEffect)((()=>{fetch(`${a}/${t}.svg`).then((e=>e.text())).then((e=>{const t=(new DOMParser).parseFromString(e,"image/svg+xml");r(t?.documentElement)})).catch(console.error)}),[t]),!c)return null;const o={...Array.from(c.attributes).reduce(((e,t)=>(e[t.name]=t.value,e)),{}),...n};return l().createElement(c.tagName,{...o,dangerouslySetInnerHTML:{__html:c.innerHTML}})}var u=JSON.parse('{"UU":"surecart/cart-menu-icon-button"}');(0,c.registerBlockType)(u.UU,{icon:React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",width:"16",height:"16",viewBox:"0 0 28 28",stroke:"currentColor",style:{fill:"none"},strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},React.createElement("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),React.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),React.createElement("path",{d:"M16 10a4 4 0 0 1-8 0"})),edit:e=>{let{attributes:t,setAttributes:n}=e;const{cart_icon:c,cart_menu_always_shown:s}=t,l=(0,a.useBlockProps)({style:{fontSize:"16px",fontFamily:"var(--sc-font-sans)"}});return React.createElement("div",null,React.createElement(a.InspectorControls,null,React.createElement(o.PanelBody,{title:(0,r.__)("Settings","surecart")},React.createElement(o.PanelRow,null,React.createElement("div",{style:{marginBottom:20,width:"100%",flex:"flex-1"}},React.createElement("h2",{className:"components-truncate components-text components-heading"},(0,r.__)("Icon","surecart")),React.createElement("div",{className:"sc-choices"},React.createElement("div",{className:"sc-choice "+("shopping-bag"===c?"sc-choice--checked":""),onClick:()=>n({cart_icon:"shopping-bag"})},React.createElement(i,{name:"shopping-bag",class:"shopping-bag"===c?"active":""})),React.createElement("div",{className:"sc-choice "+("shopping-cart"===c?"sc-choice--checked":""),onClick:()=>n({cart_icon:"shopping-cart"})},React.createElement(i,{name:"shopping-cart",class:"shopping-cart"===c?"active":""}))))),React.createElement(o.PanelRow,null,React.createElement(o.ToggleControl,{label:(0,r.__)("Always show cart","surecart"),help:(0,r.__)("Enable to always show the cart button, even your cart is empty.","surecart"),checked:s,onChange:()=>n({cart_menu_always_shown:!s})})))),React.createElement("a",l,React.createElement("div",{class:"sc-cart-icon"},React.createElement(i,{name:c})),React.createElement("span",{class:"sc-cart-count"},"2")))}})}},n={};function c(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,c),a.exports}c.m=t,e=[],c.O=function(t,n,r,a){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],a=e[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&a||o>=a)&&Object.keys(c.O).every((function(e){return c.O[e](n[l])}))?n.splice(l--,1):(s=!1,a<o&&(o=a));if(s){e.splice(u--,1);var i=r();void 0!==i&&(t=i)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,{a:t}),t},c.d=function(e,t){for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={5722:0,750:0};c.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,o=n[0],s=n[1],l=n[2],i=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)c.o(s,r)&&(c.m[r]=s[r]);if(l)var u=l(c)}for(t&&t(n);i<o.length;i++)a=o[i],c.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return c.O(u)},n=self.webpackChunk_surecart_blocks_next=self.webpackChunk_surecart_blocks_next||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=c.O(void 0,[750],(function(){return c(7652)}));r=c.O(r)}();