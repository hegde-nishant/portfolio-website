'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';

interface FacebookButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  download?: boolean | string;
}

export default function FacebookButton({
  children,
  href,
  variant = 'primary',
  download,
  className = '',
  onClick,
  ...props
}: FacebookButtonProps) {
  const baseClasses = `
    px-3 py-1.5
    rounded
    font-bold text-xs
    border
    transition-colors duration-150
    cursor-pointer
    shadow-fb-button
    ${className}
  `;

  const variantClasses = variant === 'primary'
    ? `
      bg-facebook-blue
      border-facebook-blue-dark
      text-white
      hover:bg-facebook-blue-dark
    `
    : `
      bg-white
      border-border-medium
      text-text-primary
      hover:bg-gray-50
    `;

  const classes = `${baseClasses} ${variantClasses}`;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
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
