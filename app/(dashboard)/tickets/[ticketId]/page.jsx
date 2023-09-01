import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const { ticketId } = params;
  const supabase = createServerComponentClient({ cookies });
  const { data: ticket } = await supabase
    .from('tickets')
    .select()
    .eq('id', ticketId)
    .single();

  return {
    title: `Dojo Helpdesk | ${ticket?.title || 'Ticket not found'}`,
  };
}

async function getTicket(ticketId) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase
    .from('tickets')
    .select()
    .eq('id', ticketId)
    .single();

  if (!data) {
    notFound();
  }

  return data;
}

export default async function TicketDetails({ params }) {
  const { ticketId } = params;
  const ticket = await getTicket(ticketId);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className='card'>
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
