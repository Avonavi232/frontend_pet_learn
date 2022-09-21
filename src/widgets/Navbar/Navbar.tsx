import cn from 'classnames';

import styles from './styles.sass';
import { EAppRoutes } from 'app/providers/router';
import { AppLink, EAppLinkTheme } from 'shared/ui/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface INavbarProps {
  className?: string;
}

export const Navbar: React.FC<INavbarProps> = ({ className }) => {
  return (
    <div className={cn(className, styles['nav'])}>
      <ThemeSwitcher className={styles['theme']}/>
      <div className={styles['links']}>
        <AppLink to={EAppRoutes.Main} theme={EAppLinkTheme.Primary}>Main</AppLink>
        <AppLink to={EAppRoutes.About} theme={EAppLinkTheme.Primary}>About</AppLink>
      </div>
    </div>
  );
};
