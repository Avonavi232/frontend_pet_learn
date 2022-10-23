import cn from 'classnames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button';
import en from 'shared/assets/icons/united-kingdom.png';
import ru from 'shared/assets/icons/russia.png';
import styles from './styles.sass';

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo<ILangSwitcherProps>(({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleLang = useCallback(() => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }, [i18n]);

  return (
    <div className={cn(className, styles.container)}>
      <Button theme="clean" onClick={toggleLang}>
        <img
          className={styles.icon}
          src={i18n.language === 'ru' ? ru : en}
          alt={t('Язык')}
        />
      </Button>
    </div>
  );
});
