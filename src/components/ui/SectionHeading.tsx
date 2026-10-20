import React from 'react';
import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'left',
  className,
}) => {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl',
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            'inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full text-xs font-mono font-medium tracking-wider uppercase',
            'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20',
            align === 'center' ? 'mx-auto' : ''
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
