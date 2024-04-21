import { Roboto, Acme } from 'next/font/google'

export const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const acme = Acme({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
