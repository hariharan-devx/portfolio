import React from 'react';
import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      asAnchor = false,
      href,
      target,
      rel,
      download,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 gap-2';

    const variants = {
      primary:
        'bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 dark:shadow-emerald-900/40',
      secondary:
        'bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-100 border border-slate-200 dark:border-slate-700/60',
      outline:
        'border border-slate-300 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 bg-transparent hover:bg-emerald-500/5',
      ghost:
        'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/60',
    };

    const sizes = {
      sm: 'text-xs md:text-sm px-3.5 py-1.5 rounded-lg',
      md: 'text-sm px-4 py-2.5 rounded-xl',
      lg: 'text-base px-6 py-3 rounded-xl font-medium',
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    if (asAnchor && href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          download={download}
          className={combinedClassName}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        className={combinedClassName}
        {...props}
      >
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
