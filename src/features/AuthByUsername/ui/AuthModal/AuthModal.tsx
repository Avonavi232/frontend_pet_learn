import type { FC } from 'react';
import cn from 'classnames';

import { ModalWindow } from 'shared/ui/ModalWindow';
import { AuthForm } from 'features/AuthByUsername/ui/AuthForm/AuthForm';
import styles from './styles.sass';

interface IAuthModalProps {
  className?: string;
  modalOpened: boolean;
  onModalClose(): void
}

export const AuthModal: FC<IAuthModalProps> = ({ className, modalOpened, onModalClose }) => (
  <ModalWindow
    className={cn(className, styles.container)}
    open={modalOpened}
    onClose={onModalClose}
  >
    <AuthForm />
  </ModalWindow>
);
