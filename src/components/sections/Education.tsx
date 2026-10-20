import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 05. EDUCATION & CERTIFICATIONS"
          title="Academic foundation & continuous engineering learning"
          subtitle="Theoretical principles of computer science paired with verified technical credentials."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Education Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-emerald-500" />
              <span>Formal Education</span>
            </h3>

            {portfolioData.education.map((edu) => (
              <Card key={edu.id} className="p-6 hover:border-emerald-500/40">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {edu.details && edu.details.length > 0 && (
                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-mono mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span>Certifications & Specialized Training</span>
            </h3>

            <div className="space-y-4">
              {portfolioData.certifications.map((cert) => (
                <Card
                  key={cert.id}
                  className="p-5 flex items-center justify-between gap-4 hover:border-emerald-500/40"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {cert.issuer} • <span className="font-mono text-emerald-500">{cert.year}</span>
                      </p>
                    </div>
                  </div>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                      aria-label="View verified certificate"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
