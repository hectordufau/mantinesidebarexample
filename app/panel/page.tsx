'use client';

import { redirect } from 'next/navigation';

export default function Page() {

  redirect('/panel/admin');


  return (
    <>
      <h1>Page</h1>
    </>
  );
}
