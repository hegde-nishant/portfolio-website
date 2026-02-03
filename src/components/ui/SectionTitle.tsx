'use client';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  showEdit?: boolean;
  onEdit?: () => void;
  bgColor?: string;
}

export default function SectionTitle({ children, subtitle, showEdit = true, onEdit, bgColor = 'bg-facebook-blue' }: SectionTitleProps) {
  const handleEditClick = () => {
    const audio = new Audio('/sounds/click.mp3');
    audio.volume = 0.3;
    audio.play().catch(() => {});

    if (onEdit) {
      onEdit();
    }
  };

  return (
    <div className={`${bgColor} px-3 py-1.5 flex items-center justify-between`}>
      <div className="flex-1">
        <h2 className="text-sm font-bold text-white">
          {children}
        </h2>
        {subtitle && (
          <p className="text-sm text-white/90 mt-1">
            {subtitle}
          </p>
        )}
      </div>
      {showEdit && (
        <button
          onClick={handleEditClick}
          className="text-xs text-white/90 hover:text-white hover:underline cursor-pointer ml-2"
        >
          [edit]
        </button>
      )}
    </div>
  );
}
