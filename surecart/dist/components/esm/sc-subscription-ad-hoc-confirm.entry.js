import { r as registerInstance, h } from './index-745b6bec.js';
import { i as intervalString } from './price-af9f0dbf.js';
import { a as addQueryArgs } from './add-query-args-0e2a8393.js';
import './currency-a0c9bff4.js';

const scSubscriptionAdHocConfirmCss = ":host{display:block}";
const ScSubscriptionAdHocConfirmStyle0 = scSubscriptionAdHocConfirmCss;

const ScSubscriptionAdHocConfirm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.heading = undefined;
        this.price = undefined;
        this.busy = false;
    }
    async handleSubmit(e) {
        const { ad_hoc_amount } = await e.target.getFormJson();
        this.busy = true;
        return window.location.assign(addQueryArgs(window.location.href, {
            action: 'confirm',
            ad_hoc_amount,
        }));
    }
    render() {
        return (h("sc-dashboard-module", { key: '32e8c6be4af146b63d425d602eac48f07668e10e', heading: this.heading || wp.i18n.__('Enter An Amount', 'surecart'), class: "subscription-switch" }, h("sc-card", { key: '2f64c708ce6a28ea424b4249a49ee120aaa5d91f' }, h("sc-form", { key: 'c4e9286bfe8bb007acd9aceb10f743a47815fb8c', onScSubmit: e => this.handleSubmit(e) }, h("sc-price-input", { key: 'f233141f3077ebefbac95d7a8c5d2a757198cad2', label: "Amount", name: "ad_hoc_amount", autofocus: true, required: true }, h("span", { key: '8fae917f4487547cfea3c3b4a4ffee2095dad1ea', slot: "suffix", style: { opacity: '0.75' } }, intervalString(this.price))), h("sc-button", { key: '2ea768fec371d0f5d81c82ea797df35deeff2bf7', type: "primary", full: true, submit: true, loading: this.busy }, wp.i18n.__('Next', 'surecart'), " ", h("sc-icon", { key: '8111a2e4cb64316027d486ff99a1dae6d47444b2', name: "arrow-right", slot: "suffix" })))), this.busy && h("sc-block-ui", { key: '8ff9e6934238daa04e9f02c45740b9b1add68073', style: { zIndex: '9' } })));
    }
};
ScSubscriptionAdHocConfirm.style = ScSubscriptionAdHocConfirmStyle0;

export { ScSubscriptionAdHocConfirm as sc_subscription_ad_hoc_confirm };

//# sourceMappingURL=sc-subscription-ad-hoc-confirm.entry.js.map