import { Condiment, Inter } from 'next/font/google';

export const condiment = Condiment({
  subsets: ['latin'],
  weight: '400',          // blackletter pesado
  variable: '--font-condiment',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
});