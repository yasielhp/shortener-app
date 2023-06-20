import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './providers'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Link from 'next/link'
import { Card } from '@tremor/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Colibris | Application for shortening URLs',
  description: 'Application for shortening URLs'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={`mx-auto max-w-3xl my-4 px-4 ${inter.className}`}>
        <Providers>
          <Card className='flex justify-between items-center'>
            <Link href='/' className='uppercase font-light text-xl text-blue-500 dark:text-blue-600'>
              Coli<span className='font-bold'>bris</span>
            </Link>
            <ThemeSwitcher />
          </Card>
          <main className='flex flex-col gap-4 py-4'>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
