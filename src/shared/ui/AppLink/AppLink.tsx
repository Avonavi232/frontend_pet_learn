import cn from 'classnames';
import { Link, LinkProps } from 'react-router-dom';

import styles from './styles.sass';

export const enum EAppLinkTheme {
  Primary = 'primary',
  Secondary = 'secondary',
}

export interface IAppLinkProps extends LinkProps {
  theme?: EAppLinkTheme
}

export const AppLink: React.FC<IAppLinkProps> = ({ className, theme = EAppLinkTheme.Primary, ...rest }) => {
  return (
    <Link {...rest} className={cn(className, styles['container'], styles[theme])}/>
  );
};
