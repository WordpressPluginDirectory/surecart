import { r as registerInstance, c as createEvent, h, a as getElement } from './index-745b6bec.js';
import { c as getCurrencySymbol } from './price-7bb626d0.js';
import { F as FormSubmitController } from './form-data-76641f16.js';
import { m as maybeConvertAmount, i as isZeroDecimal } from './currency-a0c9bff4.js';

const scPriceInputCss = ":host{display:block}";
const ScPriceInputStyle0 = scPriceInputCss;

const ScPriceInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scChange = createEvent(this, "scChange", 7);
        this.scInput = createEvent(this, "scInput", 7);
        this.scFocus = createEvent(this, "scFocus", 7);
        this.scBlur = createEvent(this, "scBlur", 7);
        this.size = 'medium';
        this.name = undefined;
        this.value = '';
        this.pill = false;
        this.label = undefined;
        this.showLabel = true;
        this.help = '';
        this.clearable = false;
        this.placeholder = undefined;
        this.disabled = false;
        this.readonly = false;
        this.minlength = undefined;
        this.maxlength = undefined;
        this.max = undefined;
        this.min = undefined;
        this.required = false;
        this.invalid = false;
        this.autofocus = undefined;
        this.hasFocus = undefined;
        this.currencyCode = undefined;
        this.showCode = undefined;
    }
    async reportValidity() {
        const input = this.input.shadowRoot.querySelector('input');
        input.setCustomValidity('');
        if (this.min && this.value && parseFloat(this.value) < this.min) {
            this.invalid = true;
            input.setCustomValidity(wp.i18n.sprintf(wp.i18n.__('Must be %d or more.', 'surecart'), maybeConvertAmount(this.min, this.currencyCode).toString()));
        }
        if (this.max && this.value && parseFloat(this.value) > this.max) {
            this.invalid = true;
            input.setCustomValidity(wp.i18n.sprintf(wp.i18n.__('Must be %d or less.', 'surecart'), maybeConvertAmount(this.max, this.currencyCode).toString()));
        }
        return input.reportValidity();
    }
    /** Sets focus on the input. */
    async triggerFocus(options) {
        return this.input.triggerFocus(options);
    }
    /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
    async setCustomValidity(message) {
        this.input.setCustomValidity(message);
    }
    /** Removes focus from the input. */
    async triggerBlur() {
        return this.input.blur();
    }
    handleFocusChange() {
        var _a, _b, _c, _d;
        this.hasFocus ? (_b = (_a = this.input) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a) : (_d = (_c = this.input) === null || _c === void 0 ? void 0 : _c.blur) === null || _d === void 0 ? void 0 : _d.call(_c);
    }
    handleChange() {
        this.updateValue();
        this.scChange.emit();
    }
    handleInput() {
        this.updateValue();
        this.scInput.emit();
    }
    updateValue() {
        // This fixes issues on mobile Safari where a decimal point is added to the end of the input value
        // does not have an input value.
        const parsed = parseFloat(this.input.value);
        if (isNaN(parsed)) {
            this.value = '';
            return;
        }
        const val = isZeroDecimal(this.currencyCode) ? parsed : (parsed * 100).toFixed(2);
        this.value = val.toString();
        this.setCustomValidity('');
    }
    componentDidLoad() {
        this.handleFocusChange();
        this.formController = new FormSubmitController(this.el).addFormData();
        document.addEventListener('wheel', () => {
            this.input.triggerBlur();
        });
    }
    disconnectedCallback() {
        var _a;
        (_a = this.formController) === null || _a === void 0 ? void 0 : _a.removeFormData();
    }
    getFormattedValue() {
        if (!this.value)
            return '';
        const parsedAmount = parseFloat(this.value);
        if (isNaN(parsedAmount))
            return '';
        return maybeConvertAmount(parsedAmount, this.currencyCode).toString();
    }
    render() {
        return (h("sc-input", { key: '19e78e4afd3dc79d02b3c74303ddc08d4bb471c0', exportparts: "base, input, form-control, label, help-text, prefix, suffix", size: this.size, label: this.label, showLabel: this.showLabel, help: this.help, ref: el => (this.input = el), type: "text" // we cannot use number because it's basically the worst. https://stackoverflow.blog/2022/12/26/why-the-number-input-is-the-worst-input/
            ,
            name: this.name, disabled: this.disabled, readonly: this.readonly, required: this.required, placeholder: this.placeholder, minlength: this.minlength, maxlength: this.maxlength, min: !!this.min ? this.min / 100 : 0.0, step: 0.01, max: !!this.max ? this.max / 100 : null,
            // TODO: Test These below
            autofocus: this.autofocus, inputmode: 'decimal', onScChange: () => this.handleChange(), onScInput: () => this.handleInput(), onScBlur: () => this.scBlur.emit(), onScFocus: () => this.scFocus.emit(), pattern: "^\\d*(\\.\\d{0,2})?$" // This prevents more than two decimal places
            ,
            value: this.getFormattedValue() }, h("span", { key: 'a5d8d6cb4f044fb31b1bdcd051b0624ea8d77396', style: { opacity: '0.5' }, slot: "prefix" }, getCurrencySymbol(this.currencyCode)), h("span", { key: 'bffef10840c808e28f1093e9df2ac2f693df51df', slot: "suffix" }, h("slot", { key: '29a1511939ec42f49c1e62d0e4eb41b6d8281239', name: "suffix" }, this.showCode && (this === null || this === void 0 ? void 0 : this.currencyCode) && h("span", { key: 'f68c063c14975122d3c2a93331194d98b95e9ec3', style: { opacity: '0.5' } }, this.currencyCode.toUpperCase())))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "hasFocus": ["handleFocusChange"]
    }; }
};
ScPriceInput.style = ScPriceInputStyle0;

export { ScPriceInput as sc_price_input };

//# sourceMappingURL=sc-price-input.entry.js.map