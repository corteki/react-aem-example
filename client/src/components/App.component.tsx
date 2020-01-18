import React, { Component } from 'react';
import { Root } from '../annotations/Root';
import { AppProperties } from './App.properties';

@Root()
export class App extends Component<AppProperties> {
  render() {
    return this.props.children;
  }
}
