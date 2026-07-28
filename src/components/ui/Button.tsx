import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled,
  className = '',
  children,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base'
  };

  const variantClasses = {
    primary:
      'btn-shine-sweep bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white shadow-md shadow-sky-500/25 hover:shadow-lg border border-sky-400/80 transition-all duration-300',
    secondary:
      'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200/80 shadow-xs btn-shine-sweep',
    outline:
      'bg-white/90 backdrop-blur-md text-slate-800 border border-slate-200 hover:bg-white hover:border-blue-300 shadow-xs btn-shine-sweep',
    ghost:
      'bg-transparent text-slate-700 hover:bg-slate-100/80 hover:text-blue-600'
  };

  return (
    <button
      disabled={disabled}
      className={`btn-hallmark ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
