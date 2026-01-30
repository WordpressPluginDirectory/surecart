'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');
const pure = require('./pure-bd6f0a6e.js');
const fetch = require('./fetch-d374a251.js');
const addQueryArgs = require('./add-query-args-49dcb630.js');
require('./remove-query-args-b57e8cd3.js');

const scStripeAddMethodCss = "sc-stripe-add-method{display:block}sc-stripe-add-method [hidden]{display:none}.loader{display:grid;height:128px;gap:2em}.loader__row{display:flex;align-items:flex-start;justify-content:space-between;gap:1em}.loader__details{display:grid;gap:0.5em}";
const ScStripeAddMethodStyle0 = scStripeAddMethodCss;

const ScStripeAddMethod = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.liveMode = true;
        this.customerId = undefined;
        this.successUrl = undefined;
        this.loading = undefined;
        this.loaded = undefined;
        this.error = undefined;
        this.paymentIntent = undefined;
    }
    componentWillLoad() {
        this.createPaymentIntent();
    }
    async handlePaymentIntentCreate() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        // we need this data.
        if (!((_c = (_b = (_a = this.paymentIntent) === null || _a === void 0 ? void 0 : _a.processor_data) === null || _b === void 0 ? void 0 : _b.stripe) === null || _c === void 0 ? void 0 : _c.publishable_key) || !((_f = (_e = (_d = this.paymentIntent) === null || _d === void 0 ? void 0 : _d.processor_data) === null || _e === void 0 ? void 0 : _e.stripe) === null || _f === void 0 ? void 0 : _f.account_id))
            return;
        // check if stripe has been initialized
        if (!this.stripe) {
            try {
                this.stripe = await pure.pure.loadStripe((_j = (_h = (_g = this.paymentIntent) === null || _g === void 0 ? void 0 : _g.processor_data) === null || _h === void 0 ? void 0 : _h.stripe) === null || _j === void 0 ? void 0 : _j.publishable_key, { stripeAccount: (_m = (_l = (_k = this.paymentIntent) === null || _k === void 0 ? void 0 : _k.processor_data) === null || _l === void 0 ? void 0 : _l.stripe) === null || _m === void 0 ? void 0 : _m.account_id });
            }
            catch (e) {
                this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Stripe could not be loaded', 'surecart');
                // don't continue.
                return;
            }
        }
        // load the element.
        // we need a stripe instance and client secret.
        if (!((_q = (_p = (_o = this.paymentIntent) === null || _o === void 0 ? void 0 : _o.processor_data) === null || _p === void 0 ? void 0 : _p.stripe) === null || _q === void 0 ? void 0 : _q.client_secret) || !this.container) {
            console.warn('do not have client secret or container');
            return;
        }
        // get the computed styles.
        const styles = getComputedStyle(document.body);
        // we have what we need, load elements.
        this.elements = this.stripe.elements({
            clientSecret: (_t = (_s = (_r = this.paymentIntent) === null || _r === void 0 ? void 0 : _r.processor_data) === null || _s === void 0 ? void 0 : _s.stripe) === null || _t === void 0 ? void 0 : _t.client_secret,
            appearance: {
                variables: {
                    colorPrimary: styles.getPropertyValue('--sc-color-primary-500'),
                    colorText: styles.getPropertyValue('--sc-input-label-color'),
                    borderRadius: styles.getPropertyValue('--sc-input-border-radius-medium'),
                    colorBackground: styles.getPropertyValue('--sc-input-background-color'),
                    fontSizeBase: styles.getPropertyValue('--sc-input-font-size-medium'),
                },
                rules: {
                    '.Input': {
                        border: styles.getPropertyValue('--sc-input-border'),
                    },
                    '.Input::placeholder': {
                        color: styles.getPropertyValue('--sc-input-placeholder-color'),
                    },
                },
            },
        });
        // create the payment element.
        this.elements
            .create('payment', {
            wallets: {
                applePay: 'never',
                googlePay: 'never',
            },
        })
            .mount('.sc-payment-element-container');
        this.element = this.elements.getElement('payment');
        this.element.on('ready', () => (this.loaded = true));
    }
    async createPaymentIntent() {
        try {
            this.loading = true;
            this.error = '';
            this.paymentIntent = await fetch.apiFetch({
                method: 'POST',
                path: 'surecart/v1/payment_intents',
                data: {
                    processor_type: 'stripe',
                    live_mode: this.liveMode,
                    customer_id: this.customerId,
                    refresh_status: true,
                },
            });
        }
        catch (e) {
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
        }
        finally {
            this.loading = false;
        }
    }
    /**
     * Handle form submission.
     */
    async handleSubmit(e) {
        var _a;
        e.preventDefault();
        this.loading = true;
        try {
            const confirmed = await this.stripe.confirmSetup({
                elements: this.elements,
                confirmParams: {
                    return_url: addQueryArgs.addQueryArgs(this.successUrl, {
                        payment_intent: (_a = this.paymentIntent) === null || _a === void 0 ? void 0 : _a.id,
                    }),
                },
                redirect: 'always',
            });
            if (confirmed === null || confirmed === void 0 ? void 0 : confirmed.error) {
                this.error = confirmed.error.message;
                throw confirmed.error;
            }
        }
        catch (e) {
            console.error(e);
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
            this.loading = false;
        }
    }
    render() {
        return (index.h("sc-form", { key: '0260dd1ffb40458da0117b68e6d34b76de86c37b', onScFormSubmit: e => this.handleSubmit(e) }, this.error && (index.h("sc-alert", { key: 'f37159e9c4d4ca53dcd24f8f590c55d3792fe0cc', open: !!this.error, type: "danger" }, index.h("span", { key: '5a0b6d8862aea1c47ad8df8b634e959c9d919b30', slot: "title" }, wp.i18n.__('Error', 'surecart')), this.error)), index.h("div", { key: '5607320cab5afaab53ff623401963871e0e42bab', class: "loader", hidden: this.loaded }, index.h("div", { key: 'f433c13e354686e6202b83ffd7b1b99e9714900a', class: "loader__row" }, index.h("div", { key: 'cbc2d5586719f47f426763eb67f3f55cb6cbaa5f', style: { width: '50%' } }, index.h("sc-skeleton", { key: '7b16a1befd8556b72d1f91d18c85c7f2668da0f6', style: { width: '50%', marginBottom: '0.5em' } }), index.h("sc-skeleton", { key: '6ab1617ba80886f4ed017e10db2dede6a53b0bae' })), index.h("div", { key: '76f9865f9453d7911135cc6a476000736fe4fc52', style: { flex: '1' } }, index.h("sc-skeleton", { key: 'ae8b73938400468a58bbac893f7e440b4a28dab0', style: { width: '50%', marginBottom: '0.5em' } }), index.h("sc-skeleton", { key: '6e05b9e7d49c95a3a3feb56db964655b5e2366f8' })), index.h("div", { key: '0bc06c6472775a0f180ff0e3940437af968cb9a5', style: { flex: '1' } }, index.h("sc-skeleton", { key: '942120e05cc37e12de9d0293cc510783bfca92e9', style: { width: '50%', marginBottom: '0.5em' } }), index.h("sc-skeleton", { key: '6c6522d33fde9557bce4350e313afb45e78138d3' }))), index.h("div", { key: '4c36274c74a2f1a5e249925a676bc1e4f7ad1657', class: "loader__details" }, index.h("sc-skeleton", { key: 'a2d8d3d668f1aa338c49c2787d7271cc1a1e73f2', style: { height: '1rem' } }), index.h("sc-skeleton", { key: '2d791fbe403634027316694162b69d7c02a9aa6e', style: { height: '1rem', width: '30%' } }))), index.h("div", { key: 'c9fecf9302d6f2c5d80da3ee6fe2dbb70631f995', hidden: !this.loaded, class: "sc-payment-element-container", ref: el => (this.container = el) }), index.h("sc-button", { key: '6cf8669d7ef2ce345be944f6201074ae3b88add7', type: "primary", submit: true, full: true, loading: this.loading }, wp.i18n.__('Save Payment Method', 'surecart'))));
    }
    static get watchers() { return {
        "paymentIntent": ["handlePaymentIntentCreate"]
    }; }
};
ScStripeAddMethod.style = ScStripeAddMethodStyle0;

exports.sc_stripe_add_method = ScStripeAddMethod;

//# sourceMappingURL=sc-stripe-add-method.cjs.entry.js.map