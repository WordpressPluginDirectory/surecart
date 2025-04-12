import{r as e,h as i}from"./p-e97fde0a.js";import{a as s}from"./p-d9fa04f9.js";import{a}from"./p-401e165e.js";import"./p-d3366af3.js";const t=":host{display:block;position:relative}.customer-edit{display:grid;gap:0.75em}";const n=t;const d=class{constructor(i){e(this,i);this.heading=undefined;this.customer=undefined;this.successUrl=undefined;this.i18n=undefined;this.loading=undefined;this.error=undefined}async handleSubmit(e){var i;this.loading=true;try{const{email:t,first_name:n,last_name:d,phone:l,billing_matches_shipping:c,shipping_name:o,shipping_city:r,"tax_identifier.number_type":b,"tax_identifier.number":f,shipping_country:u,shipping_line_1:p,shipping_postal_code:h,shipping_state:_,billing_name:m,billing_city:y,billing_country:g,billing_line_1:v,billing_postal_code:k,billing_state:w}=await e.target.getFormJson();this.customer.billing_address={name:m,city:y,country:g,line_1:v,postal_code:k,state:w};this.customer.shipping_address={name:o,city:r,country:u,line_1:p,postal_code:h,state:_};await s({path:a(`surecart/v1/customers/${(i=this.customer)===null||i===void 0?void 0:i.id}`,{expand:["tax_identifier"]}),method:"PATCH",data:{email:t,first_name:n,last_name:d,phone:l,billing_matches_shipping:c===true||c==="on",shipping_address:this.customer.shipping_address,billing_address:this.customer.billing_address,...f&&b?{tax_identifier:{number:f,number_type:b}}:{}}});if(this.successUrl){window.location.assign(this.successUrl)}else{this.loading=false}}catch(e){this.error=(e===null||e===void 0?void 0:e.message)||wp.i18n.__("Something went wrong","surecart");this.loading=false}}render(){var e,s,a,t,n,d,l,c,o,r,b,f,u,p,h,_;return i("sc-dashboard-module",{key:"07d114eecf30ed395330b5b7ddfff3541ba48215",class:"customer-edit",error:this.error},i("span",{key:"25deba97c1c5fcc1b9b0c34e3f46eedbf745b6cc",slot:"heading"},this.heading||wp.i18n.__("Update Billing Details","surecart")," ",!((e=this===null||this===void 0?void 0:this.customer)===null||e===void 0?void 0:e.live_mode)&&i("sc-tag",{key:"41a3e98fc997d2f3ca4117841087c34e0e039f87",type:"warning",size:"small"},wp.i18n.__("Test","surecart"))),i("sc-card",{key:"37385a6d04e6900e32d18703d74a96d3bd8ee6bd"},i("sc-form",{key:"095458517efb9e61bb94958528a0d775e5098f05",onScFormSubmit:e=>this.handleSubmit(e)},i("sc-columns",{key:"06cb728f04a862bc4b74a7ed471c51154530b6b8",style:{"--sc-column-spacing":"var(--sc-spacing-medium)"}},i("sc-column",{key:"0aabe9befbf0112295f034d342b3fe05f5ac8fb6"},i("sc-input",{key:"0400d0b331f925421183e22d07f463ff0e00a9cc",label:wp.i18n.__("First Name","surecart"),name:"first_name",value:(s=this.customer)===null||s===void 0?void 0:s.first_name})),i("sc-column",{key:"908c5dbb5f5f5e45eaa2e8b47007e9f82e1fd931"},i("sc-input",{key:"f8b956292d5a78f56389c55063a3b68c035d4470",label:wp.i18n.__("Last Name","surecart"),name:"last_name",value:(a=this.customer)===null||a===void 0?void 0:a.last_name}))),i("sc-column",{key:"460a4ecc86a062a38c93563c20aad606e71d01f7"},i("sc-phone-input",{key:"2f2efc02eaee34d6522307521e80cc3df5fba816",label:wp.i18n.__("Phone","surecart"),name:"phone",value:(t=this.customer)===null||t===void 0?void 0:t.phone})),i("sc-flex",{key:"0edd0a2bdb4ab388cf942a54c433e6e0246fe815",style:{"--sc-flex-column-gap":"var(--sc-spacing-medium)"},flexDirection:"column"},i("div",{key:"f781c94e47d9cd8ae82f63e74b909a624667cf6b"},i("sc-address",{key:"916a6f1d6fe5291db5933f36b7f0180d833fbfee",label:wp.i18n.__("Shipping Address","surecart"),showName:true,address:{...(n=this.customer)===null||n===void 0?void 0:n.shipping_address},required:false,names:{name:"shipping_name",country:"shipping_country",line_1:"shipping_line_1",line_2:"shipping_line_2",city:"shipping_city",postal_code:"shipping_postal_code",state:"shipping_state"},defaultCountryFields:((d=this.i18n)===null||d===void 0?void 0:d.defaultCountryFields)||[],countryFields:((l=this.i18n)===null||l===void 0?void 0:l.countryFields)||[]})),i("div",{key:"851a39f20aafbb11113b44b49a81b7886d256666"},i("sc-checkbox",{key:"2b2eae9c38bfb7de09481fb96318b989838db0b0",name:"billing_matches_shipping",checked:(c=this.customer)===null||c===void 0?void 0:c.billing_matches_shipping,onScChange:e=>{this.customer={...this.customer,billing_matches_shipping:e.target.checked}},value:"on"},wp.i18n.__("Billing address is same as shipping","surecart"))),i("div",{key:"6d2a3164b9ec45f2b432f0b3b4a6bfd4e3c66f0a",style:{display:((o=this.customer)===null||o===void 0?void 0:o.billing_matches_shipping)?"none":"block"}},i("sc-address",{key:"0df99157b0882a3f8754f4a42bff2fa5fe3991d4",label:wp.i18n.__("Billing Address","surecart"),showName:true,address:{...(r=this.customer)===null||r===void 0?void 0:r.billing_address},names:{name:"billing_name",country:"billing_country",line_1:"billing_line_1",line_2:"billing_line_2",city:"billing_city",postal_code:"billing_postal_code",state:"billing_state"},required:true,defaultCountryFields:((b=this.i18n)===null||b===void 0?void 0:b.defaultCountryFields)||[],countryFields:((f=this.i18n)===null||f===void 0?void 0:f.countryFields)||[]})),i("sc-tax-id-input",{key:"51da03a5430806d612e4a4673a5761f3d2e08d21",show:true,number:(p=(u=this.customer)===null||u===void 0?void 0:u.tax_identifier)===null||p===void 0?void 0:p.number,type:(_=(h=this.customer)===null||h===void 0?void 0:h.tax_identifier)===null||_===void 0?void 0:_.number_type})),i("div",{key:"a12a0ed5c3bc1694285b52ab56c3d11f7a138118"},i("sc-button",{key:"32a2d734470fecbee07ee8a546ddd178fd96c644",type:"primary",full:true,submit:true},wp.i18n.__("Save","surecart"))))),this.loading&&i("sc-block-ui",{key:"3f85836c69662242a912e2f93843005b91da0871",spinner:true}))}};d.style=n;export{d as sc_customer_edit};
//# sourceMappingURL=p-847369de.entry.js.map