import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../config/i18n/i18n.testEnv';

export const renderWithTranslation = (component: ReactElement) => render(
  <I18nextProvider i18n={i18n}>
    {component}
  </I18nextProvider>,
);
