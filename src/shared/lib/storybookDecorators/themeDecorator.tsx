import cn from 'classnames';
import { EThemes, ThemeConsumer, useTheme } from 'shared/config/theme';
import { TDecorator } from './types';
import 'app/styles/index.global.sass';
import styles from './styles.sass';
import { ThemeProvider } from 'app/providers';
import { FC, ReactNode, useEffect } from 'react';

const mapThemes: Record<string, EThemes> = {
  dark: EThemes.Dark,
  light: EThemes.Light,
};

interface IInnerProps {
  children: ReactNode
  theme: EThemes
}

const Inner: FC<IInnerProps> = ({ children, theme }) => {
  const { setTheme } = useTheme();

  /** Применяет тему, выбранную в интерфейсе storybook */
  useEffect(() => {
    setTheme(theme);
  }, [theme, setTheme]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export const themeDecorator: TDecorator = (Story, context) => {
  const theme = mapThemes[context.globals.theme];
  return (
    <ThemeProvider>
      <Inner theme={theme}>
        <div className={cn(styles.wrapper)}><Story /></div>
      </Inner>
    </ThemeProvider>
  );
};
