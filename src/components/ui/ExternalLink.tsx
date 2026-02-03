'use client';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function ExternalLink({ href, children, className = '' }: ExternalLinkProps) {
  const playClickSound = () => {
    const audio = new Audio('/sounds/click.mp3');
    audio.volume = 0.3;
    audio.play().catch(() => {
      // Silently fail if audio can't play
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={playClickSound}
      className={`text-facebook-blue hover:underline transition-colors ${className}`}
    >
      {children}
    </a>
  );
}
