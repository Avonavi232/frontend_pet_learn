import { configureStore } from '@reduxjs/toolkit';
import { ReducersMapObject } from 'redux';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { authModalReducer } from 'features/AuthByUsername';
import {
  IAppState, TPreloadedState, TReduxActions, TReduxStore,
} from './types';

export const createReduxStore = (
  preloadedState?: TPreloadedState,
): TReduxStore => {
  const reducer: ReducersMapObject<IAppState, TReduxActions> = {
    counter: counterReducer,
    user: userReducer,
    login: authModalReducer,
  };

  return configureStore<IAppState, TReduxActions>({
    reducer,
    devTools: __IS_DEV__,
    preloadedState,
  });
};
