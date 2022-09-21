import { useTranslation } from 'react-i18next';

const MainPage: React.FC = () => {
  const {t} = useTranslation();

  return (
    <div>
      <h2>{t('Главная')}</h2>
    </div>
  );
};

export default MainPage;
