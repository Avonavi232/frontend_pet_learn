import cn from 'classnames';

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { FC } from 'react';
import { Button } from 'shared/ui/Button';
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
        <Button theme="clean">{t('login')}</Button>
      </div>
    </div>
  );
};
