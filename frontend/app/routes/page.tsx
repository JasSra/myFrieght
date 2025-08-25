"use client";
import { useState } from 'react';
import { lanes } from '../../lib/mock';

export default function RoutesPage() {
  const [laneId, setLaneId] = useState(lanes[0].id);
  const lane = lanes.find(l => l.id === laneId)!;
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">Service areas & lanes</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">We are Brisbane‑based with rapid coverage across SEQ and frequent work across NSW and VIC corridors. Speak to us about custom lanes.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="font-semibold">Queensland (SEQ)</h3>
          <ul className="mt-3 text-sm space-y-1">
            <li>Port of Brisbane ↔︎ Rocklea ↔︎ Acacia Ridge</li>
            <li>Yatala ↔︎ Eagle Farm ↔︎ Pinkenba</li>
            <li>Wacol ↔︎ Richlands ↔︎ Heathwood</li>
          </ul>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="font-semibold">New South Wales</h3>
          <ul className="mt-3 text-sm space-y-1">
            <li>Port Botany ↔︎ Alexandria ↔︎ Eastern Creek</li>
            <li>Moorebank ↔︎ Erskine Park ↔︎ Wetherill Park</li>
          </ul>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="font-semibold">Victoria</h3>
          <ul className="mt-3 text-sm space-y-1">
            <li>Port of Melbourne ↔︎ Tullamarine ↔︎ Dandenong</li>
            <li>Altona ↔︎ Truganina ↔︎ Laverton</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <h3 className="font-semibold">Special projects</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">We deliver time‑critical and out‑of‑gauge moves with site inductions, escorts, and permits arranged as needed.</p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="font-semibold">Lane ETA calculator</h3>
          <label className="text-sm block mt-2">
            Lane
            <select aria-label="Lane" className="mt-1 w-full rounded border px-3 py-2 bg-white dark:bg-gray-900" value={laneId} onChange={e => setLaneId(e.target.value)}>
              {lanes.map(l => (<option key={l.id} value={l.id}>{l.from} → {l.to} · {l.km}km</option>))}
            </select>
          </label>
          <p className="mt-3 text-sm">Typical travel time: <span className="font-medium">~{lane.typicalMins} mins</span></p>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="font-semibold">Notes</h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">ETAs depend on port/yard congestion and windows. We’ll confirm firm times on booking.</p>
        </div>
      </div>
    </div>
  );
}
