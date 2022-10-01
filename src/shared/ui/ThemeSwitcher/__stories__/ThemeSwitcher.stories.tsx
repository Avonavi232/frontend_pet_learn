import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { EThemes, ThemeProvider } from 'shared/config/theme';
import { ThemeSwitcher } from '../ThemeSwitcher';

export default {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = () => {
  const [theme, setTheme] = React.useState(EThemes.Light);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === EThemes.Light ? EThemes.Dark : EThemes.Light));
  };

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <ThemeSwitcher />
    </ThemeProvider>
  );
};

export const Primary = Template.bind({});
