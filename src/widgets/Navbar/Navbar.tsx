import cn from 'classnames';

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { FC } from 'react';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { AuthModal } from 'features/AuthByUsername';
import { useBooleanState } from 'shared/lib/useBooleanState';
import styles from './styles.sass';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  const [isAuthModalOpened, setAuthModalOpened, setAuthModalClosed] = useBooleanState();
  const { t } = useTranslation();

  return (
    <>
      <div className={cn(className, styles.nav)}>
        <ThemeSwitcher className={styles.theme} />
        <div className={styles.links}>
          <Button theme="clean" onClick={setAuthModalOpened}>{t('login')}</Button>
        </div>
      </div>
      <AuthModal modalOpened={isAuthModalOpened} onModalClose={setAuthModalClosed} />
    </>
  );
};
