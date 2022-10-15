export interface IAuthFormState {
  username: string;
  password: string;
  isLoading?: boolean;
  error?: string;
}

export interface IAuthFormModalState extends IAuthFormState {
  isModalOpened: boolean
}
