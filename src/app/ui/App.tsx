import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { FC } from 'react';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLayout } from 'shared/ui/PageLayout';
import { ErrorBoundary } from 'shared/ui/ErrorBoundary';
import { PageError } from 'widgets/PageError/ui';
import { TReduxStore } from 'app/providers/store';
import { ThemeProvider } from '../providers/theme';
import { Router } from '../providers/router';

export interface IAppProps {
  reduxStore: TReduxStore
}

const App: FC<IAppProps> = (props) => {
  const { reduxStore } = props;

  return (
    <BrowserRouter>
      <ErrorBoundary errorComponent={<PageError />}>
        <Provider store={reduxStore}>
          <ThemeProvider>
            <PageLayout main={<Router />} sidebar={<Sidebar />} navbar={<Navbar />} />
          </ThemeProvider>
        </Provider>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default hot(App);
