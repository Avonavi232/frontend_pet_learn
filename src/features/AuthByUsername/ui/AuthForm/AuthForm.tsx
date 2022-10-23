import type { FormEvent } from 'react';
import cn from 'classnames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import { useAppDispatch } from 'shared/lib/useAppDispatch';
import { loginByUsername } from '../../services/loginByUsername';
import { authModalActions } from '../../model/slice';
import {
  selectError,
  selectIsLoading,
  selectPassword,
  selectUsername,
} from '../../model/selectors';
import styles from './styles.sass';

export interface IAuthFormProps {
  className?: string;
}

export const AuthForm = memo<IAuthFormProps>(({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(selectUsername);
  const password = useSelector(selectPassword);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const onUsernameChange = useCallback((value: string) => {
    dispatch(authModalActions.setUsername(value));
  }, [dispatch]);

  const onPasswordChange = useCallback((value: string) => {
    dispatch(authModalActions.setPassword(value));
  }, [dispatch]);

  const onSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(loginByUsername({ username: username as string, password: password as string }));
  }, [dispatch, password, username]);

  return (
    <form className={cn(className, styles.container)} onSubmit={onSubmit}>
      <h2>{t('login')}</h2>
      <Input type="text" placeholder="Login" onChange={onUsernameChange} value={username} />
      <Input type="text" placeholder="Password" onChange={onPasswordChange} value={password} />
      {error && <Text size="S" color="error">{error}</Text>}
      <Button type="submit" disabled={isLoading} loading={isLoading}>{t('login')}</Button>
    </form>
  );
});
