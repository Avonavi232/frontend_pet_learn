import cn from 'classnames';
import { BrowserRouter } from 'react-router-dom';

import { ThemeConsumer } from 'shared/config/theme';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLayout } from 'shared/ui/PageLayout';
import { FC } from 'react';
import { ErrorBoundary } from 'shared/ui/ErrorBoundary';
import { PageError } from 'widgets/PageError/ui';
import { ThemeProvider, Router } from '../providers';
import styles from '../styles/styles.sass';

export const App: FC = () => (
  <BrowserRouter>
    <ErrorBoundary errorComponent={<PageError />}>
      <ThemeProvider>
        <ThemeConsumer>
          {({ theme }) => (
            <div className={cn(styles.app, theme)}>
              <PageLayout main={<Router />} sidebar={<Sidebar />} navbar={<Navbar />} />
            </div>
          )}
        </ThemeConsumer>
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
