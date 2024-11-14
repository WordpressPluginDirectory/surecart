import{r as i,h as t,F as s,a as o}from"./p-e97fde0a.js";import{a as e}from"./p-9a298389.js";import{o as n}from"./p-b719a497.js";import{i as l}from"./p-6ec14893.js";import{a as d}from"./p-401e165e.js";import"./p-d3366af3.js";import"./p-3f6362a4.js";const r=":host{display:block;position:relative}[hidden]{display:none !important}.subscriptions-switch{display:grid;gap:0.5em}.subscriptions-switch__switcher{background:rgba(0, 0, 0, 0.035);padding:2px;line-height:1;border-radius:var(--sc-border-radius-small)}";const u=r;const h=class{constructor(t){i(this,t);this.query=undefined;this.heading=undefined;this.productGroupId=undefined;this.productId=undefined;this.subscription=undefined;this.filterAbove=4;this.successUrl=window.location.href;this.selectedPrice=undefined;this.products=[];this.prices=undefined;this.filter="month";this.hasFilters=undefined;this.showFilters=undefined;this.loading=undefined;this.busy=undefined;this.error=undefined}componentWillLoad(){n(this.el,(async()=>{try{this.loading=true;await Promise.all([this.getGroup(),this.getProductPrices()])}catch(i){console.error(i);if(i===null||i===void 0?void 0:i.message){this.error=i.message}else{this.error=wp.i18n.__("Something went wrong","surecart")}}finally{this.loading=false}}));this.handleSubscriptionChange()}handleProductsChange(){var i;this.prices=this.products.map((i=>{var t;return(t=i===null||i===void 0?void 0:i.prices)===null||t===void 0?void 0:t.data})).flat().filter(((i,t,s)=>s.findIndex((t=>t.id===i.id))===t)).filter((i=>!(i===null||i===void 0?void 0:i.archived))).filter((i=>i.portal_subscription_update_enabled));this.showFilters=((i=this.prices)===null||i===void 0?void 0:i.length)>this.filterAbove}handlePricesChange(i,t){if(!(t===null||t===void 0?void 0:t.length)&&(i===null||i===void 0?void 0:i.length)){this.selectedPrice=i.find((i=>{var t,s;return i.id===((s=(t=this.subscription)===null||t===void 0?void 0:t.price)===null||s===void 0?void 0:s.id)}))}this.hasFilters={...this.hasFilters,split:this.prices.some((i=>!!(i===null||i===void 0?void 0:i.recurring_period_count)&&!(i===null||i===void 0?void 0:i.archived))),month:this.prices.some((i=>i.recurring_interval==="month"&&!(i===null||i===void 0?void 0:i.recurring_period_count)&&!(i===null||i===void 0?void 0:i.archived))),year:this.prices.some((i=>i.recurring_interval==="year"&&!(i===null||i===void 0?void 0:i.recurring_period_count)&&!(i===null||i===void 0?void 0:i.archived))),never:this.prices.some((i=>(i.recurring_interval==="never"||!i.recurring_interval)&&!(i===null||i===void 0?void 0:i.archived)))}}handleSubscriptionChange(){var i,t;this.filter=((t=(i=this.subscription)===null||i===void 0?void 0:i.price)===null||t===void 0?void 0:t.recurring_interval)||"month"}async getGroup(){if(!this.productGroupId)return;const i=await await e({path:d(`surecart/v1/products/`,{product_group_ids:[this.productGroupId],expand:["prices"],...this.query})});this.products=[...this.products,...i]}async getProductPrices(){if(!this.productId)return;const i=await await e({path:d(`surecart/v1/products/${this.productId}`,{expand:["prices"]})});this.products=[...this.products,...[i]]}async handleSubmit(i){var t,s,o,e,n,l,r,u;const{plan:h}=await i.target.getFormJson();const a=this.prices.find((i=>i.id===h));const v=(t=this.subscription)===null||t===void 0?void 0:t.price;if((a===null||a===void 0?void 0:a.id)===v.id&&!(a===null||a===void 0?void 0:a.ad_hoc)&&!((o=(s=this.subscription)===null||s===void 0?void 0:s.variant_options)===null||o===void 0?void 0:o.length))return;if((n=(e=this.subscription)===null||e===void 0?void 0:e.variant_options)===null||n===void 0?void 0:n.length){this.busy=true;return window.location.assign(d(this.successUrl,{action:"confirm_variation",price_id:h,...((l=this.subscription)===null||l===void 0?void 0:l.live_mode)===false?{live_mode:false}:{}}))}if(a===null||a===void 0?void 0:a.ad_hoc){this.busy=true;return window.location.assign(d(this.successUrl,{action:"confirm_amount",price_id:h,...((r=this.subscription)===null||r===void 0?void 0:r.live_mode)===false?{live_mode:false}:{}}))}this.busy=true;window.location.assign(d(this.successUrl,{action:"confirm",price_id:h,...((u=this.subscription)===null||u===void 0?void 0:u.live_mode)===false?{live_mode:false}:{}}))}renderSwitcher(){const i=Object.values(this.hasFilters||{}).filter((i=>!!i)).length>1;if(!i)return;if(!this.showFilters)return;return t("sc-flex",{slot:"end",class:"subscriptions-switch__switcher"},this.hasFilters.month&&t("sc-button",{onClick:()=>this.filter="month",size:"small",type:this.filter==="month"?"default":"text"},wp.i18n.__("Monthly","surecart")),this.hasFilters.week&&t("sc-button",{onClick:()=>this.filter="week",size:"small",type:this.filter==="week"?"default":"text"},wp.i18n.__("Weekly","surecart")),this.hasFilters.year&&t("sc-button",{onClick:()=>this.filter="year",size:"small",type:this.filter==="year"?"default":"text"},wp.i18n.__("Yearly","surecart")),this.hasFilters.never&&t("sc-button",{onClick:()=>this.filter="never",size:"small",type:this.filter==="never"?"default":"text"},wp.i18n.__("Lifetime","surecart")),this.hasFilters.split&&t("sc-button",{onClick:()=>this.filter="split",size:"small",type:this.filter==="split"?"default":"text"},wp.i18n.__("Payment Plan","surecart")))}renderLoading(){return t("sc-choice",{name:"loading",disabled:true},t("sc-skeleton",{style:{width:"60px",display:"inline-block"}}),t("sc-skeleton",{style:{width:"80px",display:"inline-block"},slot:"price"}),t("sc-skeleton",{style:{width:"120px",display:"inline-block"},slot:"description"}))}isHidden(i){if(!this.showFilters)return false;let t=this.filter!==i.recurring_interval;if(this.filter==="never"&&!(i===null||i===void 0?void 0:i.recurring_interval)){t=false}if(this.filter==="split"&&(i===null||i===void 0?void 0:i.recurring_period_count)){t=false}return t}renderContent(){if(this.loading){return this.renderLoading()}return t("sc-choices",{required:true},t("div",null,(this.prices||[]).filter((i=>!i.archived)).filter((i=>{var t;return(i===null||i===void 0?void 0:i.currency)===((t=this.subscription)===null||t===void 0?void 0:t.currency)})).sort(((i,t)=>i.amount-t.amount)).map((i=>{var o,e;const n=((e=(o=this.subscription)===null||o===void 0?void 0:o.price)===null||e===void 0?void 0:e.id)===(i===null||i===void 0?void 0:i.id);const d=this.products.find((t=>t.id===(i===null||i===void 0?void 0:i.product)));return t("sc-choice",{key:i===null||i===void 0?void 0:i.id,checked:n,name:"plan",value:i===null||i===void 0?void 0:i.id,hidden:this.isHidden(i),onScChange:t=>{if(t.detail){this.selectedPrice=this.prices.find((t=>t.id===(i===null||i===void 0?void 0:i.id)))}}},t("div",null,t("strong",null,d===null||d===void 0?void 0:d.name," ",(i===null||i===void 0?void 0:i.name)&&t(s,null," — ",i===null||i===void 0?void 0:i.name))),t("div",{slot:"description"},(i===null||i===void 0?void 0:i.ad_hoc)?`${wp.i18n.__("Custom amount","surecart")} ${l(i)}`:t(s,null,t("sc-format-number",{type:"currency",currency:(i===null||i===void 0?void 0:i.currency)||"usd",value:i===null||i===void 0?void 0:i.amount})," ",l(i,{showOnce:true}))),n&&t("sc-tag",{type:"warning",slot:"price"},wp.i18n.__("Current Plan","surecart")))}))))}buttonText(){var i,t,s,o,e,n,l,d,r;if((t=(i=this.subscription)===null||i===void 0?void 0:i.variant_options)===null||t===void 0?void 0:t.length){if(((s=this.selectedPrice)===null||s===void 0?void 0:s.id)===((e=(o=this.subscription)===null||o===void 0?void 0:o.price)===null||e===void 0?void 0:e.id)){return wp.i18n.__("Update Options","surecart")}else{return wp.i18n.__("Choose Options","surecart")}}if((n=this.selectedPrice)===null||n===void 0?void 0:n.ad_hoc){if(((l=this.selectedPrice)===null||l===void 0?void 0:l.id)===((r=(d=this.subscription)===null||d===void 0?void 0:d.price)===null||r===void 0?void 0:r.id)){return wp.i18n.__("Update Amount","surecart")}else{return wp.i18n.__("Choose Amount","surecart")}}return wp.i18n.__("Next","surecart")}buttonDisabled(){var i,t,s,o,e;if((i=this.subscription)===null||i===void 0?void 0:i.variant_options){return false}return((s=(t=this.subscription)===null||t===void 0?void 0:t.price)===null||s===void 0?void 0:s.id)===((o=this.selectedPrice)===null||o===void 0?void 0:o.id)&&!((e=this.selectedPrice)===null||e===void 0?void 0:e.ad_hoc)}render(){var i,s,o,e,n,l;if(!this.loading&&((i=this.prices)===null||i===void 0?void 0:i.length)<2){if(!((o=(s=this.prices)===null||s===void 0?void 0:s[0])===null||o===void 0?void 0:o.ad_hoc)&&!((n=(e=this.subscription)===null||e===void 0?void 0:e.variant_options)===null||n===void 0?void 0:n.length)){return null}}if((l=this.subscription)===null||l===void 0?void 0:l.finite){return t("sc-alert",{type:"info",open:true},wp.i18n.__("To make changes to your payment plan, please contact us.","surecart"))}return t("sc-dashboard-module",{heading:this.heading||wp.i18n.__("Update Plan","surecart"),class:"subscription-switch",error:this.error},t("span",{slot:"end"},this.renderSwitcher()),t("sc-form",{class:"subscriptions-switch",onScFormSubmit:i=>this.handleSubmit(i)},this.renderContent(),t("sc-button",{type:"primary",full:true,submit:true,loading:this.loading||this.busy,disabled:this.buttonDisabled()},this.buttonText()," ",t("sc-icon",{name:"arrow-right",slot:"suffix"})),this.busy&&t("sc-block-ui",{style:{zIndex:"9"}})))}get el(){return o(this)}static get watchers(){return{products:["handleProductsChange"],prices:["handlePricesChange"],subscription:["handleSubscriptionChange"]}}};h.style=u;export{h as sc_subscription_switch};
//# sourceMappingURL=p-049213e4.entry.js.map