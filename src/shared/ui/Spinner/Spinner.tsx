import cn from 'classnames';

import { FC } from 'react';
import styles from './styles.sass';

interface ISpinnerProps {
  className?: string;
}

export const Spinner: FC<ISpinnerProps> = ({ className }) => (
  <div className={cn(className, styles.spinner)}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);
