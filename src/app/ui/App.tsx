import { BrowserRouter } from 'react-router-dom';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLayout } from 'shared/ui/PageLayout';
import { FC } from 'react';
import { ErrorBoundary } from 'shared/ui/ErrorBoundary';
import { PageError } from 'widgets/PageError/ui';
import { StoreProvider } from 'app/providers/store';
import { ThemeProvider } from '../providers/theme';
import { Router } from '../providers/router';

export const App: FC = () => (
  <BrowserRouter>
    <ErrorBoundary errorComponent={<PageError />}>
      <StoreProvider>
        <ThemeProvider>
          <PageLayout main={<Router />} sidebar={<Sidebar />} navbar={<Navbar />} />
        </ThemeProvider>
      </StoreProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
