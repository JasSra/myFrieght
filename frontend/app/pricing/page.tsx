"use client";
import { useMemo, useState } from 'react';
import { lanes, estimateQuote } from '../../lib/mock';

export default function PricingPage() {
  const [mode, setMode] = useState<'hourly' | 'fixed'>('hourly');
  const [hours, setHours] = useState(4);
  const [laneId, setLaneId] = useState(lanes[0].id);
  const estFixed = useMemo(() => estimateQuote(lanes.find(l => l.id === laneId)!.km), [laneId]);
  const hourlyRate = 250;
  const estHourly = Math.round(Math.max(4, hours) * hourlyRate);
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300">Transparent rates for SEQ and inter‑metro moves. Request a quote for firm pricing and availability.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="border rounded-xl p-6 bg-white/60 dark:bg-gray-900/60">
          <h3 className="font-semibold">Per hour</h3>
          <p className="text-3xl mt-2">$250<span className="text-base">/hr</span></p>
          <ul className="text-sm mt-3 list-disc pl-5">
            <li>4‑hour minimum</li>
            <li>Driver + prime mover</li>
            <li>Standby & delays billed hourly</li>
          </ul>
        </div>
        <div className="border-2 border-brand rounded-xl p-6 bg-brand/5">
          <h3 className="font-semibold">Fixed route</h3>
          <p className="text-3xl mt-2">From $450</p>
          <ul className="text-sm mt-3 list-disc pl-5">
            <li>Common SEQ lanes</li>
            <li>Live ETA & POD included</li>
            <li>No surprise charges</li>
          </ul>
        </div>
        <div className="border rounded-xl p-6 bg-white/60 dark:bg-gray-900/60">
          <h3 className="font-semibold">Contract</h3>
          <p className="text-3xl mt-2">Custom</p>
          <ul className="text-sm mt-3 list-disc pl-5">
            <li>Dedicated allocation</li>
            <li>Volume discounts</li>
            <li>SLAs & reporting</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="font-semibold">What’s included</h3>
          <ul className="mt-3 text-sm space-y-1 text-gray-600 dark:text-gray-300">
            <li>Compliant driver and prime mover</li>
            <li>Standard insurance and safety gear</li>
            <li>ETA tracking and POD</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
          <h3 className="font-semibold">Extras</h3>
          <ul className="mt-3 text-sm space-y-1 text-gray-600 dark:text-gray-300">
            <li>Tolls, waiting time, permits</li>
            <li>Escort vehicles, inductions</li>
            <li>After‑hours surcharges as applicable</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <h3 className="font-semibold">Quick calculator</h3>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
          <label className="flex items-center gap-2">
            <input type="radio" name="mode" value="hourly" checked={mode==='hourly'} onChange={() => setMode('hourly')} />
            Hourly
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="mode" value="fixed" checked={mode==='fixed'} onChange={() => setMode('fixed')} />
            Fixed route
          </label>
        </div>
        {mode === 'hourly' ? (
          <div className="mt-4 grid sm:grid-cols-3 gap-3">
            <label className="text-sm">
              Hours
              <input type="number" min={4} value={hours} onChange={e => setHours(parseInt(e.target.value || '4', 10))} className="mt-1 w-full rounded border px-3 py-2 bg-white dark:bg-gray-900" />
            </label>
            <div className="sm:col-span-2 flex items-end">Estimated: <span className="ml-2 font-semibold">${estHourly}</span> (ex GST) at ${hourlyRate}/hr</div>
          </div>
        ) : (
          <div className="mt-4 grid sm:grid-cols-3 gap-3">
            <label className="text-sm">
              Lane
              <select aria-label="Lane" value={laneId} onChange={e => setLaneId(e.target.value)} className="mt-1 w-full rounded border px-3 py-2 bg-white dark:bg-gray-900">
                {lanes.map(l => (<option key={l.id} value={l.id}>{l.from} → {l.to} · {l.km}km</option>))}
              </select>
            </label>
            <div className="sm:col-span-2 flex items-end">Estimated: <span className="ml-2 font-semibold">${estFixed}</span> (ex GST)</div>
          </div>
        )}
        <p className="mt-3 text-xs text-gray-500">Estimates are budgetary. We confirm firm pricing and windows on booking.</p>
      </div>
    </div>
  );
}
