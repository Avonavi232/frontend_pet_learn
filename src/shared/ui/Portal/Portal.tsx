import type { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useMemo } from 'react';

interface IPortalProps {
  children: ReactNode
  element?: HTMLElement
}

export const Portal: FC<IPortalProps> = (props) => {
  const { children, element } = props;

  const _element = useMemo(
    () => element || document.body as HTMLElement,
    [element],
  );

  return createPortal(children, _element);
};
