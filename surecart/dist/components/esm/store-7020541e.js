import{c as createStore}from"./index-06061d4e.js";import{g as getSerializedState}from"./utils-e9ee502a.js";function t(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,i,o=e.call(t),a=[];try{for(;(void 0===n||n-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(e=o.return)&&e.call(o)}finally{if(i)throw i.error}}return a}var n;!function(t){t[t.NotStarted=0]="NotStarted",t[t.Running=1]="Running",t[t.Stopped=2]="Stopped"}(n||(n={}));var e={type:"xstate.init"};function r(t){return void 0===t?[]:[].concat(t)}function o(t){return{type:"xstate.assign",assignment:t}}function i(t,n){return"string"==typeof(t="string"==typeof t&&n&&n[t]?n[t]:t)?{type:t}:"function"==typeof t?{type:t.name,exec:t}:t}function a(t){return function(n){return t===n}}function u(t){return"string"==typeof t?{type:t}:t}function c(t,n){return{value:t,context:n,actions:[],changed:!1,matches:a(t)}}function f(t,n,e){var r=n,i=!1;return[t.filter((function(t){if("xstate.assign"===t.type){i=!0;var n=Object.assign({},r);return"function"==typeof t.assignment?n=t.assignment(r,e):Object.keys(t.assignment).forEach((function(i){n[i]="function"==typeof t.assignment[i]?t.assignment[i](r,e):t.assignment[i]})),r=n,!1}return!0})),r,i]}function s(n,o){void 0===o&&(o={});var s=t(f(r(n.states[n.initial].entry).map((function(t){return i(t,o.actions)})),n.context,e),2),l=s[0],d=s[1],g={config:n,_options:o,initialState:{value:n.initial,actions:l,context:d,matches:a(n.initial)},transition:function(e,o){var s,l,d="string"==typeof e?{value:e,context:n.context}:e,p=d.value,y=d.context,m=u(o),v=n.states[p];if(v.on){var E=r(v.on[m.type]);try{for(var S=function(t){var n="function"==typeof Symbol&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}(E),h=S.next();!h.done;h=S.next()){var x=h.value;if(void 0===x)return c(p,y);var _="string"==typeof x?{target:x}:x,R=_.target,b=_.actions,C=void 0===b?[]:b,w=_.cond,T=void 0===w?function(){return!0}:w,I=void 0===R,O=null!=R?R:p,D=n.states[O];if(T(y,m)){var N=t(f((I?r(C):[].concat(v.exit,C,D.entry).filter((function(t){return t}))).map((function(t){return i(t,g._options.actions)})),y,m),3),k=N[0],J=N[1],j=N[2],z=null!=R?R:p;return{value:z,context:J,actions:k,changed:R!==p||k.length>0||j,matches:a(z)}}}}catch(t){s={error:t}}finally{try{h&&!h.done&&(l=S.return)&&l.call(S)}finally{if(s)throw s.error}}}return c(p,y)}};return g}var l=function(t,n){return t.actions.forEach((function(e){var r=e.exec;return r&&r(t.context,n)}))};function v(t){var r=t.initialState,i=n.NotStarted,o=new Set,c={_machine:t,send:function(e){i===n.Running&&(r=t.transition(r,e),l(r,u(e)),o.forEach((function(t){return t(r)})))},subscribe:function(t){return o.add(t),t(r),{unsubscribe:function(){return o.delete(t)}}},start:function(o){if(o){var u="object"==typeof o?o:{context:t.config.context,value:o};r={value:u.value,actions:[],context:u.context,matches:a(u.value)}}return i=n.Running,l(r,e),c},stop:function(){return i=n.Stopped,o.clear(),c},get state(){return r},get status(){return i}};return c}const checkoutMachine=s({id:"fetch",initial:"draft",context:{retries:3},states:{draft:{on:{PAID:"confirming",FINALIZE:"finalizing",FETCH:"updating",REJECT:"draft",LOCK:"locked"}},updating:{on:{RESOLVE:"draft",EXPIRE:"expired",REJECT:"draft",LOCK:"locked"}},finalizing:{on:{PAYING:"paying",REJECT:"draft",PAID:"confirming",TEST_MODE_RESTRICTED:"test_mode_restricted"}},paying:{on:{PAID:"confirming",REJECT:"draft"}},confirming:{on:{CONFIRMED:"confirmed"}},paid:{on:{CONFIRMED:"confirmed",REDIRECT:"redirecting",REJECT:"draft"}},expired:{},locked:{},confirmed:{on:{REDIRECT:"redirecting"}},test_mode_restricted:{},redirecting:{},failure:{on:{RETRY:{target:"updating",actions:o({retries:t=>t.retries+1})}}}}}),{form:form}=getSerializedState(),{state:state,onChange:onChange,on:on,set:set,get:get,dispose:dispose}=createStore({formState:checkoutMachine.initialState,text:{loading:{finalizing:wp.i18n.__("Submitting...","surecart"),paying:wp.i18n.__("Processing...","surecart"),confirming:wp.i18n.__("Finalizing...","surecart"),confirmed:wp.i18n.__("Success!","surecart"),redirecting:wp.i18n.__("Success! Redirecting...","surecart")},success:{title:wp.i18n.__("Thank you!","surecart"),description:wp.i18n.__("Your payment was successful. A receipt is on its way to your inbox.","surecart"),button:wp.i18n.__("Continue","surecart")}},...form},((t,n,e)=>"formState"===e?t.value!==n.value:JSON.stringify(t)!==JSON.stringify(n)));export{checkoutMachine as c,onChange as o,state as s,v};