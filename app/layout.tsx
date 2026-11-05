import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })

const title = 'lole. | Compras en el Centro de Medellín y Personal Shopper'
const description =
  'Encuentra tiendas y comercios del Centro de Medellín, compara opciones y compra sin desplazarte con un Personal Shopper. El centro, más cerca de ti.'

export const metadata: Metadata = {
  title,
  description,
  generator: 'v0.app',
  keywords: [
    'compras en el Centro de Medellín',
    'tiendas del Centro de Medellín',
    'dónde comprar en Medellín',
    'comercios del centro',
    'Personal Shopper Medellín',
  ],
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'es_CO',
    siteName: 'lole.',
    images: [{ url: '/images/centro-medellin.png', alt: 'Calle comercial del Centro de Medellín al anochecer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/centro-medellin.png'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#06162F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-CO" className={`${inter.variable} ${manrope.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
