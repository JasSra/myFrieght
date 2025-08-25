"use client";
import useSWR from 'swr';
import { api } from '../../../../lib/fetcher';
import QRCode from 'qrcode.react';
import type { Invoice } from '../../../api/_mockStore';
import Image from 'next/image';

export default function InvoiceDetail({ params }: { params: { id: string } }) {
  const { data } = useSWR<Invoice>(`/api/invoices/${params.id}`, api);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Invoice {data?.number}</h1>
      <div className="mt-4 flex items-center gap-6">
        <div className="border rounded p-2 bg-white dark:bg-gray-900">
          <Image alt="QR" src={`/api/qr/${encodeURIComponent(data?.number || '')}`} width={128} height={128} />
        </div>
        <div className="border rounded p-2 bg-white dark:bg-gray-900">
          <QRCode value={data?.number || ''} size={128} />
        </div>
      </div>
      <pre className="mt-4 text-xs bg-gray-50 dark:bg-gray-900 p-3 rounded overflow-auto">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
