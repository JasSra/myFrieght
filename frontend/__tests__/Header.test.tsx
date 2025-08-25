import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders navigation links', () => {
  render(<Header />);
  expect(screen.getByRole('link', { name: /pricing/i })).toBeInTheDocument();
});
