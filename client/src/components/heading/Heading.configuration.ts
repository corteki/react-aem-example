import { ComponentConfiguration } from "../ComponentConfiguration";
import { HeadingProperties } from "./base/Heading.properties";

export const HeadingConfiguration: ComponentConfiguration<HeadingProperties> = {
    emptyLabel: "Heading",
    isEmpty: (props) => {
        return !props || !props.label || props.label.trim().length < 1;
    }
}