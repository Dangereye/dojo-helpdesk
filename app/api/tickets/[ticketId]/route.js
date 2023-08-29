import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req, { params }) {
  const { ticketId } = params;

  const res = await fetch(`http://localhost:4000/tickets/${ticketId}`);
  const ticket = await res.json();

  if (!res.ok) {
    return NextResponse.json(
      { error: 'Cannot find the ticket' },
      { status: 404 }
    );
  }

  return NextResponse.json(ticket, { status: 200 });
}
