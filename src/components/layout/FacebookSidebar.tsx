'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { projects } from '@/data/projects'

interface FacebookSidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navLinks = [
  { href: '/', label: 'My Profile' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume/CV' },
  { href: '/contact', label: 'Contact' },
]

export default function FacebookSidebar({ isOpen, onClose }: FacebookSidebarProps) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    // For hash links, check if we're on the homepage
    if (href.startsWith('/#')) {
      return pathname === '/'
    }
    // For regular links
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const playClickSound = () => {
    const audio = new Audio('/sounds/click.mp3')
    audio.volume = 0.3
    audio.play().catch(() => {
      // Silently fail if audio can't play
    })
  }

  const handleLinkClick = (href: string) => {
    playClickSound()
    // Close mobile menu when a link is clicked
    if (isOpen) {
      onClose()
    }
  }

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-[60px] left-0 bottom-0 w-[200px]
          bg-white border-r-2 border-dotted border-gray-300
          z-40 transition-transform duration-300 overflow-y-auto
          md:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Navigation Links */}
        <nav className="py-3 px-2">
          <ul className="space-y-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`
                    block px-2 py-1 text-xs transition-colors
                    ${
                      isActive(link.href)
                        ? 'text-facebook-blue font-bold'
                        : 'text-facebook-blue hover:underline'
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div className="border-t border-gray-300 my-2" />

        {/* Select Projects Section */}
        <div className="py-2 px-2">
          <h3 className="text-xs font-bold text-gray-600 px-2 mb-2">
            Select Projects
          </h3>
          <div className="space-y-2">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                onClick={() => handleLinkClick(`/projects/${project.slug}`)}
                className="block hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-2 px-2 py-1">
                  {/* Thumbnail */}
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover border border-gray-300"
                      sizes="48px"
                    />
                  </div>
                  {/* Project Title */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-facebook-blue hover:underline leading-tight line-clamp-2">
                      {project.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}
