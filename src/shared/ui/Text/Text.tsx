import type { FC, ReactNode } from 'react';
import cn from 'classnames';

import { TColors, TStandardSize } from 'shared/ui/theme';
import styles from './styles.sass';

export interface ITextProps {
  className?: string;
  children: ReactNode;
  color?: TColors
  size?: TStandardSize
}

export const Text: FC<ITextProps> = (props) => {
  const {
    className, children, color = 'text-on-p', size = 'M',
  } = props;

  const css = cn(
    className,
    styles.text,
    `fontSize_${size}`,
    `lineHeight_${size}`,
    `color_${color}`,
  );

  return (
    <div className={css}>
      {children}
    </div>
  );
};
