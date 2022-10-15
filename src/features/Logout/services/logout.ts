import { createAsyncThunk } from '@reduxjs/toolkit';

import { userLsService } from 'entities/User/model/lsService';
import { userActions } from 'entities/User';

export const logout = createAsyncThunk(
  'login/logout',
  (_, thunkAPI) => {
    userLsService.clear();
    thunkAPI.dispatch(userActions.clearUserData());
  },
);
