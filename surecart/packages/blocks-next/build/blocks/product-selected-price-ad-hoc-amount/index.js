!function(){"use strict";var e,t={2786:function(){var e=window.wp.blocks,t=window.wp.i18n,r=window.wp.blockEditor,n=window.wp.components,a=JSON.parse('{"UU":"surecart/product-selected-price-ad-hoc-amount"}');(0,e.registerBlockType)(a.UU,{edit:e=>{let{attributes:a,setAttributes:o}=e;const{label:l,width:c}=a,i=Number.isFinite(c)?c+"%":c,s=(0,r.useBlockProps)({style:{width:i}}),u=(0,r.__experimentalUseColorProps)(a),p=(0,n.__experimentalUseCustomUnits)({availableUnits:(0,r.useSettings)("spacing.units")||["%","px","em","rem"]});return React.createElement(React.Fragment,null,React.createElement(r.InspectorControls,null,React.createElement(n.PanelBody,{title:(0,t.__)("Custom Amount Settings")},React.createElement(n.__experimentalUnitControl,{label:(0,t.__)("Width"),labelPosition:"edge",__unstableInputWidth:"80px",value:c||"",onChange:e=>{e=0>parseFloat(e)?"0":e,o({width:e})},units:p}))),React.createElement("div",s,React.createElement(r.RichText,{tagName:"label",className:`sc-form-label ${u.className}`,"aria-label":(0,t.__)("Label text","surecart"),placeholder:(0,t.__)("Add label…","surecart"),value:l,onChange:e=>o({label:e}),withoutInteractiveFormatting:!0,allowedFormats:["core/bold","core/italic"]}),React.createElement("div",{className:"sc-input-group"},React.createElement("span",{class:"sc-input-group-text",id:"basic-addon1"},scData?.currency_symbol),React.createElement("input",{class:"sc-form-control",type:"number",step:"0.01",onwheel:"this.blur()"}))))}})}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=function(t,r,a,o){if(!r){var l=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var c=!0,i=0;i<r.length;i++)(!1&o||l>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(c=!1,o<l&&(l=o));if(c){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={2692:0,188:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,l=r[0],c=r[1],i=r[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(i)var u=i(n)}for(t&&t(r);s<l.length;s++)o=l[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self.webpackChunk_surecart_blocks_next=self.webpackChunk_surecart_blocks_next||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var a=n.O(void 0,[188],(function(){return n(2786)}));a=n.O(a)}();