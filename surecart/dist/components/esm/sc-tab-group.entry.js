import { r as registerInstance, c as createEvent, h, a as getElement } from './index-745b6bec.js';

const scTabGroupCss = ":host{display:block;--sc-tabs-min-width:225px}.tab-group{display:flex;flex-wrap:wrap;position:relative;border:solid 1px transparent;border-radius:0;flex-direction:row}@media screen and (min-width: 750px){.tab-group{flex-wrap:nowrap}}.tab-group__tabs{display:flex;flex-wrap:wrap;flex:0 0 auto;flex-direction:column;margin-bottom:var(--sc-spacing-xx-large)}.tab-group__nav-container{order:1;flex:1 0 100%}@media screen and (min-width: 750px){.tab-group__nav-container{min-width:var(--sc-tabs-min-width);flex:0 1 auto}}.tab-group__body{flex:1 1 auto;order:2}@media screen and (min-width: 750px){.tab-group__body{padding:0 var(--sc-spacing-xx-large)}}::slotted(sc-tab){margin-bottom:var(--sc-spacing-xx-small)}";
const ScTabGroupStyle0 = scTabGroupCss;

const ScTabGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scTabHide = createEvent(this, "scTabHide", 7);
        this.scTabShow = createEvent(this, "scTabShow", 7);
        this.tabs = [];
        this.panels = [];
        this.activeTab = undefined;
    }
    componentDidLoad() {
        this.syncTabsAndPanels();
        this.setAriaLabels();
        this.setActiveTab(this.getActiveTab() || this.tabs[0], { emitEvents: false });
        this.mutationObserver = new MutationObserver(() => {
            this.syncTabsAndPanels();
        });
        this.mutationObserver.observe(this.el, { attributes: true, childList: true, subtree: true });
    }
    disconnectedCallback() {
        this.mutationObserver.disconnect();
    }
    syncTabsAndPanels() {
        this.tabs = this.getAllTabs();
        this.panels = this.getAllPanels();
    }
    setAriaLabels() {
        // Link each tab with its corresponding panel
        this.tabs.map(tab => {
            const panel = this.panels.find(el => el.name === tab.panel);
            if (panel) {
                tab.setAttribute('aria-controls', panel.getAttribute('id'));
                panel.setAttribute('aria-labelledby', tab.getAttribute('id'));
            }
        });
    }
    handleClick(event) {
        const target = event.target;
        const tab = target.closest('sc-tab');
        const tabGroup = tab === null || tab === void 0 ? void 0 : tab.closest('sc-tab-group');
        // Ensure the target tab is in this tab group
        if (tabGroup !== this.el) {
            return;
        }
        if (tab) {
            this.setActiveTab(tab, { scrollBehavior: 'smooth' });
        }
    }
    handleKeyDown(event) {
        const target = event.target;
        const tab = target.closest('sc-tab');
        const tabGroup = tab === null || tab === void 0 ? void 0 : tab.closest('sc-tab-group');
        // Ensure the target tab is in this tab group
        if (tabGroup !== this.el) {
            return true;
        }
        // Activate a tab
        if (['Enter', ' '].includes(event.key)) {
            if (tab) {
                this.setActiveTab(tab, { scrollBehavior: 'smooth' });
            }
        }
        // Move focus left or right
        if (['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
            const activeEl = document.activeElement;
            if (activeEl && activeEl.tagName.toLowerCase() === 'sc-tab') {
                let index = this.tabs.indexOf(activeEl);
                if (event.key === 'Home') {
                    index = 0;
                }
                else if (event.key === 'End') {
                    index = this.tabs.length - 1;
                }
                else if (event.key === 'ArrowUp') {
                    index = Math.max(0, index - 1);
                }
                else if (event.key === 'ArrowDown') {
                    index = Math.min(this.tabs.length - 1, index + 1);
                }
                this.tabs[index].triggerFocus({ preventScroll: true });
                event.preventDefault();
            }
        }
    }
    /** Handle the active tabl selection */
    setActiveTab(tab, options) {
        options = Object.assign({
            emitEvents: true,
            scrollBehavior: 'auto',
        }, options);
        if (tab && tab !== this.activeTab && !tab.disabled) {
            const previousTab = this.activeTab;
            this.activeTab = tab;
            this.tabs.map(el => (el.active = el === this.activeTab));
            this.panels.map(el => (el.active = el.name === this.activeTab.panel));
            // Emit events
            if (options.emitEvents) {
                if (previousTab) {
                    this.scTabHide.emit(previousTab.panel);
                }
                this.scTabShow.emit(this.activeTab.panel);
            }
        }
    }
    getActiveTab() {
        const tabs = this.getAllTabs();
        return tabs.find(el => el.active);
    }
    getAllChildren() {
        const slots = this.el.shadowRoot.querySelectorAll('slot');
        const tags = ['sc-tab', 'sc-tab-panel'];
        const allSlots = Array.from(slots)
            .map(slot => { var _a; return (_a = slot === null || slot === void 0 ? void 0 : slot.assignedElements) === null || _a === void 0 ? void 0 : _a.call(slot, { flatten: true }); })
            .flat();
        return allSlots
            .reduce((all, el) => { var _a; return all.concat(el, [...(((_a = el === null || el === void 0 ? void 0 : el.querySelectorAll) === null || _a === void 0 ? void 0 : _a.call(el, '*')) || [])]); }, [])
            .filter((el) => { var _a, _b; return tags.includes((_b = (_a = el === null || el === void 0 ? void 0 : el.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase) === null || _b === void 0 ? void 0 : _b.call(_a)); });
    }
    /** Get all child tabs */
    getAllTabs(includeDisabled = false) {
        return this.getAllChildren().filter((el) => {
            return includeDisabled ? el.tagName.toLowerCase() === 'sc-tab' : el.tagName.toLowerCase() === 'sc-tab' && !el.disabled;
        });
    }
    /** Get all child panels */
    getAllPanels() {
        return this.getAllChildren().filter((el) => el.tagName.toLowerCase() === 'sc-tab-panel');
    }
    render() {
        return (h("div", { key: '42984fb7245ae4c4f9de3444b2dc1820cf48f0ba', part: "base", class: {
                'tab-group': true,
            }, onClick: e => this.handleClick(e), onKeyDown: e => this.handleKeyDown(e) }, h("div", { key: '8db3ca2ee6aca82627ccb493afd6a6ba26a20e83', class: "tab-group__nav-container", part: "nav" }, h("div", { key: '316cd32e6d76083b5febddabd56d0066d07a7b7d', class: "tab-group__nav" }, h("div", { key: 'be28b3615032847ddefd1891b7682d5cef567d78', part: "tabs", class: "tab-group__tabs", role: "tablist" }, h("slot", { key: '6f93424f8bcca74023ea4403c17fa2ad2010c397', onSlotchange: () => this.syncTabsAndPanels(), name: "nav" })))), h("div", { key: '7c41bf4756a182d46c893e5a13e14b6a38f126f3', part: "body", class: "tab-group__body" }, h("slot", { key: 'eb696ab209c5b5b7af314a1c15067c0e28e7af00', onSlotchange: () => this.syncTabsAndPanels() }))));
    }
    get el() { return getElement(this); }
};
ScTabGroup.style = ScTabGroupStyle0;

export { ScTabGroup as sc_tab_group };

//# sourceMappingURL=sc-tab-group.entry.js.map