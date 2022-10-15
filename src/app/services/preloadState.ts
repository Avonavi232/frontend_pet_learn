import { userLsService } from 'entities/User/model/lsService';
import { TPreloadedState } from '../providers/store/config/types';

export const preloadState = async (): Promise<TPreloadedState> => ({
  user: {
    user: userLsService.get(),
  },
});
