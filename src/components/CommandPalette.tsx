import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Terminal, 
  FileText, 
  ExternalLink, 
  Layers, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Github, 
  Linkedin, 
  Volume2, 
  VolumeX, 
  Sparkles,
  Command
} from 'lucide-react';
import { personalInfo, projectsData } from '../data/portfolioData';
import { soundFX } from '../utils/soundEffects';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

interface PaletteAction {
  id: string;
  title: string;
  category: 'Navigation' | 'Projects' | 'Developer Tools' | 'Social & Direct';
  icon: React.ReactNode;
  shortcut?: string;
  run: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenTerminal,
  onOpenResume,
  soundEnabled,
  onToggleSound,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      soundFX.playClick();
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const scrollTo = (id: string) => {
    onClose();
    soundFX.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const actions: PaletteAction[] = [
    // Navigation
    { id: 'nav-home', title: 'Go to Home / Hero', category: 'Navigation', icon: <Sparkles className="w-4 h-4 text-blue-400" />, run: () => scrollTo('home') },
    { id: 'nav-about', title: 'Go to About the Engineer', category: 'Navigation', icon: <Layers className="w-4 h-4 text-indigo-400" />, run: () => scrollTo('about') },
    { id: 'nav-skills', title: 'Explore Technical Skills', category: 'Navigation', icon: <Layers className="w-4 h-4 text-cyan-400" />, run: () => scrollTo('skills') },
    { id: 'nav-experience', title: 'View Experience at AVBT Technologies', category: 'Navigation', icon: <Briefcase className="w-4 h-4 text-violet-400" />, run: () => scrollTo('experience') },
    { id: 'nav-projects', title: 'Browse Featured Projects', category: 'Navigation', icon: <Sparkles className="w-4 h-4 text-blue-400" />, run: () => scrollTo('projects') },
    { id: 'nav-education', title: 'View Chitkara University Education', category: 'Navigation', icon: <GraduationCap className="w-4 h-4 text-emerald-400" />, run: () => scrollTo('education') },
    { id: 'nav-contact', title: 'Send Direct Message', category: 'Navigation', icon: <Mail className="w-4 h-4 text-rose-400" />, run: () => scrollTo('contact') },

    // Live Deployments
    { id: 'proj-ai', title: 'Open AI Learning Platform (Live Vercel)', category: 'Projects', icon: <ExternalLink className="w-4 h-4 text-violet-400" />, run: () => { window.open(projectsData[0].liveUrl, '_blank'); onClose(); } },
    { id: 'proj-task', title: 'Open Team Task Manager (Live Vercel)', category: 'Projects', icon: <ExternalLink className="w-4 h-4 text-emerald-400" />, run: () => { window.open(projectsData[2].liveUrl, '_blank'); onClose(); } },
    { id: 'proj-prajnaa', title: 'Visit Prajnaa Market Live Storefront', category: 'Projects', icon: <ExternalLink className="w-4 h-4 text-blue-400" />, run: () => { window.open('https://market.prajnaa.in', '_blank'); onClose(); } },

    // Developer Tools
    { id: 'tool-terminal', title: 'Launch Interactive Developer CLI', category: 'Developer Tools', icon: <Terminal className="w-4 h-4 text-yellow-400" />, shortcut: 'Ctrl + /', run: () => { onClose(); onOpenTerminal(); } },
    { id: 'tool-resume', title: 'View & Print Curriculum Vitae (PDF)', category: 'Developer Tools', icon: <FileText className="w-4 h-4 text-blue-400" />, run: () => { onClose(); onOpenResume(); } },
    { id: 'tool-sound', title: soundEnabled ? 'Mute Interface Sound Effects' : 'Enable Interface Sound Effects', category: 'Developer Tools', icon: soundEnabled ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />, run: () => onToggleSound() },

    // Social & Direct
    { id: 'social-github', title: 'Open GitHub Profile (rajat020-cloud)', category: 'Social & Direct', icon: <Github className="w-4 h-4 text-slate-300" />, run: () => { window.open(personalInfo.github, '_blank'); onClose(); } },
    { id: 'social-linkedin', title: 'Open LinkedIn Profile (rajatkatnoria)', category: 'Social & Direct', icon: <Linkedin className="w-4 h-4 text-blue-400" />, run: () => { window.open(personalInfo.linkedin, '_blank'); onClose(); } },
    { id: 'social-email', title: `Copy Email (${personalInfo.email})`, category: 'Social & Direct', icon: <Mail className="w-4 h-4 text-emerald-400" />, run: () => { navigator.clipboard.writeText(personalInfo.email); onClose(); } },
  ];

  const filtered = actions.filter(a => 
    a.title.toLowerCase().includes(query.toLowerCase()) || 
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (filtered.length || 1));
      soundFX.playHover();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filtered.length) % (filtered.length || 1));
      soundFX.playHover();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].run();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Palette Container */}
      <div 
        className="relative w-full max-w-xl rounded-2xl bg-[#090D18]/95 border border-white/[0.14] shadow-2xl overflow-hidden z-10 backdrop-blur-2xl animate-in zoom-in-95 duration-150"
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08] bg-[#0C1222]">
          <Search className="w-4 h-4 text-blue-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search (e.g. 'resume', 'task manager', 'skills')..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-sans"
          />
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono font-semibold text-slate-400 bg-slate-800 rounded border border-white/[0.08]">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-400 font-mono">
              No matching commands found for "{query}".
            </div>
          ) : (
            filtered.map((action, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={action.id}
                  onClick={() => action.run()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600/20 text-white border border-blue-500/30 shadow-sm'
                      : 'text-slate-300 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-slate-800/80 border border-white/[0.06]">
                      {action.icon}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-medium">{action.title}</div>
                      <div className="text-[10px] font-mono text-slate-400">{action.category}</div>
                    </div>
                  </div>

                  {action.shortcut && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-white/[0.08]">
                      {action.shortcut}
                    </span>
                  )}
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2 bg-[#060810] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span>Navigate: <kbd className="px-1 py-0.5 rounded bg-slate-800 text-slate-300">↑</kbd> <kbd className="px-1 py-0.5 rounded bg-slate-800 text-slate-300">↓</kbd></span>
            <span>•</span>
            <span>Select: <kbd className="px-1 py-0.5 rounded bg-slate-800 text-slate-300">↵</kbd></span>
          </div>
          <span className="text-blue-400 font-semibold flex items-center gap-1">
            <Command className="w-3 h-3" />
            <span>Command Menu</span>
          </span>
        </div>

      </div>
    </div>
  );
};
