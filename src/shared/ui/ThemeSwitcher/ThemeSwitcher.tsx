import cn from 'classnames';

import { EThemes, useTheme } from 'shared/config/theme';
import { ReactComponent as Icon } from 'shared/assets/icons/theme-light.svg';
import { Button, EButtonTheme } from 'shared/ui/Button';
import { FC } from 'react';
import styles from './styles.sass';

interface IThemeSwitcherProps{
  className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn(className, styles.container)}>
      <Button
        onClick={toggleTheme}
        style={{ color: theme === EThemes.Light ? '#FFC700' : '#0115C6' }}
        theme={EButtonTheme.Clean}
      >
        <Icon className={styles.icon} />
      </Button>
    </div>
  );
};
