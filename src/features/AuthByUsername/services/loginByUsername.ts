import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IUser, userActions } from 'entities/User';
import { userLsService } from 'entities/User/model/lsService';

interface IAuthDTO {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<IUser, IAuthDTO, {rejectValue: string}>(
  'login/loginByUsername',
  async (authDTO, thunkAPI) => {
    try {
      const response = await axios.post<IUser>('http://localhost:8000/login', authDTO);

      if (!response.data) {
        throw new Error('no data');
      }

      const user: IUser = {
        id: String(response.data.id),
        username: response.data.username,
        avatar: response.data.avatar,
      };

      thunkAPI.dispatch(userActions.setUserData(user));

      userLsService.set(user);

      return response.data;
    } catch (e) {
      const status = (e as AxiosError<any>).response?.data?.message;

      return thunkAPI.rejectWithValue(status || (e as Error).message);
    }
  },
);
