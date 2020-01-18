import React, { PureComponent } from 'react'
import { TextProperties } from './base/Text.properties'
import { TextBase } from './base/Text.component'
import { Editable } from '../../annotations/Editable'
import { ComponentResources } from '../ComponentResources'
import { TextConfiguration } from './Text.configuration'

@Editable(ComponentResources.Text, TextConfiguration)
export class Text extends PureComponent<TextProperties> {
  render() {
    const { text, variant } = this.props
    return <TextBase text={text} variant={variant} />
  }
}
