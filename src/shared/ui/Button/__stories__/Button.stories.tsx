import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, EButtonTheme } from '../Button';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: EButtonTheme.Default,
  children: 'hello',
};

export const Clean = Template.bind({});
Clean.args = {
  children: 'hello',
  theme: EButtonTheme.Clean,
};
