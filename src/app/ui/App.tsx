import { BrowserRouter } from 'react-router-dom';

import { ThemeConsumer } from 'shared/config/theme';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLayout } from 'shared/ui/PageLayout';
import { FC } from 'react';
import { ErrorBoundary } from 'shared/ui/ErrorBoundary';
import { PageError } from 'widgets/PageError/ui';
import { ThemeProvider, Router } from '../providers';

export const App: FC = () => (
  <BrowserRouter>
    <ErrorBoundary errorComponent={<PageError />}>
      <ThemeProvider>
        <ThemeConsumer>
          {({ theme }) => (
            <PageLayout theme={theme} main={<Router />} sidebar={<Sidebar />} navbar={<Navbar />} />
          )}
        </ThemeConsumer>
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
