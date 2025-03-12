import{h,Host}from"@stencil/core";import{__}from"@wordpress/i18n";import{addQueryArgs}from"@wordpress/url";import{speak}from"@wordpress/a11y";import apiFetch from"../../../functions/fetch";import{expand}from"../../../services/session";import{state as checkoutState}from"../../../store/checkout/index";import{state as formState}from"../../../store/form/index";import{createErrorNotice}from"../../../store/notices/mutations";import{clearCheckout}from"../../../store/checkout/mutations";export class ScOrderConfirmProvider{constructor(){this.showSuccessModal=!1,this.manualPaymentMethod=void 0,this.checkoutStatus=void 0,this.successUrl=void 0}handleConfirmOrderEvent(){"confirming"===this.checkoutStatus?this.confirmOrder():"confirmed"===this.checkoutStatus&&speak(__("Order has been confirmed. Please select continue to go to the next step.","surecart"))}async confirmOrder(){var e,t,o,s;try{checkoutState.checkout=await apiFetch({method:"PATCH",path:addQueryArgs(`surecart/v1/checkouts/${null===(e=null==checkoutState?void 0:checkoutState.checkout)||void 0===e?void 0:e.id}/confirm`,{expand:expand})}),this.scSetState.emit("CONFIRMED")}catch(e){console.error(e),createErrorNotice(e)}finally{this.manualPaymentMethod=(null===(t=checkoutState.checkout)||void 0===t?void 0:t.manual_payment_method)||null;const e=checkoutState.checkout,c=checkoutState.formId;if(null===(o=null==e?void 0:e.current_upsell)||void 0===o?void 0:o.permalink)return setTimeout((()=>{var t;return window.location.assign(addQueryArgs(null===(t=null==e?void 0:e.current_upsell)||void 0===t?void 0:t.permalink,{sc_checkout_id:null==e?void 0:e.id,sc_form_id:c}))}),50),void clearCheckout();const r=(null===(s=null==e?void 0:e.metadata)||void 0===s?void 0:s.success_url)||this.successUrl;if(r){this.scSetState.emit("REDIRECT");const t=addQueryArgs(r,{sc_order:null==e?void 0:e.id});setTimeout((()=>window.location.assign(t)),50)}else this.showSuccessModal=!0;clearCheckout()}}getSuccessUrl(){var e,t,o,s,c;const r=(null===(t=null===(e=checkoutState.checkout)||void 0===e?void 0:e.metadata)||void 0===t?void 0:t.success_url)||this.successUrl;return r?addQueryArgs(r,{sc_order:null===(o=checkoutState.checkout)||void 0===o?void 0:o.id}):null===(c=null===(s=null===window||void 0===window?void 0:window.scData)||void 0===s?void 0:s.pages)||void 0===c?void 0:c.dashboard}handleSuccessModal(){this.showSuccessModal&&setTimeout((()=>{var e;null===(e=this.continueButton)||void 0===e||e.focus()}),50)}render(){var e,t,o,s,c,r,a,i,n,d;return h(Host,{key:"d9b39cadf86f646acd05abe6f923fc8736edcea5"},h("slot",{key:"9c8f0609afc183bd409931fc654f16c8aa66f5be"}),h("sc-dialog",{key:"f7eea0b871063e38c72aec19abe57d6139c37eb5",open:!!this.showSuccessModal,style:{"--body-spacing":"var(--sc-spacing-xxx-large)","--width":"400px"},noHeader:!0,onScRequestClose:e=>e.preventDefault()},h("div",{key:"41b62f522b82fe56507b0e9b9e27ec11cf943eea",class:"confirm__icon"},h("div",{key:"31eff7ac5e1a73a5b34a4880087e6868bfa4f859",class:"confirm__icon-container"},h("sc-icon",{key:"1f2d89ba9bf01ae184a6841e06fe9be14fed9c22",name:"check"}))),h("sc-dashboard-module",{key:"c1fc69f8733d758a8f61e9ab45d8831bf41b05bf",heading:(null===(t=null===(e=null==formState?void 0:formState.text)||void 0===e?void 0:e.success)||void 0===t?void 0:t.title)||__("Thanks for your order!","surecart"),style:{"--sc-dashboard-module-spacing":"var(--sc-spacing-x-large)",textAlign:"center"}},h("span",{key:"f00e95c9d8ec5b0ee02efe5bdb67839d1a467882",slot:"description"},(null===(s=null===(o=null==formState?void 0:formState.text)||void 0===o?void 0:o.success)||void 0===s?void 0:s.description)||__("Your payment was successful. A receipt is on its way to your inbox.","surecart")),!!(null===(c=this.manualPaymentMethod)||void 0===c?void 0:c.name)&&!!(null===(r=this.manualPaymentMethod)||void 0===r?void 0:r.instructions)&&h("sc-alert",{key:"4f53d675472a9b3d0c6149223d2ef3eb3cc00eb4",type:"info",open:!0,style:{"text-align":"left"}},h("span",{key:"a6889f7175a3f59791ec76ec931918d51edc6ab9",slot:"title"},null===(a=this.manualPaymentMethod)||void 0===a?void 0:a.name),h("div",{key:"275fa3030d3ed9e1eee2a634d799bbf014d5f5ba",innerHTML:null===(i=this.manualPaymentMethod)||void 0===i?void 0:i.instructions})),h("sc-button",{key:"46de3820ec3418725b471ba71ca841584f5743d9",href:this.getSuccessUrl(),size:"large",type:"primary",ref:e=>this.continueButton=e},(null===(d=null===(n=null==formState?void 0:formState.text)||void 0===n?void 0:n.success)||void 0===d?void 0:d.button)||__("Continue","surecart"),h("sc-icon",{key:"c3a28669c1626c28b2391265270bd38f74c4615e",name:"arrow-right",slot:"suffix"})))))}static get is(){return"sc-order-confirm-provider"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-order-confirm-provider.scss"]}}static get styleUrls(){return{$:["sc-order-confirm-provider.css"]}}static get properties(){return{checkoutStatus:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Checkout status to listen and do payment related stuff."},attribute:"checkout-status",reflect:!1},successUrl:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Success url."},attribute:"success-url",reflect:!1}}}static get states(){return{showSuccessModal:{},manualPaymentMethod:{}}}static get events(){return[{method:"scOrderPaid",name:"scOrderPaid",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"The order is paid event."},complexType:{original:"Checkout",resolved:"Checkout",references:{Checkout:{location:"import",path:"../../../types",id:"src/types.ts::Checkout"}}}},{method:"scSetState",name:"scSetState",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:""},complexType:{original:"string",resolved:"string",references:{}}}]}static get elementRef(){return"el"}static get watchers(){return[{propName:"checkoutStatus",methodName:"handleConfirmOrderEvent"},{propName:"showSuccessModal",methodName:"handleSuccessModal"}]}}