import { r as registerInstance, c as createEvent, h, F as Fragment, a as getElement } from './index-745b6bec.js';
import { i as isRtl } from './page-align-0cdacf32.js';

const scProductLineItemCss = ":host {\n  display: block;\n  font-family: var(--sc-font-sans);\n}\n\n.item {\n  box-sizing: border-box;\n  margin: 0px;\n  min-width: 0px;\n  display: flex;\n  gap: 18px;\n  justify-content: space-between;\n  align-items: stretch;\n  width: 100%;\n  border-bottom: none;\n}\n.item--has-image {\n  align-items: center;\n  container-type: inline-size;\n}\n@container (max-width: 290px) {\n  .item--has-image .item__image {\n    display: none;\n  }\n}\n.item__scratch-price {\n  opacity: 0.75;\n  font-size: 90%;\n  text-decoration: line-through;\n}\n\n.item__text {\n  box-sizing: border-box;\n  margin: 0px;\n  min-width: 0px;\n  display: flex;\n  gap: 6px;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex: 1 1 0%;\n}\n\n.item__text-details {\n  display: grid;\n}\n\n.item__title {\n  box-sizing: border-box;\n  min-width: 0px;\n  margin: 0;\n  color: var(--sc-line-item-title-color, var(--sc-input-label-color));\n  font-size: var(--sc-font-size-medium);\n  font-weight: var(--sc-font-weight-semibold);\n  line-height: var(--sc-line-height-dense);\n  cursor: pointer;\n  display: -webkit-box;\n  display: -moz-box;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  -moz-box-lines: 3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.item__variant {\n  box-sizing: border-box;\n  min-width: 0px;\n  margin: 0;\n  color: var(--sc-input-label-color);\n  font-weight: var(--sc-font-weight-semibold);\n  font-size: var(--sc-font-size-small);\n  line-height: var(--sc-line-height-dense);\n  cursor: pointer;\n  display: -webkit-box;\n  display: -moz-box;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  -moz-box-lines: 3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.item__suffix {\n  flex: 1;\n  box-sizing: border-box;\n  margin: 0px;\n  min-width: 0px;\n  display: flex;\n  flex-direction: column;\n  -webkit-box-pack: start;\n  justify-content: space-between;\n  align-items: flex-end;\n  min-width: 100px;\n  margin-left: auto;\n  align-self: center;\n}\n\n.product-line-item__removable .item__suffix {\n  align-self: flex-start;\n}\n\n.product-line-item__editable .item__suffix {\n  align-self: flex-start;\n}\n\n.product-line-item__purchasable-status {\n  font-size: var(--sc-font-size-x-small);\n  color: var(--sc-input-error-text-color);\n}\n\n.item__price {\n  text-align: right;\n  max-width: 100%;\n}\n\n.item__description {\n  color: var(--sc-price-label-color, var(--sc-input-help-text-color));\n  font-size: var(--sc-price-label-font-size, var(--sc-input-help-text-font-size-medium));\n  line-height: var(--sc-line-height-dense);\n}\n\n.item__image,\n.attachment-thumbnail {\n  width: var(--sc-product-line-item-image-size, 4em);\n  height: var(--sc-product-line-item-image-size, 4em);\n  object-fit: cover;\n  border-radius: 4px;\n  border: solid 1px var(--sc-input-border-color, var(--sc-input-border));\n  display: block;\n  box-shadow: var(--sc-input-box-shadow);\n  align-self: flex-start;\n}\n\n.product__description {\n  display: flex;\n  gap: 0.5em;\n  align-items: center;\n}\n\n.price {\n  font-size: var(--sc-font-size-medium);\n  font-weight: var(--sc-font-weight-semibold);\n  color: var(--sc-input-label-color);\n  line-height: var(--sc-line-height-dense);\n}\n\n.price__description {\n  font-size: var(--sc-font-size-small);\n  line-height: var(--sc-line-height-dense);\n  color: var(--sc-input-label-color);\n  opacity: 0.75;\n}\n\n.item__remove {\n  cursor: pointer;\n  color: var(--sc-color-gray-400);\n  margin-bottom: var(--sc-spacing-small);\n}\n\n.actions__divider {\n  opacity: 0.25;\n  margin: 0 0.2em;\n}\n\n.item--is-rtl.price {\n  text-align: right;\n}\n.item--is-rtl .item__price {\n  text-align: left;\n}\n\n.base {\n  display: grid;\n  gap: var(--sc-spacing-x-small);\n}\n\n.fee__description {\n  opacity: 0.75;\n}";
const ScProductLineItemStyle0 = scProductLineItemCss;

const ScProductLineItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scUpdateQuantity = createEvent(this, "scUpdateQuantity", 3);
        this.scRemove = createEvent(this, "scRemove", 3);
        this.image = undefined;
        this.name = undefined;
        this.priceName = undefined;
        this.variantLabel = '';
        this.quantity = undefined;
        this.amount = undefined;
        this.displayAmount = undefined;
        this.scratchDisplayAmount = undefined;
        this.fees = undefined;
        this.setupFeeTrialEnabled = true;
        this.scratchAmount = undefined;
        this.currency = undefined;
        this.interval = undefined;
        this.trialDurationDays = undefined;
        this.removable = undefined;
        this.editable = true;
        this.max = undefined;
        this.sku = '';
        this.purchasableStatusDisplay = undefined;
    }
    renderAmount() {
        if (this.displayAmount) {
            return this.displayAmount;
        }
        return h("sc-format-number", { type: "currency", currency: this.currency, value: this.amount });
    }
    renderPriceAndInterval() {
        const setupFee = (this.fees || []).find(fee => fee.fee_type === 'setup');
        if (this.trialDurationDays) {
            return (h("div", { class: "item__price", part: "price" }, h("div", { class: "price", part: "price__amount" }, !!setupFee && !this.setupFeeTrialEnabled ? (h(Fragment, null, setupFee === null || setupFee === void 0 ? void 0 :
                setupFee.description, " ", setupFee === null || setupFee === void 0 ? void 0 :
                setupFee.display_amount)) : (wp.i18n.sprintf(wp.i18n._n('%d day free', '%d days free', this.trialDurationDays, 'surecart'), this.trialDurationDays))), h("div", { class: "price__description", part: "price__description" }, 
            /** translators: 30 days free, Then $99 per month. */
            wp.i18n.__('Then', 'surecart'), ' ', !!this.scratchAmount && this.scratchAmount > this.amount && (h(Fragment, null, h("span", { class: "item__scratch-price" }, this.scratchDisplayAmount), ' ')), h("span", { slot: "price__amount" }, this.renderAmount()), " ", !!this.interval && this.interval, !!setupFee && !this.setupFeeTrialEnabled && wp.i18n.sprintf(wp.i18n._n('starting in %d day', 'starting in %d days', this.trialDurationDays, 'surecart'), this.trialDurationDays))));
        }
        return (h("div", { class: "item__price", part: "price" }, h("div", { class: "price", part: "price__amount" }, !!this.scratchAmount && this.scratchAmount !== this.amount && (h(Fragment, null, h("span", { class: "item__scratch-price" }, this.scratchDisplayAmount), ' ')), this.renderAmount()), !!this.interval && (h("div", { class: "price__description", part: "price__description" }, this.interval))));
    }
    renderPurchasableStatus() {
        if (!this.purchasableStatusDisplay)
            return null;
        return (h("div", { class: "item__price", part: "price" }, h("div", { class: "product-line-item__purchasable-status", part: "price__amount" }, this.purchasableStatusDisplay)));
    }
    render() {
        var _a, _b;
        return (h("div", { key: '8c39cff1fe1818cedfba25c9cbb7350bbc250184', class: "base", part: "base" }, h("div", { key: '695926aa83b934b64fe256b9cb132c50c1139a3a', part: "product-line-item", class: {
                'item': true,
                'item--has-image': !!((_a = this.image) === null || _a === void 0 ? void 0 : _a.src),
                'item--is-rtl': isRtl(),
                'product-line-item__editable': this.editable,
                'product-line-item__removable': this.removable,
            } }, !!((_b = this.image) === null || _b === void 0 ? void 0 : _b.src) && h("img", { key: '9b8044a0b44519d427e4df3ee90d02b66718304e', ...this.image, part: "image" }), h("div", { key: 'bb489a3749fc8bf46915c3099013f09efd676d06', class: "item__text", part: "text" }, h("div", { key: '567082bd9b913479a6b6243b2303a906f10bed6e', class: "item__text-details" }, h("div", { key: '37f84b7032d998a0ef765fc6b2fbca9975303484', class: "item__title", part: "title" }, h("slot", { key: '4db217ab914fa42957897c9796df7871de1fac94', name: "title" }, this.name)), h("div", { key: '772ba7b2bcaddda71e23b3b4ff88a693b8c28082', class: "item__description item__price-variant", part: "description" }, h("div", { key: '85b9425c9075d3c81f402df7052f0388cb97479f' }, this.variantLabel), h("div", { key: 'e73b10f8ab345d105a8647417eb33b0b46cfd8e9' }, this.priceName), !!this.sku && (h("div", { key: '0e43491c45053e06dddc6672cc313cce00b6f399' }, wp.i18n.__('SKU:', 'surecart'), " ", this.sku))), !this.editable && this.quantity > 1 && (h("span", { key: '43b79796f461acee024b704b2030bec3b2886166', class: "item__description", part: "static-quantity" }, wp.i18n.__('Qty:', 'surecart'), " ", this.quantity))), this.editable && (h("sc-quantity-select", { key: '8605a6bd8893e68ed24d8a636995d1772962eba4', max: this.max || Infinity, exportparts: "base:quantity, minus:quantity__minus, minus-icon:quantity__minus-icon, plus:quantity__plus, plus-icon:quantity__plus-icon, input:quantity__input", clickEl: this.el, quantity: this.quantity, size: "small", onScChange: e => e.detail && this.scUpdateQuantity.emit(e.detail), "aria-label": 
            /** translators: %1$s: product name, %2$s: product price name */
            wp.i18n.sprintf(wp.i18n.__('Change Quantity - %1$s %2$s', 'surecart'), this.name, this.priceName) }))), h("div", { key: '5c73379f01b9d73412f1ac20cfca817fec9d359a', class: "item__suffix", part: "suffix" }, this.removable ? (h("sc-icon", { exportparts: "base:remove-icon__base", class: "item__remove", name: "x", onClick: () => this.scRemove.emit(), onKeyDown: e => {
                if (e.key === 'Enter') {
                    this.scRemove.emit();
                }
            }, tabindex: "0", "aria-label": wp.i18n.sprintf(wp.i18n.__('Remove Item - %1$s %2$s', 'surecart'), this.name, this.priceName) })) : (h("div", null)), this.renderPriceAndInterval(), this.renderPurchasableStatus())), (this.fees || []).map(fee => {
            if (this.trialDurationDays && !this.setupFeeTrialEnabled && fee.fee_type === 'setup')
                return null;
            return (h("sc-line-item", { exportparts: "price-description:line-item__price-description" }, h("span", { slot: "price-description" }, fee === null || fee === void 0 ? void 0 : fee.display_amount), h("span", { slot: "price-description", class: "fee__description" }, fee === null || fee === void 0 ? void 0 : fee.description)));
        })));
    }
    get el() { return getElement(this); }
};
ScProductLineItem.style = ScProductLineItemStyle0;

