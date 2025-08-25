'use client';
import useSWR from 'swr';
import { api } from '../../lib/fetcher';
import type { Job, Invoice, Receipt } from '../api/_mockStore';

export default function DashboardIndex() {
  const jobs = useSWR<Job[]>('/api/jobs', api);
  const invoices = useSWR<Invoice[]>('/api/invoices', api);
  const receipts = useSWR<Receipt[]>('/api/receipts', api);
  const refresh = () => { jobs.mutate(); invoices.mutate(); receipts.mutate(); };
  const kpi = [
    { label: 'Open jobs', value: jobs.data?.length ?? 0 },
    { label: 'Invoices', value: invoices.data?.length ?? 0 },
    { label: 'Receipts', value: receipts.data?.length ?? 0 },
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Back office</h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Design‑stage dashboard with interactive mock data.</p>
        </div>
        <button onClick={refresh} className="rounded bg-brand text-white px-3 py-2 text-sm">Refresh</button>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {kpi.map(k => (
          <div key={k.label} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <div className="text-2xl font-bold">{k.value}</div>
            <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">{k.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
