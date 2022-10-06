import { createContext, useContext } from 'react';

type TSidebarContext = {
  isOpened: boolean
}

const context = createContext<TSidebarContext>({
  isOpened: false,
});

export const { Provider } = context;
export const useSidebarCtx = () => useContext(context);
