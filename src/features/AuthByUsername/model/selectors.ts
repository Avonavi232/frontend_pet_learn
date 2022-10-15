import { IAppState } from 'app/providers/store';

export const selectUsername = (state: IAppState) => state.login.username;
export const selectPassword = (state: IAppState) => state.login.password;
export const selectIsLoading = (state: IAppState) => state.login.isLoading;
export const selectError = (state: IAppState) => state.login.error;
export const selectIsModalOpened = (state: IAppState) => state.login.isModalOpened;
