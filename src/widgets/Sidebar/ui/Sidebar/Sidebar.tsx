import { FC } from 'react';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { InfoIcon, HomeIcon, ProfileIcon } from 'shared/ui/Icons';
import { Sidebar as SidebarUI, SidebarItem, SidebarLinkItem } from 'shared/ui/Sidebar';
import { EAppRoutes } from 'app/providers/router';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectUser } from 'entities/User/model/selectors';

interface ISidebarProps {
  className?: string;
}

const icons = {
  [EAppRoutes.Main]: <HomeIcon size="XL" />,
  [EAppRoutes.About]: <InfoIcon size="XL" />,
  [EAppRoutes.Profile]: <ProfileIcon size="XL" />,
};

const langSwitcher = <LangSwitcher />;

export const Sidebar: FC<ISidebarProps> = () => {
  const { t } = useTranslation();
  const auth = useSelector(selectUser);

  return (
    <SidebarUI
      top={(
        <>
          <SidebarLinkItem
            to={EAppRoutes.Main}
            icon={icons[EAppRoutes.Main]}
            text={t('Главная')}
          />
          <SidebarLinkItem
            to={EAppRoutes.About}
            icon={icons[EAppRoutes.About]}
            text={t('О сайте')}
          />
          {
            auth && (
              <SidebarLinkItem
                to={EAppRoutes.Profile}
                icon={icons[EAppRoutes.Profile]}
                text={t('profile_sidebar_item')}
              />
            )
          }
        </>
      )}
      bottom={(
        <SidebarItem
          icon={langSwitcher}
          text={t('selected_lang')}
        />
      )}
    />
  );
};
