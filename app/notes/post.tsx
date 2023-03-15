'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzNTMyIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjc4NjE1NTcwLCJleHAiOjE2Nzk5MTE1NzAsImp0aSI6IjllOWUxNDczLWI2ZmQtNDQyMC04MzJlLTRhOTVlODM3N2E5ZCJ9.y2ziv-SCDrvXJmWnYVJ7Jjko7-HQwf-qHB3mF61GtlQ '


export default function Post() {
  const [content, setContent] = useState('');
  const router = useRouter();

  async function postContent() {
    await fetch('https://todoo.5xcamp.us/todos',
      {
        method: 'POST',
        headers: {
          'Authorization': `${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "todo": {
            "content": content
          }
        }),
      }
    );
    setContent('');
    router.refresh()
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      postContent()
    }}>
      <input type="text" value={content} onChange={(e) => {
        setContent(e.target.value)
      }} />
      <button type="submit">
        Create note
      </button>
    </form>
  )
}
