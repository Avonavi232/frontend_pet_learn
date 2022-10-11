import { FC, ReactElement, useMemo } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/createReduxStore';
import { TPreloadedState } from '../config/types';

export interface IStoreProviderProps {
  children: ReactElement
  preloadedState?: TPreloadedState
}

export const StoreProvider: FC<IStoreProviderProps> = ({ children, preloadedState }) => {
  const store = useMemo(() => createReduxStore(preloadedState), [preloadedState]);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
