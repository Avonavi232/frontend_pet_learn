import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile, IProfileState } from './types';

const initialState: IProfileState = {
  readonly: true,
  data: null,
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<IProfile>) => {
      state.data = action.payload;
    },
    updateProfileData: (state, action: Partial<PayloadAction<IProfile>>) => {
      state.data = {
        ...(state.data as IProfile),
        ...action.payload,
      };
    },
  },
});

export const { actions: profileActions, reducer: profileReducer } = slice;
