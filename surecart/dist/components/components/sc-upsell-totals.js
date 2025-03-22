import{proxyCustomElement,HTMLElement,h,Fragment}from"@stencil/core/internal/client";import"./watchers2.js";import{s as state}from"./store.js";import{d as defineCustomElement$5}from"./sc-divider2.js";import{d as defineCustomElement$4}from"./sc-line-item2.js";import{d as defineCustomElement$3}from"./sc-skeleton2.js";import{d as defineCustomElement$2}from"./sc-summary2.js";const scUpsellTotalsCss=":host{display:block}sc-divider{margin:16px 0 !important}.conversion-description{color:var(--sc-color-gray-500);font-size:var(--sc-font-size-small);margin-right:var(--sc-spacing-xx-small)}",ScUpsellTotalsStyle0=scUpsellTotalsCss,ScUpsellTotals$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow()}renderAmountDue(){var e,t;return state.amount_due>0?null===(e=null==state?void 0:state.line_item)||void 0===e?void 0:e.total_display_amount:(null===(t=null==state?void 0:state.line_item)||void 0===t?void 0:t.trial_amount)?wp.i18n.__("Trial","surecart"):wp.i18n.__("Free","surecart")}getCurrencyToDisplay(){var e,t,s,l,i,n,o;return(null===(s=null===(t=null===(e=null==state?void 0:state.line_item)||void 0===e?void 0:e.total_default_currency_display_amount)||void 0===t?void 0:t.toLowerCase())||void 0===s?void 0:s.includes(null===(i=null===(l=null==state?void 0:state.line_item)||void 0===l?void 0:l.currency)||void 0===i?void 0:i.toLowerCase()))?"":null===(o=null===(n=null==state?void 0:state.line_item)||void 0===n?void 0:n.currency)||void 0===o?void 0:o.toUpperCase()}renderConversion(){var e,t,s,l,i,n;const o=null==state?void 0:state.checkout;return(null==o?void 0:o.show_converted_total)?(null==o?void 0:o.currency)===(null==o?void 0:o.current_currency)?null:(null===(e=null==state?void 0:state.line_item)||void 0===e?void 0:e.total_amount)?h(Fragment,null,h("sc-divider",null),h("sc-line-item",{style:{"--price-size":"var(--sc-font-size-x-large)"}},h("span",{slot:"title"},h("slot",{name:"charge-amount-description"},wp.i18n.sprintf(wp.i18n.__("Payment Total","surecart"),null===(s=null===(t=null==state?void 0:state.line_item)||void 0===t?void 0:t.currency)||void 0===s?void 0:s.toUpperCase()))),h("span",{slot:"price"},this.getCurrencyToDisplay()&&h("span",{class:"currency-label"},this.getCurrencyToDisplay()),null===(l=null==state?void 0:state.line_item)||void 0===l?void 0:l.total_default_currency_display_amount)),h("sc-line-item",null,h("span",{slot:"description",class:"conversion-description"},wp.i18n.sprintf(wp.i18n.__("Your payment will be processed in %s.","surecart"),null===(n=null===(i=null==state?void 0:state.line_item)||void 0===i?void 0:i.currency)||void 0===n?void 0:n.toUpperCase())))):null:null}render(){var e,t,s,l,i,n,o;return h("sc-summary",{key:"d0d12a58c74d07ef3df64884fd83c14f1cdb91f1","open-text":"Total","closed-text":"Total",collapsible:!0,collapsed:!0},!!(null===(e=state.line_item)||void 0===e?void 0:e.id)&&h("span",{key:"a64782bc4695295a7aaf844035da31be972c3d5d",slot:"price"},this.renderAmountDue()),h("sc-divider",{key:"b4ddc70dbedafd762a4edafe3f5df24602cf5e02"}),h("sc-line-item",{key:"415e58357e653dd79aa311e7a604901bbe5e9e19"},h("span",{key:"05c22e31706d880770915afc9a96035005bc1d03",slot:"description"},wp.i18n.__("Subtotal","surecart")),h("span",{key:"9bba8fbb76724f9f912fa40560a61507835820f0",slot:"price"},null===(t=state.line_item)||void 0===t?void 0:t.subtotal_display_amount)),((null===(l=null===(s=null==state?void 0:state.line_item)||void 0===s?void 0:s.fees)||void 0===l?void 0:l.data)||[]).filter((e=>"upsell"===e.fee_type)).map((e=>h("sc-line-item",null,h("span",{slot:"description"},e.description," ",`(${wp.i18n.__("one time","surecart")})`),h("span",{slot:"price"},null==e?void 0:e.display_amount)))),!!(null===(i=state.line_item)||void 0===i?void 0:i.tax_amount)&&h("sc-line-item",{key:"253a7c26828cb55cfaefd429e9f67c38ceb431e0"},h("span",{key:"1ca1729c406b63c2e9dc81d3a230ef8e60ad8353",slot:"description"},wp.i18n.__("Tax","surecart")),h("span",{key:"203dbda52aa43411007a9a3bb61bdb9b8bcea0f7",slot:"price"},null===(n=state.line_item)||void 0===n?void 0:n.tax_display_amount)),h("sc-divider",{key:"e2478a9ae4bd9caa0990d1a6ea4eb5430083028d"}),h("sc-line-item",{key:"0fca131b074ed922d33fc9f5cdf69bffd8be4438",style:{"--price-size":"var(--sc-font-size-x-large)"}},h("span",{key:"418c622522e2f3bd6c43c0be2757a5a5e8f5b67b",slot:"title"},wp.i18n.__("Total","surecart")),h("span",{key:"db8f061f6ce6ddf011ad103aaf8cd90653bbf840",slot:"price"},null===(o=state.line_item)||void 0===o?void 0:o.total_display_amount)),this.renderConversion())}static get style(){return ScUpsellTotalsStyle0}},[1,"sc-upsell-totals"]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-upsell-totals","sc-divider","sc-line-item","sc-skeleton","sc-summary"].forEach((e=>{switch(e){case"sc-upsell-totals":customElements.get(e)||customElements.define(e,ScUpsellTotals$1);break;case"sc-divider":customElements.get(e)||defineCustomElement$5();break;case"sc-line-item":customElements.get(e)||defineCustomElement$4();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$3();break;case"sc-summary":customElements.get(e)||defineCustomElement$2()}}))}const ScUpsellTotals=ScUpsellTotals$1,defineCustomElement=defineCustomElement$1;export{ScUpsellTotals,defineCustomElement};