!function(){"use strict";var e=window.wp.blocks,t=window.wp.blockEditor,r=window.wp.i18n,c=JSON.parse('{"UU":"surecart/price-setup-fee"}');(0,e.registerBlockType)(c.UU,{edit:e=>{let{context:c}=e;const s=(0,t.useBlockProps)(),{setup_fee_text:i}=c["surecart/price"];return React.createElement("div",s,i||scData?.currency_symbol+(0,r.__)("12 Signup Fee","surecart"))}})}();