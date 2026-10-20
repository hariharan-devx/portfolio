import React from 'react';
import { cn } from '@/utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className,
  hoverEffect = true,
  glow = false,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'relative rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md p-6 shadow-sm dark:shadow-none transition-all duration-300',
        hoverEffect &&
          'hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700/80 hover:shadow-emerald-500/5',
        glow && 'ring-1 ring-emerald-500/20',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
