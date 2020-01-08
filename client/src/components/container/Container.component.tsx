import React, {PureComponent} from "react";
import { ComponentResources } from "../ComponentResources";
import { ContainerProperties } from "./Container.properties";
import { ResponsiveGrid } from "../../annotations/resource/ResponsiveGrid";

@ResponsiveGrid(ComponentResources.GridContainer)
export class Container extends PureComponent<ContainerProperties> {
    render() {
        const {className, children, columnAmount, rowAmount} = this.props;
        return (
            <div className={className}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${columnAmount}, 1fr)`,
                    gridTemplateRows: `repeat(${rowAmount}, 1fr)`,
                }}>
                    { children }
                </div>
            </div>
        )
    }

}