import{h}from"@stencil/core";export class ScManualPaymentMethod{constructor(){this.paymentMethod=void 0,this.showDescription=!1}render(){var e,t;return h("div",{key:"5f84f1c44d9388c74ce71a31b40dee8d02a8b395",class:"manual-payment-method",part:"card"},h("div",{key:"3353cf4c73cce99bfcb4506b5c651c11ef055d2d",class:"payment-method__title"},null===(e=this.paymentMethod)||void 0===e?void 0:e.name),this.showDescription&&h("sc-prose",{key:"41dacaf510654a59275700773c6d6557a7e4fe4f",class:"payment-method__description",innerHTML:null===(t=this.paymentMethod)||void 0===t?void 0:t.description}))}static get is(){return"sc-manual-payment-method"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-manual-payment-method.css"]}}static get styleUrls(){return{$:["sc-manual-payment-method.css"]}}static get properties(){return{paymentMethod:{type:"unknown",mutable:!1,complexType:{original:"ManualPaymentMethod",resolved:"ManualPaymentMethod",references:{ManualPaymentMethod:{location:"import",path:"../../../types",id:"src/types.ts::ManualPaymentMethod"}}},required:!1,optional:!1,docs:{tags:[],text:""}},showDescription:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"show-description",reflect:!1,defaultValue:"false"}}}}