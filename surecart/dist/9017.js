"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[9017],{4805:function(e,t,r){r.d(t,{a:function(){return p},b:function(){return s},g:function(){return l}});var n=r(4467),o=r(296);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return u(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var _n=0,n=function(){};return{s:n,n:function(){return _n>=e.length?{done:!0}:{done:!1,value:e[_n++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){i=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(i)throw o}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function s(e){for(var t,r="",n=Object.entries(e);t=n.shift();){var a=t,i=(0,o.A)(a,2),u=i[0],s=i[1];if(Array.isArray(s)||s&&s.constructor===Object){var d,l=c(Object.entries(s).reverse());try{for(l.s();!(d=l.n()).done;){var p=(0,o.A)(d.value,2),f=p[0],h=p[1];n.unshift(["".concat(u,"[").concat(f,"]"),h])}}catch(e){l.e(e)}finally{l.f()}}else void 0!==s&&(null===s&&(s=""),r+="&"+[u,s].map(encodeURIComponent).join("="))}return r.substr(1)}function d(e){try{return decodeURIComponent(e)}catch(t){return e}}function l(e){return(function(e){var t;try{t=new URL(e,"http://example.com").search.substring(1)}catch(e){}if(t)return t}(e)||"").replace(/\+/g,"%20").split("&").reduce((function(e,t){var r=t.split("=").filter(Boolean).map(d),n=(0,o.A)(r,2),a=n[0],c=n[1],u=void 0===c?"":c;return a&&function(e,t,r){for(var n=t.length,o=n-1,a=0;a<n;a++){var c=t[a];!c&&Array.isArray(e)&&(c=e.length.toString()),c=["__proto__","constructor","prototype"].includes(c)?c.toUpperCase():c;var u=!isNaN(Number(t[a+1]));e[c]=a===o?r:e[c]||(u?[]:{}),Array.isArray(e[c])&&!u&&(e[c]=i({},e[c])),e=e[c]}}(e,a.replace(/\]/g,"").split("["),u),e}),Object.create(null))}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(!t||!Object.keys(t).length)return e;var r=e,n=e.indexOf("?");return-1!==n&&(t=Object.assign(l(e),t),r=r.substr(0,n)),r+"?"+s(t)}},1889:function(e,t,r){r.d(t,{a:function(){return B},h:function(){return q}});var n=r(467),o=r(45),a=r(296),i=r(4467),c=r(9280),u=r.n(c),s=r(4805),d=r(3506),l=["rest_route"],p=["path","url"],f=["url","path","data","parse"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,i.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t){return void 0!==(0,d.g)(e,t)}function y(e){var t=e.split("?"),r=t[1],n=t[0];return r?n+"?"+r.split("&").map((function(e){return e.split("=")})).map((function(e){return e.map(decodeURIComponent)})).sort((function(e,t){return e[0].localeCompare(t[0])})).map((function(e){return e.map(encodeURIComponent)})).map((function(e){return e.join("=")})).join("&"):n}var m=function(e,t){var r,n,o=e.path;return"string"==typeof e.namespace&&"string"==typeof e.endpoint&&(r=e.namespace.replace(/^\/|\/$/g,""),o=(n=e.endpoint.replace(/^\//,""))?r+"/"+n:r),delete e.namespace,delete e.endpoint,t(v(v({},e),{},{path:o}))};function b(e,t){return Promise.resolve(t?e.body:new window.Response(JSON.stringify(e.body),{status:200,statusText:"OK",headers:e.headers}))}var g=function(e){return e.json?e.json():Promise.reject(e)},_=function(e){return function(e){if(!e)return{};var t=e.match(/<([^>]+)>; rel="next"/);return t?{next:t[1]}:{}}(e.headers.get("link")).next},O=function(e){var t=!!e.path&&-1!==e.path.indexOf("per_page=-1"),r=!!e.url&&-1!==e.url.indexOf("per_page=-1");return t||r},j=function(){var e=(0,n.A)(u().mark((function e(t,r){var n,a,i,c,d,l;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==t.parse){e.next=2;break}return e.abrupt("return",r(t));case 2:if(O(t)){e.next=4;break}return e.abrupt("return",r(t));case 4:return e.next=6,B(v(v({},(f={per_page:100},void 0,void 0,h=(u=t).path,w=u.url,v(v({},(0,o.A)(u,p)),{},{url:w&&(0,s.a)(w,f),path:h&&(0,s.a)(h,f)}))),{},{parse:!1}));case 6:return n=e.sent,e.next=9,g(n);case 9:if(a=e.sent,Array.isArray(a)){e.next=12;break}return e.abrupt("return",a);case 12:if(i=_(n)){e.next=15;break}return e.abrupt("return",a);case 15:c=[].concat(a);case 16:if(!i){e.next=27;break}return e.next=19,B(v(v({},t),{},{path:void 0,url:i,parse:!1}));case 19:return d=e.sent,e.next=22,g(d);case 22:l=e.sent,c=c.concat(l),i=_(d),e.next=16;break;case 27:return e.abrupt("return",c);case 28:case"end":return e.stop()}var u,f,h,w}),e)})));return function(_x,t){return e.apply(this,arguments)}}(),P=new Set(["PATCH","PUT","DELETE"]),A=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Promise.resolve(function(e){return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?e:204===e.status?null:e.json?e.json():Promise.reject(e)}(e,t)).catch((function(e){return k(e,t)}))};function k(e){if(arguments.length>1&&void 0!==arguments[1]&&!arguments[1])throw e;return function(e){var t={code:"invalid_json",message:wp.i18n.__("The response is not a valid JSON response.")};if(!e||!e.json)throw t;return e.json().catch((function(){throw t}))}(e).then((function(e){var t={code:"unknown_error",message:wp.i18n.__("An unknown error occurred.")};throw e||t}))}var x,E,S,I,T,D,C,M={Accept:"application/json, */*;q=0.1"},U={credentials:"include"},R=[function(e,t){return"string"!=typeof e.url||w(e.url,"_locale")||(e.url=(0,s.a)(e.url,{_locale:"user"})),"string"!=typeof e.path||w(e.path,"_locale")||(e.path=(0,s.a)(e.path,{_locale:"user"})),t(e)},m,function(e,t){var r=e.method,n=void 0===r?"GET":r;return P.has(n.toUpperCase())&&(e=v(v({},e),{},{headers:v(v({},e.headers),{},{"X-HTTP-Method-Override":n,"Content-Type":"application/json"}),method:"POST"})),t(e)},j],N=function(e){if(e.status>=200&&e.status<300)return e;throw e},L=function(e){var t=e.url,r=e.path,n=e.data,a=e.parse,i=void 0===a||a,c=(0,o.A)(e,f),u=e.body,s=e.headers;return s=v(v({},M),s),n&&(u=JSON.stringify(n),s["Content-Type"]="application/json"),window.fetch(t||r||window.location.href,v(v(v({},U),c),{},{body:u,headers:s})).then((function(e){return Promise.resolve(e).then(N).catch((function(e){return k(e,i)})).then((function(e){return A(e,i)}))}),(function(e){if(e&&"AbortError"===e.name)throw e;throw{code:"fetch_error",message:wp.i18n.__("You are probably offline.")}}))};function B(e){return R.reduceRight((function(e,t){return function(r){return t(r,e)}}),L)(e).catch((function(t){return"rest_cookie_invalid_nonce"!==t.code?Promise.reject(t):window.fetch(B.nonceEndpoint).then(N).then((function(e){return e.text()})).then((function(t){return B.nonceMiddleware.nonce=t,B(e)}))}))}B.use=function(e){R.unshift(e)},B.setFetchHandler=function(e){L=e},B.createNonceMiddleware=function(e){var t=function e(t,r){var n=t.headers,o=void 0===n?{}:n;for(var a in o)if("x-wp-nonce"===a.toLowerCase()&&o[a]===e.nonce)return r(t);return r(v(v({},t),{},{headers:v(v({},o),{},{"X-WP-Nonce":e.nonce})}))};return t.nonce=e,t},B.createPreloadingMiddleware=function(e){var t=Object.fromEntries(Object.entries(e).map((function(e){var t=(0,a.A)(e,2),r=t[0],n=t[1];return[y(r),n]})));return function(e,r){var n=e.parse,a=void 0===n||n,i=e.path;if(!i&&e.url){var c=(0,s.g)(e.url),u=c.rest_route,d=(0,o.A)(c,l);"string"==typeof u&&(i=(0,s.a)(u,d))}if("string"!=typeof i)return r(e);var p=e.method||"GET",f=y(i);if("GET"===p&&t[f]){var h=t[f];return delete t[f],b(h,!!a)}if("OPTIONS"===p&&t[p]&&t[p][f]){var v=t[p][f];return delete t[p][f],b(v,!!a)}return r(e)}},B.createRootURLMiddleware=function(e){return function(t,r){return m(t,(function(t){var n,o=t.url,a=t.path;return"string"==typeof a&&(n=e,-1!==e.indexOf("?")&&(a=a.replace("?","&")),a=a.replace(/^\//,""),"string"==typeof n&&-1!==n.indexOf("?")&&(a=a.replace("?","&")),o=n+a),r(v(v({},t),{},{url:o}))}))}},B.fetchAllMiddleware=j,B.mediaUploadMiddleware=function(e,t){if(!function(e){var t=!!e.method&&"POST"===e.method;return(!!e.path&&-1!==e.path.indexOf("/wp/v2/media")||!!e.url&&-1!==e.url.indexOf("/wp/v2/media"))&&t}(e))return t(e);var r=0,n=function e(n){return r++,t({path:"/wp/v2/media/".concat(n,"/post-process"),method:"POST",data:{action:"create-image-subsizes"},parse:!1}).catch((function(){return r<5?e(n):(t({path:"/wp/v2/media/".concat(n,"?force=true"),method:"DELETE"}),Promise.reject())}))};return t(v(v({},e),{},{parse:!1})).catch((function(t){var r=t.headers.get("x-wp-upload-attachment-id");return t.status>=500&&t.status<600&&r?n(r).catch((function(){return!1!==e.parse?Promise.reject({code:"post_process",message:wp.i18n.__("Media upload failed. If this is a photo or a large image, please scale it down and try again.")}):Promise.reject(t)})):k(t,e.parse)})).then((function(t){return A(t,e.parse)}))},B.createThemePreviewMiddleware=function(e){return function(t,r){if("string"==typeof t.url){var n=(0,d.g)(t.url,"wp_theme_preview");void 0===n?t.url=(0,s.a)(t.url,{wp_theme_preview:e}):""===n&&(t.url=(0,d.r)(t.url,"wp_theme_preview"))}if("string"==typeof t.path){var o=(0,d.g)(t.path,"wp_theme_preview");void 0===o?t.path=(0,s.a)(t.path,{wp_theme_preview:e}):""===o&&(t.path=(0,d.r)(t.path,"wp_theme_preview"))}return r(t)}},B.fetchAllMiddleware=null,B.use(B.createRootURLMiddleware((null===(E=null===(x=null===window||void 0===window?void 0:window.parent)||void 0===x?void 0:x.scData)||void 0===E?void 0:E.root_url)||(null===(S=null===window||void 0===window?void 0:window.scData)||void 0===S?void 0:S.root_url))),(null===(I=null===window||void 0===window?void 0:window.scData)||void 0===I?void 0:I.nonce)&&(B.nonceMiddleware=B.createNonceMiddleware(null===(T=null===window||void 0===window?void 0:window.scData)||void 0===T?void 0:T.nonce),B.use(B.nonceMiddleware)),(null===(D=null===window||void 0===window?void 0:window.scData)||void 0===D?void 0:D.nonce_endpoint)&&(B.nonceEndpoint=null===(C=null===window||void 0===window?void 0:window.scData)||void 0===C?void 0:C.nonce_endpoint),B.use((function(e,t){return e.path=(0,s.a)(e.path,{t:Date.now()}),t(e)})),B.use((function(e,t){return e.path=(0,s.a)(e.path,v({},!!(0,d.g)(window.location.href,"currency")&&{currency:(0,d.g)(window.location.href,"currency")})),t(e)})),B.use((function(e,t){var r=t(e);return r.catch((function(e){return"invalid_json"===e.code&&(e.message=wp.i18n.__("The response is not a valid JSON response.","surecart"),e.additional_errors=[{code:"invalid_json",message:wp.i18n.sprintf(/* translators: %s: URL to debug settings page */
wp.i18n.__("Please ensure that your site is not in debug mode as this may interfere with API responses. %s","surecart"),'<a href="'.concat("https://surecart.com/docs/is-not-a-valid-json-response/",'" target="_blank" rel="noopener noreferrer">').concat(wp.i18n.__("More Information","surecart"),"</a>"))}]),"checkout.finalize_error"===e.code&&(e.additional_errors=[{code:"checkout.finalize_error",message:e.message}],e.message=wp.i18n.__("We were not able to process this order","surecart")),Promise.reject(e)})),r}));var J=function(e){var t={code:"invalid_json",message:wp.i18n.__("The response is not a valid JSON response.","surecart")};if((null==e?void 0:e.code)&&(null==e?void 0:e.message))throw e;if(!e||!e.json)throw t;return e.json().catch((function(){throw t}))},q=function(){var e=(0,n.A)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(t);case 2:if("rest_cookie_invalid_nonce"===(r=e.sent).code){e.next=5;break}throw r;case 5:return e.abrupt("return",window.fetch(B.nonceEndpoint).then((function(e){if(e.status>=200&&e.status<300)return e;throw e})).then((function(e){return e.text()})).then((function(e){B.nonceMiddleware.nonce=e})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},9629:function(e,t,r){r.d(t,{g:function(){return p},l:function(){return u}});var n=r(4467),o=r(2284);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){void 0===t&&(t={});var r=document.createElement("script");return r.src=e,Object.keys(t).forEach((function(e){r.setAttribute(e,t[e]),"data-csp-nonce"===e&&r.setAttribute("nonce",t["data-csp-nonce"])})),r}function u(e,t){if(void 0===t&&(t=s()),l(e,t),"undefined"==typeof document)return t.resolve(null);var r=function(e){var t="https://www.paypal.com/sdk/js";e.sdkBaseURL&&(t=e.sdkBaseURL,delete e.sdkBaseURL),function(e){var t=e["merchant-id"],r=e["data-merchant-id"],n="",o="";Array.isArray(t)?t.length>1?(n="*",o=t.toString()):n=t.toString():"string"==typeof t&&t.length>0?n=t:"string"==typeof r&&r.length>0&&(n="*",o=r),e["merchant-id"]=n,e["data-merchant-id"]=o}(e);var r,n,o=Object.keys(e).filter((function(t){return void 0!==e[t]&&null!==e[t]&&""!==e[t]})).reduce((function(t,r){var n=e[r].toString();return"data-"===r.substring(0,5)?t.dataAttributes[r]=n:t.queryParams[r]=n,t}),{queryParams:{},dataAttributes:{}}),a=o.queryParams,i=o.dataAttributes;return{url:"".concat(t,"?").concat((r=a,n="",Object.keys(r).forEach((function(e){0!==n.length&&(n+="&"),n+=e+"="+r[e]})),n)),dataAttributes:i}}(e),n=r.url,a=r.dataAttributes,i=a["data-namespace"]||"paypal",u=d(i);return function(e,t){var r=document.querySelector('script[src="'.concat(e,'"]'));if(null===r)return null;var n=c(e,t),o=r.cloneNode();if(delete o.dataset.uidAuto,Object.keys(o.dataset).length!==Object.keys(n.dataset).length)return null;var a=!0;return Object.keys(o.dataset).forEach((function(e){o.dataset[e]!==n.dataset[e]&&(a=!1)})),a?r:null}(n,a)&&u?t.resolve(u):function(e,t){void 0===t&&(t=s()),l(e,t);var r=e.url,n=e.attributes;if("string"!=typeof r||0===r.length)throw new Error("Invalid url.");if(void 0!==n&&"object"!==(0,o.A)(n))throw new Error("Expected attributes to be an object.");return new t((function(e,t){if("undefined"==typeof document)return e();!function(e){var t=e.onSuccess,r=e.onError,n=c(e.url,e.attributes);n.onerror=r,n.onload=t,document.head.insertBefore(n,document.head.firstElementChild)}({url:r,attributes:n,onSuccess:function(){return e()},onError:function(){var e=new Error('The script "'.concat(r,'" failed to load.'));return window.fetch?fetch(r).then((function(r){return 200===r.status&&t(e),r.text()})).then((function(e){var r=function(e){var t=e.split("/* Original Error:")[1];return t?t.replace(/\n/g,"").replace("*/","").trim():e}(e);t(new Error(r))})).catch((function(e){t(e)})):t(e)}})}))}({url:n,attributes:a},t).then((function(){var e=d(i);if(e)return e;throw new Error("The window.".concat(i," global variable is not available."))}))}function s(){if("undefined"==typeof Promise)throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");return Promise}function d(e){return window[e]}function l(e,t){if("object"!==(0,o.A)(e)||null===e)throw new Error("Expected an options object.");if(void 0!==t&&"function"!=typeof t)throw new Error("Expected PromisePonyfill to be a function.")}var p=function(e){var t=e.clientId,r=e.reusable,n=e.merchantId,o=e.currency,a=void 0===o?"usd":o,c=e.merchantInitiated;return i(i({"client-id":t.replace(/ /g,"")},!r||c?{"merchant-id":n.replace(/ /g,"")}:{}),{},{commit:!1,intent:r?"tokenize":"capture",vault:!0,currency:a?a.toUpperCase():"USD"})}},3506:function(e,t,r){r.d(t,{g:function(){return o},r:function(){return a}});var n=r(4805);function o(e,t){return(0,n.g)(e)[t]}function a(e){var t=e.indexOf("?");if(-1===t)return e;for(var r=(0,n.g)(e),o=e.substr(0,t),a=arguments.length,i=new Array(a>1?a-1:0),c=1;c<a;c++)i[c-1]=arguments[c];i.forEach((function(e){return delete r[e]}));var u=(0,n.b)(r);return u?o+"?"+u:o}},9017:function(e,t,r){r.r(t),r.d(t,{sc_paypal_add_method:function(){return l}});var n=r(467),o=r(3029),a=r(2901),i=r(9280),c=r.n(i),u=r(1346),s=r(9629),d=r(1889),l=function(){return(0,a.A)((function e(t){(0,o.A)(this,e),(0,u.r)(this,t),this.liveMode=!0,this.customerId=void 0,this.successUrl=void 0,this.currency=void 0,this.loading=void 0,this.loaded=void 0,this.error=void 0,this.paymentIntent=void 0}),[{key:"componentWillLoad",value:function(){this.createPaymentIntent()}},{key:"handlePaymentIntentCreate",value:(t=(0,n.A)(c().mark((function e(){var t,r,o,a,i,u,l,p,f=this;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=this.paymentIntent||{},a=o.external_intent_id,i=(null===(r=null===(t=this.paymentIntent)||void 0===t?void 0:t.processor_data)||void 0===r?void 0:r.paypal)||{},u=i.client_id,l=i.account_id,p=i.merchant_initiated,u&&l&&a){e.next=4;break}return e.abrupt("return");case 4:if(this.paypal){e.next=16;break}return e.prev=5,e.next=8,(0,s.l)((0,s.g)({clientId:u,merchantId:l,merchantInitiated:p,reusable:!0}));case 8:this.paypal=e.sent,this.paypal.Buttons({onInit:function(){f.loaded=!0},createBillingAgreement:function(){return new Promise((function(e){return e(a)}))},onApprove:function(){var e=(0,n.A)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f.loading=!0,e.next=4,(0,d.a)({method:"PATCH",path:"surecart/v1/payment_intents/".concat(null===(t=f.paymentIntent)||void 0===t?void 0:t.id,"/capture")});case 4:if(r=e.sent,!["succeeded","pending","requires_approval"].includes(null==r?void 0:r.status)){e.next=9;break}window.location.assign(f.successUrl),e.next=10;break;case 9:throw{message:wp.i18n.__("The payment did not process. Please try again.","surecart")};case 10:e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),f.error=(null===e.t0||void 0===e.t0?void 0:e.t0.message)||wp.i18n.__("The payment did not process. Please try again.","surecart"),f.loading=!1;case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),onError:function(e){console.error(e),alert((null==e?void 0:e.message)||wp.i18n.__("The payment did not process. Please try again.","surecart"))}}).render(this.container),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),console.error("Failed to load the PayPal JS SDK script",e.t0),this.error=wp.i18n.__("Failed to load the PayPal JS SDK script","surecart");case 16:case"end":return e.stop()}}),e,this,[[5,12]])}))),function(){return t.apply(this,arguments)})},{key:"createPaymentIntent",value:(e=(0,n.A)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.loading=!0,this.error="",e.next=5,(0,d.a)({method:"POST",path:"surecart/v1/payment_intents",data:{processor_type:"paypal",reusable:!0,live_mode:this.liveMode,customer_id:this.customerId,currency:this.currency,refresh_status:!0}});case 5:this.paymentIntent=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.error=(null===(r=null===(t=null===e.t0||void 0===e.t0?void 0:e.t0.additional_errors)||void 0===t?void 0:t[0])||void 0===r?void 0:r.message)||(null===e.t0||void 0===e.t0?void 0:e.t0.message)||wp.i18n.__("Something went wrong","surecart");case 11:return e.prev=11,this.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,this,[[0,8,11,14]])}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){var e=this;return(0,u.h)(u.H,{key:"87ffac8a1e31c6bb944b76327b3f8da0800b946e"},this.error&&(0,u.h)("sc-alert",{key:"756417edfd56110213e552953113f01d7764e937",open:!!this.error,type:"danger"},(0,u.h)("span",{key:"b317e43ccad1834fd5273239cd6a348e787f6fe8",slot:"title"},wp.i18n.__("Error","surecart")),this.error),(0,u.h)("div",{key:"a906e44ad7e2f9d5d963c1a9e6497c6ca69c5cde",class:"sc-paypal-button-container",hidden:!this.loaded,ref:function(t){return e.container=t}}))}}],[{key:"watchers",get:function(){return{paymentIntent:["handlePaymentIntentCreate"]}}}]);var e,t}();l.style=':host{display:block}.paypal-buttons{position:relative;line-height:0;text-align:center}.paypal-buttons:after{content:" ";border-bottom:1px solid var(--sc-input-border-color);width:100%;height:0;top:50%;left:0;right:0;position:absolute}'},45:function(e,t,r){r.d(t,{A:function(){return o}});var n=r(8587);function o(e,t){if(null==e)return{};var r,o,a=(0,n.A)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}},8587:function(e,t,r){function n(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}r.d(t,{A:function(){return n}})}}]);