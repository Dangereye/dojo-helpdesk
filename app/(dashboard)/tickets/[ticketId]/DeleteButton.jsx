'use client';

import { useState } from 'react';
import { TiDelete } from 'react-icons/ti';

export default function DeleteButton({ id }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    console.log('Deleting id: ', id);
  };
  return (
    <button className='btn-primary' onClick={handleClick} disabled={isLoading}>
      <TiDelete />
      {isLoading ? 'Deleting...' : 'Delete Ticket'}
    </button>
  );
}
