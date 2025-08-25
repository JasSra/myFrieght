import { render, screen } from '@testing-library/react';
import JobCard from '../components/JobCard';

test('shows job reference', () => {
  render(<JobCard job={{ id: '1', reference: 'REF-1', pickup: 'A', dropoff: 'B', status: 'Scheduled' }} />);
  expect(screen.getByText(/REF-1/)).toBeInTheDocument();
});
