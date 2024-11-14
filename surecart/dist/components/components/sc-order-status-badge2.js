import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{d as defineCustomElement$1}from"./sc-tag2.js";const scOrderStatusBadgeCss=":host{display:inline-block}",ScOrderStatusBadgeStyle0=scOrderStatusBadgeCss,ScOrderStatusBadge=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.status=void 0,this.size="medium",this.pill=!1,this.clearable=!1}getType(){switch(this.status){case"processing":return"warning";case"paid":return"success";case"payment_failed":case"canceled":case"void":case"canceled":return"danger"}}getText(){switch(this.status){case"processing":return wp.i18n.__("Processing","surecart");case"payment_failed":return wp.i18n.__("Payment Failed","surecart");case"paid":return wp.i18n.__("Paid","surecart");case"canceled":case"void":return wp.i18n.__("Canceled","surecart");case"draft":return wp.i18n.__("Draft","surecart");default:return this.status}}render(){return h("sc-tag",{key:"1f653f8fc1d84fd6aa3b3563e31454ae9b575a89",type:this.getType(),pill:this.pill},this.getText())}static get style(){return ScOrderStatusBadgeStyle0}},[1,"sc-order-status-badge",{status:[1],size:[513],pill:[516],clearable:[4]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-order-status-badge","sc-tag"].forEach((e=>{switch(e){case"sc-order-status-badge":customElements.get(e)||customElements.define(e,ScOrderStatusBadge);break;case"sc-tag":customElements.get(e)||defineCustomElement$1()}}))}export{ScOrderStatusBadge as S,defineCustomElement as d};