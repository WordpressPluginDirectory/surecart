import{proxyCustomElement,HTMLElement,createEvent,h,Fragment}from"@stencil/core/internal/client";import{i as isRtl}from"./page-align.js";import{d as defineCustomElement$1}from"./sc-spinner2.js";const scButtonCss=':host{display:inline-block;width:auto;cursor:pointer;--primary-color:var(--sc-color-primary-text);--primary-background:var(--sc-color-primary-500)}:host([full]){display:block}::slotted(*){pointer-events:none}.button{box-sizing:border-box;z-index:10;display:inline-flex;align-items:stretch;justify-content:center;width:100%;border-style:solid;border-width:var(--sc-input-border-width);font-family:var(--sc-input-font-family);font-weight:var(--sc-font-weight-semibold);text-decoration:none;user-select:none;white-space:nowrap;vertical-align:middle;padding:0;transition:var(--sc-input-transition, var(--sc-transition-medium)) background-color, var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) border, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow, var(--sc-input-transition, var(--sc-transition-medium)) opacity;cursor:inherit}.button::-moz-focus-inner{border:0}.button:focus{outline:none}.button:focus-visible{box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.button.button--disabled{cursor:not-allowed}.button.button--disabled *{pointer-events:none}.button.button--disabled .button__label,.button.button--disabled .button__suffix,.button.button--disabled .button__prefix{opacity:0.5}.button ::slotted(.sc--icon){pointer-events:none}.button__prefix,.button__suffix{flex:0 0 auto;display:flex;align-items:center}.button__label{display:flex;align-items:center}.button__label ::slotted(sc-icon){vertical-align:-2px}.button:not(.button--text):not(.button--link){box-shadow:var(--sc-shadow-small)}.button.button--standard.button--default{background-color:var(--sc-button-default-background-color, var(--sc-color-white));border-color:var(--sc-button-default-border-color, var(--sc-color-gray-300));color:var(--sc-button-default-color, var(--sc-color-gray-600))}.button.button--standard.button--default:hover:not(.button--disabled){background-color:var(--sc-button-default-hover-background-color, var(--sc-color-white));border-color:var(--sc-button-default-focus-border-color, var(--primary-background));color:var(--primary-background)}.button.button--standard.button--default:focus:not(.button--disabled){background-color:var(--sc-button-default-focus-background-color, var(--sc-color-white));border-color:var(--sc-button-default-focus-border-color, var(--sc-color-white));color:var(--primary-background);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.button.button--standard.button--default:active:not(.button--disabled){background-color:var(--sc-button-default-active-background-color, var(--sc-color-white));border-color:var(--sc-button-default-active-border-color, var(--sc-color-white));color:var(--primary-background)}.button.button--standard.button--primary{background-color:var(--primary-background);border-color:var(--primary-background);color:var(--primary-color)}.button.button--standard.button--primary:hover:not(.button--disabled){opacity:0.8}.button.button--standard.button--primary:focus:not(.button--disabled){opacity:0.8;color:var(--primary-color);border-color:var(--sc-color-white);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.button.button--standard.button--primary:active:not(.button--disabled){background-color:var(--primary-background);border-color:var(--sc-color-white);color:var(--primary-color)}.button.button--standard.button--success{background-color:var(--sc-color-success-500);border-color:var(--sc-color-success-500);color:var(--sc-color-success-text)}.button.button--standard.button--success:hover:not(.button--disabled){background-color:var(--sc-color-success-400);border-color:var(--sc-color-success-400);color:var(--sc-color-success-text)}.button.button--standard.button--success:focus:not(.button--disabled){background-color:var(--sc-color-success-400);border-color:var(--sc-color-success-400);color:var(--sc-color-success-text);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-success)}.button.button--standard.button--success:active:not(.button--disabled){background-color:var(--sc-color-success-500);border-color:var(--sc-color-success-500);color:var(--sc-color-success-text)}.button.button--standard.button--info{background-color:var(--sc-color-info-500);border-color:var(--sc-color-info-500);color:var(--sc-color-info-text)}.button.button--standard.button--info:hover:not(.button--disabled){background-color:var(--sc-color-info-400);border-color:var(--sc-color-info-400);color:var(--sc-color-info-text)}.button.button--standard.button--info:focus:not(.button--disabled){background-color:var(--sc-color-info-400);border-color:var(--sc-color-info-400);color:var(--sc-color-info-text);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-info)}.button.button--standard.button--info:active:not(.button--disabled){background-color:var(--sc-color-info-500);border-color:var(--sc-color-info-500);color:var(--sc-color-info-text)}.button.button--standard.button--warning{background-color:var(--sc-color-warning-500);border-color:var(--sc-color-warning-500);color:var(--sc-color-warning-text)}.button.button--standard.button--warning:hover:not(.button--disabled){background-color:var(--sc-color-warning-400);border-color:var(--sc-color-warning-400);color:var(--sc-color-warning-text)}.button.button--standard.button--warning:focus:not(.button--disabled){background-color:var(--sc-color-warning-400);border-color:var(--sc-color-warning-400);color:var(--sc-color-warning-text);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-warning)}.button.button--standard.button--warning:active:not(.button--disabled){background-color:var(--sc-color-warning-500);border-color:var(--sc-color-warning-500);color:var(--sc-color-warning-text)}.button.button--standard.button--danger{background-color:var(--sc-color-danger-500);border-color:var(--sc-color-danger-500);color:var(--sc-color-danger-text)}.button.button--standard.button--danger:hover:not(.button--disabled){background-color:var(--sc-color-danger-400);border-color:var(--sc-color-danger-400);color:var(--sc-color-danger-text)}.button.button--standard.button--danger:focus:not(.button--disabled){background-color:var(--sc-color-danger-400);border-color:var(--sc-color-danger-400);color:var(--sc-color-danger-text);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-danger)}.button.button--standard.button--danger:active:not(.button--disabled){background-color:var(--sc-color-danger-500);border-color:var(--sc-color-danger-500);color:var(--sc-color-danger-text)}.button--outline{background:none;border:solid 1px}.button--outline.button--default{border-color:var(--sc-color-gray-300);color:var(--sc-color-gray-700)}.button--outline.button--default:hover:not(.button--disabled){border-color:var(--primary-background);background-color:var(--primary-background);color:var(--sc-color-white)}.button--outline.button--default:focus:not(.button--disabled){border-color:var(--primary-background);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--primary-background)/var(--sc-focus-ring-alpha)}.button--outline.button--default:active:not(.button--disabled){opacity:0.8;color:var(--sc-color-white)}.button--outline.button--primary{border-color:var(--primary-background);color:var(--primary-background)}.button--outline.button--primary:hover:not(.button--disabled){background-color:var(--primary-background);opacity:0.8;color:var(--sc-color-white)}.button--outline.button--primary:focus:not(.button--disabled){border-color:var(--primary-background);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--primary-background)/var(--sc-focus-ring-alpha)}.button--outline.button--primary:active:not(.button--disabled){border-color:var(--primary-background);background-color:var(--primary-background);opacity:0.9;color:var(--sc-color-white)}.button--outline.button--success{border-color:var(--sc-color-success-500);color:var(--sc-color-success-500)}.button--outline.button--success:hover:not(.button--disabled){background-color:var(--sc-color-success-500);color:var(--sc-color-white)}.button--outline.button--success:focus:not(.button--disabled){border-color:var(--sc-color-success-500);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-color-success-500)/var(--sc-focus-ring-alpha)}.button--outline.button--success:active:not(.button--disabled){border-color:var(--sc-color-success-700);background-color:var(--sc-color-success-700);color:var(--sc-color-white)}.button--outline.button--info{border-color:var(--sc-color-gray-500);color:var(--sc-color-gray-500)}.button--outline.button--info:hover:not(.button--disabled){background-color:var(--sc-color-gray-500);color:var(--sc-color-white)}.button--outline.button--info:focus:not(.button--disabled){border-color:var(--sc-color-gray-500);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-color-gray-500)/var(--sc-focus-ring-alpha)}.button--outline.button--info:active:not(.button--disabled){border-color:var(--sc-color-gray-700);background-color:var(--sc-color-gray-700);color:var(--sc-color-white)}.button--outline.button--warning{border-color:var(--sc-color-warning-500);color:var(--sc-color-warning-500)}.button--outline.button--warning:hover:not(.button--disabled){background-color:var(--sc-color-warning-500);color:var(--sc-color-white)}.button--outline.button--warning:focus:not(.button--disabled){border-color:var(--sc-color-warning-500);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-color-warning-500)/var(--sc-focus-ring-alpha)}.button--outline.button--warning:active:not(.button--disabled){border-color:var(--sc-color-warning-700);background-color:var(--sc-color-warning-700);color:var(--sc-color-white)}.button--outline.button--danger{border-color:var(--sc-color-danger-500);color:var(--sc-color-danger-500)}.button--outline.button--danger:hover:not(.button--disabled){background-color:var(--sc-color-danger-500);color:var(--sc-color-white)}.button--outline.button--danger:focus:not(.button--disabled){border-color:var(--sc-color-danger-500);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-color-danger-500)/var(--sc-focus-ring-alpha)}.button--outline.button--danger:active:not(.button--disabled){border-color:var(--sc-color-danger-700);background-color:var(--sc-color-danger-700);color:var(--sc-color-white)}.button--text{background-color:transparent;border-color:transparent;color:inherit}.button--text:hover:not(.button--disabled){background-color:transparent;border-color:transparent;color:var(--sc-color-gray-600)}.button--text:focus:not(.button--disabled){background-color:transparent;border-color:transparent;box-shadow:0}.button--text:active:not(.button--disabled){background-color:transparent;border-color:transparent;box-shadow:0}.button--text.button--caret.button--has-label{padding-right:var(--sc-spacing-xx-small)}.button--text.button--caret.button--has-label .button__label{padding:0 var(--sc-spacing-xx-small) !important}.button--link{background-color:transparent;border-color:transparent;box-shadow:none;color:var(--sc-button-link-color, var(--primary-background));transition:opacity var(--sc-input-transition, var(--sc-transition-medium)) ease;text-decoration:var(--sc-button-link-text-decoration, none)}.button--link.button--has-label.button--small .button__label,.button--link.button--has-label.button--medium .button__label,.button--link.button--has-label.button--large .button__label{padding:0}.button--link:hover:not(.button--disabled){background-color:transparent;border-color:transparent;opacity:0.75}.button--link:focus:not(.button--disabled){background-color:transparent;border-color:transparent}.button--link:active:not(.button--disabled){background-color:transparent;border-color:transparent}.button--link.button--has-prefix:not(.button--text).button--small,.button--link.button--has-prefix:not(.button--text).button--medium,.button--link.button--has-prefix:not(.button--text).button--large{padding-left:0}.button--link.button--has-prefix:not(.button--text).button--small .button__label,.button--link.button--has-prefix:not(.button--text).button--medium .button__label,.button--link.button--has-prefix:not(.button--text).button--large .button__label{padding-left:var(--sc-spacing-xx-small)}.button--link.button--has-suffix:not(.button--text).button--small,.button--link.button--has-suffix:not(.button--text).button--medium,.button--link.button--has-suffix:not(.button--text).button--large{padding-right:0}.button--link.button--has-suffix:not(.button--text).button--small .button__label,.button--link.button--has-suffix:not(.button--text).button--medium .button__label,.button--link.button--has-suffix:not(.button--text).button--large .button__label{padding-right:var(--sc-spacing-xx-small)}.button--small{font-size:var(--sc-button-font-size-small);height:var(--sc-input-height-small);line-height:calc(var(--sc-input-height-small) - var(--sc-input-border-width) * 2);border-radius:var(--button-border-radius, var(--sc-input-border-radius-small))}.button--medium{font-size:var(--sc-button-font-size-medium);height:var(--sc-input-height-medium);line-height:calc(var(--sc-input-height-medium) - var(--sc-input-border-width) * 2);border-radius:var(--button-border-radius, var(--sc-input-border-radius-medium))}.button--large{font-size:var(--sc-button-font-size-large);height:var(--sc-input-height-large);line-height:calc(var(--sc-input-height-large) - var(--sc-input-border-width) * 2);border-radius:var(--button-border-radius, var(--sc-input-border-radius-large))}.button--full{display:block}.button--pill.button--small{border-radius:var(--sc-input-height-small)}.button--pill.button--medium{border-radius:var(--sc-input-height-medium)}.button--pill.button--large{border-radius:var(--sc-input-height-large)}.button--circle{padding-left:0;padding-right:0}.button--circle.button--small{width:var(--sc-input-height-small);border-radius:50%}.button--circle.button--medium{width:var(--sc-input-height-medium);border-radius:50%}.button--circle.button--large{width:var(--sc-input-height-large);border-radius:50%}.button--circle .button__prefix,.button--circle .button__suffix,.button--circle .button__caret{display:none}.button--caret .button__suffix{display:none}.button--caret .button__caret{display:flex;align-items:center}.button--caret .button__caret svg{width:1em;height:1em}.button--busy{position:relative;cursor:wait}.button--busy .button__prefix,.button--busy .button__label,.button--busy .button__suffix,.button--busy .button__caret{visibility:hidden}.button--busy *{pointer-events:none}.button--loading{position:relative;cursor:wait}.button--loading .button__prefix,.button--loading .button__label,.button--loading .button__suffix,.button--loading .button__caret{visibility:hidden}sc-spinner::part(base){--indicator-color:currentColor;--spinner-size:12px;position:absolute;top:calc(50% - var(--spinner-size) + var(--spinner-size) / 4);left:calc(50% - var(--spinner-size) + var(--spinner-size) / 4)}.button ::slotted(sc-badge){position:absolute;top:0;right:0;transform:translateY(-50%) translateX(50%);pointer-events:none}.button--has-label.button--small .button__label{padding:0 var(--sc-spacing-small)}.button--has-label.button--medium .button__label{padding:0 var(--sc-spacing-medium)}.button--has-label.button--large .button__label{padding:0 var(--sc-spacing-large)}.button--has-prefix:not(.button--text).button--small{padding-left:var(--sc-spacing-x-small)}.button--has-prefix:not(.button--text).button--small .button__label{padding-left:var(--sc-spacing-x-small)}.button--has-prefix:not(.button--text).button--medium{padding-left:var(--sc-spacing-small)}.button--has-prefix:not(.button--text).button--medium .button__label{padding-left:var(--sc-spacing-small)}.button--has-prefix:not(.button--text).button--large{padding-left:var(--sc-spacing-small)}.button--has-prefix:not(.button--text).button--large .button__label{padding-left:var(--sc-spacing-small)}.button--has-suffix.button--small,.button--caret.button--small{padding-right:var(--sc-spacing-x-small)}.button--has-suffix.button--small .button__label,.button--caret.button--small .button__label{padding-right:var(--sc-spacing-x-small)}.button--has-suffix.button--medium,.button--caret.button--medium{padding-right:var(--sc-spacing-small)}.button--has-suffix.button--medium .button__label,.button--caret.button--medium .button__label{padding-right:var(--sc-spacing-small)}.button--has-suffix.button--large,.button--caret.button--large{padding-right:var(--sc-spacing-small)}.button--has-suffix.button--large .button__label,.button--caret.button--large .button__label{padding-right:var(--sc-spacing-small)}:host(.sc-button-group__button--first) .button{border-top-right-radius:0;border-bottom-right-radius:0}:host(.sc-button-group__button--inner) .button{border-radius:0}:host(.sc-button-group__button--last) .button{border-top-left-radius:0;border-bottom-left-radius:0}:host(.sc-button-group__button:not(.sc-button-group__button--first)){margin-left:calc(-1 * var(--sc-input-border-width))}:host(.sc-button-group__button:not(.sc-button-group__button--focus,.sc-button-group__button--first,[type=default]):not(:hover,:active,:focus)) .button:after{content:"";position:absolute;top:0;left:0;bottom:0;border-left:solid 1px rgba(255, 255, 255, 0.2666666667);mix-blend-mode:lighten}:host(.sc-button-group__button--hover){z-index:1}:host(.sc-button-group__button--focus){z-index:2}@keyframes busy-animation{0%{background-position:200px 0}}.button--is-rtl.button--has-prefix.button--small,.button--is-rtl.button--has-prefix.button--medium,.button--is-rtl.button--has-prefix.button--large{padding-left:0}.button--is-rtl.button--has-prefix.button--small .button__label,.button--is-rtl.button--has-prefix.button--medium .button__label,.button--is-rtl.button--has-prefix.button--large .button__label{padding-left:0;padding-right:var(--sc-spacing-xx-small)}.button--is-rtl.button--has-suffix.button--small,.button--is-rtl.button--has-suffix.button--medium,.button--is-rtl.button--has-suffix.button--large{padding-right:0}.button--is-rtl.button--has-suffix.button--small .button__label,.button--is-rtl.button--has-suffix.button--medium .button__label,.button--is-rtl.button--has-suffix.button--large .button__label{padding-right:0;padding-left:var(--sc-spacing-xx-small)}',ScButtonStyle0=scButtonCss,ScButton=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scBlur=createEvent(this,"scBlur",7),this.scFocus=createEvent(this,"scFocus",7),this.hasFocus=!1,this.hasLabel=!1,this.hasPrefix=!1,this.hasSuffix=!1,this.type="default",this.size="medium",this.caret=!1,this.full=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.busy=!1,this.pill=!1,this.circle=!1,this.submit=!1,this.name=void 0,this.value=void 0,this.href=void 0,this.target=void 0,this.download=void 0,this.autofocus=void 0}componentWillLoad(){this.handleSlotChange()}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleSlotChange(){this.hasLabel=!!this.button.children,this.hasPrefix=!!this.button.querySelector('[slot="prefix"]'),this.hasSuffix=!!this.button.querySelector('[slot="suffix"]')}handleBlur(){this.hasFocus=!1,this.scBlur.emit()}handleFocus(){this.hasFocus=!0,this.scFocus.emit()}handleClick(t){(this.disabled||this.loading||this.busy)&&(t.preventDefault(),t.stopPropagation()),this.submit&&this.submitForm()}submitForm(){var t,o;const r=(null===(o=null===(t=this.button.closest("sc-form"))||void 0===t?void 0:t.shadowRoot)||void 0===o?void 0:o.querySelector("form"))||this.button.closest("form"),n=document.createElement("button");r&&(n.type="submit",n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.clip="rect(0 0 0 0)",n.style.clipPath="inset(50%)",n.style.overflow="hidden",n.style.whiteSpace="nowrap",r.append(n),n.click(),n.remove())}render(){const t=this.href?"a":"button",o=h(Fragment,{key:"5aece3dfee0734cb928891dc1ff3dbfa665ee1da"},h("span",{key:"f46baf14393833d76867e484cd4de7adc1972c4b",part:"prefix",class:"button__prefix"},h("slot",{key:"a4c9d84428d774f1dcba94dfa3b63726f39a9a4c",onSlotchange:()=>this.handleSlotChange(),name:"prefix"})),h("span",{key:"eb76a37b0304a82e20fd3b346627123ea02adc9a",part:"label",class:"button__label"},h("slot",{key:"8eb0ae15189d344ca2fc75765eace2998c60a5c9",onSlotchange:()=>this.handleSlotChange()})),h("span",{key:"589a7075ff1ab247806a74bf82df0f3e25073a91",part:"suffix",class:"button__suffix"},h("slot",{key:"82cad3262905dc342cd625b46ae1ef574c6dbaea",onSlotchange:()=>this.handleSlotChange(),name:"suffix"})),this.caret?h("span",{part:"caret",class:"button__caret"},h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},h("polyline",{points:"6 9 12 15 18 9"}))):"",this.loading||this.busy?h("sc-spinner",{exportparts:"base:spinner"}):"");return h(t,{key:"f5aa6f0d5257097fdf40d9740c129b59678f8f2f",part:"base",class:{button:!0,[`button--${this.type}`]:!!this.type,[`button--${this.size}`]:!0,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--busy":this.busy,"button--pill":this.pill,"button--standard":!this.outline,"button--outline":this.outline,"button--has-label":this.hasLabel,"button--has-prefix":this.hasPrefix,"button--has-suffix":this.hasSuffix,"button--is-rtl":isRtl()},href:this.href,target:this.target,download:this.download,autoFocus:this.autofocus,rel:this.target?"noreferrer noopener":void 0,role:"button","aria-disabled":this.disabled?"true":"false","aria-busy":this.busy||this.loading?"true":"false",tabindex:this.disabled?"-1":"0",disabled:this.disabled||this.busy,type:this.submit?"submit":"button",name:this.name,value:this.value,onBlur:()=>this.handleBlur(),onFocus:()=>this.handleFocus(),onClick:t=>this.handleClick(t)},o)}get button(){return this}static get style(){return ScButtonStyle0}},[1,"sc-button",{type:[513],size:[513],caret:[516],full:[516],disabled:[516],loading:[516],outline:[516],busy:[516],pill:[516],circle:[516],submit:[516],name:[1],value:[1],href:[513],target:[1],download:[1],autofocus:[4],hasFocus:[32],hasLabel:[32],hasPrefix:[32],hasSuffix:[32]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-button","sc-spinner"].forEach((t=>{switch(t){case"sc-button":customElements.get(t)||customElements.define(t,ScButton);break;case"sc-spinner":customElements.get(t)||defineCustomElement$1()}}))}export{ScButton as S,defineCustomElement as d};