import './globals.css';
import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Script from 'next/script';
import { AuthProvider } from '../lib/auth';
import { AnalyticsProvider } from '../lib/analytics';

export const metadata: Metadata = {
  title: {
    default: 'Freight Fleet — Prime Mover Capacity, Brisbane AU',
    template: '%s — Freight Fleet',
  },
  description:
    'Brisbane-based prime mover capacity on demand. Competitive rates, on-time performance, and enterprise-grade compliance across QLD/NSW/VIC metros.',
  metadataBase: new URL('http://localhost:8080'),
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
  <body className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <AnalyticsProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </AnalyticsProvider>
          </AuthProvider>
        </ThemeProvider>
        <Script type="module" id="shoelace-init">
          {`
            import { setBasePath } from 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.1/cdn/utilities/base-path.js';
            setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.1/cdn/');
          `}
        </Script>
      </body>
    </html>
  );
}
