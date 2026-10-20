import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, Briefcase } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'py-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-slate-950 font-mono font-bold text-sm shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              &lt;HB/&gt;
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available to Hire
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/70 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={cn(
                    'relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBubble"
                      className="absolute inset-0 rounded-full bg-white dark:bg-slate-800/90 shadow-sm border border-slate-200/60 dark:border-slate-700/60 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle & Resume Download */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              asAnchor
              href={portfolioData.personal.resumeUrl}
              download="Hariharan_B_Resume.pdf"
              variant="outline"
              size="sm"
              leftIcon={<FileDown className="w-3.5 h-3.5" />}
              className="text-xs font-semibold"
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[65px] bg-slate-950/60 backdrop-blur-sm z-30 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[65px] left-0 right-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-6 shadow-2xl z-40 md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'px-4 py-2.5 rounded-xl text-base font-medium transition-colors flex items-center justify-between',
                      activeSection === item.id
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                    )}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    )}
                  </a>
                ))}

                <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
                  <Button
                    asAnchor
                    href={portfolioData.personal.resumeUrl}
                    download="Hariharan_B_Resume.pdf"
                    variant="primary"
                    size="md"
                    leftIcon={<FileDown className="w-4 h-4" />}
                    className="w-full justify-center"
                  >
                    Download Resume PDF
                  </Button>
                  <Button
                    asAnchor
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    variant="outline"
                    size="md"
                    leftIcon={<Briefcase className="w-4 h-4" />}
                    className="w-full justify-center"
                  >
                    Hire Me / Get in Touch
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
