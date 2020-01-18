export interface ButtonProperties {
  label: string;
  variant: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
