import { IAppState, IThunkExtra } from 'app/providers/store';
import { AsyncThunk } from '@reduxjs/toolkit/src/createAsyncThunk';
import { AxiosStatic } from 'axios';
import { THttpApi } from 'shared/lib/api/types';

export class TestThunk<Return, Arg, RejectedValue> {
  public dispatch: jest.Mock;

  public getState: () => IAppState;

  private readonly axiosMk: jest.MockedFunctionDeep<AxiosStatic>;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    const mockedAxiosModule = jest.createMockFromModule<typeof import('axios')>('axios');
    const { getHttpApi: getHttpApiMk } = jest.createMockFromModule<typeof import('shared/lib/api')>('shared/lib/api');
    this.axiosMk = jest.mocked(mockedAxiosModule.default);

    (getHttpApiMk as jest.Mock).mockReturnValue(this.axiosMk);
  }

  // eslint-disable-next-line class-methods-use-this
  public mockResponse(method: THttpMethods, response: unknown) {
    this.axiosMk[method].mockResolvedValue(response);
  }

  public get mockedHttpApi(): THttpApi {
    return this.axiosMk;
  }

  public async callThunk(arg: Arg) {
    return this.actionCreator(arg)(this.dispatch, this.getState, { httpApi: this.axiosMk });
  }
}

type ActionCreatorType<Return, Arg, RejectedValue> =
  AsyncThunk<Return, Arg, { rejectValue: RejectedValue, extra: IThunkExtra }>

type THttpMethods =
  | 'get'
  | 'delete'
  | 'head'
  | 'options'
  | 'post'
  | 'put'
  | 'patch'
