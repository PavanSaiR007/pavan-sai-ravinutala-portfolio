import React, { useState } from 'react';
import { 
  Code2, 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles, 
  Terminal, 
  Eye,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { OrbitIqDemo } from './OrbitIqDemo';
import { CampusRadarDemo } from './CampusRadarDemo';
import { F1TrackerDemo } from './F1TrackerDemo';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ai' | 'fullstack' | 'web'>('all');
  const [activeInteractiveDemo, setActiveInteractiveDemo] = useState<'orbit-iq' | 'campus-radar' | 'f1-tracker' | null>('orbit-iq');
  const [expandedProject, setExpandedProject] = useState<string | null>('orbit-iq');

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'ai') return p.category === 'ai';
    if (selectedCategory === 'fullstack') return p.category === 'fullstack';
    if (selectedCategory === 'web') return p.category === 'web' || p.category === 'fullstack';
    return true;
  });

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>Engineering & Software Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm text-secondary mt-1 max-w-2xl">
              Production architectures, computer vision pipelines, and full-stack systems engineered with modern frameworks.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-surface border border-subtle rounded-xl overflow-x-auto text-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium ${
                selectedCategory === 'all'
                  ? 'bg-accent text-white font-semibold shadow-sm'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              All ({projects.length})
            </button>
            <button
              onClick={() => setSelectedCategory('ai')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium ${
                selectedCategory === 'ai'
                  ? 'bg-accent text-white font-semibold shadow-sm'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              AI & Computer Vision
            </button>
            <button
              onClick={() => setSelectedCategory('fullstack')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium ${
                selectedCategory === 'fullstack'
                  ? 'bg-accent text-white font-semibold shadow-sm'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              Full-Stack Systems
            </button>
            <button
              onClick={() => setSelectedCategory('web')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium ${
                selectedCategory === 'web'
                  ? 'bg-accent text-white font-semibold shadow-sm'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              Web & Django
            </button>
          </div>
        </div>

        {/* Live Interactive Sandbox Showcase */}
        {activeInteractiveDemo && (
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 px-1">
              <div className="flex items-center gap-2 text-xs font-mono text-accent">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Active Interactive Architecture Sandbox</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveInteractiveDemo('orbit-iq')}
                  className={`px-2.5 py-1 text-xs rounded-lg transition-all font-mono ${
                    activeInteractiveDemo === 'orbit-iq' 
                      ? 'bg-accent-subtle text-accent border border-accent-subtle font-semibold' 
                      : 'text-muted hover:text-primary'
                  }`}
                >
                  Orbit IQ Demo
                </button>
                <button
                  onClick={() => setActiveInteractiveDemo('campus-radar')}
                  className={`px-2.5 py-1 text-xs rounded-lg transition-all font-mono ${
                    activeInteractiveDemo === 'campus-radar' 
                      ? 'bg-accent-subtle text-accent border border-accent-subtle font-semibold' 
                      : 'text-muted hover:text-primary'
                  }`}
                >
                  Campus Radar Demo
                </button>
                <button
                  onClick={() => setActiveInteractiveDemo('f1-tracker')}
                  className={`px-2.5 py-1 text-xs rounded-lg transition-all font-mono ${
                    activeInteractiveDemo === 'f1-tracker' 
                      ? 'bg-accent-subtle text-accent border border-accent-subtle font-semibold' 
                      : 'text-muted hover:text-primary'
                  }`}
                >
                  F1 Telemetry Demo
                </button>
              </div>
            </div>

            {activeInteractiveDemo === 'orbit-iq' && <OrbitIqDemo />}
            {activeInteractiveDemo === 'campus-radar' && <CampusRadarDemo />}
            {activeInteractiveDemo === 'f1-tracker' && <F1TrackerDemo />}
          </div>
        )}

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProject === project.id;
            return (
              <div
                key={project.id}
                className="bg-surface border border-subtle hover:border-hover rounded-2xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between theme-card-shadow group"
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      {project.highlight && (
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-accent-subtle text-accent border border-accent-subtle mb-2">
                          {project.highlight}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-secondary mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {project.demoType && (
                        <button
                          onClick={() => {
                            setActiveInteractiveDemo(project.demoType as any);
                            window.scrollTo({ top: 400, behavior: 'smooth' });
                          }}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-accent-subtle hover:opacity-80 text-accent border border-accent-subtle transition-all flex items-center gap-1"
                          title="Launch interactive simulation"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Simulate</span>
                        </button>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-surface-muted hover:bg-surface-elevated border border-subtle text-secondary hover:text-primary transition-colors"
                          title="View on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-surface-muted text-secondary border border-subtle"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bullet points from Resume */}
                  <ul className="space-y-2 text-xs text-secondary leading-relaxed mb-4">
                    {project.description.slice(0, isExpanded ? project.description.length : 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer expandable toggle */}
                {project.description.length > 3 && (
                  <button
                    onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                    className="pt-3 border-t border-subtle flex items-center justify-between text-xs font-medium text-accent hover:opacity-80 transition-colors w-full"
                  >
                    <span>{isExpanded ? 'Show less points' : `View all ${project.description.length} project highlights`}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
