import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/index.global.sass';

const root = createRoot(document.querySelector('#root') as HTMLDivElement);
root.render(<App />)
