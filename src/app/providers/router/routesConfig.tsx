import { PathRouteProps } from 'react-router-dom';
import { MainPageLazy } from 'pages/mainPage';
import { AboutPageLazy } from 'pages/aboutPage';
import { NotFoundPage } from 'pages/notFoundPage';

export enum EAppRoutes {
  Main = '/',
  About = '/about',
  NotFound = '*'
}

export const routeConfig: PathRouteProps[] = [
  {
    path: EAppRoutes.Main,
    element: <MainPageLazy />,
  },
  {
    path: EAppRoutes.About,
    element: <AboutPageLazy />,
  },
  {
    path: EAppRoutes.NotFound,
    element: <NotFoundPage />,
  },
];
