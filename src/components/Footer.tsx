import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070D] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Subtle top glow */}
      <div className="glow-orb -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-600/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Brand & Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-violet-600 text-white font-black text-sm">
                R
              </div>
              <span className="font-display font-extrabold text-lg text-white tracking-wide">
                RAJAT KATNORIA<span className="text-blue-400">.</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Full-Stack Developer & Software Engineer crafting high-performance, resilient digital experiences and intelligent web architectures.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Software Engineering opportunities</span>
            </div>
          </div>

          {/* Quick Section Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About the Engineer</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Technical Skills</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors">Experience (AVBT)</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Featured Projects</a></li>
              <li><a href="#education" className="hover:text-blue-400 transition-colors">Education & Honors</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect & Interaction */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Connect & Developer Shell
            </h4>
            
            <div className="flex items-center space-x-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08] hover:border-blue-500/40 text-slate-300 hover:text-white transition-all hover:-translate-y-0.5"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08] hover:border-blue-500/40 text-slate-300 hover:text-white transition-all hover:-translate-y-0.5"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08] hover:border-blue-500/40 text-slate-300 hover:text-white transition-all hover:-translate-y-0.5"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="px-3 py-2 rounded-xl bg-slate-900 border border-white/[0.08] hover:border-blue-500/40 text-slate-300 hover:text-blue-300 transition-all text-xs font-mono flex items-center gap-1.5"
                title="Open Terminal"
              >
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>Launch CLI</span>
              </button>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/40 border border-white/[0.04] text-[11px] font-mono text-slate-400 space-y-1">
              <div>Runtime: React 18 + TypeScript + Tailwind</div>
              <div>Location: Himachal Pradesh, India</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Rajat Katnoria. Engineered with precision.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
