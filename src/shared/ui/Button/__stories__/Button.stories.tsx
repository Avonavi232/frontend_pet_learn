import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../Button';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => (
  <div
    style={{
      display: 'inline-flex', flexDirection: 'column', gap: 16, justifyContent: 'flex-start',
    }}
  >
    <Button theme="primary">Hello</Button>
    <Button theme="secondary">Hello</Button>
    <Button theme="primary" size="S">Hello</Button>
    <Button theme="secondary" size="S">Hello</Button>
  </div>
);

export const Primary = Template.bind({});
