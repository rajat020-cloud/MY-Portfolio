import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  MessageSquare,
  ShoppingBag,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#06080F] border-t border-white/[0.04] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="glow-orb top-1/3 -left-32 w-96 h-96 bg-blue-600/10" />
      <div className="glow-orb bottom-10 right-10 w-80 h-80 bg-violet-600/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work History & Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text-blue-violet">Experience</span>.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Delivering production-level solutions, enterprise integrations, and CRM automation for client platforms.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-px bg-gradient-to-b from-blue-500/50 via-violet-500/30 to-transparent" />

          <div className="space-y-8">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="relative md:pl-20">
                
                {/* Timeline Node Badge on Desktop */}
                <div className="hidden md:flex absolute left-4 -translate-x-1/2 top-7 w-8 h-8 rounded-full bg-[#0B0F1B] border-2 border-blue-500 items-center justify-center shadow-lg shadow-blue-500/30 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
                </div>

                {/* Experience Card */}
                <div className="rounded-3xl bg-[#090D18]/90 border border-white/[0.1] p-6 sm:p-8 hover:border-blue-500/40 hover:bg-[#0E1527] transition-all duration-300 shadow-2xl group">
                  
                  {/* Top Bar: Role & Company */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                    <div>
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400 mb-2">
                        <span>{exp.type}</span>
                        <span>•</span>
                        <span>Active Engagement</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-base font-semibold text-slate-300 mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end space-y-1 text-xs sm:text-sm font-mono text-slate-400">
                      <div className="flex items-center gap-1.5 text-blue-300">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Impact Highlights Grid */}
                  <div className="py-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 mt-0.5">
                          <ShoppingBag className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">Prajnaa Market UI</div>
                          <div className="text-xs text-slate-400 mt-0.5">Enhanced storefront checkout & shopping workflows for better buyer conversion.</div>
                        </div>
                      </div>

                      {exp.liveUrl && (
                        <a
                          href={exp.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 hover:text-white border border-blue-500/30 text-xs font-mono font-medium transition-colors w-fit"
                        >
                          <span>Visit Prajnaa Market</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-xl bg-violet-500/10 text-violet-400 mt-0.5">
                          <MessageSquare className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">Meta WhatsApp CRM</div>
                          <div className="text-xs text-slate-400 mt-0.5">Real-time Cloud APIs for automated order dispatch and customer communications.</div>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-[11px] font-mono w-fit">
                        <Sparkles className="w-3 h-3 text-violet-400" />
                        <span>In Active Development</span>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Responsibilities List */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Key Deliverables & Responsibilities:
                    </h4>
                    <div className="space-y-2.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-3 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 mr-2">Technologies:</span>
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-300 bg-slate-800/80 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
