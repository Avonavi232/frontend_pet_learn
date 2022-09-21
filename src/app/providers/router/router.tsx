import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'app/providers';

interface IRouterProps {
  fallback?: React.ReactElement
}

export const Router: React.FC<IRouterProps> = ({ fallback }) => {
  return (
    <Suspense fallback={fallback}>
      <Routes>
        {Object.values(routeConfig).map(props => <Route key={props.path} {...props}/>)}
      </Routes>
    </Suspense>
  );
};

Router.defaultProps = {
  fallback: <div>loading</div>
}
