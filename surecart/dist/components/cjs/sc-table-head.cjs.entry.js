'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');

const scTableHeadCss = ":host{display:table-header-group}::slotted(*){display:table-row}";
const ScTableHeadStyle0 = scTableHeadCss;

const ScTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '635166dacf7b750d56cae6b101e851270c604700' }, index.h("slot", { key: 'd7e7f01c011c36c65f8fa105d3a1d9868b46fcbd' })));
    }
};
ScTable.style = ScTableHeadStyle0;

exports.sc_table_head = ScTable;

//# sourceMappingURL=sc-table-head.cjs.entry.js.map