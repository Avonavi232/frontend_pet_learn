import { ComponentMeta, ComponentStory } from '@storybook/react';

import { HomeIcon } from 'shared/ui/Icons';
import { Sidebar } from '../ui/Sidebar';
import { SidebarItem } from '../ui/SidebarItem';

export default {
  title: 'shared/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

export const Default: ComponentStory<typeof Sidebar> = () => (
  <Sidebar
    top={(
      <>
        <SidebarItem icon={<HomeIcon size="XL" display="inline-block" />} text="hello" />
        <SidebarItem icon={<HomeIcon size="XL" display="inline-block" />} text="hello" />
      </>
    )}
    bottom={(
      <>
        <SidebarItem icon={<HomeIcon size="XL" display="inline-block" />} text="hello" />
        <SidebarItem icon={<HomeIcon size="XL" display="inline-block" />} text="hello" />
      </>
    )}
  />
);
Default.storyName = 'Закрытый';

export const Opened: ComponentStory<typeof Sidebar> = () => (
  <Sidebar
    initialOpened
    top={(
      <>
        <SidebarItem icon={<HomeIcon size="XL" display="inline-block" />} text="hello" />
        <SidebarItem icon={<HomeIcon size="XL" display="inline-block" />} text="hello" />
      </>
    )}
    bottom={(
      <>
        <SidebarItem icon={<HomeIcon size="XL" display="inline-block" />} text="hello" />
        <SidebarItem icon={<HomeIcon size="XL" display="inline-block" />} text="hello" />
      </>
    )}
  />
);
Opened.storyName = 'Открытый';
