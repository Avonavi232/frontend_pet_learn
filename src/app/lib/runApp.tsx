import { createRoot } from 'react-dom/client';
import { App } from '../ui/App';
import '../styles/index.global.sass';

export function runApp() {
  const root = createRoot(document.querySelector('#root') as HTMLDivElement);
  root.render(<App />);
}
