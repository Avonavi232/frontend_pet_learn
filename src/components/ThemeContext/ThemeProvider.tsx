import * as React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { localStorageService } from '../../utils/localStorageService';
import { EThemes, THEME_LS_KEY } from '../../constants/themes';
import { Provider, IThemeContext } from './context'

export interface IThemeProviderProps {
  children: React.ReactElement;
}

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const { value, set } = localStorageService<EThemes>(THEME_LS_KEY);
  const [ theme, setTheme ] = useState(value || EThemes.Light);

  useEffect(() => {
    set(theme);
  }, [ value, theme ]);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => prevTheme === EThemes.Light ? EThemes.Dark : EThemes.Light);
  }, [])

  const context: IThemeContext = useMemo(() => ({ theme, toggleTheme }), [ theme, toggleTheme ]);

  return (
    <Provider value={context}>
      {children}
    </Provider>
  );
};
