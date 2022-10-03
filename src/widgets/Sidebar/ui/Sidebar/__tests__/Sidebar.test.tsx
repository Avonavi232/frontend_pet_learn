import * as React from 'react';
import { screen } from '@testing-library/react';

import { Sidebar } from 'widgets/Sidebar';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation';

describe('Sidebar', () => {
  it('should ', () => {
    renderWithTranslation(<Sidebar />);

    screen.debug();

    screen.getByAltText('Язык');
  });
});
