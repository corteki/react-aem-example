import React from "react";
import { Page, withModel } from "@adobe/cq-react-editable-components";

export function Module() {
    return (WrappedComponent: any) => {
        return withModel(class extends Page {
            render() {
                return (
                    <WrappedComponent {...this.props} >
                            { this.childComponents && this.childComponents }
                            { this.childPages && this.childPages }
                    </WrappedComponent>
                );
            }
        } as any)
    }
}