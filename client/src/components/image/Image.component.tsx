import React, { PureComponent } from 'react';
import { Editable } from '../../annotations/Editable';
import { ComponentResources } from '../ComponentResources';
import { ImageProperties } from './Image.properties';
import { ImageConfiguration } from './Image.Configuration';
import './styles/Image.styles.scss';

@Editable(ComponentResources.Image, ImageConfiguration)
export class Image extends PureComponent<ImageProperties> {
  render() {
    const { src, alt, title } = this.props;
    return <img className="image" src={src} alt={alt} title={title}></img>;
  }
}
