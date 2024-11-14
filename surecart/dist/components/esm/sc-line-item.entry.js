import { r as registerInstance, h, a as getElement } from './index-745b6bec.js';
import { i as isRtl } from './page-align-0cdacf32.js';

const scLineItemCss = ":host{display:block;--mobile-size:380px;--price-size:var(--sc-font-size-medium);line-height:var(--sc-line-height-dense)}.item{display:grid;align-items:center;grid-template-columns:auto 1fr 1fr}@media screen and (min-width: var(--mobile-size)){.item{flex-wrap:no-wrap}}.item__title{color:var(--sc-line-item-title-color)}.item__price{color:var(--sc-input-label-color)}.item__title,.item__price{font-size:var(--sc-font-size-medium);font-weight:var(--sc-font-weight-semibold)}.item__description,.item__price-description{font-size:var(--sc-font-size-small);line-height:var(--sc-line-height-dense);color:var(--sc-input-label-color)}::slotted([slot=price-description]){margin-top:var(--sc-line-item-text-margin, 5px);color:var(--sc-input-label-color);text-decoration:none}.item__end{flex:1;display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;align-self:flex-end;width:100%;margin-top:20px}@media screen and (min-width: 280px){.item__end{width:auto;text-align:right;margin-left:20px;margin-top:0}.item--is-rtl .item__end{margin-left:0;margin-right:20px}.item__price-text{text-align:right}}.item__price-currency{font-size:var(--sc-font-size-small);color:var(--sc-input-label-color);text-transform:var(--sc-currency-transform, uppercase);margin-right:8px}.item__text{flex:1}.item__price-description{display:-webkit-box}::slotted([slot=image]){margin-right:20px;width:50px;height:50px;object-fit:cover;border-radius:4px;border:1px solid var(--sc-color-gray-200);display:block;box-shadow:var(--sc-input-box-shadow)}::slotted([slot=price-description]){display:inline-block;width:100%;line-height:1}.item__price-layout{font-size:var(--sc-font-size-x-large);font-weight:var(--sc-font-weight-semibold);display:flex;align-items:center}.item__price{font-size:var(--price-size)}.item_currency{font-weight:var(--sc-font-weight-normal);font-size:var(--sc-font-size-xx-small);color:var(--sc-input-label-color);margin-right:var(--sc-spacing-small);text-transform:var(--sc-currency-text-transform, uppercase)}.item--is-rtl.item__description,.item--is-rtl.item__price-description{text-align:right}.item--is-rtl .item__text{text-align:right}@media screen and (min-width: 280px){.item--is-rtl .item__end{width:auto;text-align:left;margin-left:0;margin-top:0}.item--is-rtl .item__price-text{text-align:left}}";
const ScLineItemStyle0 = scLineItemCss;

const ScLineItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.price = undefined;
        this.currency = undefined;
        this.hasImageSlot = undefined;
        this.hasTitleSlot = undefined;
        this.hasDescriptionSlot = undefined;
        this.hasPriceSlot = undefined;
        this.hasPriceDescriptionSlot = undefined;
        this.hasCurrencySlot = undefined;
    }
    componentWillLoad() {
        this.hasImageSlot = !!this.hostElement.querySelector('[slot="image"]');
        this.hasTitleSlot = !!this.hostElement.querySelector('[slot="title"]');
        this.hasDescriptionSlot = !!this.hostElement.querySelector('[slot="description"]');
        this.hasPriceSlot = !!this.hostElement.querySelector('[slot="price"]');
        this.hasPriceDescriptionSlot = !!this.hostElement.querySelector('[slot="price-description"]');
        this.hasCurrencySlot = !!this.hostElement.querySelector('[slot="currency"]');
    }
    render() {
        return (h("div", { key: '4beddf5121dcc34b89ce431a7cb0da7d6255763a', part: "base", class: {
                'item': true,
                'item--has-image': this.hasImageSlot,
                'item--has-title': this.hasTitleSlot,
                'item--has-description': this.hasDescriptionSlot,
                'item--has-price': this.hasPriceSlot,
                'item--has-price-description': this.hasPriceDescriptionSlot,
                'item--has-price-currency': this.hasCurrencySlot,
                'item--is-rtl': isRtl(),
            } }, h("div", { key: 'cedbb00a13ec8eeeee14f7ab9c4063e2ac6ef484', class: "item__image", part: "image" }, h("slot", { key: 'e05ddaa58c523f7b9bdcd4ebbb34542a1b3962f3', name: "image" })), h("div", { key: 'e9ace1adaa26105fb049cf42c15178cd1320bc3e', class: "item__text", part: "text" }, h("div", { key: '44d805fc9f766715638fbdaa4803e1261469ecc0', class: "item__title", part: "title" }, h("slot", { key: 'c02ec84c790ab08d12ed337a1e383521c8c97389', name: "title" })), h("div", { key: 'fac9f6cd05625be2651c24e66fb26533be6dc002', class: "item__description", part: "description" }, h("slot", { key: '28fa0b43a7ae4e4eaedc87396820b5219090e14d', name: "description" }))), h("div", { key: '41462fdc5813d5ebcc5db8b216a57c2f4514a65d', class: "item__end", part: "price" }, h("div", { key: 'acb9e751f0df2d26c458844aa10745485ed66bdb', class: "item__price-currency", part: "currency" }, h("slot", { key: '1f9238e69dd499b380001069afcec4b63ee5056b', name: "currency" })), h("div", { key: '54444f63ee78972b11532f5cf6e93d0fd4943c07', class: "item__price-text", part: "price-text" }, h("div", { key: '2a0199ba241a9cddd7128501b66efd6f3d727dbf', class: "item__price", part: "price" }, h("slot", { key: 'c78387141ead1dc80e508e932a4e909f6fe84617', name: "price" })), h("div", { key: '91b28d1c53b1d5c0a431fabaae214b0e5e8ed587', class: "item__price-description", part: "price-description" }, h("slot", { key: '4ecabd6d15687d04aa5a4b0f23ed44fafec66078', name: "price-description" }))))));
    }
    get hostElement() { return getElement(this); }
};
ScLineItem.style = ScLineItemStyle0;

export { ScLineItem as sc_line_item };

//# sourceMappingURL=sc-line-item.entry.js.map