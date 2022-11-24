import type { FC } from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';

import { useAsyncReducer, TReducersMap } from 'shared/lib/useAsyncReducer';
import { useAppDispatch } from 'shared/lib/useAppDispatch';
import {
  fetchUserProfile, profileActions,
  ProfileCard,
  profileReducer, selectEditableProfileData,
  selectIsProfileReadonly,
  selectProfileError,
  selectProfileIsLoading,
} from 'entities/Profile';
import { ECurrency } from 'entities/Currency';
import { ECountry } from 'entities/Country';
import { PageHeader } from '../PageHeader/PageHeader';
import styles from './styles.sass';

interface IProfilePageProps {
  className?: string;
}

const asyncReducers: TReducersMap = { profile: profileReducer };

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  useAsyncReducer(asyncReducers);

  const profileData = useSelector(selectEditableProfileData);
  const profileIsLoading = useSelector(selectProfileIsLoading);
  const profileError = useSelector(selectProfileError);
  const profileReadonly = useSelector(selectIsProfileReadonly);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  const handleFirstnameChange = useCallback((value: string) => {
    dispatch(profileActions.updateProfileData({ firstname: value }));
  }, [dispatch]);

  const handleLastnameChange = useCallback((value: string) => {
    dispatch(profileActions.updateProfileData({ lastname: value }));
  }, [dispatch]);

  const handleAgeChange = useCallback((value: string) => {
    // TODO запретить ввод букв
    dispatch(profileActions.updateProfileData({ age: Number(value) }));
  }, [dispatch]);

  const handleCityChange = useCallback((value: string) => {
    dispatch(profileActions.updateProfileData({ city: value }));
  }, [dispatch]);

  const handleUsernameChange = useCallback((value: string) => {
    dispatch(profileActions.updateProfileData({ username: value }));
  }, [dispatch]);

  const handleAvatarChange = useCallback((value: string) => {
    dispatch(profileActions.updateProfileData({ avatar: value }));
  }, [dispatch]);

  const handleCurrencyChange = useCallback((value: ECurrency) => {
    dispatch(profileActions.updateProfileData({ currency: value }));
  }, [dispatch]);

  const handleCountryChange = useCallback((value: ECountry) => {
    dispatch(profileActions.updateProfileData({ country: value }));
  }, [dispatch]);

  return (
    <div className={cn(className, styles.container)}>
      <PageHeader className={styles.header} />
      <ProfileCard
        isReadonly={profileReadonly}
        error={profileError}
        isLoading={profileIsLoading}
        profileData={profileData}
        onChangeFirstname={handleFirstnameChange}
        onChangeLastname={handleLastnameChange}
        onChangeAge={handleAgeChange}
        onChangeCity={handleCityChange}
        onChangeUsername={handleUsernameChange}
        onChangeAvatar={handleAvatarChange}
        onChangeCurrency={handleCurrencyChange}
        onChangeCountry={handleCountryChange}
      />
    </div>
  );
};

export default ProfilePage;
