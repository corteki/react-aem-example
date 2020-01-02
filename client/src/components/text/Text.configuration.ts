import { ComponentConfiguration } from "../ComponentConfiguration";
import { TextProperties } from "./base/Text.properties";

export const TextConfiguration: ComponentConfiguration<TextProperties> = {
    emptyLabel: 'Text',

    isEmpty: (props: TextProperties) => {
        return !props || !props.text || props.text.trim().length < 1;
    }
}