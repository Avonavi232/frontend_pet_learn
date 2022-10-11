import type { FC } from 'react';
import cn from 'classnames';

import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import styles from './styles.sass';

interface IAuthFormProps {
  className?: string;
}

export const AuthForm: FC<IAuthFormProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(className, styles.container)}>
      <h2>{t('login')}</h2>
      <Input type="text" placeholder="Login" />
      <Input type="text" placeholder="Password" />
      <Button>{t('login')}</Button>
    </div>
  );
};
