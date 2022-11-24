import type { FC } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text';
import { Spinner } from 'shared/ui/Spinner';
import { Avatar } from 'shared/ui/Avatar';
import { CurrencySelector, ECurrency } from 'entities/Currency';
import { CountrySelector, ECountry } from 'entities/Country';
import { EditableField } from '../EditableField';
import { IProfile } from '../../model/types';
import styles from './styles.sass';

interface IProfileCardProps {
  className?: string;
  profileData: IProfile | null
  isLoading: boolean;
  isReadonly: boolean;
  error: string | null;
  onChangeLastname(value: string): void;
  onChangeFirstname(value: string): void;
  onChangeAge(value: string): void;
  onChangeCity(value: string): void;
  onChangeUsername(value: string): void;
  onChangeAvatar(value: string): void;
  onChangeCurrency(value: ECurrency): void;
  onChangeCountry(value: ECountry): void;
}

export const ProfileCard: FC<IProfileCardProps> = (props) => {
  const {
    className,
    profileData,
    error,
    isLoading,
    isReadonly,
    onChangeLastname,
    onChangeFirstname,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={cn(className, styles.loader)}>
        <Spinner size={32} />
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn(className, styles.error)}>
        <Text size="XL" align="center">{error}</Text>
      </div>
    );
  }

  if (!profileData) {
    return null;
  }

  return (
    <div className={cn(className, styles.container)}>
      <div className={styles.data}>
        {profileData.avatar && (
          <div className={styles.avatar_wrapper}>
            <Avatar src={profileData.avatar} size="XL" />
          </div>
        )}
        <EditableField
          name="firstname"
          label={t('firstname')}
          value={profileData.firstname}
          isReadonly={isReadonly}
          onChange={onChangeFirstname}
        />
        <EditableField
          name="lastname"
          label={t('lastname')}
          value={profileData.lastname}
          isReadonly={isReadonly}
          onChange={onChangeLastname}
        />
        <EditableField
          name="age"
          label={t('age')}
          value={profileData.age}
          isReadonly={isReadonly}
          onChange={onChangeAge}
        />
        <EditableField
          name="city"
          label={t('city')}
          value={profileData.city}
          isReadonly={isReadonly}
          onChange={onChangeCity}
        />
        <EditableField
          name="username"
          label={t('username')}
          value={profileData.username}
          isReadonly={isReadonly}
          onChange={onChangeUsername}
        />
        <EditableField
          name="avatar"
          label={t('avatar')}
          value={profileData.avatar}
          isReadonly={isReadonly}
          onChange={onChangeAvatar}
        />
        <CurrencySelector
          isReadonly={isReadonly}
          onChange={onChangeCurrency}
          value={profileData.currency}
        />
        <CountrySelector
          isReadonly={isReadonly}
          value={profileData.country}
          onChange={onChangeCountry}
        />
      </div>
    </div>
  );
};
