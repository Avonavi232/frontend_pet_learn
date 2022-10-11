import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from 'entities/Counter';
import { IAppState, TPreloadedState, TReduxActions } from './types';

export const createReduxStore = (
  preloadedState?: TPreloadedState,
) => configureStore<IAppState, TReduxActions>({
  reducer: {
    counter: counterReducer,
  },
  devTools: __IS_DEV__,
  preloadedState,
});
