import type { Meta, StoryObj } from '@storybook/react';
import JobCard from '../components/JobCard';

const meta: Meta<typeof JobCard> = {
  title: 'Components/JobCard',
  component: JobCard,
};
export default meta;

type Story = StoryObj<typeof JobCard>;

export const Example: Story = { args: { job: { id: 'job_1', reference: 'REF-1001', pickup: 'Botany', dropoff: 'Alexandria', status: 'Scheduled' } } };
