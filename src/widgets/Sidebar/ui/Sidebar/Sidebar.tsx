import cn from 'classnames';

import { FC, useCallback, useState } from 'react';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { AppLink } from 'shared/ui/AppLink';
import { InfoIcon, ChevronIcon, HomeIcon } from 'shared/ui/Icons';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem';
import { EAppRoutes } from 'app/providers/router';
import { useTranslation } from 'react-i18next';
import styles from './styles.sass';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();

  const onToggle = useCallback(() => setOpen((p) => !p), []);

  return (
    <div className={cn(className, styles.container, { [styles.open]: isOpen })}>
      <div className={styles.items}>
        <AppLink to={EAppRoutes.Main}>
          <SidebarItem
            icon={<HomeIcon size="XL" />}
            text={t('Главная')}
            isSidebarOpened={isOpen}
          />
        </AppLink>
        <AppLink to={EAppRoutes.About}>
          <SidebarItem
            icon={<InfoIcon size="XL" />}
            text={t('О сайте')}
            isSidebarOpened={isOpen}
          />
        </AppLink>
        <div className={styles.bottom} />
        <SidebarItem
          icon={<LangSwitcher />}
          text={t('selected_lang')}
          isSidebarOpened={isOpen}
        />
      </div>

      <div className={styles.footer}>
        <button type="button" className={styles.opener} onClick={onToggle}>
          <ChevronIcon size="M" className={cn(styles.opener_icon, { [styles.rotate]: isOpen })} />
        </button>
      </div>
    </div>
  );
};
