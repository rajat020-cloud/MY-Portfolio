import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { personalInfo, projectsData, skillCategories, experienceData } from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface CommandHistory {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ 
  isOpen, 
  onClose,
  onOpenResume 
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <div className="text-blue-400 font-bold">Rajat Katnoria — Interactive Developer CLI v2.4</div>
          <div className="text-slate-400">Type <span className="text-emerald-300 font-semibold">'help'</span> to see available commands or click the shortcut chips below.</div>
        </div>
      )
    }
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1.5 text-xs">
            <div className="text-white font-semibold">Available Commands:</div>
            <div className="grid grid-cols-2 gap-2 text-slate-300">
              <div><span className="text-emerald-400 font-mono">about</span> — Overview of Rajat</div>
              <div><span className="text-emerald-400 font-mono">skills</span> — Full technical stack</div>
              <div><span className="text-emerald-400 font-mono">projects</span> — Featured systems</div>
              <div><span className="text-emerald-400 font-mono">experience</span> — Professional history</div>
              <div><span className="text-emerald-400 font-mono">contact</span> — Get in touch directly</div>
              <div><span className="text-emerald-400 font-mono">resume</span> — Open structured resume</div>
              <div><span className="text-emerald-400 font-mono">clear</span> — Reset terminal output</div>
              <div><span className="text-yellow-400 font-mono">sudo hire</span> — Fast-track recruiter action</div>
            </div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="text-slate-300 space-y-1 text-xs">
            <p className="font-semibold text-white">{personalInfo.name} — {personalInfo.title}</p>
            <p className="text-slate-400">{personalInfo.bio}</p>
            <p className="text-blue-300">Location: {personalInfo.location} | Chitkara Univ CSE (2023–2027)</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs">
            {skillCategories.map((c, i) => (
              <div key={i} className="text-slate-300">
                <span className="text-blue-400 font-semibold">{c.title}:</span>{' '}
                <span className="text-slate-400">{c.skills.map(s => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs">
            {projectsData.map((p, i) => (
              <div key={i} className="p-2 rounded bg-slate-900 border border-white/[0.06]">
                <div className="text-white font-bold">{p.title} <span className="text-blue-400 font-normal">({p.techStack.slice(0, 3).join(', ')})</span></div>
                <div className="text-slate-400 mt-0.5">{p.description}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        output = (
          <div className="space-y-2 text-xs">
            {experienceData.map((e, i) => (
              <div key={i} className="text-slate-300">
                <div className="font-semibold text-white">{e.role} @ {e.company} ({e.period})</div>
                <div className="text-slate-400">{e.responsibilities[0]}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <div>Email: <a href={`mailto:${personalInfo.email}`} className="text-blue-400 underline">{personalInfo.email}</a></div>
            <div>LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 underline">{personalInfo.linkedin}</a></div>
            <div>GitHub: <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-blue-400 underline">{personalInfo.github}</a></div>
          </div>
        );
        break;

      case 'resume':
        onOpenResume();
        output = <div className="text-emerald-400 text-xs">Launching structured resume viewer...</div>;
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'sudo hire':
      case 'hire':
        output = (
          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-900/40 to-violet-900/40 border border-blue-500/40 text-xs space-y-2">
            <div className="font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>Permission granted: Initiating priority recruitment line!</span>
            </div>
            <p className="text-slate-300">
              Rajat is actively available for Software Engineering and Full-Stack positions.
            </p>
            <div className="flex gap-2">
              <a
                href={`mailto:${personalInfo.email}?subject=Job Opportunity for Rajat Katnoria`}
                className="px-3 py-1 rounded bg-blue-600 text-white font-semibold text-xs"
              >
                Send Direct Offer / Inquiry
              </a>
            </div>
          </div>
        );
        break;

      default:
        output = (
          <div className="text-rose-400 text-xs">
            Command not recognized: '{trimmed}'. Type <span className="text-white font-mono">'help'</span> for a list of valid commands.
          </div>
        );
        break;
    }

    setHistory(prev => [
      ...prev,
      {
        id: Math.random().toString(),
        command: cmdText,
        output
      }
    ]);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Terminal Window */}
      <div 
        className={`relative w-full rounded-2xl bg-[#090D18]/95 border border-white/[0.12] shadow-2xl flex flex-col overflow-hidden z-10 transition-all duration-300 ${
          isMaximized ? 'h-[92vh] max-w-6xl' : 'h-[580px] max-w-3xl'
        }`}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0D1222] border-b border-white/[0.08] select-none">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer" onClick={() => setHistory([])} title="Clear" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer" onClick={() => setIsMaximized(!isMaximized)} />
            <span className="ml-2 text-xs font-mono text-slate-300 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
              <span>rajat@portfolio-sh: ~ (interactive shell)</span>
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 rounded text-slate-400 hover:text-white"
              aria-label="Maximize terminal"
            >
              {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white"
              aria-label="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="px-4 py-2 bg-[#0A0F1D] border-b border-white/[0.04] flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono no-scrollbar">
          <span className="text-slate-400 mr-1">Quick:</span>
          {['help', 'about', 'skills', 'projects', 'experience', 'contact', 'resume', 'sudo hire'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-blue-600/30 text-slate-300 hover:text-white border border-white/[0.06] transition-colors whitespace-nowrap"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Console logs output */}
        <div className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-3">
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-2 text-blue-400">
                <span className="text-emerald-400">guest@rajat-portfolio:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
              <div className="pl-4">
                {item.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Bar */}
        <form onSubmit={handleSubmit} className="p-3 bg-[#0D1222] border-t border-white/[0.08] flex items-center gap-2">
          <span className="text-emerald-400 font-mono text-xs hidden sm:inline">guest@rajat-portfolio:~$</span>
          <span className="text-blue-400 font-mono text-xs sm:hidden">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent font-mono text-xs text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            type="submit"
            className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs flex items-center gap-1 transition-colors"
          >
            <span>Run</span>
            <CornerDownLeft className="w-3 h-3" />
          </button>
        </form>

      </div>
    </div>
  );
};
