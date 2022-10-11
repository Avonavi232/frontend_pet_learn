import type { Action } from '@reduxjs/toolkit';
import type { CombinedState, PreloadedState } from 'redux';
import type { NoInfer } from '@reduxjs/toolkit/src/tsHelpers';
import type { ICounterState } from 'entities/Counter';

export type IAppState = {
  counter: ICounterState
}

export type TReduxActions = Action

export type TPreloadedState = PreloadedState<CombinedState<NoInfer<IAppState>>>;
