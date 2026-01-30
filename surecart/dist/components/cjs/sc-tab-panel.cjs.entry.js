'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');

const scTabPanelCss = ":host{--padding:0;--spacing:var(--sc-spacing-large);display:block}::slotted(*~*){margin-top:var(--spacing)}.tab-panel{border:solid 1px transparent;padding:var(--padding);font-family:var(--sc-font-sans);font-size:var(--sc-font-size-medium)}";
const ScTabPanelStyle0 = scTabPanelCss;

let id = 0;
const ScTabPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.componentId = `tab-panel-${++id}`;
        this.name = '';
        this.active = false;
    }
    render() {
        // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
        this.el.id = this.el.id || this.componentId;
        return (index.h(index.Host, { key: '80e82c91a4e5f84f2ba574a26b9a695c0a4f3f12', style: { display: this.active ? 'block' : 'none' } }, index.h("div", { key: '494c3ed709979a89bf4036004295cc7528a7644d', part: "base", class: "tab-panel", role: "tabpanel", "aria-hidden": this.active ? 'false' : 'true' }, index.h("slot", { key: '42ad2125b75b0b610d62e276494f34a0d84f4e69' }))));
    }
    get el() { return index.getElement(this); }
};
ScTabPanel.style = ScTabPanelStyle0;

exports.sc_tab_panel = ScTabPanel;

//# sourceMappingURL=sc-tab-panel.cjs.entry.js.map