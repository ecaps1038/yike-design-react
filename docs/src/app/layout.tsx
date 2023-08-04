import type { Metadata } from 'next'
import Header from '@/components/Header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yike Design React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-cn">
      <body>
        <div className='h-screen flex flex-col'>
          <Header />
          <main className='flex-grow overflow-hidden'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
