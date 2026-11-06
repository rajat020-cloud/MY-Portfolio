import React, { useState } from 'react';
import { 
  Award, 
  Cpu, 
  Cloud, 
  Code2, 
  ShieldCheck, 
  Flame, 
  CheckCircle2 
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Technical' | 'Leadership'>('All');

  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'Award': return <Award className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-rose-400" />;
      default: return <Award className="w-5 h-5 text-blue-400" />;
    }
  };

  const filteredCerts = filter === 'All'
    ? certificationsData
    : certificationsData.filter(c => c.category === filter);

  return (
    <section id="certifications" className="relative py-24 sm:py-32 bg-[#06080F] border-t border-white/[0.04]">
      {/* Background ambient lighting */}
      <div className="glow-orb top-20 left-10 w-96 h-96 bg-violet-600/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-400 tracking-wider uppercase mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Accreditations & Honors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Certifications & <span className="gradient-text-blue-violet">Leadership</span>.
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
              Demonstrated technical proficiencies, cloud infrastructure credentials, and core student leadership honors.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-slate-900/60 p-1.5 rounded-2xl border border-white/[0.06]">
            {(['All', 'Technical', 'Leadership'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Compact & Professional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#090D18]/90 border border-white/[0.08] p-6 hover:border-blue-500/35 hover:bg-[#0E1527] transition-all duration-300 shadow-xl group flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-slate-800/80 border border-white/[0.08] group-hover:scale-105 transition-transform">
                    {getCertIcon(cert.icon)}
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${
                    cert.category === 'Technical'
                      ? 'bg-blue-500/10 text-blue-300 border-blue-500/20'
                      : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                  }`}>
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                  {cert.title}
                </h3>
                
                <div className="text-xs font-semibold text-blue-400 mt-1 mb-3">
                  {cert.issuer}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Verified badge */}
              <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Credential
                </span>
                <span className="text-slate-400">Honors</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
