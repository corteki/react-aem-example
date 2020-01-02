import React from "react";
import { ResponsiveGrid } from "@adobe/cq-react-editable-components";
import { Resource } from "../../annotations/resource/Resource";
import { ComponentResources } from "../ComponentResources";

@Resource(ComponentResources.Container, undefined, true)
export class Container extends ResponsiveGrid {
    render() {
        return (
            <div className={`${(super.containerProps.className || '')}  ${this.props.gridClassNames}`}>
                { super.childComponents }
                { super.placeholderComponent }
            </div>
        )
    }

}