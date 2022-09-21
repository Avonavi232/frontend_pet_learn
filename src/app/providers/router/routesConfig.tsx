import { PathRouteProps } from 'react-router';
import { MainPageLazy } from 'pages/mainPage';
import { AboutPageLazy } from 'pages/aboutPage';

export enum EAppRoutes {
  Main = '/',
  About = '/about',
}

export const routeConfig: Record<EAppRoutes, PathRouteProps> = {
  [EAppRoutes.Main]: {
    path: EAppRoutes.Main,
    element: <MainPageLazy />
  },
  [EAppRoutes.About]: {
    path: EAppRoutes.About,
    element: <AboutPageLazy />
  }
}
