"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[1935],{1935:function(t,o,e){e.r(o),e.d(o,{sc_cc_logo:function(){return l},sc_tooltip:function(){return h}});var r=e(4467),i=e(3029),n=e(2901),s=e(1346);function c(t,o){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?c(Object(e),!0).forEach((function(o){(0,r.A)(t,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))}))}return t}var l=function(){return(0,n.A)((function t(o){(0,i.A)(this,t),(0,s.r)(this,o),this.brand=void 0}),[{key:"renderLogo",value:function(){return["visa","mastercard","amex","discover","diners","jcb","unionpay"].includes(this.brand)?(0,s.h)("sc-icon",{name:this.brand,style:{"--height":"0.63em"}}):(0,s.h)("sc-icon",{name:"creditcard",style:{"--height":"0.63em"}})}},{key:"render",value:function(){return(0,s.h)("div",{key:"2c667e6d132e2dde8aca4ab696627fd884c3022f",class:"cc-logo",part:"base"},this.renderLogo())}}])}();l.style=":host{display:inline-block}.cc-logo{border-radius:var(--sc-cc-border-radius, 4px);line-height:0;overflow:hidden}";var h=function(){return(0,n.A)((function t(o){(0,i.A)(this,t),(0,s.r)(this,o),this.open=void 0,this.width=void 0,this.text=void 0,this.freeze=void 0,this.padding=5,this.type="info",this.top=-1e4,this.left=-1e4}),[{key:"componentDidLoad",value:function(){this.handleWindowScroll()}},{key:"handleWindowScroll",value:function(){if(this.open&&this.tooltip){var t=this.tooltip.getBoundingClientRect(),o=this.el.getBoundingClientRect();this.top=o.top-(t.height+this.padding);var e=Math.max(o.left+o.width/2-t.width/2+this.padding,0);this.left=Math.min(e,window.innerWidth-t.width)}}},{key:"handleOpenChange",value:function(){var t=this;setTimeout((function(){return t.handleWindowScroll()}),0)}},{key:"handleBlur",value:function(){this.freeze||(this.open=!1)}},{key:"handleClick",value:function(){this.freeze||(this.open=!0)}},{key:"handleFocus",value:function(){this.freeze||(this.open=!0)}},{key:"handleMouseOver",value:function(){this.freeze||(this.open=!0)}},{key:"handleMouseOut",value:function(){this.freeze||(this.open=!1)}},{key:"render",value:function(){var t=this;return this.text?(0,s.h)("span",{part:"base",class:{tooltip:!0,"tooltip--primary":"primary"===this.type,"tooltip--success":"success"===this.type,"tooltip--info":"info"===this.type,"tooltip--warning":"warning"===this.type,"tooltip--danger":"danger"===this.type,"tooltip--has-width":!!this.width},onClick:function(){return t.handleClick()},onBlur:function(){return t.handleBlur()},onFocus:function(){return t.handleFocus()},onMouseOver:function(){return t.handleMouseOver()},onMouseOut:function(){return t.handleMouseOut()}},(0,s.h)("slot",null),!!this.open&&(0,s.h)("div",{part:"text",ref:function(o){return t.tooltip=o},class:"tooltip-text",style:a({top:"".concat(this.top,"px"),left:"".concat(this.left,"px")},this.width?{"--sc-tooltip-width":this.width}:{})},this.text)):(0,s.h)("slot",null)}},{key:"el",get:function(){return(0,s.a)(this)}}],[{key:"watchers",get:function(){return{open:["handleOpenChange"]}}}])}();h.style='.tooltip{position:relative}.tooltip--has-width .tooltip-text{white-space:normal;min-width:var(--sc-tooltip-width);max-width:var(--sc-tooltip-width)}.tooltip-text{position:fixed;background:var(--sc-color-gray-900);border-radius:var(--sc-border-radius-small);padding:var(--sc-spacing-small);font-family:var(--sc-input-font-family);font-size:var(--sc-input-font-size-small);white-space:nowrap;line-height:1.2;color:var(--sc-color-white);z-index:99999}.tooltip-text:after{content:"";position:absolute;transform:translateX(-50%);top:calc(100% - 1px);left:50%;height:0;width:0;border:7px solid transparent;border-top-color:var(--sc-color-gray-900)}.tooltip--primary .tooltip-text{background:var(--sc-color-primary-500)}.tooltip--primary .tooltip-text:after{border-top-color:var(--sc-color-primary-500)}.tooltip--success .tooltip-text{background:var(--sc-color-success-500)}.tooltip--success .tooltip-text:after{border-top-color:var(--sc-color-success-500)}.tooltip--info .tooltip-text{background:var(--sc-color-info-500)}.tooltip--info .tooltip-text:after{border-top-color:var(--sc-color-info-500)}.tooltip--warning .tooltip-text{background:var(--sc-color-warning-500)}.tooltip--warning .tooltip-text:after{border-top-color:var(--sc-color-warning-500)}.tooltip--danger .tooltip-text{background:var(--sc-color-danger-500)}.tooltip--danger .tooltip-text:after{border-top-color:var(--sc-color-danger-500)}'}}]);