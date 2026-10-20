import React, { useState } from 'react';
import {
  Code,
  Server,
  Database,
  ShieldAlert,
  Wrench,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { cn } from '@/utils/cn';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Categories list
  const categories = [
    { name: 'All', icon: Sparkles },
    { name: 'Frontend', icon: Code },
    { name: 'Backend', icon: Server },
    { name: 'Databases', icon: Database },
    { name: 'Security & Quality', icon: ShieldAlert },
    { name: 'DevOps & Tools', icon: Wrench },
  ];

  // Filter skills: only display confirmed ones as specified by the user!
  const confirmedSkills = portfolioData.skills.filter((skill) => skill.confirmed);
  const unconfirmedCount = portfolioData.skills.filter((skill) => !skill.confirmed).length;

  // Grouped skills for the categorized card view
  const categoryGroups = [
    {
      title: 'Frontend Development',
      category: 'Frontend',
      icon: Code,
      color: 'from-blue-500/20 to-cyan-500/10 text-cyan-400',
      description: 'Building responsive, fast, and accessible user interfaces with React and modern standards.',
    },
    {
      title: 'Backend Engineering',
      category: 'Backend',
      icon: Server,
      color: 'from-emerald-500/20 to-teal-500/10 text-emerald-400',
      description: 'Architecting scalable server-side systems, RESTful APIs, and business services.',
    },
    {
      title: 'Databases & Storage',
      category: 'Databases',
      icon: Database,
      color: 'from-amber-500/20 to-yellow-500/10 text-amber-400',
      description: 'Relational & NoSQL data modeling, query tuning, and index optimization for high concurrency.',
    },
    {
      title: 'Security & Code Quality',
      category: 'Security & Quality',
      icon: ShieldAlert,
      color: 'from-violet-500/20 to-purple-500/10 text-violet-400',
      description: 'Identity & Access Management (Keycloak SSO/RBAC), JWT validation, and SonarQube automated quality gates.',
    },
    {
      title: 'DevOps & Tooling',
      category: 'DevOps & Tools',
      icon: Wrench,
      color: 'from-slate-500/20 to-zinc-500/10 text-slate-300',
      description: 'Version control, API validation workflows, and automated deployment pipelines.',
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 02. TECHNICAL SKILLS"
          title="Battle-tested stack & modern engineering competencies"
          subtitle="Specialized in full-stack architecture, API performance, and enterprise identity security."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border',
                  isSelected
                    ? 'bg-emerald-500 text-slate-950 font-semibold border-emerald-500 shadow-md shadow-emerald-500/20 scale-[1.02]'
                    : 'bg-white/70 dark:bg-slate-900/70 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryGroups
            .filter(
              (group) => selectedCategory === 'All' || selectedCategory === group.category
            )
            .map((group) => {
              const GroupIcon = group.icon;
              const groupSkills = confirmedSkills.filter(
                (skill) => skill.category === group.category
              );

              return (
                <Card
                  key={group.title}
                  className="flex flex-col justify-between hover:border-emerald-500/40"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={cn('p-2.5 rounded-xl bg-gradient-to-br border border-white/10', group.color)}>
                        <GroupIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white text-base">
                          {group.title}
                        </h3>
                        <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                          {groupSkills.length} Production Skills
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                      {group.description}
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2">
                      {groupSkills.map((skill) => (
                        <div
                          key={skill.name}
                          className={cn(
                            'group flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 border',
                            skill.highlight
                              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/30 hover:border-emerald-500 hover:bg-emerald-500/15'
                              : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/60 hover:border-slate-300 dark:hover:border-slate-600'
                          )}
                        >
                          <span
                            className={cn(
                              'w-1.5 h-1.5 rounded-full',
                              skill.highlight ? 'bg-emerald-500' : 'bg-slate-400 dark:bg-slate-500'
                            )}
                          />
                          <span>{skill.name}</span>
                          {skill.highlight && (
                            <CheckCircle2 className="w-3 h-3 text-emerald-500 opacity-80" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
        </div>

        {/* Note on Additional Skills */}
        {unconfirmedCount > 0 && (
          <div className="mt-8 p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                [EDIT NOTE]
              </span>
              : {unconfirmedCount} additional candidate skills (e.g. Next.js, Docker, AWS, Redis, Jest) are configured in{' '}
              <code className="text-emerald-500 font-mono">src/data/portfolio.ts</code>. Set{' '}
              <code className="text-emerald-500 font-mono">confirmed: true</code> on any skill to instantly display it on your live portfolio.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
