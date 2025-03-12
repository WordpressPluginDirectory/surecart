import{h}from"@stencil/core";export class ScTabGroup{constructor(){this.tabs=[],this.panels=[],this.activeTab=void 0}componentDidLoad(){this.syncTabsAndPanels(),this.setAriaLabels(),this.setActiveTab(this.getActiveTab()||this.tabs[0],{emitEvents:!1}),this.mutationObserver=new MutationObserver((()=>{this.syncTabsAndPanels()})),this.mutationObserver.observe(this.el,{attributes:!0,childList:!0,subtree:!0})}disconnectedCallback(){this.mutationObserver.disconnect()}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.panels=this.getAllPanels()}setAriaLabels(){this.tabs.map((e=>{const t=this.panels.find((t=>t.name===e.panel));t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))}))}handleClick(e){const t=e.target.closest("sc-tab");(null==t?void 0:t.closest("sc-tab-group"))===this.el&&t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}handleKeyDown(e){const t=e.target.closest("sc-tab");if((null==t?void 0:t.closest("sc-tab-group"))!==this.el)return!0;if(["Enter"," "].includes(e.key)&&t&&this.setActiveTab(t,{scrollBehavior:"smooth"}),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=document.activeElement;if(t&&"sc-tab"===t.tagName.toLowerCase()){let s=this.tabs.indexOf(t);"Home"===e.key?s=0:"End"===e.key?s=this.tabs.length-1:"ArrowUp"===e.key?s=Math.max(0,s-1):"ArrowDown"===e.key&&(s=Math.min(this.tabs.length-1,s+1)),this.tabs[s].triggerFocus({preventScroll:!0}),e.preventDefault()}}}setActiveTab(e,t){if(t=Object.assign({emitEvents:!0,scrollBehavior:"auto"},t),e&&e!==this.activeTab&&!e.disabled){const s=this.activeTab;this.activeTab=e,this.tabs.map((e=>e.active=e===this.activeTab)),this.panels.map((e=>e.active=e.name===this.activeTab.panel)),t.emitEvents&&(s&&this.scTabHide.emit(s.panel),this.scTabShow.emit(this.activeTab.panel))}}getActiveTab(){return this.getAllTabs().find((e=>e.active))}getAllChildren(){const e=this.el.shadowRoot.querySelectorAll("slot"),t=["sc-tab","sc-tab-panel"];return Array.from(e).map((e=>{var t;return null===(t=null==e?void 0:e.assignedElements)||void 0===t?void 0:t.call(e,{flatten:!0})})).flat().reduce(((e,t)=>{var s;return e.concat(t,[...(null===(s=null==t?void 0:t.querySelectorAll)||void 0===s?void 0:s.call(t,"*"))||[]])}),[]).filter((e=>{var s,a;return t.includes(null===(a=null===(s=null==e?void 0:e.tagName)||void 0===s?void 0:s.toLowerCase)||void 0===a?void 0:a.call(s))}))}getAllTabs(e=!1){return this.getAllChildren().filter((t=>e?"sc-tab"===t.tagName.toLowerCase():"sc-tab"===t.tagName.toLowerCase()&&!t.disabled))}getAllPanels(){return this.getAllChildren().filter((e=>"sc-tab-panel"===e.tagName.toLowerCase()))}render(){return h("div",{key:"5eabd08a8e912710f548bed3d5c00c07df49bfa4",part:"base",class:{"tab-group":!0},onClick:e=>this.handleClick(e),onKeyDown:e=>this.handleKeyDown(e)},h("div",{key:"b3679a99ba9e459add16971d031ec812e38fc5e4",class:"tab-group__nav-container",part:"nav"},h("div",{key:"9b13dc54b7b09638e81742ec204ffbce58e8247f",class:"tab-group__nav"},h("div",{key:"0ea9325e68cb94845c0e5790ff07f2ac26710ec2",part:"tabs",class:"tab-group__tabs",role:"tablist"},h("slot",{key:"9cd1d0ff82389ee5a4a21c96923ed42a74e74a5a",onSlotchange:()=>this.syncTabsAndPanels(),name:"nav"})))),h("div",{key:"7bcb6ead8463b0910531ecd3e1ca79fc3c0796c0",part:"body",class:"tab-group__body"},h("slot",{key:"b6f33d50e1050080a754c4f3287d87842fd293d0",onSlotchange:()=>this.syncTabsAndPanels()})))}static get is(){return"sc-tab-group"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-tab-group.scss"]}}static get styleUrls(){return{$:["sc-tab-group.css"]}}static get states(){return{activeTab:{}}}static get events(){return[{method:"scTabHide",name:"scTabHide",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:""},complexType:{original:"string",resolved:"string",references:{}}},{method:"scTabShow",name:"scTabShow",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:""},complexType:{original:"string",resolved:"string",references:{}}}]}static get elementRef(){return"el"}}