import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { IUser, userActions } from 'entities/User';
import { userLsService } from 'entities/User/model/lsService';
import { IThunkConfig } from 'app/providers/store';

interface IAuthDTO {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<IUser, IAuthDTO, IThunkConfig<string>>(
  'login/loginByUsername',
  async (authDTO, { dispatch, rejectWithValue, extra: { httpApi } }) => {
    try {
      const response = await httpApi.post<IUser>('/login', authDTO);

      if (!response.data) {
        throw new Error('no data');
      }

      const user: IUser = {
        id: String(response.data.id),
        username: response.data.username,
        avatar: response.data.avatar,
      };

      dispatch(userActions.setUserData(user));

      userLsService.set(user);

      return response.data;
    } catch (e) {
      const status = (e as AxiosError<any>).response?.data?.message;

      return rejectWithValue(status || (e as Error).message);
    }
  },
);
