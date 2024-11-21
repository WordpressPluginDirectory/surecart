import{h}from"@stencil/core";import{sprintf,__}from"@wordpress/i18n";import{speak}from"@wordpress/a11y";import{getFormattedPrice,intervalString}from"../../../../functions/price";import{state as checkoutState}from"../../../../store/checkout/index";import{addCheckoutLineItem,removeCheckoutLineItem,trackOrderBump}from"../../../../store/checkout/mutations";export class ScOrderBump{constructor(){this.bump=void 0,this.showControl=void 0}lineItem(){var e,i,t;return null===(t=null===(i=null===(e=null==checkoutState?void 0:checkoutState.checkout)||void 0===e?void 0:e.line_items)||void 0===i?void 0:i.data)||void 0===t?void 0:t.find((e=>{var i;return(null==e?void 0:e.bump)===(null===(i=this.bump)||void 0===i?void 0:i.id)}))}updateLineItem(){var e,i,t,o;const r=(null===(e=this.bump.price)||void 0===e?void 0:e.id)||(null===(i=this.bump)||void 0===i?void 0:i.price);if(this.lineItem())return removeCheckoutLineItem(null===(t=this.lineItem())||void 0===t?void 0:t.id),void speak(__("Order bump Removed.","surecart"));addCheckoutLineItem({bump:null===(o=this.bump)||void 0===o?void 0:o.id,price:r,quantity:1}),speak(__("Order bump applied.","surecart"))}componentDidLoad(){var e;trackOrderBump(null===(e=this.bump)||void 0===e?void 0:e.id)}newPrice(){var e,i,t,o,r,d;let a=null,n=(null===(i=null===(e=this.bump)||void 0===e?void 0:e.price)||void 0===i?void 0:i.amount)||0;if((null===(t=this.bump)||void 0===t?void 0:t.amount_off)&&(a=Math.max(0,n-(null===(o=this.bump)||void 0===o?void 0:o.amount_off))),null===(r=this.bump)||void 0===r?void 0:r.percent_off){const e=n*((null===(d=this.bump)||void 0===d?void 0:d.percent_off)/100);a=Math.max(0,n-e)}return a}renderInterval(){var e;const i=intervalString(null===(e=this.bump)||void 0===e?void 0:e.price,{labels:{interval:"/",period:__("for","surecart")}});return i.trim().length?h("span",{class:"bump__interval"},i):null}renderPrice(){var e,i,t,o,r,d,a,n,u,l,c;return h("div",{slot:"description",class:{bump__price:!0,"bump__price--has-discount":!!(null===(e=this.bump)||void 0===e?void 0:e.percent_off)||!!(null===(i=this.bump)||void 0===i?void 0:i.amount_off)},part:"price"},h("span",{"aria-label":
/** translators: %s: old price */
sprintf(__("Originally priced at %s.","surecart"),getFormattedPrice({amount:null===(o=null===(t=this.bump)||void 0===t?void 0:t.price)||void 0===o?void 0:o.amount,currency:null===(d=null===(r=this.bump)||void 0===r?void 0:r.price)||void 0===d?void 0:d.currency}))},h("sc-format-number",{type:"currency",class:"bump__original-price",value:null===(n=null===(a=this.bump)||void 0===a?void 0:a.price)||void 0===n?void 0:n.amount,currency:null===(l=null===(u=this.bump)||void 0===u?void 0:u.price)||void 0===l?void 0:l.currency})," "),h("span",null,h("span",{"aria-hidden":"true"},0===this.newPrice()&&__("Free","surecart"),null!==this.newPrice()&&this.newPrice()>0&&h("sc-format-number",{type:"currency",class:"bump__new-price",value:this.newPrice(),currency:(null===(c=this.bump)||void 0===c?void 0:c.price).currency}),this.renderInterval())))}renderDiscount(){var e,i,t,o,r,d,a,n;return(null===(e=this.bump)||void 0===e?void 0:e.amount_off)?h("div",{class:"bump__tag","aria-label":
/** translators: %1$s: amount off, %2$s: currency */
sprintf(__("You save %1$s%2$s.","surecart"),null===(i=this.bump)||void 0===i?void 0:i.amount_off,(null===(t=this.bump)||void 0===t?void 0:t.price).currency)},h("span",{"aria-hidden":"true"},__("Save","surecart")," ",h("sc-format-number",{type:"currency",value:null===(o=this.bump)||void 0===o?void 0:o.amount_off,currency:(null===(r=this.bump)||void 0===r?void 0:r.price).currency}))):(null===(d=this.bump)||void 0===d?void 0:d.percent_off)?h("div",{class:"bump__tag","aria-label":
/** translators: %s: amount percent off */
sprintf(__("You save %s%%.","surecart"),null===(a=this.bump)||void 0===a?void 0:a.percent_off)},h("span",{"aria-hidden":"true"},sprintf(__("Save %s%%","surecart"),null===(n=this.bump)||void 0===n?void 0:n.percent_off))):void 0}render(){var e,i,t,o,r,d,a,n,u,l,c,s,p,v,m,b,f,_,y,k;const g=null===(i=null===(e=this.bump)||void 0===e?void 0:e.price)||void 0===i?void 0:i.product;return h("sc-choice",{key:"09fa27b1aab98270ba14b7f48d4c2ee1644f265c",value:null===(t=this.bump)||void 0===t?void 0:t.id,type:"checkbox",showControl:this.showControl,checked:!!this.lineItem(),onClick:e=>{e.preventDefault(),e.stopImmediatePropagation(),this.updateLineItem()},onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopImmediatePropagation(),this.updateLineItem())},exportparts:"base, control, checked-icon, title"},h("div",{key:"8047e3928e73deec669c1347a2e49af9067a4a1d",part:"base-content",class:"bump"},h("div",{key:"ff614b3aaee8ba7724c6f47b7648108936295a20",class:"bump__text"},h("div",{key:"431ac167738bc65aad22c1eb7b6d523e9124c07a",class:"bump__title","aria-label":sprintf(
/* translators: %s: order bump name */
__("Product: %s.","surecart"),(null===(r=null===(o=this.bump)||void 0===o?void 0:o.metadata)||void 0===r?void 0:r.cta)||(null===(d=this.bump)||void 0===d?void 0:d.name)||(null==g?void 0:g.name))},h("span",{key:"c87fb8019d9407fd4b9660d352efbe3c494b98b8","aria-hidden":"true"},(null===(n=null===(a=this.bump)||void 0===a?void 0:a.metadata)||void 0===n?void 0:n.cta)||(null===(u=this.bump)||void 0===u?void 0:u.name)||(null==g?void 0:g.name))),h("div",{key:"f03777d631f61529066f9691f3b260dd662f54c8",class:"bump__amount"},h("span",{key:"43eff2d5f826ac631f40325f58b274829d1aa999"},this.renderPrice()),h("span",{key:"d7f0127c0614ca9f84ff3aa62df496d3fd28820c"},this.renderDiscount())))),(null===(c=null===(l=this.bump)||void 0===l?void 0:l.metadata)||void 0===c?void 0:c.description)&&h("div",{key:"e0807606c9be9d308afe7d2aec2a721f5a1d2c39",slot:"footer",class:"bump__product--wrapper"},h("sc-divider",{key:"88942eb9b2fa66b2453c52cc842c5a70d13eaec2",style:{"--spacing":"var(--sc-spacing-medium)"}}),h("div",{key:"2919eebff004cb8ef4aab94f088b6f6259454625",class:"bump__product"},!!(null===(s=null==g?void 0:g.line_item_image)||void 0===s?void 0:s.src)&&h("img",{key:"10ace4ec5c232e753d69c3914b3638940f613a97",...null==g?void 0:g.line_item_image,class:"bump__image"}),h("div",{key:"8213fe8efc0677b4d0937a6d2e8df7ebf29b039f",class:"bump__product-text"},!!(null===(v=null===(p=this.bump)||void 0===p?void 0:p.metadata)||void 0===v?void 0:v.cta)&&h("div",{key:"d7876e8617872279ed01467e4995674d85f92021",class:"bump__product-title","aria-hidden":"true"},this.bump.name||(null==g?void 0:g.name)),!!(null===(b=null===(m=this.bump)||void 0===m?void 0:m.metadata)||void 0===b?void 0:b.description)&&h("div",{key:"8b93ba126f03d8f71498ecb2f8119d77ec99dbfc",class:"bump__product-description","aria-label":sprintf(
/* translators: %s: Product description */
__("Product description: %s.","surecart"),null===(_=null===(f=this.bump)||void 0===f?void 0:f.metadata)||void 0===_?void 0:_.description)},h("span",{key:"c51ceb978a388423adc3c0927fd1a91aa7d25547","aria-hidden":"true"},null===(k=null===(y=this.bump)||void 0===y?void 0:y.metadata)||void 0===k?void 0:k.description))))))}static get is(){return"sc-order-bump"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-order-bump.scss"]}}static get styleUrls(){return{$:["sc-order-bump.css"]}}static get properties(){return{bump:{type:"unknown",mutable:!1,complexType:{original:"Bump",resolved:"Bump",references:{Bump:{location:"import",path:"../../../../types",id:"src/types.ts::Bump"}}},required:!1,optional:!1,docs:{tags:[],text:"The bump"}},showControl:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Should we show the controls"},attribute:"show-control",reflect:!0}}}}