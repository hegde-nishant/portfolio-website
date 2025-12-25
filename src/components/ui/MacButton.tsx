'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';

interface MacButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  download?: boolean | string;
}

export default function MacButton({
  children,
  href,
  variant = 'primary',
  download,
  className = '',
  onClick,
  ...props
}: MacButtonProps) {
  const baseClasses = `
    px-6 py-2.5
    rounded-md
    font-display font-bold text-sm
    border-2
    transition-all duration-100
    cursor-pointer
    active:shadow-button-3d-pressed active:translate-x-[1px] active:translate-y-[1px]
    ${className}
  `;

  const variantClasses = variant === 'primary'
    ? `
      bg-platinum-bg-light
      border-platinum-border-dark
      text-platinum-text
      shadow-button-3d
      hover:bg-platinum-bg
    `
    : `
      bg-platinum-bg-dark
      border-platinum-border
      text-platinum-text
      shadow-button-3d
      hover:bg-platinum-bg
    `;

  const classes = `${baseClasses} ${variantClasses}`;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    // Play click sound
    const audio = new Audio('/sounds/click.mp3');
    audio.volume = 0.3;
    audio.play().catch(() => {
      // Silently fail if audio can't play
    });

    if (onClick) {
      onClick(e as React.MouseEvent<HTMLButtonElement>);
    }
  };

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={classes}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
