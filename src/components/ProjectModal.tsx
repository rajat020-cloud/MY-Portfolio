import React from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Cpu
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onPlaceholderClick: (type: 'github' | 'demo', projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  onClose,
  onPlaceholderClick 
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#090D18] border border-white/[0.12] shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#0D1222] border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Project Specification
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Title & Description */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-blue-400 mt-1">
              {project.subtitle}
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
              {project.longDescription}
            </p>
          </div>

          {/* System Architecture Grid */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span>Architectural Breakdown</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.04]">
                <span className="text-slate-400 block mb-1">Frontend Tier:</span>
                <span className="text-white font-medium">{project.architecture.frontend}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.04]">
                <span className="text-slate-400 block mb-1">Backend Tier:</span>
                <span className="text-white font-medium">{project.architecture.backend}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.04]">
                <span className="text-slate-400 block mb-1">Database & Storage:</span>
                <span className="text-white font-medium">{project.architecture.database}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.04]">
                <span className="text-slate-400 block mb-1">Distinguishing Feature:</span>
                <span className="text-cyan-300 font-medium">{project.architecture.keyFeature}</span>
              </div>
            </div>
          </div>

          {/* Engineering Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Key Engineering Highlights & Verification:
            </h4>
            <div className="space-y-2">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Badges */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono text-slate-200 bg-slate-800/80 border border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer / Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-[#0D1222] border-t border-white/[0.08]">
          <div className="text-xs text-slate-400">
            Source repository & live demo links
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/[0.1] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub</span>
              </a>
            ) : (
              <button
                onClick={() => onPlaceholderClick('github', project.title)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-white/[0.1] transition-colors"
              >
                <Github className="w-4 h-4 text-slate-400" />
                <span>GitHub (Repo Link)</span>
              </button>
            )}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-md shadow-blue-500/25 transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <button
                onClick={() => onPlaceholderClick('demo', project.title)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-white/[0.1] transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
