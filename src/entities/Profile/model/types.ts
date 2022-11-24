import { ECurrency } from 'entities/Currency/model/types';
import { ECountry } from 'entities/Country/model/types';

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
  editedData: IProfile | null;
  isLoading?: boolean;
  error: string | null;
  readonly: boolean;
}
