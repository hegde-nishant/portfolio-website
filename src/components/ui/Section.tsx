import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`mb-3 ${className}`}>
      <div className="bg-white border border-border-medium max-w-content mx-auto overflow-hidden">
        {children}
      </div>
    </section>
  );
}
