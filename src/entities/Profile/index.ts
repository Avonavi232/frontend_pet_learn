export { profileReducer, profileActions } from './model/slice';
export {
  selectProfile, selectProfileError, selectProfileIsLoading, selectIsProfileReadonly, selectEditableProfileData,
} from './model/selectors';
export { fetchUserProfile } from './services/fetchUserProfile';
export { updateProfileData } from './services/updateProfileData';
export type { IProfile, IProfileState } from './model/types';
export { ProfileCard } from './ui/ProfileCard/ProfileCard';
