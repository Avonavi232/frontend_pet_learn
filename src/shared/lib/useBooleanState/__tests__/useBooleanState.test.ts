import { renderHook, act } from '@testing-library/react-hooks';

import { useBooleanState } from '../useBooleanState';

describe('useBooleanState', () => {
  it('Хелпер возвращает состояние и 2 функции для установки true и false', () => {
    const { result } = renderHook(useBooleanState);
    const [state, setTrue, setFalse] = result.current;

    expect(state).toBeFalsy();
    expect(setTrue).toEqual(expect.any(Function));
    expect(setFalse).toEqual(expect.any(Function));
  });

  it('Если в хук передать значение начального состояния, оно будет установлено', () => {
    const { result } = renderHook(() => useBooleanState(false));
    expect(result.current[0]).toBeFalsy();
  });

  it('При вызове функции установки true - стейт обновляется на true', () => {
    const { result } = renderHook(useBooleanState);
    expect(result.current[0]).toBeFalsy();

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBeTruthy();
  });

  it('При вызове функции установки false - стейт обновляется на false', () => {
    const { result } = renderHook(() => useBooleanState(true));
    expect(result.current[0]).toBeTruthy();

    act(() => {
      result.current[2]();
    });

    expect(result.current[0]).toBeFalsy();
  });

  it('Функции установки true и false не меняются (т.к обернуты в useCallback)', () => {
    const { result } = renderHook(useBooleanState);
    const prevSetTrue = result.current[1];
    const prevSetFalse = result.current[2];

    act(() => {
      result.current[1]();
    });

    expect(result.current[1]).toBe(prevSetTrue);
    expect(result.current[2]).toBe(prevSetFalse);
  });
});
