import React, { Component } from 'react';
import { Page, withModel } from '@adobe/cq-react-editable-components';
import { Route } from 'react-router-dom';

export function Root() {
  return (WrappedComponent: any) => {
    return withModel(
      class extends Page {
        private rootPath = '';

        render() {
          if (this.rootPath === '') {
            this.rootPath = this.props.cqPath;
          }
          return (
            <WrappedComponent {...this.props}>
              <Route
                key={this.rootPath}
                path={`(.*)${this.rootPath}(.html)?`}
                exact
                render={() => this.childComponents}
              />
              {this.childPages}
            </WrappedComponent>
          );
        }
      }
    );
  };
}
