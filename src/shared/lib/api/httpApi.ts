import axios from 'axios';
import { THttpApi } from 'shared/lib/api/types';

let httpApi: THttpApi;

export const initHttpApi = (params: IInitParams = {}) => {
  httpApi = axios.create({
    baseURL: __API__,
    headers: {
      authorization: params.authorization,
    },
  });
};

export const getHttpApi = () => {
  if (!httpApi) {
    throw new Error('httpApi is not initialized');
  }

  return httpApi;
};

interface IInitParams {
  authorization?: string
}
