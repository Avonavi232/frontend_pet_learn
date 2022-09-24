import { FC, ReactElement, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/pageLoader';
import { routeConfig } from './routesConfig';

interface IRouterProps {
  fallback?: ReactElement
}

export const Router: FC<IRouterProps> = ({ fallback }) => (
  <Suspense fallback={fallback}>
    <Routes>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {routeConfig.map((props) => <Route key={props.path} {...props} />)}
    </Routes>
  </Suspense>
);

Router.defaultProps = {
  fallback: <PageLoader />,
};
