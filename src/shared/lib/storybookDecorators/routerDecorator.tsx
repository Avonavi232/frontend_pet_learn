import { BrowserRouter } from 'react-router-dom';
import { TDecorator } from './types';

export const routerDecorator: TDecorator = (Story) => <BrowserRouter><Story /></BrowserRouter>;
