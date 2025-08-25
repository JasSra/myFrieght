'use client';
import posthog from 'posthog-js';
import React, { useEffect } from 'react';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!posthog.__loaded) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', { api_host: 'https://app.posthog.com' });
    }
    posthog.capture('$pageview');
  }, []);
  return <>{children}</>;
}
