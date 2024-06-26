import type { Metadata } from 'next'
import { roboto } from './fonts'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import StoreProvider from './StoreProvider'

export const metadata: Metadata = {
  title: 'Win Store | E-commerce Shop',
  description: 'An one stop shop for all your needs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.className} w-full flex flex-col justify-center items-center max-w-[1440px] mx-auto`}
      >
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
