import React from "react";
import { ResponsiveGrid } from "@adobe/cq-react-editable-components";
import { Resource } from "../../annotations/resource/Resource";
import { ComponentResources } from "../ComponentResources";
import { ContainerProperties } from "./Container.properties";

@Resource(ComponentResources.Container, undefined, true)
export class Container extends ResponsiveGrid {
    
    render() {
        const {gridClassNames, columnAmount, rowAmount} = this.props as ContainerProperties
        return (
            <div className={`${(super.containerProps.className || '')}  ${gridClassNames}`}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${columnAmount}, 1fr)`,
                    gridTemplateRows: `repeat(${rowAmount}, 1fr)`,
                }}>
                    { super.childComponents }
                </div>
                { super.placeholderComponent }
            </div>
        )
    }

}