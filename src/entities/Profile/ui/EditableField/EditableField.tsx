import type { FC } from 'react';
import cn from 'classnames';

import { Input, TInputProps } from 'shared/ui/Input';
import { useCallback, useRef } from 'react';
import styles from './styles.sass';

interface IEditableFieldProps extends TInputProps{
  className?: string;
  name: string;
  label?: string
  isReadonly?: boolean;
}

export const EditableField: FC<IEditableFieldProps> = (props) => {
  const {
    className, name, label, value, isReadonly, onChange,
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleLabelClick = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={cn(className, styles.container)}>
      {/* eslint-disable-next-line */}
      <label onClick={handleLabelClick}>{label}</label>
      <Input ref={inputRef} name={name} value={value} readonly={isReadonly} onChange={onChange} />
    </div>
  );
};
