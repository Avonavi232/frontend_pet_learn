import { PathRouteProps } from 'react-router-dom';
import { MainPageLazy } from 'pages/mainPage';
import { AboutPageLazy } from 'pages/aboutPage';
import { NotFoundPage } from 'pages/notFoundPage';
import { ProfilePageLazy } from 'pages/profilePage';

export enum EAppRoutes {
  Main = '/',
  About = '/about',
  Profile = '/profile',
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
    path: EAppRoutes.Profile,
    element: <ProfilePageLazy />,
  },
  {
    path: EAppRoutes.NotFound,
    element: <NotFoundPage />,
  },
];
