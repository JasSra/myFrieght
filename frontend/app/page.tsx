'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { lanes, estimateQuote, clients, testimonials } from '../lib/mock';
import { useState } from 'react';

export default function HomePage() {
  const [laneId, setLaneId] = useState(lanes[0].id);
  const lane = lanes.find(l => l.id === laneId)!;
  const est = estimateQuote(lane.km);
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1600&auto=format&fit=crop" 
          alt="Australian prime mover trucks driving in Brisbane"
          width={1600}
          height={900}
          className="w-full h-[56vh] md:h-[64vh] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <Badge>Brisbane • QLD • Australia</Badge>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-white">B2B Prime Mover Capacity</h1>
            <p className="mt-3 text-base md:text-lg text-gray-200 max-w-2xl">On‑time, compliant prime mover capacity for enterprise freight teams in South East Queensland — with daily lanes to NSW and VIC.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" variant="primary" size="lg">Talk to sales</Button>
              <Button href="/pricing" variant="secondary" size="lg">See pricing</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <p className="text-xs uppercase tracking-widest text-gray-500">Trusted by supply chain teams in QLD/NSW/VIC</p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-gray-500">
          {clients.map(c => (<div key={c} className="text-sm">{c}</div>))}
        </div>
      </section>

      {/* Value props */}
      <section className="max-w-7xl mx-auto px-6 pb-4 grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur">
          <h3 className="text-lg font-semibold">Enterprise‑ready</h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">NHVR compliant, insured, GPS‑tracked. PO or card billing.</p>
        </div>
        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur">
          <h3 className="text-lg font-semibold">Local & on‑time</h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">Brisbane‑based drivers, SEQ coverage, dispatch within hours.</p>
        </div>
        <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur">
          <h3 className="text-lg font-semibold">Transparent pricing</h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">Simple hourly or fixed‑route rates. No surprises.</p>
        </div>
      </section>

      {/* Interactive quote */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold">Instant estimate</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Select a common SEQ lane to get a budgetary estimate.</p>
          <div className="mt-4 grid gap-3">
            <label className="text-sm">
              Lane
              <select aria-label="Lane" value={laneId} onChange={e => setLaneId(e.target.value)} className="mt-1 rounded border px-3 py-2 bg-white dark:bg-gray-900 w-full">
                {lanes.map(l => (
                  <option key={l.id} value={l.id}>{l.from} → {l.to} · {l.km}km · ~{l.typicalMins} mins</option>
                ))}
              </select>
            </label>
            <div className="text-sm text-gray-700 dark:text-gray-200">Estimated from <span className="font-semibold">${est}</span> (ex GST)</div>
            <div className="flex gap-3">
              <Button href="/contact">Request firm quote</Button>
              <Button href="/pricing" variant="secondary">Pricing</Button>
            </div>
          </div>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold">What you get</h3>
          <ul className="mt-3 text-sm list-disc pl-5 text-gray-600 dark:text-gray-300">
            <li>Compliant driver + prime mover</li>
            <li>Live ETAs and POD</li>
            <li>Clear comms and no surprises</li>
          </ul>
        </Card>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">How it works</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold">1. Request</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">Share pickup, drop, window, and load details. We confirm availability within minutes.</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold">2. Dispatch</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">We assign a compliant driver and prime mover. Live ETAs and status updates.</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold">3. Complete</h3>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">POD captured, invoice issued. Data and reporting available on request.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <Card key={i}>
            <p className="italic">“{t.quote}”</p>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">— {t.author}</div>
          </Card>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-8 md:p-10 bg-gradient-to-br from-brand/10 to-transparent">
          <div className="md:flex items-center justify-between gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">Need capacity in Brisbane this week?</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">We respond in minutes during business hours. Same‑day dispatch available.</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Link href="/contact" className="inline-flex items-center rounded-md bg-brand px-5 py-3 text-white font-medium shadow hover:bg-brand-dark">Talk to sales</Link>
              <Link href="/pricing" className="inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 px-5 py-3 font-medium">View pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
