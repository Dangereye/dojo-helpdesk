'use client';

import { useTransition } from 'react';

// Icon
import { TiDelete } from 'react-icons/ti';
import { deleteTicket } from '../actions';

export default function DeleteButton({ id }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className='btn-primary'
      onClick={() => startTransition(() => deleteTicket(id))}
      disabled={isPending}
    >
      <TiDelete />
      {isPending ? 'Deleting...' : 'Delete Ticket'}
    </button>
  );
}
