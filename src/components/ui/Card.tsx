import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverable = true }) => {
  return (
    <div
      className={`bg-white border border-slate-100 shadow-sm sm:shadow-md shadow-slate-200/50 ${
        hoverable ? 'hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 hover:border-blue-200/80' : ''
      } rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 relative overflow-hidden transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};
