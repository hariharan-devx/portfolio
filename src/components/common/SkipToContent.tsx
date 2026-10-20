import React from 'react';

export const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-500 focus:text-slate-950 focus:font-semibold focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
    >
      Skip to main content
    </a>
  );
};
