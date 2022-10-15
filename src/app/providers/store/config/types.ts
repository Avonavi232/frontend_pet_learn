import { Dispatch } from 'react';
import type { Action, EnhancedStore, ThunkDispatch } from '@reduxjs/toolkit';
import type { CombinedState, PreloadedState } from 'redux';
import type { NoInfer } from '@reduxjs/toolkit/src/tsHelpers';

import type { ICounterState } from 'entities/Counter';
import type { IUserState } from 'entities/User';
import { IAuthFormModalState } from 'features/AuthByUsername/model/types';

export type IAppState = {
  counter: ICounterState
  user: IUserState
  login: IAuthFormModalState
}

export type TReduxActions = Action

export type TPreloadedState = PreloadedState<CombinedState<NoInfer<IAppState>>>;

export type TReduxStore = EnhancedStore<IAppState, TReduxActions>

export type TDispatch = ThunkDispatch<IAppState, undefined, TReduxActions> & Dispatch<TReduxActions>
