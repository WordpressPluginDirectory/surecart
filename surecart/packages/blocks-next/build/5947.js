"use strict";(self.webpackChunk_surecart_blocks_next=self.webpackChunk_surecart_blocks_next||[]).push([[5947],{3530:function(e,r,t){t.d(r,{i:function(){return s},m:function(){return i},z:function(){return n}});const n=["bif","byr","clp","djf","gnf","isk","jpy","kmf","krw","pyg","rwf","ugx","vnd","vuv","xaf","xag","xau","xba","xbb","xbc","xbd","xdr","xof","xpd","xpf","xpt","xts"],i=(e,r)=>s(r)?e:e/100,s=e=>{var r;return n.includes(null===(r=null==e?void 0:e.toLowerCase)||void 0===r?void 0:r.call(e))}},9955:function(e,r,t){t.d(r,{_:function(){return __},a:function(){return _n},b:function(){return _x},s:function(){return c}});var n,i=t(4777),s={};n=s,function(){var e={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function r(t){return function(t,n){var i,s,o,c,a,u,l,d,p,h=1,f=t.length,_="";for(s=0;s<f;s++)if("string"==typeof t[s])_+=t[s];else if("object"==typeof t[s]){if((c=t[s]).keys)for(i=n[h],o=0;o<c.keys.length;o++){if(null==i)throw new Error(r('[sprintf] Cannot access property "%s" of undefined value "%s"',c.keys[o],c.keys[o-1]));i=i[c.keys[o]]}else i=c.param_no?n[c.param_no]:n[h++];if(e.not_type.test(c.type)&&e.not_primitive.test(c.type)&&i instanceof Function&&(i=i()),e.numeric_arg.test(c.type)&&"number"!=typeof i&&isNaN(i))throw new TypeError(r("[sprintf] expecting number but found %T",i));switch(e.number.test(c.type)&&(d=i>=0),c.type){case"b":i=parseInt(i,10).toString(2);break;case"c":i=String.fromCharCode(parseInt(i,10));break;case"d":case"i":i=parseInt(i,10);break;case"j":i=JSON.stringify(i,null,c.width?parseInt(c.width):0);break;case"e":i=c.precision?parseFloat(i).toExponential(c.precision):parseFloat(i).toExponential();break;case"f":i=c.precision?parseFloat(i).toFixed(c.precision):parseFloat(i);break;case"g":i=c.precision?String(Number(i.toPrecision(c.precision))):parseFloat(i);break;case"o":i=(parseInt(i,10)>>>0).toString(8);break;case"s":i=String(i),i=c.precision?i.substring(0,c.precision):i;break;case"t":i=String(!!i),i=c.precision?i.substring(0,c.precision):i;break;case"T":i=Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),i=c.precision?i.substring(0,c.precision):i;break;case"u":i=parseInt(i,10)>>>0;break;case"v":i=i.valueOf(),i=c.precision?i.substring(0,c.precision):i;break;case"x":i=(parseInt(i,10)>>>0).toString(16);break;case"X":i=(parseInt(i,10)>>>0).toString(16).toUpperCase()}e.json.test(c.type)?_+=i:(!e.number.test(c.type)||d&&!c.sign?p="":(p=d?"+":"-",i=i.toString().replace(e.sign,"")),u=c.pad_char?"0"===c.pad_char?"0":c.pad_char.charAt(1):" ",l=c.width-(p+i).length,a=c.width&&l>0?u.repeat(l):"",_+=c.align?p+i+a:"0"===u?p+a+i:a+p+i)}return _}(function(r){if(i[r])return i[r];for(var t,n=r,s=[],o=0;n;){if(null!==(t=e.text.exec(n)))s.push(t[0]);else if(null!==(t=e.modulo.exec(n)))s.push("%");else{if(null===(t=e.placeholder.exec(n)))throw new SyntaxError("[sprintf] unexpected placeholder");if(t[2]){o|=1;var c=[],a=t[2],u=[];if(null===(u=e.key.exec(a)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(c.push(u[1]);""!==(a=a.substring(u[0].length));)if(null!==(u=e.key_access.exec(a)))c.push(u[1]);else{if(null===(u=e.index_access.exec(a)))throw new SyntaxError("[sprintf] failed to parse named argument key");c.push(u[1])}t[2]=c}else o|=2;if(3===o)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");s.push({placeholder:t[0],param_no:t[1],keys:t[2],sign:t[3],pad_char:t[4],align:t[5],width:t[6],precision:t[7],type:t[8]})}n=n.substring(t[0].length)}return i[r]=s}(t),arguments)}function t(e,t){return r.apply(null,[e].concat(t||[]))}var i=Object.create(null);n.sprintf=r,n.vsprintf=t,"undefined"!=typeof window&&(window.sprintf=r,window.vsprintf=t)}();const o=function(e,r){var t,n,i=0;function s(){var s,o,c=t,a=arguments.length;e:for(;c;){if(c.args.length===arguments.length){for(o=0;o<a;o++)if(c.args[o]!==arguments[o]){c=c.next;continue e}return c!==t&&(c===n&&(n=c.prev),c.prev.next=c.next,c.next&&(c.next.prev=c.prev),c.next=t,c.prev=null,t.prev=c,t=c),c.val}c=c.next}for(s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return c={args:s,val:e.apply(null,s)},t?(t.prev=c,c.next=t):n=c,i===r.maxSize?(n=n.prev).next=null:i++,t=c,c.val}return r=r||{},s.clear=function(){t=null,n=null,i=0},s}(console.error);function c(e,...r){try{return s.sprintf(e,...r)}catch(r){return r instanceof Error&&o("sprintf error: \n\n"+r.toString()),e}}var a,u,l,d;a={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},u=["(","?"],l={")":["("],":":["?","?:"]},d=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;var p={"!":function(e){return!e},"*":function(e,r){return e*r},"/":function(e,r){return e/r},"%":function(e,r){return e%r},"+":function(e,r){return e+r},"-":function(e,r){return e-r},"<":function(e,r){return e<r},"<=":function(e,r){return e<=r},">":function(e,r){return e>r},">=":function(e,r){return e>=r},"==":function(e,r){return e===r},"!=":function(e,r){return e!==r},"&&":function(e,r){return e&&r},"||":function(e,r){return e||r},"?:":function(e,r,t){if(e)throw r;return t}};var h={contextDelimiter:"",onMissingKey:null};function f(e,r){var t;for(t in this.data=e,this.pluralForms={},this.options={},h)this.options[t]=void 0!==r&&t in r?r[t]:h[t]}f.prototype.getPluralForm=function(e,r){var t,n,i,s,o=this.pluralForms[e];return o||("function"!=typeof(i=(t=this.data[e][""])["Plural-Forms"]||t["plural-forms"]||t.plural_forms)&&(n=function(e){var r,t,n;for(r=e.split(";"),t=0;t<r.length;t++)if(0===(n=r[t].trim()).indexOf("plural="))return n.substr(7)}(t["Plural-Forms"]||t["plural-forms"]||t.plural_forms),s=function(e){var r=function(e){for(var r,t,n,i,s=[],o=[];r=e.match(d);){for(t=r[0],(n=e.substr(0,r.index).trim())&&s.push(n);i=o.pop();){if(l[t]){if(l[t][0]===i){t=l[t][1]||t;break}}else if(u.indexOf(i)>=0||a[i]<a[t]){o.push(i);break}s.push(i)}l[t]||o.push(t),e=e.substr(r.index+t.length)}return(e=e.trim())&&s.push(e),s.concat(o.reverse())}(e);return function(e){return function(e,r){var t,n,i,s,o,c,a=[];for(t=0;t<e.length;t++){if(o=e[t],s=p[o]){for(n=s.length,i=Array(n);n--;)i[n]=a.pop();try{c=s.apply(null,i)}catch(e){return e}}else c=r.hasOwnProperty(o)?r[o]:+o;a.push(c)}return a[0]}(r,e)}}(n),i=function(e){return+s({n:e})}),o=this.pluralForms[e]=i),o(r)},f.prototype.dcnpgettext=function(e,r,t,n,i){var s,o,c;return s=void 0===i?0:this.getPluralForm(e,i),o=t,r&&(o=r+this.options.contextDelimiter+t),(c=this.data[e][o])&&c[s]?c[s]:(this.options.onMissingKey&&this.options.onMissingKey(t,e),0===s?t:n)};const _={plural_forms(e){return 1===e?0:1}},v=/^i18n\.(n?gettext|has_translation)(_|$)/,m=((e,r,t)=>{const n=new f({}),i=new Set,s=()=>{i.forEach((e=>e()))},o=(e,r="default")=>{n.data[r]={...n.data[r],...e},n.data[r][""]={..._,...n.data[r]?.[""]},delete n.pluralForms[r]},c=(e,r)=>{o(e,r),s()},a=(e="default",r,t,i,s)=>(n.data[e]||o(void 0,e),n.dcnpgettext(e,r,t,i,s)),u=(e="default")=>e,_x=(e,r,n)=>{let i=a(n,r,e);return t?(i=t.applyFilters("i18n.gettext_with_context",i,e,r,n),t.applyFilters("i18n.gettext_with_context_"+u(n),i,e,r,n)):i};if(t){const e=e=>{v.test(e)&&s()};t.addAction("hookAdded","core/i18n",e),t.addAction("hookRemoved","core/i18n",e)}return{getLocaleData:(e="default")=>n.data[e],setLocaleData:c,addLocaleData:(e,r="default")=>{n.data[r]={...n.data[r],...e,"":{..._,...n.data[r]?.[""],...e?.[""]}},delete n.pluralForms[r],s()},resetLocaleData:(e,r)=>{n.data={},n.pluralForms={},c(e,r)},subscribe:e=>(i.add(e),()=>i.delete(e)),__:(e,r)=>{let n=a(r,void 0,e);return t?(n=t.applyFilters("i18n.gettext",n,e,r),t.applyFilters("i18n.gettext_"+u(r),n,e,r)):n},_x:_x,_n:(e,r,n,i)=>{let s=a(i,void 0,e,r,n);return t?(s=t.applyFilters("i18n.ngettext",s,e,r,n,i),t.applyFilters("i18n.ngettext_"+u(i),s,e,r,n,i)):s},_nx:(e,r,n,i,s)=>{let o=a(s,i,e,r,n);return t?(o=t.applyFilters("i18n.ngettext_with_context",o,e,r,n,i,s),t.applyFilters("i18n.ngettext_with_context_"+u(s),o,e,r,n,i,s)):o},isRTL:()=>"rtl"===_x("ltr","text direction"),hasTranslation:(e,r,i)=>{const s=r?r+""+e:e;let o=!!n.data?.[null!=i?i:"default"]?.[s];return t&&(o=t.applyFilters("i18n.has_translation",o,e,r,i),o=t.applyFilters("i18n.has_translation_"+u(i),o,e,r,i)),o}}})(0,0,i.d);m.getLocaleData.bind(m),m.setLocaleData.bind(m),m.resetLocaleData.bind(m),m.subscribe.bind(m);const __=m.__.bind(m),_x=m._x.bind(m),_n=m._n.bind(m);m._nx.bind(m),m.isRTL.bind(m),m.hasTranslation.bind(m)},4777:function(e,r,t){function n(e){return"string"!=typeof e||""===e?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)}function i(e){return"string"!=typeof e||""===e?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(e)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)}function s(e,r){return function(t,s,o,c=10){const a=e[r];if(!i(t))return;if(!n(s))return;if("function"!=typeof o)return void console.error("The hook callback must be a function.");if("number"!=typeof c)return void console.error("If specified, the hook priority must be a number.");const u={callback:o,priority:c,namespace:s};if(a[t]){const e=a[t].handlers;let r;for(r=e.length;r>0&&!(c>=e[r-1].priority);r--);r===e.length?e[r]=u:e.splice(r,0,u),a.__current.forEach((e=>{e.name===t&&e.currentIndex>=r&&e.currentIndex++}))}else a[t]={handlers:[u],runs:0};"hookAdded"!==t&&e.doAction("hookAdded",t,s,o,c)}}function o(e,r,t=!1){return function(s,o){const c=e[r];if(!i(s))return;if(!t&&!n(o))return;if(!c[s])return 0;let a=0;if(t)a=c[s].handlers.length,c[s]={runs:c[s].runs,handlers:[]};else{const e=c[s].handlers;for(let r=e.length-1;r>=0;r--)e[r].namespace===o&&(e.splice(r,1),a++,c.__current.forEach((e=>{e.name===s&&e.currentIndex>=r&&e.currentIndex--})))}return"hookRemoved"!==s&&e.doAction("hookRemoved",s,o),a}}function c(e,r){return function(t,n){const i=e[r];return void 0!==n?t in i&&i[t].handlers.some((e=>e.namespace===n)):t in i}}function a(e,r,t=!1){return function(n,...i){const s=e[r];s[n]||(s[n]={handlers:[],runs:0}),s[n].runs++;const o=s[n].handlers;if(!o||!o.length)return t?i[0]:void 0;const c={name:n,currentIndex:0};for(s.__current.push(c);c.currentIndex<o.length;){const e=o[c.currentIndex].callback.apply(null,i);t&&(i[0]=e),c.currentIndex++}return s.__current.pop(),t?i[0]:void 0}}function u(e,r){return function(){var t;const n=e[r];return null!==(t=n.__current[n.__current.length-1]?.name)&&void 0!==t?t:null}}function l(e,r){return function(t){const n=e[r];return void 0===t?void 0!==n.__current[0]:!!n.__current[0]&&t===n.__current[0].name}}function d(e,r){return function(t){const n=e[r];if(i(t))return n[t]&&n[t].runs?n[t].runs:0}}t.d(r,{a:function(){return w},d:function(){return p}});const p=new class{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=s(this,"actions"),this.addFilter=s(this,"filters"),this.removeAction=o(this,"actions"),this.removeFilter=o(this,"filters"),this.hasAction=c(this,"actions"),this.hasFilter=c(this,"filters"),this.removeAllActions=o(this,"actions",!0),this.removeAllFilters=o(this,"filters",!0),this.doAction=a(this,"actions"),this.applyFilters=a(this,"filters",!0),this.currentAction=u(this,"actions"),this.currentFilter=u(this,"filters"),this.doingAction=l(this,"actions"),this.doingFilter=l(this,"filters"),this.didAction=d(this,"actions"),this.didFilter=d(this,"filters")}},{addAction:h,addFilter:f,removeAction:_,removeFilter:v,hasAction:m,hasFilter:g,removeAllActions:y,removeAllFilters:b,doAction:x,applyFilters:w,currentAction:k,currentFilter:F,doingAction:A,doingFilter:S,didAction:P,didFilter:$,actions:I,filters:C}=p},8983:function(e,r,t){t.d(r,{a:function(){return s},b:function(){return h},c:function(){return c},g:function(){return o},i:function(){return u},p:function(){return p},t:function(){return a}});var n=t(9955),i=t(3530);const s=e=>(null==e?void 0:e.amount_off)&&(null==e?void 0:e.currency)?o({amount:e.amount_off,currency:e.currency}):(null==e?void 0:e.percent_off)?(0,n.s)((0,n._)("%1d%% off","surecart"),0|e.percent_off):"",o=({amount:e,currency:r})=>{const t=((e,r)=>i.z.includes(r)?e:e/100)(e,r);return`${new Intl.NumberFormat(void 0,{style:"currency",currency:r}).format(parseFloat(t.toFixed(2)))}`},c=(e="usd")=>{var r;return null===(r=new Intl.NumberFormat(void 0,{style:"currency",currency:e}).formatToParts().find((e=>"currency"===e.type)))||void 0===r?void 0:r.value},a=(e,r,t=(0,n._)("every","surecart"),i=(0,n._)("once","surecart"),s=!1)=>{switch(r){case"day":return`${t} ${(0,n.s)(s?(0,n.a)("%d day","%d days",e,"surecart"):(0,n.a)("day","%d days",e,"surecart"),e)}`;case"week":return`${t} ${(0,n.s)(s?(0,n.a)("%d week","%d weeks",e,"surecart"):(0,n.a)("week","%d weeks",e,"surecart"),e)}`;case"month":return`${t} ${(0,n.s)(s?(0,n.a)("%d month","%d months",e,"surecart"):(0,n.a)("month","%d months",e,"surecart"),e)}`;case"year":return`${t} ${(0,n.s)(s?(0,n.a)("%d year","%d years",e,"surecart"):(0,n.a)("year","%d years",e,"surecart"),e)}`;default:return i}},u=(e,r={})=>{if(!e)return"";const{showOnce:t,labels:i,abbreviate:s}=r,{interval:o=(0,n._)("every","surecart")}=i||{};return`${l(e,o,t?(0,n._)("once","surecart"):"",s)} ${d(e,s)}`},l=(e,r,t=(0,n._)("once","surecart"),i=!1)=>e.recurring_interval_count&&e.recurring_interval&&1!==(null==e?void 0:e.recurring_period_count)?i?((e,r,t=(0,n._)("once","surecart"),i=!1)=>{switch(r){case"day":return` / ${(0,n.s)(i?(0,n.a)("%d day","%d days",e,"surecart"):(0,n.a)("day","%d days",e,"surecart"),e)}`;case"week":return` / ${(0,n.s)(i?(0,n.a)("%d wk","%d wks",e,"surecart"):(0,n.a)("wk","%d wks",e,"surecart"),e)}`;case"month":return` / ${(0,n.s)(i?(0,n.a)("%d mo","%d months",e,"surecart"):(0,n.a)("mo","%d mos",e,"surecart"),e)}`;case"year":return` / ${(0,n.s)(i?(0,n.a)("%d yr","%d yrs",e,"surecart"):(0,n.a)("yr","%d yrs",e,"surecart"),e)}`;default:return t}})(e.recurring_interval_count,e.recurring_interval,t):a(e.recurring_interval_count,e.recurring_interval,` ${r}`,t):"",d=(e,r=!1)=>(null==e?void 0:e.recurring_period_count)&&1!==(null==e?void 0:e.recurring_period_count)?r?`x ${e.recurring_period_count}`:` (${(0,n.s)((0,n.a)("%d payment","%d payments",e.recurring_period_count,"surecart"),e.recurring_period_count)})`:"",p=e=>{var r;return e?`${null===(r=null==e?void 0:e.product)||void 0===r?void 0:r.name} ${(null==e?void 0:e.name)?`— ${e.name}`:""}`:""},h=e=>{switch(e){case"invalid":return(0,n._)("Not valid","surecart");case"expired":return(0,n._)("Expired","surecart");case"gone":return(0,n._)("Not available","surecart");case"less_than_min_subtotal_amount":return(0,n._)("Minimum not met","surecart");case"greater_than_max_subtotal_amount":return(0,n._)("Order too large","surecart");case"not_applicable":return(0,n._)("Product(s) not eligible","surecart");case"not_applicable_to_customer":return(0,n._)("Not eligible","surecart");case"":return"";default:return(0,n._)("Not redeemable","surecart")}}},5947:function(e,r,t){t.r(r),t.d(r,{sc_recurring_price_choice_container:function(){return o}});var n=t(6892),i=t(9955),s=t(8983);t(4777);const o=class{constructor(e){(0,n.r)(this,e),this.scChange=(0,n.c)(this,"scChange",7),this.prices=void 0,this.selectedPrice=void 0,this.selectedOption=void 0,this.product=void 0,this.label=void 0,this.showControl=!1,this.showAmount=!0,this.showDetails=!0}renderPrice(e){return(0,n.h)("sc-format-number",{type:"currency",value:null==e?void 0:e.amount,currency:null==e?void 0:e.currency})}value(){return this.prices.find((e=>{var r;return e.id===(null===(r=this.selectedPriceState())||void 0===r?void 0:r.id)}))||this.prices[0]}selectedPriceState(){return this.prices.find((e=>{var r;return e.id===(null===(r=this.selectedPrice)||void 0===r?void 0:r.id)}))||this.selectedOption||this.prices[0]}render(){var e,r,t,o,c,a,u,l,d,p,h,f,_,v;return(null===(e=this.prices)||void 0===e?void 0:e.length)?(0,n.h)("sc-choice-container",{value:null===(r=this.selectedPrice)||void 0===r?void 0:r.id,type:"radio",showControl:this.showControl,checked:this.prices.some((e=>{var r;return e.id===(null===(r=this.selectedPrice)||void 0===r?void 0:r.id)})),onScChange:e=>{var r;e.stopPropagation(),this.scChange.emit(null===(r=this.value())||void 0===r?void 0:r.id)},role:"button"},(0,n.h)("div",{class:"recurring-price-choice"},(0,n.h)("div",{class:"recurring-price-choice__control"},(0,n.h)("div",{class:"recurring-price-choice__name"},(0,n.h)("slot",null,this.label)),(null===(t=this.prices)||void 0===t?void 0:t.length)>1&&(0,n.h)("div",{class:"recurring-price-choice__description"},(0,n.h)("sc-dropdown",{style:{"--panel-width":"max(100%, 11rem)","--sc-menu-item-white-space":"wrap"}},(0,n.h)("button",{class:"recurring-price-choice__button",slot:"trigger","aria-label":(0,i._)("Press Up/Down Arrow & select the recurring interval you want.","surecart")},(null===(o=this.value())||void 0===o?void 0:o.name)||((null===(c=this.value())||void 0===c?void 0:c.recurring_interval)?(0,s.i)(this.value(),{showOnce:!0,abbreviate:!1,labels:{interval:(0,i._)("Every","surecart"),period:/** translators: used as in time period: "for 3 months" */ /** translators: used as in time period: "for 3 months" */
(0,i._)("for","surecart")}}):this.product.name),(0,n.h)("sc-icon",{style:{minWidth:"var(--width)"},name:"chevron-down"})),(0,n.h)("sc-menu",{"aria-label":(0,i._)("Recurring Interval selection Dropdown opened, Press Up/Down Arrow & select the recurring interval you want.","surecart")},(this.prices||[]).map((e=>{var r;const t=(null==e?void 0:e.id)===(null===(r=this.selectedPriceState())||void 0===r?void 0:r.id),o=(null==e?void 0:e.name)||((null==e?void 0:e.recurring_interval)?(0,s.i)(e,{showOnce:!0,abbreviate:!1,labels:{interval:(0,i._)("Every","surecart"),period:/** translators: used as in time period: "for 3 months" */ /** translators: used as in time period: "for 3 months" */
(0,i._)("for","surecart")}}):this.product.name);return(0,n.h)("sc-menu-item",{onClick:()=>{this.selectedOption=e,this.scChange.emit(null==e?void 0:e.id)},checked:t,"aria-label":o},o,this.showAmount&&(0,n.h)("span",{slot:"suffix"},this.renderPrice(e)))})))))),this.showDetails&&(0,n.h)("div",{class:"recurring-price-choice__details"},(0,n.h)("div",{class:"recurring-price-choice__price"},(null===(a=this.selectedPriceState())||void 0===a?void 0:a.ad_hoc)?(0,i._)("Custom Amount","surecart"):(0,n.h)(n.F,null,(0,n.h)("sc-format-number",{type:"currency",value:null===(u=this.selectedPriceState())||void 0===u?void 0:u.amount,currency:null===(l=this.selectedPriceState())||void 0===l?void 0:l.currency}),(0,s.i)(this.selectedPriceState(),{showOnce:!0,abbreviate:!0,labels:{interval:"/",period:/** translators: used as in time period: "for 3 months" */ /** translators: used as in time period: "for 3 months" */
(0,i._)("for","surecart")}}))),!!(null===(d=this.selectedPriceState())||void 0===d?void 0:d.trial_duration_days)&&(0,n.h)("div",{class:"recurring-price-choice__trial"},(0,i.s)((0,i.a)("Starting in %s day","Starting in %s days",this.selectedPriceState().trial_duration_days,"surecart"),this.selectedPriceState().trial_duration_days)),!!(null===(p=this.selectedPriceState())||void 0===p?void 0:p.setup_fee_enabled)&&(null===(h=this.selectedPriceState())||void 0===h?void 0:h.setup_fee_amount)&&(0,n.h)("div",{class:"recurring-price-choice__setup-fee"},(0,n.h)("sc-format-number",{type:"currency",value:Math.abs(this.selectedPriceState().setup_fee_amount),currency:null===(f=this.selectedPriceState())||void 0===f?void 0:f.currency})," ",(null===(_=this.selectedPriceState())||void 0===_?void 0:_.setup_fee_name)||((null===(v=this.selectedPriceState())||void 0===v?void 0:v.setup_fee_amount)<0?(0,i._)("Discount","surecart"):(0,i._)("Setup Fee","surecart")))))):(0,n.h)(n.H,{style:{display:"none"}})}};o.style=".recurring-price-choice{display:flex;justify-content:space-between;gap:var(--sc-spacing-x-small);flex-wrap:wrap}.recurring-price-choice__name{font-weight:var(--sc-font-weight-semibold);cursor:pointer}.recurring-price-choice__control{flex:1;display:flex;flex-direction:column;gap:var(--sc-spacing-x-small);align-self:center}.recurring-price-choice__details{align-self:center;display:flex;align-items:flex-end;flex-direction:column;gap:var(--sc-spacing-xx-small)}.recurring-price-choice__button{font-size:var(--sc-font-size-small);appearance:none;display:flex;align-items:center;gap:var(--sc-spacing-xx-small);text-decoration:none;user-select:none;white-space:var(--sc-recurring-price-choice-white-space, nowrap);text-align:var(--sc-recurring-price-choice-text-align, center);vertical-align:middle;padding:13px;margin:-13px;border:none;background:transparent;font-size:inherit;color:inherit;border-radius:var(--sc-input-border-radius-medium);opacity:0.8;cursor:pointer}.recurring-price-choice__button:focus-visible{outline:1px solid var(--sc-color-primary-500);outline-offset:4px}.recurring-price-choice__trial,.recurring-price-choice__setup-fee,.recurring-price-choice__price{font-size:var(--sc-font-size-small);opacity:0.8}sc-dropdown{width:100%}sc-choice-container:not([checked]) sc-dropdown{pointer-events:none}"}}]);