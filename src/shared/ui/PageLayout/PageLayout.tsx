import { FC, ReactElement } from 'react';
import cn from 'classnames';
import styles from './styles.sass';

interface IPageLayoutProps {
  main: ReactElement;
  sidebar: ReactElement;
  navbar: ReactElement;
}

export const PageLayout: FC<IPageLayoutProps> = ({
  main, sidebar, navbar,
}) => (
  <div className={cn(styles.app)}>
    {navbar}
    <div className={styles.content}>
      <aside>
        {sidebar}
      </aside>
      <main className={styles.main}>
        {main}
      </main>
    </div>
  </div>
);
