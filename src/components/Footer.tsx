import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-muted/60 border-t border-subtle py-12 text-secondary text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-subtle">
          
          {/* Left Brand */}
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-base font-bold text-primary tracking-tight">
              {personalInfo.name}
            </h4>
            <p className="text-xs text-secondary">
              Computer Science & Engineering • Vignan University (VFSTR), Guntur
            </p>
            <p className="text-[11px] font-mono text-accent font-medium">
              CGPA: 8.23 / 10 • Batch 2024–2028
            </p>
          </div>

          {/* Social and Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-surface hover:bg-surface-elevated border border-subtle text-secondary hover:text-primary transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-surface hover:bg-surface-elevated border border-subtle text-secondary hover:text-accent transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.emails[1]}`}
              className="p-2.5 rounded-xl bg-surface hover:bg-surface-elevated border border-subtle text-secondary hover:text-accent transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="px-3.5 py-2 rounded-xl bg-surface hover:bg-surface-elevated border border-subtle text-primary font-medium transition-all flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-accent" />
              <span>Resume</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-surface hover:bg-surface-elevated border border-subtle text-muted hover:text-primary transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-muted">
          <div>
            © {new Date().getFullYear()} Pavan Sai Ravinutala. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Portfolio crafted with Dark & Warm Light theme support</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
