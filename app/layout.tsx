import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Divyal Padalkar | DevOps Engineer & SRE',
  description: 'Senior DevOps Engineer | SRE Specialist | DevSecOps Expert | Building scalable infrastructure at scale',
  keywords: [
    'DevOps',
    'SRE',
    'DevSecOps',
    'Kubernetes',
    'AWS',
    'CI/CD',
    'Infrastructure as Code',
    'Cloud Native',
    'Platform Engineering',
  ],
  authors: [{ name: 'Divyal Padalkar' }],
  creator: 'Divyal Padalkar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://divyal-portfolio.vercel.app',
    title: 'Divyal Padalkar | DevOps Engineer & SRE',
    description: 'Premium DevOps portfolio showcasing enterprise-scale projects',
    images: [
      {
        url: 'https://divyal-portfolio.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Divyal Padalkar DevOps Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divyal Padalkar | DevOps Engineer & SRE',
    description: 'Enterprise DevOps & SRE specialist',
  },
  robots: 'index, follow',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#06B6D4" />
      </head>
      <body className={`${inter.className} bg-gradient-to-b from-sky-50 via-white to-sky-50 text-slate-700`}>
        {children}
      </body>
    </html>
  );
}
