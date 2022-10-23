import { useDispatch } from 'react-redux';
import { TDispatch } from 'app/providers/store';

export const useAppDispatch = (): TDispatch => useDispatch<TDispatch>();
