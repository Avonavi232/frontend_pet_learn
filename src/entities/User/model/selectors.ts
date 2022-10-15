import type { IAppState } from 'app/providers/store';

export const selectUser = (state: IAppState) => state.user.user;
