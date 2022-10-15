import { localStorageService } from 'shared/lib/localStorageService';
import { USER_LS_KEY } from 'shared/const';
import { IUser } from './types';

export const userLsService = localStorageService<IUser>(USER_LS_KEY);
