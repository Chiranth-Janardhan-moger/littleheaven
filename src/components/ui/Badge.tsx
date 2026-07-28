import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'amber' | 'sky';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className = '' }) => {
  const variantStyles = {
    primary: 'bg-blue-50/90 text-blue-700 border-blue-100/90',
    success: 'bg-emerald-50/90 text-emerald-700 border-emerald-100/90',
    amber: 'bg-amber-50/90 text-amber-800 border-amber-200/90',
    sky: 'bg-sky-50/90 text-sky-700 border-sky-100/90'
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border shadow-2xs ${variantStyles[variant]} ${className}`}
    >
      {children}
    </div>
  );
};
