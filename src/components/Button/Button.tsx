import { memo, FC } from 'react';

interface IButtonProps {
  onClick(): void;
  children: string
}

export const Button: FC<IButtonProps> = memo(props => {
  return (
    <button onClick={props.onClick}>inc</button>
  );
});
