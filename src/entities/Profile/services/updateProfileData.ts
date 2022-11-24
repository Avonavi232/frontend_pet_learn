import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { IThunkConfig } from 'app/providers/store';
import { selectEditableProfileData } from '../model/selectors';
import { IProfile } from '../model/types';

export const updateProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, { rejectWithValue, extra: { httpApi }, getState }) => {
    const state = getState();
    const editedProfile = selectEditableProfileData(state);

    try {
      const response = await httpApi.put<IProfile>('/profile', editedProfile);

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
