import{r as e,h as t,a as s}from"./p-e97fde0a.js";import{a as i}from"./p-d9fa04f9.js";import{o as a}from"./p-b719a497.js";import{a as r}from"./p-401e165e.js";import"./p-d3366af3.js";const o=":host{display:block;position:relative}.charges-list{display:grid;gap:1em}";const d=o;const n=class{constructor(t){e(this,t);this.query={page:1,per_page:10};this.heading=undefined;this.showPagination=true;this.allLink=undefined;this.charges=[];this.loading=undefined;this.loaded=undefined;this.error=undefined;this.pagination={total:0,total_pages:0}}componentWillLoad(){a(this.el,(()=>{this.getItems()}))}async getItems(){try{this.loading=true;const e=await i({path:r(`surecart/v1/charges/`,{expand:["checkout","checkout.order"],...this.query}),parse:false});this.pagination={total:parseInt(e.headers.get("X-WP-Total")),total_pages:parseInt(e.headers.get("X-WP-TotalPages"))};this.charges=await e.json()}catch(e){if(e===null||e===void 0?void 0:e.message){this.error=e.message}else{this.error=wp.i18n.__("Something went wrong","surecart")}console.error(this.error)}finally{this.loading=false;this.loaded=true}}renderRefundStatus(e){if(e===null||e===void 0?void 0:e.fully_refunded){return t("sc-tag",{type:"danger"},wp.i18n.__("Refunded","surecart"))}if(e===null||e===void 0?void 0:e.refunded_amount){return t("sc-tag",{type:"warning"},wp.i18n.__("Partially Refunded","surecart"))}return t("sc-tag",{type:"success"},wp.i18n.__("Paid","surecart"))}renderEmpty(){return t("sc-stacked-list-row",{"mobile-size":0},t("slot",{name:"empty"},wp.i18n.__("You have no saved payment methods.","surecart")))}renderLoading(){return t("sc-stacked-list-row",{style:{"--columns":"2"},"mobile-size":0},t("div",{style:{padding:"0.5em"}},t("sc-skeleton",{style:{width:"30%",marginBottom:"0.75em"}}),t("sc-skeleton",{style:{width:"20%",marginBottom:"0.75em"}}),t("sc-skeleton",{style:{width:"40%"}})))}renderContent(){var e;if(this.loading&&!this.loaded){return this.renderLoading()}if(((e=this.charges)===null||e===void 0?void 0:e.length)===0){return this.renderEmpty()}return this.charges.map((e=>{var s;const{created_at_date:i,display_amount:a}=e;return t("sc-stacked-list-row",{style:{"--columns":"4"},"mobile-size":600,href:r(window.location.href,{action:"show",model:"order",id:(s=e.checkout.order)===null||s===void 0?void 0:s.id})},t("strong",null,i),t("sc-text",{style:{"--color":"var(--sc-color-gray-500)"}},wp.i18n.sprintf(wp.i18n.__("#%s","surecart"),e.checkout.order.number)),t("div",null,this.renderRefundStatus(e)),t("strong",null,a))}))}nextPage(){this.query.page=this.query.page+1;this.getItems()}prevPage(){this.query.page=this.query.page-1;this.getItems()}render(){var e;return t("sc-dashboard-module",{key:"694ccddceb466addce8c4a5efa52d8def0f15a6c",class:"charges-list",error:this.error},t("span",{key:"2e67a7595708193402c8cf063375e08db97820d6",slot:"heading"},t("slot",{key:"a3710378d7c579f0cd487d65710591baee0a2798",name:"heading"},this.heading||wp.i18n.__("Payment History","surecart"))),!!this.allLink&&t("sc-button",{key:"078a935096b4413d116a3ca1c999b4b21f8b6317",type:"link",href:this.allLink,slot:"end"},wp.i18n.__("View all","surecart"),t("sc-icon",{key:"481a0cc8557aee9bd1b6972e55d6cd89105d97f9",name:"chevron-right",slot:"suffix"})),t("sc-card",{key:"50e7c7956538bd21e6f39eec8488600c363e5ecb","no-padding":true,style:{"--overflow":"hidden"}},t("sc-stacked-list",{key:"fe09dc61473d1a8fcb788a9ed57515497d601df5"},this.renderContent())),this.showPagination&&t("sc-pagination",{key:"a5a06f247799e7579cf53ad0d6e0eb2c209e40be",page:this.query.page,perPage:this.query.per_page,total:this.pagination.total,totalPages:this.pagination.total_pages,totalShowing:(e=this===null||this===void 0?void 0:this.charges)===null||e===void 0?void 0:e.length,onScNextPage:()=>this.nextPage(),onScPrevPage:()=>this.prevPage()}),this.loading&&this.loaded&&t("sc-block-ui",{key:"496fb42b86d4cd66fb8b9cd7dbb7cce2cef0f3d1",spinner:true}))}get el(){return s(this)}};n.style=d;export{n as sc_charges_list};
//# sourceMappingURL=p-227f95c9.entry.js.map