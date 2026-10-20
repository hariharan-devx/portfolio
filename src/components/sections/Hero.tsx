import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileDown, ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { calculateExperience } from '@/utils/experience';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = portfolioData.personal.typedRoles;
  const experience = calculateExperience(portfolioData.personal.startDate);

  // Rotating role text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-violet-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 -left-20 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Badge variant="success" size="md" pulse className="px-4 py-1.5 shadow-sm">
              <span className="font-semibold text-slate-900 dark:text-emerald-300">
                {portfolioData.personal.availabilityStatus}
              </span>
            </Badge>
          </motion.div>

          {/* Candidate Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              {portfolioData.personal.name}
            </span>
          </motion.h1>

          {/* Rotating Role Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 h-10 sm:h-12 flex items-center justify-center font-mono text-lg sm:text-2xl text-slate-700 dark:text-slate-300 font-semibold"
          >
            <span className="text-emerald-500 mr-2">$</span>
            <span className="relative">
              {roles[currentRoleIndex]}
              <span className="inline-block w-2 h-5 bg-emerald-500 ml-1.5 animate-pulse align-middle" />
            </span>
          </motion.div>

          {/* High-Impact Value Pitch */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
          >
            {portfolioData.personal.tagline}
          </motion.p>

          {/* Call to Actions & Resume Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Button
              asAnchor
              href={portfolioData.personal.resumeUrl}
              download="Hariharan_B_Resume.pdf"
              variant="primary"
              size="lg"
              leftIcon={<FileDown className="w-5 h-5" />}
              className="shadow-emerald-500/25"
            >
              Download Resume
            </Button>

            <Button
              asAnchor
              href="#projects"
              variant="secondary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              View Projects
            </Button>

            <Button
              asAnchor
              href="#contact"
              variant="outline"
              size="lg"
              leftIcon={<Mail className="w-4 h-4" />}
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Quick Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 flex items-center gap-4 text-slate-500 dark:text-slate-400"
          >
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-500 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-500 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${portfolioData.socials.email}`}
              className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-500 transition-colors"
              aria-label="Send direct email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Recruiter Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
          >
            {portfolioData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md p-4 sm:p-5 text-left transition-all hover:border-emerald-500/40"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5 font-mono">
                  {stat.isDynamic ? experience.formattedYears : stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  {stat.label}
                </div>
                <div className="mt-0.5 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                  {stat.isDynamic ? `Started March 2021 (${experience.detailedText})` : stat.subtext}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
