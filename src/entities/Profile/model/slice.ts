import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserProfile, updateProfileData } from 'entities/Profile';
import { IProfile, IProfileState } from './types';

const initialState: IProfileState = {
  readonly: true,
  data: null,
  editedData: null,
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfileData: (state, action: PayloadAction<Partial<IProfile>>) => {
      state.editedData = {
        ...(state.editedData as IProfile),
        ...action.payload,
      };
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.editedData = state.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.editedData = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (state, action) => {
        state.readonly = true;
        state.isLoading = false;
        state.data = action.payload;
        state.editedData = action.payload;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { actions: profileActions, reducer: profileReducer } = slice;
