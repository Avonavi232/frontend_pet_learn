import type { Action } from '@reduxjs/toolkit';
import type { CombinedState, PreloadedState } from 'redux';
import type { NoInfer } from '@reduxjs/toolkit/src/tsHelpers';
import type { ICounterState } from 'entities/Counter';
import type { IUserState } from 'entities/User';

export type IAppState = {
  counter: ICounterState
  user: IUserState
}

export type TReduxActions = Action

export type TPreloadedState = PreloadedState<CombinedState<NoInfer<IAppState>>>;
