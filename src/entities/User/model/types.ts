export interface IUser {
  id: string;
  username: string;
  avatar: string | null;
}

export interface IUserState {
  user: IUser | null
}
