import { FC, ReactElement, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'app/providers';

interface IRouterProps {
  fallback?: ReactElement
}

export const Router: FC<IRouterProps> = ({ fallback }) => (
  <Suspense fallback={fallback}>
    <Routes>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {Object.values(routeConfig).map((props) => <Route key={props.path} {...props} />)}
    </Routes>
  </Suspense>
);

Router.defaultProps = {
  fallback: <div>loading</div>,
};
