import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  error?: boolean;
  success?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  error = false,
  success = false,
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
      'bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 border border-white/30',
    secondary:
      'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200/80 shadow-xs',
    outline:
      'bg-white/80 backdrop-blur-md text-slate-800 border border-slate-200/80 hover:bg-white hover:border-blue-300 shadow-xs',
    ghost:
      'bg-transparent text-slate-700 hover:bg-slate-100/80 hover:text-blue-600'
  };

  let stateContent = children;
  if (loading) {
    stateContent = (
      <span className="flex items-center gap-2">
        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
        <span>Loading...</span>
      </span>
    );
  } else if (error) {
    stateContent = (
      <span className="flex items-center gap-1.5 text-rose-100">
        <span>⚠️</span>
        <span>Try Again</span>
      </span>
    );
  } else if (success) {
    stateContent = (
      <span className="flex items-center gap-1.5 text-emerald-100">
        <span>✓</span>
        <span>Confirmed</span>
      </span>
    );
  }

  return (
    <button
      disabled={disabled || loading}
      className={`btn-hallmark ${sizeClasses[size]} ${variantClasses[variant]} ${
        error ? 'bg-rose-600 shadow-rose-500/20' : ''
      } ${success ? 'bg-emerald-600 shadow-emerald-500/20' : ''} ${className}`}
      {...props}
    >
      {stateContent}
    </button>
  );
};
