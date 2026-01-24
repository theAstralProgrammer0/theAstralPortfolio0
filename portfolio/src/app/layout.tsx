// ============================================
// src/app/layout.tsx
// ============================================
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Temitayo Daisi-Oso | Software Engineer & Project Manager',
  description: 'Full-stack developer with 7+ years of experience delivering scalable applications, digital transformation projects, and blockchain solutions across government, health-tech, and fintech sectors.',
  keywords: [
    'Software Engineer',
    'Full-Stack Developer',
    'Project Manager',
    'Blockchain Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Lagos',
    'Nigeria',
  ],
  authors: [{ name: 'Temitayo Daisi-Oso' }],
  creator: 'Temitayo Daisi-Oso',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Temitayo Daisi-Oso | Software Engineer & Project Manager',
    description: 'Full-stack developer with 7+ years of experience delivering scalable applications and blockchain solutions.',
    siteName: 'Temitayo Daisi-Oso Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Temitayo Daisi-Oso Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Temitayo Daisi-Oso | Software Engineer & Project Manager',
    description: 'Full-stack developer with 7+ years of experience',
    images: ['/og-image.png'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-gradient-astral">
        <ScrollProgress />
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
