'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const res = await fetch('/api/contact', { method: 'POST', body: fd });
    setStatus(res.ok ? 'Thanks, we will be in touch.' : 'Something went wrong.');
  }
  return (
    <div className="max-w-xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">Contact sales</h1>
      <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">We’ll respond within minutes during business hours. Brisbane time (AEST).</p>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm">Company</span>
          <input name="company" required className="mt-1 w-full rounded border px-3 py-2 bg-white dark:bg-gray-900" />
        </label>
        <label className="block">
          <span className="text-sm">Email</span>
          <input type="email" name="email" required className="mt-1 w-full rounded border px-3 py-2 bg-white dark:bg-gray-900" />
        </label>
        <label className="block">
          <span className="text-sm">Phone</span>
          <input type="tel" name="phone" className="mt-1 w-full rounded border px-3 py-2 bg-white dark:bg-gray-900" />
        </label>
        <label className="block">
          <span className="text-sm">Message</span>
          <textarea name="message" rows={4} className="mt-1 w-full rounded border px-3 py-2 bg-white dark:bg-gray-900" />
        </label>
        <button className="rounded-md bg-brand px-4 py-2 text-white">Send</button>
      </form>
      {status && <p className="mt-4 text-sm">{status}</p>}
    </div>
  );
}
