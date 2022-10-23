import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/store/config/reducerManager';
import { getHttpApi } from 'shared/lib/api';
import {
  IAppState, TReducersMapObj, TPreloadedState, TReduxActions, TReduxStore, TMiddlewares,
} from './types';

const staticReducersMap: TReducersMapObj = {
  counter: counterReducer,
  user: userReducer,
};

const reducerManager = createReducerManager(staticReducersMap);

export const createReduxStore = (
  preloadedState?: TPreloadedState,
): TReduxStore => {
  const httpApi = getHttpApi();

  const reduxStore = configureStore<IAppState, TReduxActions, TMiddlewares>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: { extraArgument: { httpApi } },
    }),
  });

  const preparedReduxStore: TReduxStore = { ...reduxStore, reducerManager };

  return preparedReduxStore;
};
