import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import {
  forwardRef, memo, useCallback, useMemo,
} from 'react';
import styles from './styles.sass';

/* eslint-disable react/no-unused-prop-types */
export type TInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'readOnly'> & {
  className?: string;
  value?: string | number;
  onChange?(value: string): void;
  rightAdornment?: ReactNode
  leftAdornment?: ReactNode
  readonly?: boolean
}
/* eslint-enable react/no-unused-prop-types */

export const Input = memo(forwardRef<HTMLInputElement, TInputProps>((props, ref) => {
  const {
    className, rightAdornment, leftAdornment, onChange, readonly, ...inputProps
  } = props;

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  }, [onChange]);

  const wrapperCss = useMemo(() => cn(styles['form-group'], { [styles.readonly]: readonly }), [readonly]);

  return (
    <div className={wrapperCss}>
      {leftAdornment && <span className={styles.group_name}>{leftAdornment}</span>}
      <input
        ref={ref}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...inputProps}
        onChange={handleChange}
        className={cn(className, styles['form-field'])}
        readOnly={readonly}
      />
      {rightAdornment && <span className={styles.group_name}>{rightAdornment}</span>}
    </div>
  );
}));
