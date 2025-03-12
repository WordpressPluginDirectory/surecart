"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[4127],{6402:function(t,e,i){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"polite",e=document.createElement("div");e.id="a11y-speak-".concat(t),e.className="a11y-speak-region",e.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),e.setAttribute("aria-live",t),e.setAttribute("aria-relevant","additions text"),e.setAttribute("aria-atomic","true");var i=document.body;return i&&i.appendChild(e),e}i.d(e,{s:function(){return r}});var a,s="";function r(t,e){!function(){for(var t=document.getElementsByClassName("a11y-speak-region"),e=document.getElementById("a11y-speak-intro-text"),i=0;i<t.length;i++)t[i].textContent="";e&&e.setAttribute("hidden","hidden")}(),t=function(t){return t=t.replace(/<[^<>]+>/g," "),s===t&&(t+=" "),s=t,t}(t);var i=document.getElementById("a11y-speak-intro-text"),n=document.getElementById("a11y-speak-assertive"),a=document.getElementById("a11y-speak-polite");n&&"assertive"===e?n.textContent=t:a&&(a.textContent=t),i&&i.removeAttribute("hidden")}a=function(){var t=document.getElementById("a11y-speak-intro-text"),e=document.getElementById("a11y-speak-assertive"),i=document.getElementById("a11y-speak-polite");null===t&&function(){var t=document.createElement("p");t.id="a11y-speak-intro-text",t.className="a11y-speak-intro-text",t.textContent=wp.i18n.__("Notifications"),t.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),t.setAttribute("hidden","hidden");var e=document.body;e&&e.appendChild(t)}(),null===e&&n("assertive"),null===i&&n("polite")},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",a):a())},4127:function(t,e,i){i.r(e),i.d(e,{sc_password:function(){return h}});var n,a,s=i(467),r=i(3029),o=i(2901),d=i(9280),u=i.n(d),l=i(1346),c=i(6402),h=function(){return(0,o.A)((function t(e){(0,r.A)(this,t),(0,l.r)(this,e),this.size="medium",this.value="",this.pill=!1,this.label=void 0,this.showLabel=!0,this.help="",this.placeholder=void 0,this.disabled=!1,this.readonly=!1,this.required=!1,this.autofocus=void 0,this.confirmation=!1,this.name="password",this.confirmationLabel=void 0,this.confirmationPlaceholder=void 0,this.confirmationHelp=void 0,this.enableValidation=!0,this.hintText=void 0,this.verifyText=void 0}),[{key:"triggerFocus",value:(e=(0,s.A)(u().mark((function t(e){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.input.triggerFocus(e));case 1:case"end":return t.stop()}}),t,this)}))),function(_x){return e.apply(this,arguments)})},{key:"reportValidity",value:(t=(0,s.A)(u().mark((function t(){var e,i,n,a,s,r,o,d;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return null===(i=null===(e=this.input)||void 0===e?void 0:e.setCustomValidity)||void 0===i||i.call(e,""),null===(a=null===(n=this.confirmInput)||void 0===n?void 0:n.setCustomValidity)||void 0===a||a.call(n,""),this.confirmation&&(null===(s=this.confirmInput)||void 0===s?void 0:s.value)&&(null===(r=this.input)||void 0===r?void 0:r.value)!==(null===(o=this.confirmInput)||void 0===o?void 0:o.value)&&(this.confirmInput.setCustomValidity(wp.i18n.__("Password does not match.","surecart")),(0,c.s)(wp.i18n.__("Password does not match.","surecart"),"assertive")),this.hintText&&this.input.setCustomValidity(wp.i18n.__(this.hintText,"surecart")),t.next=6,this.input.reportValidity();case 6:if(d=t.sent){t.next=9;break}return t.abrupt("return",!1);case 9:if(!this.confirmInput){t.next=11;break}return t.abrupt("return",this.confirmInput.reportValidity());case 11:return t.abrupt("return",d);case 12:case"end":return t.stop()}}),t,this)}))),function(){return t.apply(this,arguments)})},{key:"handleVerification",value:function(){var t=this;clearTimeout(a),a=setTimeout((function(){t.verifyPassword()}),500)}},{key:"handleValidate",value:function(){var t=this;this.handleVerification(),clearTimeout(n),n=setTimeout((function(){t.validatePassword()}),500)}},{key:"validatePassword",value:function(){var t,e,i;if(this.enableValidation)if(0!==(null===(t=this.input)||void 0===t?void 0:t.value.trim().length)){if((null===(e=this.input)||void 0===e?void 0:e.value.trim().length)<6)return this.hintText=wp.i18n.__("The password must be at least 6 characters in length.","surecart");if(!/[-'`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/.test(null===(i=this.input)||void 0===i?void 0:i.value))return this.hintText=wp.i18n.__("Passwords must contain a special character.","surecart");this.hintText=""}else this.hintText=""}},{key:"verifyPassword",value:function(){var t,e,i,n,a,s,r;if((null===(t=this.confirmInput)||void 0===t?void 0:t.value)&&(null===(e=this.input)||void 0===e?void 0:e.value)!==(null===(i=this.confirmInput)||void 0===i?void 0:i.value))return this.verifyText=wp.i18n.__("Password does not match.","surecart"),void(0,c.s)(this.verifyText,"assertive");(null===(n=this.input)||void 0===n?void 0:n.value)&&(null===(a=this.confirmInput)||void 0===a?void 0:a.value)&&(null===(s=this.input)||void 0===s?void 0:s.value)===(null===(r=this.confirmInput)||void 0===r?void 0:r.value)&&(0,c.s)(wp.i18n.__("Password is matched.","surecart"),"assertive"),this.verifyText=""}},{key:"handleHintTextChange",value:function(){(0,c.s)(this.hintText,"assertive")}},{key:"render",value:function(){var t,e=this;return(0,l.h)("div",{key:"5dc92980dc16fa7331b5fd3d18ec271e7120dd1b",class:"password"},(0,l.h)("div",{key:"d8715a1d7f8ce722ec3faea3e00c3455144012b6"},(0,l.h)("sc-input",{key:"f7f5f1f2b3b16b653127b1e47f8f3643488e5016",ref:function(t){return e.input=t},label:this.label,help:this.help,autofocus:this.autofocus,placeholder:this.placeholder,showLabel:this.showLabel,size:this.size?this.size:"medium",type:"password",name:"password",value:this.value,required:this.required,disabled:this.disabled,onScInput:function(){return e.handleValidate()}}),!!this.hintText&&(0,l.h)("small",{key:"01ac00189b62ce8e6e85c81bb27d118541517f44",class:"password__hint"},this.hintText)),this.confirmation&&(0,l.h)("div",{key:"7e82a44b8e7985a37c21fbcddff21fadb0c7ce69"},(0,l.h)("sc-input",{key:"e765ade791105217214c0b8e3a92fbbacca4daa8",ref:function(t){return e.confirmInput=t},label:null!==(t=this.confirmationLabel)&&void 0!==t?t:wp.i18n.__("Confirm Password","surecart"),help:this.confirmationHelp,placeholder:this.confirmationPlaceholder,size:this.size?this.size:"medium",type:"password",value:this.value,onScInput:function(){return e.handleVerification()},required:this.required,disabled:this.disabled}),!!this.verifyText&&(0,l.h)("small",{key:"afc2d328972b6965791fabb09d166206fdb56324",class:"password__hint"},this.verifyText)))}}],[{key:"watchers",get:function(){return{hintText:["handleHintTextChange"]}}}]);var t,e}();h.style=":host{display:block}.password{display:grid;gap:var(--sc-form-row-spacing, 0.75em)}.password__hint{padding-top:0.36rem;color:red}"}}]);