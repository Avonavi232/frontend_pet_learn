import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from 'features/AuthByUsername/services/loginByUsername';
import { IAuthFormModalState } from './types';

const initialState: IAuthFormModalState = {
  username: '',
  password: '',
  isModalOpened: false,
};

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setModalOpened: (state, action: PayloadAction<boolean>) => {
      state.isModalOpened = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginByUsername.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });

    builder.addCase(loginByUsername.fulfilled, (state) => {
      state.username = '';
      state.password = '';
      state.isLoading = false;
      state.isModalOpened = false;
    });

    builder.addCase(loginByUsername.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: authModalActions, reducer: authModalReducer } = slice;
