import type { FC, ReactElement } from 'react';
import cn from 'classnames';

import styles from './styles.sass';

interface ISidebarItemProps {
  className?: string;
  icon: ReactElement;
  text: ReactElement | string;
  isSidebarOpened: boolean;
}

export const SidebarItem: FC<ISidebarItemProps> = ({
  className, isSidebarOpened, icon, text,
}) => (
  <div className={cn(styles.item, className, { [styles.sidebar_opened]: isSidebarOpened })}>
    {icon}
    <div className={styles.item_text}>{text}</div>
  </div>
);
