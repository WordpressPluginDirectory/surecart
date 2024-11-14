import{r as e,h as t,a as s}from"./p-e97fde0a.js";import{s as i}from"./p-fab02ef6.js";import"./p-03631502.js";const a=':host{display:block}:slotted([slot="summary"]){line-height:1;display:flex;align-items:center;gap:0.5em}';const n=a;const l=class{constructor(t){e(this,t);this.methodId=undefined;this.processorId=undefined;this.isManual=undefined;this.card=undefined}isSelected(){if(this.methodId){return(i===null||i===void 0?void 0:i.id)===this.processorId&&(i===null||i===void 0?void 0:i.method)==this.methodId}return!(i===null||i===void 0?void 0:i.method)&&(i===null||i===void 0?void 0:i.id)===this.processorId}getAllOptions(){const e=this.el.closest("sc-payment")||this.el.parentElement;if(!e){return[]}return[...e.querySelectorAll(this.el.tagName)]}getSiblingItems(){return this.getAllOptions().filter((e=>e!==this.el))}hasOthers(){var e;return!!((e=this.getSiblingItems())===null||e===void 0?void 0:e.length)}render(){const e=this.hasOthers()?"sc-toggle":"div";return t(e,{key:"d90879d2b147b1e9597d98ffd60b5e8eced64815","show-control":true,borderless:true,open:this.isSelected(),onScShow:()=>{i.id=this.processorId;i.manual=!!this.isManual;i.method=this.methodId}},this.hasOthers()&&t("slot",{key:"9b184447f0881479cc93ceca880b3b8aea5779ba",name:"summary",slot:"summary"}),this.card&&!this.hasOthers()?t("sc-card",null,t("slot",null)):t("slot",null))}get el(){return s(this)}};l.style=n;const c=":host{display:block}::slotted([slot=icon]){display:block;font-size:24px}.payment-selected{display:flex;flex-direction:column;gap:var(--sc-spacing-x-small)}.payment-selected__label{color:var(--sc-input-label-color);line-height:var(--sc-line-height-dense);font-size:var(--sc-font-size-medium)}.payment-selected__instructions{display:flex;justify-content:flex-start;align-items:center;gap:1em}.payment-selected__instructions svg{width:42px;height:42px;flex-shrink:0}.payment-selected__instructions-text{color:var(--sc-input-label-color);font-size:var(--sc-font-size-small);line-height:var(--sc-line-height-dense)}";const d=c;const o=class{constructor(t){e(this,t);this.iconName=undefined;this.label=undefined}render(){return t("div",{key:"183056747168ad46cef73fae91777616f91db787",class:"payment-selected",part:"base"},t("slot",{key:"327b10afb3c1fea89db6bed269f47fb779f1c59d",name:"icon"}),t("div",{key:"f8d80e61da9a4247588b2754bc1ca49dbe1ca5fd",class:"payment-selected__label"},this.label),t("sc-divider",{key:"5718e3f3f50be0938293a7cc4846800e79c58f41",style:{"--spacing":"var(--sc-spacing-xx-small)"},exportparts:"base:divider, line:divider__line"}),t("div",{key:"183b4ae41153c7b2996bebf1638a2edcb268f45d",part:"instructions",class:"payment-selected__instructions"},t("svg",{key:"7728f89d45f421d41fe5d6cfd7c6a721d0e51516",part:"icon",viewBox:"0 0 48 40",fill:"var(--sc-color-gray-500)",xmlns:"http://www.w3.org/2000/svg",role:"presentation"},t("path",{key:"6e466418b2cab3c6eb954ff836a6cec86f4a9a52",opacity:".6","fill-rule":"evenodd","clip-rule":"evenodd",d:"M43 5a4 4 0 00-4-4H17a4 4 0 00-4 4v11a1 1 0 102 0V5a2 2 0 012-2h22a2 2 0 012 2v30a2 2 0 01-2 2H17a2 2 0 01-2-2v-9a1 1 0 10-2 0v9a4 4 0 004 4h22a4 4 0 004-4V5zM17.992 16.409L21.583 20H6a1 1 0 100 2h15.583l-3.591 3.591a1 1 0 101.415 1.416l5.3-5.3a1 1 0 000-1.414l-5.3-5.3a1 1 0 10-1.415 1.416zM17 6a1 1 0 011-1h15a1 1 0 011 1v2a1 1 0 01-1 1H18a1 1 0 01-1-1V6zm21-1a1 1 0 100 2 1 1 0 000-2z"})),t("div",{key:"0cd6695055d2f9b2bf0d3ab41c0a67b801d81e7b",part:"text",class:"payment-selected__instructions-text"},t("slot",{key:"279e3bb2f8c36dee3c9d42ff194d88c1c276df72"}))))}};o.style=d;export{l as sc_payment_method_choice,o as sc_payment_selected};
//# sourceMappingURL=p-5d41f5f2.entry.js.map