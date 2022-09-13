export const localStorageService = <T>(key: string) => {
  const get = (): T | null => {
    const val = window.localStorage.getItem(key);

    return val ? JSON.parse(val) as T : null
  }

  const set = (val: T) => {
    window.localStorage.setItem(key, JSON.stringify(val));
  }

  const clear = () => {
    window.localStorage.removeItem(key);
  }

  return { get, set, clear, value: get() };
}
