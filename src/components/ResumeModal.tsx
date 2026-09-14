import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  FileText
} from 'lucide-react';
import { 
  personalInfo, 
  education, 
  projects, 
  skillCategories, 
  certifications, 
  achievements, 
  languages, 
  interests 
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const rawMarkdown = `# PAVAN SAI RAVINUTALA
Computer Science & Engineering Student | Full-Stack Development | AI/ML & Computer Vision
Location: ${personalInfo.location} | Institution: ${personalInfo.institution}
Phone: ${personalInfo.phone} | Emails: ${personalInfo.emails.join(' | ')}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}

---

## PROFESSIONAL PROFILE
${personalInfo.summary}

---

## EDUCATION
${education.map(e => `### ${e.institution}\n**${e.degree}** | ${e.period}\n${e.scoreLabel}: ${e.score}${e.semesters ? '\n' + e.semesters.map(s => `* ${s.semester}: ${s.gpa}`).join('\n') : ''}`).join('\n\n')}

---

## TECHNICAL SKILLS
${skillCategories.map(c => `**${c.title}:** ${c.skills.join(', ')}`).join('\n')}

---

## PROJECTS
${projects.map(p => `### ${p.title} — ${p.subtitle}\n**Technologies:** ${p.technologies.join(', ')}\n${p.description.map(d => `* ${d}`).join('\n')}`).join('\n\n')}

---

## CERTIFICATIONS
${certifications.map(c => `* **${c.title}** (${c.issuer})`).join('\n')}

---

## ACHIEVEMENTS & ACTIVITIES
${achievements.map(a => `* **${a.title}** — ${a.organization}: ${a.description}`).join('\n')}
`;

    navigator.clipboard.writeText(rawMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-surface border border-subtle rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="no-print p-4 bg-surface border-b border-subtle flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-accent-subtle text-accent border border-accent-subtle">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-primary truncate max-w-[140px] sm:max-w-none">
                <span className="hidden sm:inline">Pavan Sai Ravinutala — </span>Curriculum Vitae
              </h3>
              <p className="text-[10px] sm:text-[11px] text-secondary font-mono">
                Print-ready CV • Batch 2024–28
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={handleCopyMarkdown}
              className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-surface-muted hover:bg-surface-elevated border border-subtle text-secondary hover:text-primary text-xs font-medium transition-all flex items-center gap-1 sm:gap-1.5"
              title="Copy markdown text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-accent-secondary" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-accent hover:opacity-90 text-white text-xs font-semibold transition-all flex items-center gap-1 sm:gap-1.5 shadow-sm"
              title="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span><span className="hidden sm:inline">Print / </span>PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-surface-muted hover:bg-surface-elevated text-secondary hover:text-primary transition-colors border border-subtle"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-surface print:bg-white print:text-black text-primary text-xs sm:text-sm space-y-6">
          
          {/* Header */}
          <div className="border-b border-subtle print:border-black/30 pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary print:text-black uppercase">
              {personalInfo.name}
            </h1>
            <p className="text-accent print:text-slate-800 font-semibold text-sm mt-1">
              {personalInfo.headline} | {personalInfo.specialization}
            </p>
            
            <div className="mt-2.5 flex flex-wrap gap-y-1 gap-x-4 text-secondary print:text-slate-700 text-[11px] sm:text-xs">
              <span className="flex items-center gap-1">📍 {personalInfo.location}</span>
              <span>•</span>
              <span>🎓 {personalInfo.institution}</span>
              <span>•</span>
              <span>📞 {personalInfo.phoneFormatted}</span>
            </div>

            <div className="mt-1 flex flex-wrap gap-y-1 gap-x-4 text-secondary print:text-slate-700 text-[11px] sm:text-xs">
              <span>✉️ {personalInfo.emails[1]}</span>
              <span>•</span>
              <span>✉️ {personalInfo.emails[0]}</span>
              <span>•</span>
              <a href={personalInfo.linkedin} className="text-accent print:text-blue-700 hover:underline">
                LinkedIn
              </a>
              <span>•</span>
              <a href={personalInfo.github} className="text-accent print:text-blue-700 hover:underline">
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Profile */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-wider text-accent print:text-slate-900 uppercase border-b border-subtle print:border-black/20 pb-1 mb-2">
              Professional Profile
            </h2>
            <p className="text-secondary print:text-slate-800 leading-relaxed text-xs sm:text-[13px]">
              {personalInfo.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-wider text-accent print:text-slate-900 uppercase border-b border-subtle print:border-black/20 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold text-primary print:text-black">
                    <span>{edu.institution}</span>
                    <span className="text-[11px] font-mono text-muted print:text-slate-600">{edu.period} | {edu.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-accent print:text-slate-800 text-xs mt-0.5">
                    <span>{edu.degree}</span>
                    <span className="font-mono font-bold">{edu.scoreLabel}: {edu.score}</span>
                  </div>
                  {edu.semesters && (
                    <div className="mt-1.5 flex flex-wrap gap-2 text-[11px] font-mono text-secondary print:text-slate-700">
                      {edu.semesters.map((s) => (
                        <span key={s.semester} className="bg-surface-muted print:bg-slate-100 px-2 py-0.5 rounded border border-subtle print:border-slate-300">
                          {s.semester}: <strong>{s.gpa.toFixed(2)}</strong>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-wider text-accent print:text-slate-900 uppercase border-b border-subtle print:border-black/20 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="text-secondary print:text-slate-800">
                  <strong className="text-primary print:text-black">{cat.title}: </strong>
                  <span>{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-wider text-accent print:text-slate-900 uppercase border-b border-subtle print:border-black/20 pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold text-primary print:text-black">
                    <span>{proj.title} — {proj.subtitle}</span>
                    {proj.highlight && (
                      <span className="text-[10px] font-mono text-accent print:text-slate-600">
                        [{proj.highlight}]
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] font-mono text-muted print:text-slate-700 mb-1">
                    <strong>Technologies:</strong> {proj.technologies.join(', ')}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-secondary print:text-slate-800">
                    {proj.description.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-wider text-accent print:text-slate-900 uppercase border-b border-subtle print:border-black/20 pb-1 mb-2">
              Certifications & Credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certifications.map((c) => (
                <div key={c.id} className="text-secondary print:text-slate-800">
                  • <strong>{c.title}</strong> — <span className="text-muted print:text-slate-600">{c.issuer}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Activities */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-wider text-accent print:text-slate-900 uppercase border-b border-subtle print:border-black/20 pb-1 mb-2">
              Achievements & Extracurricular Activities
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-secondary print:text-slate-800">
              {achievements.map((a) => (
                <li key={a.id}>
                  <strong>{a.title}</strong> ({a.organization}): {a.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages & Interests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-subtle print:border-black/20">
            <div>
              <strong className="text-primary print:text-black text-xs block mb-1">Languages:</strong>
              <p className="text-xs text-secondary print:text-slate-700">
                {languages.map(l => `${l.name} (${l.proficiency})`).join(' • ')}
              </p>
            </div>
            <div>
              <strong className="text-primary print:text-black text-xs block mb-1">Interests:</strong>
              <p className="text-xs text-secondary print:text-slate-700">
                {interests.map(i => i.name).join(' • ')}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
