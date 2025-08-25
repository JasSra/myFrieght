'use client';
import useSWR from 'swr';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '../../../lib/fetcher';

const JobSchema = z.object({ reference: z.string().min(2), pickup: z.string().min(2), dropoff: z.string().min(2) });

type JobForm = z.infer<typeof JobSchema>;

export default function JobsPage() {
  const { data, mutate } = useSWR('/api/jobs', api);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<JobForm>({ resolver: zodResolver(JobSchema) });

  async function onSubmit(values: JobForm) {
  await api('/api/jobs', { method: 'POST', body: JSON.stringify(values) });
    reset();
  mutate();
  }
  return (
    <div>
      <h1 className="text-2xl font-semibold">Submit a Job</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 grid md:grid-cols-3 gap-3">
        <input placeholder="Reference" {...register('reference')} className="rounded border px-3 py-2 bg-white dark:bg-gray-900" />
        <input placeholder="Pickup" {...register('pickup')} className="rounded border px-3 py-2 bg-white dark:bg-gray-900" />
        <input placeholder="Dropoff" {...register('dropoff')} className="rounded border px-3 py-2 bg-white dark:bg-gray-900" />
        <button className="rounded bg-brand text-white px-4 py-2 md:col-span-3">Submit</button>
      </form>
      {Object.values(errors).length > 0 && <p className="text-sm text-red-600 mt-2">Please complete all fields.</p>}

      <h2 className="mt-8 font-semibold">Recent jobs</h2>
      <pre className="mt-2 text-xs bg-gray-50 dark:bg-gray-900 p-3 rounded overflow-auto">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
