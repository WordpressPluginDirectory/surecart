"use strict";const mutations=require("./mutations-ddd639e5.js"),address=require("./address-4c70d641.js"),currentCheckout=()=>mutations.getCheckout(mutations.state.formId,mutations.state.mode),checkoutIsLocked=(e="")=>{var t;return e?mutations.state.locks.some((t=>t===e)):!!(null===(t=mutations.state.locks)||void 0===t?void 0:t.length)},getLineItemByProductId=e=>{var t,s;return((null===(s=null===(t=mutations.state.checkout)||void 0===t?void 0:t.line_items)||void 0===s?void 0:s.data)||[]).find((t=>{var s,d;return(null===(d=null===(s=null==t?void 0:t.price)||void 0===s?void 0:s.product)||void 0===d?void 0:d.id)===e}))},fullShippingAddressRequired=()=>{var e;return"full"===(null===(e=mutations.state.checkout)||void 0===e?void 0:e.shipping_address_accuracy_requirement)},shippingAddressRequired=()=>{var e,t;return"full"===(null===(e=mutations.state.checkout)||void 0===e?void 0:e.shipping_address_accuracy_requirement)||"tax"===(null===(t=mutations.state.checkout)||void 0===t?void 0:t.shipping_address_accuracy_requirement)},getCompleteAddress=(e="shipping")=>{var t,s;if(!address.isAddressComplete(null===(t=mutations.state.checkout)||void 0===t?void 0:t[`${e}_address`]))return;const{line_1:d,line_2:i,...r}=(null===(s=mutations.state.checkout)||void 0===s?void 0:s.shipping_address)||{};return{line1:d,line2:i,...r}};exports.checkoutIsLocked=checkoutIsLocked,exports.currentCheckout=currentCheckout,exports.fullShippingAddressRequired=fullShippingAddressRequired,exports.getCompleteAddress=getCompleteAddress,exports.getLineItemByProductId=getLineItemByProductId,exports.shippingAddressRequired=shippingAddressRequired;