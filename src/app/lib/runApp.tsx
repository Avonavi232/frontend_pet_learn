import { createRoot } from 'react-dom/client';
import { preloadState } from 'app/services/preloadState';
import { createReduxStore } from 'app/providers/store';
import App from '../ui/App';
import '../styles/index.global.sass';

export async function runApp() {
  const preloadedState = await preloadState();
  const reduxStore = createReduxStore(preloadedState);

  const root = createRoot(document.querySelector('#root') as HTMLDivElement);
  root.render(<App reduxStore={reduxStore} />);
}
