import React, { useState } from 'react';
import { PageId, Project } from '../types';
import { PROJECTS, EXPERIENCES } from '../data/portfolioData';

interface WebDevelopmentPageProps {
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
  onSelectProject: (project: Project) => void;
}

interface WebSkill {
  name: string;
  level: number;
  badge: string;
  deliverable: string;
  tags: string[];
}

export const WebDevelopmentPage: React.FC<WebDevelopmentPageProps> = ({
  onNavigate,
  onOpenResume,
  onSelectProject
}) => {
  const [activeSkillTab, setActiveSkillTab] = useState<'all' | 'frontend' | 'backend' | 'systems'>('all');

  // Frontend intern experience at Samsolutionz
  const webExperience = EXPERIENCES.find((exp) => exp.category === 'frontend') || {
    role: 'Frontend Developer Intern',
    company: 'Samsolutionz Software House',
    websiteUrl: 'https://samsolutionz.com',
    period: 'June 15 – September 15',
    location: 'Software House',
    badge: 'Frontend Web Engineering',
    badgeColor: 'secondary' as const,
    summary:
      'Worked as a Frontend Developer Intern at Samsolutionz Software House, gaining practical experience in frontend web development and working within a professional software development environment.',
    achievements: [
      'Gained practical, hands-on experience in modern frontend web development within a fast-paced software house environment.',
      'Built and refined responsive, accessible web page interfaces using clean HTML5, CSS3, modern JavaScript, and UI styling techniques.',
      'Translated wireframes and client UI mockups into interactive, pixel-perfect web components with fluid user interactions.',
      'Collaborated within professional sprint workflows, adhering to Git version control standards and participating in peer code reviews.',
      'Diagnosed and resolved cross-browser rendering inconsistencies, enhancing page load times and user experience across desktop and mobile devices.'
    ],
    technologies: [
      'Frontend Web Development',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Responsive Design',
      'Git Version Control',
      'UI/UX Implementation',
      'Cross-Browser Testing'
    ]
  };

  const webSkills: (WebSkill & { category: 'frontend' | 'backend' | 'systems' })[] = [
    {
      name: 'HTML5 & Semantic Markup',
      level: 95,
      category: 'frontend',
      badge: 'Core Markup',
      deliverable: 'Accessible, clean DOM structures adhering to W3C standards and SEO best practices.',
      tags: ['Semantic HTML', 'Accessibility (a11y)', 'DOM Hierarchy', 'SEO Metadata']
    },
    {
      name: 'CSS3, Tailwind CSS & Responsive Layouts',
      level: 92,
      category: 'frontend',
      badge: 'Styling & Design',
      deliverable: 'Fluid mobile-first responsive grids, Flexbox architectures, and custom CSS animations.',
      tags: ['Tailwind CSS', 'Mobile-First Design', 'Flexbox & CSS Grid', 'Fluid Typography']
    },
    {
      name: 'JavaScript (ES6+) & DOM Engineering',
      level: 90,
      category: 'frontend',
      badge: 'Dynamic UI',
      deliverable: 'Event handling, asynchronous API integrations, promises, and dynamic component rendering.',
      tags: ['Async/Await & Fetch', 'DOM Manipulation', 'Event Driven UI', 'Modern JS (ES6+)']
    },
    {
      name: 'UI/UX Implementation & Figma-to-Code',
      level: 90,
      category: 'frontend',
      badge: 'Pixel Precision',
      deliverable: 'Translating design mockups and wireframes into pixel-perfect, interactive web pages.',
      tags: ['Figma to Code', 'Component Architecture', 'Cross-Browser QA', 'Interactive Prototyping']
    },
    {
      name: 'Python Programming',
      level: 78,
      category: 'systems',
      badge: 'Scripting & Automation',
      deliverable: 'Data processing scripts, algorithmic problem-solving, automated utilities, CSV/text parsing, and computational logic (focused on scripting & data processing; not web backend).',
      tags: ['Python Scripting', 'Data Processing', 'Algorithms', 'Automation', 'Text Parsing']
    },
    {
      name: 'SQL & Relational DBMS (3NF / ACID)',
      level: 92,
      category: 'backend',
      badge: 'Database Design',
      deliverable: 'Normalized database schemas, complex multi-table JOINs, indexing, and referential constraints.',
      tags: ['Relational Schemas', '3NF / BCNF', 'Multi-Table JOINs', 'Index Optimization']
    },
    {
      name: 'C++ & Object-Oriented Systems',
      level: 90,
      category: 'systems',
      badge: 'High Performance',
      deliverable: 'Algorithmic models, pointer/memory allocation, OOP inheritance, and data structure benches.',
      tags: ['Memory Pointers', 'Inheritance & Polymorphism', 'DSA Complexity', 'System Performance']
    },
    {
      name: 'Git, GitHub & Version Control',
      level: 88,
      category: 'systems',
      badge: 'Collaboration',
      deliverable: 'Branch management, pull requests, semantic commit conventions, and repository maintenance.',
      tags: ['GitHub Workflows', 'Branching & Merges', 'Code Reviews', 'Release Tagging']
    }
  ];

  const filteredSkills = activeSkillTab === 'all'
    ? webSkills
    : webSkills.filter((s) => s.category === activeSkillTab);

  // Web and software projects
  const webProjects = PROJECTS.filter((p) =>
    ['full-stack', 'frontend', 'academic', 'open-source'].includes(p.category) ||
    p.tags.some((t) => ['JavaScript', 'HTML/CSS', 'Python', 'SQL', 'C++', 'React', 'TypeScript'].includes(t))
  );

  return (
    <div className="w-full bg-[#faf8ff] pb-16">
      {/* 1. HERO HEADER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f3ff]/90 via-[#faf8ff] to-[#faf8ff] pt-12 pb-16 border-b border-[#dae2fd]/60">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#b90538] font-label-sm text-[12px] font-bold shadow-xs border border-[#ffdadb]">
                <span className="material-symbols-outlined text-[15px]">code</span>
                Web Development &amp; Software Engineering
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#4648d4] font-label-sm text-[12px] font-bold shadow-xs border border-[#dae2fd]">
                <span className="material-symbols-outlined text-[15px]">apartment</span>
                Samsolutionz Software House Experience
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ecfdf5] text-[#047857] font-label-sm text-[12px] font-bold shadow-xs border border-[#a7f3d0]">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                Available for On-site (Lahore), Remote &amp; Hybrid
              </span>
            </div>

            <h1 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e] tracking-tight leading-[1.15]">
              Frontend Web Engineering &amp; Modern Architecture
            </h1>

            <p className="text-[16px] sm:text-[18px] text-[#5b4041] leading-relaxed">
              Combining foundational computer science rigor with practical software house experience. I specialize in building responsive, accessible, and fast web interfaces backed by clean JavaScript/TypeScript, relational database schemas, and robust algorithms.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-full bg-[#dc2c4f] text-white font-label-md text-[13px] font-bold shadow-[0_4px_18px_rgba(220,44,79,0.3)] hover:bg-[#b90538] transition-all cursor-pointer flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">terminal</span>
                <span>Hire for Web Development</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('digital-marketing')}
                className="px-6 py-3 rounded-full bg-white text-[#131b2e] font-label-md text-[13px] font-bold border border-[#dae2fd] shadow-xs hover:bg-[#eaedff] transition-all cursor-pointer flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px] text-[#b90538]">trending_up</span>
                <span>Explore Digital Marketing</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-6 border-t border-[#dae2fd]/60">
            <div className="p-4 rounded-2xl bg-white shadow-xs border border-[#dae2fd]/70">
              <span className="text-2xl font-black text-[#b90538]">Samsolutionz</span>
              <p className="text-[12px] text-[#5b4041] font-semibold mt-0.5">Frontend Intern Experience</p>
            </div>
            <div className="p-4 rounded-2xl bg-white shadow-xs border border-[#dae2fd]/70">
              <span className="text-2xl font-black text-[#4648d4]">3+ Years</span>
              <p className="text-[12px] text-[#5b4041] font-semibold mt-0.5">HTML5, CSS3 &amp; JavaScript</p>
            </div>
            <div className="p-4 rounded-2xl bg-white shadow-xs border border-[#dae2fd]/70">
              <span className="text-2xl font-black text-[#006947]">Python &amp; C++</span>
              <p className="text-[12px] text-[#5b4041] font-semibold mt-0.5">Algorithmic &amp; Systems Logic</p>
            </div>
            <div className="p-4 rounded-2xl bg-white shadow-xs border border-[#dae2fd]/70">
              <span className="text-2xl font-black text-[#131b2e]">3NF SQL</span>
              <p className="text-[12px] text-[#5b4041] font-semibold mt-0.5">Relational DBMS Modeling</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRACTICAL WORK EXPERIENCE IN WEB DEVELOPMENT */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-14">
        <div className="mb-8">
          <span className="font-label-sm text-[12px] text-[#b90538] font-bold uppercase tracking-wider">
            Hands-On Industry Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] tracking-tight mt-1">
            Web Development Work Experience
          </h2>
          <p className="text-[14px] sm:text-[15px] text-[#5b4041] mt-1 max-w-2xl">
            Practical development in a commercial software house setting, shipping front-end interfaces, collaborating in sprints, and adhering to strict software engineering standards.
          </p>
        </div>

        {/* Samsolutionz Experience Card */}
        <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#dae2fd]/80 shadow-[0_6px_28px_rgba(70,72,212,0.05)] hover:shadow-lg transition-all flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#dae2fd]/60">
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="text-2xl font-extrabold text-[#131b2e]">
                  {webExperience.role}
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#e1e0ff] text-[#4648d4] text-[11px] font-bold">
                  {webExperience.badge}
                </span>
              </div>
              <div className="flex items-center gap-3 text-[14px] text-[#5b4041] mt-1.5 flex-wrap">
                <a
                  href="https://samsolutionz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#131b2e] hover:text-[#b90538] flex items-center gap-1.5 underline underline-offset-2 decoration-[#dae2fd]"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#4648d4]">domain</span>
                  <span>{webExperience.company}</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">location_on</span>
                  <span>Professional Software House</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2f3ff] text-[#131b2e] font-mono text-[12px] font-semibold w-fit">
                <span className="material-symbols-outlined text-[14px] text-[#4648d4]">calendar_today</span>
                {webExperience.period}
              </span>
              <a
                href="https://samsolutionz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#faf8ff] text-[#4648d4] text-[12px] font-semibold border border-[#dae2fd] hover:bg-[#e1e0ff] transition-all"
              >
                <span>Visit samsolutionz.com</span>
                <span className="material-symbols-outlined text-[12px]">arrow_outward</span>
              </a>
            </div>
          </div>

          <p className="text-[15px] text-[#5b4041] leading-relaxed bg-[#faf8ff] p-4 rounded-2xl border border-[#dae2fd]/50">
            {webExperience.summary}
          </p>

          <div>
            <h4 className="font-label-sm text-[12px] font-bold text-[#131b2e] uppercase tracking-wider mb-3">
              Key Responsibilities &amp; Development Highlights:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {webExperience.achievements.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#dae2fd]/60">
                  <span className="material-symbols-outlined text-[16px] text-[#4648d4] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span className="text-[13px] text-[#5b4041] leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#dae2fd]/50 flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-bold text-[#131b2e] uppercase tracking-wider mr-2">
              Technologies &amp; Environment:
            </span>
            {webExperience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-full bg-[#f2f3ff] text-[#131b2e] text-[11px] font-semibold border border-[#dae2fd]/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DOMAIN SKILLS DETAILS FOR WEB DEVELOPMENT */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-14 border-t border-[#dae2fd]/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-label-sm text-[12px] text-[#4648d4] font-bold uppercase tracking-wider">
              Technical Competencies
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] tracking-tight mt-1">
              Web Development Skills &amp; Deliverables
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#5b4041] mt-1 max-w-2xl">
              From responsive frontend components to normalized database schemas and clean backend logic.
            </p>
          </div>

          {/* Skill Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#f2f3ff] rounded-full border border-[#dae2fd]/60 self-start md:self-auto">
            <button
              onClick={() => setActiveSkillTab('all')}
              className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeSkillTab === 'all' ? 'bg-[#131b2e] text-white font-bold' : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              All Skills ({webSkills.length})
            </button>
            <button
              onClick={() => setActiveSkillTab('frontend')}
              className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeSkillTab === 'frontend' ? 'bg-[#131b2e] text-white font-bold' : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              Frontend UI
            </button>
            <button
              onClick={() => setActiveSkillTab('backend')}
              className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeSkillTab === 'backend' ? 'bg-[#131b2e] text-white font-bold' : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              Databases &amp; SQL
            </button>
            <button
              onClick={() => setActiveSkillTab('systems')}
              className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeSkillTab === 'systems' ? 'bg-[#131b2e] text-white font-bold' : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              CS, Python &amp; Tools
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-white border border-[#dae2fd]/80 hover:border-[#4648d4]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-[#f2f3ff] text-[10px] font-extrabold text-[#4648d4] uppercase">
                    {skill.badge}
                  </span>
                </div>

                <h3 className="font-bold text-[15px] text-[#131b2e] mb-2">{skill.name}</h3>

                {/* Progress bar */}
                <div className="w-full bg-[#dae2fd]/50 h-1.5 rounded-full overflow-hidden mb-3">
                  <div
                    className="bg-gradient-to-r from-[#4648d4] to-[#dc2c4f] h-full rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <div className="text-[11px] text-[#131b2e] font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px] text-[#006947]">task_alt</span>
                  <span>Practical Deliverable</span>
                </div>
                <p className="text-[12px] text-[#5b4041] leading-relaxed mb-3">
                  {skill.deliverable}
                </p>
              </div>

              <div className="pt-3 border-t border-[#dae2fd]/50 flex flex-wrap gap-1">
                {skill.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md bg-[#faf8ff] text-[#131b2e] text-[10px] font-medium border border-[#dae2fd]/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WEB DEVELOPMENT PROJECTS & CODE REPOSITORIES */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-14 border-t border-[#dae2fd]/60">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-label-sm text-[12px] text-[#006947] font-bold uppercase tracking-wider">
              Code &amp; Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] tracking-tight mt-1">
              Web &amp; Software Projects
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#5b4041] mt-1 max-w-2xl">
              Production-focused applications, normalized relational schemas, and interactive code workbenches.
            </p>
          </div>

          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-1 text-[13px] font-bold text-[#4648d4] hover:underline self-start sm:self-auto cursor-pointer"
          >
            <span>View All {PROJECTS.length} Projects in Catalog</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-3xl bg-white border border-[#dae2fd]/80 shadow-[0_4px_20px_rgba(70,72,212,0.03)] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#f2f3ff] text-[#4648d4] text-[11px] font-bold">
                    {project.categoryLabel}
                  </span>
                  <span className="material-symbols-outlined text-[20px] text-[#5b4041]">
                    terminal
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#131b2e] mb-1">
                  {project.title}
                </h3>
                <p className="text-[12px] text-[#b90538] font-medium mb-3">
                  {project.tagline}
                </p>
                <p className="text-[13px] text-[#5b4041] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key stats */}
                <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-[#faf8ff] border border-[#dae2fd]/50 mb-4">
                  {project.stats.map((s, idx) => (
                    <div key={idx} className="flex flex-col text-center">
                      <span className="text-[13px] font-bold text-[#131b2e]">{s.value}</span>
                      <span className="text-[10px] text-[#5b4041] truncate">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-[#f2f3ff] text-[#131b2e] text-[10px] font-medium border border-[#dae2fd]/60"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md bg-white text-[#5b4041] text-[10px] font-medium">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                <div className="pt-3 border-t border-[#dae2fd]/50 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="px-3.5 py-1.5 rounded-full bg-[#131b2e] text-white text-[12px] font-bold hover:bg-[#4648d4] transition-all cursor-pointer flex items-center gap-1 shadow-xs"
                  >
                    <span>View Architecture</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full bg-[#f2f3ff] text-[#131b2e] hover:bg-[#dae2fd] transition-all"
                      title="GitHub Repository"
                    >
                      <span className="material-symbols-outlined text-[18px]">code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 pt-6 pb-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#131b2e] via-[#283044] to-[#131b2e] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 max-w-xl text-center md:text-left">
            <span className="font-label-sm text-[11px] text-[#ffdadb] uppercase tracking-widest font-bold">
              Engineering Collaboration
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Looking for a disciplined Frontend &amp; Web Developer?
            </h3>
            <p className="text-[14px] text-white/80">
              Ready to build responsive web interfaces, optimize frontend performance, and write clean, maintainable code for your team.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-full bg-white text-[#131b2e] font-label-md text-[13px] font-bold hover:bg-[#faf8ff] transition-all shadow-md cursor-pointer"
            >
              Get in Touch with Zoha
            </button>
            <button
              onClick={() => onNavigate('digital-marketing')}
              className="px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 font-label-md text-[13px] font-bold transition-all border border-white/20 cursor-pointer"
            >
              Explore Digital Marketing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
