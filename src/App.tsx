import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import cn from 'classnames';

import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { ThemeProvider, ThemeConsumer } from './components/ThemeContext';
import { ThemeSwitcher } from './components/ThemeSwitcher';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ThemeConsumer>
        {({ theme }) => (
          <div className={cn('app', theme)}>
            <BrowserRouter>
              <Link to="/">Main</Link>
              <br/>
              <Link to="/about">About</Link>
              <br/>
              <ThemeSwitcher/>
              <Suspense fallback={<div>loading</div>}>
                <Routes>
                  <Route path="" element={<MainPageLazy/>}/>
                  <Route path="/about" element={<AboutPageLazy/>}/>
                </Routes>
              </Suspense>
            </BrowserRouter>
          </div>
        )}
      </ThemeConsumer>
    </ThemeProvider>
  );
};
