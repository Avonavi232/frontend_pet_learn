import cn from 'classnames';
import { Link, LinkProps } from 'react-router-dom';

import { memo } from 'react';
import styles from './styles.sass';

export const enum EAppLinkTheme {
  Primary = 'primary',
  Secondary = 'secondary',
}

export interface IAppLinkProps extends LinkProps {
  theme?: EAppLinkTheme
}

export const AppLink = memo<IAppLinkProps>((props) => {
  const { className, theme = EAppLinkTheme.Primary, ...rest } = props;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Link {...rest} className={cn(className, styles[theme], styles.link)} />;
});
