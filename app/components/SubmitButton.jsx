'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className='btn-primary'>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}
