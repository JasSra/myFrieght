// Simple in-memory store for design-stage interactivity
export type Job = { id: string; reference: string; pickup: string; dropoff: string; createdAt: string };
export type Invoice = { id: string; number: string; date: string; amount: number; currency: string };
export type Receipt = { id: string; invoiceId: string; amount: number; date: string };
export type Profile = { id: string; name: string; email: string };

const nowISO = () => new Date().toISOString();
const id = () => Math.random().toString(36).slice(2, 10);

const store = {
  jobs: [
    { id: id(), reference: 'SEQ-001', pickup: 'Brisbane', dropoff: 'Gold Coast', createdAt: nowISO() },
    { id: id(), reference: 'SEQ-002', pickup: 'Brisbane', dropoff: 'Sunshine Coast', createdAt: nowISO() },
  ] as Job[],
  invoices: [
    { id: id(), number: 'INV-1001', date: nowISO(), amount: 640, currency: 'AUD' },
    { id: id(), number: 'INV-1002', date: nowISO(), amount: 980, currency: 'AUD' },
  ] as Invoice[],
  receipts: [] as Receipt[],
  profile: { id: id(), name: 'Dispatch Operator', email: 'ops@example.com' } as Profile,
};

export const MockDB = {
  getJobs: () => store.jobs,
  addJob: (j: Omit<Job, 'id' | 'createdAt'>) => { const rec = { ...j, id: id(), createdAt: nowISO() }; store.jobs.unshift(rec); return rec; },
  getInvoices: () => store.invoices,
  getInvoice: (idOrNum: string) => store.invoices.find(i => i.id === idOrNum || i.number === idOrNum) || null,
  addPayment: (invoiceId: string) => {
    const inv = store.invoices.find(i => i.id === invoiceId);
    if (!inv) return null;
    const r = { id: id(), invoiceId, amount: inv.amount, date: nowISO() };
    store.receipts.unshift(r);
    return r;
  },
  getReceipts: () => store.receipts,
  getProfile: () => store.profile,
};
