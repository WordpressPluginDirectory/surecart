import{r as t,h as s,a}from"./p-e97fde0a.js";import{a as i}from"./p-9a298389.js";import{o as e}from"./p-b719a497.js";import{a as o}from"./p-401e165e.js";import"./p-d3366af3.js";const h=":host{display:block}.download__details{opacity:0.75}";const n=h;const d=class{constructor(s){t(this,s);this.query={page:1,per_page:10};this.allLink=undefined;this.heading=undefined;this.isCustomer=undefined;this.requestNonce=undefined;this.purchases=[];this.loading=undefined;this.busy=undefined;this.error=undefined;this.pagination={total:0,total_pages:0}}componentWillLoad(){e(this.el,(()=>{this.initialFetch()}))}async initialFetch(){if(!this.isCustomer){return}try{this.loading=true;await this.getItems()}catch(t){console.error(this.error);this.error=(t===null||t===void 0?void 0:t.message)||wp.i18n.__("Something went wrong","surecart")}finally{this.loading=false}}async fetchItems(){if(!this.isCustomer){return}try{this.busy=true;await this.getItems()}catch(t){console.error(this.error);this.error=(t===null||t===void 0?void 0:t.message)||wp.i18n.__("Something went wrong","surecart")}finally{this.busy=false}}async getItems(){const t=await await i({path:o(`surecart/v1/purchases/`,{expand:["product","product.downloads","download.media"],downloadable:true,revoked:false,...this.query}),parse:false});this.pagination={total:parseInt(t.headers.get("X-WP-Total")),total_pages:parseInt(t.headers.get("X-WP-TotalPages"))};this.purchases=await t.json();return this.purchases}nextPage(){this.query.page=this.query.page+1;this.fetchItems()}prevPage(){this.query.page=this.query.page-1;this.fetchItems()}render(){var t;return s("sc-purchase-downloads-list",{key:"04e824264bde23af842200a6f2fa2390cfc5c04b",heading:this.heading,allLink:this.allLink&&this.pagination.total_pages>1?this.allLink:"",loading:this.loading,busy:this.busy,requestNonce:this.requestNonce,error:this.error,purchases:this.purchases},s("span",{key:"6a643e3b1318c26a49ca1cd0def04a6d6b0805d0",slot:"heading"},s("slot",{key:"4a694f4c99702075a5623724a85759ff7428e103",name:"heading"},this.heading||wp.i18n.__("Downloads","surecart"))),s("sc-pagination",{key:"31e7c8727284485644e1823d8975d55d62e6f2e6",slot:"after",page:this.query.page,perPage:this.query.per_page,total:this.pagination.total,totalPages:this.pagination.total_pages,totalShowing:(t=this===null||this===void 0?void 0:this.purchases)===null||t===void 0?void 0:t.length,onScNextPage:()=>this.nextPage(),onScPrevPage:()=>this.prevPage()}))}get el(){return a(this)}};d.style=n;export{d as sc_dashboard_downloads_list};
//# sourceMappingURL=p-80cab708.entry.js.map