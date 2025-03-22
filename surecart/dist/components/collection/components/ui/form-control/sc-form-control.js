import{h}from"@stencil/core";import{isRtl}from"../../../functions/page-align";import{__}from"@wordpress/i18n";export class ScFormControl{constructor(){this.size="medium",this.name=void 0,this.showLabel=!0,this.label=void 0,this.labelId=void 0,this.inputId=void 0,this.required=!1,this.help=void 0,this.helpId=void 0}render(){return h("div",{key:"2c3eb413190db88aa40cb466d2a3e0084ce5af85",part:"form-control",class:{"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":!!this.label&&this.showLabel,"form-control--has-help-text":!!this.help,"form-control--is-required":!!this.required,"form-control--is-rtl":isRtl()}},h("label",{key:"6b25725eea42a230ad9d9d20a2bfb40479653bd0",part:"label",id:this.labelId,class:"form-control__label",htmlFor:this.inputId,"aria-hidden":this.label?"false":"true"},h("slot",{key:"bb3ed1ff3dd9d7c005d1dfcf3879f5cbb901446c",name:"label"},this.label),h("slot",{key:"0ee4996c2c0cddfee048e187161ed235eaab3a85",name:"label-end"}),!!this.required&&h("span",{key:"c1fdcf100314e62890b6cd11958a16ee3954ee1b","aria-hidden":"true",class:"required"}," ","*"),h("sc-visually-hidden",{key:"9859c4b5e43a7a1f3ae2e024142124170e308a44"},this.required?__("required","surecart"):"")),h("div",{key:"06c0eb8d00bb385c8fcde4f40fdef154eee2bd1e",part:"input",class:"form-control__input"},h("slot",{key:"b9ebf8416a9345228fb3401e03cf0c4abeaac781"})),this.help&&h("div",{key:"05bca02a3f9ba4a5d5fb6fcd14757ed9f3e36ecd",part:"help-text",id:this.helpId,class:"form-control__help-text"},h("slot",{key:"257086051fa61ada053eaebd4caf5d76fd4b50f4",name:"help-text"},this.help)))}static get is(){return"sc-form-control"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-form-control.scss"]}}static get styleUrls(){return{$:["sc-form-control.css"]}}static get properties(){return{size:{type:"string",mutable:!1,complexType:{original:"'small' | 'medium' | 'large'",resolved:'"large" | "medium" | "small"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"Size of the label"},attribute:"size",reflect:!0,defaultValue:"'medium'"},name:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Name for the input. Used for validation errors."},attribute:"name",reflect:!1},showLabel:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Show the label."},attribute:"show-label",reflect:!1,defaultValue:"true"},label:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Input label."},attribute:"label",reflect:!1},labelId:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Input label id."},attribute:"label-id",reflect:!1},inputId:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Input id."},attribute:"input-id",reflect:!1},required:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Whether the input is required."},attribute:"required",reflect:!1,defaultValue:"false"},help:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Help text"},attribute:"help",reflect:!1},helpId:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Help id"},attribute:"help-id",reflect:!1}}}static get elementRef(){return"el"}}