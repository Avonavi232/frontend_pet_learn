import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from '../Select';

export default {
  title: 'shared/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (props) => <Select {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Hello',
  options: [
    { value: '1', label: 'First' },
    { value: '2', label: 'Second' },
    { value: '3', label: 'Third' },
  ],
};
