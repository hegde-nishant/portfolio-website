'use client'

import FacebookHeader from './FacebookHeader'

interface FacebookLayoutProps {
  children: React.ReactNode
}

export default function FacebookLayout({ children }: FacebookLayoutProps) {
  return (
    <>
      <FacebookHeader />
      <div className="pt-[60px]">
        <main className="min-h-screen bg-background-page px-4">
          {children}
        </main>
      </div>
    </>
  )
}
