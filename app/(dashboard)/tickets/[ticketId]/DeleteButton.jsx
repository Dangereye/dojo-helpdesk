'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Icon
import { TiDelete } from 'react-icons/ti';

export default function DeleteButton({ id }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    setIsLoading(true);

    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: 'DELETE',
    });

    const data = await res.json();

    if (data.error) {
      console.log(data.error.message);
      setIsLoading(false);
    } else {
      router.refresh();
      router.push('/tickets');
    }
  };

  return (
    <button className='btn-primary' onClick={handleClick} disabled={isLoading}>
      <TiDelete />
      {isLoading ? 'Deleting...' : 'Delete Ticket'}
    </button>
  );
}
