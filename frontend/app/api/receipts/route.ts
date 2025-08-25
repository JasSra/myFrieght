export async function GET() {
  const { MockDB } = await import('../_mockStore');
  return Response.json(MockDB.getReceipts());
}
