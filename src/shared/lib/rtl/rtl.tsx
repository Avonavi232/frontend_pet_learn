import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import * as React from 'react';
import { queries, Queries } from '@testing-library/dom';
import { MemoryRouter } from 'react-router-dom';
import { IAppState, StoreProvider, TPreloadedState } from 'app/providers/store';
import { DeepPartial } from 'redux';
import i18n from '../../config/i18n/i18n.testEnv';

export * from '@testing-library/react';

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

  return rtlRender(
    <StoreProvider preloadedState={preloadedState as TPreloadedState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18n}>
          {ui}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
    rtlOptions,
  );
}
