import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { Sidebar } from 'widgets/Sidebar';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation';

describe('Sidebar', () => {
  it('should ', () => {
    renderWithTranslation(<div>hell oworld</div>);

    screen.getByAltText('Язык');
  });
});
