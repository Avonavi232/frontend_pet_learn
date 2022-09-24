import { useTranslation } from 'react-i18next';
import { FC } from 'react';

const MainPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('Главная')}</h2>
    </div>
  );
};

export default MainPage;
