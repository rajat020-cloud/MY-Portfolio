import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles,
  MapPin,
  Code2,
  Bot,
  Play
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { soundFX } from '../utils/soundEffects';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [activeTab, setActiveTab] = useState<'code' | 'arch' | 'ai'>('code');
  const [copied, setCopied] = useState(false);
  const [aiStreaming, setAiStreaming] = useState(false);
  const [streamedText, setStreamedText] = useState('');

  // Auto-typed animated text phrases with dynamic gradient colors
  const typingPhrases = [
    {
      text: "Digital Experiences That Make an Impact.",
      gradient: "from-blue-400 via-indigo-300 to-violet-400",
      glow: "shadow-blue-500/50",
      cursor: "bg-blue-400"
    },
    {
      text: "Scalable Full-Stack Web Architectures.",
      gradient: "from-cyan-400 via-teal-300 to-emerald-400",
      glow: "shadow-emerald-500/50",
      cursor: "bg-emerald-400"
    },
    {
      text: "Intelligent Systems with Gemini AI.",
      gradient: "from-violet-400 via-fuchsia-300 to-pink-400",
      glow: "shadow-fuchsia-500/50",
      cursor: "bg-fuchsia-400"
    },
    {
      text: "Enterprise WhatsApp CRM Solutions.",
      gradient: "from-emerald-400 via-cyan-300 to-sky-400",
      glow: "shadow-cyan-500/50",
      cursor: "bg-cyan-400"
    },
    {
      text: "High-Performance RESTful Microservices.",
      gradient: "from-amber-400 via-orange-300 to-rose-400",
      glow: "shadow-amber-500/50",
      cursor: "bg-amber-400"
    }
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor timer
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(prev => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // Smooth typewriter engine with pauses
  useEffect(() => {
    const currentText = typingPhrases[phraseIndex].text;

    if (!isDeleting && subIndex === currentText.length) {
      // Pause when fully typed before backspacing
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting && subIndex === 0) {
      // Switch phrase and start typing forward
      setIsDeleting(false);
      setPhraseIndex(prev => (prev + 1) % typingPhrases.length);
      return;
    }

    const typeSpeed = isDeleting ? 30 : 60;
    const typeTimeout = setTimeout(() => {
      setSubIndex(prev => prev + (isDeleting ? -1 : 1));
    }, typeSpeed);

    return () => clearTimeout(typeTimeout);
  }, [subIndex, isDeleting, phraseIndex]);

  // Gemini AI Stream Simulator
  const aiPromptResponse = `Gemini-1.5-Pro: Context analyzed for Rajat Katnoria.
✓ Stack: React 18, Next.js, Node.js, Express, MySQL, MongoDB.
✓ Real-world Impact: Prajnaa Market Storefront & Meta WhatsApp CRM.
✓ Recommendation: Ideal engineer for high-growth software engineering teams.`;

  const triggerAiStream = () => {
    if (aiStreaming) return;
    soundFX.playClick();
    setAiStreaming(true);
    setStreamedText('');
    let idx = 0;
    const timer = setInterval(() => {
      idx += 3;
      setStreamedText(aiPromptResponse.slice(0, idx));
      if (idx >= aiPromptResponse.length) {
        clearInterval(timer);
        setAiStreaming(false);
        soundFX.playChime();
      }
    }, 25);
  };

  const codeSnippets = {
    code: `// Rajat Katnoria — Full-Stack Engineer
import { GeminiAI } from '@google/ai';
import { WhatsAppCRM } from '@avbt/crm';
import { Router } from 'express';

export class PortfolioController {
  private engineer = {
    name: "Rajat Katnoria",
    role: "Full-Stack Developer",
    status: "Available for Opportunities",
    coreStack: ["React", "Next.js", "Node.js", "MySQL", "MongoDB"],
    location: "Himachal Pradesh, India"
  };

  async deploySolution() {
    return {
      mission: "Transform complex challenges into high-performance web solutions",
      performance: "Optimized",
      security: "JWT + RBAC Enforced",
      readyToBuild: true
    };
  }
}`,
    arch: `{
  "system": "Full-Stack Architecture",
  "clientTier": {
    "frameworks": ["React.js", "Next.js", "Tailwind CSS"],
    "state": "Modular Context & Hooks",
    "deployment": "Vercel Edge Network"
  },
  "serviceTier": {
    "runtime": "Node.js / Express.js",
    "protocols": ["RESTful APIs", "Meta WhatsApp Cloud Webhooks"],
    "auth": "JWT with Role-Based Access Control"
  },
  "dataTier": {
    "relational": "MySQL (ACID Compliant)",
    "document": "MongoDB Atlas",
    "caching": "In-Memory / Redis ready"
  }
}`
  };

  const handleCopy = () => {
    soundFX.playClick();
    const content = activeTab === 'code' ? codeSnippets.code : activeTab === 'arch' ? codeSnippets.arch : streamedText || aiPromptResponse;
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Ambient Lighting Orbs */}
      <div className="glow-orb -top-20 -left-20 w-96 h-96 bg-blue-600/20" />
      <div className="glow-orb top-1/3 -right-20 w-[450px] h-[450px] bg-violet-600/15" />
      <div className="glow-orb bottom-10 left-1/3 w-80 h-80 bg-cyan-500/10" />

      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Branding & Introduction */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">
                {personalInfo.badge}
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                {personalInfo.location}
              </span>
            </div>

            {/* Dynamic Auto-Typed Headline with Changing Gradient Colors */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14] min-h-[120px] sm:min-h-[145px] lg:min-h-[165px]">
                Building{' '}
                <span 
                  className={`bg-gradient-to-r ${typingPhrases[phraseIndex].gradient} bg-clip-text text-transparent transition-all duration-300 drop-shadow-sm`}
                >
                  {typingPhrases[phraseIndex].text.substring(0, subIndex)}
                </span>
                <span 
                  className={`inline-block w-1 sm:w-1.5 h-8 sm:h-11 lg:h-13 ml-1.5 rounded-full ${typingPhrases[phraseIndex].cursor} ${typingPhrases[phraseIndex].glow} shadow-lg transition-colors duration-300 align-middle ${blink ? 'opacity-100' : 'opacity-0'}`} 
                />
              </h1>
            </div>

            {/* Sub-headline / Identity */}
            <div className="flex items-center gap-2 text-slate-300 font-medium text-base sm:text-lg">
              <span className="text-white font-semibold">{personalInfo.name}</span>
              <span className="text-blue-400">•</span>
              <span className="text-blue-300/90 font-mono text-sm sm:text-base">{personalInfo.title}</span>
            </div>

            {/* Professional Introduction */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={() => soundFX.playClick()}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => {
                  soundFX.playClick();
                  onOpenResume();
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-white/[0.12] hover:border-blue-500/40 shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Proof & Direct Channels */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider">Connect:</span>
                
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-blue-600/20 text-slate-300 hover:text-white border border-white/[0.08] hover:border-blue-500/40 transition-all hover:-translate-y-0.5"
                  aria-label="GitHub Profile"
                  title="GitHub: rajat020-cloud"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-blue-600/20 text-slate-300 hover:text-white border border-white/[0.08] hover:border-blue-500/40 transition-all hover:-translate-y-0.5"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: rajatkatnoria"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  onClick={() => soundFX.playClick()}
                  className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-blue-600/20 text-slate-300 hover:text-white border border-white/[0.08] hover:border-blue-500/40 transition-all hover:-translate-y-0.5"
                  aria-label="Send Email"
                  title={`Email: ${personalInfo.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Quick CLI launcher hint */}
              <button
                onClick={() => {
                  soundFX.playClick();
                  onOpenTerminal();
                }}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-300 transition-colors group cursor-pointer"
              >
                <Terminal className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400" />
                <span>Interactive CLI</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-white/[0.08]">Ctrl + /</span>
              </button>
            </div>

          </div>

          {/* Right Column: Sophisticated Developer Workspace Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-xl opacity-75" />

              {/* IDE / Terminal Window Container */}
              <div className="relative rounded-2xl bg-[#090D16]/95 border border-white/[0.12] shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl">
                
                {/* Window Titlebar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0D121F] border-b border-white/[0.08]">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600/40" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/40" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/40" />
                    <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">rajat-workspace ~ active</span>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-white/[0.06] transition-colors cursor-pointer"
                    title="Copy snippet"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Tabs Bar */}
                <div className="flex items-center px-2 pt-2 bg-[#0A0E1A] border-b border-white/[0.06] space-x-1 overflow-x-auto text-xs font-mono no-scrollbar">
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      setActiveTab('code');
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg transition-colors border-t border-x cursor-pointer ${
                      activeTab === 'code'
                        ? 'bg-[#090D16] text-blue-400 border-white/[0.1] border-b-transparent'
                        : 'text-slate-400 hover:text-slate-200 border-transparent'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>RajatController.ts</span>
                  </button>

                  <button
                    onClick={() => {
                      soundFX.playClick();
                      setActiveTab('arch');
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg transition-colors border-t border-x cursor-pointer ${
                      activeTab === 'arch'
                        ? 'bg-[#090D16] text-violet-400 border-white/[0.1] border-b-transparent'
                        : 'text-slate-400 hover:text-slate-200 border-transparent'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                    <span>Architecture.json</span>
                  </button>

                  <button
                    onClick={() => {
                      soundFX.playClick();
                      setActiveTab('ai');
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg transition-colors border-t border-x cursor-pointer ${
                      activeTab === 'ai'
                        ? 'bg-[#090D16] text-emerald-400 border-white/[0.1] border-b-transparent'
                        : 'text-slate-400 hover:text-slate-200 border-transparent'
                    }`}
                  >
                    <Bot className="w-3.5 h-3.5 text-emerald-400" />
                    <span>GeminiLive.ai</span>
                  </button>
                </div>

                {/* Code Content Area */}
                <div className="p-4 overflow-x-auto font-mono text-xs leading-relaxed max-h-[340px]">
                  <pre className="text-slate-300">
                    {activeTab === 'code' && (
                      <code>
                        <span className="text-slate-500">// Rajat Katnoria — Full-Stack Engineer</span>{'\n'}
                        <span className="text-violet-400">import</span> &#123; <span className="text-yellow-300">GeminiAI</span> &#125; <span className="text-violet-400">from</span> <span className="text-emerald-300">'@google/ai'</span>;{'\n'}
                        <span className="text-violet-400">import</span> &#123; <span className="text-yellow-300">WhatsAppCRM</span> &#125; <span className="text-violet-400">from</span> <span className="text-emerald-300">'@avbt/crm'</span>;{'\n'}
                        <span className="text-violet-400">import</span> &#123; <span className="text-yellow-300">Router</span> &#125; <span className="text-violet-400">from</span> <span className="text-emerald-300">'express'</span>;{'\n\n'}
                        <span className="text-blue-400">export class</span> <span className="text-yellow-200">PortfolioController</span> &#123;{'\n'}
                        {'  '}<span className="text-blue-300">private</span> engineer = &#123;{'\n'}
                        {'    '}name: <span className="text-emerald-300">"Rajat Katnoria"</span>,{'\n'}
                        {'    '}role: <span className="text-emerald-300">"Full-Stack Developer"</span>,{'\n'}
                        {'    '}status: <span className="text-cyan-300">"Available for Opportunities"</span>,{'\n'}
                        {'    '}coreStack: [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"Next.js"</span>, <span className="text-emerald-300">"Node.js"</span>, <span className="text-emerald-300">"MySQL"</span>, <span className="text-emerald-300">"MongoDB"</span>],{'\n'}
                        {'    '}location: <span className="text-emerald-300">"Himachal Pradesh, India"</span>{'\n'}
                        {'  '}&#125;;{'\n\n'}
                        {'  '}<span className="text-blue-400">async</span> <span className="text-yellow-200">deploySolution</span>() &#123;{'\n'}
                        {'    '}<span className="text-violet-400">return</span> &#123;{'\n'}
                        {'      '}mission: <span className="text-emerald-300">"Transform complex problems into practical solutions"</span>,{'\n'}
                        {'      '}security: <span className="text-emerald-300">"JWT + RBAC Enforced"</span>,{'\n'}
                        {'      '}readyToBuild: <span className="text-blue-400">true</span>{'\n'}
                        {'    '}&#125;;{'\n'}
                        {'  '}&#125;{'\n'}
                        &#125;
                      </code>
                    )}
                    {activeTab === 'arch' && (
                      <code className="text-slate-300">
                        {codeSnippets.arch}
                      </code>
                    )}
                    {activeTab === 'ai' && (
                      <div className="space-y-3 font-mono">
                        <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                          <span className="text-slate-400 text-[11px]">Prompt: analyzeDeveloperProfile("Rajat Katnoria")</span>
                          <button
                            onClick={triggerAiStream}
                            disabled={aiStreaming}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold transition-all cursor-pointer disabled:opacity-50"
                          >
                            <Play className="w-3 h-3 fill-white" />
                            <span>{aiStreaming ? "Streaming..." : "Simulate Live AI"}</span>
                          </button>
                        </div>
                        <div className="text-emerald-400 whitespace-pre-line leading-relaxed">
                          {streamedText || (
                            <span className="text-slate-400 italic">
                              Click "Simulate Live AI" to trigger a simulated real-time Gemini API stream token evaluation...
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </pre>
                </div>

                {/* Workspace Bottom Status Bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-[#0B0F1A] border-t border-white/[0.06] text-[11px] font-mono text-slate-400">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>TypeScript 5.7</span>
                    </span>
                    <span className="text-slate-600">|</span>
                    <span>UTF-8</span>
                  </div>
                  <span className="text-blue-400">Gemini API Ready</span>
                </div>

              </div>

              {/* Floating Architectural Badge 1 */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-blue-500/30 backdrop-blur-md shadow-xl animate-float-slow">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Full-Stack & APIs</div>
                  <div className="text-[10px] text-slate-400">React • Node • Express • DBs</div>
                </div>
              </div>

              {/* Floating Architectural Badge 2 */}
              <div className="absolute -top-5 -right-5 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-violet-500/30 backdrop-blur-md shadow-xl">
                <div className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse" />
                <span className="text-xs font-medium text-slate-200">Gemini AI + WhatsApp CRM</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
