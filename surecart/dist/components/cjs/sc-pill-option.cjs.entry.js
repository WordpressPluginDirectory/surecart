'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');

const scPillOptionCss = ".sc-pill-option__wrapper{display:flex;flex-wrap:wrap;gap:var(--sc-pill-option-gap, var(--sc-spacing-x-small))}.sc-pill-option__button{display:inline-block;line-height:1;text-align:center;font-size:var(--sc-pill-option-font-size, var(--sc-font-size-medium));font-weight:var(--sc-pill-option-font-weight, var(--sc-font-weight-semibold));border-color:var(--sc-pill-option-border-color, var(--sc-color-gray-300));border-style:var(--sc-pill-option-border-style, solid);border-width:var(--sc-pill-option-border-width, 1px);color:var(--sc-pill-option-text-color, var(--sc-color-gray-700));background:var(--sc-pill-option-background-color, transparent);border-radius:var(--sc-pill-option-border-radius, var(--sc-border-radius-medium));padding-top:var(--sc-pill-option-padding-top, var(--sc-spacing-small));padding-bottom:var(--sc-pill-option-padding-bottom, var(--sc-spacing-small));padding-left:var(--sc-pill-option-padding-left, var(--sc-spacing-medium));padding-right:var(--sc-pill-option-padding-right, var(--sc-spacing-medium));transition:border var(--sc-transition-medium) ease;cursor:pointer;position:relative;transition:var(--sc-input-transition, var(--sc-transition-medium)) background-color, var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) border, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow, var(--sc-input-transition, var(--sc-transition-medium)) opacity}.sc-pill-option__button::-moz-focus-inner{border:0}.sc-pill-option__button--disabled{text-decoration:line-through}.sc-pill-option__button--selected,.sc-pill-option__button--selected:focus,.sc-pill-option__button--selected:hover,.sc-pill-option__button--selected:active{background-color:var(--sc-pill-option-active-background-color, var(--sc-color-primary-500));border-color:var(--sc-pill-option-active-background-color, var(--sc-color-primary-500));color:var(--sc-pill-option-active-text-color, white);box-shadow:var(--sc-shadow-small)}.sc-pill-option__button:focus-visible{outline-color:var(--sc-pill-option-active-background-color, var(--sc-color-primary-500));outline-offset:4px;outline-width:2px}.sc-pill-option__button:hover:not(.sc-pill-option__button--selected),.sc-pill-option__button:focus:not(.sc-pill-option__button--selected),.sc-pill-option__button:active:not(.sc-pill-option__button--selected){background-color:var(--sc-button-default-hover-background-color, var(--sc-pill-option-background-color, var(--sc-color-white)));border-color:var(--sc-pill-option-active-background-color, var(--sc-button-default-focus-border-color, var(--primary-background)));color:var(--sc-pill-option-text-color, var(--sc-color-gray-700))}";
const ScPillOptionStyle0 = scPillOptionCss;

const ScPillOption = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.isSelected = undefined;
        this.isUnavailable = undefined;
    }
    render() {
        return (index.h("button", { key: '37bd13e3dba28c58a83f3508baf0861bcdfb5555', class: {
                'sc-pill-option__button': true,
                'sc-pill-option__button--disabled': this.isUnavailable,
                'sc-pill-option__button--selected': this.isSelected,
            }, tabindex: "0", role: "radio", "aria-checked": this.isSelected ? 'true' : 'false', "aria-disabled": this.isUnavailable ? 'true' : 'false' }, index.h("slot", { key: '26a47d5fe8519f9a058379782c38b80712ccd21e' })));
    }
};
ScPillOption.style = ScPillOptionStyle0;

exports.sc_pill_option = ScPillOption;

//# sourceMappingURL=sc-pill-option.cjs.entry.js.map