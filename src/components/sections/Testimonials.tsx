import React from 'react';
import { Quote } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';

export const Testimonials: React.FC = () => {
  // Hidden by default as requested until real recommendations are added
  if (!portfolioData.testimonials.enabled || portfolioData.testimonials.items.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 06. RECOMMENDATIONS"
          title="What engineering colleagues and managers say"
          subtitle="Feedback on technical problem-solving, work ethic, and collaboration."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.testimonials.items.map((item) => (
            <Card key={item.id} className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-emerald-500/40 mb-4" />
                <p className="text-slate-700 dark:text-slate-300 italic text-sm sm:text-base leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold flex items-center justify-center text-sm border border-emerald-500/30">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.role} • {item.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
