export interface IButtonProps {
  children?: React.ReactChild;
  className?: string;
  onClick?(event: React.SyntheticEvent<HTMLButtonElement>): void;
}
