import type { Metadata } from 'next'
import { Inter, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nishant Hegde | Data Scientist & ML Engineer',
  description: 'Portfolio of Nishant Hegde - Data Scientist and Machine Learning Engineer based in Rochester with 5 years of experience in software engineering, machine learning, and computer vision.',
  keywords: ['Data Science', 'Machine Learning', 'Computer Vision', 'Software Engineering', 'ML Engineer', 'Rochester'],
  authors: [{ name: 'Nishant Hegde' }],
  openGraph: {
    title: 'Nishant Hegde | Data Scientist & ML Engineer',
    description: 'Portfolio of Nishant Hegde - Data Scientist and Machine Learning Engineer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
