import React, { PureComponent } from 'react';
import { HeadingProperties } from './base/Heading.properties';
import { HeadingBase } from './base/Heading.component';
import { Editable } from '../../annotations/Editable';
import { ComponentResources } from '../ComponentResources';
import { HeadingConfiguration } from './Heading.configuration';

@Editable(ComponentResources.Heading, HeadingConfiguration)
export class Heading extends PureComponent<HeadingProperties> {
  render() {
    const { variant, label } = this.props;
    return <HeadingBase label={label} variant={variant} />;
  }
}
