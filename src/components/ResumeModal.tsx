import React from 'react';
import { 
  X, 
  Printer, 
  MapPin, 
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  ExternalLink,
  Mail,
  Linkedin,
  Github
} from 'lucide-react';
import { 
  personalInfo, 
  experienceData, 
  projectsData, 
  skillCategories, 
  educationData, 
  certificationsData 
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-wrapper fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="backdrop-overlay fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity print:hidden"
        onClick={onClose}
      />

      {/* Resume Card Container */}
      <div className="resume-card-container relative w-full max-w-4xl rounded-3xl bg-[#090D18] border border-white/[0.12] shadow-2xl flex flex-col overflow-hidden z-10 my-4 max-h-[92vh]">
        
        {/* Top Action Bar (Hidden during Print) */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0D1222] border-b border-white/[0.08] print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">Curriculum Vitae</span>
            <span className="text-xs text-blue-400 font-mono">• {personalInfo.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/25 transition-all active:scale-95 cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="resume-body-content p-6 sm:p-10 overflow-y-auto space-y-6 bg-[#090D18] text-slate-200">
          
          {/* Header Section */}
          <div className="border-b border-white/[0.1] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:border-b-2 print:border-slate-800 print:pb-4">
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight print:text-2xl print:text-slate-900">
                {personalInfo.name}
              </h1>
              <div className="text-sm sm:text-base font-semibold text-blue-400 print:text-blue-700 font-mono">
                {personalInfo.title}
              </div>
              
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-300 font-mono pt-1 print:text-slate-700">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 print:text-slate-600" />
                  <span>{personalInfo.location}</span>
                </span>
                <span className="text-slate-500">•</span>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:text-blue-300 print:text-blue-700">
                  <Mail className="w-3.5 h-3.5 text-blue-400 print:text-slate-600" />
                  <span>{personalInfo.email}</span>
                </a>
                <span className="text-slate-500">•</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-300 print:text-blue-700">
                  <Linkedin className="w-3.5 h-3.5 text-blue-400 print:text-slate-600" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-slate-500">•</span>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-300 print:text-blue-700">
                  <Github className="w-3.5 h-3.5 text-blue-400 print:text-slate-600" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Profile Photo in CV */}
            {personalInfo.avatarUrl && (
              <div className="hidden sm:block shrink-0">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/[0.15] print:border-slate-300 print:w-16 print:h-16 shadow-lg">
                  <img 
                    src={personalInfo.avatarUrl} 
                    alt={personalInfo.name} 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Professional Summary */}
          <div className="print-avoid-break space-y-1.5">
            <h2 className="resume-section-header text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <span>Professional Summary</span>
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 print:text-slate-800">
              {personalInfo.bio}
            </p>
          </div>

          {/* Experience Section */}
          <div className="print-avoid-break space-y-3">
            <h2 className="resume-section-header text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-blue-400 print:hidden" />
              <span>Professional Experience</span>
            </h2>

            {experienceData.map((exp, idx) => (
              <div key={idx} className="resume-item-card p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-1">
                  <div>
                    <span className="font-bold text-white print:text-slate-900">{exp.role}</span>
                    <span className="text-slate-300 print:text-slate-700"> — {exp.company}</span>
                    {exp.liveUrl && (
                      <a 
                        href={exp.liveUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="ml-2 inline-flex items-center gap-1 text-[11px] font-mono text-blue-400 print:text-blue-700 hover:underline"
                      >
                        <span>({exp.liveUrl.replace('https://', '')})</span>
                        <ExternalLink className="w-3 h-3 print:hidden" />
                      </a>
                    )}
                  </div>
                  <span className="text-xs font-mono text-blue-400 print:text-slate-600 font-semibold">{exp.period}</span>
                </div>

                <ul className="list-disc list-inside text-xs text-slate-300 print:text-slate-800 space-y-1 leading-relaxed">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx}>{r}</li>
                  ))}
                </ul>

                <div className="text-[11px] font-mono text-slate-400 print:text-slate-600 pt-1">
                  <strong>Tech Stack:</strong> {exp.technologies.join(', ')}
                </div>
              </div>
            ))}
          </div>

          {/* Key Projects Section */}
          <div className="print-avoid-break space-y-3">
            <h2 className="resume-section-header text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-violet-400 print:hidden" />
              <span>Key Software Projects</span>
            </h2>

            <div className="grid grid-cols-1 gap-2.5">
              {projectsData.map((proj, idx) => (
                <div key={idx} className="resume-item-card p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white print:text-slate-900">{proj.title}</span>
                      {proj.liveUrl && (
                        <a 
                          href={proj.liveUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-blue-400 print:text-blue-700 hover:underline"
                        >
                          <span>[Live Deployment]</span>
                          <ExternalLink className="w-3 h-3 print:hidden" />
                        </a>
                      )}
                    </div>
                    <span className="text-xs font-mono text-blue-400 print:text-slate-600">{proj.techStack.slice(0, 4).join(' • ')}</span>
                  </div>
                  
                  <p className="text-xs text-slate-300 print:text-slate-800 leading-relaxed">{proj.description}</p>
                  
                  <div className="text-[11px] text-slate-400 print:text-slate-600">
                    <strong>Highlights:</strong> {proj.highlights.slice(0, 2).join(' | ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="print-avoid-break space-y-2">
            <h2 className="resume-section-header text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-emerald-400 print:hidden" />
              <span>Education</span>
            </h2>

            {educationData.map((edu, idx) => (
              <div key={idx} className="resume-item-card p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                <div>
                  <div className="font-bold text-white print:text-slate-900">{edu.degree}</div>
                  <div className="text-slate-400 print:text-slate-700">{edu.institution}, {edu.location}</div>
                </div>
                <div className="font-mono text-blue-400 print:text-slate-600 font-semibold">{edu.period}</div>
              </div>
            ))}
          </div>

          {/* Technical Skills Section */}
          <div className="print-avoid-break space-y-2">
            <h2 className="resume-section-header text-xs font-bold text-slate-400 uppercase tracking-wider">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="p-2 rounded-xl bg-white/[0.02] border border-white/[0.04] print:border-slate-200">
                  <span className="font-semibold text-blue-400 print:text-slate-900">{cat.title}: </span>
                  <span className="text-slate-300 print:text-slate-700">{cat.skills.map(s => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Leadership */}
          <div className="print-avoid-break space-y-2">
            <h2 className="resume-section-header text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400 print:hidden" />
              <span>Certifications & Leadership</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="p-2 rounded-xl bg-white/[0.02] border border-white/[0.04] print:border-slate-200">
                  <div className="font-semibold text-white print:text-slate-900">{cert.title}</div>
                  <div className="text-[11px] text-slate-400 print:text-slate-600">{cert.issuer} • {cert.category}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
