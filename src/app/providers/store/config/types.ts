import type { Action, EnhancedStore } from '@reduxjs/toolkit';
import type {
  CombinedState, PreloadedState, ReducersMapObject, Reducer,
} from 'redux';
import type { NoInfer } from '@reduxjs/toolkit/src/tsHelpers';
import { MiddlewareArray } from '@reduxjs/toolkit';
import { ThunkMiddlewareFor } from '@reduxjs/toolkit/src/getDefaultMiddleware';
import { ExcludeFromTuple } from '@reduxjs/toolkit/dist/tsHelpers';

import type { ICounterState } from 'entities/Counter';
import type { IUserState } from 'entities/User';
import { IAuthFormModalState } from 'features/AuthByUsername/model/types';
import { IProfileState } from 'entities/Profile';
import { THttpApi } from 'shared/lib/api/types';

export type IAppState = {
  counter: ICounterState
  user: IUserState
  login?: IAuthFormModalState
  profile?: IProfileState
}

export type TReduxActions = Action

export type TPreloadedState = PreloadedState<CombinedState<NoInfer<IAppState>>>;

export type TReducersMapObj = ReducersMapObject<IAppState, TReduxActions>

export interface IReducerManager {
  reduce: (state: IAppState | undefined, action: TReduxActions) => CombinedState<IAppState>;
  add: (key: keyof TReducersMapObj, reducer: Reducer) => void;
  remove: (key: keyof TReducersMapObj) => void;
}

// eslint-disable-next-line max-len
export type TMiddlewares = MiddlewareArray<ExcludeFromTuple<[ ThunkMiddlewareFor<IAppState, { thunk: { extraArgument: IThunkExtra } }> ], never>>

export type TReduxStore = EnhancedStore<IAppState, TReduxActions, TMiddlewares> & {
  reducerManager: IReducerManager
}

export type TDispatch = TReduxStore['dispatch']

export interface IThunkExtra {
  httpApi: THttpApi;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtra
  state: IAppState
}
