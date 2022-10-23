import { createRoot } from 'react-dom/client';
import { preloadState } from 'app/services/preloadState';
import { createReduxStore } from 'app/providers/store';
import { initHttpApi } from 'shared/lib/api';
import { userLsService } from 'entities/User/model/lsService';
import App from '../ui/App';
import '../styles/index.global.sass';

export async function runApp() {
  const userAuthToken = userLsService.get()?.id;
  initHttpApi({ authorization: userAuthToken });
  const preloadedState = await preloadState();
  const reduxStore = createReduxStore(preloadedState);

  const root = createRoot(document.querySelector('#root') as HTMLDivElement);
  root.render(<App reduxStore={reduxStore} />);
}
