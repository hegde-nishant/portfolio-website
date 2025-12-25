import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

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
    <html lang="en">
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
