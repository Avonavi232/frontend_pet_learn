import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from './types';

const initialState: IUserState = {
  user: undefined,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { actions: userActions, reducer: userReducer } = slice;