const scQuantitySelectCss = ":host{--focus-ring:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary);--border-radius:var(--sc-quantity-border-radius, var(--sc-input-border-radius-small));display:inline-block}.input__control{text-align:center;line-height:1;border:none;flex:1;max-width:var(--sc-quantity-input-max-width, 35px);background-color:var(--sc-input-control-background-color, var(--sc-color-white));color:var(--sc-input-control-color, var(--sc-color-black));-moz-appearance:textfield}.input__control::-webkit-outer-spin-button,.input__control::-webkit-inner-spin-button{-webkit-appearance:none}.input__control::-webkit-search-decoration,.input__control::-webkit-search-cancel-button,.input__control::-webkit-search-results-button,.input__control::-webkit-search-results-decoration{-webkit-appearance:none}.input__control:-webkit-autofill,.input__control:-webkit-autofill:hover,.input__control:-webkit-autofill:focus,.input__control:-webkit-autofill:active{box-shadow:0 0 0 var(--sc-input-height-large) var(--sc-input-background-color-hover) inset !important;-webkit-text-fill-color:var(--sc-input-color)}.input__control::placeholder{color:var(--sc-input-placeholder-color);user-select:none}.input__control:focus{outline:none}.quantity--trigger{cursor:pointer;white-space:nowrap}.quantity{position:relative;display:inline-block;width:var(--sc-quantity-select-width, 100px);height:var(--sc-quantity-control-height, var(--sc-input-height-small));display:flex;align-items:stretch;font-family:var(--sc-input-font-family);font-weight:var(--sc-input-font-weight);letter-spacing:var(--sc-input-letter-spacing);background-color:var(--sc-input-background-color);border:var(--sc-input-border);border-radius:var(--border-radius);vertical-align:middle;box-shadow:var(--sc-input-box-shadow);transition:var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) border, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow}.quantity:hover:not(.quantity--disabled){background-color:var(--sc-input-background-color-hover);border-color:var(--sc-input-border-color-hover)}.quantity:hover:not(.quantity--disabled) .quantity__control{color:var(--sc-input-color-hover)}.quantity.quantity--focused:not(.quantity--disabled){background-color:var(--sc-input-background-color-focus);border-color:var(--sc-input-border-color-focus);box-shadow:var(--focus-ring)}.quantity.quantity--focused:not(.quantity--disabled) .quantity__control{color:var(--sc-input-color-focus)}.quantity.quantity--disabled{background-color:var(--sc-input-background-color-disabled);border-color:var(--sc-input-border-color-disabled);opacity:0.5;cursor:not-allowed}.quantity.quantity--disabled .input__control{color:var(--sc-input-color-disabled)}.quantity.quantity--disabled .input__control::placeholder{color:var(--sc-input-placeholder-color-disabled)}.button__decrease,.button__increase{display:inline-block;text-align:center;vertical-align:middle;line-height:0;height:auto;top:1px;bottom:1px;width:32px;background:var(--sc-input-background-color);color:var(--sc-input-help-text-color);cursor:pointer;font-size:13px;user-select:none;border-width:0;padding:0}.button__decrease:hover:not(.button--disabled) .quantity__control,.button__increase:hover:not(.button--disabled) .quantity__control{color:var(--sc-input-color-hover)}.button__decrease.button--disabled,.button__increase.button--disabled{background-color:var(--sc-input-background-color-disabled);border-color:var(--sc-input-border-color-disabled);opacity:0.5;cursor:not-allowed}.quantity--small{width:var(--sc-quantity-select-width-small, 76px);height:var(--sc-quantity-control-height-small, 26px)}.quantity--small .button__decrease,.quantity--small .button__increase{width:24px;border:none}.quantity--small .input__control{max-width:24px}.button__decrease{left:1px;border-radius:var(--border-radius) 0 0 var(--border-radius);border-right:var(--sc-input-border)}.button__increase{right:1px;border-radius:0 var(--border-radius) var(--border-radius) 0;border-left:var(--sc-input-border)}.quantity--is-rtl .button__decrease{right:1px;border-left:var(--sc-input-border);border-right:0}.quantity--is-rtl .button__increase{left:1px;border-right:var(--sc-input-border);border-left:0}";
const ScQuantitySelectStyle0 = scQuantitySelectCss;

