import{proxyCustomElement,HTMLElement,h}from"@stencil/core/internal/client";const scVisuallyHiddenCss=":host(:not(:focus-within)){position:absolute !important;width:1px !important;height:1px !important;clip:rect(0 0 0 0) !important;clip-path:inset(50%) !important;border:none !important;overflow:hidden !important;white-space:nowrap !important;padding:0 !important}",ScVisuallyHiddenStyle0=scVisuallyHiddenCss,ScVisuallyHidden=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow()}render(){return h("slot",{key:"857e4ead6d4b824bf7623037a7caf13720f9608c"})}static get style(){return ScVisuallyHiddenStyle0}},[1,"sc-visually-hidden"]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-visually-hidden"].forEach((t=>{"sc-visually-hidden"===t&&(customElements.get(t)||customElements.define(t,ScVisuallyHidden))}))}export{ScVisuallyHidden as S,defineCustomElement as d};