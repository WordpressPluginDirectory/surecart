"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[1381],{1494:function(e,i,t){t.d(i,{o:function(){return s}});var n=t(8860),s=function(e,i,t){void 0===t&&(t=!0);var s="Function"===e.constructor.name?e.prototype:e,l=s.componentWillLoad;s.componentWillLoad=function(){var e,s=this,o=(0,n.a)(this),r={promise:new Promise((function(i){e=i})),resolve:e},d=new CustomEvent("openWormhole",{bubbles:!0,composed:!0,detail:{consumer:this,fields:i,updater:function(e,i){(e in o?o:s)[e]=i},onOpen:r}});o.dispatchEvent(d);var c=function(){if(l)return l.call(s)};return t?r.promise.then((function(){return c()})):c()}}},1381:function(e,i,t){t.r(i),t.d(i,{sc_order_confirmation_details:function(){return r}});var n=t(5671),s=t(3144),l=t(8860),o=t(1494),r=function(){function e(i){(0,n.Z)(this,e),(0,l.r)(this,i),this.order=void 0,this.loading=void 0}return(0,s.Z)(e,[{key:"renderOrderStatus",value:function(){var e,i;return"processing"===(null===(e=null==this?void 0:this.order)||void 0===e?void 0:e.status)?(0,l.h)("sc-tag",{type:"warning"},wp.i18n.__("On Hold","surecart")):(0,l.h)("sc-order-status-badge",{status:null===(i=this.order)||void 0===i?void 0:i.status})}},{key:"render",value:function(){var e,i;return this.loading?(0,l.h)("sc-dashboard-module",null,(0,l.h)("sc-skeleton",{slot:"heading",style:{width:"120px",display:"inline-block"}}),(0,l.h)("sc-skeleton",{slot:"end",style:{width:"60px",display:"inline-block"}}),(0,l.h)("sc-card",null,(0,l.h)("sc-line-item",null,(0,l.h)("sc-skeleton",{style:{width:"50px",height:"50px","--border-radius":"0"},slot:"image"}),(0,l.h)("sc-skeleton",{slot:"title",style:{width:"120px",display:"inline-block"}}),(0,l.h)("sc-skeleton",{slot:"description",style:{width:"60px",display:"inline-block"}}),(0,l.h)("sc-skeleton",{style:{width:"120px",display:"inline-block"},slot:"price"}),(0,l.h)("sc-skeleton",{style:{width:"60px",display:"inline-block"},slot:"price-description"})),(0,l.h)("sc-divider",null),(0,l.h)("sc-line-item",null,(0,l.h)("sc-skeleton",{slot:"title",style:{width:"120px",display:"inline-block"}}),(0,l.h)("sc-skeleton",{style:{width:"120px",display:"inline-block"},slot:"price"})),(0,l.h)("sc-divider",null),(0,l.h)("sc-line-item",null,(0,l.h)("sc-skeleton",{slot:"title",style:{width:"120px",display:"inline-block"}}),(0,l.h)("sc-skeleton",{style:{width:"120px",display:"inline-block"},slot:"price"})))):(null===(e=this.order)||void 0===e?void 0:e.number)?(0,l.h)("sc-dashboard-module",{class:"order"},(0,l.h)("span",{slot:"heading"},wp.i18n.sprintf(wp.i18n.__("Order #%s","surecart"),null===(i=this.order)||void 0===i?void 0:i.number)),(0,l.h)("span",{slot:"end"},this.renderOrderStatus()),(0,l.h)("sc-card",null,(0,l.h)("sc-order-confirmation-line-items",null),(0,l.h)("sc-divider",null),(0,l.h)("sc-order-confirmation-totals",null))):void 0}}]),e}();(0,o.o)(r,["order","loading"],!1),r.style=":host{display:block}"}}]);