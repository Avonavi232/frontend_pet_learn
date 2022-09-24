import { FC, ReactElement } from 'react';
import styles from './styles.sass';

interface IPageLayoutProps {
  main: ReactElement;
  sidebar: ReactElement;
  navbar: ReactElement;
}

export const PageLayout: FC<IPageLayoutProps> = ({ main, sidebar, navbar }) => (
  <>
    {navbar}
    <div className={styles.container}>
      <aside>
        {sidebar}
      </aside>
      <main className={styles.main}>
        {main}
      </main>
    </div>
  </>
);
