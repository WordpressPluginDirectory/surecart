import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{i as isRtl}from"./page-align.js";const scRadioGroupCss=':host{display:block}.radio-group{border:none;padding:0;margin:0;min-width:0}.radio-group .radio-group__label{display:inline-block;padding:0;color:var(--sc-input-label-color);font-weight:var(--sc-input-label-font-weight);text-transform:var(--sc-input-label-text-transform, none);letter-spacing:var(--sc-input-label-letter-spacing, 0);margin-bottom:var(--sc-input-label-margin)}.radio-group__hidden-input{position:absolute;opacity:0;padding:0px;margin:0px;pointer-events:none}.radio-group--is-required .radio-group__label:after{content:" *";color:var(--sc-color-danger-500)}::slotted(sc-radio:not(:last-of-type)){display:block;margin-bottom:var(--sc-spacing-x-small)}.radio-group--is-rtl.radio-group,.radio-group--is-rtl.radio-group .radio-group__label{text-align:right}',ScRadioGroupStyle0=scRadioGroupCss,ScRadioGroup=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scChange=createEvent(this,"scChange",7),this.label="",this.invalid=void 0,this.value="",this.required=void 0}async reportValidity(){return this.invalid=!this.input.checkValidity(),this.input.reportValidity()}handleRadioClick(e){if("SC-RADIO"!==e.target.tagName)return;e.stopImmediatePropagation();const i=e.target;i.disabled||i.checked&&(this.value=i.value,this.scChange.emit(i.value))}componentDidLoad(){[...this.el.querySelectorAll("sc-radio")].forEach((e=>{e.checked&&(this.value=e.value)}))}render(){return h("fieldset",{key:"b01eed0c4db08fe9bf5c27bf0d2620ca7a3aef06",part:"base",class:{"radio-group":!0,"radio-group--invalid":this.invalid,"radio-group--is-required":this.required,"radio-group--is-rtl":isRtl()},"aria-invalid":this.invalid,role:"radiogroup"},h("legend",{key:"b5b99177ce06b13b8e5f6b2b51c28205076c858b",part:"label",class:"radio-group__label"},h("slot",{key:"4f6c0646658e02bb0c763ec03d4102d734c8a239",name:"label"},this.label)),h("input",{key:"c5fa85141c3c93d6d6efab536fc5b000bb98e27c",type:"text",class:"radio-group__hidden-input",ref:e=>this.input=e,required:this.required,value:this.value,tabindex:"-1"}),h("div",{key:"55fa72770dc1bb137b878cdfa0beab0896c8d69e",part:"items",class:"radio-group__items"},h("slot",{key:"2a591203bf069f5cc5ae4988f258c9198b12f18a"})))}get el(){return this}static get style(){return ScRadioGroupStyle0}},[1,"sc-radio-group",{label:[1],invalid:[1540],value:[1537],required:[4],reportValidity:[64]},[[0,"scChange","handleRadioClick"]]]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-radio-group"].forEach((e=>{"sc-radio-group"===e&&(customElements.get(e)||customElements.define(e,ScRadioGroup))}))}export{ScRadioGroup as S,defineCustomElement as d};