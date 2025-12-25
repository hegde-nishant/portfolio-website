import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`py-section ${className}`}>
      <div className="max-w-content mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
