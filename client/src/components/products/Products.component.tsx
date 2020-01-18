import React, { PureComponent } from 'react';
import { Editable } from '../../annotations/Editable';
import { ComponentResources } from '../ComponentResources';
import { HeadingBase } from '../heading/base/Heading.component';
import { ProductsProperties } from './Products.properties';

@Editable(ComponentResources.Products)
export class Products extends PureComponent<ProductsProperties> {
  render() {
    return this.props.items ? (
      this.props.items.map(product => <p>{product.title}</p>)
    ) : (
      <HeadingBase variant="Secondary" label="no products available" />
    );
  }
}
