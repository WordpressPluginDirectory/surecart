import{r as s,h as t,F as i}from"./p-e97fde0a.js";import{s as a,e,h as p,b as r}from"./p-b51c7476.js";import"./p-03631502.js";import"./p-13f5e4e1.js";import"./p-3f6362a4.js";import"./p-ec182234.js";import"./p-e2d5dc4f.js";import"./p-93127aa7.js";import"./p-830ab1a3.js";const o=".sc-product-pills-variant-option__wrapper{display:flex;flex-wrap:wrap;gap:var(--sc-spacing-x-small)}";const l=o;const c=class{constructor(t){s(this,t);this.label=undefined;this.optionNumber=1;this.productId=undefined}render(){return t("sc-form-control",{key:"ec5d8b2b4fe1ee30f2c38393afd7680b147cb57e",label:this.label},t("span",{key:"303f09a9939463121839e048555dc629af8fb458",slot:"label"},this.label),t("div",{key:"a8bbebf0649d154ecf91d58ec22341830cd54d03",class:"sc-product-pills-variant-option__wrapper"},(a[this.productId].variant_options[this.optionNumber-1].values||[]).map((s=>{const o=e(this.productId,this.optionNumber,s)||p(this.productId,this.optionNumber,s);return t("sc-pill-option",{isUnavailable:o,isSelected:a[this.productId].variantValues[`option_${this.optionNumber}`]===s,onClick:()=>r(this.productId,{variantValues:{...a[this.productId].variantValues,[`option_${this.optionNumber}`]:s}})},t("span",{"aria-hidden":"true"},s),t("sc-visually-hidden",null,wp.i18n.sprintf(wp.i18n.__("Select %s: %s.","surecart"),this.label,s),o&&t(i,null," ",wp.i18n.__("(option unavailable)","surecart")),a[this.productId].variantValues[`option_${this.optionNumber}`]===s&&t(i,null," ",wp.i18n.__("This option is currently selected.","surecart"))))}))))}};c.style=l;export{c as sc_product_pills_variant_option};
//# sourceMappingURL=p-de6720f4.entry.js.map