import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FC, ReactNode } from 'react';
import { TColors } from 'shared/ui/theme';
import { Text } from '../Text';

export default {
  title: 'shared/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Box: FC<{ children: ReactNode, bg: TColors, titleBg: TColors, title: ReactNode }> = ({
  children,
  bg,
  titleBg,
  title,
}) => (
  <div style={{
    width: 200,
    height: 300,
    backgroundColor: `var(--color-${bg})`,
    border: '1px solid var(--border)',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  }}
  >
    <div style={{
      height: 40,
      borderBottom: '1px solid var(--border)',
      backgroundColor: `var(--color-${titleBg})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      {title}
    </div>
    <div style={{ flex: '1 1 auto', padding: 8 }}>
      {children}
    </div>
  </div>
);

const title = 'Hello world';
// eslint-disable-next-line max-len
const content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, asperiores, nam. Aliquid amet deserunt dolor ducimus facilis officiis repudiandae, voluptatum.';

export const Sizes: ComponentStory<typeof Text> = () => (
  <div
    style={{
      display: 'inline-flex', flexDirection: 'column', gap: 16, justifyContent: 'flex-start',
    }}
  >
    <Text size="XL">Hello world</Text>
    <Text size="L">Hello world</Text>
    <Text size="M">Hello world</Text>
    <Text size="S">Hello world</Text>
    <Text size="XS">Hello world</Text>
  </div>
);

export const Colors: ComponentStory<typeof Text> = () => (
  <div
    style={{
      display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'flex-start',
    }}
  >
    <Box
      title={<Text size="XL" color="text-on-s">{title}</Text>}
      titleBg="secondary"
      bg="primary"
    >
      <Text size="M" color="text-on-p">{content}</Text>
    </Box>

    <Box
      title={<Text size="XL" color="text-on-d">{title}</Text>}
      titleBg="secondary-d"
      bg="primary"
    >
      <Text size="M">{content}</Text>
    </Box>

    <Box
      title={<Text size="XL" color="text-on-s">{title}</Text>}
      titleBg="secondary"
      bg="secondary-l"
    >
      <Text size="M" color="text-on-s">{content}</Text>
    </Box>

    <Box
      title={<Text size="XL" color="text-on-d">{title}</Text>}
      titleBg="secondary-d"
      bg="primary"
    >
      <Text size="M" color="error">Some error occurred</Text>
    </Box>

    <Box
      title={<Text size="XL" color="text-on-d">{title}</Text>}
      titleBg="secondary-d"
      bg="primary"
    >
      <Text size="M" color="success">Success operation!</Text>
    </Box>
  </div>
);
