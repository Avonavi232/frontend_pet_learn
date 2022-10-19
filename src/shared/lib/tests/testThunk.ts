import { IAppState } from 'app/providers/store';
import { AsyncThunk } from '@reduxjs/toolkit/src/createAsyncThunk';

type ActionCreatorType<Return, Arg, RejectedValue> = AsyncThunk<Return, Arg, { rejectValue: RejectedValue }>

export class TestThunk<Return, Arg, RejectedValue> {
  public dispatch: jest.Mock;

  public getState: () => IAppState;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  public async callThunk(arg: Arg) {
    return this.actionCreator(arg)(this.dispatch, this.getState, undefined);
  }
}
