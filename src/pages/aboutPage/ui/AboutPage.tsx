import { useTranslation } from 'react-i18next';
import { Counter } from 'components/Counter';
import { FC } from 'react';

const AboutPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('О сайте')}</h2>
      <Counter />
    </div>
  );
};

export default AboutPage;
