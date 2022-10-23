import type { ReactElement } from 'react';
import { memo } from 'react';

import { AppLink, IAppLinkProps } from 'shared/ui/AppLink';
import { SidebarItem } from 'shared/ui/Sidebar';

interface ISidebarItemProps extends IAppLinkProps{
  className?: string;
  icon: ReactElement;
  text: ReactElement | string;
}

export const SidebarLinkItem = memo<ISidebarItemProps>(({
  className, icon, text, to,
}) => (
  <AppLink to={to}>
    <SidebarItem icon={icon} text={text} className={className} />
  </AppLink>
));
