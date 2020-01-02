import { ComponentConfiguration } from "../ComponentConfiguration";
import { CartProperties } from "./Cart.properties";

export const CartConfiguration: ComponentConfiguration<CartProperties> = {
    emptyLabel: 'Cart',
    isEmpty: (props: CartProperties) => {
        return !props || !props.label || props.label.trim().length < 1;
    }
}