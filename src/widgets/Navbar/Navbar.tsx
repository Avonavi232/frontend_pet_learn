import cn from 'classnames';

import { EAppRoutes } from 'app/providers/router';
import { AppLink, EAppLinkTheme } from 'shared/ui/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { FC } from 'react';
import styles from './styles.sass';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => (
  <div className={cn(className, styles.nav)}>
    <ThemeSwitcher className={styles.theme} />
    <div className={styles.links}>
      <AppLink to={EAppRoutes.Main} theme={EAppLinkTheme.Primary}>Main</AppLink>
      <AppLink to={EAppRoutes.About} theme={EAppLinkTheme.Secondary}>About</AppLink>
    </div>
  </div>
);
