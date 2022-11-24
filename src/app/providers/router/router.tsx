import {
  FC, ReactElement, Suspense, useMemo,
} from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/pageLoader';
import { useSelector } from 'react-redux';
import { selectUser } from 'entities/User/model/selectors';
import { routeConfig } from './routesConfig';

interface IRouterProps {
  fallback?: ReactElement
}

export const Router: FC<IRouterProps> = ({ fallback }) => {
  const auth = useSelector(selectUser);

  const routes = useMemo(() => routeConfig
    .filter((props) => !(props.private && !auth?.id))
    .map((props) => (
      <Route
        key={props.path}
          /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...props}
      />
    )), [auth]);

  return (
    <Suspense fallback={fallback}>
      <Routes>
        {routes}
      </Routes>
    </Suspense>
  );
};

Router.defaultProps = {
  fallback: <PageLoader />,
};
