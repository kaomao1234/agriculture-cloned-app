import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Home } from './Home/Home'

const inter = Inter({ subsets: ['latin'] })

export default function App() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between${inter.className}`}
    >
      <Home/>
    </main>
  )
}
