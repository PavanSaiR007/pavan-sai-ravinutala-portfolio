import React from 'react';
import { Trophy, Globe2, Palette, Activity, Cpu, Medal, Heart } from 'lucide-react';
import { achievements, languages, interests } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-16 md:py-24 border-t border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider mb-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>Co-Curricular & Extracurricular Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Achievements & Activities
          </h2>
          <p className="text-sm text-secondary mt-1 max-w-2xl">
            Hackathons, world records, campus leadership in the Fine Arts Club, and athletic competitions.
          </p>
        </div>

        {/* Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="bg-surface border border-subtle hover:border-hover rounded-2xl p-5 transition-all theme-card-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border font-medium ${
                    ach.category === 'Record'
                      ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30'
                      : ach.category === 'Hackathon'
                      ? 'bg-accent-subtle text-accent border border-accent-subtle'
                      : ach.category === 'Club'
                      ? 'bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30'
                      : 'bg-accent-sec-subtle text-accent-secondary border border-emerald-500/30'
                  }`}>
                    {ach.category}
                  </span>
                  <Medal className="w-4 h-4 text-accent-warm" />
                </div>

                <h3 className="font-bold text-base text-primary mb-1 leading-snug">
                  {ach.title}
                </h3>
                <h4 className="text-xs text-accent font-mono mb-2">
                  {ach.organization}
                </h4>
                <p className="text-xs text-secondary leading-relaxed">
                  {ach.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-subtle flex items-center justify-between text-[11px] font-mono text-muted">
                <span>VFSTR Community</span>
                <span>Verified Activity</span>
              </div>
            </div>
          ))}
        </div>

        {/* Two Columns: Languages & Interests */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Languages */}
          <div className="bg-surface border border-subtle rounded-2xl p-6 theme-card-shadow">
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-subtle">
              <Globe2 className="w-5 h-5 text-accent" />
              <div>
                <h3 className="text-lg font-bold text-primary">Languages Spoken</h3>
                <p className="text-xs text-secondary">Multilingual communication proficiency</p>
              </div>
            </div>

            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-primary">{lang.name}</span>
                    <span className="font-mono text-accent font-medium">{lang.proficiency}</span>
                  </div>
                  <div className="w-full bg-surface-muted h-2 rounded-full overflow-hidden border border-subtle">
                    <div
                      className="bg-accent h-full rounded-full transition-all duration-700"
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests & Extracurriculars */}
          <div className="bg-surface border border-subtle rounded-2xl p-6 theme-card-shadow">
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-subtle">
              <Heart className="w-5 h-5 text-accent" />
              <div>
                <h3 className="text-lg font-bold text-primary">Interests & Hobbies</h3>
                <p className="text-xs text-secondary">Creative expression, athletics, and exploratory pursuits</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {interests.map((item) => (
                <div
                  key={item.name}
                  className="p-3.5 rounded-xl bg-surface-muted/60 border border-subtle flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-surface text-accent shrink-0 border border-subtle">
                    {item.name.includes('Drawing') && <Palette className="w-4 h-4 text-purple-600 dark:text-purple-400" />}
                    {item.name.includes('Badminton') && <Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                    {item.name.includes('Cricket') && <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400" />}
                    {item.name.includes('Technology') && <Cpu className="w-4 h-4 text-accent" />}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-primary">{item.name}</h4>
                    <p className="text-[11px] text-secondary mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
