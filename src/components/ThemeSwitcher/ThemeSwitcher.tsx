import * as React from 'react';
import { useTheme } from '../ThemeContext';

export const ThemeSwitcher: React.FC = () => {
  const { toggleTheme } = useTheme();


  return (
    <div>
      <button onClick={toggleTheme}>switch theme</button>
    </div>
  );
};
