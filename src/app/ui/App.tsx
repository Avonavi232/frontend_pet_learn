import { BrowserRouter } from 'react-router-dom';

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
        <PageLayout main={<Router />} sidebar={<Sidebar />} navbar={<Navbar />} />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
