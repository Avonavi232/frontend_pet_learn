import {useTranslation} from 'react-i18next';
import { Counter } from 'components/Counter';

const AboutPage: React.FC = () => {
  const {t} = useTranslation('about');

  return (
    <div>
      <h2>{t('О сайте')}</h2>
      <Counter/>
    </div>
  );
};

export default AboutPage;
