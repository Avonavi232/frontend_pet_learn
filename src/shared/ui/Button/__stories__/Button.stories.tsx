import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, EButtonTheme } from '../Button';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: EButtonTheme.Primary,
  children: 'hello',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: EButtonTheme.Secondary,
  children: 'hello',
};
