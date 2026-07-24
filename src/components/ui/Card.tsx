import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverable = true }) => {
  return (
    <div
      className={`glass-card ${
        hoverable ? 'glass-card-hover' : ''
      } rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 relative overflow-hidden transition-all duration-400 ${className}`}
    >
      {children}
    </div>
  );
};
