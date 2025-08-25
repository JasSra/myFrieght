import useSWR from 'swr';
import Link from 'next/link';
import { api } from '../../../lib/fetcher';

export default function InvoicesPage() {
  type Invoice = { id: string | number; number: string; date?: string };
  const { data } = useSWR<Invoice[]>('/api/invoices', api);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Invoices</h1>
      <div className="mt-4 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="grid grid-cols-3 bg-gray-50 dark:bg-gray-900 px-4 py-2 text-xs uppercase tracking-wide text-gray-600 dark:text-gray-300">
          <div>Number</div>
          <div>Date</div>
          <div>Action</div>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {data?.map((inv) => (
            <div key={inv.id} className="grid grid-cols-3 px-4 py-3 text-sm">
              <div>{inv.number}</div>
              <div>{inv.date ?? '—'}</div>
              <div>
                <Link className="text-brand" href={`/dashboard/invoices/${inv.id}`}>View</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
