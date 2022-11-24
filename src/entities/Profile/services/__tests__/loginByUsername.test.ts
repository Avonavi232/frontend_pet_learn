import { TestThunk } from 'shared/lib/tests/testThunk';
import { fetchUserProfile } from '../fetchUserProfile';

describe('loginByUsername', () => {
  it('Обращается к api получения юзера, возвращает результат, сохраняет в стор и в localStorage', async () => {
    const test = new TestThunk(fetchUserProfile);
    test.mockResponse('get', { data: { profileData: 'profileData' } });

    const result = await test.callThunk();

    expect(test.mockedHttpApi.get).toBeCalledWith('/profile');
    expect(test.dispatch).toBeCalledWith({
      meta: expect.any(Object),
      payload: {
        profileData: 'profileData',
      },
      type: 'profile/fetchProfileData/fulfilled',
    });

    expect(result.payload).toEqual({ profileData: 'profileData' });
  });
});
