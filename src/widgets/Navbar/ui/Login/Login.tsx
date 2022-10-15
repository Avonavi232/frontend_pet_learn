import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';

interface ILoginProps {
  setAuthModalOpened(): void
}

export const Login: FC<ILoginProps> = ({ setAuthModalOpened }) => {
  const { t } = useTranslation();

  return (
    <Button color="text-on-d" theme="clean" onClick={setAuthModalOpened}>{t('login')}</Button>
  );
};
