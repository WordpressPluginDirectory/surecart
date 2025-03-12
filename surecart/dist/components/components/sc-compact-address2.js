import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{c as countryChoices,b as hasState}from"./address.js";import{r as reportChildrenValidity}from"./form-data.js";import{d as defineCustomElement$b}from"./sc-block-ui2.js";import{d as defineCustomElement$a}from"./dropdown.js";import{d as defineCustomElement$9}from"./sc-form-control2.js";import{d as defineCustomElement$8}from"./sc-icon2.js";import{d as defineCustomElement$7}from"./sc-input2.js";import{d as defineCustomElement$6}from"./sc-menu2.js";import{d as defineCustomElement$5}from"./sc-menu-item2.js";import{d as defineCustomElement$4}from"./sc-menu-label2.js";import{d as defineCustomElement$3}from"./sc-select2.js";import{d as defineCustomElement$2}from"./sc-spinner2.js";import{d as defineCustomElement$1}from"./sc-visually-hidden2.js";const scCompactAddressCss=":host{display:block}.sc-address{display:block;position:relative}.sc-address [hidden]{display:none}.sc-address--loading{min-height:70px}.sc-address--loading sc-skeleton{display:block;margin-bottom:1em}.sc-address__control{display:block}.sc-address__control>*{margin-bottom:-1px}.sc-address__columns{display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:space-between}.sc-address__columns>*{flex:1;width:50%;margin-left:-1px}.sc-address__columns>*:first-child{margin-left:0}",ScCompactAddressStyle0=scCompactAddressCss,ScCompactAddress=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scChangeAddress=createEvent(this,"scChangeAddress",7),this.scInputAddress=createEvent(this,"scInputAddress",7),this.address={country:null,city:null,line_1:null,line_2:null,postal_code:null,state:null},this.names={country:"shipping_country",city:"shipping_city",line_1:"shipping_line_1",line_2:"shipping_line_2",postal_code:"shipping_postal_code",state:"shipping_state"},this.placeholders={country:"",postal_code:"",state:""},this.label=wp.i18n.__("Country or region","surecart"),this.required=void 0,this.loading=void 0,this.countryChoices=countryChoices,this.regions=void 0,this.showState=void 0,this.showPostal=void 0}handleAddressChange(){var e;(null===(e=this.address)||void 0===e?void 0:e.country)&&(this.setRegions(),this.showState=["US","CA"].includes(this.address.country),this.showPostal=["US"].includes(this.address.country),this.scChangeAddress.emit(this.address),this.scInputAddress.emit(this.address))}updateAddress(e){this.address={...this.address,...e}}handleAddressInput(e){this.scInputAddress.emit({...this.address,...e})}clearAddress(){var e;this.address={name:null===(e=this.address)||void 0===e?void 0:e.name,country:null,line_1:null,line_2:null,city:null,postal_code:null,state:null}}setRegions(){hasState(this.address.country)?import("./countries.js").then((e=>{this.regions=null==e?void 0:e[this.address.country]})):this.regions=[]}componentWillLoad(){var e;this.handleAddressChange();const s=null===(e=this.countryChoices.find((e=>e.value===this.address.country)))||void 0===e?void 0:e.value;s&&this.updateAddress({country:s})}async reportValidity(){return reportChildrenValidity(this.el)}getStatePlaceholder(){var e,s;return(null===(e=this.placeholders)||void 0===e?void 0:e.state)?this.placeholders.state:"US"===(null===(s=this.address)||void 0===s?void 0:s.country)?wp.i18n.__("State","surecart"):wp.i18n.__("Province/Region","surecart")}render(){var e,s,t,o,a;return h("div",{key:"9df18b242c2609f8c0728d28839e8e16a705276f",class:"sc-address",part:"base"},h("sc-form-control",{key:"d807585c658c0618f98f5f63cede12813714b871",exportparts:"label, help-text, form-control",label:this.label,class:"sc-address__control",part:"control",required:this.required},h("sc-select",{key:"a6db6c7ab449b1c246d28168c9557162ab41dc0a",exportparts:"base:select__base, input, form-control, label, help-text, trigger, panel, caret, search__base, search__input, search__form-control, menu__base, spinner__base, empty",value:null===(e=this.address)||void 0===e?void 0:e.country,onScChange:e=>{this.clearAddress(),this.updateAddress({country:e.target.value||null})},choices:this.countryChoices,autocomplete:"country-name",placeholder:(null===(s=this.placeholders)||void 0===s?void 0:s.country)||wp.i18n.__("Select Your Country","surecart"),name:this.names.country,search:!0,unselect:!1,"squared-bottom":this.showState||this.showPostal,required:this.required}),h("div",{key:"fc6fd8cf9a5ac9b51673dff0a76bfe2a9e6b714c",class:"sc-address__columns"},this.showState&&h("sc-select",{key:"445bdefeecfb28f037f8e2e6d61ced7be18b5d05",exportparts:"base:select__base, input, form-control, label, help-text, trigger, panel, caret, search__base, search__input, search__form-control, menu__base, spinner__base, empty",placeholder:this.getStatePlaceholder(),name:this.names.state,autocomplete:"address-level1",value:null===(t=null==this?void 0:this.address)||void 0===t?void 0:t.state,onScChange:e=>this.updateAddress({state:e.target.value||null}),choices:this.regions,required:this.required,search:!0,"squared-top":!0,unselect:!1,"squared-right":this.showPostal}),this.showPostal&&h("sc-input",{key:"816268c99cb225841fc0bb073548068afecc91c6",exportparts:"base:input__base, input, form-control, label, help-text",placeholder:(null===(o=this.placeholders)||void 0===o?void 0:o.postal_code)||wp.i18n.__("Postal Code/Zip","surecart"),name:this.names.postal_code,onScChange:e=>this.updateAddress({postal_code:e.target.value||null}),onScInput:e=>this.handleAddressInput({name:e.target.value||null}),autocomplete:"postal-code",required:this.required,value:null===(a=null==this?void 0:this.address)||void 0===a?void 0:a.postal_code,"squared-top":!0,maxlength:5,"squared-left":this.showState}))),this.loading&&h("sc-block-ui",{key:"a1336bb9bfe0b15ceeb778aed09bec804c7c62ac",exportparts:"base:block-ui, content:block-ui__content"}))}get el(){return this}static get watchers(){return{address:["handleAddressChange"]}}static get style(){return ScCompactAddressStyle0}},[1,"sc-compact-address",{address:[1040],names:[16],placeholders:[16],label:[1],required:[4],loading:[4],countryChoices:[32],regions:[32],showState:[32],showPostal:[32],reportValidity:[64]},void 0,{address:["handleAddressChange"]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-compact-address","sc-block-ui","sc-dropdown","sc-form-control","sc-icon","sc-input","sc-menu","sc-menu-item","sc-menu-label","sc-select","sc-spinner","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-compact-address":customElements.get(e)||customElements.define(e,ScCompactAddress);break;case"sc-block-ui":customElements.get(e)||defineCustomElement$b();break;case"sc-dropdown":customElements.get(e)||defineCustomElement$a();break;case"sc-form-control":customElements.get(e)||defineCustomElement$9();break;case"sc-icon":customElements.get(e)||defineCustomElement$8();break;case"sc-input":customElements.get(e)||defineCustomElement$7();break;case"sc-menu":customElements.get(e)||defineCustomElement$6();break;case"sc-menu-item":customElements.get(e)||defineCustomElement$5();break;case"sc-menu-label":customElements.get(e)||defineCustomElement$4();break;case"sc-select":customElements.get(e)||defineCustomElement$3();break;case"sc-spinner":customElements.get(e)||defineCustomElement$2();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$1()}}))}export{ScCompactAddress as S,defineCustomElement as d};