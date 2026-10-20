import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Layers,
  ShieldCheck,
  BarChart3,
  Server,
  Info,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { ProjectItem } from '@/types/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ProjectDetailModal } from './ProjectDetailModal';
import { cn } from '@/utils/cn';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Full Stack', 'Backend / Enterprise', 'API & Microservices'];

  const filteredProjects =
    filterCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === filterCategory);

  const getProjectIcon = (iconName?: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-emerald-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-8 h-8 text-amber-400" />;
      case 'Server':
        return <Server className="w-8 h-8 text-teal-400" />;
      default:
        return <Layers className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="// 04. FEATURED PROJECTS"
          title="Architected systems, portals, & full-stack platforms"
          subtitle="Real-world fintech engines and production architectures with measurable operational value."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilterCategory(category)}
              className={cn(
                'px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border',
                filterCategory === category
                  ? 'bg-emerald-500 text-slate-950 font-semibold border-emerald-500 shadow-md shadow-emerald-500/20'
                  : 'bg-white/70 dark:bg-slate-900/70 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between overflow-hidden p-0 group hover:border-emerald-500/40"
            >
              {/* Project Screenshot / Visual Header Placeholder */}
              <div
                className={cn(
                  'relative h-48 sm:h-52 w-full bg-gradient-to-br flex items-center justify-center p-6 overflow-hidden border-b border-slate-200 dark:border-slate-800',
                  project.imagePlaceholder?.gradient || 'from-emerald-950 to-slate-900'
                )}
              >
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-25" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-white/10 shadow-xl backdrop-blur-md mb-2 group-hover:scale-110 transition-transform duration-300">
                    {getProjectIcon(project.imagePlaceholder?.icon)}
                  </div>
                  <span className="text-xs font-mono font-medium text-emerald-300/90 tracking-wide">
                    {project.imagePlaceholder?.previewText || project.subtitle}
                  </span>
                </div>

                {/* Category Badge in upper right */}
                <div className="absolute top-4 right-4">
                  <Badge variant="brand" size="sm">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Problem & Solution Snippet */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800/80 mb-5 text-xs text-slate-600 dark:text-slate-300 space-y-1.5">
                    <div>
                      <span className="font-semibold text-amber-500 font-mono">Problem: </span>
                      <span className="line-clamp-1">{project.problem}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-emerald-500 font-mono">Solution: </span>
                      <span className="line-clamp-1">{project.solution}</span>
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions: View Details Modal, Live Demo, GitHub */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-mono focus:outline-none"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Architecture Details</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label="GitHub Repository"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label="Live Demo Link"
                        title="Live Demo Link"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal for detailed architectural breakdown */}
        <ProjectDetailModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
