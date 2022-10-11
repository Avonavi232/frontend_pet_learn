import type {
  ChangeEvent, FC, InputHTMLAttributes, ReactNode,
} from 'react';
import cn from 'classnames';

import { memo, useCallback } from 'react';
import styles from './styles.sass';

type TInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  className?: string;
  value?: string;
  onChange?(value: string): void;
  rightAdornment?: ReactNode
  leftAdornment?: ReactNode
}

export const Input: FC<TInputProps> = memo((props) => {
  const {
    className, value, onChange, rightAdornment, leftAdornment, autoFocus, placeholder, type,
  } = props;

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  }, [onChange]);

  return (
    <div className={styles['form-group']}>
      {leftAdornment && <span className={styles.group_name}>{leftAdornment}</span>}
      <input
        placeholder={placeholder}
        className={cn(className, styles['form-field'])}
        onChange={handleChange}
        value={value}
        /* eslint-disable-next-line jsx-a11y/no-autofocus */
        autoFocus={autoFocus}
        type={type}
      />
      {rightAdornment && <span className={styles.group_name}>{rightAdornment}</span>}
    </div>
  );
});
