import { createContext, useContext } from 'react';
import { EThemes, THEME_LS_KEY } from '../../constants/themes';
import { localStorageService } from '../../utils/localStorageService';

export interface IThemeContext {
  theme?: EThemes;
  toggleTheme(): void;
}

export const context = createContext<IThemeContext>({
  theme: undefined,
  toggleTheme: () => null,
});

export const Provider = context.Provider;
export const ThemeConsumer = context.Consumer;

export const useTheme = (): IThemeContext => useContext(context);
