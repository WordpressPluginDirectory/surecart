import{proxyCustomElement,HTMLElement,h,Fragment}from"@stencil/core/internal/client";import{d as defineCustomElement$2}from"./sc-icon2.js";const scBreadcrumbsCss=":host{display:block}.breadcrumb{display:flex;align-items:center;flex-wrap:wrap}",ScBreadcrumbsStyle0=scBreadcrumbsCss,ScBreadcrumbs$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.label="Breadcrumb"}getSeparator(){const e=this.el.shadowRoot.querySelector("slot[name=separator]").assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach((e=>e.removeAttribute("id"))),e.slot="separator",e}handleSlotChange(){const e=this.el.shadowRoot.querySelector(".breadcrumb slot").assignedElements().filter((e=>"CE-BREADCRUMB"===e.nodeName));e.forEach(((t,r)=>{null===t.querySelector('[slot="separator"]')&&t.append(this.getSeparator()),r===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")}))}render(){return h(Fragment,{key:"2f3f63eb0f3721d4b87c4e2a7e2c27310c1a0fab"},h("nav",{key:"bdd48259dd1852805a265848bfec21e941da1dd2",part:"base",class:"breadcrumb","aria-label":this.label},h("slot",{key:"b8b11182fc31e3fbc274093df61470965e1be282",onSlotchange:()=>this.handleSlotChange()})),h("div",{key:"e5c321c8902b78bd10272bf91d34b299041286c5",part:"separator",hidden:!0,"aria-hidden":"true"},h("slot",{key:"3a306ecf502eeffd1d51cd0942bf11216523a9b3",name:"separator"},h("sc-icon",{key:"56ced04d1595b218f2ff7d6248e42a5092a65aff",name:"chevron-right"}))))}get el(){return this}static get style(){return ScBreadcrumbsStyle0}},[1,"sc-breadcrumbs",{label:[1]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-breadcrumbs","sc-icon"].forEach((e=>{switch(e){case"sc-breadcrumbs":customElements.get(e)||customElements.define(e,ScBreadcrumbs$1);break;case"sc-icon":customElements.get(e)||defineCustomElement$2()}}))}const ScBreadcrumbs=ScBreadcrumbs$1,defineCustomElement=defineCustomElement$1;export{ScBreadcrumbs,defineCustomElement};