const ScQuantitySelect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scChange = createEvent(this, "scChange", 7);
        this.scInput = createEvent(this, "scInput", 7);
        this.scFocus = createEvent(this, "scFocus", 7);
        this.scBlur = createEvent(this, "scBlur", 7);
        this.clickEl = undefined;
        this.disabled = undefined;
        this.max = Infinity;
        this.min = 1;
        this.quantity = 0;
        this.size = 'medium';
        this.hasFocus = undefined;
    }
    decrease() {
        if (this.disabled)
            return;
        this.quantity = Math.max(this.quantity - 1, this.min);
        this.scChange.emit(this.quantity);
        this.scInput.emit(this.quantity);
    }
    increase() {
        if (this.disabled)
            return;
        this.quantity = Math.min(this.quantity + 1, this.max);
        this.scChange.emit(this.quantity);
        this.scInput.emit(this.quantity);
    }
    handleBlur() {
        this.hasFocus = false;
        this.scBlur.emit();
    }
    handleFocus() {
        this.hasFocus = true;
        this.scFocus.emit();
    }
    handleChange() {
        this.quantity = parseInt(this.input.value) > this.max ? this.max : parseInt(this.input.value);
        this.scChange.emit(this.quantity);
    }
    handleInput() {
        this.quantity = parseInt(this.input.value);
        this.scInput.emit(this.quantity);
    }
    render() {
        return (h("div", { key: '9223957d5c201fa2e1053326169d8dc37ecab5da', part: "base", class: {
                'quantity': true,
                // States
                'quantity--focused': this.hasFocus,
                'quantity--disabled': this.disabled,
                'quantity--is-rtl': isRtl(),
                'quantity--small': this.size === 'small',
            } }, h("button", { key: 'c3aa6bc3941b0d82179013f23c827a02d0a14d3f', part: "minus", "aria-label": wp.i18n.__('Decrease quantity by one.', 'surecart'), "aria-disabled": this.disabled || (this.quantity <= this.min && this.min > 1), class: { 'button__decrease': true, 'button--disabled': this.quantity <= this.min && this.min > 1 }, onClick: () => this.quantity > this.min && this.decrease(), disabled: this.disabled || (this.quantity <= this.min && this.min > 1) }, h("sc-icon", { key: 'ad6b0a8fe8cdd11b7db62a3a6baf3478e0c8e006', name: "minus", exportparts: "base:minus__icon" })), h("input", { key: '4865b01efae93e9a5c917888b4b10800cab86ac2', part: "input", class: "input__control", ref: el => (this.input = el), step: "1", type: "number", max: this.max, min: this.min, value: this.quantity, disabled: this.disabled, autocomplete: "off", role: "spinbutton", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.quantity, "aria-disabled": this.disabled, onChange: () => this.handleChange(), onInput: () => this.handleInput(), onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur() }), h("button", { key: '82a547f9d40d3e27281da45fd0588ff690a91909', part: "plus", "aria-label": wp.i18n.__('Increase quantity by one.', 'surecart'), class: { 'button__increase': true, 'button--disabled': this.quantity >= this.max }, onClick: () => this.quantity < this.max && this.increase(), "aria-disabled": this.disabled || this.quantity >= this.max, disabled: this.disabled || this.quantity >= this.max }, h("sc-icon", { key: '22d2bd6ea9f784906c5bcf1c788f97b8b6d820e1', name: "plus", exportparts: "base:plus__icon" }))));
    }
    get el() { return getElement(this); }
};
ScQuantitySelect.style = ScQuantitySelectStyle0;

export { ScProductLineItem as sc_product_line_item, ScQuantitySelect as sc_quantity_select };

//# sourceMappingURL=sc-product-line-item_2.entry.js.map