import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle,
  Bot,
  Lock
} from 'lucide-react';
import { projectsData, personalInfo } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { SpotlightCard } from './SpotlightCard';
import { soundFX } from '../utils/soundEffects';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [placeholderInfo, setPlaceholderInfo] = useState<{
    show: boolean;
    type: 'github' | 'demo';
    projectName: string;
  }>({ show: false, type: 'github', projectName: '' });

  const categories = ['All', 'Full-Stack', 'AI & Web', 'Frontend'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  const handlePlaceholderClick = (type: 'github' | 'demo', projectName: string) => {
    soundFX.playClick();
    setPlaceholderInfo({
      show: true,
      type,
      projectName
    });
  };

  // Render stylized SVG visual cards for each project
  const renderProjectVisual = (projectId: string, liveUrl?: string) => {
    switch (projectId) {
      case 'ai-learning-platform':
        return (
          <div className="relative w-full bg-gradient-to-br from-[#0c1224] via-[#111936] to-[#0A0E1A] p-5 flex flex-col justify-between overflow-hidden border-b border-white/[0.08] group-hover:border-blue-500/30 transition-colors">
            {/* Visual Ambient Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-500/20 rounded-full blur-2xl" />

            {/* Browser Chrome Header */}
            <div className="relative flex items-center justify-between z-10 pb-3 mb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              </div>

              {/* URL Address Bar */}
              <div className="flex-1 mx-3 px-3 py-1 rounded-lg bg-slate-900/90 border border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5 truncate">
                  <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="text-slate-300 truncate">{liveUrl?.replace('https://', '') || "ai-learning-platform-umber.vercel.app"}</span>
                </div>
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFX.playClick()}
                    className="text-blue-400 hover:text-white shrink-0 ml-2"
                    title="Launch App"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-violet-500/20 text-violet-300 border border-violet-500/30 shrink-0">
                Gemini API
              </span>
            </div>

            {/* Middle AI Flow Simulation */}
            <div className="relative z-10 space-y-2 font-mono text-xs my-2">
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/[0.08] text-slate-300 flex items-center gap-2">
                <Bot className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="truncate">"Generate adaptive study roadmap & practice prompts..."</span>
              </div>
              <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-500/30 text-blue-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-400 shrink-0 animate-spin" />
                <span className="truncate">Gemini Response streamed in 220ms [Vercel Edge Active]</span>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2">
              <span>Next.js 14 • MongoDB Atlas</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live on Vercel
              </span>
            </div>
          </div>
        );

      case 'team-task-manager':
        return (
          <div className="relative w-full bg-gradient-to-br from-[#0c1424] via-[#0f1b32] to-[#080d1a] p-5 flex flex-col justify-between overflow-hidden border-b border-white/[0.08] group-hover:border-blue-500/30 transition-colors">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl" />

            {/* Browser Chrome Header */}
            <div className="relative flex items-center justify-between z-10 pb-3 mb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              </div>

              {/* URL Address Bar */}
              <div className="flex-1 mx-3 px-3 py-1 rounded-lg bg-slate-900/90 border border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5 truncate">
                  <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="text-slate-300 truncate">{liveUrl?.replace('https://', '') || "team-task-manager01.vercel.app"}</span>
                </div>
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFX.playClick()}
                    className="text-blue-400 hover:text-white shrink-0 ml-2"
                    title="Launch App"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                Vercel + Render
              </span>
            </div>

            {/* Mini Kanban Columns */}
            <div className="relative z-10 grid grid-cols-3 gap-2 font-mono text-[11px] my-2">
              <div className="p-2 rounded-lg bg-slate-900/80 border border-white/[0.06] space-y-1">
                <span className="text-[10px] text-slate-400">Sprint Backlog</span>
                <div className="p-1 rounded bg-slate-800 text-[10px] text-slate-300 truncate">REST API Refactor</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/80 border border-blue-500/30 space-y-1">
                <span className="text-[10px] text-blue-400">In Progress</span>
                <div className="p-1 rounded bg-blue-900/30 text-[10px] text-blue-200 truncate">Overdue Alerts</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/80 border border-emerald-500/30 space-y-1">
                <span className="text-[10px] text-emerald-400">Shipped</span>
                <div className="p-1 rounded bg-emerald-900/30 text-[10px] text-emerald-200 truncate">Vercel Deploy</div>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2">
              <span>Task Delegation & Overdue SLA</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live on Vercel
              </span>
            </div>
          </div>
        );

      case 'university-management-system':
        return (
          <div className="relative w-full bg-gradient-to-br from-[#0B1120] via-[#0E172E] to-[#0A0D18] p-5 flex flex-col justify-between overflow-hidden border-b border-white/[0.08] group-hover:border-blue-500/30 transition-colors">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl" />

            <div className="relative flex items-center justify-between z-10 pb-3 mb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                <span className="ml-2 text-[10px] font-mono text-slate-400">rbac-guard / auth-jwt</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
                12+ REST Endpoints
              </span>
            </div>

            {/* Role Badges Visual */}
            <div className="relative z-10 grid grid-cols-3 gap-2 font-mono text-center my-2">
              <div className="p-2 rounded-lg bg-slate-900/80 border border-white/[0.08]">
                <div className="text-[10px] text-slate-400">Admin</div>
                <div className="text-xs font-semibold text-emerald-400">Full RBAC</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/80 border border-white/[0.08]">
                <div className="text-[10px] text-slate-400">Faculty</div>
                <div className="text-xs font-semibold text-blue-400">Grades & Docs</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/80 border border-white/[0.08]">
                <div className="text-[10px] text-slate-400">Student</div>
                <div className="text-xs font-semibold text-violet-400">Drives & AI</div>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2">
              <span>MySQL Relational DB • JWT Security</span>
              <span className="text-blue-400">Academic Architecture</span>
            </div>
          </div>
        );

      case 'online-voting-system':
      default:
        return (
          <div className="relative w-full bg-gradient-to-br from-[#0c1020] via-[#10172e] to-[#070b16] p-5 flex flex-col justify-between overflow-hidden border-b border-white/[0.08] group-hover:border-blue-500/30 transition-colors">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl" />

            <div className="relative flex items-center justify-between z-10 pb-3 mb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                <span className="ml-2 text-[10px] font-mono text-slate-400">ballot.integrity.client</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                Anti-Duplicate Engine
              </span>
            </div>

            {/* Voting verification visual */}
            <div className="relative z-10 p-3 rounded-xl bg-slate-900/90 border border-white/[0.08] space-y-2 my-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300">Voter Ballot ID #4829</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full w-3/4 rounded-full" />
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                Duplicate vote prevention: [ACTIVE] State lock enforced.
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2">
              <span>React Dynamic State Engine</span>
              <span className="text-cyan-400">Single Vote Enforced</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#06080F] border-t border-white/[0.04]">
      {/* Background ambient lighting */}
      <div className="glow-orb top-20 right-10 w-96 h-96 bg-blue-600/10" />
      <div className="glow-orb bottom-20 left-10 w-80 h-80 bg-violet-600/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Engineered Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="gradient-text-blue-violet">Work & Systems</span>.
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
              Real-world full-stack architectures, live Vercel deployments, and AI-integrated platforms.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 bg-slate-900/60 p-1.5 rounded-2xl border border-white/[0.06] overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundFX.playClick();
                  setSelectedCategory(cat);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with SpotlightCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <SpotlightCard
              key={project.id}
              className="flex flex-col justify-between group hover:border-blue-500/40"
              spotlightColor="rgba(59, 130, 246, 0.15)"
            >
              <div>
                {/* Visual Thumbnail Area */}
                {renderProjectVisual(project.id, project.liveUrl)}

                {/* Project Details Content Area */}
                <div className="p-6 sm:p-7 space-y-4">
                  
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-violet-400" />
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-blue-400 font-mono mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights Bullet Preview */}
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-normal">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions Bar */}
              <div className="p-6 sm:p-7 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] mt-4">
                <button
                  onClick={() => {
                    soundFX.playClick();
                    setActiveProjectModal(project);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <span>Architecture & Deep Dive</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {/* GitHub Button */}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFX.playClick()}
                      className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/[0.08] transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      onClick={() => handlePlaceholderClick('github', project.title)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-white border border-white/[0.08] transition-colors cursor-pointer"
                      title="Repository Placeholder"
                    >
                      <Github className="w-3.5 h-3.5 text-slate-400" />
                      <span>Code</span>
                    </button>
                  )}

                  {/* Live Demo Button */}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFX.playClick()}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-colors cursor-pointer"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => handlePlaceholderClick('demo', project.title)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-xs font-mono text-slate-400 hover:text-slate-200 border border-white/[0.08] transition-colors cursor-pointer"
                      title="Deployment Placeholder"
                    >
                      <span>Preview</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                    </button>
                  )}
                </div>
              </div>

            </SpotlightCard>
          ))}
        </div>

      </div>

      {/* Deep Dive Project Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onPlaceholderClick={handlePlaceholderClick}
      />

      {/* Authentic Link Placeholder Modal */}
      {placeholderInfo.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setPlaceholderInfo({ show: false, type: 'github', projectName: '' })}
          />

          <div className="relative w-full max-w-md rounded-2xl bg-[#0B0F1B] border border-blue-500/30 p-6 shadow-2xl z-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  {placeholderInfo.type === 'github' ? 'Repository Link Placeholder' : 'Live Demo Link Placeholder'}
                </h4>
                <div className="text-xs text-blue-400 font-mono">
                  {placeholderInfo.projectName}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              As per instructions, arbitrary or fake repository URLs are never invented. You can easily plug your active repository or deployment URL into <code className="text-blue-300 bg-slate-900 px-1.5 py-0.5 rounded font-mono">src/data/portfolioData.ts</code>.
            </p>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-white/[0.06] text-xs font-mono text-slate-400">
              Personal GitHub Profile: <br />
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                className="text-blue-400 hover:underline flex items-center gap-1 mt-1 font-semibold"
              >
                <span>github.com/rajat020-cloud</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setPlaceholderInfo({ show: false, type: 'github', projectName: '' })}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800 cursor-pointer"
              >
                Close
              </button>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 cursor-pointer"
              >
                Go to GitHub Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
