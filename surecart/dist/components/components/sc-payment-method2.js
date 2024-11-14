import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{d as defineCustomElement$7}from"./sc-button2.js";import{d as defineCustomElement$6}from"./sc-cc-logo2.js";import{d as defineCustomElement$5}from"./sc-icon2.js";import{d as defineCustomElement$4}from"./sc-spinner2.js";import{d as defineCustomElement$3}from"./sc-tag2.js";import{d as defineCustomElement$2}from"./sc-text2.js";import{d as defineCustomElement$1}from"./sc-tooltip2.js";const scPaymentMethodCss=":host{display:block}.payment-method{display:flex;align-items:center;justify-content:flex-start;gap:var(--sc-spacing-x-small)}.payment-method-icon{border-radius:var(--sc-cc-border-radius, 4px);line-height:0;overflow:hidden}",ScPaymentMethodStyle0=scPaymentMethodCss,ScPaymentMethod=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.paymentMethod=void 0,this.full=void 0,this.externalLink=void 0,this.externalLinkTooltipText=void 0}renderBankAccountType(t){return"checking"===t?wp.i18n.__("Checking","surecart"):"savings"===t?wp.i18n.__("Savings","surecart"):void 0}renderExternalLink(){return!!this.externalLink&&h("sc-tooltip",{text:this.externalLinkTooltipText,type:"text"},h("sc-button",{style:{color:"var(--sc-color-gray-500)"},type:"text",size:"small",href:this.externalLink,target:"_blank"},h("sc-icon",{name:"external-link",style:{fontSize:"16px"}})))}render(){var t,e,n,s,i,o,l,a,d,m,c,r,p,u,y,v,f,x,g,E;if(null===(e=null===(t=this.paymentMethod)||void 0===t?void 0:t.bank_account)||void 0===e?void 0:e.id){const t=null===(n=this.paymentMethod)||void 0===n?void 0:n.bank_account;return h("div",{class:"payment-method",part:"bank"},h("span",null,this.renderBankAccountType(null==t?void 0:t.account_type)),"**** ",null==t?void 0:t.last4,this.renderExternalLink())}if(null===(i=null===(s=null==this?void 0:this.paymentMethod)||void 0===s?void 0:s.payment_instrument)||void 0===i?void 0:i.instrument_type){const t=null===(l=null===(o=null==this?void 0:this.paymentMethod)||void 0===o?void 0:o.payment_instrument)||void 0===l?void 0:l.instrument_type;return(null===(a=null==this?void 0:this.paymentMethod)||void 0===a?void 0:a.payment_method_name)?h("div",{class:"payment-method",part:"instrument"},h("div",{class:"payment-method-icon"},h("sc-icon",{style:{fontSize:"36px","--height":"0.63em"},name:t})),h("span",null,null===(d=null==this?void 0:this.paymentMethod)||void 0===d?void 0:d.payment_method_name),this.renderExternalLink()):"paypal"===t?h("div",{class:"payment-method",part:"instrument"},h("sc-icon",{style:{fontSize:"56px",lineHeight:"1",height:"28px"},name:"paypal"})):h("div",{class:"payment-method",part:"instrument"},h("sc-tag",{exportparts:"base:payment_instrument",type:"info",pill:!0},h("span",{style:{textTransform:"capitalize"}},t," ")),this.renderExternalLink())}return(null===(c=null===(m=this.paymentMethod)||void 0===m?void 0:m.card)||void 0===c?void 0:c.brand)?h("div",{class:"payment-method",part:"card"},h("sc-cc-logo",{style:{fontSize:"36px"},brand:null===(p=null===(r=this.paymentMethod)||void 0===r?void 0:r.card)||void 0===p?void 0:p.brand}),h("sc-text",{style:{whiteSpace:"nowrap",paddingRight:"6px"}},"**** ",null===(y=null===(u=this.paymentMethod)||void 0===u?void 0:u.card)||void 0===y?void 0:y.last4),this.renderExternalLink()):(null===(f=null===(v=this.paymentMethod)||void 0===v?void 0:v.paypal_account)||void 0===f?void 0:f.id)?h("div",{class:"payment-method",part:"base",style:{gap:"var(--sc-spacing-small)"}},h("sc-icon",{style:{fontSize:"56px",lineHeight:"1",height:"28px"},name:"paypal"}),this.full&&h("sc-text",{style:{"--font-size":"var(--sc-font-size-small)"},truncate:!0},null===(g=null===(x=this.paymentMethod)||void 0===x?void 0:x.paypal_account)||void 0===g?void 0:g.email),this.renderExternalLink()):null===(E=null==this?void 0:this.paymentMethod)||void 0===E?void 0:E.processor_type}static get style(){return ScPaymentMethodStyle0}},[1,"sc-payment-method",{paymentMethod:[16],full:[4],externalLink:[1,"external-link"],externalLinkTooltipText:[1,"external-link-tooltip-text"]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-payment-method","sc-button","sc-cc-logo","sc-icon","sc-spinner","sc-tag","sc-text","sc-tooltip"].forEach((t=>{switch(t){case"sc-payment-method":customElements.get(t)||customElements.define(t,ScPaymentMethod);break;case"sc-button":customElements.get(t)||defineCustomElement$7();break;case"sc-cc-logo":customElements.get(t)||defineCustomElement$6();break;case"sc-icon":customElements.get(t)||defineCustomElement$5();break;case"sc-spinner":customElements.get(t)||defineCustomElement$4();break;case"sc-tag":customElements.get(t)||defineCustomElement$3();break;case"sc-text":customElements.get(t)||defineCustomElement$2();break;case"sc-tooltip":customElements.get(t)||defineCustomElement$1()}}))}export{ScPaymentMethod as S,defineCustomElement as d};