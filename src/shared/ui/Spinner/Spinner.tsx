import cn from 'classnames';
import { FC } from 'react';

import { ReactComponent as Icon } from './spinner.svg';
import styles from './styles.sass';

interface ISpinnerProps {
  className?: string;
  size?: number
}

export const Spinner: FC<ISpinnerProps> = ({ className, size = 16 }) => (
  <Icon className={cn(className, styles.spinner)} style={{ width: size, height: size }} />
);
