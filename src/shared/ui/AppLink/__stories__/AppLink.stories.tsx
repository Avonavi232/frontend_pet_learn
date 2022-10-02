import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppLink } from '../AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (props) => <AppLink {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'hello',
};
