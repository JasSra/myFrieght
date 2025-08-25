"use client";
import useSWR from 'swr';
import { api } from '../../../lib/fetcher';

export default function AccountPage() {
  const { data } = useSWR<Record<string, unknown>>('/api/accounts/me', api);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Profile</h1>
      <pre className="mt-4 text-xs bg-gray-50 dark:bg-gray-900 p-3 rounded overflow-auto">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
