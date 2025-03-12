"use strict";(self.webpackChunk_surecart_blocks_next=self.webpackChunk_surecart_blocks_next||[]).push([[8777],{1847:function(e,t,n){function r(e){let t="";const n=Object.entries(e);let r;for(;r=n.shift();){let[e,i]=r;if(Array.isArray(i)||i&&i.constructor===Object){const t=Object.entries(i).reverse();for(const[r,i]of t)n.unshift([`${e}[${r}]`,i])}else void 0!==i&&(null===i&&(i=""),t+="&"+[e,i].map(encodeURIComponent).join("="))}return t.substr(1)}function i(e){try{return decodeURIComponent(e)}catch(t){return e}}function o(e){return(function(e){let t;try{t=new URL(e,"http://example.com").search.substring(1)}catch(e){}if(t)return t}(e)||"").replace(/\+/g,"%20").split("&").reduce(((e,t)=>{const[n,r=""]=t.split("=").filter(Boolean).map(i);return n&&function(e,t,n){const r=t.length,i=r-1;for(let o=0;o<r;o++){let r=t[o];!r&&Array.isArray(e)&&(r=e.length.toString()),r=["__proto__","constructor","prototype"].includes(r)?r.toUpperCase():r;const s=!isNaN(Number(t[o+1]));e[r]=o===i?n:e[r]||(s?[]:{}),Array.isArray(e[r])&&!s&&(e[r]={...e[r]}),e=e[r]}}(e,n.replace(/\]/g,"").split("["),r),e}),Object.create(null))}function s(e="",t){if(!t||!Object.keys(t).length)return e;let n=e;const i=e.indexOf("?");return-1!==i&&(t=Object.assign(o(e),t),n=n.substr(0,i)),n+"?"+r(t)}n.d(t,{a:function(){return s},b:function(){return r},g:function(){return o}})},9955:function(e,t,n){n.d(t,{_:function(){return __},a:function(){return _n},b:function(){return _x},s:function(){return a}});var r,i=n(4777),o={};r=o,function(){var e={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function t(n){return function(n,r){var i,o,s,a,c,l,u,d,h,p=1,f=n.length,g="";for(o=0;o<f;o++)if("string"==typeof n[o])g+=n[o];else if("object"==typeof n[o]){if((a=n[o]).keys)for(i=r[p],s=0;s<a.keys.length;s++){if(null==i)throw new Error(t('[sprintf] Cannot access property "%s" of undefined value "%s"',a.keys[s],a.keys[s-1]));i=i[a.keys[s]]}else i=a.param_no?r[a.param_no]:r[p++];if(e.not_type.test(a.type)&&e.not_primitive.test(a.type)&&i instanceof Function&&(i=i()),e.numeric_arg.test(a.type)&&"number"!=typeof i&&isNaN(i))throw new TypeError(t("[sprintf] expecting number but found %T",i));switch(e.number.test(a.type)&&(d=i>=0),a.type){case"b":i=parseInt(i,10).toString(2);break;case"c":i=String.fromCharCode(parseInt(i,10));break;case"d":case"i":i=parseInt(i,10);break;case"j":i=JSON.stringify(i,null,a.width?parseInt(a.width):0);break;case"e":i=a.precision?parseFloat(i).toExponential(a.precision):parseFloat(i).toExponential();break;case"f":i=a.precision?parseFloat(i).toFixed(a.precision):parseFloat(i);break;case"g":i=a.precision?String(Number(i.toPrecision(a.precision))):parseFloat(i);break;case"o":i=(parseInt(i,10)>>>0).toString(8);break;case"s":i=String(i),i=a.precision?i.substring(0,a.precision):i;break;case"t":i=String(!!i),i=a.precision?i.substring(0,a.precision):i;break;case"T":i=Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),i=a.precision?i.substring(0,a.precision):i;break;case"u":i=parseInt(i,10)>>>0;break;case"v":i=i.valueOf(),i=a.precision?i.substring(0,a.precision):i;break;case"x":i=(parseInt(i,10)>>>0).toString(16);break;case"X":i=(parseInt(i,10)>>>0).toString(16).toUpperCase()}e.json.test(a.type)?g+=i:(!e.number.test(a.type)||d&&!a.sign?h="":(h=d?"+":"-",i=i.toString().replace(e.sign,"")),l=a.pad_char?"0"===a.pad_char?"0":a.pad_char.charAt(1):" ",u=a.width-(h+i).length,c=a.width&&u>0?l.repeat(u):"",g+=a.align?h+i+c:"0"===l?h+c+i:c+h+i)}return g}(function(t){if(i[t])return i[t];for(var n,r=t,o=[],s=0;r;){if(null!==(n=e.text.exec(r)))o.push(n[0]);else if(null!==(n=e.modulo.exec(r)))o.push("%");else{if(null===(n=e.placeholder.exec(r)))throw new SyntaxError("[sprintf] unexpected placeholder");if(n[2]){s|=1;var a=[],c=n[2],l=[];if(null===(l=e.key.exec(c)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(a.push(l[1]);""!==(c=c.substring(l[0].length));)if(null!==(l=e.key_access.exec(c)))a.push(l[1]);else{if(null===(l=e.index_access.exec(c)))throw new SyntaxError("[sprintf] failed to parse named argument key");a.push(l[1])}n[2]=a}else s|=2;if(3===s)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");o.push({placeholder:n[0],param_no:n[1],keys:n[2],sign:n[3],pad_char:n[4],align:n[5],width:n[6],precision:n[7],type:n[8]})}r=r.substring(n[0].length)}return i[t]=o}(n),arguments)}function n(e,n){return t.apply(null,[e].concat(n||[]))}var i=Object.create(null);r.sprintf=t,r.vsprintf=n,"undefined"!=typeof window&&(window.sprintf=t,window.vsprintf=n)}();const s=function(e,t){var n,r,i=0;function o(){var o,s,a=n,c=arguments.length;e:for(;a;){if(a.args.length===arguments.length){for(s=0;s<c;s++)if(a.args[s]!==arguments[s]){a=a.next;continue e}return a!==n&&(a===r&&(r=a.prev),a.prev.next=a.next,a.next&&(a.next.prev=a.prev),a.next=n,a.prev=null,n.prev=a,n=a),a.val}a=a.next}for(o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return a={args:o,val:e.apply(null,o)},n?(n.prev=a,a.next=n):r=a,i===t.maxSize?(r=r.prev).next=null:i++,n=a,a.val}return t=t||{},o.clear=function(){n=null,r=null,i=0},o}(console.error);function a(e,...t){try{return o.sprintf(e,...t)}catch(t){return t instanceof Error&&s("sprintf error: \n\n"+t.toString()),e}}var c,l,u,d;c={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},l=["(","?"],u={")":["("],":":["?","?:"]},d=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;var h={"!":function(e){return!e},"*":function(e,t){return e*t},"/":function(e,t){return e/t},"%":function(e,t){return e%t},"+":function(e,t){return e+t},"-":function(e,t){return e-t},"<":function(e,t){return e<t},"<=":function(e,t){return e<=t},">":function(e,t){return e>t},">=":function(e,t){return e>=t},"==":function(e,t){return e===t},"!=":function(e,t){return e!==t},"&&":function(e,t){return e&&t},"||":function(e,t){return e||t},"?:":function(e,t,n){if(e)throw t;return n}};var p={contextDelimiter:"",onMissingKey:null};function f(e,t){var n;for(n in this.data=e,this.pluralForms={},this.options={},p)this.options[n]=void 0!==t&&n in t?t[n]:p[n]}f.prototype.getPluralForm=function(e,t){var n,r,i,o,s=this.pluralForms[e];return s||("function"!=typeof(i=(n=this.data[e][""])["Plural-Forms"]||n["plural-forms"]||n.plural_forms)&&(r=function(e){var t,n,r;for(t=e.split(";"),n=0;n<t.length;n++)if(0===(r=t[n].trim()).indexOf("plural="))return r.substr(7)}(n["Plural-Forms"]||n["plural-forms"]||n.plural_forms),o=function(e){var t=function(e){for(var t,n,r,i,o=[],s=[];t=e.match(d);){for(n=t[0],(r=e.substr(0,t.index).trim())&&o.push(r);i=s.pop();){if(u[n]){if(u[n][0]===i){n=u[n][1]||n;break}}else if(l.indexOf(i)>=0||c[i]<c[n]){s.push(i);break}o.push(i)}u[n]||s.push(n),e=e.substr(t.index+n.length)}return(e=e.trim())&&o.push(e),o.concat(s.reverse())}(e);return function(e){return function(e,t){var n,r,i,o,s,a,c=[];for(n=0;n<e.length;n++){if(s=e[n],o=h[s]){for(r=o.length,i=Array(r);r--;)i[r]=c.pop();try{a=o.apply(null,i)}catch(e){return e}}else a=t.hasOwnProperty(s)?t[s]:+s;c.push(a)}return c[0]}(t,e)}}(r),i=function(e){return+o({n:e})}),s=this.pluralForms[e]=i),s(t)},f.prototype.dcnpgettext=function(e,t,n,r,i){var o,s,a;return o=void 0===i?0:this.getPluralForm(e,i),s=n,t&&(s=t+this.options.contextDelimiter+n),(a=this.data[e][s])&&a[o]?a[o]:(this.options.onMissingKey&&this.options.onMissingKey(n,e),0===o?n:r)};const g={plural_forms(e){return 1===e?0:1}},v=/^i18n\.(n?gettext|has_translation)(_|$)/,m=((e,t,n)=>{const r=new f({}),i=new Set,o=()=>{i.forEach((e=>e()))},s=(e,t="default")=>{r.data[t]={...r.data[t],...e},r.data[t][""]={...g,...r.data[t]?.[""]},delete r.pluralForms[t]},a=(e,t)=>{s(e,t),o()},c=(e="default",t,n,i,o)=>(r.data[e]||s(void 0,e),r.dcnpgettext(e,t,n,i,o)),l=(e="default")=>e,_x=(e,t,r)=>{let i=c(r,t,e);return n?(i=n.applyFilters("i18n.gettext_with_context",i,e,t,r),n.applyFilters("i18n.gettext_with_context_"+l(r),i,e,t,r)):i};if(n){const e=e=>{v.test(e)&&o()};n.addAction("hookAdded","core/i18n",e),n.addAction("hookRemoved","core/i18n",e)}return{getLocaleData:(e="default")=>r.data[e],setLocaleData:a,addLocaleData:(e,t="default")=>{r.data[t]={...r.data[t],...e,"":{...g,...r.data[t]?.[""],...e?.[""]}},delete r.pluralForms[t],o()},resetLocaleData:(e,t)=>{r.data={},r.pluralForms={},a(e,t)},subscribe:e=>(i.add(e),()=>i.delete(e)),__:(e,t)=>{let r=c(t,void 0,e);return n?(r=n.applyFilters("i18n.gettext",r,e,t),n.applyFilters("i18n.gettext_"+l(t),r,e,t)):r},_x:_x,_n:(e,t,r,i)=>{let o=c(i,void 0,e,t,r);return n?(o=n.applyFilters("i18n.ngettext",o,e,t,r,i),n.applyFilters("i18n.ngettext_"+l(i),o,e,t,r,i)):o},_nx:(e,t,r,i,o)=>{let s=c(o,i,e,t,r);return n?(s=n.applyFilters("i18n.ngettext_with_context",s,e,t,r,i,o),n.applyFilters("i18n.ngettext_with_context_"+l(o),s,e,t,r,i,o)):s},isRTL:()=>"rtl"===_x("ltr","text direction"),hasTranslation:(e,t,i)=>{const o=t?t+""+e:e;let s=!!r.data?.[null!=i?i:"default"]?.[o];return n&&(s=n.applyFilters("i18n.has_translation",s,e,t,i),s=n.applyFilters("i18n.has_translation_"+l(i),s,e,t,i)),s}}})(0,0,i.d);m.getLocaleData.bind(m),m.setLocaleData.bind(m),m.resetLocaleData.bind(m),m.subscribe.bind(m);const __=m.__.bind(m),_x=m._x.bind(m),_n=m._n.bind(m);m._nx.bind(m),m.isRTL.bind(m),m.hasTranslation.bind(m)},9663:function(e,t,n){n.d(t,{a:function(){return k},h:function(){return S}});var r=n(9955),i=n(1847),o=n(1692);function s(e,t){return void 0!==(0,o.g)(e,t)}function a(e){const t=e.split("?"),n=t[1],r=t[0];return n?r+"?"+n.split("&").map((e=>e.split("="))).map((e=>e.map(decodeURIComponent))).sort(((e,t)=>e[0].localeCompare(t[0]))).map((e=>e.map(encodeURIComponent))).map((e=>e.join("="))).join("&"):r}const c=(e,t)=>{let n,r,i=e.path;return"string"==typeof e.namespace&&"string"==typeof e.endpoint&&(n=e.namespace.replace(/^\/|\/$/g,""),r=e.endpoint.replace(/^\//,""),i=r?n+"/"+r:n),delete e.namespace,delete e.endpoint,t({...e,path:i})};function l(e,t){return Promise.resolve(t?e.body:new window.Response(JSON.stringify(e.body),{status:200,statusText:"OK",headers:e.headers}))}const u=({path:e,url:t,...n},r)=>({...n,url:t&&(0,i.a)(t,r),path:e&&(0,i.a)(e,r)}),d=e=>e.json?e.json():Promise.reject(e),h=e=>{const{next:t}=(e=>{if(!e)return{};const t=e.match(/<([^>]+)>; rel="next"/);return t?{next:t[1]}:{}})(e.headers.get("link"));return t},p=async(e,t)=>{if(!1===e.parse)return t(e);if(!(e=>{const t=!!e.path&&-1!==e.path.indexOf("per_page=-1"),n=!!e.url&&-1!==e.url.indexOf("per_page=-1");return t||n})(e))return t(e);const n=await k({...u(e,{per_page:100}),parse:!1}),r=await d(n);if(!Array.isArray(r))return r;let i=h(n);if(!i)return r;let o=[].concat(r);for(;i;){const t=await k({...e,path:void 0,url:i,parse:!1}),n=await d(t);o=o.concat(n),i=h(t)}return o},f=new Set(["PATCH","PUT","DELETE"]),g="GET",v=(e,t=!0)=>Promise.resolve(((e,t=!0)=>t?204===e.status?null:e.json?e.json():Promise.reject(e):e)(e,t)).catch((e=>m(e,t)));function m(e,t=!0){if(!t)throw e;return(e=>{const t={code:"invalid_json",message:(0,r._)("The response is not a valid JSON response.")};if(!e||!e.json)throw t;return e.json().catch((()=>{throw t}))})(e).then((e=>{const t={code:"unknown_error",message:(0,r._)("An unknown error occurred.")};throw e||t}))}const w={Accept:"application/json, */*;q=0.1"},_={credentials:"include"},y=[(e,t)=>("string"!=typeof e.url||s(e.url,"_locale")||(e.url=(0,i.a)(e.url,{_locale:"user"})),"string"!=typeof e.path||s(e.path,"_locale")||(e.path=(0,i.a)(e.path,{_locale:"user"})),t(e)),c,(e,t)=>{const{method:n=g}=e;return f.has(n.toUpperCase())&&(e={...e,headers:{...e.headers,"X-HTTP-Method-Override":n,"Content-Type":"application/json"},method:"POST"}),t(e)},p],b=e=>{if(e.status>=200&&e.status<300)return e;throw e};let x=e=>{const{url:t,path:n,data:i,parse:o=!0,...s}=e;let{body:a,headers:c}=e;return c={...w,...c},i&&(a=JSON.stringify(i),c["Content-Type"]="application/json"),window.fetch(t||n||window.location.href,{..._,...s,body:a,headers:c}).then((e=>Promise.resolve(e).then(b).catch((e=>m(e,o))).then((e=>v(e,o)))),(e=>{if(e&&"AbortError"===e.name)throw e;throw{code:"fetch_error",message:(0,r._)("You are probably offline.")}}))};function k(e){return y.reduceRight(((e,t)=>n=>t(n,e)),x)(e).catch((t=>"rest_cookie_invalid_nonce"!==t.code?Promise.reject(t):window.fetch(k.nonceEndpoint).then(b).then((e=>e.text())).then((t=>(k.nonceMiddleware.nonce=t,k(e))))))}var A,j,F,P,I,O,T;k.use=function(e){y.unshift(e)},k.setFetchHandler=function(e){x=e},k.createNonceMiddleware=function(e){const t=(e,n)=>{const{headers:r={}}=e;for(const i in r)if("x-wp-nonce"===i.toLowerCase()&&r[i]===t.nonce)return n(e);return n({...e,headers:{...r,"X-WP-Nonce":t.nonce}})};return t.nonce=e,t},k.createPreloadingMiddleware=function(e){const t=Object.fromEntries(Object.entries(e).map((([e,t])=>[a(e),t])));return(e,n)=>{const{parse:r=!0}=e;let o=e.path;if(!o&&e.url){const{rest_route:t,...n}=(0,i.g)(e.url);"string"==typeof t&&(o=(0,i.a)(t,n))}if("string"!=typeof o)return n(e);const s=e.method||"GET",c=a(o);if("GET"===s&&t[c]){const e=t[c];return delete t[c],l(e,!!r)}if("OPTIONS"===s&&t[s]&&t[s][c]){const e=t[s][c];return delete t[s][c],l(e,!!r)}return n(e)}},k.createRootURLMiddleware=e=>(t,n)=>c(t,(t=>{let r,i=t.url,o=t.path;return"string"==typeof o&&(r=e,-1!==e.indexOf("?")&&(o=o.replace("?","&")),o=o.replace(/^\//,""),"string"==typeof r&&-1!==r.indexOf("?")&&(o=o.replace("?","&")),i=r+o),n({...t,url:i})})),k.fetchAllMiddleware=p,k.mediaUploadMiddleware=(e,t)=>{if(!function(e){const t=!!e.method&&"POST"===e.method;return(!!e.path&&-1!==e.path.indexOf("/wp/v2/media")||!!e.url&&-1!==e.url.indexOf("/wp/v2/media"))&&t}(e))return t(e);let n=0;const i=e=>(n++,t({path:`/wp/v2/media/${e}/post-process`,method:"POST",data:{action:"create-image-subsizes"},parse:!1}).catch((()=>n<5?i(e):(t({path:`/wp/v2/media/${e}?force=true`,method:"DELETE"}),Promise.reject()))));return t({...e,parse:!1}).catch((t=>{const n=t.headers.get("x-wp-upload-attachment-id");return t.status>=500&&t.status<600&&n?i(n).catch((()=>!1!==e.parse?Promise.reject({code:"post_process",message:(0,r._)("Media upload failed. If this is a photo or a large image, please scale it down and try again.")}):Promise.reject(t))):m(t,e.parse)})).then((t=>v(t,e.parse)))},k.createThemePreviewMiddleware=e=>(t,n)=>{if("string"==typeof t.url){const n=(0,o.g)(t.url,"wp_theme_preview");void 0===n?t.url=(0,i.a)(t.url,{wp_theme_preview:e}):""===n&&(t.url=(0,o.r)(t.url,"wp_theme_preview"))}if("string"==typeof t.path){const n=(0,o.g)(t.path,"wp_theme_preview");void 0===n?t.path=(0,i.a)(t.path,{wp_theme_preview:e}):""===n&&(t.path=(0,o.r)(t.path,"wp_theme_preview"))}return n(t)},k.fetchAllMiddleware=null,k.use(k.createRootURLMiddleware((null===(j=null===(A=null===window||void 0===window?void 0:window.parent)||void 0===A?void 0:A.scData)||void 0===j?void 0:j.root_url)||(null===(F=null===window||void 0===window?void 0:window.scData)||void 0===F?void 0:F.root_url))),(null===(P=null===window||void 0===window?void 0:window.scData)||void 0===P?void 0:P.nonce)&&(k.nonceMiddleware=k.createNonceMiddleware(null===(I=null===window||void 0===window?void 0:window.scData)||void 0===I?void 0:I.nonce),k.use(k.nonceMiddleware)),(null===(O=null===window||void 0===window?void 0:window.scData)||void 0===O?void 0:O.nonce_endpoint)&&(k.nonceEndpoint=null===(T=null===window||void 0===window?void 0:window.scData)||void 0===T?void 0:T.nonce_endpoint),k.use(((e,t)=>(e.path=(0,i.a)(e.path,{t:Date.now()}),t(e)))),k.use(((e,t)=>(e.path=(0,i.a)(e.path,{...!!(0,o.g)(window.location.href,"currency")&&{currency:(0,o.g)(window.location.href,"currency")}}),t(e)))),k.use(((e,t)=>{const n=t(e);return n.catch((e=>{if("invalid_json"===e.code){e.message=(0,r._)("The response is not a valid JSON response.","surecart");const t="https://surecart.com/docs/is-not-a-valid-json-response/";e.additional_errors=[{code:"invalid_json",message:(0,r.s)(/* translators: %s: URL to debug settings page */ /* translators: %s: URL to debug settings page */
(0,r._)("Please ensure that your site is not in debug mode as this may interfere with API responses. %s","surecart"),`<a href="${t}" target="_blank" rel="noopener noreferrer">${(0,r._)("More Information","surecart")}</a>`)}]}return"checkout.finalize_error"===e.code&&(e.additional_errors=[{code:"checkout.finalize_error",message:e.message}],e.message=(0,r._)("We were not able to process this order","surecart")),Promise.reject(e)})),n}));const S=async e=>{const t=await(e=>{const t={code:"invalid_json",message:(0,r._)("The response is not a valid JSON response.","surecart")};if((null==e?void 0:e.code)&&(null==e?void 0:e.message))throw e;if(!e||!e.json)throw t;return e.json().catch((()=>{throw t}))})(e);if("rest_cookie_invalid_nonce"!==t.code)throw t;return window.fetch(k.nonceEndpoint).then((e=>{if(e.status>=200&&e.status<300)return e;throw e})).then((e=>e.text())).then((e=>{k.nonceMiddleware.nonce=e}))}},4777:function(e,t,n){function r(e){return"string"!=typeof e||""===e?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)}function i(e){return"string"!=typeof e||""===e?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(e)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)}function o(e,t){return function(n,o,s,a=10){const c=e[t];if(!i(n))return;if(!r(o))return;if("function"!=typeof s)return void console.error("The hook callback must be a function.");if("number"!=typeof a)return void console.error("If specified, the hook priority must be a number.");const l={callback:s,priority:a,namespace:o};if(c[n]){const e=c[n].handlers;let t;for(t=e.length;t>0&&!(a>=e[t-1].priority);t--);t===e.length?e[t]=l:e.splice(t,0,l),c.__current.forEach((e=>{e.name===n&&e.currentIndex>=t&&e.currentIndex++}))}else c[n]={handlers:[l],runs:0};"hookAdded"!==n&&e.doAction("hookAdded",n,o,s,a)}}function s(e,t,n=!1){return function(o,s){const a=e[t];if(!i(o))return;if(!n&&!r(s))return;if(!a[o])return 0;let c=0;if(n)c=a[o].handlers.length,a[o]={runs:a[o].runs,handlers:[]};else{const e=a[o].handlers;for(let t=e.length-1;t>=0;t--)e[t].namespace===s&&(e.splice(t,1),c++,a.__current.forEach((e=>{e.name===o&&e.currentIndex>=t&&e.currentIndex--})))}return"hookRemoved"!==o&&e.doAction("hookRemoved",o,s),c}}function a(e,t){return function(n,r){const i=e[t];return void 0!==r?n in i&&i[n].handlers.some((e=>e.namespace===r)):n in i}}function c(e,t,n=!1){return function(r,...i){const o=e[t];o[r]||(o[r]={handlers:[],runs:0}),o[r].runs++;const s=o[r].handlers;if(!s||!s.length)return n?i[0]:void 0;const a={name:r,currentIndex:0};for(o.__current.push(a);a.currentIndex<s.length;){const e=s[a.currentIndex].callback.apply(null,i);n&&(i[0]=e),a.currentIndex++}return o.__current.pop(),n?i[0]:void 0}}function l(e,t){return function(){var n;const r=e[t];return null!==(n=r.__current[r.__current.length-1]?.name)&&void 0!==n?n:null}}function u(e,t){return function(n){const r=e[t];return void 0===n?void 0!==r.__current[0]:!!r.__current[0]&&n===r.__current[0].name}}function d(e,t){return function(n){const r=e[t];if(i(n))return r[n]&&r[n].runs?r[n].runs:0}}n.d(t,{a:function(){return x},d:function(){return h}});const h=new class{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=o(this,"actions"),this.addFilter=o(this,"filters"),this.removeAction=s(this,"actions"),this.removeFilter=s(this,"filters"),this.hasAction=a(this,"actions"),this.hasFilter=a(this,"filters"),this.removeAllActions=s(this,"actions",!0),this.removeAllFilters=s(this,"filters",!0),this.doAction=c(this,"actions"),this.applyFilters=c(this,"filters",!0),this.currentAction=l(this,"actions"),this.currentFilter=l(this,"filters"),this.doingAction=u(this,"actions"),this.doingFilter=u(this,"filters"),this.didAction=d(this,"actions"),this.didFilter=d(this,"filters")}},{addAction:p,addFilter:f,removeAction:g,removeFilter:v,hasAction:m,hasFilter:w,removeAllActions:_,removeAllFilters:y,doAction:b,applyFilters:x,currentAction:k,currentFilter:A,doingAction:j,doingFilter:F,didAction:P,didFilter:I,actions:O,filters:T}=h},6776:function(e,t,n){n.d(t,{o:function(){return r}});const r=(e,t)=>{new window.IntersectionObserver(((e,n)=>{e[0].intersectionRatio>0&&(t(),n.unobserve(e[0].target))})).observe(e)}},1692:function(e,t,n){n.d(t,{g:function(){return i},r:function(){return o}});var r=n(1847);function i(e,t){return(0,r.g)(e)[t]}function o(e,...t){const n=e.indexOf("?");if(-1===n)return e;const i=(0,r.g)(e),o=e.substr(0,n);t.forEach((e=>delete i[e]));const s=(0,r.b)(i);return s?o+"?"+s:o}},8777:function(e,t,n){n.r(t),n.d(t,{sc_invoices_list:function(){return c}});var r=n(6892),i=n(9955),o=n(9663),s=n(6776),a=n(1847);n(4777);const c=class{constructor(e){(0,r.r)(this,e),this.query={page:1,per_page:10},this.allLink=void 0,this.heading=void 0,this.isCustomer=void 0,this.invoices=[],this.loading=void 0,this.busy=void 0,this.error=void 0,this.pagination={total:0,total_pages:0}}componentWillLoad(){(0,s.o)(this.el,(()=>{this.initialFetch()}))}async initialFetch(){try{this.loading=!0,await this.getInvoices()}catch(e){console.error(this.error),this.error=(null==e?void 0:e.message)||(0,i._)("Something went wrong","surecart")}finally{this.loading=!1}}async fetchInvoices(){try{this.busy=!0,await this.getInvoices()}catch(e){console.error(this.error),this.error=(null==e?void 0:e.message)||(0,i._)("Something went wrong","surecart")}finally{this.busy=!1}}async getInvoices(){if(!this.isCustomer)return;const e=await await(0,o.a)({path:(0,a.a)("surecart/v1/invoices/",{expand:["checkout"],...this.query}),parse:!1});return this.pagination={total:parseInt(e.headers.get("X-WP-Total")),total_pages:parseInt(e.headers.get("X-WP-TotalPages"))},this.invoices=await e.json(),this.invoices}nextPage(){this.query.page=this.query.page+1,this.fetchInvoices()}prevPage(){this.query.page=this.query.page-1,this.fetchInvoices()}renderLoading(){return(0,r.h)("sc-card",{noPadding:!0},(0,r.h)("sc-stacked-list",null,(0,r.h)("sc-stacked-list-row",{style:{"--columns":"4"},"mobile-size":500},[...Array(4)].map((()=>(0,r.h)("sc-skeleton",{style:{width:"100px",display:"inline-block"}}))))))}renderEmpty(){return(0,r.h)("div",null,(0,r.h)("sc-divider",{style:{"--spacing":"0"}}),(0,r.h)("slot",{name:"empty"},(0,r.h)("sc-empty",{icon:"shopping-bag"},(0,i._)("You don't have any invoices.","surecart"))))}getInvoiceRedirectUrl(e){var t,n,r;return"open"===e.status?`${window.scData.pages.checkout}?checkout_id=${null===(t=null==e?void 0:e.checkout)||void 0===t?void 0:t.id}`:(0,a.a)(window.location.href,{action:"show",model:"order",id:null===(r=null===(n=null==e?void 0:e.checkout)||void 0===n?void 0:n.order)||void 0===r?void 0:r.id})}renderList(){return this.invoices.map((e=>{const{checkout:t,due_date_date:n}=e;if(!t)return null;const{amount_due_display_amount:o}=t;return(0,r.h)("sc-stacked-list-row",{href:this.getInvoiceRedirectUrl(e),style:{"--columns":"4"},"mobile-size":500},(0,r.h)("div",null,"#",null==e?void 0:e.order_number),(0,r.h)("div",null,n&&"open"===(null==e?void 0:e.status)?(0,i.s)((0,i._)("Due %s","surecart"),n):"—"),(0,r.h)("div",{class:"invoices-list__status"},(0,r.h)("sc-invoice-status-badge",{status:null==e?void 0:e.status})),(0,r.h)("div",null,o))}))}renderContent(){var e;return this.loading?this.renderLoading():0===(null===(e=this.invoices)||void 0===e?void 0:e.length)?this.renderEmpty():(0,r.h)("sc-card",{"no-padding":!0},(0,r.h)("sc-stacked-list",null,this.renderList()))}render(){var e,t;return(0,r.h)("sc-dashboard-module",{key:"48903841bd51cc6d15f6137974a3aca51d2a64f2",class:"invoices-list",error:this.error},(0,r.h)("span",{key:"132aba486b307cf53361f2cd99e771eeff585866",slot:"heading"},(0,r.h)("slot",{key:"49319d28dde268ad2e88f123672bedd268f9d606",name:"heading"},this.heading||(0,i._)("Invoices","surecart"))),!!this.allLink&&!!(null===(e=this.invoices)||void 0===e?void 0:e.length)&&(0,r.h)("sc-button",{key:"6766e31aa8028421210ad47f848eb351153d5ab0",type:"link",href:this.allLink,slot:"end","aria-label":(0,i.s)((0,i._)("View all %s","surecart"),this.heading||(0,i._)("Invoices","surecart"))},(0,i._)("View all","surecart"),(0,r.h)("sc-icon",{key:"9e2e4e728a577df926ffb7da4b4f1b08ba959b17","aria-hidden":"true",name:"chevron-right",slot:"suffix"})),this.renderContent(),!this.allLink&&(0,r.h)("sc-pagination",{key:"0bf3d371c4fb8f0625005545d8050c2a7e2e877b",page:this.query.page,perPage:this.query.per_page,total:this.pagination.total,totalPages:this.pagination.total_pages,totalShowing:null===(t=null==this?void 0:this.invoices)||void 0===t?void 0:t.length,onScNextPage:()=>this.nextPage(),onScPrevPage:()=>this.prevPage()}),this.busy&&(0,r.h)("sc-block-ui",{key:"86adde80321aa866904551e4ed2efed45d3cf0f6"}))}get el(){return(0,r.a)(this)}};c.style=":host{display:block}.orders-list{display:grid;gap:0.75em}.orders-list__heading{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between}.orders-list__title{font-size:var(--sc-font-size-x-large);font-weight:var(--sc-font-weight-bold);line-height:var(--sc-line-height-dense)}.orders-list a{text-decoration:none;font-weight:var(--sc-font-weight-semibold);display:inline-flex;align-items:center;gap:0.25em;color:var(--sc-color-primary-500)}.order__row{color:var(--sc-color-gray-800);text-decoration:none;display:grid;align-items:center;justify-content:space-between;gap:0;grid-template-columns:1fr 1fr 1fr auto;margin:0;padding:var(--sc-spacing-small) var(--sc-spacing-large)}.order__row:not(:last-child){border-bottom:1px solid var(--sc-color-gray-200)}.order__row:hover{background:var(--sc-color-gray-50)}.order__date{font-weight:var(--sc-font-weight-semibold)}"}}]);