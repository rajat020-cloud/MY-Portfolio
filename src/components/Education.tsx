import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 sm:py-32 bg-[#06080F] border-t border-white/[0.04]">
      {/* Background ambient lighting */}
      <div className="glow-orb top-1/4 -right-20 w-80 h-80 bg-blue-600/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Formal <span className="gradient-text-blue-violet">Education</span>.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Rigorous undergraduate engineering program in computer science and software development.
          </p>
        </div>

        {/* Minimal Timeline Card */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#090D18]/90 border border-white/[0.09] p-6 sm:p-8 hover:border-blue-500/35 hover:bg-[#0E1527] transition-all duration-300 shadow-2xl group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {edu.status}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 group-hover:text-blue-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="text-sm font-semibold text-slate-300">
                      {edu.institution}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end space-y-1 text-xs sm:text-sm font-mono text-slate-400 pl-14 sm:pl-0">
                  <div className="flex items-center gap-1.5 text-blue-300">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Coursework & Focus Points */}
              <div className="pt-6 space-y-3">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  <span>Curriculum & Applied Disciplines</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {edu.highlights.map((item, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
