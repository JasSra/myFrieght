import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { invoiceId } = await req.json();
  const { MockDB } = await import('../_mockStore');
  const rec = MockDB.addPayment(invoiceId);
  if (!rec) return Response.json({ error: 'Invoice not found' }, { status: 404 });
  return Response.json(rec, { status: 201 });
}
