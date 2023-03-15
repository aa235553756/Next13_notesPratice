'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzNTYwIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjc4ODQzNTI5LCJleHAiOjE2ODAxMzk1MjksImp0aSI6Ijk1OGU2YWI3LTBhNGQtNDA2Zi04OTRkLTRmN2ExYjJiYTgxZiJ9.b9hAvmAxDJrYtGie-vAtYCdYq4vgOSw3_mMx5YbWcTk'


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
