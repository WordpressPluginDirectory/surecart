!function(){"use strict";var e,t={7005:function(e,t,n){var r=n(1609),o=Symbol.for("react.element"),c=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};t.jsx=function(e,t,n){var r,s={},i=null,u=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,r)&&!a.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:i,ref:u,props:s,_owner:l.current}}},9255:function(e,t,n){e.exports=n(7005)},4821:function(e,t,n){var r=window.wp.primitives,o=n(9255),c=(0,o.jsx)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)(r.Path,{d:"m3 5c0-1.10457.89543-2 2-2h13.5c1.1046 0 2 .89543 2 2v13.5c0 1.1046-.8954 2-2 2h-13.5c-1.10457 0-2-.8954-2-2zm2-.5h6v6.5h-6.5v-6c0-.27614.22386-.5.5-.5zm-.5 8v6c0 .2761.22386.5.5.5h6v-6.5zm8 0v6.5h6c.2761 0 .5-.2239.5-.5v-6zm0-8v6.5h6.5v-6c0-.27614-.2239-.5-.5-.5z",fillRule:"evenodd",clipRule:"evenodd"})}),l=window.wp.blocks,a=window.wp.i18n,s=window.wp.coreData,i=window.wp.blockEditor,u=window.wp.components,p=window.wp.element,d=window.wp.data;function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(null,arguments)}function f(e){let{template:t,renderAppender:n,...r}=e;const o=(0,i.useInnerBlocksProps)(r,{template:t,__unstableDisableLayoutClassNames:!0,renderAppender:n});return React.createElement("div",o)}const v=(0,p.memo)((function(e){let{blocks:t,blockContextId:n,isHidden:r,setActiveBlockContextId:o,...c}=e;const{style:l,className:a,...s}=c||{},u=(0,i.__experimentalUseBlockPreview)({blocks:t});return React.createElement("div",m({},u,{tabIndex:0,role:"button",onClick:()=>{o(n)},style:{...l,display:r?"none":void 0},className:a},s))}));function w(e){let{clientId:t,blockContexts:n,className:r,style:o,itemProps:c,template:l,renderAppender:a,attachBlockProps:s=!0}=e;const[u,w]=(0,p.useState)(),_=(0,d.useSelect)((e=>e(i.store).getBlocks(t)),[t]),b=s?(0,i.useBlockProps)({className:r,style:o}):{style:o,className:r};return React.createElement("div",b,n&&n.map((e=>React.createElement(i.BlockContextProvider,{key:e.id,value:e},e.id===(u||n[0]?.id)&&React.createElement(f,m({template:l,renderAppender:a},c)),React.createElement(v,m({blocks:_,blockContextId:e.id,setActiveBlockContextId:w,isHidden:e.id===(u||n[0]?.id)},c))))))}const _=[["surecart/product-collection-tag"]];var b=JSON.parse('{"UU":"surecart/product-collection-tags"}');(0,l.registerBlockType)(b.UU,{icon:c,edit:e=>{let{attributes:t,setAttributes:n,__unstableLayoutClassNames:r,clientId:o,context:{postId:c}}=e;const{count:l}=t,{record:m}=(0,s.useEntityRecord)("postType","sc_product",c);let f=(0,d.useSelect)((e=>e(s.store).getEntityRecords("taxonomy","sc_collection",{include:m?.sc_collection,per_page:l})),m?.sc_collection)||[];if(f?.length<l&&!m?.id)for(let e=0;e<l;e++)f[e]||f.push({name:`Collection ${e+1}`,id:e});return f=f.slice(0,l).map((e=>({...e,"surecart/productCollectionTag/name":e.name}))),React.createElement(p.Fragment,null,React.createElement(i.InspectorControls,null,React.createElement(u.PanelBody,null,React.createElement(u.PanelRow,null,React.createElement(u.__experimentalNumberControl,{label:(0,a.__)("Number To Display","surecart"),value:l,onChange:e=>n({count:parseInt(e)})})))),React.createElement(w,{template:_,blockContexts:f,className:r,clientId:o,renderAppender:!1}))},save:function(){return React.createElement(i.InnerBlocks.Content,null)}})},1609:function(e){e.exports=window.React}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var c=n[e]={exports:{}};return t[e](c,c.exports,r),c.exports}r.m=t,e=[],r.O=function(t,n,o,c){if(!n){var l=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],c=e[u][2];for(var a=!0,s=0;s<n.length;s++)(!1&c||l>=c)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(a=!1,c<l&&(l=c));if(a){e.splice(u--,1);var i=o();void 0!==i&&(t=i)}}return t}c=c||0;for(var u=e.length;u>0&&e[u-1][2]>c;u--)e[u]=e[u-1];e[u]=[n,o,c]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={1681:0,8789:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,c,l=n[0],a=n[1],s=n[2],i=0;if(l.some((function(t){return 0!==e[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(s)var u=s(r)}for(t&&t(n);i<l.length;i++)c=l[i],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(u)},n=self.webpackChunk_surecart_blocks_next=self.webpackChunk_surecart_blocks_next||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[8789],(function(){return r(4821)}));o=r.O(o)}();