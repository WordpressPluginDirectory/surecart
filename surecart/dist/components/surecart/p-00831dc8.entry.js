import{r as e,h as s}from"./p-e97fde0a.js";import{a}from"./p-d9fa04f9.js";import"./p-401e165e.js";import"./p-d3366af3.js";const t=":host{display:block;position:relative}";const d=t;const r=class{constructor(s){e(this,s);this.heading=undefined;this.successUrl=undefined;this.user=undefined;this.loading=undefined;this.error=undefined;this.enableValidation=true}renderEmpty(){return s("slot",{name:"empty"},wp.i18n.__("User not found.","surecart"))}validatePassword(e){const s=new RegExp("^(?=.*?[#?!@$%^&*-]).{6,}$");if(s.test(e))return true;return false}async handleSubmit(e){this.loading=true;this.error="";try{const{password:s}=await e.target.getFormJson();await a({path:`wp/v2/users/me`,method:"PATCH",data:{password:s,meta:{default_password_nag:false}}});if(this.successUrl){window.location.assign(this.successUrl)}else{this.loading=false}}catch(e){this.error=(e===null||e===void 0?void 0:e.message)||wp.i18n.__("Something went wrong","surecart");this.loading=false}}render(){return s("sc-dashboard-module",{key:"40436bfd45bb8db708b2f77e9f559f26e2af0c31",class:"customer-details",error:this.error},s("span",{key:"67e4d630affbdade5bd15ce838babd41992e7a63",slot:"heading"},this.heading||wp.i18n.__("Update Password","surecart")," "),s("slot",{key:"cd8a743ef5aa04b4d7e28a81a9c15be756230e93",name:"end",slot:"end"}),s("sc-card",{key:"496166364718b5bed56c49be6827e82b6b535be1"},s("sc-form",{key:"39103b7e7836aad2b0557719f35bafe52e44fe0b",onScFormSubmit:e=>this.handleSubmit(e)},s("sc-password",{key:"f8694d9d76b63bb0489034549d43a6d9ae2c0c1b",enableValidation:this.enableValidation,label:wp.i18n.__("New Password","surecart"),name:"password",confirmation:true,required:true}),s("div",{key:"a40fa7dd4aa35adcc913881e0b113dfdf85fd68e"},s("sc-button",{key:"c986e5ba39945bc47059e571cfd6c5fb05891a3a",type:"primary",full:true,submit:true},wp.i18n.__("Update Password","surecart"))))),this.loading&&s("sc-block-ui",{key:"1e11eabf4912cfa6fbf544c6aae791e2f7a6b19b",spinner:true}))}};r.style=d;export{r as sc_wordpress_password_edit};
//# sourceMappingURL=p-00831dc8.entry.js.map