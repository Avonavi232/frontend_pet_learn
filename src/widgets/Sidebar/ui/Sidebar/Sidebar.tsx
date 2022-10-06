import { FC } from 'react';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { AppLink } from 'shared/ui/AppLink';
import { InfoIcon, HomeIcon } from 'shared/ui/Icons';
import { Sidebar as SidebarUI, SidebarItem } from 'shared/ui/Sidebar';
import { EAppRoutes } from 'app/providers/router';
import { useTranslation } from 'react-i18next';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = () => {
  const { t } = useTranslation();

  return (
    <SidebarUI
      top={(
        <>
          <AppLink to={EAppRoutes.Main}>
            <SidebarItem
              icon={<HomeIcon size="XL" />}
              text={t('Главная')}
            />
          </AppLink>
          <AppLink to={EAppRoutes.About}>
            <SidebarItem
              icon={<InfoIcon size="XL" />}
              text={t('О сайте')}
            />
          </AppLink>
        </>
      )}
      bottom={(
        <SidebarItem
          icon={<LangSwitcher />}
          text={t('selected_lang')}
        />
      )}
    />
  );
};
