import cn from 'classnames';

import {
  FC, ReactElement, useCallback, useMemo, useState,
} from 'react';
import { ChevronIcon } from 'shared/ui/Icons';
import { Provider } from '../../lib/context';
import styles from './styles.sass';

interface ISidebarProps {
  className?: string;
  initialOpened?: boolean;
  top?: ReactElement
  bottom?: ReactElement
}

export const Sidebar: FC<ISidebarProps> = ({
  className, top, bottom, initialOpened,
}) => {
  const [isOpened, setOpen] = useState(initialOpened || false);

  const onToggle = useCallback(() => setOpen((p) => !p), []);

  const sidebarContext = useMemo(() => ({ isOpened }), [isOpened]);

  return (
    <Provider value={sidebarContext}>
      <div className={cn(className, styles.container, { [styles.open]: isOpened })}>
        <div className={styles.items}>
          {top}
          <div className={styles.bottom} />
          {bottom}
        </div>

        <div className={styles.footer}>
          <button type="button" className={styles.opener} onClick={onToggle}>
            <ChevronIcon
              size="M"
              className={cn(styles.opener_icon, { [styles.rotate]: isOpened })}
            />
          </button>
        </div>
      </div>
    </Provider>
  );
};
