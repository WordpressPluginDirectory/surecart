import{h}from"@stencil/core";import{isRtl}from"../../../functions/page-align";export class ScStackedListRow{constructor(){this.href=void 0,this.target="_self",this.mobileSize=600,this.width=void 0,this.hasPrefix=!1,this.hasSuffix=!1}componentDidLoad(){"ResizeObserver"in window&&new window.ResizeObserver((e=>{e.forEach((e=>{this.width=e.contentRect.width}))})).observe(this.el)}handleSlotChange(){this.hasPrefix=!!Array.from(this.el.children).some((e=>"prefix"===e.slot)),this.hasSuffix=!!Array.from(this.el.children).some((e=>"suffix"===e.slot))}render(){const e=this.href?"a":"div";return h(e,{key:"d067eb96bb3c94f1da3bf09b00d220130d507080",href:this.href,target:this.target,part:"base",class:{"list-row":!0,"list-row--has-prefix":this.hasPrefix,"list-row--has-suffix":this.hasSuffix,"breakpoint-lg":this.width>=this.mobileSize,"list-row--is-rtl":isRtl()}},h("span",{key:"327a49e1bb71b3680cf7faddae838a32f60d15ce",class:"list-row__prefix"},h("slot",{key:"d2cd53273ed1367713a15e259d767f0449fd4de3",name:"prefix",onSlotchange:()=>this.handleSlotChange()})),h("slot",{key:"d7b25cf9c8bd2cf1089ae8c5074741e7b62d5371",onSlotchange:()=>this.handleSlotChange()}),h("span",{key:"d367675045c77cf7ec410beda39e77714c557f22",class:"list-row__suffix"},h("slot",{key:"b8b34764c0cac1a71f76455ca24914f068baf1d3",name:"suffix",onSlotchange:()=>this.handleSlotChange()})))}static get is(){return"sc-stacked-list-row"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-stacked-list-row.scss"]}}static get styleUrls(){return{$:["sc-stacked-list-row.css"]}}static get properties(){return{href:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"href",reflect:!1},target:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"target",reflect:!1,defaultValue:"'_self'"},mobileSize:{type:"number",mutable:!1,complexType:{original:"number",resolved:"number",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"mobile-size",reflect:!1,defaultValue:"600"}}}static get states(){return{width:{},hasPrefix:{},hasSuffix:{}}}static get elementRef(){return"el"}}