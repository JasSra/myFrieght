"use client";
import useSWR from 'swr';
import { api } from '../../../lib/fetcher';

type Invoice = { id: string; number: string; amount: number; currency: string };

export default function PaymentsPage() {
  const { data } = useSWR<Invoice[]>('/api/invoices', api);
  async function pay(id: string) {
    await api('/api/payments', { method: 'POST', body: JSON.stringify({ invoiceId: id }) });
    alert('Payment authorized (mock).');
  }
  return (
    <div>
      <h1 className="text-2xl font-semibold">Payments</h1>
      <ul className="mt-4 space-y-2 text-sm">
  {data?.map((inv: Invoice) => (
          <li key={inv.id} className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-2">
            <span>{inv.number} — ${inv.amount} {inv.currency}</span>
            <button onClick={() => pay(inv.id)} className="rounded bg-brand text-white px-3 py-1">Pay</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
