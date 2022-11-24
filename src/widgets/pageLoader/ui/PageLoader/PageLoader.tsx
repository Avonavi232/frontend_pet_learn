import cn from 'classnames';

import { FC } from 'react';
import { Spinner } from 'shared/ui/Spinner';
import styles from './styles.sass';

interface IPageLoaderProps {
  className?: string;
}

export const PageLoader: FC<IPageLoaderProps> = ({ className }) => (
  <div className={cn(className, styles.container)}>
    <Spinner size={64} />
  </div>
);
