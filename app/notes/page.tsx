import React from 'react'
import Link from 'next/link';
import Post from './post';

const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzNTYwIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjc4ODQzNTI5LCJleHAiOjE2ODAxMzk1MjksImp0aSI6Ijk1OGU2YWI3LTBhNGQtNDA2Zi04OTRkLTRmN2ExYjJiYTgxZiJ9.b9hAvmAxDJrYtGie-vAtYCdYq4vgOSw3_mMx5YbWcTk'

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
