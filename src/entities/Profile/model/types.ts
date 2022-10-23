import { ECountry, ECurrency } from 'shared/const/common';

export interface IProfile {
  firstname: string;
  lastname: string;
  age: number;
  currency: ECurrency;
  country: ECountry;
  city: string;
  username: string;
  avatar: string;
}

export interface IProfileState {
  data: IProfile | null;
  isLoading?: boolean;
  error: string | null;
  readonly: boolean;
}
