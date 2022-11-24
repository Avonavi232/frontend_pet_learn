import { IAppState } from 'app/providers/store';

export const selectProfile = (state: IAppState) => state.profile?.data || null;

export const selectProfileIsLoading = (state: IAppState) => state.profile?.isLoading || false;
export const selectProfileError = (state: IAppState) => state.profile?.error || null;
export const selectIsProfileReadonly = (state: IAppState) => state.profile?.readonly || false;
export const selectEditableProfileData = (state: IAppState) => state.profile?.editedData || null;
