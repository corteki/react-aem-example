import React, {Component} from "react";
import { HeadingProperties } from "./Heading.properties";
import "./styles/Heading.styles.scss";

export class HeadingBase extends Component<HeadingProperties> {
    render() {
        const {variant, label} = this.props;
        return (
            <header className={`heading heading--${variant}`}>
                {label}
            </header>
        );
    }
}