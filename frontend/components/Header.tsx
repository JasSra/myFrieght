'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        className={`px-1 py-0.5 hover:text-brand transition-colors ${active ? 'text-brand font-semibold' : ''}`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-gray-950/70 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="text-lg md:text-xl font-bold tracking-tight">Freight Fleet</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <NavLink href="/routes" label="Routes" />
          <NavLink href="/pricing" label="Pricing" />
          <NavLink href="/about" label="About" />
          <NavLink href="/blog" label="Blog" />
          <NavLink href="/contact" label="Contact" />
          <NavLink href="/dashboard" label="Back office" />
        </nav>
        <div className="flex items-center gap-2 md:gap-3">
          <a href="tel:+61700000000" className="hidden sm:inline text-sm text-gray-600 dark:text-gray-300 hover:text-brand">+61 7 0000 0000</a>
          <ThemeToggle />
          <Link href="/contact" className="hidden sm:inline-flex items-center rounded-md bg-brand text-white px-3 py-1.5 text-sm font-medium shadow hover:bg-brand-dark">
            Get a quote
          </Link>
          <Link href="/dashboard" className="inline-flex md:hidden rounded-md bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-3 py-1.5 text-sm font-medium">
            Back office
          </Link>
          <button className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-current"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 px-4 py-3 space-y-2">
          <Link href="/routes" onClick={() => setOpen(false)} className="block">Routes</Link>
          <Link href="/pricing" onClick={() => setOpen(false)} className="block">Pricing</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block">About</Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="block">Blog</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block">Contact</Link>
          <Link href="/dashboard" onClick={() => setOpen(false)} className="block">Back office</Link>
          <Link href="/dashboard" onClick={() => setOpen(false)} className="block">Back office</Link>
        </div>
      )}
    </header>
  );
}
