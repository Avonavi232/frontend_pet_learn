import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';

interface ILoginProps {
  onLoginClick(): void
}

export const Login: FC<ILoginProps> = ({ onLoginClick }) => {
  const { t } = useTranslation();

  return (
    <Button color="text-on-d" theme="clean" onClick={onLoginClick}>{t('login')}</Button>
  );
};
