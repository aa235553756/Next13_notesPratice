import React from 'react'
import Link from 'next/link';

async function getData(id: string) {
  const result = await fetch(`https://dummyjson.com/products/${id}`,
    { next: { revalidate: 10 } }
  );
  const data = await result.json()
  return data
}

export default async function NotesPage({ params }: any) {
  const data = await getData(params.id);

  return (
    <div>
      <p>
        {JSON.stringify(data)}
      </p>
    </div>
  )
}
