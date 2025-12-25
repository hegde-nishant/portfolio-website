interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function ExternalLink({ href, children, className = '' }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-blue hover:text-blue-dark font-medium transition-colors ${className}`}
    >
      {children}
    </a>
  );
}
