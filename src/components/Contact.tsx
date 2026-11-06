import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  Github, 
  Linkedin, 
  MapPin, 
  AlertCircle, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [clientOpened, setClientOpened] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Please provide a subject line (at least 3 characters).';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build the mailto url with formatted body
    const bodyText = `Hi Rajat,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via Portfolio Contact Form`;
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(bodyText)}`;

    // Open mailto fallback
    window.location.href = mailtoUrl;
    setClientOpened(true);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#06080F] border-t border-white/[0.04] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="glow-orb top-10 -left-20 w-96 h-96 bg-blue-600/15" />
      <div className="glow-orb bottom-10 -right-20 w-96 h-96 bg-violet-600/15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Have an Idea?{' '}
            <span className="gradient-text-blue-violet">
              Let's Build Something Great Together.
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Whether you have a software engineering role, a freelance inquiry, or want to collaborate on full-stack projects, my inbox is open.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="rounded-3xl bg-[#090D18]/90 border border-white/[0.09] p-6 sm:p-7 shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Direct Email</h3>
                  <p className="text-xs text-slate-400">Preferred for formal & technical inquiries</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-xs sm:text-sm font-mono text-slate-200 truncate mr-2">
                  {personalInfo.email}
                </span>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Typical response window: within 24 business hours</span>
              </div>
            </div>

            {/* Social & Professional Networks */}
            <div className="rounded-3xl bg-[#090D18]/90 border border-white/[0.09] p-6 sm:p-7 shadow-xl space-y-4">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Professional Networks
              </h3>

              <div className="space-y-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-blue-500/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 group-hover:scale-110 transition-transform">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">LinkedIn</div>
                      <div className="text-xs text-slate-400">linkedin.com/in/rajatkatnoria</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-blue-500/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-slate-200 group-hover:scale-110 transition-transform">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">GitHub</div>
                      <div className="text-xs text-slate-400">github.com/rajat020-cloud</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Geographical Base */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/[0.06] flex items-center gap-3 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Based in <strong>Himachal Pradesh, India</strong> (Open to remote worldwide & hybrid relocations).</span>
            </div>

          </div>

          {/* Right Column: Contact Form with Validation & Mailto Handlers */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#090D18]/95 border border-white/[0.1] p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill in the details below. This will trigger your mail client with verified parameters.
                </p>
              </div>

              {clientOpened && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-3">
                  <Sparkles className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Opening email client...</div>
                    <div className="mt-1 text-slate-300">
                      If your default email client didn't open automatically, you can copy Rajat's email (<button onClick={copyEmailToClipboard} className="underline text-blue-400 font-semibold">{personalInfo.email}</button>) directly!
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.name ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/[0.1]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.email ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/[0.1]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: '' });
                    }}
                    placeholder="e.g. Full-Stack Engineering Role / Project Inquiry"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.subject ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/[0.1]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Describe your project, team requirements, or collaboration idea..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-y ${
                      errors.message ? 'border-rose-500/70 focus:ring-rose-500' : 'border-white/[0.1]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                <p className="text-[11px] text-center text-slate-400 pt-1">
                  Validated client-side. Triggers direct communication with Rajat Katnoria.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
