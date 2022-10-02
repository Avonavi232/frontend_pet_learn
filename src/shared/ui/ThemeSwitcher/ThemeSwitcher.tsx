import cn from 'classnames';

import { EThemes, useTheme } from 'shared/config/theme';
import { ReactComponent as Icon } from 'shared/assets/icons/theme-light.svg';
import { FC } from 'react';
import styles from './styles.sass';

interface IThemeSwitcherProps{
  className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn(className, styles.container)}>
      <button
        onClick={toggleTheme}
        type="button"
        className={styles.button}
      >
        <Icon className={styles.icon} />
      </button>
    </div>
  );
};
