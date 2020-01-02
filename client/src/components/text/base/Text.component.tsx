import React, { Component } from "react";
import { TextProperties } from "./Text.properties";
import "./styles/Text.styles.scss";

export class TextBase extends Component<TextProperties> {
    render() {
        const {text, variant} = this.props;
        return (
            <p className={`text text--${variant}`}>
                {text}
            </p>
        );
    }
}