import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { IThunkConfig } from 'app/providers/store';
import { IProfile } from '../model/types';

export const fetchUserProfile = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, { rejectWithValue, extra: { httpApi } }) => {
    try {
      const response = await httpApi.get<IProfile>('/profile');

      if (!response.data) {
        throw new Error('no data');
      }

      return response.data;
    } catch (e) {
      const status = (e as AxiosError<any>).response?.data?.message;

      return rejectWithValue(status || (e as Error).message);
    }
  },
);
