"use strict";(self.webpackChunk_surecart_blocks_next=self.webpackChunk_surecart_blocks_next||[]).push([[8786],{9649:function(t,e,n){function r(t,e,n){return new Promise((r=>{if((null==n?void 0:n.duration)===1/0)throw new Error("Promise-based animations must be finite.");if(!(null==t?void 0:t.animate))return;const i=t.animate(e,{...n,duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:n.duration});i&&(i.addEventListener("cancel",r,{once:!0}),i.addEventListener("finish",r,{once:!0}))}))}function i(t){var e;return Promise.all(((null===(e=null==t?void 0:t.getAnimations)||void 0===e?void 0:e.call(t))||[]).map((t=>new Promise((e=>{const n=requestAnimationFrame(e);t.addEventListener("cancel",(()=>n),{once:!0}),t.addEventListener("finish",(()=>n),{once:!0}),t.cancel()})))))}function s(t,e){return t.map((t=>({...t,height:"auto"===t.height?`${e}px`:t.height})))}n.d(e,{a:function(){return r},b:function(){return i},c:function(){return s},g:function(){return c},s:function(){return l}});const o=new Map,a=new WeakMap;function l(t,e){o.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function c(t,e){const n=a.get(t);if(null==n?void 0:n[e])return n[e];return o.get(e)||{keyframes:[],options:{duration:0}}}},9955:function(t,e,n){n.d(e,{_:function(){return __},a:function(){return _n},b:function(){return _x},s:function(){return a}});var r,i=n(4777),s={};r=s,function(){var t={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function e(n){return function(n,r){var i,s,o,a,l,c,u,d,p,h=1,f=n.length,m="";for(s=0;s<f;s++)if("string"==typeof n[s])m+=n[s];else if("object"==typeof n[s]){if((a=n[s]).keys)for(i=r[h],o=0;o<a.keys.length;o++){if(null==i)throw new Error(e('[sprintf] Cannot access property "%s" of undefined value "%s"',a.keys[o],a.keys[o-1]));i=i[a.keys[o]]}else i=a.param_no?r[a.param_no]:r[h++];if(t.not_type.test(a.type)&&t.not_primitive.test(a.type)&&i instanceof Function&&(i=i()),t.numeric_arg.test(a.type)&&"number"!=typeof i&&isNaN(i))throw new TypeError(e("[sprintf] expecting number but found %T",i));switch(t.number.test(a.type)&&(d=i>=0),a.type){case"b":i=parseInt(i,10).toString(2);break;case"c":i=String.fromCharCode(parseInt(i,10));break;case"d":case"i":i=parseInt(i,10);break;case"j":i=JSON.stringify(i,null,a.width?parseInt(a.width):0);break;case"e":i=a.precision?parseFloat(i).toExponential(a.precision):parseFloat(i).toExponential();break;case"f":i=a.precision?parseFloat(i).toFixed(a.precision):parseFloat(i);break;case"g":i=a.precision?String(Number(i.toPrecision(a.precision))):parseFloat(i);break;case"o":i=(parseInt(i,10)>>>0).toString(8);break;case"s":i=String(i),i=a.precision?i.substring(0,a.precision):i;break;case"t":i=String(!!i),i=a.precision?i.substring(0,a.precision):i;break;case"T":i=Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),i=a.precision?i.substring(0,a.precision):i;break;case"u":i=parseInt(i,10)>>>0;break;case"v":i=i.valueOf(),i=a.precision?i.substring(0,a.precision):i;break;case"x":i=(parseInt(i,10)>>>0).toString(16);break;case"X":i=(parseInt(i,10)>>>0).toString(16).toUpperCase()}t.json.test(a.type)?m+=i:(!t.number.test(a.type)||d&&!a.sign?p="":(p=d?"+":"-",i=i.toString().replace(t.sign,"")),c=a.pad_char?"0"===a.pad_char?"0":a.pad_char.charAt(1):" ",u=a.width-(p+i).length,l=a.width&&u>0?c.repeat(u):"",m+=a.align?p+i+l:"0"===c?p+l+i:l+p+i)}return m}(function(e){if(i[e])return i[e];for(var n,r=e,s=[],o=0;r;){if(null!==(n=t.text.exec(r)))s.push(n[0]);else if(null!==(n=t.modulo.exec(r)))s.push("%");else{if(null===(n=t.placeholder.exec(r)))throw new SyntaxError("[sprintf] unexpected placeholder");if(n[2]){o|=1;var a=[],l=n[2],c=[];if(null===(c=t.key.exec(l)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(a.push(c[1]);""!==(l=l.substring(c[0].length));)if(null!==(c=t.key_access.exec(l)))a.push(c[1]);else{if(null===(c=t.index_access.exec(l)))throw new SyntaxError("[sprintf] failed to parse named argument key");a.push(c[1])}n[2]=a}else o|=2;if(3===o)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");s.push({placeholder:n[0],param_no:n[1],keys:n[2],sign:n[3],pad_char:n[4],align:n[5],width:n[6],precision:n[7],type:n[8]})}r=r.substring(n[0].length)}return i[e]=s}(n),arguments)}function n(t,n){return e.apply(null,[t].concat(n||[]))}var i=Object.create(null);r.sprintf=e,r.vsprintf=n,"undefined"!=typeof window&&(window.sprintf=e,window.vsprintf=n)}();const o=function(t,e){var n,r,i=0;function s(){var s,o,a=n,l=arguments.length;t:for(;a;){if(a.args.length===arguments.length){for(o=0;o<l;o++)if(a.args[o]!==arguments[o]){a=a.next;continue t}return a!==n&&(a===r&&(r=a.prev),a.prev.next=a.next,a.next&&(a.next.prev=a.prev),a.next=n,a.prev=null,n.prev=a,n=a),a.val}a=a.next}for(s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return a={args:s,val:t.apply(null,s)},n?(n.prev=a,a.next=n):r=a,i===e.maxSize?(r=r.prev).next=null:i++,n=a,a.val}return e=e||{},s.clear=function(){n=null,r=null,i=0},s}(console.error);function a(t,...e){try{return s.sprintf(t,...e)}catch(e){return e instanceof Error&&o("sprintf error: \n\n"+e.toString()),t}}var l,c,u,d;l={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},c=["(","?"],u={")":["("],":":["?","?:"]},d=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;var p={"!":function(t){return!t},"*":function(t,e){return t*e},"/":function(t,e){return t/e},"%":function(t,e){return t%e},"+":function(t,e){return t+e},"-":function(t,e){return t-e},"<":function(t,e){return t<e},"<=":function(t,e){return t<=e},">":function(t,e){return t>e},">=":function(t,e){return t>=e},"==":function(t,e){return t===e},"!=":function(t,e){return t!==e},"&&":function(t,e){return t&&e},"||":function(t,e){return t||e},"?:":function(t,e,n){if(t)throw e;return n}};var h={contextDelimiter:"",onMissingKey:null};function f(t,e){var n;for(n in this.data=t,this.pluralForms={},this.options={},h)this.options[n]=void 0!==e&&n in e?e[n]:h[n]}f.prototype.getPluralForm=function(t,e){var n,r,i,s,o=this.pluralForms[t];return o||("function"!=typeof(i=(n=this.data[t][""])["Plural-Forms"]||n["plural-forms"]||n.plural_forms)&&(r=function(t){var e,n,r;for(e=t.split(";"),n=0;n<e.length;n++)if(0===(r=e[n].trim()).indexOf("plural="))return r.substr(7)}(n["Plural-Forms"]||n["plural-forms"]||n.plural_forms),s=function(t){var e=function(t){for(var e,n,r,i,s=[],o=[];e=t.match(d);){for(n=e[0],(r=t.substr(0,e.index).trim())&&s.push(r);i=o.pop();){if(u[n]){if(u[n][0]===i){n=u[n][1]||n;break}}else if(c.indexOf(i)>=0||l[i]<l[n]){o.push(i);break}s.push(i)}u[n]||o.push(n),t=t.substr(e.index+n.length)}return(t=t.trim())&&s.push(t),s.concat(o.reverse())}(t);return function(t){return function(t,e){var n,r,i,s,o,a,l=[];for(n=0;n<t.length;n++){if(o=t[n],s=p[o]){for(r=s.length,i=Array(r);r--;)i[r]=l.pop();try{a=s.apply(null,i)}catch(t){return t}}else a=e.hasOwnProperty(o)?e[o]:+o;l.push(a)}return l[0]}(e,t)}}(r),i=function(t){return+s({n:t})}),o=this.pluralForms[t]=i),o(e)},f.prototype.dcnpgettext=function(t,e,n,r,i){var s,o,a;return s=void 0===i?0:this.getPluralForm(t,i),o=n,e&&(o=e+this.options.contextDelimiter+n),(a=this.data[t][o])&&a[s]?a[s]:(this.options.onMissingKey&&this.options.onMissingKey(n,t),0===s?n:r)};const m={plural_forms(t){return 1===t?0:1}},y=/^i18n\.(n?gettext|has_translation)(_|$)/,g=((t,e,n)=>{const r=new f({}),i=new Set,s=()=>{i.forEach((t=>t()))},o=(t,e="default")=>{r.data[e]={...r.data[e],...t},r.data[e][""]={...m,...r.data[e]?.[""]},delete r.pluralForms[e]},a=(t,e)=>{o(t,e),s()},l=(t="default",e,n,i,s)=>(r.data[t]||o(void 0,t),r.dcnpgettext(t,e,n,i,s)),c=(t="default")=>t,_x=(t,e,r)=>{let i=l(r,e,t);return n?(i=n.applyFilters("i18n.gettext_with_context",i,t,e,r),n.applyFilters("i18n.gettext_with_context_"+c(r),i,t,e,r)):i};if(n){const t=t=>{y.test(t)&&s()};n.addAction("hookAdded","core/i18n",t),n.addAction("hookRemoved","core/i18n",t)}return{getLocaleData:(t="default")=>r.data[t],setLocaleData:a,addLocaleData:(t,e="default")=>{r.data[e]={...r.data[e],...t,"":{...m,...r.data[e]?.[""],...t?.[""]}},delete r.pluralForms[e],s()},resetLocaleData:(t,e)=>{r.data={},r.pluralForms={},a(t,e)},subscribe:t=>(i.add(t),()=>i.delete(t)),__:(t,e)=>{let r=l(e,void 0,t);return n?(r=n.applyFilters("i18n.gettext",r,t,e),n.applyFilters("i18n.gettext_"+c(e),r,t,e)):r},_x:_x,_n:(t,e,r,i)=>{let s=l(i,void 0,t,e,r);return n?(s=n.applyFilters("i18n.ngettext",s,t,e,r,i),n.applyFilters("i18n.ngettext_"+c(i),s,t,e,r,i)):s},_nx:(t,e,r,i,s)=>{let o=l(s,i,t,e,r);return n?(o=n.applyFilters("i18n.ngettext_with_context",o,t,e,r,i,s),n.applyFilters("i18n.ngettext_with_context_"+c(s),o,t,e,r,i,s)):o},isRTL:()=>"rtl"===_x("ltr","text direction"),hasTranslation:(t,e,i)=>{const s=e?e+""+t:t;let o=!!r.data?.[null!=i?i:"default"]?.[s];return n&&(o=n.applyFilters("i18n.has_translation",o,t,e,i),o=n.applyFilters("i18n.has_translation_"+c(i),o,t,e,i)),o}}})(0,0,i.d);g.getLocaleData.bind(g),g.setLocaleData.bind(g),g.resetLocaleData.bind(g),g.subscribe.bind(g);const __=g.__.bind(g),_x=g._x.bind(g),_n=g._n.bind(g);g._nx.bind(g),g.isRTL.bind(g),g.hasTranslation.bind(g)},658:function(t,e,n){n.d(e,{s:function(){return a}});var r=n(9955);function i(t="polite"){const e=document.createElement("div");e.id=`a11y-speak-${t}`,e.className="a11y-speak-region",e.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),e.setAttribute("aria-live",t),e.setAttribute("aria-relevant","additions text"),e.setAttribute("aria-atomic","true");const{body:n}=document;return n&&n.appendChild(e),e}let s="";var o;function a(t,e){!function(){const t=document.getElementsByClassName("a11y-speak-region"),e=document.getElementById("a11y-speak-intro-text");for(let e=0;e<t.length;e++)t[e].textContent="";e&&e.setAttribute("hidden","hidden")}(),t=function(t){return t=t.replace(/<[^<>]+>/g," "),s===t&&(t+=" "),s=t,t}(t);const n=document.getElementById("a11y-speak-intro-text"),r=document.getElementById("a11y-speak-assertive"),i=document.getElementById("a11y-speak-polite");r&&"assertive"===e?r.textContent=t:i&&(i.textContent=t),n&&n.removeAttribute("hidden")}o=function(){const t=document.getElementById("a11y-speak-intro-text"),e=document.getElementById("a11y-speak-assertive"),n=document.getElementById("a11y-speak-polite");null===t&&function(){const t=document.createElement("p");t.id="a11y-speak-intro-text",t.className="a11y-speak-intro-text",t.textContent=(0,r._)("Notifications"),t.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),t.setAttribute("hidden","hidden");const{body:e}=document;e&&e.appendChild(t)}(),null===e&&i("assertive"),null===n&&i("polite")},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",o):o())},4777:function(t,e,n){function r(t){return"string"!=typeof t||""===t?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(t)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)}function i(t){return"string"!=typeof t||""===t?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(t)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(t)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)}function s(t,e){return function(n,s,o,a=10){const l=t[e];if(!i(n))return;if(!r(s))return;if("function"!=typeof o)return void console.error("The hook callback must be a function.");if("number"!=typeof a)return void console.error("If specified, the hook priority must be a number.");const c={callback:o,priority:a,namespace:s};if(l[n]){const t=l[n].handlers;let e;for(e=t.length;e>0&&!(a>=t[e-1].priority);e--);e===t.length?t[e]=c:t.splice(e,0,c),l.__current.forEach((t=>{t.name===n&&t.currentIndex>=e&&t.currentIndex++}))}else l[n]={handlers:[c],runs:0};"hookAdded"!==n&&t.doAction("hookAdded",n,s,o,a)}}function o(t,e,n=!1){return function(s,o){const a=t[e];if(!i(s))return;if(!n&&!r(o))return;if(!a[s])return 0;let l=0;if(n)l=a[s].handlers.length,a[s]={runs:a[s].runs,handlers:[]};else{const t=a[s].handlers;for(let e=t.length-1;e>=0;e--)t[e].namespace===o&&(t.splice(e,1),l++,a.__current.forEach((t=>{t.name===s&&t.currentIndex>=e&&t.currentIndex--})))}return"hookRemoved"!==s&&t.doAction("hookRemoved",s,o),l}}function a(t,e){return function(n,r){const i=t[e];return void 0!==r?n in i&&i[n].handlers.some((t=>t.namespace===r)):n in i}}function l(t,e,n=!1){return function(r,...i){const s=t[e];s[r]||(s[r]={handlers:[],runs:0}),s[r].runs++;const o=s[r].handlers;if(!o||!o.length)return n?i[0]:void 0;const a={name:r,currentIndex:0};for(s.__current.push(a);a.currentIndex<o.length;){const t=o[a.currentIndex].callback.apply(null,i);n&&(i[0]=t),a.currentIndex++}return s.__current.pop(),n?i[0]:void 0}}function c(t,e){return function(){var n;const r=t[e];return null!==(n=r.__current[r.__current.length-1]?.name)&&void 0!==n?n:null}}function u(t,e){return function(n){const r=t[e];return void 0===n?void 0!==r.__current[0]:!!r.__current[0]&&n===r.__current[0].name}}function d(t,e){return function(n){const r=t[e];if(i(n))return r[n]&&r[n].runs?r[n].runs:0}}n.d(e,{a:function(){return k},d:function(){return p}});const p=new class{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=s(this,"actions"),this.addFilter=s(this,"filters"),this.removeAction=o(this,"actions"),this.removeFilter=o(this,"filters"),this.hasAction=a(this,"actions"),this.hasFilter=a(this,"filters"),this.removeAllActions=o(this,"actions",!0),this.removeAllFilters=o(this,"filters",!0),this.doAction=l(this,"actions"),this.applyFilters=l(this,"filters",!0),this.currentAction=c(this,"actions"),this.currentFilter=c(this,"filters"),this.doingAction=u(this,"actions"),this.doingFilter=u(this,"filters"),this.didAction=d(this,"actions"),this.didFilter=d(this,"filters")}},{addAction:h,addFilter:f,removeAction:m,removeFilter:y,hasAction:g,hasFilter:v,removeAllActions:b,removeAllFilters:x,doAction:_,applyFilters:k,currentAction:w,currentFilter:A,doingAction:F,doingFilter:S,didAction:E,didFilter:I,actions:C,filters:T}=p},8786:function(t,e,n){n.r(e),n.d(e,{sc_summary:function(){return a}});var r=n(6892),i=n(9955),s=n(658),o=n(9649);n(4777);const a=class{constructor(t){(0,r.r)(this,t),this.scShow=(0,r.c)(this,"scShow",7),this.scHide=(0,r.c)(this,"scHide",7),this.loading=void 0,this.busy=void 0,this.closedText=(0,i._)("Show Summary","surecart"),this.openText=(0,i._)("Summary","surecart"),this.collapsible=!1,this.collapsedOnMobile=!1,this.collapsedOnDesktop=void 0,this.collapsed=!1}isMobileScreen(){var t,e;const n=null===(t=document.body)||void 0===t?void 0:t.getClientRects();return(null==n?void 0:n.length)&&(null===(e=n[0])||void 0===e?void 0:e.width)<781}componentWillLoad(){this.isMobileScreen()?this.collapsed=this.collapsed||this.collapsedOnMobile:this.collapsed=this.collapsed||this.collapsedOnDesktop,this.handleOpenChange()}handleClick(t){t.preventDefault(),this.collapsed=!this.collapsed}renderHeader(){return this.loading?(0,r.h)("sc-line-item",null,(0,r.h)("sc-skeleton",{slot:"title",style:{width:"120px",display:"inline-block"}}),(0,r.h)("sc-skeleton",{slot:"price",style:{width:"70px",display:"inline-block","--border-radius":"6px"}}),(0,r.h)("sc-skeleton",{slot:"currency",style:{width:"30px",display:"inline-block"}})):(0,r.h)("sc-line-item",{style:{"--price-size":"var(--sc-font-size-x-large)"}},(0,r.h)("span",{class:"collapse-link",slot:"title",onClick:t=>this.handleClick(t),tabIndex:0,"aria-label":(0,i.s)((0,i._)("Summary %s","surecart"),this.collapsed?(0,i._)("collapsed","surecart"):(0,i._)("expanded","surecart")),onKeyDown:t=>{" "===t.key&&(this.handleClick(t),(0,s.s)((0,i.s)((0,i._)("Summary %s","surecart"),this.collapsed?(0,i._)("collapsed","surecart"):(0,i._)("expanded","surecart")),"assertive"))}},this.collapsed?this.closedText||(0,i._)("Summary","surecart"):this.openText||(0,i._)("Summary","surecart"),(0,r.h)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"collapse-link__icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},(0,r.h)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}))),(0,r.h)("span",{slot:"description"},(0,r.h)("slot",{name:"description"})),(0,r.h)("span",{slot:"price",class:{price:!0,"price--collapsed":this.collapsed}},(0,r.h)("slot",{name:"price"})))}async handleOpenChange(){if(this.collapsed){this.scHide.emit(),await(0,o.b)(this.body),this.body.style.overflow="hidden";const{keyframes:t,options:e}=(0,o.g)(this.el,"summary.hide");await(0,o.a)(this.body,(0,o.c)(t,this.body.scrollHeight),e),this.body.hidden=!0,this.body.style.height="auto",this.body.style.overflow="visible"}else{this.scShow.emit(),await(0,o.b)(this.body),this.body.hidden=!1,this.body.style.overflow="hidden";const{keyframes:t,options:e}=(0,o.g)(this.el,"summary.show");await(0,o.a)(this.body,(0,o.c)(t,this.body.scrollHeight),e),this.body.style.height="auto",this.body.style.overflow="visible"}}render(){return(0,r.h)("div",{key:"0090970f1d30b99ee33eddcd8c66df7e4fb3d6af",class:{summary:!0,"summary--open":!this.collapsed}},this.collapsible&&this.renderHeader(),(0,r.h)("div",{key:"06a71891afc3d282e833274750413d629ca1c656",ref:t=>this.body=t,class:{summary__content:!0}},(0,r.h)("slot",{key:"43fa920dea0e64a37c3a613f08b479e0807af60d"})))}get el(){return(0,r.a)(this)}static get watchers(){return{collapsed:["handleOpenChange"]}}};(0,o.s)("summary.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"ease"}}),(0,o.s)("summary.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"ease"}}),a.style=":host{display:block;font-family:var(--sc-font-sans);font-size:var(--sc-checkout-font-size, 16px)}.collapse-link{display:flex;align-items:center;gap:0.35em}.summary__content--empty{display:none}.collapse-link__icon{width:18px;height:18px;color:var(--sc-order-collapse-link-icon-color, var(--sc-color-gray-500))}.item__product+.item__product{margin-top:20px}.empty{color:var(--sc-order-summary-color, var(--sc-color-gray-500))}.price{display:inline-block;opacity:0;visibility:hidden;transform:translateY(5px);transition:var(--sc-input-transition, var(--sc-transition-medium)) visibility ease, var(--sc-input-transition, var(--sc-transition-medium)) opacity ease, var(--sc-input-transition, var(--sc-transition-medium)) transform ease}.price--collapsed{opacity:1;visibility:visible;transform:translateY(0)}.summary{position:relative;user-select:none;cursor:pointer}.summary .collapse-link__icon{transition:transform 0.25s ease-in-out}.summary .scratch-price{text-decoration:line-through;color:var(--sc-color-gray-500);font-size:var(--sc-font-size-small);margin-right:var(--sc-spacing-xx-small)}.summary--open .collapse-link__icon{transform:rotate(180deg)}::slotted(*){margin:4px 0 !important}::slotted(sc-divider){margin:16px 0 !important}sc-line-item~sc-line-item{margin-top:14px}.total-price{white-space:nowrap}"}}]);