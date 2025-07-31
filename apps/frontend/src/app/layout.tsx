import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Get base URL from environment variable with fallbacks
const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  // Final fallback for development
  return 'http://localhost:3000';
};

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: 'Alpha5 Labs - Turning Bold Ideas Into Everyday Solutions',
  description:
    'Something Amazing is Coming Soon... Alpha5 Labs is turning bold ideas into everyday solutions. Innovation platform for the future.',
  keywords: [
    'Alpha5 Labs',
    'innovation',
    'technology',
    'startup',
    'solutions',
    'bold ideas',
  ],
  authors: [{ name: 'Alpha5 Labs' }],
  creator: 'Alpha5 Labs',
  publisher: 'Alpha5 Labs',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Alpha5 Labs',
    title: 'Alpha5 Labs - Turning Bold Ideas Into Everyday Solutions',
    description:
      'Something Amazing is Coming Soon... Alpha5 Labs is turning bold ideas into everyday solutions. Innovation platform for the future.',
    images: [
      {
        url: '/Alpha5-logo.png',
        width: 1200,
        height: 630,
        alt: 'Alpha5 Labs Logo',
        type: 'image/png',
      },
      {
        url: '/Alpha5-logo.png',
        width: 800,
        height: 600,
        alt: 'Alpha5 Labs Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Alpha5Labs',
    creator: '@Alpha5Labs',
    title: 'Alpha5 Labs - Turning Bold Ideas Into Everyday Solutions',
    description:
      'Something Amazing is Coming Soon... Alpha5 Labs is turning bold ideas into everyday solutions. Innovation platform for the future.',
    images: ['/Alpha5-logo.png'],
  },
  alternates: {
    canonical: baseUrl,
  },
  category: 'technology',
  classification: 'Innovation Technology Company',
  metadataBase: new URL(baseUrl),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Alpha5 Labs',
  description:
    'Something Amazing is Coming Soon... Alpha5 Labs is turning bold ideas into everyday solutions.',
  url: baseUrl,
  logo: `${baseUrl}/Alpha5-logo.png`,
  foundingDate: '2025',
  sameAs: ['https://twitter.com/Alpha5Labs', 'https://github.com/Alpha5-Labs'],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@alpha5labs.com',
    contactType: 'customer service',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Alpha5-logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/Alpha5-logo.png" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
