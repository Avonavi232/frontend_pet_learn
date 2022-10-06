import cn from 'classnames';

import { ButtonHTMLAttributes, FC } from 'react';
import styles from './styles.sass';

export enum EButtonTheme {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary',
  Clean = 'clean',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: EButtonTheme
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    className, theme = EButtonTheme.Primary, children, ...rest
  } = props;

  const _className = cn(
    className,
    theme === EButtonTheme.Clean ? styles.clean : styles.btn,
    styles[theme],
  );

  return (
    <button
      type="button"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      className={_className}
    >
      <div className={styles.inner}>{children}</div>
    </button>
  );
};
