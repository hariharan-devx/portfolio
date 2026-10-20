import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/50 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 dark:text-white text-base">
                {portfolioData.personal.name}
              </span>
              <span className="text-slate-400 dark:text-slate-600">|</span>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                {portfolioData.personal.role}
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
              © {currentYear} {portfolioData.personal.name}. All rights reserved.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.socials.email}`}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="h-4 w-px bg-slate-300 dark:bg-slate-800" />

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:-translate-y-0.5"
              aria-label="Scroll back to top of page"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Small stack note */}
        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-900 text-center text-[11px] text-slate-400 dark:text-slate-600 font-mono">
          Engineered with React 18, TypeScript, Tailwind CSS, & Framer Motion • Hosted on GitHub Pages
        </div>
      </div>
    </footer>
  );
};
