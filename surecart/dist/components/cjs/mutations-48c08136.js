"use strict";const index=require("./index-00f0fc21.js"),utils=require("./utils-a086ed6e.js"),getQueryArg=require("./get-query-arg-53bf21e2.js"),index$1=require("./index-fb76df07.js"),google=require("./google-62bdaeea.js"),currency=require("./currency-ba038e2f.js"),addQueryArgs=require("./add-query-args-17c551b6.js"),store$2=require("./store-47c25b3d.js"),price=require("./price-f1f1114d.js");function removeQueryArgs(e){const o=e.indexOf("?");if(-1===o)return e;const t=addQueryArgs.getQueryArgs(e),n=e.substr(0,o);for(var i=arguments.length,d=new Array(i>1?i-1:0),r=1;r<i;r++)d[r-1]=arguments[r];d.forEach((e=>delete t[e]));const u=addQueryArgs.buildQueryString(t);return u?n+"?"+u:n}const safeRead=(e,o)=>{try{return JSON.parse(e.getItem(o))}catch{return null}},debounce=e=>{let o=!1;return()=>{o||(o=!0,setTimeout((()=>{e(),o=!1}),0))}},createStorageStore=(e,o,t,n=!1)=>{var i;const d=index.createStore(null!==(i=safeRead(e,o))&&void 0!==i?i:t,((e,o)=>JSON.stringify(e)!==JSON.stringify(o))),r=debounce((()=>e.setItem(o,JSON.stringify(d.state))));return r(),n&&window.addEventListener("storage",(()=>{const t=safeRead(e,o);if(null!==t)for(const e in t)d.set(e,t[e])})),d.use({set:r,reset:r}),d},createLocalStore=(e,o,t=!1)=>createStorageStore(localStorage,e,o,t),{checkout:checkout$1}=utils.getSerializedState(),notPersistCart="browser"!==(null==checkout$1?void 0:checkout$1.persist)||!!getQueryArg.getQueryArg(window.location.href,"no_cart"),store$1=notPersistCart?index.createStore({live:{},test:{}}):createLocalStore("surecart-local-storage",{live:{},test:{}},!0),{state:state$2,onChange:onChange$1,on:on$2,set:set$1,get:get$1,dispose:dispose$1}=store$1;window.scStore=store$1;const{checkout:checkout}=utils.getSerializedState(),{state:state$1,onChange:onChange,on:on$1,set:set,get:get,dispose:dispose,reset:reset}=index.createStore({formId:null,groupId:null,mode:"live",locks:[],product:null,checkout:null,currencyCode:"usd",abandonedCheckoutEnabled:!0,initialLineItems:[],isCheckoutPage:!1,validateStock:!1,persist:"browser",paymentMethodRequiresShipping:!1,...checkout},((e,o)=>JSON.stringify(e)!==JSON.stringify(o))),service=store$2.v(store$2.checkoutMachine);service.subscribe((e=>store$2.state.formState=e)),service.start(),store$2.onChange("formState",(()=>{const{formState:e}=store$2.state,{value:o}=e;void 0!==store$2.state.text.loading[o]&&index$1.speak(store$2.state.text.loading[o],"assertive")}));const{send:send}=service,updateFormState=e=>send(e);onChange("checkout",(e=>setCheckout(e,state$1.formId))),onChange("checkout",(e=>{(null==e?void 0:e.id)&&(state$1.mode=(null==e?void 0:e.live_mode)?"live":"test")})),store$2.onChange("formState",(({value:e})=>{var o,t,n,i;"draft"===e&&(null===(t=null===(o=state$1.checkout)||void 0===o?void 0:o.invoice)||void 0===t?void 0:t.status)&&"open"!==(null===(i=null===(n=state$1.checkout)||void 0===n?void 0:n.invoice)||void 0===i?void 0:i.status)&&updateFormState("LOCK")})),on$1("get",(e=>{if("checkout"===e){const e=getCheckout(state$1.formId,state$1.mode);(null==e?void 0:e.id)&&(state$1.checkout=e)}})),on$1("set",((e,o,t)=>{var n,i,d,r,u,l,c,a,v,s,m,p,y,_,h;if("checkout"!==e)return;if(!t||!o)return;if((null==o?void 0:o.total_amount)===(null==t?void 0:t.total_amount)&&(null==o?void 0:o.amount_due)===(null==t?void 0:t.total_amount))return;const g=price.getFormattedPrice({amount:o.amount_due,currency:o.currency}),f=price.getFormattedPrice({amount:o.total_amount,currency:o.currency}),w=(null===(i=null===(n=null==o?void 0:o.discount)||void 0===n?void 0:n.promotion)||void 0===i?void 0:i.code)!==(null===(r=null===(d=null==t?void 0:t.discount)||void 0===d?void 0:d.promotion)||void 0===r?void 0:r.code)&&(null===(l=null===(u=null==o?void 0:o.discount)||void 0===u?void 0:u.promotion)||void 0===l?void 0:l.code),C=[...(null===(a=null===(c=null==o?void 0:o.discount)||void 0===c?void 0:c.promotion)||void 0===a?void 0:a.code)===(null===(s=null===(v=null==t?void 0:t.discount)||void 0===v?void 0:v.promotion)||void 0===s?void 0:s.code)||(null===(p=null===(m=null==o?void 0:o.discount)||void 0===m?void 0:m.promotion)||void 0===p?void 0:p.code)?[]:[wp.i18n.__("Coupon code removed.","sc-coupon-form")],...w?[wp.i18n.sprintf(
// Translators: %1$s is the coupon code, %2$s is the human readable discount.
wp.i18n.__("Coupon code %1$s added. %2$s applied.","sc-coupon-form"),null===(_=null===(y=null==o?void 0:o.discount)||void 0===y?void 0:y.promotion)||void 0===_?void 0:_.code,price.getHumanDiscount(null===(h=null==o?void 0:o.discount)||void 0===h?void 0:h.coupon))]:[],o.total_amount===o.amount_due?wp.i18n.sprintf(wp.i18n.__("Checkout updated. The amount due is %1$s.","surecart"),g):wp.i18n.sprintf(wp.i18n.__("Checkout updated. The total amount for the checkout is %1$s and the amount due is %1$s.","surecart"),f,g)];index$1.speak(C.join(" "))}));const store=index.createStore((()=>({cart:{open:!1}})),((e,o)=>JSON.stringify(e)!==JSON.stringify(o))),{state:state}=store,toggleCart=(e=null)=>store.set("cart",{...state.cart,open:null!==e?e:!state.cart.open}),{on:on}=store;on("set",((e,o)=>{"cart"===e&&((null==o?void 0:o.open)?index$1.speak(wp.i18n.__("Cart Opened","surecart"),"assertive"):index$1.speak(wp.i18n.__("Cart Closed","surecart"),"assertive"))})),on$2("set",((e,o,t)=>Object.keys(o||{}).forEach((e=>handleCheckoutLineItemChange(o[e],null==t?void 0:t[e])))));const handleCheckoutLineItemChange=(e,o)=>{var t,n;const i=(null===(t=null==e?void 0:e.line_items)||void 0===t?void 0:t.data)||[],d=(null===(n=null==o?void 0:o.line_items)||void 0===n?void 0:n.data)||[];if(i.forEach((e=>{const o=d.find((o=>o.id===e.id));if(!o||(null==o?void 0:o.quantity)<(null==e?void 0:e.quantity)){const t=new CustomEvent("scAddedToCart",{detail:{...e,quantity:e.quantity-((null==o?void 0:o.quantity)||0)},bubbles:!0});document.dispatchEvent(t)}})),d.forEach((e=>{const o=i.find((o=>o.id===e.id));if(!o||(null==e?void 0:e.quantity)>(null==o?void 0:o.quantity)){const t=new CustomEvent("scRemovedFromCart",{detail:{...e,quantity:e.quantity-((null==o?void 0:o.quantity)||0)},bubbles:!0});document.dispatchEvent(t)}})),!(null==state$1?void 0:state$1.isCheckoutPage)&&JSON.stringify(i)!==JSON.stringify(d)){const t=new CustomEvent("scCartUpdated",{detail:{currentCart:e,previousCart:o},bubbles:!0});document.dispatchEvent(t)}};on("set",((e,o,t)=>{if("cart"===e&&(null==o?void 0:o.open)!==(null==t?void 0:t.open)&&(null==o?void 0:o.open)){const e=new CustomEvent("scViewedCart",{detail:state$1.checkout,bubbles:!0});document.dispatchEvent(e)}})),on$1("set",((e,o,t)=>{if("checkout"!==e)return;if(null==t?void 0:t.id)return;if(!(null==o?void 0:o.id))return;if(!state$1.isCheckoutPage)return;const n=new CustomEvent("scCheckoutInitiated",{detail:o,bubbles:!0});document.dispatchEvent(n)})),on$1("set",((e,o,t)=>{var n,i;if("checkout"!==e)return;if(!(null==o?void 0:o.status)||(null==t?void 0:t.status)===(null==o?void 0:o.status))return;if(!["paid","processing"].includes(o.status))return;const d=new CustomEvent("scOrderPaid",{detail:o,bubbles:!0});document.dispatchEvent(d);const r=new CustomEvent("scCheckoutCompleted",{detail:o,bubbles:!0});document.dispatchEvent(r);const u=((null===(n=null==o?void 0:o.line_items)||void 0===n?void 0:n.data)||[]).filter((e=>{var o;return(null===(o=null==e?void 0:e.price)||void 0===o?void 0:o.trial_duration_days)>0}));if(u.length>0){const e=new CustomEvent("scTrialStarted",{detail:u,bubbles:!0});document.dispatchEvent(e)}const l=((null===(i=null==o?void 0:o.line_items)||void 0===i?void 0:i.data)||[]).filter((e=>{var o;return(null===(o=null==e?void 0:e.price)||void 0===o?void 0:o.recurring_interval_count)>0}));if(l.length>0){const e=new CustomEvent("scSubscriptionStarted",{detail:l,bubbles:!0});document.dispatchEvent(e)}})),on$1("set",((e,o,t)=>{if("checkout"!==e)return;if(!state$1.isCheckoutPage)return;if(!(null==o?void 0:o.selected_shipping_choice))return;if((null==t?void 0:t.selected_shipping_choice)===(null==o?void 0:o.selected_shipping_choice))return;const n=new CustomEvent("scShippingInfoAdded",{detail:o,bubbles:!0});document.dispatchEvent(n)})),on$1("set",((e,o,t)=>{if("checkout"!==e)return;if(!state$1.isCheckoutPage)return;if(!(null==t?void 0:t.id))return;if(JSON.stringify(o)===JSON.stringify(t))return;const n=new CustomEvent("scCheckoutUpdated",{detail:{currentCheckout:o,previousCheckout:t},bubbles:!0});document.dispatchEvent(n)})),window.addEventListener("scAddedToCart",(e=>{var o,t,n,i,d,r,u,l,c,a,v,s;const m=e.detail;(null===(o=null==m?void 0:m.price)||void 0===o?void 0:o.product)&&google.trackEvent("add_to_cart",{currency:null===(t=m.price)||void 0===t?void 0:t.currency,value:currency.maybeConvertAmount((null===(n=null==m?void 0:m.price)||void 0===n?void 0:n.amount)||0,(null===(i=m.price)||void 0===i?void 0:i.currency)||"USD"),items:[{item_id:null===(r=null===(d=m.price)||void 0===d?void 0:d.product)||void 0===r?void 0:r.id,item_name:null===(l=null===(u=m.price)||void 0===u?void 0:u.product)||void 0===l?void 0:l.name,item_variant:(m.variant_options||[]).join(" / "),price:currency.maybeConvertAmount((null===(c=null==m?void 0:m.price)||void 0===c?void 0:c.amount)||0,(null===(a=m.price)||void 0===a?void 0:a.currency)||"USD"),currency:null===(v=m.price)||void 0===v?void 0:v.currency,quantity:m.quantity,discount:(null==m?void 0:m.discount_amount)?currency.maybeConvertAmount((null==m?void 0:m.discount_amount)||0,(null===(s=m.price)||void 0===s?void 0:s.currency)||"USD"):0}]})})),window.addEventListener("scRemovedFromCart",(e=>{var o,t,n,i,d,r,u,l,c,a,v,s;const m=e.detail;(null===(o=null==m?void 0:m.price)||void 0===o?void 0:o.product)&&google.trackEvent("remove_from_cart",{currency:null===(t=m.price)||void 0===t?void 0:t.currency,value:currency.maybeConvertAmount((null===(n=null==m?void 0:m.price)||void 0===n?void 0:n.amount)||0,(null===(i=m.price)||void 0===i?void 0:i.currency)||"USD"),items:[{item_id:null===(r=null===(d=m.price)||void 0===d?void 0:d.product)||void 0===r?void 0:r.id,item_name:null===(l=null===(u=m.price)||void 0===u?void 0:u.product)||void 0===l?void 0:l.name,item_variant:(m.variant_options||[]).join(" / "),price:currency.maybeConvertAmount((null===(c=null==m?void 0:m.price)||void 0===c?void 0:c.amount)||0,(null===(a=m.price)||void 0===a?void 0:a.currency)||"USD"),currency:null===(v=m.price)||void 0===v?void 0:v.currency,quantity:m.quantity,discount:(null==m?void 0:m.discount_amount)?currency.maybeConvertAmount((null==m?void 0:m.discount_amount)||0,(null===(s=m.price)||void 0===s?void 0:s.currency)||"USD"):0}]})})),window.addEventListener("scViewedCart",(e=>{var o;const t=e.detail;google.trackEvent("view_cart",{currency:t.currency,value:currency.maybeConvertAmount(t.total_amount,t.currency),items:((null===(o=t.line_items)||void 0===o?void 0:o.data)||[]).map((e=>{var o,t,n,i,d,r,u,l,c;return{item_id:null===(t=null===(o=null==e?void 0:e.price)||void 0===o?void 0:o.product)||void 0===t?void 0:t.id,item_name:null===(i=null===(n=null==e?void 0:e.price)||void 0===n?void 0:n.product)||void 0===i?void 0:i.name,currency:null===(d=e.price)||void 0===d?void 0:d.currency,discount:e.discount_amount?currency.maybeConvertAmount(e.discount_amount,null===(r=e.price)||void 0===r?void 0:r.currency):0,price:currency.maybeConvertAmount(null===(u=null==e?void 0:e.price)||void 0===u?void 0:u.amount,null===(l=e.price)||void 0===l?void 0:l.currency),quantity:e.quantity,...(null===(c=null==e?void 0:e.variant_options)||void 0===c?void 0:c.length)?{item_variant:(e.variant_options||[]).join(" / ")}:{}}}))})})),window.addEventListener("scCheckoutInitiated",(e=>{var o;const t=e.detail;google.trackEvent("begin_checkout",{currency:t.currency,value:currency.maybeConvertAmount(t.total_amount,t.currency),items:((null===(o=t.line_items)||void 0===o?void 0:o.data)||[]).map((e=>{var o,t,n,i,d,r,u,l,c;return{item_id:null===(t=null===(o=null==e?void 0:e.price)||void 0===o?void 0:o.product)||void 0===t?void 0:t.id,item_name:null===(i=null===(n=null==e?void 0:e.price)||void 0===n?void 0:n.product)||void 0===i?void 0:i.name,currency:null===(d=e.price)||void 0===d?void 0:d.currency,discount:e.discount_amount?currency.maybeConvertAmount(e.discount_amount,null===(r=e.price)||void 0===r?void 0:r.currency):0,price:currency.maybeConvertAmount(null===(u=null==e?void 0:e.price)||void 0===u?void 0:u.amount,null===(l=e.price)||void 0===l?void 0:l.currency),quantity:e.quantity,...(null===(c=null==e?void 0:e.variant_options)||void 0===c?void 0:c.length)?{item_variant:(e.variant_options||[]).join(" / ")}:{}}}))})})),window.addEventListener("scCheckoutCompleted",(e=>{var o;const t=e.detail;google.trackEvent("purchase",{transaction_id:null==t?void 0:t.id,value:currency.maybeConvertAmount(null==t?void 0:t.total_amount,(null==t?void 0:t.currency)||"USD"),currency:(t.currency||"").toUpperCase(),items:((null===(o=null==t?void 0:t.line_items)||void 0===o?void 0:o.data)||[]).map((e=>{var o,n,i,d,r,u,l,c;return{item_id:null===(n=null===(o=null==e?void 0:e.price)||void 0===o?void 0:o.product)||void 0===n?void 0:n.id,currency:(t.currency||"").toUpperCase(),item_name:(null===(d=null===(i=null==e?void 0:e.price)||void 0===i?void 0:i.product)||void 0===d?void 0:d.name)||"",discount:(null==e?void 0:e.discount_amount)?currency.maybeConvertAmount((null==e?void 0:e.discount_amount)||0,(null===(r=null==e?void 0:e.price)||void 0===r?void 0:r.currency)||"USD"):0,price:currency.maybeConvertAmount((null===(u=null==e?void 0:e.price)||void 0===u?void 0:u.amount)||0,(null===(l=null==e?void 0:e.price)||void 0===l?void 0:l.currency)||"USD"),quantity:(null==e?void 0:e.quantity)||1,...(null===(c=null==e?void 0:e.variant_options)||void 0===c?void 0:c.length)?{item_variant:(e.variant_options||[]).join(" / ")}:{}}}))})})),window.addEventListener("scPaymentInfoAdded",(e=>{var o;const t=e.detail;google.trackEvent("add_payment_info",{currency:t.currency,value:currency.maybeConvertAmount(t.total_amount,t.currency),items:((null===(o=t.line_items)||void 0===o?void 0:o.data)||[]).map((e=>{var o,t,n,i,d,r,u,l,c;return{item_id:null===(t=null===(o=null==e?void 0:e.price)||void 0===o?void 0:o.product)||void 0===t?void 0:t.id,item_name:(null===(i=null===(n=null==e?void 0:e.price)||void 0===n?void 0:n.product)||void 0===i?void 0:i.name)||"",currency:null===(d=e.price)||void 0===d?void 0:d.currency,discount:e.discount_amount?currency.maybeConvertAmount(e.discount_amount,null===(r=e.price)||void 0===r?void 0:r.currency):0,price:currency.maybeConvertAmount(null===(u=null==e?void 0:e.price)||void 0===u?void 0:u.amount,null===(l=e.price)||void 0===l?void 0:l.currency),quantity:e.quantity,...(null===(c=null==e?void 0:e.variant_options)||void 0===c?void 0:c.length)?{item_variant:(e.variant_options||[]).join(" / ")}:{}}}))})})),window.addEventListener("scShippingInfoAdded",(e=>{var o,t,n,i,d,r,u,l;const c=e.detail,a=null===(t=null===(o=null==c?void 0:c.shipping_choices)||void 0===o?void 0:o.data)||void 0===t?void 0:t.find((e=>e.id===(null==c?void 0:c.selected_shipping_choice))),v=(null===(n=null==a?void 0:a.shipping_method)||void 0===n?void 0:n.name)||"";google.trackEvent("add_shipping_info",{currency:c.currency,value:currency.maybeConvertAmount(c.total_amount,c.currency),...(null===(d=null===(i=null==c?void 0:c.discount)||void 0===i?void 0:i.promotion)||void 0===d?void 0:d.code)?{coupon:null===(u=null===(r=null==c?void 0:c.discount)||void 0===r?void 0:r.promotion)||void 0===u?void 0:u.code}:{},...v?{shipping_tier:v}:"",items:((null===(l=c.line_items)||void 0===l?void 0:l.data)||[]).map((e=>{var o,t,n,i,d,r,u,l,c;return{item_id:null===(t=null===(o=null==e?void 0:e.price)||void 0===o?void 0:o.product)||void 0===t?void 0:t.id,item_name:(null===(i=null===(n=null==e?void 0:e.price)||void 0===n?void 0:n.product)||void 0===i?void 0:i.name)||"",currency:null===(d=e.price)||void 0===d?void 0:d.currency,discount:e.discount_amount?currency.maybeConvertAmount(e.discount_amount,null===(r=e.price)||void 0===r?void 0:r.currency):0,price:currency.maybeConvertAmount(null===(u=null==e?void 0:e.price)||void 0===u?void 0:u.amount,null===(l=e.price)||void 0===l?void 0:l.currency),quantity:e.quantity,...(null===(c=null==e?void 0:e.variant_options)||void 0===c?void 0:c.length)?{item_variant:(e.variant_options||[]).join(" / ")}:{}}}))})})),window.addEventListener("scAddedToCart",(function(e){var o,t,n,i,d,r,u,l;if(!(null===window||void 0===window?void 0:window.fbq))return;const c=e.detail;if(!(null===(o=null==c?void 0:c.price)||void 0===o?void 0:o.product))return;const a=null===(t=null==c?void 0:c.price)||void 0===t?void 0:t.product,v=(null===(i=null===(n=null==a?void 0:a.product_collections)||void 0===n?void 0:n.data)||void 0===i?void 0:i.map((e=>e.name)))||[];window.fbq("track","AddToCart",{...v.length?{content_category:v.join(", ")}:{},content_ids:[a.id],content_name:(null==a?void 0:a.name)+((null===(d=null==c?void 0:c.variant_options)||void 0===d?void 0:d.length)?` - ${null==c?void 0:c.variant_options.join(" / ")}`:""),content_type:"product",contents:[{id:a.id,quantity:c.quantity}],currency:null===(r=null==c?void 0:c.price)||void 0===r?void 0:r.currency,value:currency.maybeConvertAmount((null===(u=null==c?void 0:c.price)||void 0===u?void 0:u.amount)||0,(null===(l=null==c?void 0:c.price)||void 0===l?void 0:l.currency)||"USD")})})),window.addEventListener("scCheckoutInitiated",(function(e){var o,t,n,i;if(!(null===window||void 0===window?void 0:window.fbq))return;const d=e.detail;window.fbq("track","InitiateCheckout",{content_ids:null===(o=(null==d?void 0:d.line_items.data)||[])||void 0===o?void 0:o.map((e=>e.id)),contents:null===(t=(null==d?void 0:d.line_items.data)||[])||void 0===t?void 0:t.map((e=>({id:e.id,quantity:e.quantity}))),currency:null==d?void 0:d.currency,num_items:(null===(i=null===(n=null==d?void 0:d.line_items)||void 0===n?void 0:n.data)||void 0===i?void 0:i.length)||0,value:currency.maybeConvertAmount(null==d?void 0:d.total_amount,(null==d?void 0:d.currency)||"USD")})})),window.addEventListener("scCheckoutCompleted",(function(e){var o,t,n;if(!(null===window||void 0===window?void 0:window.fbq))return;const i=e.detail;window.fbq("track","Purchase",{content_ids:null===(o=null==i?void 0:i.items)||void 0===o?void 0:o.map((e=>e.item_id)),content_name:"Purchase",content_type:"product",contents:null===(t=null==i?void 0:i.items)||void 0===t?void 0:t.map((e=>({id:e.item_id,quantity:e.quantity}))),currency:null==i?void 0:i.currency,num_items:null===(n=null==i?void 0:i.items)||void 0===n?void 0:n.length,value:currency.maybeConvertAmount(null==i?void 0:i.total_amount,(null==i?void 0:i.currency)||"USD")})})),window.addEventListener("scTrialStarted",(function(e){(null===window||void 0===window?void 0:window.fbq)&&e.detail.forEach((e=>{var o,t,n;window.fbq("track","StartTrial",{currency:null===(o=e.price)||void 0===o?void 0:o.currency,value:currency.maybeConvertAmount((null===(t=e.price)||void 0===t?void 0:t.amount)||0,(null===(n=e.price)||void 0===n?void 0:n.currency)||"USD")})}))})),window.addEventListener("scSubscriptionStarted",(function(e){(null===window||void 0===window?void 0:window.fbq)&&e.detail.forEach((e=>{var o,t,n;window.fbq("track","Subscribe",{currency:null===(o=e.price)||void 0===o?void 0:o.currency,value:currency.maybeConvertAmount((null===(t=e.price)||void 0===t?void 0:t.amount)||0,(null===(n=e.price)||void 0===n?void 0:n.currency)||"USD")})}))})),window.addEventListener("scPaymentInfoAdded",(function(e){if(!(null===window||void 0===window?void 0:window.fbq))return;const o=e.detail;window.fbq("track","AddPaymentInfo",{content_category:"Payment Info Added",currency:null==o?void 0:o.currency})}));const getCheckout=(e,o)=>{var t;return(null===(t=store$1.state[o])||void 0===t?void 0:t[e])||{}},setCheckout=(e,o)=>{const t=(null==e?void 0:e.live_mode)?"live":"test";store$1.set(t,{...store$1.state[t],[o]:e}),state$1.formId===o&&state$1.mode===t&&(state$1.checkout=e),"url"===state$1.persist&&(null==e?void 0:e.id)&&window.history.replaceState({},document.title,addQueryArgs.addQueryArgs(window.location.href,{checkout_id:null==e?void 0:e.id}))},clearCheckout=(e,o)=>{const{[e]:t,...n}=store$1.state[o];window.history.replaceState({},document.title,removeQueryArgs(window.location.href,"redirect_status","coupon","line_items","confirm_checkout_id","checkout_id")),store$1.set(o,n),reset()};exports.clearCheckout=clearCheckout,exports.getCheckout=getCheckout,exports.on=on$1,exports.onChange=onChange,exports.onChange$1=onChange$1,exports.removeQueryArgs=removeQueryArgs,exports.setCheckout=setCheckout,exports.state=state$1,exports.store=store,exports.toggleCart=toggleCart,exports.updateFormState=updateFormState;