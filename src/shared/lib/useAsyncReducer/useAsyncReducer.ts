import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useReducerManager } from 'shared/lib/useReducerManager';
import { TReducersMapObj } from 'app/providers/store';
import { Reducer } from 'redux';

type TReducersMap = Partial<Record<keyof TReducersMapObj, Reducer>>
type TReducersMapObjEntry = [keyof TReducersMapObj, Reducer];

export const useAsyncReducer = (reducers: TReducersMap) => {
  const reducerManager = useReducerManager();
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach((entry) => {
      const [reducerName, reducer] = entry as TReducersMapObjEntry;

      reducerManager.add(reducerName, reducer);
    });

    dispatch({ type: '@ADD Async Reducer' });

    return () => {
      Object.keys(reducers).forEach((key) => {
        reducerManager.remove(key as keyof TReducersMapObj);
      });

      dispatch({ type: '@REMOVE Async Reducer' });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
