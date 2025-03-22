"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[1897],{1897:function(t,e,a){a.r(e),a.d(e,{sc_tab_group:function(){return l}});var n=a(9394),i=a(3029),s=a(2901),r=a(1346),l=function(){return(0,s.A)((function t(e){(0,i.A)(this,t),(0,r.r)(this,e),this.scTabHide=(0,r.c)(this,"scTabHide",7),this.scTabShow=(0,r.c)(this,"scTabShow",7),this.tabs=[],this.panels=[],this.activeTab=void 0}),[{key:"componentDidLoad",value:function(){var t=this;this.syncTabsAndPanels(),this.setAriaLabels(),this.setActiveTab(this.getActiveTab()||this.tabs[0],{emitEvents:!1}),this.mutationObserver=new MutationObserver((function(){t.syncTabsAndPanels()})),this.mutationObserver.observe(this.el,{attributes:!0,childList:!0,subtree:!0})}},{key:"disconnectedCallback",value:function(){this.mutationObserver.disconnect()}},{key:"syncTabsAndPanels",value:function(){this.tabs=this.getAllTabs(),this.panels=this.getAllPanels()}},{key:"setAriaLabels",value:function(){var t=this;this.tabs.map((function(e){var a=t.panels.find((function(t){return t.name===e.panel}));a&&(e.setAttribute("aria-controls",a.getAttribute("id")),a.setAttribute("aria-labelledby",e.getAttribute("id")))}))}},{key:"handleClick",value:function(t){var e=t.target.closest("sc-tab");(null==e?void 0:e.closest("sc-tab-group"))===this.el&&e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}},{key:"handleKeyDown",value:function(t){var e=t.target.closest("sc-tab");if((null==e?void 0:e.closest("sc-tab-group"))!==this.el)return!0;if(["Enter"," "].includes(t.key)&&e&&this.setActiveTab(e,{scrollBehavior:"smooth"}),["ArrowUp","ArrowDown","Home","End"].includes(t.key)){var a=document.activeElement;if(a&&"sc-tab"===a.tagName.toLowerCase()){var n=this.tabs.indexOf(a);"Home"===t.key?n=0:"End"===t.key?n=this.tabs.length-1:"ArrowUp"===t.key?n=Math.max(0,n-1):"ArrowDown"===t.key&&(n=Math.min(this.tabs.length-1,n+1)),this.tabs[n].triggerFocus({preventScroll:!0}),t.preventDefault()}}}},{key:"setActiveTab",value:function(t,e){var a=this;if(e=Object.assign({emitEvents:!0,scrollBehavior:"auto"},e),t&&t!==this.activeTab&&!t.disabled){var n=this.activeTab;this.activeTab=t,this.tabs.map((function(t){return t.active=t===a.activeTab})),this.panels.map((function(t){return t.active=t.name===a.activeTab.panel})),e.emitEvents&&(n&&this.scTabHide.emit(n.panel),this.scTabShow.emit(this.activeTab.panel))}}},{key:"getActiveTab",value:function(){return this.getAllTabs().find((function(t){return t.active}))}},{key:"getAllChildren",value:function(){var t=this.el.shadowRoot.querySelectorAll("slot"),e=["sc-tab","sc-tab-panel"];return Array.from(t).map((function(t){var e;return null===(e=null==t?void 0:t.assignedElements)||void 0===e?void 0:e.call(t,{flatten:!0})})).flat().reduce((function(t,e){var a;return t.concat(e,(0,n.A)((null===(a=null==e?void 0:e.querySelectorAll)||void 0===a?void 0:a.call(e,"*"))||[]))}),[]).filter((function(t){var a,n;return e.includes(null===(n=null===(a=null==t?void 0:t.tagName)||void 0===a?void 0:a.toLowerCase)||void 0===n?void 0:n.call(a))}))}},{key:"getAllTabs",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.getAllChildren().filter((function(e){return t?"sc-tab"===e.tagName.toLowerCase():"sc-tab"===e.tagName.toLowerCase()&&!e.disabled}))}},{key:"getAllPanels",value:function(){return this.getAllChildren().filter((function(t){return"sc-tab-panel"===t.tagName.toLowerCase()}))}},{key:"render",value:function(){var t=this;return(0,r.h)("div",{key:"c324b17db79d29abf98459eeb15646bb55c09dfb",part:"base",class:{"tab-group":!0},onClick:function(e){return t.handleClick(e)},onKeyDown:function(e){return t.handleKeyDown(e)}},(0,r.h)("div",{key:"fc7ad29471ed8853112c2a2b54a028e5a7a46f0d",class:"tab-group__nav-container",part:"nav"},(0,r.h)("div",{key:"63aa6165010b8e24621c64b1b6e367e0ffbec99b",class:"tab-group__nav"},(0,r.h)("div",{key:"afaf00dd8101f398332f44a2603ceb12ad46f3fa",part:"tabs",class:"tab-group__tabs",role:"tablist"},(0,r.h)("slot",{key:"37c9279ca4057f195393131825772bfd921b43a2",onSlotchange:function(){return t.syncTabsAndPanels()},name:"nav"})))),(0,r.h)("div",{key:"7f7752bad5e65a95259546ee40c4bd6a58dfb110",part:"body",class:"tab-group__body"},(0,r.h)("slot",{key:"5131894576274caf9165db8c0b8bf1b5a1608b6a",onSlotchange:function(){return t.syncTabsAndPanels()}})))}},{key:"el",get:function(){return(0,r.a)(this)}}])}();l.style=":host{display:block;--sc-tabs-min-width:225px}.tab-group{display:flex;flex-wrap:wrap;position:relative;border:solid 1px transparent;border-radius:0;flex-direction:row}@media screen and (min-width: 750px){.tab-group{flex-wrap:nowrap}}.tab-group__tabs{display:flex;flex-wrap:wrap;flex:0 0 auto;flex-direction:column;margin-bottom:var(--sc-spacing-xx-large)}.tab-group__nav-container{order:1;flex:1 0 100%}@media screen and (min-width: 750px){.tab-group__nav-container{min-width:var(--sc-tabs-min-width);flex:0 1 auto}}.tab-group__body{flex:1 1 auto;order:2}@media screen and (min-width: 750px){.tab-group__body{padding:0 var(--sc-spacing-xx-large)}}::slotted(sc-tab){margin-bottom:var(--sc-spacing-xx-small)}"}}]);