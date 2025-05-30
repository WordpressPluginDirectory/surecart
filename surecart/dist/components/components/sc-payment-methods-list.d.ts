import type { Components, JSX } from "../types/components";

interface ScPaymentMethodsList extends Components.ScPaymentMethodsList, HTMLElement {}
export const ScPaymentMethodsList: {
    prototype: ScPaymentMethodsList;
    new (): ScPaymentMethodsList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
