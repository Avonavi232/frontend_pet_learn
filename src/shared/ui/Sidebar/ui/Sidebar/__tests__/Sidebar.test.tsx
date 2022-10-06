import { Sidebar } from 'widgets/Sidebar';
import { render, screen } from 'shared/lib/rtl';

describe('Sidebar', () => {
  it('Рендерит основные элементы', () => {
    render(<Sidebar />);

    screen.getByText('Главная');
    screen.getByText('О сайте');
    screen.getByText('selected_lang');
  });
});
