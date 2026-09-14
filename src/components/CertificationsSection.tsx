import React, { useState } from 'react';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { Certification } from '../types';

export const CertificationsSection: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('all');

  const getBadgeStyle = (type?: Certification['badgeType']) => {
    switch (type) {
      case 'ai':
        return 'bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30';
      case 'hackathon':
        return 'bg-accent-subtle text-accent border border-accent-subtle';
      case 'network':
        return 'bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30';
      case 'code':
        return 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30';
      case 'lang':
        return 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30';
      default:
        return 'bg-surface-muted text-secondary border-subtle';
    }
  };

  const filtered = certifications.filter((c) => {
    if (filterType === 'all') return true;
    return c.badgeType === filterType;
  });

  return (
    <section id="certifications" className="py-16 md:py-24 border-t border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Accreditation & Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              Certifications & Honors
            </h2>
            <p className="text-sm text-secondary mt-1 max-w-2xl">
              Verified certifications from Intel, Cisco, Cambridge English, NPTEL/IIT, and National Hackathons.
            </p>
          </div>

          {/* Quick Filters */}
          <div className="flex items-center gap-1.5 p-1 bg-surface border border-subtle rounded-xl overflow-x-auto text-xs">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium ${
                filterType === 'all'
                  ? 'bg-accent text-white font-semibold shadow-xs'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              All ({certifications.length})
            </button>
            <button
              onClick={() => setFilterType('hackathon')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium ${
                filterType === 'hackathon'
                  ? 'bg-accent text-white font-semibold shadow-xs'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              Hackathons
            </button>
            <button
              onClick={() => setFilterType('code')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium ${
                filterType === 'code'
                  ? 'bg-accent text-white font-semibold shadow-xs'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              Coding & Algorithms
            </button>
            <button
              onClick={() => setFilterType('network')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium ${
                filterType === 'network'
                  ? 'bg-accent text-white font-semibold shadow-xs'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              Cisco Systems
            </button>
            <button
              onClick={() => setFilterType('lang')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium ${
                filterType === 'lang'
                  ? 'bg-accent text-white font-semibold shadow-xs'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              Cambridge / NPTEL
            </button>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((cert) => (
            <div
              key={cert.id}
              className="bg-surface border border-subtle hover:border-hover rounded-2xl p-5 transition-all theme-card-shadow flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-surface-muted border border-subtle text-accent group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border font-medium uppercase tracking-wider ${getBadgeStyle(
                      cert.badgeType
                    )}`}
                  >
                    {cert.badgeType || 'Credential'}
                  </span>
                </div>

                <h3 className="font-bold text-base text-primary group-hover:text-accent transition-colors mb-1">
                  {cert.title}
                </h3>
                <h4 className="text-xs font-medium text-accent font-mono mb-2">
                  {cert.issuer}
                </h4>

                {cert.highlight && (
                  <p className="text-xs text-secondary leading-relaxed">
                    {cert.highlight}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-subtle flex items-center justify-between text-[11px] font-mono text-muted">
                <span className="flex items-center gap-1 text-accent-secondary">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Credential
                </span>
                <span>Pavan Sai R.</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
