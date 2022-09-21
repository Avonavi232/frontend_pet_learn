import cn from 'classnames';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider, Router } from '../providers';
import { ThemeConsumer } from 'shared/config/theme';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLayout } from 'shared/ui/PageLayout';
import styles from '../styles/styles.sass';


export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ThemeConsumer>
          {({ theme }) => (
            <div className={cn(styles['app'], theme)}>
              <PageLayout main={<Router/>} sidebar={<Sidebar/>} navbar={<Navbar/>}/>
            </div>
          )}
        </ThemeConsumer>
      </ThemeProvider>
    </BrowserRouter>
  );
};
