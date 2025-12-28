'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume/CV' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const playClickSound = () => {
    const audio = new Audio('/sounds/click.mp3');
    audio.volume = 0.3;
    audio.play().catch(() => {
      // Silently fail if audio can't play
    });
  };

  return (
    <nav className="border-b-2 border-platinum-border-dark bg-platinum-bg-dark sticky top-0 z-50 shadow-macos">
      <div className="max-w-content mx-auto px-6 py-4">
        <ul className="flex gap-12 flex-wrap justify-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={playClickSound}
                className={`px-5 py-2 text-base font-bold transition-all duration-100 rounded block ${
                  isActive(link.href)
                    ? 'bg-platinum-bg-light text-platinum-text border-2 border-platinum-border-dark shadow-macos-inset'
                    : 'text-platinum-text hover:bg-platinum-bg'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
