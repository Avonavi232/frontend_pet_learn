import type { FC } from 'react';
import { useCallback } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { ModalWindow } from 'shared/ui/ModalWindow';
import { useAsyncReducer } from 'shared/lib/useAsyncReducer';
import { authModalActions, authModalReducer } from '../../model/slice';
import { AuthForm } from '../AuthForm/AuthForm';
import { selectIsModalOpened } from '../../model/selectors';
import styles from './styles.sass';

interface IAuthModalProps {
  className?: string;
  onModalClose?(): void
}

const AuthModal: FC<IAuthModalProps> = (props) => {
  const { className, onModalClose } = props;
  const isModalOpened = useSelector(selectIsModalOpened);
  const dispatch = useDispatch();
  useAsyncReducer({ login: authModalReducer });

  const handleModalClose = useCallback(() => {
    dispatch(authModalActions.setModalOpened(false));

    if (onModalClose) {
      onModalClose();
    }
  }, [dispatch, onModalClose]);

  return (
    <ModalWindow
      className={cn(className, styles.container)}
      open={Boolean(isModalOpened)}
      onClose={handleModalClose}
    >
      <AuthForm />
    </ModalWindow>
  );
};

export default AuthModal;
