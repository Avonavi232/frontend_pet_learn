import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from '../Input';

export default {
  title: 'shared/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = () => (
  <div style={{
    width: 400, display: 'flex', flexDirection: 'column', gap: 16,
  }}
  >
    <Input leftAdornment="m2" />
    <Input rightAdornment="m2" autoFocus />
    <Input />
  </div>
);

export const Primary = Template.bind({});
