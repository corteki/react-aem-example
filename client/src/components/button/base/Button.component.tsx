import React, {Component} from "react";
import { ButtonProperties } from "./Button.properties";
import "./styles/Button.styles.scss";

export class ButtonBase extends Component<ButtonProperties> {

    handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const {onClick} = this.props;
        onClick && onClick(e);
    }

    render() {
        const {variant, label} = this.props;
        return (
            <button 
            className={`button button--${variant}`}
            onClick={this.handleClick}>
                {label}
            </button>
        )
    }
}