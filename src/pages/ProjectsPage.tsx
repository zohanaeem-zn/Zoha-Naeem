import React, { useState, useMemo } from 'react';
import { PageId, Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenResume?: () => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenResume,
  onSelectProject
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesFilter = activeFilter === 'all' || p.category === activeFilter;
      const matchesSearch =
        searchQuery.trim() === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="w-full bg-[#faf8ff] pb-16">
      {/* Atmospheric Chromatic Underlay */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 -left-20 w-96 h-96 bg-[#ffb2b7]/30 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-48 -right-24 w-[28rem] h-[28rem] bg-[#e1e0ff]/50 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[#6ffbbe]/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-12">
          {/* Editorial Header Block */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eaedff] rounded-full mb-3 border border-[#dae2fd]/60">
                <span className="w-2 h-2 rounded-full bg-[#b90538] animate-pulse" />
                <span className="font-label-sm text-[11px] text-[#b90538] tracking-wider uppercase font-bold">
                  Featured Projects &amp; Software Architecture
                </span>
              </div>
              <h1 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e] tracking-tight leading-[1.08]">
                Featured Projects &amp; Engineering Work
              </h1>
              <p className="font-body-lg text-[16px] sm:text-[18px] text-[#5b4041] mt-2.5 leading-relaxed">
                Key software engineering projects, research-based AI systems, and custom web applications designed, built, and maintained by Zoha Naeem.
              </p>
            </div>

            {/* Metric Callout Ticker */}
            <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_8px_32px_-4px_rgba(70,72,212,0.06)] border border-[#dae2fd]/60">
              <div className="flex flex-col">
                <span className="font-label-sm text-[11px] text-[#5b4041] uppercase tracking-wider font-semibold">
                  FYP Evaluation
                </span>
                <span className="font-headline-md text-2xl text-[#b90538] font-extrabold tracking-tight">
                  Grade A+
                </span>
              </div>
              <div className="w-px h-10 bg-[#dae2fd]" />
              <div className="flex flex-col">
                <span className="font-label-sm text-[11px] text-[#5b4041] uppercase tracking-wider font-semibold">
                  Department Rank
                </span>
                <div className="flex items-center gap-1">
                  <span className="font-headline-md text-2xl text-[#006947] font-extrabold tracking-tight">
                    3rd Pos
                  </span>
                  <span className="material-symbols-outlined text-[20px] text-[#006947]">military_tech</span>
                </div>
              </div>
            </div>
          </div>

          {/* Search & Filter Controls Strip */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#dae2fd]/60">
            {/* Filter Pills */}
            <div className="inline-flex flex-wrap p-1.5 bg-[#f2f3ff] rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-[#dae2fd]/60">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-4 sm:px-5 py-2 rounded-full font-label-md text-[13px] transition-all cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-white text-[#131b2e] shadow-[0_2px_8px_rgba(70,72,212,0.08)] font-bold'
                    : 'text-[#5b4041] hover:text-[#131b2e]'
                }`}
              >
                All Projects
                <span className="ml-1.5 text-[11px] text-[#5b4041] px-1.5 py-0.5 rounded-full bg-[#eaedff]">
                  {PROJECTS.length}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('academic')}
                className={`px-4 sm:px-5 py-2 rounded-full font-label-md text-[13px] transition-all cursor-pointer ${
                  activeFilter === 'academic'
                    ? 'bg-white text-[#131b2e] shadow-[0_2px_8px_rgba(70,72,212,0.08)] font-bold'
                    : 'text-[#5b4041] hover:text-[#131b2e]'
                }`}
              >
                Research FYP (A+)
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('full-stack')}
                className={`px-4 sm:px-5 py-2 rounded-full font-label-md text-[13px] transition-all cursor-pointer ${
                  activeFilter === 'full-stack'
                    ? 'bg-white text-[#131b2e] shadow-[0_2px_8px_rgba(70,72,212,0.08)] font-bold'
                    : 'text-[#5b4041] hover:text-[#131b2e]'
                }`}
              >
                Luminar Learning
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('frontend')}
                className={`px-4 sm:px-5 py-2 rounded-full font-label-md text-[13px] transition-all cursor-pointer ${
                  activeFilter === 'frontend'
                    ? 'bg-white text-[#131b2e] shadow-[0_2px_8px_rgba(70,72,212,0.08)] font-bold'
                    : 'text-[#5b4041] hover:text-[#131b2e]'
                }`}
              >
                Portfolio Website (Made by Me)
              </button>
            </div>

            {/* Search input */}
            <div className="relative w-full md:w-64">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-[18px] text-[#5b4041]">
                search
              </span>
              <input
                type="text"
                placeholder="Search Python, SQL, C++..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-full bg-white border border-[#dae2fd] text-[13px] text-[#131b2e] placeholder-[#5b4041]/60 focus:outline-none focus:border-[#b90538] focus:ring-1 focus:ring-[#b90538] transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="project-card group flex flex-col bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-[0_8px_32px_-4px_rgba(70,72,212,0.06)] hover:shadow-[0_16px_40px_-8px_rgba(244,63,94,0.15)] hover:-translate-y-1.5 transition-all duration-300 border border-[#dae2fd]/60"
              >
                {/* Thumbnail Mockup with Scrim */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="relative w-full h-52 rounded-xl overflow-hidden bg-[#eaedff] mb-4 cursor-pointer"
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#283044]/80 via-[#283044]/10 to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-[#dae2fd]/60">
                    <span className="w-2 h-2 rounded-full bg-[#006947]" />
                    <span className="font-label-sm text-[11px] font-bold text-[#131b2e]">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Bottom Stats Quick Pill */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[12px] font-medium">
                    <span className="bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {project.stats[0]?.label}: <strong>{project.stats[0]?.value}</strong>
                    </span>
                    <span className="bg-white/20 hover:bg-white/30 px-2.5 py-1 rounded-full backdrop-blur-sm flex items-center gap-1 font-semibold transition-colors">
                      Details <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </span>
                  </div>
                </div>

                {/* Card Header & Content */}
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="font-headline-sm text-[18px] font-bold text-[#131b2e] group-hover:text-[#b90538] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                  </div>

                  <p className="font-body-sm text-[13px] text-[#5b4041] line-clamp-2 mb-4 leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Architecture solution highlight snippet */}
                  <div className="p-3 rounded-xl bg-[#f2f3ff] border border-[#dae2fd]/50 mb-4 text-[12px] text-[#5b4041] flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#006947] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="line-clamp-2">{project.architectureNotes[0]}</span>
                  </div>

                  {/* Tags */}
                  <div className="mt-auto pt-3 border-t border-[#dae2fd]/40 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-full bg-[#eaedff] text-[#131b2e] font-label-sm text-[11px] font-medium border border-[#dae2fd]/50"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded-full bg-[#f2f3ff] text-[#5b4041] text-[10px] font-semibold">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action row */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#dae2fd]/40">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 font-label-md text-[12px] font-bold text-[#b90538] hover:text-[#dc2c4f] transition-colors cursor-pointer"
                    >
                      <span>View Case Study</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                    </button>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-[#f2f3ff] hover:bg-[#eaedff] flex items-center justify-center text-[#5b4041] hover:text-[#131b2e] transition-colors"
                        title="View Source Code"
                      >
                        <span className="material-symbols-outlined text-[16px]">code</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty state if search has no results */}
          {filteredProjects.length === 0 && (
            <div className="py-16 text-center flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-[#5b4041] mb-2">search_off</span>
              <h3 className="text-lg font-bold text-[#131b2e]">No projects match your query</h3>
              <p className="text-sm text-[#5b4041] mt-1">Try searching for other tools or reset filters</p>
              <button
                type="button"
                onClick={() => {
                  setActiveFilter('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-1.5 rounded-full bg-[#b90538] text-white text-xs font-bold"
              >
                Reset Search
              </button>
            </div>
          )}

          {/* Bottom Callout Banner */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#131b2e] via-[#283044] to-[#131b2e] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-[11px] text-[#ffdadb] uppercase tracking-wider font-bold">
                Technical Rigor &amp; Teaching Excellence
              </span>
              <h3 className="text-2xl font-bold tracking-tight">
                Want to review the complete source code or lab syllabi?
              </h3>
              <p className="text-sm text-white/80 max-w-xl">
                I can provide detailed curriculum outlines, laboratory documentation, and academic transcripts upon request.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 rounded-full bg-white text-[#131b2e] font-bold text-xs hover:bg-[#faf8ff] transition-all shadow cursor-pointer"
              >
                Contact Zoha
              </button>
              <button
                type="button"
                onClick={() => onNavigate('web-development')}
                className="px-5 py-2.5 rounded-full bg-white/10 text-white font-bold text-xs hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
              >
                Explore Web Development
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
