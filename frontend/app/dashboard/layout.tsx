'use client';
import Link from 'next/link';
import { useAuth } from '../../lib/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { token, login } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const isMock = process.env.NEXT_PUBLIC_MOCK_AUTH !== '0';
  useEffect(() => {
    if (!token) {
      if (isMock) {
        void login();
      } else {
        router.replace('/login');
      }
    }
  }, [token, router, isMock, login]);
  if (!token) return null;
  return (
    <div className="max-w-7xl mx-auto px-6 py-6 grid md:grid-cols-4 gap-6">
      <aside className="md:col-span-1 text-sm">
        <div className="sticky top-24 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
          {[
            { href: '/dashboard/jobs', label: 'Jobs' },
            { href: '/dashboard/invoices', label: 'Invoices' },
            { href: '/dashboard/payments', label: 'Payments' },
            { href: '/dashboard/accounts', label: 'Account' },
            { href: '/dashboard/receipts', label: 'Receipts' },
            { href: '/dashboard/admin', label: 'Admin' },
          ].map(i => (
            <Link key={i.href} href={i.href} className={`block px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 ${pathname === i.href ? 'bg-gray-100 dark:bg-gray-900 font-medium' : ''}`}>
              {i.label}
            </Link>
          ))}
        </div>
      </aside>
      <section className="md:col-span-3">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white/60 dark:bg-gray-900/60">
          {children}
        </div>
      </section>
    </div>
  );
}
