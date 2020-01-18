export interface ComponentConfiguration<Properties> {
  emptyLabel: string;
  isEmpty: (props: Properties) => boolean;
}
