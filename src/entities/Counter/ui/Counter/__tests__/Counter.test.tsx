import { render, screen, fireEvent } from 'shared/lib/rtl';
import { Counter } from 'entities/Counter';

describe('Counter', () => {
  it('рендерит контент счетчика', () => {
    render(<Counter />);

    expect(screen.getByText(/counterValue:/)).toHaveTextContent('counterValue:0');
  });

  it('Увеличивает счетчик', () => {
    render(<Counter />, { preloadedState: { counter: { value: 5 } } });

    fireEvent.click(screen.getByText('Inc'));

    expect(screen.getByText(/counterValue:/)).toHaveTextContent('counterValue:6');
  });

  it('Уменьшаяе счетчик', () => {
    render(<Counter />, { preloadedState: { counter: { value: 10 } } });

    fireEvent.click(screen.getByText('Dec'));

    expect(screen.getByText(/counterValue:/)).toHaveTextContent('counterValue:9');
  });
});
