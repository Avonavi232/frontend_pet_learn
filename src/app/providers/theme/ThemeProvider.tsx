import * as React from 'react';
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { localStorageService } from 'shared/lib/localStorageService';
import {
  ThemeProvider as Provider, IThemeContext, EThemes, THEME_LS_KEY,
} from 'shared/config/theme';

export interface IThemeProviderProps {
  children: React.ReactElement;
}

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const { value, set } = localStorageService<EThemes>(THEME_LS_KEY);
  const [theme, setTheme] = useState(value || EThemes.Light);

  useEffect(() => {
    set(theme);
  }, [value, theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === EThemes.Light ? EThemes.Dark : EThemes.Light));
  }, []);

  const context: IThemeContext = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <Provider value={context}>
      {children}
    </Provider>
  );
};
