export type Lane = { id: string; from: string; to: string; km: number; typicalMins: number };
export const lanes: Lane[] = [
  { id: 'pob-rocklea', from: 'Port of Brisbane', to: 'Rocklea', km: 28, typicalMins: 45 },
  { id: 'pob-acacia', from: 'Port of Brisbane', to: 'Acacia Ridge', km: 36, typicalMins: 55 },
  { id: 'yatala-eagle', from: 'Yatala', to: 'Eagle Farm', km: 54, typicalMins: 60 },
];

export function estimateQuote(km: number, hourlyRate = 250) {
  const hours = Math.max(4, km / 40); // min 4h, ~40km/h metro avg incl. waits
  return Math.round(hours * hourlyRate);
}

export const clients = ['Retail DCs', '3PLs', 'Manufacturing', 'Construction', 'Ports & Logistics', 'Food & Bev'];

export const testimonials = [
  { author: 'Ops Manager, Retail DC', quote: 'Consistently on time with clear comms. Exactly what our team needs.' },
  { author: 'Transport Lead, 3PL', quote: 'Easy to book and reliable. Great for ad‑hoc spikes.' },
];

export type BlogPost = { slug: string; title: string; excerpt: string; body: string };
export const blogPosts: BlogPost[] = [
  { slug: 'brisbane-prime-mover-routes', title: 'Key Prime Mover Routes in Brisbane', excerpt: 'SEQ lanes and planning tips.', body: 'A short overview of common SEQ lanes and considerations for planning ad‑hoc moves.' },
  { slug: 'cor-compliance-seq', title: 'Chain of Responsibility in SEQ', excerpt: 'How we stay compliant.', body: 'We follow NHVR and CoR guidelines, with fatigue, inductions, and reporting to enterprise standards.' },
  { slug: 'ad-hoc-freight-playbook', title: 'Ad‑Hoc Freight Playbook', excerpt: 'How to book and dispatch efficiently.', body: 'From request to POD, here is how to make ad‑hoc moves smooth and predictable.' },
];
