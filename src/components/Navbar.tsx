import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileText, ArrowUpRight, Search, Volume2, VolumeX } from 'lucide-react';
import { soundFX } from '../utils/soundEffects';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenTerminal, 
  onOpenResume, 
  onOpenCommandPalette,
  soundEnabled,
  onToggleSound
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    soundFX.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06080F]/85 backdrop-blur-md border-b border-white/[0.08] shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-90"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-500 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <span className="font-display font-black text-white text-base tracking-wider">R</span>
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-40 blur transition-opacity" />
            </div>
            <div className="flex items-baseline">
              <span className="font-display font-extrabold tracking-wide text-white">RAJAT</span>
              <span className="text-blue-400 font-black text-lg leading-none">.</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-slate-900/40 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-3 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-blue-600/20 border border-blue-500/30 shadow-sm shadow-blue-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Command Palette Trigger */}
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenCommandPalette();
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 bg-slate-900/60 hover:bg-slate-800 hover:text-white border border-white/[0.08] transition-all cursor-pointer"
              title="Search and Commands (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden lg:inline text-slate-400">Search</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 border border-white/[0.06]">
                ⌘K
              </kbd>
            </button>

            {/* Sound FX Toggle */}
            <button
              onClick={() => {
                onToggleSound();
              }}
              className={`p-2 rounded-xl text-xs border transition-all cursor-pointer ${
                soundEnabled 
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                  : 'bg-slate-900/60 text-slate-500 border-white/[0.08] hover:text-slate-300'
              }`}
              title={soundEnabled ? "Mute interface sounds" : "Enable interface sounds"}
              aria-label="Toggle Sound"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Interactive Terminal Button */}
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenTerminal();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 bg-slate-900/60 hover:bg-slate-800 hover:text-blue-300 border border-white/[0.08] transition-all cursor-pointer"
              title="Open Interactive Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>CLI</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenResume();
              }}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-md shadow-blue-600/25 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-white/90 group-hover:rotate-6 transition-transform" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-200 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => {
                soundFX.playClick();
                onOpenCommandPalette();
              }}
              className="p-2 rounded-lg text-slate-300 bg-slate-800/80 border border-white/[0.08]"
              aria-label="Open Command Search"
            >
              <Search className="w-4 h-4 text-blue-400" />
            </button>
            <button
              onClick={() => {
                soundFX.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800/80 border border-white/[0.08] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0B0F19]/95 backdrop-blur-xl border-b border-white/[0.08] px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl animate-in slide-in-from-top-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                      : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/[0.08] flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                soundFX.playClick();
                onOpenResume();
              }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
