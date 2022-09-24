import cn from 'classnames';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.sass';

interface INotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<INotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(className, styles.container)}>
      {t('Страница не найдена')}
    </div>
  );
};
