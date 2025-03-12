import*as t from"@wordpress/interactivity";var e={660:function(t,e,n){function o(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const o=new CustomEvent("scProductViewed",{detail:{id:t?.id,name:t?.name,price:e,permalink:t?.permalink,prices:t?.prices,variant_options:t?.variant_options?.data,product_collections:t?.product_collections,quantity:n},bubbles:!0});document.dispatchEvent(o)}n.r(e),n.d(e,{scProductViewed:function(){return o}})}},n={};function o(t){var i=n[t];if(void 0!==i)return i.exports;var r=n[t]={exports:{}};return e[t](r,r.exports,o),r.exports}o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};!function(){o.d(i,{O:function(){return m},M:function(){return f}});var e,n,r=(e={getContext:function(){return t.getContext},store:function(){return t.store}},n={},o.d(n,e),n);const{actions:a}=(0,r.store)("surecart/checkout"),{actions:s,state:c}=(0,r.store)("surecart/cart"),{addQueryArgs:u}=wp.url,{sprintf:l,__}=wp.i18n,{scProductViewed:d}=o(660),p=t=>"keydown"===t.type&&"Enter"!==t.key&&"Space"!==t.code,{state:g,actions:y}=(0,r.store)("surecart/product-page",{state:{get quantity(){const{selectedPrice:t,quantity:e}=(0,r.getContext)();return t?.ad_hoc?1:e},get selectedAmount(){const t=(0,r.getContext)();if(!t)return!0;const{selectedPrice:e,prices:n}=t;return n?.length>1?e?.amount||"":g.selectedVariant?.amount||e?.amount||""},get selectedDisplayAmount(){const{prices:t,selectedPrice:e}=(0,r.getContext)();return t?.length>1?e?.display_amount||"":g.selectedVariant?.display_amount||e?.display_amount||""},get selectedVariant(){const t=(0,r.getContext)();if(!t)return{};const{variants:e,variantValues:n}=t;return n?m({variants:e,values:n||{}}):{}},get isOnSale(){const t=(0,r.getContext)();if(!t)return!0;const{selectedPrice:e}=t;return e?.is_on_sale||!1},get isOptionUnavailable(){const t=(0,r.getContext)();if(!t)return!0;const{optionNumber:e,option_value:n,product:o,variants:i,variantValues:a}=t;return f(parseInt(e),n,a,i,o)},get isOptionSelected(){const t=(0,r.getContext)();if(!t)return!0;const{optionNumber:e,option_value:n,variantValues:o}=t;return o?.[`option_${e}`]===n},get isOptionValueSelected(){const t=(0,r.getContext)();if(!t)return!0;const{optionValue:e,variantValues:n}=t;return!e||Object.values(n).map((t=>t.toLowerCase())).includes(e.toLowerCase())},get shouldDisplayImage(){const t=(0,r.getContext)();if(!t)return!0;const{variants:e}=t;return!e?.length||g.isOptionValueSelected},get imageDisplay(){return g.shouldDisplayImage?"initial":"none"},get isPriceSelected(){const t=(0,r.getContext)();if(!t)return!0;const{price:e,selectedPrice:n}=t;return n?.id===e?.id},get checkoutUrl(){const{checkoutUrl:t}=(0,r.getContext)();return u(t,{line_items:[g.lineItem],no_cart:!0})},get buttonText(){const t=(0,r.getContext)();if(!t)return!0;const{text:e,outOfStockText:n,unavailableText:o}=t;return g.isSoldOut?n:g.isUnavailable?o:e},get isUnavailable(){const t=(0,r.getContext)();if(!t)return!0;const{product:e,variants:n}=t;return!!e?.archived||!!g?.isSoldOut||!(!n?.length||g.selectedVariant?.id)},get isSoldOut(){const t=(0,r.getContext)();if(!t)return!0;const{product:e}=t;return!e?.has_unlimited_stock&&(g.selectedVariant?.id?g.selectedVariant?.available_stock<=0:e?.available_stock<=0)},get lineItem(){const{adHocAmount:t,selectedPrice:e}=(0,r.getContext)();return{price:e?.id,quantity:Math.max(e?.ad_hoc?1:g.quantity,1),...e?.ad_hoc?{ad_hoc_amount:e?.is_zero_decimal?t:100*t}:{},...g.selectedVariant?.id?{variant:g.selectedVariant?.id}:{}}},get disabled(){const{selectedPrice:t,product:e}=(0,r.getContext)();return t?.archived||e?.archived},get isQuantityDisabled(){const{selectedPrice:t}=(0,r.getContext)();return!!t?.ad_hoc},get isQuantityIncreaseDisabled(){return g.isQuantityDisabled},get isQuantityDecreaseDisabled(){return g.isQuantityDisabled||g.quantity<=1}},actions:{*addToCart(t){const e=Object.values(t.submitter.dataset).includes("context.busy");!e&&s.open();const n=(0,r.getContext)(),{mode:o,formId:i,product:u}=n;try{n.busy=!0;const{addCheckoutLineItem:t}=yield import("@surecart/checkout-service"),r=yield*t(g.lineItem);a.setCheckout(r,o,i),e&&s.open(),c.label=l(/* translators: %s: product name */
__("%s has been added to your cart.","surecart"),u?.name)}catch(t){console.error(t)}finally{n.busy=!1}}},callbacks:{*init(){(window?.dataLayer||window?.gtag)&&(yield import("@surecart/google-events")),window?.fbq&&(yield import("@surecart/facebook-events"));const{selectedPrice:t,product:e}=(0,r.getContext)();d(e,t,g.quantity)},*handleSubmit(t){return t.preventDefault(),t.stopPropagation(),t?.submitter?.value?window.location.assign(t.submitter.value):yield y.addToCart(t)},setOption:t=>{if(p(t))return!0;t.preventDefault();const{variantValues:e,optionNumber:n,option_value:o,option_name:i,option_name_slug:a,option_value_slug:s,urlPrefix:c}=(0,r.getContext)(),l=o||t?.target?.value;e[`option_${n}`]=l,o&&i&&window.history.replaceState({},"",u(window.location.href,{[`${c?c+"-":""}${a}`]:s}))},setPrice:t=>{if(p(t))return!0;t?.preventDefault();const e=(0,r.getContext)(),{price:n,prices:o}=e,i=(o||[]).find((t=>t.id===n?.id));e.selectedPrice=i,e.adHocAmount=null},setAdHocAmount:t=>{(0,r.getContext)().adHocAmount=parseFloat(t.target.value)},redirectToCheckout:t=>{t?.preventDefault();const e=t?.target?.closest("form");e&&!e.checkValidity()?e.reportValidity():window.location.assign(g.checkoutUrl)},onQuantityChange:function*(t){const e=(0,r.getContext)();e.quantity=Math.max(parseInt(t.target.value),1);const{speak:n}=yield import("@surecart/a11y");n(`Quantity set to ${e.quantity}`,"polite")},onQuantityDecrease:function*(t){if(p(t))return!0;t?.preventDefault();const e=(0,r.getContext)();if(g.isQuantityDisabled)return;e.quantity=Math.max(1,g.quantity-1);const{speak:n}=yield import("@surecart/a11y");n(`Quantity set to ${e.quantity}`,"polite")},onQuantityIncrease:function*(t){if(p(t))return!0;t?.preventDefault();const e=(0,r.getContext)();e.quantity=g.quantity+1;const{speak:n}=yield import("@surecart/a11y");n(`Quantity set to ${e.quantity}`,"polite")}}}),m=t=>{let{variants:e,values:n}=t;const o=Object.keys(n||{});for(const t of e){const e=["option_1","option_2","option_3"].map((e=>t[e])).filter((t=>null!=t));if(e?.length===o?.length&&o.every((t=>e.includes(n[t]))))return t}return null},f=function(t,e,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0;if(i?.has_unlimited_stock)return!1;if(1===t){const t=(o||[]).filter?.((t=>t.option_1===e));return Math.max(...t.map((t=>t.available_stock)))<=0}if(2===t){const t=(o||[]).filter((t=>t?.option_1===n.option_1&&t.option_2===e));return Math.max(...t.map((t=>t.available_stock)))<=0}const r=(o||[]).filter((t=>t?.option_1===n.option_1&&t?.option_2===n.option_2&&t.option_3===e));return Math.max(...r.map((t=>t.available_stock)))<=0}}();var r=i.O,a=i.M;export{r as getVariantFromValues,a as isProductVariantOptionSoldOut};