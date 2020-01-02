import React, { Component } from 'react';
import {ResponsiveGrid} from '@adobe/cq-react-editable-components';
import { Resource } from '../../annotations/resource/Resource';
import { ComponentResources } from '../ComponentResources';
// import { CartConfiguration } from './Cart.configuration';
// import { CartProperties } from './Cart.properties';
// import { ButtonBase } from '../button/base/Button.component';


@Resource(ComponentResources.Cart, undefined, true)
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