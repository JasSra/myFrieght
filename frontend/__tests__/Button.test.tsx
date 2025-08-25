import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

test('renders button text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
});
