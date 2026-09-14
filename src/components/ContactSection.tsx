import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  UserCheck, 
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail1, setCopiedEmail1] = useState(false);
  const [copiedEmail2, setCopiedEmail2] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  // Form State
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopy = (text: string, type: 'email1' | 'email2' | 'phone' | 'all') => {
    navigator.clipboard.writeText(text);
    if (type === 'email1') {
      setCopiedEmail1(true);
      setTimeout(() => setCopiedEmail1(false), 2000);
    } else if (type === 'email2') {
      setCopiedEmail2(true);
      setTimeout(() => setCopiedEmail2(false), 2000);
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else if (type === 'all') {
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    }
  };

  const handleDownloadVCard = () => {
    const vCardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${personalInfo.name}`,
      `N:Ravinutala;Pavan Sai;;;`,
      `TITLE:${personalInfo.headline}`,
      `ORG:VFSTR (Vignan University)`,
      `TEL;TYPE=CELL:${personalInfo.phone}`,
      `EMAIL;TYPE=WORK:${personalInfo.emails[1]}`,
      `EMAIL;TYPE=HOME:${personalInfo.emails[0]}`,
      `ADR;TYPE=HOME:;;Vizianagaram;Andhra Pradesh;;India`,
      `URL:${personalInfo.linkedin}`,
      `NOTE:Computer Science & Engineering Student | 8.23 CGPA | Full-Stack & AI/ML`,
      'END:VCARD'
    ].join('\n');

    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Pavan_Sai_Ravinutala.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !message) return;

    // Compose mailto link
    const mailtoSubject = encodeURIComponent(subject.trim() || `Portfolio Contact from ${senderName}`);
    const mailtoBody = encodeURIComponent(
      `Hello Pavan Sai,\n\n${message}\n\nBest regards,\n${senderName}\nContact: ${senderEmail}`
    );

    window.location.href = `mailto:${personalInfo.emails[1]}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  const fullContactSummary = `Name: ${personalInfo.name}
Phone: ${personalInfo.phoneFormatted}
Primary Email: ${personalInfo.emails[1]}
Academic Email: ${personalInfo.emails[0]}
Location: ${personalInfo.location}
LinkedIn: ${personalInfo.linkedin}
GitHub: ${personalInfo.github}`;

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Opportunities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Get In Touch
          </h2>
          <p className="text-sm text-secondary mt-1 max-w-2xl">
            Currently open to internships, software engineering roles, hackathon collaborations, and academic research discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Cards */}
            <div className="bg-surface border border-subtle rounded-2xl p-6 theme-card-shadow space-y-4">
              <h3 className="text-base font-bold text-primary flex items-center justify-between">
                <span>Direct Contact Details</span>
                <span className="text-xs font-mono text-accent-secondary bg-accent-sec-subtle px-2 py-0.5 rounded border border-emerald-500/20 font-medium">
                  Quick Response
                </span>
              </h3>

              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-surface-muted/60 border border-subtle flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent-subtle text-accent border border-accent-subtle">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-muted block">Mobile Phone / WhatsApp</span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-xs sm:text-sm font-semibold font-mono text-primary hover:text-accent transition-colors"
                    >
                      {personalInfo.phoneFormatted}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-1.5 rounded-lg bg-surface hover:bg-surface-elevated text-secondary hover:text-primary transition-colors border border-subtle"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-accent-secondary" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Primary Email */}
              <div className="p-3.5 rounded-xl bg-surface-muted/60 border border-subtle flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent-subtle text-accent border border-accent-subtle">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono text-muted block">Primary Email</span>
                    <a
                      href={`mailto:${personalInfo.emails[1]}`}
                      className="text-xs sm:text-sm font-semibold text-primary hover:text-accent transition-colors truncate block"
                    >
                      {personalInfo.emails[1]}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.emails[1], 'email2')}
                  className="p-1.5 rounded-lg bg-surface hover:bg-surface-elevated text-secondary hover:text-primary transition-colors border border-subtle shrink-0"
                  title="Copy email"
                >
                  {copiedEmail2 ? <Check className="w-3.5 h-3.5 text-accent-secondary" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Academic Email */}
              <div className="p-3.5 rounded-xl bg-surface-muted/60 border border-subtle flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent-subtle text-accent border border-accent-subtle">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono text-muted block">University Academic Email</span>
                    <a
                      href={`mailto:${personalInfo.emails[0]}`}
                      className="text-xs sm:text-sm font-semibold text-primary hover:text-accent transition-colors truncate block font-mono"
                    >
                      {personalInfo.emails[0]}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.emails[0], 'email1')}
                  className="p-1.5 rounded-lg bg-surface hover:bg-surface-elevated text-secondary hover:text-primary transition-colors border border-subtle shrink-0"
                  title="Copy university email"
                >
                  {copiedEmail1 ? <Check className="w-3.5 h-3.5 text-accent-secondary" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-surface-muted/60 border border-subtle flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent-sec-subtle text-accent-secondary border border-emerald-500/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-muted block">Base Location</span>
                  <span className="text-xs sm:text-sm font-medium text-primary">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Export Utilities */}
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={handleDownloadVCard}
                  className="flex-1 py-2 px-3 rounded-xl bg-surface hover:bg-surface-elevated border border-subtle text-primary text-xs font-medium transition-all flex items-center justify-center gap-1.5"
                >
                  <UserCheck className="w-3.5 h-3.5 text-accent" />
                  <span>Download vCard (.vcf)</span>
                </button>

                <button
                  onClick={() => handleCopy(fullContactSummary, 'all')}
                  className="py-2 px-3 rounded-xl bg-surface hover:bg-surface-elevated border border-subtle text-secondary hover:text-primary text-xs font-medium transition-all flex items-center justify-center gap-1.5"
                  title="Copy all contacts to clipboard"
                >
                  {copiedAll ? <Check className="w-3.5 h-3.5 text-accent-secondary" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedAll ? 'Copied All' : 'Copy All'}</span>
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-surface border border-subtle rounded-2xl p-5 theme-card-shadow">
              <span className="text-xs font-mono uppercase tracking-wider text-muted block mb-3">
                Professional Networks
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-surface-muted hover:bg-surface-elevated border border-subtle text-primary hover:text-accent transition-all flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-blue-500" />
                    <span>LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-surface-muted hover:bg-surface-elevated border border-subtle text-primary hover:text-accent transition-all flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-secondary" />
                    <span>GitHub</span>
                  </div>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Composer Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface border border-subtle rounded-2xl p-6 sm:p-8 theme-card-shadow">
              <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider mb-2">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Direct Dispatch</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-secondary mb-6">
                Compose a note to reach Pavan Sai Ravinutala directly. Clicking send will open your preferred email client with all details formatted.
              </p>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-secondary mb-1.5">
                      Your Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Alex Johnson"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 bg-surface-muted border border-subtle rounded-xl text-xs text-primary focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-secondary mb-1.5">
                      Your Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g., alex@company.com"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 bg-surface-muted border border-subtle rounded-xl text-xs text-primary focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-secondary mb-1.5">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Internship Inquiry / SDE Opportunity at..."
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-surface-muted border border-subtle rounded-xl text-xs text-primary focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-secondary mb-1.5">
                    Message Details <span className="text-accent">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe your project, internship position, or question..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 bg-surface-muted border border-subtle rounded-xl text-xs text-primary focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-[11px] text-muted font-mono">
                    Routes directly to: <span className="text-primary">{personalInfo.emails[1]}</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-accent hover:opacity-90 text-white text-xs font-semibold shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>

                {sentSuccess && (
                  <div className="p-3 rounded-xl bg-accent-sec-subtle border border-emerald-500/30 text-accent-secondary text-xs font-medium flex items-center gap-2 animate-in fade-in">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Email client launched! Thank you for reaching out to Pavan Sai.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
