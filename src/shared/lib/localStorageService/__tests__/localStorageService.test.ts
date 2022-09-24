import { localStorageService } from '../localStorageService';

describe('test', () => {
  it('should ', () => {
    const { get, set } = localStorageService<string>('temp');
    set('1');

    expect(get()).toBe('1');
  });
});
