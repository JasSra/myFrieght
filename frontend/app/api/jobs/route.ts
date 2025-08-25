import { NextRequest } from 'next/server';
import { MockDB } from '../_mockStore';

export async function GET() { return Response.json(MockDB.getJobs()); }
export async function POST(req: NextRequest) {
  const body = await req.json();
  const rec = MockDB.addJob({ reference: body.reference, pickup: body.pickup, dropoff: body.dropoff });
  return Response.json(rec, { status: 201 });
}
