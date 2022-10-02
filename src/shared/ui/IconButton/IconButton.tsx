import type { FC } from 'react';
import cn from 'classnames';
import { ReactComponent as Menu } from './menu-svgrepo-com.svg';

import styles from './styles.sass';

interface IIconButtonProps {
  className?: string;
  onClick(): void;
}

export const IconButton: FC<IIconButtonProps> = ({ className, onClick }) => (
  <button type="button" className={cn(className, styles.container)} onClick={onClick}>
    <Menu />
  </button>
);
