import React, { Component } from "react";
import { withComponentMappingContext, MapTo } from "@adobe/cq-react-editable-components";
import { Route as AEMRoute } from 'react-router-dom';
import { ComponentResources } from "../components/ComponentResources";

export function Route() {
  return (WrappedComponent:any) => MapTo(ComponentResources.Page)
    (withComponentMappingContext(
      class extends Component<{cqPath: string}> {
        render() {
            let routePath = this.props.cqPath;
            if (!routePath) {
              return <WrappedComponent {...this.props} />;
            }
      
            return (
              <AEMRoute
                key={routePath}
                exact
                path={`(.*)${routePath}(.html)?`}
                render={routeProps => <WrappedComponent {...this.props} {...routeProps}/>}
              />
            );
          }
        }
    ))
}