import { useCallback, useState } from 'react';

export type TSetState = () => void;

/**
 * Хранит boolean стейт
 * С помощью useCallback создаются функции для установки true и false в стейт
 * */
export const useBooleanState = (initialState?: boolean): [ boolean, TSetState, TSetState ] => {
  const [state, setState] = useState<boolean>(
    () => (initialState !== undefined ? initialState : false),
  );

  const handleSetTrue = useCallback(() => setState(true), []);
  const handleSetFalse = useCallback(() => setState(false), []);

  return [state, handleSetTrue, handleSetFalse];
};
