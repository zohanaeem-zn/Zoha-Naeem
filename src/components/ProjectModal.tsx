import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onNavigateToContact }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#dae2fd] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header with image hero */}
        <div className="relative h-64 sm:h-72 w-full bg-[#131b2e] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] via-[#131b2e]/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full bg-[#dc2c4f] text-white text-[11px] font-bold uppercase tracking-wider mb-2">
              {project.categoryLabel}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-white/80 text-[14px] mt-1 max-w-xl">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#f2f3ff] border border-[#dae2fd]/60">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col text-center">
                <span className="text-xl sm:text-2xl font-extrabold text-[#b90538]">
                  {stat.value}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5b4041] mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <h3 className="font-bold text-[16px] text-[#131b2e] mb-2">Project Overview</h3>
            <p className="text-[14px] text-[#5b4041] leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Technical Architecture Notes */}
          <div>
            <h3 className="font-bold text-[16px] text-[#131b2e] mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4648d4] text-[18px]">memory</span>
              Technical Architecture &amp; Execution
            </h3>
            <ul className="space-y-2">
              {project.architectureNotes.map((note, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-[13px] text-[#5b4041]">
                  <span className="material-symbols-outlined text-[16px] text-[#4648d4] mt-0.5 flex-shrink-0">
                    check_circle
                  </span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Growth & Business Impact */}
          <div>
            <h3 className="font-bold text-[16px] text-[#131b2e] mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#006947] text-[18px]">trending_up</span>
              Growth &amp; Acquisition Velocity
            </h3>
            <ul className="space-y-2">
              {project.growthHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-[13px] text-[#5b4041]">
                  <span className="material-symbols-outlined text-[16px] text-[#006947] mt-0.5 flex-shrink-0">
                    rocket_launch
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code snippet if available */}
          {project.featuredSnippet && (
            <div>
              <h3 className="font-bold text-[15px] text-[#131b2e] mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#131b2e] text-[18px]">terminal</span>
                Engine Implementation Snippet
              </h3>
              <div className="bg-[#283044] text-[#eef0ff] p-4 rounded-xl font-mono text-[12px] leading-relaxed overflow-x-auto shadow-inner">
                <pre>{project.featuredSnippet}</pre>
              </div>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div>
            <h3 className="font-label-sm text-[11px] font-bold text-[#5b4041] uppercase tracking-wider mb-2">
              Technology Ecosystem
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-[#eaedff] text-[#131b2e] text-[12px] font-medium border border-[#dae2fd]/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-[#f2f3ff] border-t border-[#dae2fd] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white hover:bg-[#eaedff] text-[#131b2e] text-[12px] font-bold border border-[#dae2fd] shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">code</span>
                View Repository
              </a>
            )}
            {project.id === 'portfolio-website' ? (
              <button
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#006947] hover:bg-[#005236] text-white text-[12px] font-bold shadow-sm transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">visibility</span>
                Currently Viewing Live Site
              </button>
            ) : project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#4648d4] hover:bg-[#2f2ebe] text-white text-[12px] font-bold shadow-sm transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                Explore on GitHub
              </a>
            ) : null}
          </div>

          <button
            onClick={() => {
              onClose();
              onNavigateToContact();
            }}
            className="px-4 py-2 rounded-full bg-[#dc2c4f] hover:bg-[#b90538] text-white text-[12px] font-bold shadow-sm transition-all cursor-pointer"
          >
            Discuss Similar Build
          </button>
        </div>
      </div>
    </div>
  );
};
