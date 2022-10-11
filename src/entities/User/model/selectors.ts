import type { IAppState } from 'app/providers/store';

export const selectCounterValue = (state: IAppState) => state.counter.value;
