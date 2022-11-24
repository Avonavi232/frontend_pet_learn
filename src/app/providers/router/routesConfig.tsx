import { PathRouteProps } from 'react-router-dom';
import { MainPageLazy } from 'pages/mainPage';
import { AboutPageLazy } from 'pages/aboutPage';
import { NotFoundPage } from 'pages/notFoundPage';
import { ProfilePageLazy } from 'pages/profilePage';

interface AppRouteProps extends PathRouteProps{
  private?: boolean;
}

export enum EAppRoutes {
  Main = '/',
  About = '/about',
  Profile = '/profile',
  NotFound = '*'
}

export const routeConfig: AppRouteProps[] = [
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
    private: true,
  },
  {
    path: EAppRoutes.NotFound,
    element: <NotFoundPage />,
  },
];
