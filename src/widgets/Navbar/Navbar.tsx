import cn from 'classnames';

import { EAppRoutes } from 'app/providers/router';
import { AppLink, EAppLinkTheme } from 'shared/ui/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.sass';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(className, styles.nav)}>
      <ThemeSwitcher className={styles.theme} />
      <div className={styles.links}>
        <AppLink to={EAppRoutes.Main} theme={EAppLinkTheme.Primary}>
          {t('Главная', { ns: 'main' })}
        </AppLink>
        <AppLink to={EAppRoutes.About} theme={EAppLinkTheme.Secondary}>{t('О сайте')}</AppLink>
      </div>
    </div>
  );
};
