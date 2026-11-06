import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Cloud, 
  Binary, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-indigo-400" />;
      case 'Server': return <Server className="w-5 h-5 text-violet-400" />;
      case 'Database': return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'Binary': return <Binary className="w-5 h-5 text-emerald-400" />;
      default: return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  const categoriesList = ['All', ...skillCategories.map(c => c.title)];

  const displayedCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.title === selectedCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#06080F] border-t border-white/[0.04]">
      {/* Ambient background glows */}
      <div className="glow-orb top-10 left-1/4 w-80 h-80 bg-blue-600/10" />
      <div className="glow-orb bottom-10 right-1/4 w-96 h-96 bg-violet-600/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400 tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Specialized in Modern <span className="gradient-text-blue-violet">Full-Stack Tech</span>.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Organized across core computer science foundations, frontend engineering, backend services, and production deployment environments.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 border border-blue-400/40'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#090D18]/90 border border-white/[0.08] p-6 hover:border-blue-500/35 hover:bg-[#0E1526] transition-all duration-300 shadow-xl group flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/[0.06]">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/[0.08] group-hover:scale-105 transition-transform">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {category.title}
                    </h3>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {category.skills.length} core competencies
                    </span>
                  </div>
                </div>

                {/* Skills Badges List */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] hover:border-white/[0.09] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-sm font-medium text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      
                      {skill.tag && (
                        <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/60 border border-white/[0.04]">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Production ready</span>
                <span className="text-emerald-400">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
