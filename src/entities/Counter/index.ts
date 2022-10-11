export type { ICounterState } from './model/types';
export { counterActions, counterReducer } from './model/slice';
export { selectCounterValue } from './model/selectors';
export { Counter } from './ui/Counter';
