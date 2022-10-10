/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import type { FC, MouseEventHandler, ReactNode } from 'react';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';

import { useCallback, useEffect, useRef } from 'react';
import { Portal } from 'shared/ui/Portal';
import styles from './styles.sass';
import transition from './transition.sass';

interface IModalWindowProps {
  className?: string;
  children?: ReactNode
  open: boolean;
  onClose?(): void
}

export const ModalWindow: FC<IModalWindowProps> = (props) => {
  const {
    children, className, open, onClose,
  } = props;

  const contentRef = useRef(null);

  const onContentClick: MouseEventHandler = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && onClose) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (open) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown, open]);

  return (
    <Portal>
      <CSSTransition
        nodeRef={contentRef}
        in={open}
        timeout={200}
        classNames={{ ...transition }}
        unmountOnExit
      >
        <div
          ref={contentRef}
          className={cn(className, styles.container, { [styles.opened]: open })}
        >
          <div className={styles.overlay} onClick={onClose}>
            <div className={styles.content} onClick={onContentClick}>
              {children}
            </div>
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
};
