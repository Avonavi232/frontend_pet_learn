import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { useLogout } from 'features/Logout';

export const Logout: FC = () => {
  const { t } = useTranslation();
  const handleLogout = useLogout();

  return (
    <Button color="text-on-d" theme="clean" onClick={handleLogout}>{t('logout')}</Button>
  );
};
