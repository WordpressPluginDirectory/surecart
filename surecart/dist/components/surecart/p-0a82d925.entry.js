import{r as i,c as e,h as t,F as s,H as r}from"./p-cc7ce8c7.js";import{i as o}from"./p-50da3ba3.js";import{g as c}from"./p-40e3d090.js";import{f as l}from"./p-f475bf8a.js";import{o as a}from"./p-e250339f.js";import"./p-7ef0f71c.js";import"./p-e64f9fcd.js";import"./p-7c2e44b1.js";import"./p-25433d0f.js";import"./p-f70181c4.js";import"./p-4d73f82a.js";import"./p-1c2e2695.js";import"./p-830ab1a3.js";import"./p-a3a138d6.js";const n=":host{display:block}sc-form{width:100%}.selected-price{display:flex;align-items:center;gap:var(--sc-spacing-small);flex-wrap:wrap}.selected-price__wrap{display:flex;align-items:baseline;flex-wrap:wrap;gap:var(--sc-spacing-xx-small);color:var(--sc-selected-price-color, var(--sc-color-gray-800));line-height:1}.selected-price__price{font-size:var(--sc-font-size-xxx-large);font-weight:var(--sc-font-weight-bold);white-space:nowrap}.selected-price__interval{font-weight:var(--sc-font-weight-bold);opacity:0.65;white-space:nowrap}.selected-price__scratch-price{opacity:0.65;font-weight:var(--sc-font-weight-normal);text-decoration:line-through}";const p=class{constructor(t){i(this,t);this.scUpdateLineItem=e(this,"scUpdateLineItem",7);this.productId=undefined;this.showInput=undefined;this.adHocAmount=undefined}lineItem(){return c(this.productId)}componentWillLoad(){a("checkout",(()=>{var i,e,t;this.adHocAmount=((i=this.lineItem())===null||i===void 0?void 0:i.ad_hoc_amount)||((t=(e=this.lineItem())===null||e===void 0?void 0:e.price)===null||t===void 0?void 0:t.amount)}))}updatePrice(){var i,e,t;this.showInput=false;if(!this.adHocAmount&&this.adHocAmount!==0)return;if(this.adHocAmount===((i=this.lineItem())===null||i===void 0?void 0:i.ad_hoc_amount))return;this.scUpdateLineItem.emit({price_id:(t=(e=this.lineItem())===null||e===void 0?void 0:e.price)===null||t===void 0?void 0:t.id,quantity:1,ad_hoc_amount:this.adHocAmount})}handleShowInputChange(i){if(i){setTimeout((()=>{this.input.triggerFocus()}),50)}}onSubmit(i){i.preventDefault();i.stopImmediatePropagation();this.updatePrice()}render(){var i,e,c,a,n,p;const d=(i=this.lineItem())===null||i===void 0?void 0:i.price;const u=(e=this.lineItem())===null||e===void 0?void 0:e.variant;if(!d)return t(r,{style:{display:"none"}});return t("div",{class:{"selected-price":true}},this.showInput?t("sc-form",{onScSubmit:i=>this.onSubmit(i),onScFormSubmit:i=>{i.preventDefault();i.stopImmediatePropagation()}},t("sc-price-input",{ref:i=>this.input=i,size:"large","currency-code":(d===null||d===void 0?void 0:d.currency)||"usd",min:d===null||d===void 0?void 0:d.ad_hoc_min_amount,max:d===null||d===void 0?void 0:d.ad_hoc_max_amount,placeholder:"0.00",required:true,value:(a=(c=this.adHocAmount)===null||c===void 0?void 0:c.toString)===null||a===void 0?void 0:a.call(c),onScInput:i=>this.adHocAmount=parseFloat(i.target.value),onKeyDown:i=>{if(i.key==="Enter"){this.onSubmit(i)}}},t("sc-button",{slot:"suffix",type:"link",submit:true},wp.i18n.__("Update","surecart")))):t(s,null,t("div",{class:"selected-price__wrap"},t("span",{class:"selected-price__price","aria-label":wp.i18n.__("Product price","surecart")},(d===null||d===void 0?void 0:d.scratch_amount)>d.amount&&t(s,null,t("sc-format-number",{class:"selected-price__scratch-price",part:"price__scratch",type:"currency",currency:d===null||d===void 0?void 0:d.currency,value:d===null||d===void 0?void 0:d.scratch_amount})," "),t("sc-format-number",{type:"currency",currency:d===null||d===void 0?void 0:d.currency,value:((n=this.lineItem())===null||n===void 0?void 0:n.ad_hoc_amount)!==null?(p=this.lineItem())===null||p===void 0?void 0:p.ad_hoc_amount:(u===null||u===void 0?void 0:u.amount)||(d===null||d===void 0?void 0:d.amount)})),t("span",{class:"selected-price__interval","aria-label":wp.i18n.__("Price interval","surecart")},o(d,{labels:{interval:"/",period:wp.i18n.__("for","surecart")}}))),(d===null||d===void 0?void 0:d.ad_hoc)&&!l()&&t("sc-button",{class:"selected-price__change-amount",type:"primary",size:"small",onClick:()=>this.showInput=true},t("sc-icon",{name:"edit",slot:"prefix"}),wp.i18n.__("Change Amount","surecart"))))}static get watchers(){return{showInput:["handleShowInputChange"]}}};p.style=n;export{p as sc_product_selected_price};
//# sourceMappingURL=p-0a82d925.entry.js.map