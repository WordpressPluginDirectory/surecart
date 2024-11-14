import{Fragment,h}from"@stencil/core";import{__,_n,sprintf}from"@wordpress/i18n";import{addQueryArgs}from"@wordpress/url";export class ScPurchaseDownloadsList{constructor(){this.allLink=void 0,this.heading=void 0,this.busy=void 0,this.loading=void 0,this.requestNonce=void 0,this.error=void 0,this.purchases=[]}renderEmpty(){return h("div",null,h("sc-divider",{style:{"--spacing":"0"}}),h("slot",{name:"empty"},h("sc-empty",{icon:"download"},__("You don't have any downloads.","surecart"))))}renderLoading(){return h("sc-card",{"no-padding":!0,style:{"--overflow":"hidden"}},h("sc-stacked-list",null,h("sc-stacked-list-row",{style:{"--columns":"2"},"mobile-size":0},h("div",{style:{padding:"0.5em"}},h("sc-skeleton",{style:{width:"30%",marginBottom:"0.75em"}}),h("sc-skeleton",{style:{width:"20%"}})))))}renderList(){return this.purchases.map((e=>{var t,r,s;const i=null===(r=null===(t=null==e?void 0:e.product)||void 0===t?void 0:t.downloads)||void 0===r?void 0:r.data.filter((e=>!e.archived)),o=(i||[]).map((e=>{var t;return(null==e?void 0:e.media)?null===(t=null==e?void 0:e.media)||void 0===t?void 0:t.byte_size:0})),l=o.reduce(((e,t)=>e+t),0);return h("sc-stacked-list-row",{href:(null==e?void 0:e.revoked)?null:addQueryArgs(window.location.href,{action:"show",model:"download",id:e.id,nonce:this.requestNonce}),key:e.id,"mobile-size":0},h("sc-spacing",{style:{"--spacing":"var(--sc-spacing-xx--small)"}},h("div",null,h("strong",null,null===(s=null==e?void 0:e.product)||void 0===s?void 0:s.name)),h("div",{class:"download__details"},sprintf(_n("%s file","%s files",null==i?void 0:i.length,"surecart"),null==i?void 0:i.length),!!l&&h(Fragment,null," ","• ",h("sc-format-bytes",{value:l})))),h("sc-icon",{name:"chevron-right",slot:"suffix"}))}))}renderContent(){var e;return this.loading?this.renderLoading():0===(null===(e=this.purchases)||void 0===e?void 0:e.length)?this.renderEmpty():h("sc-card",{"no-padding":!0,style:{"--overflow":"hidden"}},h("sc-stacked-list",null,this.renderList()))}render(){return h("sc-dashboard-module",{key:"1280cf4e2f416113f7df74d320ecf9d081113d16",class:"downloads-list",error:this.error},h("span",{key:"b6572c32b02fa09c8ed4b235c2c9a7babd43cfd9",slot:"heading"},h("slot",{key:"e31399c1132c98a81c68643b823d6fb02d757c8c",name:"heading"},this.heading||__("Items","surecart"))),h("slot",{key:"ff3fc49b670b59dd1078889b449f06c5d67431e4",name:"before"}),!!this.allLink&&h("sc-button",{key:"29bc6e645a170051adf2127581fee298fbfa3fb7",type:"link",href:this.allLink,slot:"end"},__("View all","surecart"),h("sc-icon",{key:"87dddafcbb1284d7e35292987ac3e160352dffe7",name:"chevron-right",slot:"suffix"})),this.renderContent(),h("slot",{key:"46ad7789571f56cd4a3ef9543b6250dbfcf9e93b",name:"after"}),this.busy&&h("sc-block-ui",{key:"8ff00f895a62c8d12fdf9f82f76d18bb1f1b826a"}))}static get is(){return"sc-purchase-downloads-list"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-purchase-downloads-list.scss"]}}static get styleUrls(){return{$:["sc-purchase-downloads-list.css"]}}static get properties(){return{allLink:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"all-link",reflect:!1},heading:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"heading",reflect:!1},busy:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"busy",reflect:!1},loading:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"loading",reflect:!1},requestNonce:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"request-nonce",reflect:!1},error:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"error",reflect:!1},purchases:{type:"unknown",mutable:!1,complexType:{original:"Array<Purchase>",resolved:"Purchase[]",references:{Array:{location:"global",id:"global::Array"},Purchase:{location:"import",path:"../../../types",id:"src/types.ts::Purchase"}}},required:!1,optional:!1,docs:{tags:[],text:""},defaultValue:"[]"}}}static get elementRef(){return"el"}}