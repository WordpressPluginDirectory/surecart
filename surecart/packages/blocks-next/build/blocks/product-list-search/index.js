!function(){"use strict";var e=window.wp.blocks,t=window.React,c=window.wp.primitives,r=(0,t.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(c.Path,{d:"M13 5c-3.3 0-6 2.7-6 6 0 1.4.5 2.7 1.3 3.7l-3.8 3.8 1.1 1.1 3.8-3.8c1 .8 2.3 1.3 3.7 1.3 3.3 0 6-2.7 6-6S16.3 5 13 5zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"})),o=window.wp.i18n,s=window.wp.blockEditor,n=JSON.parse('{"UU":"surecart/product-list-search"}');(0,e.registerBlockType)(n.UU,{icon:r,edit:e=>{let{attributes:{placeholder:t}}=e;const c=(0,s.useBlockProps)({className:"sc-input-group sc-input-group-sm"});return React.createElement("div",c,React.createElement("span",{className:"sc-input-group-text"},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},React.createElement("circle",{cx:"11",cy:"11",r:"8"}),React.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))),React.createElement("input",{className:"sc-form-control",type:"search",placeholder:(0,o.__)("Search","surecart")}))}})}();