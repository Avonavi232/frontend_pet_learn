import { useTranslation } from 'react-i18next';
import { FC } from 'react';

const AboutPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('О сайте')}</h2>
    </div>
  );
};

export default AboutPage;
