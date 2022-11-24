import type { ChangeEventHandler, FC } from 'react';
import cn from 'classnames';

import { memo, useCallback, useMemo } from 'react';
import styles from './styles.sass';

export interface ISelectOption {
  value: string;
  label: string
}

export interface ISelectProps {
  className?: string;
  label?: string;
  options: ISelectOption[];
  value?: string;
  onChange?(value: string): void
  isReadonly?: boolean
}

export const Select: FC<ISelectProps> = memo((props) => {
  const {
    className, label, options, value, onChange, isReadonly,
  } = props;

  const optionsList = useMemo(() => options.map((option) => (
    <option key={option.value} value={option.value}>{option.label}</option>)), [options]);

  const handleChange = useCallback<ChangeEventHandler<HTMLSelectElement>>((e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  }, [onChange]);

  return (
    <div className={cn(className, styles.container)}>
      {label && <span className={styles.label}>{label}</span>}
      <select disabled={isReadonly} className={styles.select} value={value} onChange={handleChange}>
        {optionsList}
      </select>
    </div>
  );
});
