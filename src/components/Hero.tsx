import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  Copy, 
  FileText, 
  Github, 
  GraduationCap, 
  Linkedin, 
  MapPin, 
  Phone, 
  Sparkles, 
  Terminal,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.emails[1]);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="profile" className="relative pt-24 pb-14 md:pt-32 md:pb-20 overflow-hidden">
      {/* Subtle atmospheric ambient glow - responsive to theme */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-8 space-y-5">
            {/* Status Pill — Updated to exact required text */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-subtle text-xs font-mono text-secondary shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open to Software Engineering Internships</span>
            </div>

            {/* Name & Academic Headline — Name is the strongest visual element */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary">
                Pavan Sai Ravinutala
              </h1>
              <p className="text-lg sm:text-xl font-medium text-secondary">
                Computer Science & Engineering Student
              </p>
              <p className="text-xs sm:text-sm text-accent font-mono font-medium">
                Full-Stack Development | AI/ML & Computer Vision
              </p>
            </div>

            {/* Concise Bio without giant wall of text */}
            <p className="text-secondary text-sm sm:text-base leading-relaxed max-w-2xl">
              Computer Science & Engineering undergraduate at VFSTR with an <strong className="text-primary font-semibold">8.23 CGPA</strong>. Hands-on experience developing practical full-stack web architectures, computer vision pipelines, and database systems. Focused on building reliable, high-performance software.
            </p>

            {/* Quick Metadata Details */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-muted font-mono">
              <div className="flex items-center gap-1.5 text-secondary">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 text-secondary">
                <GraduationCap className="w-3.5 h-3.5 text-accent" />
                <span>VFSTR, Guntur (2024–2028)</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold bg-accent-sec-subtle px-2 py-0.5 rounded border border-emerald-500/20">
                <span>CGPA: 8.23 / 10</span>
              </div>
            </div>

            {/* Interactive Call to Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl bg-accent hover:opacity-90 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all flex items-center gap-2"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 rounded-xl bg-surface hover:bg-surface-elevated border border-subtle hover:border-hover text-primary text-xs sm:text-sm font-medium transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-accent" />
                <span>Curriculum Vitae</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 rounded-xl bg-surface hover:bg-surface-elevated border border-subtle hover:border-hover text-secondary hover:text-primary text-xs sm:text-sm font-medium transition-all flex items-center gap-2"
                title="Copy primary email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-muted" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Connect Links */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-muted">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-secondary hover:text-accent transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>github.com/PavanSaiR007</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-secondary hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-1.5 text-secondary hover:text-accent transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>{personalInfo.phoneFormatted}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Candidate Snapshot Card */}
          <div className="lg:col-span-4">
            <div className="bg-surface border border-subtle rounded-2xl p-5 theme-card-shadow space-y-3.5">
              <div className="flex items-center justify-between pb-3 border-b border-subtle">
                <span className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
                  Candidate Snapshot
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-accent-subtle text-accent border border-accent-subtle font-medium">
                  CSE 2024–28
                </span>
              </div>

              {/* Stat 1: CGPA (Preserved here as requested) */}
              <div className="p-3 rounded-xl bg-surface-muted/60 border border-subtle flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted">Academic CGPA</div>
                  <div className="text-2xl font-bold font-mono text-accent">
                    8.23 <span className="text-xs text-muted font-normal">/ 10</span>
                  </div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono">
                    Sem 3 SGPA: 8.76
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-accent-subtle flex items-center justify-center text-accent border border-accent-subtle">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              {/* Stat 2: Practical Projects */}
              <div className="p-3 rounded-xl bg-surface-muted/60 border border-subtle flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted">Engineering Projects</div>
                  <div className="text-2xl font-bold font-mono text-primary">5 Builds</div>
                  <div className="text-[11px] text-secondary">Orbit IQ, Campus Radar, Flipazon...</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-accent-sec-subtle flex items-center justify-center text-accent-secondary border border-emerald-500/20">
                  <Terminal className="w-5 h-5" />
                </div>
              </div>

              {/* Stat 3: Credentials */}
              <div className="p-3 rounded-xl bg-surface-muted/60 border border-subtle flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted">Verified Credentials</div>
                  <div className="text-2xl font-bold font-mono text-accent-warm">9 Honors</div>
                  <div className="text-[11px] text-secondary">SIH 2026, Intel AI, Cisco, IIT Silver</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-accent-warm-subtle flex items-center justify-center text-accent-warm border border-amber-500/20">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Quick Contact snippet */}
              <div className="pt-2 text-xs text-muted space-y-1">
                <div className="flex items-center justify-between">
                  <span>Primary:</span>
                  <span className="font-mono text-primary truncate max-w-[170px]">{personalInfo.emails[1]}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>University:</span>
                  <span className="font-mono text-primary truncate max-w-[170px]">{personalInfo.emails[0]}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
