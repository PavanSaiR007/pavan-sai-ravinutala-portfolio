import React from 'react';
import { GraduationCap, Award, TrendingUp, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { education } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const btech = education.find((e) => e.id === 'vfstr');
  const maxGpa = 10.0;

  return (
    <section id="education" className="py-16 md:py-24 border-t border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Education & Performance
          </h2>
          <p className="text-sm text-secondary mt-1 max-w-2xl">
            Undergraduate Computer Science engineering degree with progressive semester excellence and secondary school distinction.
          </p>
        </div>

        {/* B.Tech Highlight Card with Semester Progression Visualizer */}
        {btech && (
          <div className="bg-surface border border-subtle hover:border-hover rounded-2xl p-6 md:p-8 mb-8 theme-card-shadow transition-all">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-subtle">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-subtle border border-accent-subtle text-xs font-mono text-accent">
                  <Award className="w-3.5 h-3.5 text-accent" />
                  <span>Current Degree Program • {btech.period}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  {btech.degree}
                </h3>
                <h4 className="text-base text-accent font-medium">
                  {btech.institution}
                </h4>
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-muted" />
                    {btech.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-muted" />
                    Batch: {btech.period}
                  </span>
                </div>
              </div>

              {/* Overall CGPA Badge (Retained in Education section per user request) */}
              <div className="bg-surface-muted border border-subtle rounded-2xl p-4 text-center lg:min-w-[180px] shrink-0">
                <span className="text-xs font-mono text-muted uppercase tracking-wider block mb-1">
                  Overall Cumulative
                </span>
                <div className="text-3xl sm:text-4xl font-bold font-mono text-accent">
                  8.23 <span className="text-xs text-muted font-normal">/ 10</span>
                </div>
                <span className="inline-block mt-1 text-[11px] font-mono text-accent-secondary bg-accent-sec-subtle px-2 py-0.5 rounded border border-emerald-500/20 font-medium">
                  First Class with Distinction
                </span>
              </div>
            </div>

            {/* Semester-by-Semester Progression Chart */}
            <div className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-secondary">
                  <TrendingUp className="w-4 h-4 text-accent-secondary" />
                  <span className="font-semibold text-primary">Semester SGPA Trajectory:</span>
                  <span className="text-muted">Upward curve peaking at 8.76</span>
                </div>
                <span className="text-xs font-mono text-muted">Scale 0 - 10.0</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {btech.semesters?.map((sem) => {
                  const percentage = (sem.gpa / maxGpa) * 100;
                  const isPeak = sem.gpa === 8.76;
                  return (
                    <div
                      key={sem.semester}
                      className={`p-3.5 rounded-xl border transition-all ${
                        isPeak
                          ? 'bg-accent-subtle border-accent ring-1 ring-accent/30'
                          : 'bg-surface-muted/60 border-subtle hover:border-hover'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono mb-2">
                        <span className="text-muted">{sem.semester}</span>
                        {isPeak && (
                          <span className="text-[10px] text-accent bg-accent-subtle px-1.5 py-0.5 rounded font-bold border border-accent-subtle">
                            Peak
                          </span>
                        )}
                      </div>

                      <div className="text-xl font-mono font-bold text-primary mb-2">
                        {sem.gpa.toFixed(2)}
                      </div>

                      {/* Visual Bar */}
                      <div className="w-full bg-surface h-2 rounded-full overflow-hidden border border-subtle">
                        <div
                          className="h-full rounded-full bg-accent transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {btech.details && (
                <div className="mt-4 pt-4 border-t border-subtle space-y-1 text-xs text-secondary">
                  {btech.details.map((d, i) => (
                    <p key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{d}</span>
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Secondary Education: Intermediate & Class X */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education
            .filter((e) => e.id !== 'vfstr')
            .map((item) => (
              <div
                key={item.id}
                className="bg-surface border border-subtle hover:border-hover rounded-2xl p-5 sm:p-6 transition-all theme-card-shadow flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-muted" />
                      {item.period}
                    </span>
                    <span className="text-accent font-semibold">{item.scoreLabel}</span>
                  </div>

                  <h3 className="text-lg font-bold text-primary">
                    {item.institution}
                  </h3>
                  <h4 className="text-sm font-medium text-secondary">
                    {item.degree}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-muted font-mono">
                    <MapPin className="w-3.5 h-3.5 text-muted" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-subtle flex items-center justify-between">
                  <span className="text-xs text-secondary">Examination Score:</span>
                  <span className="text-base font-mono font-bold text-accent bg-surface-muted px-3 py-1 rounded-lg border border-subtle">
                    {item.score}
                  </span>
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
};
