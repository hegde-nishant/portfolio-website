'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'home' },
  { href: '/projects', label: 'projects' },
  { href: '/resume', label: 'resume' },
]

export default function FacebookHeader() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] bg-facebook-blue shadow-fb-header z-50">
      <div className="h-full flex items-center justify-between px-2 max-w-content mx-auto">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-white text-2xl font-bold">portfolio</h1>
        </div>

        {/* RIGHT: Navigation links */}
        <nav className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm text-white hover:underline ${
                isActive(link.href) ? 'font-bold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
