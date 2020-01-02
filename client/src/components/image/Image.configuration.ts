import { ComponentConfiguration } from "../ComponentConfiguration";
import { ImageProperties } from "./Image.properties";

export const ImageConfiguration: ComponentConfiguration<ImageProperties> = {
    emptyLabel: 'Image',
    isEmpty: (props: ImageProperties) => {
        return !props || !props.src || props.src.trim().length < 1;
    }
}