import React from 'react';
import { cn } from '@/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'brand' | 'success' | 'outline' | 'secondary' | 'accent';
  size?: 'sm' | 'md';
  pulse?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'brand',
  size = 'md',
  pulse = false,
  children,
  ...props
}) => {
  const variantStyles = {
    brand: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 dark:border-emerald-500/30',
    success: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border-emerald-500/30',
    outline: 'bg-transparent text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700',
    secondary: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/50',
    accent: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20 dark:border-violet-500/30',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 font-medium',
    md: 'text-xs md:text-sm px-3 py-1 font-medium',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
      )}
      {children}
    </span>
  );
};
