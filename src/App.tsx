import React, { useState } from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { SkipToContent } from '@/components/common/SkipToContent';
import { Toast, ToastMessage } from '@/components/ui/Toast';

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';

export const App: React.FC = () => {
  const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
  const activeSection = useActiveSection(sectionIds, 150);

  const [toast, setToast] = useState<ToastMessage | null>(null);

  const handleShowToast = (newToast: Omit<ToastMessage, 'id'>) => {
    const id = Date.now().toString();
    setToast({ ...newToast, id });
    setTimeout(() => {
      setToast((current) => (current?.id === id ? null : current));
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Accessibility: Skip link */}
      <SkipToContent />

      {/* Background Matrix/Grid Overlay */}
      <div className="fixed inset-0 bg-grid-pattern-light dark:bg-grid-pattern opacity-60 pointer-events-none -z-10" />

      {/* Top Sticky Glass Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main id="main-content" className="flex-1 focus:outline-none">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Testimonials />
        <Contact onShowToast={handleShowToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Toast Feedback */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
};

export default App;
