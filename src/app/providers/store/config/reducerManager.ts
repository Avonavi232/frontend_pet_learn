import { AnyAction, combineReducers, Reducer } from 'redux';

import {
  IAppState, IReducerManager, TReducersMapObj,
} from './types';

export function createReducerManager(initialReducers: TReducersMapObj): IReducerManager {
  const reducers: TReducersMapObj = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: Array<keyof TReducersMapObj> = [];

  return {
    reduce: (state: IAppState | undefined, action: AnyAction): IAppState => {
      const _state = state ? { ...state } : undefined;
      if (keysToRemove.length > 0 && _state) {
        keysToRemove.forEach((key) => {
          delete _state[key];
        });
        keysToRemove = [];
      }

      return combinedReducer(_state, action);
    },

    add: (key: keyof TReducersMapObj, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },

    remove: (key: keyof TReducersMapObj) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    },
  };
}
