import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UserAvatar } from '../UserAvatar';
import avatar from './30468909.jpg';

export default {
  title: 'shared/UserAvatar',
  component: UserAvatar,
} as ComponentMeta<typeof UserAvatar>;

const Template: ComponentStory<typeof UserAvatar> = (props) => <UserAvatar {...props} />;

export const DefaultUserAvatar = Template.bind({});
DefaultUserAvatar.args = {
  url: null,
};

export const CustomUserAvatar = Template.bind({});
CustomUserAvatar.args = {
  url: avatar,
};
