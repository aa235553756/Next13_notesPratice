import React from 'react'
import Link from 'next/link';
import Post from './post';

const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzNTMyIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjc4NjE1NTcwLCJleHAiOjE2Nzk5MTE1NzAsImp0aSI6IjllOWUxNDczLWI2ZmQtNDQyMC04MzJlLTRhOTVlODM3N2E5ZCJ9.y2ziv-SCDrvXJmWnYVJ7Jjko7-HQwf-qHB3mF61GtlQ '

async function getData() {
  const result = await fetch('https://todoo.5xcamp.us/todos',
    {
      method: 'GET',
      headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    }
  );
  const data = await result.json()
  return data.todos as any[]
}

export default async function NotesPage() {
  const data = await getData();

  return (
    <div>
      <ul>
        {/* {JSON.stringify(data)} */}
        {data.map((item, index) => <li key={index}>
          {item.content}
          <Link href={`/notes/${item.id}`}>single</Link>
        </li>)}
      </ul>
      <Post />
    </div>
  )
}
