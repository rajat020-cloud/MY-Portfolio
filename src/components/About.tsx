import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  Cpu, 
  Database, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  Code, 
  Terminal,
  UserCheck,
  Clock,
  Activity,
  Wifi
} from 'lucide-react';
import { personalInfo, highlightCards } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const About: React.FC = () => {
  // Live local time in Himachal Pradesh, India
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Database': return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-violet-400" />;
      default: return <Code className="w-5 h-5 text-blue-400" />;
    }
  };

  const marqueeSkills = [
    "React.js", "Next.js", "Node.js", "Express.js", "TypeScript", "MySQL", 
    "MongoDB", "Gemini API", "Meta WhatsApp API", "RESTful APIs", "JWT Auth", 
    "Tailwind CSS", "Vercel", "Git"
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-[#06080F]">
      {/* Background ambient lighting */}
      <div className="glow-orb top-1/4 -right-32 w-96 h-96 bg-blue-600/10" />
      <div className="glow-orb bottom-10 -left-20 w-80 h-80 bg-violet-600/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>About The Engineer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering scalable systems with a{' '}
            <span className="gradient-text-blue-violet">problem-solving</span> mindset.
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            A software engineering undergraduate combining rigorous computer science fundamentals with modern full-stack development and intelligent AI integrations.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Item 1: High-Definition Photograph Card (5 Cols) */}
          <SpotlightCard className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between" spotlightColor="rgba(59, 130, 246, 0.2)">
            <div className="space-y-4">
              
              {/* Photo Frame */}
              <div className="relative w-full aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden border-2 border-white/[0.12] group shadow-2xl">
                <img 
                  src={personalInfo.avatarUrl || "/rajat-katnoria.jpg"} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D18] via-transparent to-transparent opacity-85" />

                {/* Overlaid Status Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-emerald-500/40 text-[11px] font-medium text-emerald-400 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for Roles</span>
                </div>

                {/* Bottom Tag */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#090D18]/90 backdrop-blur-md border border-white/[0.1] flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">{personalInfo.name}</div>
                    <div className="text-xs text-blue-300 font-mono">Full-Stack Engineer</div>
                  </div>
                  <span className="text-xs font-mono text-slate-400">HP, India</span>
                </div>
              </div>

              {/* Education and Location quick attributes */}
              <div className="space-y-2 pt-2 border-t border-white/[0.08] text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                    University:
                  </span>
                  <span className="font-medium text-white">Chitkara University (B.E. CSE)</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    Base:
                  </span>
                  <span className="font-medium text-white">{personalInfo.location}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-4 h-4 text-violet-400" />
                    Graduation:
                  </span>
                  <span className="font-mono text-blue-300">Class of 2027</span>
                </div>
              </div>

            </div>

            {/* Quick Authentic Numbers Grid */}
            <div className="grid grid-cols-2 gap-2.5 mt-6 pt-4 border-t border-white/[0.08]">
              {personalInfo.stats.slice(0, 2).map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-white gradient-text-blue-violet">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </SpotlightCard>

          {/* Right Column: Telemetry + Narrative + Bento Grid Highlights (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Bento Item 2: Live Developer Telemetry Widget */}
            <SpotlightCard className="p-6 border-blue-500/20" spotlightColor="rgba(99, 102, 241, 0.2)">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Activity className="w-4 h-4 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white uppercase tracking-wider">Developer Telemetry</div>
                    <div className="text-[11px] text-slate-400">Live system status & current time</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-blue-300 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-white/[0.08]">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>{currentTime || "IST Active"} (IST)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/50 border border-white/[0.04] space-y-1">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Deployment Status</span>
                  </span>
                  <span className="text-white font-semibold">100% Operational (Vercel & Render)</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/50 border border-white/[0.04] space-y-1">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                    <span>Current Active Focus</span>
                  </span>
                  <span className="text-white font-semibold">AVBT WhatsApp CRM & Gemini AI</span>
                </div>
              </div>

              {/* Extended Bio Narrative */}
              <div className="pt-4 text-slate-300 text-xs sm:text-sm leading-relaxed space-y-2">
                <p>
                  Pursuing my B.E. in Computer Science & Engineering at Chitkara University, I specialize in building scalable web architectures, clean REST APIs, and responsive UIs with React and Next.js.
                </p>
                <p>
                  At AVBT Technologies, I engineer Meta WhatsApp CRM webhooks and optimize Prajnaa Market storefront checkout workflows.
                </p>
              </div>
            </SpotlightCard>

            {/* Bento Item 3: Infinite Animated Skill Marquee */}
            <div className="rounded-2xl bg-[#090D18]/80 border border-white/[0.08] p-3 overflow-hidden">
              <div className="flex items-center gap-3 whitespace-nowrap overflow-x-hidden">
                <span className="text-[11px] font-mono uppercase text-blue-400 font-semibold shrink-0 px-2">Core Stack:</span>
                <div className="flex items-center gap-2 animate-pulse-subtle">
                  {marqueeSkills.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/[0.06] shrink-0"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bento Item 4: 4 Specialized Competency Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlightCards.map((card, idx) => (
                <SpotlightCard
                  key={idx}
                  className="p-5 hover:border-blue-500/35 transition-all duration-300 group"
                  spotlightColor="rgba(59, 130, 246, 0.15)"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/[0.06] group-hover:scale-110 transition-transform">
                      {getIcon(card.icon)}
                    </div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {card.title}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {card.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {card.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono text-slate-300 bg-white/[0.04] border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
