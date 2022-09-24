import { memo, FC } from 'react';

interface IButtonProps {
  onClick(): void;
  children: string
}

export const Button: FC<IButtonProps> = memo((props) => (
  <button type="button" onClick={props.onClick}>inc</button>
));
