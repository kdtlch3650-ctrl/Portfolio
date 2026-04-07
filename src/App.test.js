import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio brand', () => {
  window.scrollTo = jest.fn();
  render(<App />);
  const brandElement = screen.getByText(/LC's/i);
  expect(brandElement).toBeInTheDocument();
});
