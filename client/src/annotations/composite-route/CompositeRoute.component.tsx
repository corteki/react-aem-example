import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { CompositeRouteProperties } from './CompositeRoute.properties';

export function CompositeRoute() {
  return (WrappedComponent: any, extension?: any) => {
    return class extends Component<CompositeRouteProperties> {
      render() {
        let routePath = this.props.cqPath;
        if (!routePath) {
          return <WrappedComponent {...this.props} />;
        }
  
        extension = extension || 'html';
  
        return (
          <Route
            key={routePath}
            exact
            path={`(.*)${routePath}(.${extension})?`}
            render={routeProps => {
              return <WrappedComponent {...this.props} {...routeProps} />;
            }}
          />
        );
      }
    };
  }
} ;