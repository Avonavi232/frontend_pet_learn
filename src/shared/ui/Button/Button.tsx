import cn from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';

import { Spinner } from 'shared/ui/Spinner';
import { TColors } from 'shared/ui/theme';
import styles from './styles.sass';

type TButtonTheme =
  'default'
  | 'primary'
  | 'secondary'
  | 'clean'

type TButtonSize = 'M' | 'S'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: TButtonTheme;
  color?: TColors
  size?: TButtonSize;
  loading?: boolean;
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    className, theme = 'primary', children, loading, size = 'M', color = 'text-on-p', ...rest
  } = props;

  const _className = cn(
    className,
    theme === 'clean' ? styles.clean : styles.btn,
    styles[theme],
    styles[`size_${size}`],
    `color_${color}`,
  );

  const spinnerSize = size === 'M' ? 18 : 14;

  return (
    <button
      type="button"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      className={_className}
    >
      {loading && <Spinner size={spinnerSize} />}
      {!loading && <div className={styles.inner}>{children}</div>}
    </button>
  );
};
