interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
}

export default function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-display text-platinum-text">
        {children}
      </h2>
      {subtitle && (
        <p className="text-base text-platinum-text-muted mt-2 font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}
