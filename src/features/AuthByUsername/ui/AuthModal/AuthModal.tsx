import type { FC } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { ModalWindow } from 'shared/ui/ModalWindow';
import { useCallback } from 'react';
import { authModalActions } from '../../model/slice';
import { AuthForm } from '../AuthForm/AuthForm';
import { selectIsModalOpened } from '../../model/selectors';
import styles from './styles.sass';

interface IAuthModalProps {
  className?: string;
  onModalClose?(): void
}

export const AuthModal: FC<IAuthModalProps> = (props) => {
  const { className, onModalClose } = props;
  const isModalOpened = useSelector(selectIsModalOpened);
  const dispatch = useDispatch();

  const handleModalClose = useCallback(() => {
    dispatch(authModalActions.setModalOpened(false));

    if (onModalClose) {
      onModalClose();
    }
  }, [dispatch, onModalClose]);

  return (
    <ModalWindow
      className={cn(className, styles.container)}
      open={isModalOpened}
      onClose={handleModalClose}
    >
      <AuthForm />
    </ModalWindow>
  );
};
