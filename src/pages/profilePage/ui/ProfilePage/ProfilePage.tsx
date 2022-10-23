import type { FC } from 'react';
import cn from 'classnames';

import { useAsyncReducer, TReducersMap } from 'shared/lib/useAsyncReducer';
import { profileReducer } from 'entities/Profile';
import styles from './styles.sass';

interface IProfilePageProps {
  className?: string;
}

const asyncReducers: TReducersMap = { profile: profileReducer };

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
  useAsyncReducer(asyncReducers);

  return (
    <div className={cn(className, styles.container)}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <h1>Hello world</h1>
    </div>
  );
};

export default ProfilePage;
