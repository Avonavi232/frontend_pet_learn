import cn from 'classnames';

import { ButtonHTMLAttributes, FC } from 'react';
import styles from './styles.sass';

type TButtonTheme =
  'default'
  | 'primary'
  | 'secondary'
  | 'clean'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: TButtonTheme
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    className, theme = 'primary', children, ...rest
  } = props;

  const _className = cn(
    className,
    theme === 'clean' ? styles.clean : styles.btn,
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
