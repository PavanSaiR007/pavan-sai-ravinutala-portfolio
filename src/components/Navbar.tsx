import React, { useState, useEffect } from 'react';
import { FileText, Github, Linkedin, Menu, X, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Profile', href: '#profile' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-app/85 backdrop-blur-md border-b border-subtle theme-card-shadow py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Name — Only Pavan Sai Ravinutala with dot */}
        <a href="#profile" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-accent text-white flex items-center justify-center font-mono font-bold text-xs sm:text-sm shadow-md transition-transform group-hover:scale-105">
            PS
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-primary text-sm sm:text-base tracking-tight">
              {personalInfo.name}
            </span>
            <span
              className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
              title="Available for Software Engineering Internships"
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-surface/80 border border-subtle rounded-full px-3 py-1 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-secondary hover:text-accent hover:bg-surface-elevated rounded-full transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action Controls */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-surface border border-subtle text-secondary hover:text-accent hover:border-hover transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-surface border border-subtle text-secondary hover:text-accent hover:border-hover transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            className="px-3.5 py-2 rounded-xl bg-surface hover:bg-surface-elevated border border-subtle hover:border-hover text-primary text-xs font-medium transition-all flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-accent" />
            <span>Resume / CV</span>
          </button>

          <a
            href="#contact"
            className="px-3.5 py-2 rounded-xl bg-accent hover:opacity-90 text-white text-xs font-semibold shadow-sm transition-all"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex lg:hidden items-center gap-1.5">
          <ThemeToggle compact />

          <button
            onClick={onOpenResume}
            className="p-2 rounded-xl bg-surface border border-subtle text-accent text-xs"
            title="Resume"
          >
            <FileText className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-surface border border-subtle text-primary hover:text-accent"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface/98 border-b border-subtle px-4 py-4 space-y-3 backdrop-blur-xl animate-in fade-in">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-2.5 text-xs font-medium text-secondary hover:text-accent bg-surface-muted rounded-xl transition-colors flex items-center justify-between ${
                  idx === navLinks.length - 1 ? 'col-span-2' : ''
                }`}
              >
                <span>{link.name}</span>
                <span className="text-muted text-[10px] font-mono">→</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-subtle flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-muted border border-subtle text-secondary"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-muted border border-subtle text-secondary"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-lg bg-accent text-white text-xs font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
