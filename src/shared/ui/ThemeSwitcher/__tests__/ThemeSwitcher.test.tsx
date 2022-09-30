import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';

import { EThemes, useTheme } from 'shared/config/theme';
import { ThemeSwitcher } from '../ThemeSwitcher';

jest.mock('shared/config/theme');

describe('ThemeSwitcher', () => {
  const useThemeMock = { theme: EThemes.Light, toggleTheme: jest.fn() };

  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue(useThemeMock);
  });

  afterEach(jest.clearAllMocks);

  it('should ', async () => {
    render(<ThemeSwitcher />);

    const themeSwitcher = screen.getByTestId('theme_switcher');

    fireEvent.click(themeSwitcher);

    await waitFor(() => expect(useThemeMock.toggleTheme).toBeCalled());
  });
});
