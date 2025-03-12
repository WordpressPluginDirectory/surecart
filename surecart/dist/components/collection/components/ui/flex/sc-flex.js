import{h}from"@stencil/core";export class ScFlex{constructor(){this.alignItems=void 0,this.justifyContent=void 0,this.flexDirection=void 0,this.columnGap=void 0,this.flexWrap=void 0,this.stack=void 0}render(){return h("div",{key:"643398de515be755582802d0d8e44f3faa2a9081",part:"base",class:{flex:!0,...this.justifyContent?{[`justify-${this.justifyContent}`]:!0}:{},...this.alignItems?{[`align-${this.alignItems}`]:!0}:{},...this.flexDirection?{[`direction-${this.flexDirection}`]:!0}:{},...this.columnGap?{[`column-gap-${this.columnGap}`]:!0}:{},...this.flexWrap?{[`wrap-${this.flexWrap}`]:!0}:{},...this.stack?{[`stack-${this.stack}`]:!0}:{}}},h("slot",{key:"cbd2512bf8639c5d8dbaf7c46e16b78aa7f7bc28"}))}static get is(){return"sc-flex"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-flex.scss"]}}static get styleUrls(){return{$:["sc-flex.css"]}}static get properties(){return{alignItems:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"align-items",reflect:!1},justifyContent:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"justify-content",reflect:!1},flexDirection:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"flex-direction",reflect:!1},columnGap:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"column-gap",reflect:!1},flexWrap:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"flex-wrap",reflect:!1},stack:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"stack",reflect:!1}}}}