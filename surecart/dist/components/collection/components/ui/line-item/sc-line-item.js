import{h}from"@stencil/core";import{isRtl}from"../../../functions/page-align";export class ScLineItem{constructor(){this.price=void 0,this.currency=void 0,this.hasImageSlot=void 0,this.hasTitleSlot=void 0,this.hasDescriptionSlot=void 0,this.hasPriceSlot=void 0,this.hasPriceDescriptionSlot=void 0,this.hasCurrencySlot=void 0}componentWillLoad(){this.hasImageSlot=!!this.hostElement.querySelector('[slot="image"]'),this.hasTitleSlot=!!this.hostElement.querySelector('[slot="title"]'),this.hasDescriptionSlot=!!this.hostElement.querySelector('[slot="description"]'),this.hasPriceSlot=!!this.hostElement.querySelector('[slot="price"]'),this.hasPriceDescriptionSlot=!!this.hostElement.querySelector('[slot="price-description"]'),this.hasCurrencySlot=!!this.hostElement.querySelector('[slot="currency"]')}render(){return h("div",{key:"858f8930dc4c9ed7b552d47ded5f3ee85cf72f30",part:"base",class:{item:!0,"item--has-image":this.hasImageSlot,"item--has-title":this.hasTitleSlot,"item--has-description":this.hasDescriptionSlot,"item--has-price":this.hasPriceSlot,"item--has-price-description":this.hasPriceDescriptionSlot,"item--has-price-currency":this.hasCurrencySlot,"item--is-rtl":isRtl()}},h("div",{key:"ba1c074defd869ca4bfa2f4058642dfe7aaac66c",class:"item__image",part:"image"},h("slot",{key:"3c482fa982141db168cccde969deaf3feff5e8db",name:"image"})),h("div",{key:"1a43349f32214d767851954264d65765cfc443cf",class:"item__text",part:"text"},h("div",{key:"4d05c3537222d4855d1110f2b21617b147570aa4",class:"item__title",part:"title"},h("slot",{key:"b66977e455c6334542395e93f7768ff893e33908",name:"title"})),h("div",{key:"53b7a57180f39dd1ed98a84df15411519557b908",class:"item__description",part:"description"},h("slot",{key:"f9d3d5d6d4e47504434b0ea8644018dd4bc36a2a",name:"description"}))),h("div",{key:"948615fd4dca0adc35929b0e8862c869f4936624",class:"item__end",part:"price"},h("div",{key:"9cca981a74159c4c9a9c999c960ff6e9d193e7a7",class:"item__price-currency",part:"currency"},h("slot",{key:"f6f13de4d1f5e540be86ae0c60b065c108282561",name:"currency"})),h("div",{key:"5791775347d0c8c122fbbb8d1495bceb4e2e3239",class:"item__price-text",part:"price-text"},h("div",{key:"a21d434c7e5d5f6f1c24e6a951db6b02ea48272b",class:"item__price",part:"price"},h("slot",{key:"b113d29a37f5fced69b9cb1f618917962851b3f9",name:"price"})),h("div",{key:"37504c59f93672e17d157c23760c1467878375ed",class:"item__price-description",part:"price-description"},h("slot",{key:"20cef13beb43a1b9cba3e5b32270eea8609d7ebd",name:"price-description"})))))}static get is(){return"sc-line-item"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-line-item.scss"]}}static get styleUrls(){return{$:["sc-line-item.css"]}}static get properties(){return{price:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Price of the item"},attribute:"price",reflect:!1},currency:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Currency symbol"},attribute:"currency",reflect:!1}}}static get states(){return{hasImageSlot:{},hasTitleSlot:{},hasDescriptionSlot:{},hasPriceSlot:{},hasPriceDescriptionSlot:{},hasCurrencySlot:{}}}static get elementRef(){return"hostElement"}}