import { FC, ReactElement } from 'react';
import { EThemes } from 'shared/config/theme';
import cn from 'classnames';
import styles from './styles.sass';

interface IPageLayoutProps {
  main: ReactElement;
  sidebar: ReactElement;
  navbar: ReactElement;
  theme: EThemes;
}

export const PageLayout: FC<IPageLayoutProps> = ({
  main, sidebar, navbar, theme,
}) => (
  <div className={cn(styles.app, theme)}>
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
