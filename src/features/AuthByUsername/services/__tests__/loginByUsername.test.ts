import { TestThunk } from 'shared/lib/tests/testThunk';
import axios from 'axios';
import { IUser, userActions } from 'entities/User';
import { userLsService } from 'entities/User/model/lsService';
import { loginByUsername } from '../loginByUsername';

jest.mock('axios');

const axiosMk = jest.mocked(axios);

describe('loginByUsername', () => {
  const userStub: IUser = {
    id: '1',
    username: 'Alex',
    avatar: 'url',
  };

  it('Обращается к api получения юзера, возвращает результат, сохраняет в стор и в localStorage', async () => {
    const test = new TestThunk(loginByUsername);
    axiosMk.post.mockResolvedValue({ data: userStub });

    const result = await test.callThunk({ username: 'Alex', password: '1234' });

    expect(axiosMk.post).toBeCalledWith('http://localhost:8000/login', {
      password: '1234',
      username: 'Alex',
    });
    expect(test.dispatch).toBeCalledWith(userActions.setUserData(userStub));
    expect(result.payload).toBe(userStub);
    expect(userLsService.get()).toEqual(userStub);
  });
});
