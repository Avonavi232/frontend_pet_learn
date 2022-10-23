import type { FC } from 'react';
import { Suspense, useCallback } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Text } from 'shared/ui/Text';
import { selectUser } from 'entities/User/model/selectors';
import { AuthModalAsync, getAuthModalActions } from 'features/AuthByUsername';
import { UserAvatar } from 'shared/ui/UserAvatar';
import styles from './styles.sass';
import { Login } from '../Login/Login';
import { Logout } from '../Logout/Logout';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();

  const setAuthModalOpened = useCallback(async () => {
    const { authModalActions } = await getAuthModalActions();
    dispatch(authModalActions.setModalOpened(true));
  }, [dispatch]);

  return (
    <>
      <div className={cn(className, styles.nav)}>
        <Text size="L" color="text-on-d">{t('My great app')}</Text>
        <div className={styles.push_right} />
        <div className={styles.items}>
          <ThemeSwitcher className={styles.theme} />
          {currentUser && (
            <UserAvatar url={currentUser.avatar} alt={currentUser.username} title={currentUser.username} />
          )}
          {currentUser ? <Logout /> : <Login onLoginClick={setAuthModalOpened} />}
        </div>
      </div>
      <Suspense>
        <AuthModalAsync />
      </Suspense>
    </>
  );
};
