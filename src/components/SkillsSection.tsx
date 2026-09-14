import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  Globe, 
  Cpu, 
  BarChart3, 
  Database, 
  Wrench, 
  Terminal, 
  Layers, 
  Search, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-accent" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-accent" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-accent" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-accent-secondary" />;
      case 'Database':
        return <Database className="w-5 h-5 text-accent-warm" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-accent" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-accent" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-accent" />;
      default:
        return <Code2 className="w-5 h-5 text-accent" />;
    }
  };

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return skillCategories;
    const query = searchQuery.toLowerCase().trim();
    return skillCategories
      .map((cat) => ({
        ...cat,
        skills: cat.skills.filter((skill) =>
          skill.toLowerCase().includes(query)
        ),
      }))
      .filter((cat) => cat.skills.length > 0 || cat.title.toLowerCase().includes(query));
  }, [searchQuery]);

  const totalSkillsCount = useMemo(() => {
    return skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>Core Competencies & Toolchain</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              Technical Skills
            </h2>
            <p className="text-sm text-secondary mt-1 max-w-2xl">
              Languages, libraries, databases, and development utilities applied across practical projects and hackathon challenges.
            </p>
          </div>

          {/* Quick Skill Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Search ${totalSkillsCount} skills (e.g. Python, React)...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-surface border border-subtle rounded-xl text-xs text-primary focus:outline-none focus:border-accent transition-colors placeholder:text-muted"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-muted hover:text-primary"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="bg-surface border border-subtle hover:border-hover rounded-2xl p-5 transition-all theme-card-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3.5 pb-2.5 border-b border-subtle">
                  <div className="p-2 rounded-xl bg-surface-muted border border-subtle">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <h3 className="font-semibold text-sm text-primary leading-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => {
                    const isMatched =
                      searchQuery &&
                      skill.toLowerCase().includes(searchQuery.toLowerCase().trim());
                    return (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                          isMatched
                            ? 'bg-accent text-white font-bold ring-2 ring-accent/40'
                            : 'bg-surface-muted text-secondary border border-subtle hover:border-hover hover:text-primary'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 pt-2.5 border-t border-subtle flex items-center justify-between text-[11px] font-mono text-muted">
                <span>{category.skills.length} competencies</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-accent opacity-60" />
              </div>
            </div>
          ))}
        </div>

        {/* Highlights banner */}
        <div className="mt-8 p-4 rounded-2xl bg-surface border border-subtle flex flex-wrap items-center justify-between gap-4 theme-card-shadow">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-accent-subtle text-accent border border-accent-subtle">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-primary">
                Full-Stack + AI Pipeline Integration
              </h4>
              <p className="text-[11px] text-secondary">
                From database schemas in PostgreSQL/MySQL to deep learning models and deployed web applications.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-accent font-medium">
            <span>VFSTR CSE • 2024–2028</span>
          </div>
        </div>

      </div>
    </section>
  );
};
