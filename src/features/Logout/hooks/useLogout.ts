import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { TDispatch } from 'app/providers/store';
import { logout } from '../services/logout';

export const useLogout = () => {
  const dispatch = useDispatch<TDispatch>();

  return useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
};
