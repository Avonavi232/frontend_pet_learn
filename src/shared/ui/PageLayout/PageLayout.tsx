import styles from './styles.sass';

interface IPageLayoutProps {
  main: React.ReactElement;
  sidebar: React.ReactElement;
  navbar: React.ReactElement;
}

export const PageLayout: React.FC<IPageLayoutProps> = ({ main, sidebar, navbar }) => {
  return (
    <>
      {navbar}
      <div className={styles['container']}>
        <aside>
          {sidebar}
        </aside>
        <main className={styles['main']}>
          {main}
        </main>
      </div>
    </>
  );
};
