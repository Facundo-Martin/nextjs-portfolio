import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Facundo Martin',
    default:
      'Facundo Martin - Code craftsman, engineer, architecture enthusiast',
  },
  description:
    "I'm Facundo. I build software with an emphasis on clean interfaces and thoughtful architecture. Passionate about engineering robust systems that help startups thrive.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com',
  ),
  alternates: {
    types: {
      'application/rss+xml': `/feed.xml`,
    },
  },
  openGraph: {
    title: 'Facundo Martin - Code craftsman, engineer, architecture enthusiast',
    description:
      "I'm Facundo. I build software with an emphasis on clean interfaces and thoughtful architecture. Passionate about engineering robust systems that help startups thrive.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Facundo Martin',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/headshot.png',
        width: 1200,
        height: 630,
        alt: 'Facundo Martin - Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facundo Martin - Code craftsman, engineer, architecture enthusiast',
    description:
      "I'm Facundo. I build software with an emphasis on clean interfaces and thoughtful architecture.",
    creator: '@your_twitter_handle',
    images: ['/headshot.png'],
  },
  icons: {
    icon: [
      { url: '/headshot.png' },
      { url: '/headshot.png', sizes: '16x16', type: 'image/png' },
      { url: '/headshot.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
