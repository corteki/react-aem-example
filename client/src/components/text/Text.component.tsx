import React, { Component } from "react";
import { TextProperties } from "./base/Text.properties";
import { TextBase } from "./base/Text.component";
import { Resource } from "../../annotations/resource/Resource";
import { ComponentResources } from "../ComponentResources";
import { TextConfiguration } from "./Text.configuration";

@Resource(ComponentResources.Text, TextConfiguration)
export class Text extends Component<TextProperties> {
    render() {
        const {text, variant} = this.props;
        return (
            <TextBase 
                text={text}
                variant={variant}/>
        );
    }
}