import{r as s,h as e,H as t}from"./p-e97fde0a.js";import{g as i}from"./p-cd77e20e.js";import{f as p}from"./p-58d2adc4.js";import"./p-93127aa7.js";import"./p-03631502.js";import"./p-e2d5dc4f.js";import"./p-97f59651.js";import"./p-d3366af3.js";import"./p-401e165e.js";import"./p-830ab1a3.js";import"./p-ec182234.js";import"./p-3f6362a4.js";import"./p-15630c79.js";import"./p-6ec14893.js";const r="sc-express-payment{display:block}";const o=r;const a=class{constructor(e){s(this,e);this.processor=undefined;this.dividerText=undefined;this.debug=undefined;this.hasPaymentOptions=undefined}onPaymentRequestLoaded(){this.hasPaymentOptions=true}renderStripePaymentRequest(){const{processor_data:s}=i("stripe")||{};return e("sc-stripe-payment-request",{debug:this.debug,stripeAccountId:s===null||s===void 0?void 0:s.account_id,publishableKey:s===null||s===void 0?void 0:s.publishable_key})}render(){return e(t,{key:"91a87d87f5eb428ffc089c43424a39d823cb17f3",class:{"is-empty":!this.hasPaymentOptions&&!this.debug}},this.renderStripePaymentRequest(),(this.hasPaymentOptions||this.debug)&&e("sc-divider",{key:"8edcda43e67e26227500031b882a7943ea70e039",style:{"--spacing":"calc(var(--sc-form-row-spacing)/2)"}},this.dividerText),!!p()&&e("sc-block-ui",{key:"64faeb9b482bf26f0c055b808b55fc0dab136fec"}))}};a.style=o;export{a as sc_express_payment};
//# sourceMappingURL=p-0b058685.entry.js.map