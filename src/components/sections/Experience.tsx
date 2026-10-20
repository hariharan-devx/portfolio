import React from 'react';
import { Calendar, MapPin, CheckCircle2, TrendingUp } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { calculateExperience } from '@/utils/experience';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 03. CAREER TIMELINE"
          title="Proven engineering leadership & track record"
          subtitle="From leading enterprise multi-domain PODs to fintech core systems, delivering resilient architectures."
        />

        <div className="relative border-l-2 border-emerald-500/30 dark:border-emerald-500/20 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {portfolioData.experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-125 transition-transform duration-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
              </div>

              {/* Experience Card */}
              <Card className="p-6 sm:p-8 hover:border-emerald-500/40">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <Badge variant="success" size="sm" pulse>
                          Current Role
                        </Badge>
                      )}
                    </div>
                    <div className="text-base font-semibold text-emerald-600 dark:text-emerald-400">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-slate-500 dark:text-slate-400 gap-1 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{exp.periodLabel}</span>
                      {(() => {
                        const duration = calculateExperience(exp.startDate, exp.endDate);
                        return (
                          <span className="text-emerald-500 font-semibold">
                            ({duration.detailedText})
                          </span>
                        );
                      })()}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements List in Action + Technology + Measurable Result format */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 font-semibold flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    Key Architectural & Performance Deliverables
                  </h4>

                  <ul className="space-y-3.5">
                    {exp.achievements.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                        <div>{bullet}</div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used Chip Row */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 font-semibold">
                    Core Tech Stack Used
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 transition-colors hover:border-emerald-500/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
