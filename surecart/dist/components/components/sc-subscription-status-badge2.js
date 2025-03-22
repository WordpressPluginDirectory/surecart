import{proxyCustomElement,HTMLElement,h,Fragment}from"@stencil/core/internal/client";import{d as defineCustomElement$1}from"./sc-tag2.js";const scSubscriptionStatusBadgeCss=":host{display:inline-block}",ScSubscriptionStatusBadgeStyle0=scSubscriptionStatusBadgeCss,ScSubscriptionStatusBadge=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.status=void 0,this.subscription=void 0,this.size="medium",this.pill=!1,this.clearable=!1}getType(){var t,e,s;if(null===(t=this.subscription)||void 0===t?void 0:t.cancel_at_period_end)return"info";switch(this.status||(null===(e=this.subscription)||void 0===e?void 0:e.status)){case"incomplete":case"past_due":case"unpaid":return"warning";case"trialing":return"info";case"active":case"completed":return"success";case"canceled":return(null===(s=this.subscription)||void 0===s?void 0:s.restore_at)?"info":"danger"}}getText(){var t,e,s,i,n;if((null===(t=this.subscription)||void 0===t?void 0:t.cancel_at_period_end)&&this.subscription.current_period_end_at&&"canceled"!==(null===(e=this.subscription)||void 0===e?void 0:e.status))return h(Fragment,null,(null===(s=this.subscription)||void 0===s?void 0:s.restore_at)?wp.i18n.__("Pauses","surecart"):wp.i18n.__("Cancels","surecart")," ",this.subscription.current_period_end_at_date);switch(this.status||(null===(i=this.subscription)||void 0===i?void 0:i.status)){case"incomplete":return wp.i18n.__("Incomplete","surecart");case"trialing":return wp.i18n.__("Trialing","surecart");case"active":return wp.i18n.__("Active","surecart");case"past_due":return wp.i18n.__("Past Due","surecart");case"canceled":return(null===(n=this.subscription)||void 0===n?void 0:n.restore_at)?"Paused":wp.i18n.__("Canceled","surecart");case"completed":return wp.i18n.__("Completed","surecart");case"unpaid":return wp.i18n.__("Unpaid","surecart")}}render(){return h("sc-tag",{key:"8df1acae7afef7676b2605c96b9d6543449774b0","aria-label":wp.i18n.sprintf(wp.i18n.__("Plan Status - %s","surecart"),this.getText()),type:this.getType()},this.getText())}static get style(){return ScSubscriptionStatusBadgeStyle0}},[1,"sc-subscription-status-badge",{status:[1],subscription:[16],size:[513],pill:[516],clearable:[4]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-subscription-status-badge","sc-tag"].forEach((t=>{switch(t){case"sc-subscription-status-badge":customElements.get(t)||customElements.define(t,ScSubscriptionStatusBadge);break;case"sc-tag":customElements.get(t)||defineCustomElement$1()}}))}export{ScSubscriptionStatusBadge as S,defineCustomElement as d};