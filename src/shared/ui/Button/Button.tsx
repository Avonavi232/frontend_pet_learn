import cn from 'classnames';

import { ButtonHTMLAttributes, FC } from 'react';
import styles from './styles.sass';

export enum EButtonTheme {
  Default = 'default',
  Clean = 'clean',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: EButtonTheme
}

export const Button: FC<IButtonProps> = (props) => {
  const { className, theme = EButtonTheme.Clean, ...rest } = props;

  return (
    <button
      type="button"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      className={cn(className, styles.container, styles[theme])}
    />
  );
};
