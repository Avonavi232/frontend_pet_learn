import type { FC } from 'react';
import cn from 'classnames';

import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.sass';

interface IPageErrorProps {
  className?: string;
}

export const PageError: FC<IPageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const handleClick = useCallback(() => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }, []);

  return (
    <div className={cn(className, styles.container)}>
      <div>
        {t('smthWentWrong')}
        <br />
        {t('Try')}
        {' '}
        <button
          onClick={handleClick}
          type="button"
          className={styles.button}
        >
          {t('reload')}
        </button>
        {' '}
        {t('page')}
        {t('Иначе- будет все плохо-плохо')}
      </div>
    </div>
  );
};
