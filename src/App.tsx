import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ResumeModal } from './components/ResumeModal';
import { CommandPalette } from './components/CommandPalette';
import { ParticleBackground } from './components/ParticleBackground';
import { Terminal, ArrowUp, Command } from 'lucide-react';
import { soundFX } from './utils/soundEffects';

export const App: React.FC = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(soundFX.enabled);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Global key listener for shortcuts:
  // - Ctrl + / or Cmd + / : Terminal
  // - Ctrl + K or Cmd + K : Command Palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        setTerminalOpen(prev => !prev);
      }
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      }
    };

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleSound = () => {
    const nextState = soundFX.toggle();
    setSoundEnabled(nextState);
  };

  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#06080F] text-slate-100 selection:bg-blue-600/30 selection:text-blue-200">
      
      {/* Interactive Constellation Particle Canvas Background */}
      <ParticleBackground />

      {/* Sticky Premium Navbar */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onOpenTerminal={() => setTerminalOpen(true)}
        />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Agency-Grade Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Raycast / Linear-style Command Palette (Ctrl + K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Interactive Developer Terminal Modal (Ctrl + /) */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenResume={() => {
          setTerminalOpen(false);
          setResumeOpen(true);
        }}
      />

      {/* Structured Curriculum Vitae / Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Floating Bottom Quick Action Triggers */}
      <div className="floating-controls fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3 print:hidden">
        {/* Back to top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-[#0F1523]/90 hover:bg-[#161D2E] text-slate-300 hover:text-white border border-white/[0.1] shadow-xl hover:shadow-blue-500/10 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            aria-label="Back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Quick Command Palette Launcher */}
        <button
          onClick={() => {
            soundFX.playClick();
            setCommandPaletteOpen(true);
          }}
          className="p-3 rounded-2xl bg-[#0F1523]/90 hover:bg-[#161D2E] text-slate-300 hover:text-blue-300 border border-white/[0.1] shadow-xl hover:shadow-blue-500/10 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          aria-label="Open Command Menu"
          title="Command Palette (Ctrl + K)"
        >
          <Command className="w-4 h-4 text-blue-400" />
        </button>

        {/* Floating Terminal Trigger */}
        <button
          onClick={() => {
            soundFX.playClick();
            setTerminalOpen(true);
          }}
          className="group relative flex items-center gap-2 p-3.5 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Open Interactive CLI"
          title="Interactive Terminal (Ctrl + /)"
        >
          <Terminal className="w-5 h-5 group-hover:rotate-6 transition-transform" />
          <span className="hidden sm:inline text-xs font-mono font-semibold pr-1">CLI</span>
        </button>
      </div>

    </div>
  );
};

export default App;
