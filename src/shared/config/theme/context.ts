import { createContext, useContext } from 'react';
import { EThemes } from './constants';

export interface IThemeContext {
  theme?: EThemes;
  toggleTheme(): void;
}

export const context = createContext<IThemeContext>({
  theme: undefined,
  toggleTheme: () => null,
});

export const ThemeProvider = context.Provider;
export const ThemeConsumer = context.Consumer;

export const useTheme = (): IThemeContext => useContext(context);
