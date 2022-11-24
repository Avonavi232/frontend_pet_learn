import type { FC } from 'react';
import cn from 'classnames';

import { TStandardSize } from 'shared/ui/theme';
import { memo } from 'react';
import styles from './styles.sass';

interface IAvatarProps {
  className?: string;
  src?: string;
  size?: TStandardSize
  alt?: string;
}

export const Avatar: FC<IAvatarProps> = memo(({
  className, src, size, alt,
}) => (
  <img src={src} className={cn(className, styles.container, styles[`size_${size}`])} alt={alt || ''} />
));
