import { ComponentConfiguration } from '../ComponentConfiguration';
import { ProductsProperties } from './Products.properties';

export const ProductsConfiguration: ComponentConfiguration<ProductsProperties> = {
  emptyLabel: 'Products',
  isEmpty: (props: ProductsProperties) => {
    return !props.items || props.items.length === 0;
  },
};
