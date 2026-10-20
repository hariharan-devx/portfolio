import React from 'react';
import { ExternalLink, Github, AlertCircle, Wrench, Trophy, Layers } from 'lucide-react';
import { ProjectItem } from '@/types/portfolio';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
      <div className="space-y-6">
        {/* Category & Tagline */}
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="brand">{project.category}</Badge>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            {project.subtitle}
          </span>
        </div>

        <p className="text-base text-slate-700 dark:text-slate-300 font-medium">
          {project.tagline}
        </p>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm mb-2">
              <AlertCircle className="w-4 h-4 text-amber-500" />
              <span>The Problem</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm mb-2">
              <Wrench className="w-4 h-4 text-emerald-500" />
              <span>Engineering Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* My Role */}
        <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            <span>My Role & Architecture Responsibilities</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {project.myRole}
          </p>
        </div>

        {/* Measurable Outcomes & Metrics */}
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Business Outcomes & Key Metrics</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3">
            {project.outcome}
          </p>

          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 text-center"
                >
                  <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                    {metric}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tech Stack Chips */}
        <div>
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
            Technologies Implemented
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-3 justify-end">
          {project.githubUrl && (
            <Button
              asAnchor
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="sm"
              leftIcon={<Github className="w-4 h-4" />}
            >
              View on GitHub
            </Button>
          )}

          {project.liveUrl ? (
            <Button
              asAnchor
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              size="sm"
              leftIcon={<ExternalLink className="w-4 h-4" />}
            >
              Live Demo
            </Button>
          ) : (
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500 italic">
              (Live demo internal / enterprise protected)
            </span>
          )}
        </div>
      </div>
    </Modal>
  );
};
