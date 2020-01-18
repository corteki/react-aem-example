import { ButtonProperties } from './base/Button.properties';
import { ComponentConfiguration } from '../ComponentConfiguration';

export const ButtonConfiguration: ComponentConfiguration<ButtonProperties> = {
  emptyLabel: 'Button',
  isEmpty: (props: ButtonProperties) => {
    return !props || !props.label || props.label.trim().length < 1;
  },
};
