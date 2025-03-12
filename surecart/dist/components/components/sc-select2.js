import{proxyCustomElement,HTMLElement,createEvent,h}from"@stencil/core/internal/client";import{F as FormSubmitController}from"./form-data.js";import{a as isValidURL}from"./util.js";import{d as defineCustomElement$9}from"./dropdown.js";import{d as defineCustomElement$8}from"./sc-form-control2.js";import{d as defineCustomElement$7}from"./sc-icon2.js";import{d as defineCustomElement$6}from"./sc-input2.js";import{d as defineCustomElement$5}from"./sc-menu2.js";import{d as defineCustomElement$4}from"./sc-menu-item2.js";import{d as defineCustomElement$3}from"./sc-menu-label2.js";import{d as defineCustomElement$2}from"./sc-spinner2.js";import{d as defineCustomElement$1}from"./sc-visually-hidden2.js";function isArray(e){return Array.isArray?Array.isArray(e):"[object Array]"===getTag(e)}const INFINITY=1/0;function baseToString(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-INFINITY?"-0":t}function toString(e){return null==e?"":baseToString(e)}function isString(e){return"string"==typeof e}function isNumber(e){return"number"==typeof e}function isBoolean(e){return!0===e||!1===e||isObjectLike(e)&&"[object Boolean]"==getTag(e)}function isObject(e){return"object"==typeof e}function isObjectLike(e){return isObject(e)&&null!==e}function isDefined(e){return null!=e}function isBlank(e){return!e.trim().length}function getTag(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const EXTENDED_SEARCH_UNAVAILABLE="Extended search is not available",INCORRECT_INDEX_TYPE="Incorrect 'index' type",LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY=e=>`Invalid value for key ${e}`,PATTERN_LENGTH_TOO_LARGE=e=>`Pattern length exceeds max of ${e}.`,MISSING_KEY_PROPERTY=e=>`Missing ${e} property in key`,INVALID_KEY_WEIGHT_VALUE=e=>`Property 'weight' in key '${e}' must be a positive integer`,hasOwn=Object.prototype.hasOwnProperty;class KeyStore{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach((e=>{let s=createKey(e);t+=s.weight,this._keys.push(s),this._keyMap[s.id]=s,t+=s.weight})),this._keys.forEach((e=>{e.weight/=t}))}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function createKey(e){let t=null,s=null,i=null,r=1,n=null;if(isString(e)||isArray(e))i=e,t=createKeyPath(e),s=createKeyId(e);else{if(!hasOwn.call(e,"name"))throw new Error(MISSING_KEY_PROPERTY("name"));const c=e.name;if(i=c,hasOwn.call(e,"weight")&&(r=e.weight,r<=0))throw new Error(INVALID_KEY_WEIGHT_VALUE(c));t=createKeyPath(c),s=createKeyId(c),n=e.getFn}return{path:t,id:s,weight:r,src:i,getFn:n}}function createKeyPath(e){return isArray(e)?e:e.split(".")}function createKeyId(e){return isArray(e)?e.join("."):e}function get(e,t){let s=[],i=!1;const r=(e,t,n)=>{if(isDefined(e))if(t[n]){const c=e[t[n]];if(!isDefined(c))return;if(n===t.length-1&&(isString(c)||isNumber(c)||isBoolean(c)))s.push(toString(c));else if(isArray(c)){i=!0;for(let e=0,s=c.length;e<s;e+=1)r(c[e],t,n+1)}else t.length&&r(c,t,n+1)}else s.push(e)};return r(e,isString(t)?t.split("."):t,0),i?s:s[0]}const MatchOptions={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},BasicOptions={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},FuzzyOptions={location:0,threshold:.6,distance:100},AdvancedOptions={useExtendedSearch:!1,getFn:get,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Config={...BasicOptions,...MatchOptions,...FuzzyOptions,...AdvancedOptions};const SPACE=/[^ ]+/g;function norm(e=1,t=3){const s=new Map,i=Math.pow(10,t);return{get(t){const r=t.match(SPACE).length;if(s.has(r))return s.get(r);const n=1/Math.pow(r,.5*e),c=parseFloat(Math.round(n*i)/i);return s.set(r,c),c},clear(){s.clear()}}}class FuseIndex{constructor({getFn:e=Config.getFn,fieldNormWeight:t=Config.fieldNormWeight}={}){this.norm=norm(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach(((e,t)=>{this._keysMap[e.id]=t}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,isString(this.docs[0])?this.docs.forEach(((e,t)=>{this._addString(e,t)})):this.docs.forEach(((e,t)=>{this._addObject(e,t)})),this.norm.clear())}add(e){const t=this.size();isString(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,s=this.size();t<s;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!isDefined(e)||isBlank(e))return;let s={v:e,i:t,n:this.norm.get(e)};this.records.push(s)}_addObject(e,t){let s={i:t,$:{}};this.keys.forEach(((t,i)=>{let r=t.getFn?t.getFn(e):this.getFn(e,t.path);if(isDefined(r))if(isArray(r)){let e=[];const t=[{nestedArrIndex:-1,value:r}];for(;t.length;){const{nestedArrIndex:s,value:i}=t.pop();if(isDefined(i))if(isString(i)&&!isBlank(i)){let t={v:i,i:s,n:this.norm.get(i)};e.push(t)}else isArray(i)&&i.forEach(((e,s)=>{t.push({nestedArrIndex:s,value:e})}))}s.$[i]=e}else if(isString(r)&&!isBlank(r)){let e={v:r,n:this.norm.get(r)};s.$[i]=e}})),this.records.push(s)}toJSON(){return{keys:this.keys,records:this.records}}}function createIndex(e,t,{getFn:s=Config.getFn,fieldNormWeight:i=Config.fieldNormWeight}={}){const r=new FuseIndex({getFn:s,fieldNormWeight:i});return r.setKeys(e.map(createKey)),r.setSources(t),r.create(),r}function parseIndex(e,{getFn:t=Config.getFn,fieldNormWeight:s=Config.fieldNormWeight}={}){const{keys:i,records:r}=e,n=new FuseIndex({getFn:t,fieldNormWeight:s});return n.setKeys(i),n.setIndexRecords(r),n}function computeScore$1(e,{errors:t=0,currentLocation:s=0,expectedLocation:i=0,distance:r=Config.distance,ignoreLocation:n=Config.ignoreLocation}={}){const c=t/e.length;if(n)return c;const o=Math.abs(i-s);return r?c+o/r:o?1:c}function convertMaskToIndices(e=[],t=Config.minMatchCharLength){let s=[],i=-1,r=-1,n=0;for(let c=e.length;n<c;n+=1){let c=e[n];c&&-1===i?i=n:c||-1===i||(r=n-1,r-i+1>=t&&s.push([i,r]),i=-1)}return e[n-1]&&n-i>=t&&s.push([i,n-1]),s}const MAX_BITS=32;function search(e,t,s,{location:i=Config.location,distance:r=Config.distance,threshold:n=Config.threshold,findAllMatches:c=Config.findAllMatches,minMatchCharLength:o=Config.minMatchCharLength,includeMatches:a=Config.includeMatches,ignoreLocation:h=Config.ignoreLocation}={}){if(t.length>32)throw new Error(PATTERN_LENGTH_TOO_LARGE(32));const l=t.length,d=e.length,u=Math.max(0,Math.min(i,d));let g=n,p=u;const f=o>1||a,m=f?Array(d):[];let v;for(;(v=e.indexOf(t,p))>-1;){let e=computeScore$1(t,{currentLocation:v,expectedLocation:u,distance:r,ignoreLocation:h});if(g=Math.min(e,g),p=v+l,f){let e=0;for(;e<l;)m[v+e]=1,e+=1}}p=-1;let y=[],b=1,x=l+d;const C=1<<l-1;for(let i=0;i<l;i+=1){let n=0,o=x;for(;n<o;)computeScore$1(t,{errors:i,currentLocation:u+o,expectedLocation:u,distance:r,ignoreLocation:h})<=g?n=o:x=o,o=Math.floor((x-n)/2+n);x=o;let a=Math.max(1,u-o+1),v=c?d:Math.min(u+o,d)+l,S=Array(v+2);S[v+1]=(1<<i)-1;for(let n=v;n>=a;n-=1){let c=n-1,o=s[e.charAt(c)];if(f&&(m[c]=+!!o),S[n]=(S[n+1]<<1|1)&o,i&&(S[n]|=(y[n+1]|y[n])<<1|1|y[n+1]),S[n]&C&&(b=computeScore$1(t,{errors:i,currentLocation:c,expectedLocation:u,distance:r,ignoreLocation:h}),b<=g)){if(g=b,p=c,p<=u)break;a=Math.max(1,2*u-p)}}if(computeScore$1(t,{errors:i+1,currentLocation:u,expectedLocation:u,distance:r,ignoreLocation:h})>g)break;y=S}const S={isMatch:p>=0,score:Math.max(.001,b)};if(f){const e=convertMaskToIndices(m,o);e.length?a&&(S.indices=e):S.isMatch=!1}return S}function createPatternAlphabet(e){let t={};for(let s=0,i=e.length;s<i;s+=1){const r=e.charAt(s);t[r]=(t[r]||0)|1<<i-s-1}return t}class BitapSearch{constructor(e,{location:t=Config.location,threshold:s=Config.threshold,distance:i=Config.distance,includeMatches:r=Config.includeMatches,findAllMatches:n=Config.findAllMatches,minMatchCharLength:c=Config.minMatchCharLength,isCaseSensitive:o=Config.isCaseSensitive,ignoreLocation:a=Config.ignoreLocation}={}){if(this.options={location:t,threshold:s,distance:i,includeMatches:r,findAllMatches:n,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:a},this.pattern=o?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(e,t)=>{this.chunks.push({pattern:e,alphabet:createPatternAlphabet(e),startIndex:t})},l=this.pattern.length;if(l>32){let e=0;const t=l%32,s=l-t;for(;e<s;)h(this.pattern.substr(e,32),e),e+=32;if(t){const e=l-32;h(this.pattern.substr(e),e)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:s}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return s&&(t.indices=[[0,e.length-1]]),t}const{location:i,distance:r,threshold:n,findAllMatches:c,minMatchCharLength:o,ignoreLocation:a}=this.options;let h=[],l=0,d=!1;this.chunks.forEach((({pattern:t,alphabet:u,startIndex:g})=>{const{isMatch:p,score:f,indices:m}=search(e,t,u,{location:i+g,distance:r,threshold:n,findAllMatches:c,minMatchCharLength:o,includeMatches:s,ignoreLocation:a});p&&(d=!0),l+=f,p&&m&&(h=[...h,...m])}));let u={isMatch:d,score:d?l/this.chunks.length:1};return d&&s&&(u.indices=h),u}}class BaseMatch{constructor(e){this.pattern=e}static isMultiMatch(e){return getMatch(e,this.multiRegex)}static isSingleMatch(e){return getMatch(e,this.singleRegex)}search(){}}function getMatch(e,t){const s=e.match(t);return s?s[1]:null}class ExactMatch extends BaseMatch{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class InverseExactMatch extends BaseMatch{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const t=-1===e.indexOf(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class PrefixExactMatch extends BaseMatch{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}}class InversePrefixExactMatch extends BaseMatch{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class SuffixExactMatch extends BaseMatch{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class InverseSuffixExactMatch extends BaseMatch{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}}class FuzzyMatch extends BaseMatch{constructor(e,{location:t=Config.location,threshold:s=Config.threshold,distance:i=Config.distance,includeMatches:r=Config.includeMatches,findAllMatches:n=Config.findAllMatches,minMatchCharLength:c=Config.minMatchCharLength,isCaseSensitive:o=Config.isCaseSensitive,ignoreLocation:a=Config.ignoreLocation}={}){super(e),this._bitapSearch=new BitapSearch(e,{location:t,threshold:s,distance:i,includeMatches:r,findAllMatches:n,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:a})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class IncludeMatch extends BaseMatch{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,s=0;const i=[],r=this.pattern.length;for(;(t=e.indexOf(this.pattern,s))>-1;)s=t+r,i.push([t,s-1]);const n=!!i.length;return{isMatch:n,score:n?0:1,indices:i}}}const searchers=[ExactMatch,IncludeMatch,PrefixExactMatch,InversePrefixExactMatch,InverseSuffixExactMatch,SuffixExactMatch,InverseExactMatch,FuzzyMatch],searchersLen=searchers.length,SPACE_RE=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,OR_TOKEN="|";function parseQuery(e,t={}){return e.split("|").map((e=>{let s=e.trim().split(SPACE_RE).filter((e=>e&&!!e.trim())),i=[];for(let e=0,r=s.length;e<r;e+=1){const r=s[e];let n=!1,c=-1;for(;!n&&++c<searchersLen;){const e=searchers[c];let s=e.isMultiMatch(r);s&&(i.push(new e(s,t)),n=!0)}if(!n)for(c=-1;++c<searchersLen;){const e=searchers[c];let s=e.isSingleMatch(r);if(s){i.push(new e(s,t));break}}}return i}))}const MultiMatchSet=new Set([FuzzyMatch.type,IncludeMatch.type]);class ExtendedSearch{constructor(e,{isCaseSensitive:t=Config.isCaseSensitive,includeMatches:s=Config.includeMatches,minMatchCharLength:i=Config.minMatchCharLength,ignoreLocation:r=Config.ignoreLocation,findAllMatches:n=Config.findAllMatches,location:c=Config.location,threshold:o=Config.threshold,distance:a=Config.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:s,minMatchCharLength:i,findAllMatches:n,ignoreLocation:r,location:c,threshold:o,distance:a},this.pattern=t?e:e.toLowerCase(),this.query=parseQuery(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:s,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let r=0,n=[],c=0;for(let i=0,o=t.length;i<o;i+=1){const o=t[i];n.length=0,r=0;for(let t=0,i=o.length;t<i;t+=1){const i=o[t],{isMatch:a,indices:h,score:l}=i.search(e);if(!a){c=0,r=0,n.length=0;break}if(r+=1,c+=l,s){const e=i.constructor.type;MultiMatchSet.has(e)?n=[...n,...h]:n.push(h)}}if(r){let e={isMatch:!0,score:c/r};return s&&(e.indices=n),e}}return{isMatch:!1,score:1}}}const registeredSearchers=[];function register(...e){registeredSearchers.push(...e)}function createSearcher(e,t){for(let s=0,i=registeredSearchers.length;s<i;s+=1){let i=registeredSearchers[s];if(i.condition(e,t))return new i(e,t)}return new BitapSearch(e,t)}const LogicalOperator={AND:"$and",OR:"$or"},KeyType={PATH:"$path",PATTERN:"$val"},isExpression=e=>!(!e[LogicalOperator.AND]&&!e[LogicalOperator.OR]),isPath=e=>!!e[KeyType.PATH],isLeaf=e=>!isArray(e)&&isObject(e)&&!isExpression(e),convertToExplicit=e=>({[LogicalOperator.AND]:Object.keys(e).map((t=>({[t]:e[t]})))});function parse(e,t,{auto:s=!0}={}){const i=e=>{let r=Object.keys(e);const n=isPath(e);if(!n&&r.length>1&&!isExpression(e))return i(convertToExplicit(e));if(isLeaf(e)){const i=n?e[KeyType.PATH]:r[0],c=n?e[KeyType.PATTERN]:e[i];if(!isString(c))throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(i));const o={keyId:createKeyId(i),pattern:c};return s&&(o.searcher=createSearcher(c,t)),o}let c={children:[],operator:r[0]};return r.forEach((t=>{const s=e[t];isArray(s)&&s.forEach((e=>{c.children.push(i(e))}))})),c};return isExpression(e)||(e=convertToExplicit(e)),i(e)}function computeScore(e,{ignoreFieldNorm:t=Config.ignoreFieldNorm}){e.forEach((e=>{let s=1;e.matches.forEach((({key:e,norm:i,score:r})=>{const n=e?e.weight:null;s*=Math.pow(0===r&&n?Number.EPSILON:r,(n||1)*(t?1:i))})),e.score=s}))}function transformMatches(e,t){const s=e.matches;t.matches=[],isDefined(s)&&s.forEach((e=>{if(!isDefined(e.indices)||!e.indices.length)return;const{indices:s,value:i}=e;let r={indices:s,value:i};e.key&&(r.key=e.key.src),e.idx>-1&&(r.refIndex=e.idx),t.matches.push(r)}))}function transformScore(e,t){t.score=e.score}function format(e,t,{includeMatches:s=Config.includeMatches,includeScore:i=Config.includeScore}={}){const r=[];return s&&r.push(transformMatches),i&&r.push(transformScore),e.map((e=>{const{idx:s}=e,i={item:t[s],refIndex:s};return r.length&&r.forEach((t=>{t(e,i)})),i}))}class Fuse{constructor(e,t={},s){this.options={...Config,...t},this.options.useExtendedSearch,this._keyStore=new KeyStore(this.options.keys),this.setCollection(e,s)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof FuseIndex))throw new Error(INCORRECT_INDEX_TYPE);this._myIndex=t||createIndex(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){isDefined(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=(()=>!1)){const t=[];for(let s=0,i=this._docs.length;s<i;s+=1){const r=this._docs[s];e(r,s)&&(this.removeAt(s),s-=1,i-=1,t.push(r))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:s,includeScore:i,shouldSort:r,sortFn:n,ignoreFieldNorm:c}=this.options;let o=isString(e)?isString(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return computeScore(o,{ignoreFieldNorm:c}),r&&o.sort(n),isNumber(t)&&t>-1&&(o=o.slice(0,t)),format(o,this._docs,{includeMatches:s,includeScore:i})}_searchStringList(e){const t=createSearcher(e,this.options),{records:s}=this._myIndex,i=[];return s.forEach((({v:e,i:s,n:r})=>{if(!isDefined(e))return;const{isMatch:n,score:c,indices:o}=t.searchIn(e);n&&i.push({item:e,idx:s,matches:[{score:c,value:e,norm:r,indices:o}]})})),i}_searchLogical(e){const t=parse(e,this.options),s=(e,t,i)=>{if(!e.children){const{keyId:s,searcher:r}=e,n=this._findMatches({key:this._keyStore.get(s),value:this._myIndex.getValueForItemAtKeyId(t,s),searcher:r});return n&&n.length?[{idx:i,item:t,matches:n}]:[]}const r=[];for(let n=0,c=e.children.length;n<c;n+=1){const c=e.children[n],o=s(c,t,i);if(o.length)r.push(...o);else if(e.operator===LogicalOperator.AND)return[]}return r},i=this._myIndex.records,r={},n=[];return i.forEach((({$:e,i:i})=>{if(isDefined(e)){let c=s(t,e,i);c.length&&(r[i]||(r[i]={idx:i,item:e,matches:[]},n.push(r[i])),c.forEach((({matches:e})=>{r[i].matches.push(...e)})))}})),n}_searchObjectList(e){const t=createSearcher(e,this.options),{keys:s,records:i}=this._myIndex,r=[];return i.forEach((({$:e,i:i})=>{if(!isDefined(e))return;let n=[];s.forEach(((s,i)=>{n.push(...this._findMatches({key:s,value:e[i],searcher:t}))})),n.length&&r.push({idx:i,item:e,matches:n})})),r}_findMatches({key:e,value:t,searcher:s}){if(!isDefined(t))return[];let i=[];if(isArray(t))t.forEach((({v:t,i:r,n:n})=>{if(!isDefined(t))return;const{isMatch:c,score:o,indices:a}=s.searchIn(t);c&&i.push({score:o,key:e,value:t,idx:r,norm:n,indices:a})}));else{const{v:r,n:n}=t,{isMatch:c,score:o,indices:a}=s.searchIn(r);c&&i.push({score:o,key:e,value:r,norm:n,indices:a})}return i}}Fuse.version="6.6.2",Fuse.createIndex=createIndex,Fuse.parseIndex=parseIndex,Fuse.config=Config,Fuse.parseQuery=parse,register(ExtendedSearch);const scSelectCss=":host{display:block;--focus-ring:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.search{margin:var(--sc-spacing-x-small) var(--sc-spacing-x-small) 0 var(--sc-spacing-x-small)}.loading{text-align:center;margin:var(--sc-spacing-small)}.select{font-family:var(--sc-input-font-family);font-weight:var(--sc-font-weight-normal)}sc-dropdown{display:block}.trigger{overflow:hidden;box-sizing:border-box;width:100%;display:flex;align-items:center;justify-content:space-between;width:100%;border-style:solid;border-width:var(--sc-input-border-width);background-color:var(--sc-select-background-color, var(--sc-color-white));border-color:var(--sc-select-border-color, var(--sc-color-gray-300));color:var(--sc-input-color);text-decoration:none;user-select:none;white-space:nowrap;vertical-align:middle;padding:0;transition:var(--sc-input-transition, var(--sc-transition-medium)) background-color, var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) border, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow;cursor:inherit;box-shadow:var(--sc-shadow-small);font-size:var(--sc-button-font-size-medium);min-height:var(--sc-input-height-medium);line-height:calc(var(--sc-input-height-medium) - var(--sc-input-border-width) * 2);border-radius:var(--sc-input-border-radius-medium);padding:0 var(--sc-spacing-small)}.trigger svg{display:block;width:1em;height:1em}.select.select--focused:not(.select--disabled) .trigger{background-color:var(--sc-input-background-color-focus);border-color:var(--sc-input-border-color-focus);box-shadow:var(--focus-ring);z-index:2}.select--disabled{cursor:not-allowed}.select--disabled sc-dropdown{opacity:0.65}.select__value{overflow:hidden;text-overflow:ellipsis}.select__empty{text-align:center;margin:var(--sc-spacing-small);color:var(--sc-color-gray-400)}.select--placeholder .trigger{color:var(--sc-input-placeholder-color)}.select__hidden-input{position:absolute;opacity:0;padding:0px;margin:0px;pointer-events:none;width:0}.select__suffix-description,.select__description{font-size:var(--sc-input-help-text-font-size-medium);opacity:0.65}.select__caret{transition:transform 0.25s ease;line-height:0}.select--is-open .select__caret{transform:rotate(180deg)}.select--squared .trigger{border-radius:0}.select--squared-top .trigger{border-top-left-radius:0;border-top-right-radius:0}.select--squared-bottom .trigger{border-bottom-left-radius:0;border-bottom-right-radius:0}.select--squared-left .trigger{border-top-left-radius:0;border-bottom-left-radius:0}.select--squared-right .trigger{border-top-right-radius:0;border-bottom-right-radius:0}.choice__icon--image{width:18px;height:18px;object-fit:contain}sc-menu-item.is-unavailable{--sc-menu-item-color:var(--sc-color-gray-500)}",ScSelectStyle0=scSelectCss;let id=0,itemIndex=0,arrowFlag="";const ScSelectDropdown=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scSearch=createEvent(this,"scSearch",7),this.scOpen=createEvent(this,"scOpen",7),this.scClose=createEvent(this,"scClose",7),this.scBlur=createEvent(this,"scBlur",7),this.scFocus=createEvent(this,"scFocus",7),this.scChange=createEvent(this,"scChange",7),this.scScrollEnd=createEvent(this,"scScrollEnd",7),this.inputId="select-"+ ++id,this.helpId=`select-help-text-${id}`,this.labelId=`select-label-${id}`,this.autocomplete=void 0,this.placeholder="",this.searchPlaceholder="",this.value="",this.choices=[],this.unselect=!0,this.required=void 0,this.loading=void 0,this.search=void 0,this.closeOnSelect=!0,this.name=void 0,this.help=void 0,this.label=void 0,this.size="medium",this.position="bottom-right",this.placement="bottom-start",this.invalid=!1,this.open=void 0,this.disabled=void 0,this.showParentLabel=!0,this.hoist=!1,this.squared=void 0,this.squaredBottom=void 0,this.squaredTop=void 0,this.squaredLeft=void 0,this.squaredRight=void 0,this.hasFocus=!1,this.searchTerm="",this.filteredChoices=[]}handleShow(){this.open=!0,setTimeout((()=>{this.searchInput&&this.searchInput.triggerFocus()}),50)}handleHide(){this.open=!1,itemIndex=0,this.scClose.emit()}handleBlur(){this.hasFocus=!1,this.scBlur.emit()}handleFocus(){this.hasFocus=!0,this.el.focus(),this.scFocus.emit()}displayValue(){var e;if(!this.value)return!1;let t=this.choices.find((e=>e.value==this.value)),s="";return t||(this.showParentLabel&&(s=null===(e=this.choices.find((e=>{var t,s;return null===(s=null===(t=null==e?void 0:e.choices)||void 0===t?void 0:t.some)||void 0===s?void 0:s.call(t,(e=>e.value===this.value))})))||void 0===e?void 0:e.label),t=(this.choices||[]).map((e=>e.choices)).flat().find((e=>(null==e?void 0:e.value)==this.value))),!!t&&`${s?s+" — ":""}${null==t?void 0:t.label}`}isChecked({value:e,checked:t=!1}){return!!t||!!e&&this.value===e}async setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}async reportValidity(){return this.input.reportValidity()}handleQuery(e){this.searchTerm=e.target.value,this.scSearch.emit(this.searchTerm)}handleSelect(e){const{value:t}=e;this.value===t&&this.unselect?this.value="":this.value=t,this.closeOnSelect&&(this.searchTerm=""),this.scChange.emit(e)}handleSearchChange(){const e=new Fuse(this.choices,{keys:["value","label"]});if(this.searchTerm){const t=e.search(this.searchTerm);this.filteredChoices=t.map((e=>e.item))}else this.filteredChoices=this.choices}handleValueChange(){this.input&&(this.invalid=!this.input.checkValidity())}handleOpenChange(){this.open?(this.scOpen.emit(),this.searchInput&&this.searchInput.triggerFocus()):this.scClose.emit()}handleMenuScroll(e){const t=e.target.scrollTop;e.target.scrollHeight-e.target.offsetHeight-t<5&&this.scScrollEnd.emit()}componentWillLoad(){this.handleSearchChange()}componentDidLoad(){this.formController=new FormSubmitController(this.el).addFormData(),this.open&&this.searchInput&&this.searchInput.triggerFocus()}getItems(){return[...this.el.shadowRoot.querySelectorAll("sc-menu-item")]}handleKeyDown(e){var t,s;const i=e.target,r=this.getItems();if("sc-tag"!==i.tagName.toLowerCase())if("Tab"!==e.key){if(["ArrowDown","ArrowUp"].includes(e.key)){if(e.preventDefault(),this.open||this.handleShow(),"ArrowDown"===e.key)return"up"==arrowFlag&&(itemIndex+=2),itemIndex>r.length-1&&(itemIndex=0),r[itemIndex].setFocus(),arrowFlag="down",void itemIndex++;if("ArrowUp"===e.key)return"down"==arrowFlag&&(itemIndex-=2),itemIndex<0&&(itemIndex=r.length-1),r[itemIndex].setFocus(),arrowFlag="up",void itemIndex--}"Escape"!==e.key?("Enter"===e.key&&(this.open?(null===(s=null===(t=r[itemIndex-1])||void 0===t?void 0:t.click)||void 0===s||s.call(t),this.handleHide(),this.input.focus()):this.handleShow()),e.ctrlKey||e.metaKey||!this.open&&this.hasFocus&&1===e.key.length&&this.handleShow()):this.open&&(this.input.focus(),this.handleHide())}else this.open&&this.handleHide()}disconnectedCallback(){var e;null===(e=this.formController)||void 0===e||e.removeFormData()}renderIcon(e){return isValidURL(e)?h("img",{src:e,alt:"icon",slot:"prefix",class:"choice__icon--image"}):h("sc-icon",{name:e,slot:"prefix",class:"choice__icon"})}renderItem(e,t){var s;return(null===(s=null==e?void 0:e.choices)||void 0===s?void 0:s.length)?h("sc-menu-label",{key:t},e.label):h("sc-menu-item",{class:{"is-unavailable":null==e?void 0:e.unavailable},key:t,checked:this.isChecked(e),value:null==e?void 0:e.value,onClick:()=>!e.disabled&&this.handleSelect(e),onKeyDown:t=>{"Enter"!==t.key&&" "!==t.key||e.disabled||(t.preventDefault(),t.stopImmediatePropagation(),this.handleSelect(e))},disabled:e.disabled,"aria-label":e.label,"aria-selected":this.isChecked(e)?"true":"false",role:"option"},e.label,!!(null==e?void 0:e.description)&&h("div",{class:"select__description"},null==e?void 0:e.description),h("div",{slot:"suffix"},null==e?void 0:e.suffix," ",!!(null==e?void 0:e.suffixDescription)&&h("div",{class:"select__suffix-description"},null==e?void 0:e.suffixDescription)),!!(null==e?void 0:e.icon)&&this.renderIcon(e.icon))}render(){var e;return h("div",{key:"68683040050e22d42b281de4277db7c4c029455f",part:"base",class:{select:!0,"select--placeholder":!this.value,"select--focused":this.hasFocus,"select--is-open":!!this.open,"select--disabled":this.disabled,"select--has-choices":!!(null===(e=null==this?void 0:this.choices)||void 0===e?void 0:e.length),"select--squared":this.squared,"select--squared-bottom":this.squaredBottom,"select--squared-top":this.squaredTop,"select--squared-left":this.squaredLeft,"select--squared-right":this.squaredRight}},h("sc-form-control",{key:"bb73c49e745198737d4b9937948313d844bc275e",exportparts:"label, help-text, form-control",size:this.size,required:this.required,label:this.label,help:this.help,inputId:this.inputId,helpId:this.helpId,labelId:this.labelId,name:this.name},h("input",{key:"82773dcd23982f391a5db4655f4dd5c58d516531",class:"select__hidden-input",name:this.name,ref:e=>this.input=e,value:this.value,required:this.required,disabled:this.disabled,"aria-hidden":"true","aria-label":this.displayValue()||this.label||this.placeholder,onBlur:()=>this.handleBlur(),onFocus:()=>this.handleFocus()}),h("sc-dropdown",{key:"3740ef7e084a6767aae1ddcf98ba69c71f7b40b6",exportparts:"trigger, panel",disabled:this.disabled,open:this.open,closeOnSelect:this.closeOnSelect,position:this.position,placement:this.placement,hoist:this.hoist,style:{"--panel-width":"100%"},onScShow:()=>this.handleShow(),onScHide:()=>this.handleHide(),role:"select","aria-open":this.open?"true":"false"},h("slot",{key:"a64baf1e94809d1dbc3d6ee6f16e942876c07905",name:"trigger",slot:"trigger"},h("div",{key:"e159068dc4c3f38c1d68a1d6d6aa332f2a9d0db6",class:"trigger",role:"button",tabIndex:-1,onFocus:()=>this.handleFocus(),onBlur:()=>this.handleBlur()},h("div",{key:"1ceccad638cb81155f484b56397c201ad62205f6",class:"select__value"},h("slot",{key:"ac648746adfdf074771443f7c37dd8e06b5da63b"},this.displayValue()||this.placeholder||wp.i18n.__("Select...","surecart"))),h("sc-icon",{key:"f50c09fcd9ecec7be30ad2e7217e41106332d419",exportparts:"base:caret",class:"select__caret",name:"chevron-down"}))),this.search&&h("sc-input",{key:"349b0523187b24411473c29d03bd70ca358d3958",exportparts:"base:search__base, input:search__input, form-control:search__form-control",placeholder:this.searchPlaceholder||wp.i18n.__("Search...","surecart"),onScInput:e=>this.handleQuery(e),class:"search",clearable:!0,part:"search",value:this.searchTerm,ref:e=>this.searchInput=e,"aria-label":wp.i18n.__("Type to search","surecart"),onKeyDown:e=>e.stopPropagation()},this.loading&&h("sc-spinner",{key:"5554320c519bfc9720c277f7a095baade6a4e060",exportparts:"base:spinner__base",style:{"--spinner-size":"0.5em"},slot:"suffix"})),h("sc-menu",{key:"b90327f7074b375bd7a8b7e410e10c9b86ab9193",style:{maxHeight:"210px",overflow:"auto"},exportparts:"base:menu__base",onScroll:e=>this.handleMenuScroll(e),"aria-multiselectable":"false"},h("slot",{key:"39d5ba88616e0409aed589b8e783506ac1c1e506",name:"prefix"}),(this.filteredChoices||[]).map(((e,t)=>[this.renderItem(e,t),(e.choices||[]).map((e=>this.renderItem(e,t)))])),this.loading&&h("div",{key:"b4ee30141d0480b394433c05e0805c25ac7f3578",class:"loading"},h("sc-spinner",{key:"c56c0d1deddf19328e549f01ce881791abc96809",exportparts:"base:spinner__base"})),!this.loading&&!this.filteredChoices.length&&h("div",{key:"fa5f5c684e8c0ff8e06f93197eb7e48a91f52e6f",class:"select__empty",part:"empty"},wp.i18n.__("Nothing Found","surecart")),h("slot",{key:"ed737037da49ea52c4c0ce2578df6cc28b961631",name:"suffix"})))))}get el(){return this}static get watchers(){return{searchTerm:["handleSearchChange"],choices:["handleSearchChange"],value:["handleValueChange"],open:["handleOpenChange"]}}static get style(){return ScSelectStyle0}},[1,"sc-select",{autocomplete:[1],placeholder:[1],searchPlaceholder:[1,"search-placeholder"],value:[1537],choices:[1040],unselect:[4],required:[516],loading:[4],search:[4],closeOnSelect:[4,"close-on-select"],name:[513],help:[1],label:[1],size:[513],position:[1],placement:[513],invalid:[1540],open:[1028],disabled:[4],showParentLabel:[4,"show-parent-label"],hoist:[4],squared:[4],squaredBottom:[4,"squared-bottom"],squaredTop:[4,"squared-top"],squaredLeft:[4,"squared-left"],squaredRight:[4,"squared-right"],hasFocus:[32],searchTerm:[32],filteredChoices:[32],setCustomValidity:[64],reportValidity:[64]},[[0,"keydown","handleKeyDown"]],{searchTerm:["handleSearchChange"],choices:["handleSearchChange"],value:["handleValueChange"],open:["handleOpenChange"]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-select","sc-dropdown","sc-form-control","sc-icon","sc-input","sc-menu","sc-menu-item","sc-menu-label","sc-spinner","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-select":customElements.get(e)||customElements.define(e,ScSelectDropdown);break;case"sc-dropdown":customElements.get(e)||defineCustomElement$9();break;case"sc-form-control":customElements.get(e)||defineCustomElement$8();break;case"sc-icon":customElements.get(e)||defineCustomElement$7();break;case"sc-input":customElements.get(e)||defineCustomElement$6();break;case"sc-menu":customElements.get(e)||defineCustomElement$5();break;case"sc-menu-item":customElements.get(e)||defineCustomElement$4();break;case"sc-menu-label":customElements.get(e)||defineCustomElement$3();break;case"sc-spinner":customElements.get(e)||defineCustomElement$2();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$1()}}))}export{ScSelectDropdown as S,defineCustomElement as d};