'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');

const scTestModeInfoCss = "sc-test-mode-info .sc-test-mode-info-content ol{padding-left:1em;margin:0;font-size:12px}sc-test-mode-info .sc-test-mode-info-content ol img{width:320px;margin-top:12px}sc-test-mode-info .sc-test-mode-info-content ul{padding-left:1em}sc-test-mode-info .sc-test-mode-info-footer{display:flex;justify-content:space-between}sc-test-mode-info .sc-test-mode-info-footer sc-button>sc-icon{margin-left:4px}sc-test-mode-info .sc-test-mode-info-footer>span{font-size:var(--sc-button-font-size-small);align-content:center;opacity:0.75}sc-test-mode-info sc-popover{--panel-width:25em}#wpadminbar #wp-admin-bar-sc_change_checkout_mode>.ab-item:before{content:\"\\f186\"/\"\";top:2px}";
const ScTestModeInfoStyle0 = scTestModeInfoCss;

const ScTestModeInfo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        var _a, _b;
        return (index.h("sc-popover", { key: '033ad2eb65c35f9371e91e39bf2acb84a9c50c5b', skidding: 30 }, index.h("slot", { key: '3807a6df25151329e563da0ef29712488a0cab37', name: "trigger", slot: "trigger" }), index.h("span", { key: '8035969d549b6b26ed1ef42e1078becf0b3447de', slot: "title" }, wp.i18n.__('How to switch from Test to Live mode', 'surecart')), index.h("div", { key: 'b51cf7ded74b734a88d3e9fdb28054d087fdb76d', class: "sc-test-mode-info-content", slot: "content" }, index.h("ol", { key: 'bcaa7ea8628b702acd134f59e07faccc4c2ff501' }, index.h("li", { key: 'f824a254c5b7a2c72297b9ac6c3ae15eb3c2c1aa' }, wp.i18n.__('From the Admin Bar', 'surecart'), index.h("ul", { key: '1bbe53aa0940715976a25fd560b1a12f571fa5d8' }, index.h("li", { key: '94bdced3c7fd2a848487f99fee2f41ead8ef61a4' }, wp.i18n.__('Select any product & proceed to its checkout page.', 'surecart')), index.h("li", { key: '52796a9049a092da2a174b9e33cc84aa431010f3' }, wp.i18n.__('Access the dropdown menu & select the live mode.', 'surecart'))), index.h("img", { key: '29d43dfc9cc40b02271525db01cfdc072a7510a0', src: `${(_a = window === null || window === void 0 ? void 0 : window.scData) === null || _a === void 0 ? void 0 : _a.plugin_url}/images/change-from-adminbar.png`, alt: wp.i18n.__('Screenshot showing how to change mode from the admin bar', 'surecart') })), index.h("li", { key: '6526669a84ae5916ffdb4c1165795bf54d3ea614' }, wp.i18n.__('From the Editor', 'surecart'), index.h("ul", { key: '2dc4b1fdfbf117cfc7e5d3de7eb7e88f5567b618' }, index.h("li", { key: '54b7d13e8c4c33047475dc31de36f532be2c8c48' }, wp.i18n.__('Navigate to the custom Forms section under SureCart.', 'surecart')), index.h("li", { key: '2a21c92374630820c7d1843e5700fcf3175e7ecb' }, wp.i18n.__('Select the checkout form.', 'surecart')), index.h("li", { key: '9898f864b71bd1921fa5bf75218137d9eace1cde' }, wp.i18n.__('Select "Live" from the dropdown. Hit Update!', 'surecart'))), index.h("img", { key: '8ddd8cad6d2d58032eaed03a9ebaa1c52b928949', src: `${(_b = window === null || window === void 0 ? void 0 : window.scData) === null || _b === void 0 ? void 0 : _b.plugin_url}/images/change-from-editor.png`, alt: wp.i18n.__('Screenshot showing how to change mode from the editor', 'surecart') })))), index.h("div", { key: '84d2b2d7ad3cbb33aedaf37259815858af8f50b6', class: "sc-test-mode-info-footer", slot: "footer" }, index.h("sc-button", { key: '34da66a1d5d350fce11ea2b8b8c1713bab08522f', size: "small", type: "link", target: "_blank", href: "https://surecart.com/docs/how-to-make-test-payments/" }, wp.i18n.__('Documentation ', 'surecart'), " ", index.h("sc-icon", { key: 'dbd2a606e6e25740995512fa286d535a7c83599a', name: "external-link" })), index.h("sc-button", { key: '214022d9561d5266c845fbf302f70375332652b2', size: "small", type: "link", target: "_blank", href: "https://surecart.com/contact-us/" }, wp.i18n.__('Open a ticket ', 'surecart'), " ", index.h("sc-icon", { key: 'c66eae2990dfb300b2744f4b421adff931bedcc8', name: "external-link" })))));
    }
};
ScTestModeInfo.style = ScTestModeInfoStyle0;

exports.sc_test_mode_info = ScTestModeInfo;

//# sourceMappingURL=sc-test-mode-info.cjs.entry.js.map