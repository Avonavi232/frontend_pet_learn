export { AuthModalAsync } from './ui/AuthModal/AuthModal.async';
export type { IAuthFormState } from './model/types';

export const getAuthModalActions = () => import('./model/slice');
