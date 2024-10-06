import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";const scCardCss=":host{display:block;--overflow:visible}.card{font-family:var(--sc-font-sans);overflow:var(--overflow);display:block}.card:not(.card--borderless){padding:var(--sc-card-padding, var(--sc-spacing-large));background:var(--sc-card-background-color, var(--sc-color-white));border:1px solid var(--sc-card-border-color, var(--sc-color-gray-300));border-radius:var(--sc-input-border-radius-medium);box-shadow:var(--sc-shadow-small)}.card:not(.card--borderless).card--no-padding{padding:0}.title--divider{display:none}.card--has-title-slot .card--title{font-weight:var(--sc-font-weight-bold);line-height:var(--sc-line-height-dense)}.card--has-title-slot .title--divider{display:block}::slotted(*){margin-bottom:var(--sc-form-row-spacing)}::slotted(*:first-child){margin-top:0}::slotted(*:last-child){margin-bottom:0 !important}",ScCard=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.noDivider=void 0,this.borderless=void 0,this.noPadding=void 0,this.href=void 0,this.loading=void 0,this.hasTitleSlot=void 0}componentWillLoad(){this.handleSlotChange()}handleSlotChange(){this.hasTitleSlot=!!this.el.querySelector('[slot="title"]')}render(){const t=this.href?"a":"div";return h(t,{part:"base",class:{card:!0,"card--borderless":this.borderless,"card--no-padding":this.noPadding}},h("slot",null))}get el(){return this}static get style(){return scCardCss}},[1,"sc-card",{noDivider:[4,"no-divider"],borderless:[4],noPadding:[4,"no-padding"],href:[1],loading:[4],hasTitleSlot:[32]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-card"].forEach((t=>{"sc-card"===t&&(customElements.get(t)||customElements.define(t,ScCard))}))}export{ScCard as S,defineCustomElement as d};