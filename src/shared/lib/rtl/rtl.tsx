import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import * as React from 'react';
import { queries, Queries } from '@testing-library/dom';
import { MemoryRouter } from 'react-router-dom';
import { createReduxStore, IAppState, TPreloadedState } from 'app/providers/store';
import { DeepPartial } from 'redux';
import { Provider } from 'react-redux';
import { getHttpApi } from 'shared/lib/api';
import axios from 'axios';
import i18n from '../../config/i18n/i18n.testEnv';

export * from '@testing-library/react';

jest.mock('axios');
jest.mock('shared/lib/api');

interface TOptions<Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container,
  > extends RenderOptions<Q, Container, BaseElement> {
  route?: string
  preloadedState?: DeepPartial<IAppState>
}

export function render<Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container,
  >(
  ui: React.ReactElement,
  options?: TOptions<Q, Container, BaseElement>,
) {
  const { route = '/', preloadedState, ...rtlOptions } = options || {};
  const store = createReduxStore(preloadedState as TPreloadedState);
  (getHttpApi as jest.Mock).mockReturnValue(axios);

  return rtlRender(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18n}>
          {ui}
        </I18nextProvider>
      </MemoryRouter>
    </Provider>,
    rtlOptions,
  );
}
