import cn from 'classnames';
import { EThemes } from 'shared/config/theme';
import { TDecorator } from './types';
import 'app/styles/index.global.sass';
import styles from './styles.sass';

const mapThemes: Record<string, EThemes> = {
  dark: EThemes.Dark,
  light: EThemes.Light,
};

export const themeDecorator: TDecorator = (Story, context) => {
  const theme = mapThemes[context.globals.theme];
  return <div className={cn(theme, styles.wrapper)}><Story /></div>;
};
