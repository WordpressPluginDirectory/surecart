import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";import{a as apiFetch}from"./fetch.js";import{d as defineCustomElement$p}from"./sc-address2.js";import{d as defineCustomElement$o}from"./sc-alert2.js";import{d as defineCustomElement$n}from"./sc-block-ui2.js";import{d as defineCustomElement$m}from"./sc-button2.js";import{d as defineCustomElement$l}from"./sc-card2.js";import{d as defineCustomElement$k}from"./sc-checkbox2.js";import{d as defineCustomElement$j}from"./sc-column2.js";import{d as defineCustomElement$i}from"./sc-columns2.js";import{d as defineCustomElement$h}from"./sc-dashboard-module2.js";import{d as defineCustomElement$g}from"./dropdown.js";import{d as defineCustomElement$f}from"./sc-flex2.js";import{d as defineCustomElement$e}from"./sc-form2.js";import{d as defineCustomElement$d}from"./sc-form-control2.js";import{d as defineCustomElement$c}from"./sc-icon2.js";import{d as defineCustomElement$b}from"./sc-input2.js";import{d as defineCustomElement$a}from"./sc-menu2.js";import{d as defineCustomElement$9}from"./sc-menu-item2.js";import{d as defineCustomElement$8}from"./sc-menu-label2.js";import{d as defineCustomElement$7}from"./sc-phone-input2.js";import{d as defineCustomElement$6}from"./sc-select2.js";import{d as defineCustomElement$5}from"./sc-spinner2.js";import{d as defineCustomElement$4}from"./sc-tag2.js";import{d as defineCustomElement$3}from"./sc-tax-id-input2.js";import{d as defineCustomElement$2}from"./sc-visually-hidden2.js";import{a as addQueryArgs}from"./add-query-args.js";const scCustomerEditCss=":host{display:block;position:relative}.customer-edit{display:grid;gap:0.75em}",ScCustomerEditStyle0=scCustomerEditCss,ScCustomerEdit$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.heading=void 0,this.customer=void 0,this.successUrl=void 0,this.loading=void 0,this.error=void 0}async handleSubmit(e){var s;this.loading=!0;try{const{email:t,first_name:i,last_name:n,phone:c,billing_matches_shipping:m,shipping_name:o,shipping_city:a,"tax_identifier.number_type":d,"tax_identifier.number":l,shipping_country:r,shipping_line_1:u,shipping_postal_code:f,shipping_state:p,billing_name:h,billing_city:b,billing_country:g,billing_line_1:_,billing_postal_code:E,billing_state:C}=await e.target.getFormJson();this.customer.billing_address={name:h,city:b,country:g,line_1:_,postal_code:E,state:C},this.customer.shipping_address={name:o,city:a,country:r,line_1:u,postal_code:f,state:p},await apiFetch({path:addQueryArgs(`surecart/v1/customers/${null===(s=this.customer)||void 0===s?void 0:s.id}`,{expand:["tax_identifier"]}),method:"PATCH",data:{email:t,first_name:i,last_name:n,phone:c,billing_matches_shipping:"on"===m,shipping_address:this.customer.shipping_address,billing_address:this.customer.billing_address,...l&&d?{tax_identifier:{number:l,number_type:d}}:{}}}),this.successUrl?window.location.assign(this.successUrl):this.loading=!1}catch(e){this.error=(null==e?void 0:e.message)||wp.i18n.__("Something went wrong","surecart"),this.loading=!1}}render(){var e,s,t,i,n,c,m,o,a,d,l,r;return h("sc-dashboard-module",{key:"2515621930c5eb0125490beb27405939b618fbe3",class:"customer-edit",error:this.error},h("span",{key:"a770a2c3d22c27d0aac46fc10e78bc47cd3d76f5",slot:"heading"},this.heading||wp.i18n.__("Update Billing Details","surecart")," ",!(null===(e=null==this?void 0:this.customer)||void 0===e?void 0:e.live_mode)&&h("sc-tag",{key:"a6980e5798646731d1e5d12c91f7a97cf773a63a",type:"warning",size:"small"},wp.i18n.__("Test","surecart"))),h("sc-card",{key:"9a72407271d4d6cf599d6b723a3cd78136cc79d1"},h("sc-form",{key:"27f2085336f0d34b8e1e457b3c4cb774617d418e",onScFormSubmit:e=>this.handleSubmit(e)},h("sc-columns",{key:"4ddcc9b4971c04a936d4c4e57344395ec699c765",style:{"--sc-column-spacing":"var(--sc-spacing-medium)"}},h("sc-column",{key:"b33b8a2c944eed291ba08bc3cb9eb4f4aeda8f80"},h("sc-input",{key:"71eb4def4fccfeb66e18de32cb0b6ee2dd89f18b",label:wp.i18n.__("First Name","surecart"),name:"first_name",value:null===(s=this.customer)||void 0===s?void 0:s.first_name})),h("sc-column",{key:"9a809ed9ffe2a7b6eba52f091dbd082015f15ae3"},h("sc-input",{key:"54a88a981ece697f9e45eb74359f6534337ee2e5",label:wp.i18n.__("Last Name","surecart"),name:"last_name",value:null===(t=this.customer)||void 0===t?void 0:t.last_name}))),h("sc-column",{key:"4b67f9b749eb549c470a97e094f8ccc3edd3ccd0"},h("sc-phone-input",{key:"ca93dc2e20042408c162e0ce5af13959bc55b309",label:wp.i18n.__("Phone","surecart"),name:"phone",value:null===(i=this.customer)||void 0===i?void 0:i.phone})),h("sc-flex",{key:"e5d06f43786d0d39fdca8b71c1ab4c44761cbc8d",style:{"--sc-flex-column-gap":"var(--sc-spacing-medium)"},flexDirection:"column"},h("div",{key:"0b52c6989244a2c38f4ca4f40b581207ce2f0e72"},h("sc-address",{key:"4a2329b6580f9906a1590471d339746394022681",label:wp.i18n.__("Shipping Address","surecart"),showName:!0,address:{...null===(n=this.customer)||void 0===n?void 0:n.shipping_address},required:!1,names:{name:"shipping_name",country:"shipping_country",line_1:"shipping_line_1",line_2:"shipping_line_2",city:"shipping_city",postal_code:"shipping_postal_code",state:"shipping_state"}})),h("div",{key:"7502cc108daa29f727b85effddc124c022785a47"},h("sc-checkbox",{key:"1859f4c572985c2824b196911073ebead6869b6e",name:"billing_matches_shipping",checked:null===(c=this.customer)||void 0===c?void 0:c.billing_matches_shipping,onScChange:e=>{this.customer={...this.customer,billing_matches_shipping:e.target.checked}}},wp.i18n.__("Billing address is same as shipping","surecart"))),h("div",{key:"c196d24d06cade953ee0c7eedfd232ff7ca0c59e",style:{display:(null===(m=this.customer)||void 0===m?void 0:m.billing_matches_shipping)?"none":"block"}},h("sc-address",{key:"27d7455cca61276f23cc49e33c89581e2e98f46c",label:wp.i18n.__("Billing Address","surecart"),showName:!0,address:{...null===(o=this.customer)||void 0===o?void 0:o.billing_address},names:{name:"billing_name",country:"billing_country",line_1:"billing_line_1",line_2:"billing_line_2",city:"billing_city",postal_code:"billing_postal_code",state:"billing_state"},required:!0})),h("sc-tax-id-input",{key:"91295122d928f7053925acc197cdc46bf7f16485",show:!0,number:null===(d=null===(a=this.customer)||void 0===a?void 0:a.tax_identifier)||void 0===d?void 0:d.number,type:null===(r=null===(l=this.customer)||void 0===l?void 0:l.tax_identifier)||void 0===r?void 0:r.number_type})),h("div",{key:"829dec7ece2797fcca40d4b73048a6979ed274f3"},h("sc-button",{key:"a0b8c4f0529823b877fe49167f6935143f3a2f0c",type:"primary",full:!0,submit:!0},wp.i18n.__("Save","surecart"))))),this.loading&&h("sc-block-ui",{key:"f366493d8d98d00497b8ca11017a7448c3db9680",spinner:!0}))}static get style(){return ScCustomerEditStyle0}},[1,"sc-customer-edit",{heading:[1],customer:[1040],successUrl:[1,"success-url"],loading:[32],error:[32]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-customer-edit","sc-address","sc-alert","sc-block-ui","sc-button","sc-card","sc-checkbox","sc-column","sc-columns","sc-dashboard-module","sc-dropdown","sc-flex","sc-form","sc-form-control","sc-icon","sc-input","sc-menu","sc-menu-item","sc-menu-label","sc-phone-input","sc-select","sc-spinner","sc-tag","sc-tax-id-input","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-customer-edit":customElements.get(e)||customElements.define(e,ScCustomerEdit$1);break;case"sc-address":customElements.get(e)||defineCustomElement$p();break;case"sc-alert":customElements.get(e)||defineCustomElement$o();break;case"sc-block-ui":customElements.get(e)||defineCustomElement$n();break;case"sc-button":customElements.get(e)||defineCustomElement$m();break;case"sc-card":customElements.get(e)||defineCustomElement$l();break;case"sc-checkbox":customElements.get(e)||defineCustomElement$k();break;case"sc-column":customElements.get(e)||defineCustomElement$j();break;case"sc-columns":customElements.get(e)||defineCustomElement$i();break;case"sc-dashboard-module":customElements.get(e)||defineCustomElement$h();break;case"sc-dropdown":customElements.get(e)||defineCustomElement$g();break;case"sc-flex":customElements.get(e)||defineCustomElement$f();break;case"sc-form":customElements.get(e)||defineCustomElement$e();break;case"sc-form-control":customElements.get(e)||defineCustomElement$d();break;case"sc-icon":customElements.get(e)||defineCustomElement$c();break;case"sc-input":customElements.get(e)||defineCustomElement$b();break;case"sc-menu":customElements.get(e)||defineCustomElement$a();break;case"sc-menu-item":customElements.get(e)||defineCustomElement$9();break;case"sc-menu-label":customElements.get(e)||defineCustomElement$8();break;case"sc-phone-input":customElements.get(e)||defineCustomElement$7();break;case"sc-select":customElements.get(e)||defineCustomElement$6();break;case"sc-spinner":customElements.get(e)||defineCustomElement$5();break;case"sc-tag":customElements.get(e)||defineCustomElement$4();break;case"sc-tax-id-input":customElements.get(e)||defineCustomElement$3();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$2()}}))}const ScCustomerEdit=ScCustomerEdit$1,defineCustomElement=defineCustomElement$1;export{ScCustomerEdit,defineCustomElement};