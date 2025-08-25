'use client';
import { useEffect, useState } from 'react';

type GoogleWindow = typeof window & { google?: { maps?: object } };

export function useGoogleMaps(apiKey?: string) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const gwin = window as GoogleWindow;
  if (gwin.google?.maps) { setReady(true); return; }
    if (!apiKey) return;
    const s = document.createElement('script');
    s.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    s.async = true; s.defer = true;
    s.onload = () => setReady(true);
    document.head.appendChild(s);
    return () => { document.head.removeChild(s); };
  }, [apiKey]);
  return ready;
}
