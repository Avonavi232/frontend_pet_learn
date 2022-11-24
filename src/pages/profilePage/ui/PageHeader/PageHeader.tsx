import type { FC } from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { profileActions, selectIsProfileReadonly, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/useAppDispatch';
import { useCallback } from 'react';
import styles from './styles.sass';

interface IPageHeaderProps {
  className?: string;
}

export const PageHeader: FC<IPageHeaderProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const isProfileReadonly = useSelector(selectIsProfileReadonly);

  const handleSetEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const handleCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const handleSaveProfile = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={cn(className, styles.container)}>
      <Text size="XL">{t('profile_title')}</Text>
      <div className={styles.actions}>
        {
          isProfileReadonly ? (
            <Button onClick={handleSetEdit}>{t('edit_profile_btn')}</Button>
          ) : (
            <>
              <Button onClick={handleCancelEdit}>{t('cancel_profile_btn')}</Button>
              <Button onClick={handleSaveProfile} theme="secondary">{t('save_profile_btn')}</Button>
            </>
          )
        }
      </div>
    </div>
  );
};
