import React, { Component } from 'react';
import {ResponsiveGrid} from '@adobe/cq-react-editable-components';
import { Editable } from '../../annotations/resource/EditableComponent';
import { ComponentResources } from '../ComponentResources';
// import { CartConfiguration } from './Cart.configuration';
// import { CartProperties } from './Cart.properties';
// import { ButtonBase } from '../button/base/Button.component';


@Editable(ComponentResources.Cart, undefined, true)
export class Cart extends ResponsiveGrid {

    get containerProps() {
        let containerProps = super.containerProps;
        containerProps.className = (containerProps.className || '') + ' Container ' +  this.props.gridClassNames;
        return containerProps;
    }

    render() {
        const {label} = this.props;
        return (
            <>
                <p>{label}</p>
                <div {...this.containerProps}>
                    { super.childComponents }
                    { super.placeholderComponent }
                </div>
            </>
        )
    }
}