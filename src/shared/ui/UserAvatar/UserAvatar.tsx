import type { FC } from 'react';
import cn from 'classnames';

import styles from './styles.sass';
import defaultUser from './defaultUser2.png';

interface IUserAvatarProps {
  className?: string;
  url: string | null
  alt?: string;
  title?: string;
}

export const UserAvatar: FC<IUserAvatarProps> = (props) => {
  const {
    className, url, alt = '', title,
  } = props;

  return (
    <div className={cn(className, styles.container)}>
      <img src={url || defaultUser} alt={alt} title={title} />
    </div>
  );
};
