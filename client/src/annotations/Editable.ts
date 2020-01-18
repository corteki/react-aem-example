import {
  MapTo,
  withComponentMappingContext,
} from '@adobe/cq-react-editable-components';
import { ComponentResources } from '../components/ComponentResources';
import { ComponentConfiguration } from '../components/ComponentConfiguration';

export function Editable<Properties>(
  resource: ComponentResources,
  configuration?: ComponentConfiguration<Properties>,
  withComponentMapping: boolean = false
) {
  return (Component: any) =>
    withComponentMapping
      ? configuration
        ? MapTo(resource)(withComponentMappingContext(Component), configuration)
        : MapTo(resource)(withComponentMappingContext(Component))
      : configuration
      ? MapTo(resource)(Component, configuration)
      : MapTo(resource)(Component);
}
