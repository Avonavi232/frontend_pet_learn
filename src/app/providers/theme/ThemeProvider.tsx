import * as React from 'react';
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { localStorageService } from 'shared/lib/localStorageService';
import {
  ThemeProvider as Provider, IThemeContext, EThemes,
} from 'shared/config/theme';
import { THEME_LS_KEY } from 'shared/const';

export interface IThemeProviderProps {
  children: React.ReactElement;
}

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const { value, set } = localStorageService<EThemes>(THEME_LS_KEY);
  const [theme, setTheme] = useState(value || EThemes.Light);

  useEffect(() => {
    set(theme);
  }, [value, theme, set]);

  useEffect(() => {
    document.body.classList.add(theme);

    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === EThemes.Light ? EThemes.Dark : EThemes.Light));
  }, []);

  const context: IThemeContext = useMemo(
    () => ({ theme, toggleTheme, setTheme }),
    [theme, toggleTheme],
  );

  return (
    <Provider value={context}>
      {children}
    </Provider>
  );
};
