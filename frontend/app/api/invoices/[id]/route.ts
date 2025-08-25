import { NextRequest } from 'next/server';
import { MockDB } from '../../_mockStore';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const rec = MockDB.getInvoice(params.id);
  if (!rec) return Response.json({ error: 'Not found' }, { status: 404 });
  return Response.json(rec);
}
