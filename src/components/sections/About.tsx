import React from 'react';
import { ShieldCheck, Zap, Code2, MapPin, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';

export const About: React.FC = () => {
  const corePillars = [
    {
      icon: <Code2 className="w-5 h-5 text-emerald-500" />,
      title: 'Clean Architecture & Quality',
      description: 'Enforcing SonarQube automated quality gates, eliminating technical debt, and writing modular, testable code.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-400" />,
      title: 'Enterprise Security & RBAC',
      description: 'Hands-on Keycloak Identity management, OAuth2/JWT workflows, role-based access control, and transaction audit trails.',
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: 'High Performance & Scale',
      description: 'Optimizing relational MySQL and MongoDB database schemas, caching, and cutting API payload latency under load.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 01. ABOUT ME"
          title="Engineering resilient software for real-world operations"
          subtitle="A blend of frontend precision, robust backend design, and enterprise security mindset."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Profile Card / Photo Frame (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-emerald-500/30 via-slate-700/20 to-slate-800/10 shadow-xl">
              <div className="relative rounded-[22px] bg-slate-900 overflow-hidden p-6 sm:p-8 flex flex-col items-center text-center">
                {/* Photo Frame / Modern Avatar Placeholder */}
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden bg-gradient-to-tr from-emerald-950 via-slate-800 to-teal-900 border-2 border-emerald-500/30 flex items-center justify-center shadow-inner group">
                  {/* Subtle decorative code pattern */}
                  <div className="absolute inset-0 opacity-20 font-mono text-[9px] p-2 select-none overflow-hidden text-emerald-400">
                    {'const engineer = { name: "Hariharan B", stack: ["React", "Node", "Laravel", "MySQL"], status: "Ready to build" };'}
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-mono text-2xl font-bold shadow-lg">
                      HB
                    </div>
                    <span className="mt-3 text-xs font-mono text-emerald-300 font-medium">
                      Software Engineer
                    </span>
                  </div>

                  {/* Online dot indicator */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 border border-emerald-500/40 text-[10px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open to Work
                  </div>
                </div>

                {/* Candidate Summary */}
                <h3 className="mt-6 text-xl font-bold text-white tracking-tight">
                  {portfolioData.personal.name}
                </h3>
                <p className="text-xs font-mono text-emerald-400 mt-1">
                  {portfolioData.experiences[0]?.role} • {portfolioData.experiences[0]?.company}
                </p>

                {/* Location & Relocation note */}
                <div className="mt-4 pt-4 border-t border-slate-800 w-full text-left space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{portfolioData.personal.location}</span>
                  </div>
                  <div className="text-[11px] font-mono text-emerald-400/90 bg-emerald-500/10 rounded-lg p-2 border border-emerald-500/20">
                    {portfolioData.personal.relocationNote}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Story & Core Values (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <Card className="p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-500" />
                Professional Background
              </h3>

              <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {portfolioData.personal.story.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </Card>

            {/* Core Engineering Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {corePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-4 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 transition-all hover:border-emerald-500/30"
                >
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-800 w-fit border border-slate-200 dark:border-slate-700 shadow-sm mb-3">
                    {pillar.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {pillar.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
