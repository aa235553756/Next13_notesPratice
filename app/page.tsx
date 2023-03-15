import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Link href='/notes'>notesTodo</Link>
      <p>記得換token</p>
      <p>有分兩邊token,getData,post</p>
    </>
  )
}
