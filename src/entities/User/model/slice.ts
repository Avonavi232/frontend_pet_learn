import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserState } from './types';

const initialState: IUserState = {
  user: null,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    clearUserData: (state) => {
      state.user = null;
    },
  },
});

export const { actions: userActions, reducer: userReducer } = slice;
