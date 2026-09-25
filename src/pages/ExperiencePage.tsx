import React, { useState } from 'react';
import { PageId } from '../types';
import { EXPERIENCES, TESTIMONIALS, CORE_STRENGTHS } from '../data/portfolioData';

interface ExperiencePageProps {
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

type ExperienceCategoryFilter = 'all' | 'frontend' | 'marketing' | 'teaching';

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onNavigate, onOpenResume }) => {
  const [activeCategory, setActiveCategory] = useState<ExperienceCategoryFilter>('all');

  const practicalExperiences = EXPERIENCES;

  const filtered = practicalExperiences.filter((exp) => {
    if (activeCategory === 'all') return true;
    return exp.category === activeCategory;
  });

  return (
    <div className="w-full bg-[#faf8ff] pb-16">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f3ff]/80 to-[#faf8ff] pt-12 pb-14 border-b border-[#dae2fd]/50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col gap-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e1e0ff] text-[#4648d4] font-label-sm text-[11px] font-bold w-fit">
                <span className="material-symbols-outlined text-[14px]">work</span>
                Practical Track Record
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ecfdf5] text-[#047857] font-label-sm text-[11px] font-bold shadow-xs border border-[#a7f3d0]">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                Available for On-site (Lahore), Remote &amp; Hybrid
              </span>
            </div>
            <h1 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e] tracking-tight">
              Work Experience &amp; Practical Roles
            </h1>
            <p className="text-[15px] sm:text-[17px] text-[#5b4041] leading-relaxed">
              Demonstrated hands-on performance across frontend software engineering, contractual digital marketing &amp; e-commerce growth campaigns, and collegiate computer science instruction.
            </p>
          </div>

          {/* Quick Stat Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#dae2fd]/60">
            <div className="p-4 rounded-2xl bg-white shadow-sm border border-[#dae2fd]/60 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#4648d4]">Frontend Dev</span>
                <span className="material-symbols-outlined text-[#4648d4] text-[20px]">laptop_chromebook</span>
              </div>
              <span className="text-[12px] text-[#5b4041] font-semibold mt-1">Samsolutionz Software House</span>
            </div>
            <div className="p-4 rounded-2xl bg-white shadow-sm border border-[#dae2fd]/60 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#b90538]">Digital Growth</span>
                <span className="material-symbols-outlined text-[#b90538] text-[20px]">trending_up</span>
              </div>
              <span className="text-[12px] text-[#5b4041] font-semibold mt-1">Meta &amp; Google Ads (Dubi Homes Contract)</span>
            </div>
            <div className="p-4 rounded-2xl bg-white shadow-sm border border-[#dae2fd]/60 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#006947]">2+ Years</span>
                <span className="material-symbols-outlined text-[#006947] text-[20px]">school</span>
              </div>
              <span className="text-[12px] text-[#5b4041] font-semibold mt-1">Collegiate CS Instruction (150+ Students)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths Section */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-10">
        <div className="mb-6">
          <span className="font-label-sm text-[11px] text-[#b90538] font-bold uppercase tracking-wider">
            Signature Competencies
          </span>
          <h2 className="text-2xl font-bold text-[#131b2e] mt-1">Core Professional Strengths</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CORE_STRENGTHS.map((strength) => (
            <div
              key={strength.title}
              className="p-5 rounded-2xl bg-white border border-[#dae2fd]/70 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-[#f2f3ff] text-[#4648d4] flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">{strength.icon}</span>
              </div>
              <h3 className="font-bold text-[15px] text-[#131b2e]">{strength.title}</h3>
              <p className="text-[13px] text-[#5b4041] leading-relaxed">{strength.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filter Tabs for Practical Roles */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-[#dae2fd]/60">
          <div className="flex items-center gap-1.5 p-1 bg-[#f2f3ff] rounded-full border border-[#dae2fd]/60 flex-wrap">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeCategory === 'all' ? 'bg-[#131b2e] text-white font-bold' : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              All Experience ({practicalExperiences.length})
            </button>
            <button
              onClick={() => setActiveCategory('frontend')}
              className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeCategory === 'frontend' ? 'bg-[#131b2e] text-white font-bold' : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              Frontend Web Dev
            </button>
            <button
              onClick={() => setActiveCategory('marketing')}
              className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeCategory === 'marketing' ? 'bg-[#131b2e] text-white font-bold' : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              Digital Marketing &amp; Ads
            </button>
            <button
              onClick={() => setActiveCategory('teaching')}
              className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeCategory === 'teaching' ? 'bg-[#131b2e] text-white font-bold' : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              Collegiate Instruction
            </button>
          </div>
        </div>
      </section>

      {/* Experience Timeline Cards */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <div className="space-y-8">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#dae2fd]/80 shadow-[0_4px_24px_rgba(70,72,212,0.04)] hover:shadow-[0_8px_32px_rgba(70,72,212,0.08)] transition-all flex flex-col gap-5"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#dae2fd]/50">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#131b2e]">
                      {item.role}
                    </h2>
                    <span
                      className={`px-3 py-0.5 rounded-full font-label-sm text-[11px] font-bold ${
                        item.badgeColor === 'primary'
                          ? 'bg-[#ffdadb] text-[#b90538]'
                          : item.badgeColor === 'secondary'
                          ? 'bg-[#e1e0ff] text-[#4648d4]'
                          : 'bg-[#6ffbbe]/40 text-[#006947]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[14px] text-[#5b4041] mt-1 font-medium flex-wrap">
                    {item.websiteUrl ? (
                      <a
                        href={item.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#131b2e] hover:text-[#dc2c4f] flex items-center gap-1 underline underline-offset-2 decoration-[#dae2fd]"
                      >
                        <span>{item.company}</span>
                        <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                      </a>
                    ) : (
                      <span className="font-semibold text-[#131b2e]">{item.company}</span>
                    )}
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">pin_drop</span>
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2f3ff] text-[#131b2e] font-mono text-[12px] font-semibold w-fit">
                  <span className="material-symbols-outlined text-[14px] text-[#4648d4]">calendar_today</span>
                  {item.period}
                </div>
              </div>

              {/* Summary */}
              <p className="text-[14px] sm:text-[15px] text-[#5b4041] leading-relaxed">
                {item.summary}
              </p>

              {/* External Live Links (e.g. Website, Facebook, Instagram) */}
              {item.links && item.links.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap p-3 rounded-xl bg-[#faf8ff] border border-[#dae2fd]/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#131b2e] mr-1">
                    Live Links &amp; Profiles:
                  </span>
                  {item.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#131b2e] text-[12px] font-semibold border border-[#dae2fd] hover:border-[#b90538] hover:text-[#b90538] transition-all shadow-xs"
                    >
                      <span className="material-symbols-outlined text-[14px] text-[#dc2c4f]">
                        {link.icon || 'link'}
                      </span>
                      <span>{link.label}</span>
                      <span className="material-symbols-outlined text-[12px] opacity-70">open_in_new</span>
                    </a>
                  ))}
                </div>
              )}

              {/* Achievements bullet list */}
              <div>
                <h3 className="font-label-sm text-[12px] font-bold text-[#131b2e] uppercase tracking-wider mb-2.5">
                  Key Practical Responsibilities &amp; Deliverables
                </h3>
                <ul className="space-y-2">
                  {item.achievements.map((achieve, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-[#5b4041]">
                      <span className="material-symbols-outlined text-[16px] text-[#b90538] mt-0.5 shrink-0">
                        check_circle
                      </span>
                      <span>{achieve}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies / Skills tags */}
              <div className="pt-3 border-t border-[#dae2fd]/40 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-bold text-[#131b2e] uppercase tracking-wider mr-2">
                  Core Skills &amp; Tools:
                </span>
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full bg-[#f2f3ff] text-[#131b2e] text-[11px] font-medium border border-[#dae2fd]/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations Quote Block */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#131b2e] via-[#283044] to-[#131b2e] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="font-label-sm text-[11px] text-[#ffdadb] uppercase tracking-widest font-bold">
              Institutional Endorsement
            </span>
            <blockquote className="text-[16px] sm:text-[18px] font-medium text-white/95 italic leading-relaxed">
              &ldquo;{TESTIMONIALS[0].quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#dc2c4f] to-[#b90538] flex items-center justify-center font-bold text-white text-sm">
                {TESTIMONIALS[0].avatarInitials}
              </div>
              <div>
                <p className="font-bold text-[14px] text-white">{TESTIMONIALS[0].author}</p>
                <p className="text-[12px] text-white/70">{TESTIMONIALS[0].title}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-full bg-white text-[#131b2e] font-label-md text-[13px] font-bold hover:bg-[#faf8ff] transition-all shadow-md cursor-pointer text-center"
            >
              Contact Zoha Naeem
            </button>
            <button
              onClick={() => onNavigate('web-development')}
              className="px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 font-label-md text-[13px] font-bold transition-all border border-white/20 cursor-pointer text-center"
            >
              Explore Web Development
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
