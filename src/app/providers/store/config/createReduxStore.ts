import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/store/config/reducerManager';
import {
  IAppState, TReducersMapObj, TPreloadedState, TReduxActions, TReduxStore,
} from './types';

const staticReducersMap: TReducersMapObj = {
  counter: counterReducer,
  user: userReducer,
};

const reducerManager = createReducerManager(staticReducersMap);

export const createReduxStore = (
  preloadedState?: TPreloadedState,
): TReduxStore => {
  const reduxStore = configureStore<IAppState, TReduxActions>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState,
  });

  const preparedReduxStore: TReduxStore = { ...reduxStore, reducerManager };

  return preparedReduxStore;
};
