import React, {Component} from "react";
import { ButtonBase } from "./base/Button.component";
import { ButtonProperties } from "./base/Button.properties";
import { ComponentResources } from "../ComponentResources";
import { ButtonConfiguration } from "./Button.configuration";
import { Resource } from "../../annotations/resource/Resource";

@Resource(ComponentResources.Button, ButtonConfiguration)
export class Button extends Component<ButtonProperties> {

    handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e);
    }

    render() {
        const {variant, label} = this.props;
        return (
            <ButtonBase
            label={label}
            variant={variant}
            onClick={this.handleClick}/>
        )
    }
}