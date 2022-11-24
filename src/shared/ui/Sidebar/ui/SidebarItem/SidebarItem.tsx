import type { ReactElement } from 'react';
import cn from 'classnames';

import { useSidebarCtx } from 'shared/ui/Sidebar/lib/context';
import { memo } from 'react';
import styles from './styles.sass';

interface ISidebarItemProps {
  className?: string;
  icon: ReactElement;
  text: ReactElement | string;
}

export const SidebarItem = memo<ISidebarItemProps>(({
  className, icon, text,
}) => {
  const { isOpened } = useSidebarCtx();

  return (
    <div className={cn(styles.item, className, { [styles.sidebar_opened]: isOpened })}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.item_text}>{text}</div>
    </div>
  );
});
