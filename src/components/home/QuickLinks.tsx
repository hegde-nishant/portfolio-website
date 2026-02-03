'use client';

import Link from 'next/link';

const quickLinks = [
  { label: 'View More Photos', href: '/projects' },
  { label: 'View Work History', href: '/#work-experience' },
  {
    label: 'Edit My Picture',
    href: '#',
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      const audio = new Audio('/sounds/click.mp3');
      audio.volume = 0.3;
      audio.play().catch(() => {});
    }
  },
];

export default function QuickLinks() {
  return (
    <div className="hidden md:block mt-4 border border-border-medium bg-white p-2">
      <ul className="space-y-1">
        {quickLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              onClick={link.onClick}
              className="text-xs text-facebook-blue hover:underline block py-1"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
