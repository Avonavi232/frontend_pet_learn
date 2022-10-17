import { Dispatch } from 'react';
import type { Action, EnhancedStore, ThunkDispatch } from '@reduxjs/toolkit';
import type {
  CombinedState, PreloadedState, ReducersMapObject, Reducer,
} from 'redux';
import type { NoInfer } from '@reduxjs/toolkit/src/tsHelpers';

import type { ICounterState } from 'entities/Counter';
import type { IUserState } from 'entities/User';
import { IAuthFormModalState } from 'features/AuthByUsername/model/types';
import { ThunkMiddlewareFor } from '@reduxjs/toolkit/src/getDefaultMiddleware';

export type IAppState = {
  counter: ICounterState
  user: IUserState
  login?: IAuthFormModalState
}

export type TReduxActions = Action

export type TPreloadedState = PreloadedState<CombinedState<NoInfer<IAppState>>>;

export type TReducersMapObj = ReducersMapObject<IAppState, TReduxActions>

export interface IReducerManager {
  reduce: (state: IAppState | undefined, action: TReduxActions) => CombinedState<IAppState>;
  add: (key: keyof TReducersMapObj, reducer: Reducer) => void;
  remove: (key: keyof TReducersMapObj) => void;
}

export type TReduxStore = EnhancedStore<IAppState, TReduxActions, [ThunkMiddlewareFor<IAppState>]> & {
  reducerManager: IReducerManager
}

export type TDispatch = ThunkDispatch<IAppState, undefined, TReduxActions> & Dispatch<TReduxActions>
