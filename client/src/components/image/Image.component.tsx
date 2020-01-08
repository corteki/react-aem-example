import React, { Component } from "react";
import { Editable } from "../../annotations/resource/EditableComponent";
import { ComponentResources } from "../ComponentResources";
import { ImageProperties } from "./Image.properties";
import { ImageConfiguration } from "./Image.Configuration";
import "./styles/Image.styles.scss";

@Editable(ComponentResources.Image, ImageConfiguration)
export class Image extends Component<ImageProperties> {
    render() {
        const {src, alt, title} = this.props;
        return (
            <img className="image" src={src} alt={alt} title={title}></img>
        )
    }

}