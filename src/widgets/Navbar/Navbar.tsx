import cn from 'classnames';

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { FC } from 'react';
import styles from './styles.sass';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => (
  <div className={cn(className, styles.nav)}>
    <ThemeSwitcher className={styles.theme} />
    {/* eslint-disable-next-line i18next/no-literal-string */}
    <div className={styles.links}>
      hello
    </div>
  </div>
);
