import{Fragment,h}from"@stencil/core";import{__}from"@wordpress/i18n";import{addQueryArgs}from"@wordpress/url";import apiFetch from"../../../../functions/fetch";export class ScSubscriptionCancel{constructor(){this.heading=void 0,this.backUrl=void 0,this.successUrl=void 0,this.subscription=void 0,this.protocol=void 0,this.reason=void 0,this.comment=void 0,this.loading=void 0,this.busy=void 0,this.error=void 0}async cancelSubscription(){var e,t;try{this.error="",this.busy=!0,await apiFetch({path:addQueryArgs(`/surecart/v1/subscriptions/${null===(e=this.subscription)||void 0===e?void 0:e.id}/cancel`,{cancellation_act:{...this.comment?{comment:this.comment}:{},cancellation_reason_id:null===(t=this.reason)||void 0===t?void 0:t.id}}),method:"PATCH"}),this.scCancelled.emit()}catch(e){this.error=(null==e?void 0:e.message)||__("Something went wrong","surecart"),this.busy=!1}}renderContent(){var e,t;return this.loading?this.renderLoading():h(Fragment,null,"pending"===(null===(e=null==this?void 0:this.protocol)||void 0===e?void 0:e.cancel_behavior)?h("div",{slot:"description"},__("Your plan will be canceled, but is still available until the end of your billing period on","surecart")," ",h("strong",null,null===(t=null==this?void 0:this.subscription)||void 0===t?void 0:t.current_period_end_at_date),". ",__("If you change your mind, you can renew your subscription.","surecart")):h("div",{slot:"description"},__("Your plan will be canceled immediately and cannot be modified later.","surecart")))}renderLoading(){return h("div",{style:{padding:"0.5em"}},h("sc-skeleton",{style:{width:"30%",marginBottom:"0.75em"}}),h("sc-skeleton",{style:{width:"20%",marginBottom:"0.75em"}}),h("sc-skeleton",{style:{width:"40%"}}))}render(){return h("sc-dashboard-module",{key:"19f4836d6e004723bdd92b1a5d818bcda683e1bd",heading:this.heading||__("Cancel your plan","surecart"),class:"subscription-cancel",error:this.error,style:{"--sc-dashboard-module-spacing":"1em"}},this.renderContent(),h("sc-flex",{key:"25d70e2b9d79928b9871e7a8c9f6c684bc13f057",justifyContent:"flex-start"},h("sc-button",{key:"64ed5dbb7b36c092566c6b98fa695ab527b384b0",type:"primary",loading:this.loading||this.busy,disabled:this.loading||this.busy,onClick:()=>this.cancelSubscription()},__("Cancel Plan","surecart")),h("sc-button",{key:"1ffa35b66b8560701d1c3022864666d7c15fcc6d",style:{color:"var(--sc-color-gray-500"},type:"text",onClick:()=>this.scAbandon.emit(),loading:this.loading||this.busy,disabled:this.loading||this.busy},__("Keep My Plan","surecart"))),this.busy&&h("sc-block-ui",{key:"efbb5939c7521d1ec9ab78d652a7e595c40f565b"}))}static get is(){return"sc-subscription-cancel"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-subscription-cancel.scss"]}}static get styleUrls(){return{$:["sc-subscription-cancel.css"]}}static get properties(){return{heading:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"heading",reflect:!1},backUrl:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"back-url",reflect:!1},successUrl:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"success-url",reflect:!1},subscription:{type:"unknown",mutable:!1,complexType:{original:"Subscription",resolved:"Subscription",references:{Subscription:{location:"import",path:"../../../../types",id:"src/types.ts::Subscription"}}},required:!1,optional:!1,docs:{tags:[],text:""}},protocol:{type:"unknown",mutable:!1,complexType:{original:"SubscriptionProtocol",resolved:"SubscriptionProtocol",references:{SubscriptionProtocol:{location:"import",path:"../../../../types",id:"src/types.ts::SubscriptionProtocol"}}},required:!1,optional:!1,docs:{tags:[],text:""}},reason:{type:"unknown",mutable:!1,complexType:{original:"CancellationReason",resolved:"CancellationReason",references:{CancellationReason:{location:"import",path:"../../../../types",id:"src/types.ts::CancellationReason"}}},required:!1,optional:!1,docs:{tags:[],text:""}},comment:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"comment",reflect:!1}}}static get states(){return{loading:{},busy:{},error:{}}}static get events(){return[{method:"scAbandon",name:"scAbandon",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:""},complexType:{original:"void",resolved:"void",references:{}}},{method:"scCancelled",name:"scCancelled",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:""},complexType:{original:"void",resolved:"void",references:{}}}]}}