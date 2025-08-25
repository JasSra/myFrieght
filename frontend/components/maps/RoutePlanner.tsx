'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useGoogleMaps } from './MapsLoader';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

type Preset = { label: string; origin: string; destination: string };

const PRESETS: Preset[] = [
  { label: 'Brisbane CBD → Gold Coast', origin: 'Brisbane QLD', destination: 'Southport QLD' },
  { label: 'Brisbane → Sunshine Coast', origin: 'Brisbane QLD', destination: 'Maroochydore QLD' },
  { label: 'Brisbane → Sydney', origin: 'Brisbane QLD', destination: 'Sydney NSW' },
  { label: 'Brisbane → Melbourne', origin: 'Brisbane QLD', destination: 'Melbourne VIC' },
];

export default function RoutePlanner() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const ready = useGoogleMaps(apiKey);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [origin, setOrigin] = useState('Brisbane QLD');
  const [destination, setDestination] = useState('Southport QLD');
  const [distanceText, setDistanceText] = useState<string>('');
  const [durationText, setDurationText] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Minimal shapes to avoid using any
  type GMap = { /* eslint-disable @typescript-eslint/ban-types */ setCenter?: Function };
  type GDirectionsService = { route: (req: Record<string, unknown>) => Promise<unknown> };
  type GDirectionsRenderer = { setDirections: (res: unknown) => void };

  const map = useRef<GMap | undefined>();
  const directionsService = useMemo<GDirectionsService | undefined>(() => {
    if (!ready) return undefined;
    const g = (window as unknown as { google: { maps: { DirectionsService: new () => GDirectionsService } } }).google;
  return new g.maps.DirectionsService();
  }, [ready]);
  const directionsRenderer = useRef<GDirectionsRenderer | undefined>();

  useEffect(() => {
    if (!ready || !mapRef.current) return;
    if (!map.current) {
  const g = (window as unknown as { google: { maps: { Map: new (el: HTMLElement, opts: object) => GMap; DirectionsRenderer: new (opts: { map: GMap }) => GDirectionsRenderer } } }).google;
      map.current = new g.maps.Map(mapRef.current, {
        center: { lat: -27.4698, lng: 153.0251 }, // Brisbane
        zoom: 9,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });
  directionsRenderer.current = new g.maps.DirectionsRenderer({ map: map.current });
    }
  }, [ready]);

  const calculate = useCallback(async () => {
    setError('');
    if (!ready || !directionsService || !directionsRenderer.current) return;
    try {
  const g = (window as unknown as { google: { maps: { TravelMode: { DRIVING: string } } } }).google;
      const res = await directionsService.route({
        origin,
        destination,
        travelMode: g.maps.TravelMode.DRIVING,
        provideRouteAlternatives: false,
      });
  directionsRenderer.current.setDirections(res);
  type Leg = { distance?: { text?: string }; duration?: { text?: string } };
  type DirectionsResultLike = { routes: Array<{ legs: Leg[] }> };
  const leg = (res as DirectionsResultLike).routes[0]?.legs[0];
      setDistanceText(leg?.distance?.text ?? '');
      setDurationText(leg?.duration?.text ?? '');
    } catch (e: unknown) {
      setError((e as Error)?.message ?? 'Failed to calculate route');
    }
  }, [destination, origin, ready, directionsService]);

  useEffect(() => { if (ready) void calculate(); }, [ready, calculate]);

  if (!apiKey) {
    return (
      <Card className="p-4">
        <p className="text-sm">Google Maps API key missing. Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env.local to enable the route planner.</p>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <input value={origin} onChange={(e) => setOrigin(e.target.value)} placeholder="Origin" className="border rounded px-3 py-2 md:col-span-2" />
        <input value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Destination" className="border rounded px-3 py-2 md:col-span-2" />
        <div className="flex gap-2 col-span-1 md:col-span-4 flex-wrap">
          {PRESETS.map(p => (
            <Button key={p.label} variant="secondary" size="sm" onClick={() => { setOrigin(p.origin); setDestination(p.destination); }}>
              {p.label}
            </Button>
          ))}
          <Button onClick={calculate}>Plan route</Button>
        </div>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div className="h-80 w-full rounded overflow-hidden border" ref={mapRef} />
      {(distanceText || durationText) && (
        <p className="text-sm text-muted-foreground">Distance: {distanceText} • ETA: {durationText}</p>
      )}
    </div>
  );
}
