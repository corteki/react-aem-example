import React, {Component} from 'react';
import { Module } from '../annotations/resource/Module';
import { AppProperties } from './App.properties';

@Module()
export class App extends Component<AppProperties> {
    render() {
        const {children} = this.props;
        return (
            <section>
                { children }
            </section>
        )
    }
}