import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-base font-semibold">Freight Fleet</h3>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 max-w-xs">
            Brisbane-based prime mover capacity on demand. On-time, compliant, and transparent for enterprise freight teams.
          </p>
          <p className="mt-3 text-xs text-gray-500">ABN 00 000 000 000</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
            <li><Link href="/routes" className="hover:underline">Routes</Link></li>
            <li><Link href="/dashboard" className="hover:underline">Back office</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Compliance</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li>NHVR & Chain of Responsibility</li>
            <li>Insured, licensed, GPS-tracked</li>
            <li>Fatigue & safety management</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li>Brisbane HQ — 123 Eagle St, QLD 4000</li>
            <li><a href="tel:+61700000000" className="hover:underline">+61 7 0000 0000</a></li>
            <li><a href="mailto:sales@freightfleet.com.au" className="hover:underline">sales@freightfleet.com.au</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} Freight Fleet Pty Ltd. All rights reserved.
      </div>
    </footer>
  );
}
