import { useStore } from 'react-redux';
import { TReduxStore } from 'app/providers/store';

export const useReducerManager = () => {
  const store = useStore() as TReduxStore;

  return store.reducerManager;
};
