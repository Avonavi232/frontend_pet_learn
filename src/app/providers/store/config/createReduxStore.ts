import { configureStore } from '@reduxjs/toolkit';
import { ReducersMapObject } from 'redux';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { IAppState, TPreloadedState, TReduxActions } from './types';

export const createReduxStore = (
  preloadedState?: TPreloadedState,
) => {
  const reducer: ReducersMapObject<IAppState, TReduxActions> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<IAppState, TReduxActions>({
    reducer,
    devTools: __IS_DEV__,
    preloadedState,
  });
};
