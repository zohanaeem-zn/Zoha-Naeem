import React, { useState } from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO, TESTIMONIALS } from '../data/portfolioData';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
  onSelectProject?: (project: any) => void;
}

type WorkDomain = 'all' | 'web-dev' | 'digital-marketing' | 'office-productivity' | 'pedagogy' | 'soft-skills';

interface SkillItem {
  name: string;
  level: number;
  experience: string;
  badge: string;
  deliverable: string;
  highlights: string[];
}

interface DomainSection {
  id: WorkDomain;
  title: string;
  subtitle: string;
  icon: string;
  badgeColor: string;
  summary: string;
  skills: SkillItem[];
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenResume }) => {
  const [selectedDomain, setSelectedDomain] = useState<WorkDomain>('all');

  const domainSections: DomainSection[] = [
    {
      id: 'web-dev',
      title: 'Web Development & Programming',
      subtitle: 'Modern software engineering, front-end architecture, and relational databases',
      icon: 'code',
      badgeColor: 'bg-[#ffdadb] text-[#b90538]',
      summary:
        'Building responsive, fast, and structured web interfaces backed by clean algorithms, normalized relational schemas, and modern JavaScript/TypeScript standards.',
      skills: [
        {
          name: 'Python & C++ Programming',
          level: 95,
          experience: '4+ Years',
          badge: 'Core Languages',
          deliverable: 'Data processing scripts, algorithmic efficiency, pointer manipulation, and OOP modular architectures',
          highlights: ['Object-Oriented Programming (OOP)', 'Data Structures & Algorithms', 'C++ asymptotic performance', 'Python automation & scripting']
        },
        {
          name: 'CS Fundamentals & Architecture',
          level: 96,
          experience: '4 Years (Roll of Honor)',
          badge: '25 A+ Subjects',
          deliverable: 'Core theoretical foundation across Data Structures, Algorithms, Operating Systems, and Computer Networks',
          highlights: ['Data Structures & Algorithms (Trees, Graphs, DP)', 'Operating Systems (Scheduling, Memory, Threads)', 'Computer Networks (OSI, TCP/IP, Sockets)', 'Software Engineering & Design Patterns']
        },
        {
          name: 'AI / ML & NLP (Sentiment Analysis)',
          level: 94,
          experience: 'Research FYP (Grade A+)',
          badge: 'Grade A+ Research',
          deliverable: 'Research-based recommendation system combining natural language processing, sentiment scoring, and machine learning heuristics',
          highlights: ['Natural Language Processing (NLP)', 'Sentiment Analysis & Text Polarity', 'Data Preprocessing & Tokenization', 'Machine Learning Recommendation Heuristics']
        },
        {
          name: 'Databases: SQL, SQLite & DBMS Design',
          level: 93,
          experience: '3+ Years',
          badge: 'ACID Relational',
          deliverable: 'Normalized database schemas (1NF–3NF/BCNF), complex multi-table JOINs, indexing, and SQLite embedded stores',
          highlights: ['Relational schema design & ER modeling', 'Complex multi-table SQL queries', 'Database constraints & ACID integrity', 'SQLite embedded applications']
        },
        {
          name: 'JavaScript & HTML5 / CSS3 (Foundational)',
          level: 88,
          experience: '3+ Years',
          badge: 'Web Technologies',
          deliverable: 'Modern responsive websites, accessible client UI components, and exposure to web application architecture',
          highlights: ['Responsive CSS/Tailwind layouts', 'DOM manipulation & events', 'Semantic HTML5 structure', 'Client-server request cycles']
        },
        {
          name: 'Git, VS Code & Version Control',
          level: 88,
          experience: '3+ Years',
          badge: 'Development Tools',
          deliverable: 'Git branching, commits, repositories, VS Code environment, and GitHub collaboration',
          highlights: ['GitHub repository management', 'Branching, staging & commits', 'VS Code configurations', 'Code review workflows']
        }
      ]
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing & Growth',
      subtitle: 'Data-informed search visibility, AI copywriting tools, paid media, and conversion funnels',
      icon: 'trending_up',
      badgeColor: 'bg-[#e1e0ff] text-[#4648d4]',
      summary:
        'Combining technical rigor with growth marketing: running Meta & Google ads, utilizing AI copywriting engines (Jasper AI, Copy.ai, Writesonic), on-page SEO (Surfer SEO), and A/B tested conversion funnels.',
      skills: [
        {
          name: 'Paid Media (Meta Ads & Google Ads)',
          level: 92,
          experience: '2+ Years',
          badge: 'Paid Acquisition',
          deliverable: 'Advantage+ campaigns, custom retargeting audiences, pixel tracking, and high-intent search ads',
          highlights: ['Meta Ads Manager & Pixel setup', 'Google Search & Shopping ads', 'Quality score & negative keywords', 'ROAS optimization']
        },
        {
          name: 'AI Copywriting (Jasper, Copy.ai, Writesonic)',
          level: 95,
          experience: '2+ Years',
          badge: 'AI Acceleration',
          deliverable: 'Rapid ad variants, high-converting product descriptions, value propositions, and email sequences',
          highlights: ['Jasper AI brand voice & variants', 'Copy.ai social & product hooks', 'Writesonic landing page copy', 'Prompt engineering & testing']
        },
        {
          name: 'Search Engine Optimization (Surfer SEO & GSC)',
          level: 92,
          experience: '3+ Years',
          badge: 'Organic Search',
          deliverable: 'On-page NLP content scoring, keyword clustering, search intent alignment, and SERP visibility',
          highlights: ['Surfer SEO content score auditing', 'Google Search Console telemetry', 'Keyword research (SEMrush/Ahrefs)', 'Technical meta tags & schema']
        },
        {
          name: 'A/B Testing & Funnel CRO',
          level: 91,
          experience: '2+ Years',
          badge: 'Experimentation',
          deliverable: 'Hypothesis-driven creative split tests, mobile checkout friction audits, and revenue lift modeling',
          highlights: ['Variant split testing', 'Checkout UX friction removal', 'Trust signal optimization', 'Bounce rate reduction']
        }
      ]
    },
    {
      id: 'office-productivity',
      title: 'MS Office & Enterprise IT Tools',
      subtitle: 'Advanced spreadsheets, automated grade ledgers, and executive report design',
      icon: 'fact_check',
      badgeColor: 'bg-[#dcf8c6] text-[#075e54]',
      summary:
        'Deep mastery of office productivity suites for meticulous record-keeping, dynamic computational spreadsheets, professional report publishing, and executive slide decks.',
      skills: [
        {
          name: 'Advanced Microsoft Excel',
          level: 96,
          experience: '5+ Years',
          badge: 'Data & Modeling',
          deliverable: 'Computational ledgers, multi-variable formulas, automated grade distribution, and pivot reporting',
          highlights: ['VLOOKUP/XLOOKUP & INDEX-MATCH', 'Nested conditional formulas', 'Pivot tables & dynamic charts', '100% record accuracy']
        },
        {
          name: 'Microsoft Word & Documentation',
          level: 95,
          experience: '5+ Years',
          badge: 'Technical Reports',
          deliverable: 'Structured technical manuals, institutional documentation, research manuscripts, and curricula',
          highlights: ['Custom hierarchical styling', 'Automated table of contents', 'Formal academic formatting', 'Audit-ready publication']
        },
        {
          name: 'Microsoft PowerPoint',
          level: 94,
          experience: '5+ Years',
          badge: 'Presentation Design',
          deliverable: 'High-impact slide decks, visual technical walkthroughs, and instructional presentations',
          highlights: ['Visual concept deconstruction', 'Clean typography & layout', 'Interactive transitions', 'Executive slide polish']
        },
        {
          name: 'Google Workspace Ecosystem',
          level: 94,
          experience: '4+ Years',
          badge: 'Cloud Collaboration',
          deliverable: 'Collaborative cloud workflows, automated assessment forms, and multi-user spreadsheets',
          highlights: ['Google Docs & Sheets integration', 'Google Forms assessment workflows', 'Real-time team collaboration', 'Drive organization']
        }
      ]
    },
    {
      id: 'pedagogy',
      title: 'Curriculum & Instructional Design',
      subtitle: 'Formal educational pedagogy backed by Bachelor of Education (B.Ed.)',
      icon: 'school',
      badgeColor: 'bg-[#6ffbbe]/30 text-[#006947]',
      summary:
        'Crafting outcomes-focused technical learning pathways from scratch, structuring practical lab manuals, and designing diagnostic evaluations that guarantee understanding.',
      skills: [
        {
          name: 'Curriculum Architecture',
          level: 95,
          experience: '2+ Years',
          badge: 'Syllabus Planning',
          deliverable: 'Complete end-to-end technical course roadmaps tailored for mixed-baseline student groups',
          highlights: ['Outcomes-based module design', 'Scaffolded learning steps', 'Theoretical + practical balance', 'From blank page to launch']
        },
        {
          name: 'Diagnostic Learning Gap Analysis',
          level: 92,
          experience: '2+ Years',
          badge: 'Intervention',
          deliverable: 'Early detection of conceptual misconceptions through continuous milestone metrics',
          highlights: ['Continuous formative evaluation', 'Early gap identification', 'Targeted intervention strategies', 'Retention tracking']
        },
        {
          name: 'Objective Assessment & Rubrics',
          level: 94,
          experience: '2+ Years',
          badge: 'Evaluation Standards',
          deliverable: 'Standardized grading matrices, practical exam rubrics, and repeatable evaluation ledgers',
          highlights: ['Objective criterion formulation', 'Fair reproducible grading', 'Practical lab examination tests', 'Zero record discrepancies']
        }
      ]
    },
    {
      id: 'soft-skills',
      title: 'Soft & Leadership Strengths',
      subtitle: 'Clear interpersonal communication, extreme organization, and structured follow-through',
      icon: 'psychology',
      badgeColor: 'bg-[#ffdadb] text-[#b90538]',
      summary:
        'Technical capability is amplified by structured communication. Known for patience, meticulous attention to detail, and turning complex ideas into accessible steps.',
      skills: [
        {
          name: 'Structured Technical Communication',
          level: 96,
          experience: '4+ Years',
          badge: 'Clarity',
          deliverable: 'Translating dense procedural and algorithmic requirements into clear, scannable explanations',
          highlights: ['Simplifying complex abstractions', 'Audience-tailored language', 'Written & verbal precision', 'Empathetic delivery']
        },
        {
          name: 'Meticulous Record-Keeping & Organization',
          level: 98,
          experience: '4+ Years',
          badge: '100% Accuracy',
          deliverable: 'Flawless institutional records, audit-ready data tracking, and systematic documentation',
          highlights: ['Zero data discrepancies', 'Rigorous ledger management', 'Organized archival systems', 'Strict follow-through']
        },
        {
          name: 'Adaptability & Mentorship',
          level: 92,
          experience: '3+ Years',
          badge: 'Interpersonal',
          deliverable: 'Fostering growth in beginners while challenging advanced candidates in mixed cohorts',
          highlights: ['Patience with varied baselines', 'Active listening & feedback', 'One-on-one troubleshooting', 'Positive reinforcement']
        },
        {
          name: 'Project & Milestone Discipline',
          level: 90,
          experience: '3+ Years',
          badge: 'Reliability',
          deliverable: 'Delivering complete curricula, reports, and code modules strictly on schedule',
          highlights: ['Prioritization under deadlines', 'Self-directed task execution', 'High standards of craftsmanship', 'Accountability']
        }
      ]
    }
  ];

  const filteredDomains = selectedDomain === 'all'
    ? domainSections
    : domainSections.filter((d) => d.id === selectedDomain);

  return (
    <div className="flex flex-col w-full bg-[#faf8ff]">
      {/* 1. HERO / SHORT INTRODUCTION SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f3ff] via-[#faf8ff] to-[#faf8ff] pt-12 pb-16 border-b border-[#dae2fd]/60">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Intro text */}
            <div className="lg:col-span-8 flex flex-col items-start gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#b90538] font-label-sm text-[12px] font-bold shadow-xs border border-[#ffdadb]">
                  <span className="w-2 h-2 rounded-full bg-[#dc2c4f] animate-pulse" />
                  BS CS &apos;21 · Roll of Honor (CGPA 3.78)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#4648d4] font-label-sm text-[12px] font-bold shadow-xs border border-[#dae2fd]">
                  <span className="material-symbols-outlined text-[15px]">military_tech</span>
                  3rd Position in Department
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ecfdf5] text-[#047857] font-label-sm text-[12px] font-bold shadow-xs border border-[#a7f3d0]">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                  Available for On-site (Lahore), Remote &amp; Hybrid
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e] tracking-tight leading-[1.15]">
                Hi, I&apos;m <span className="text-[#b90538]">{PERSONAL_INFO.name}</span>.
                <br className="hidden sm:inline" />
                <span className="text-[#4648d4]"> Web Developer</span> &amp; <span className="text-[#b90538]">Digital Marketer</span>.
              </h1>

              <p className="text-[16px] sm:text-[18px] text-[#5b4041] leading-relaxed max-w-2xl">
                Computer Science graduate with Roll of Honor distinction (CGPA 3.78/4.00, 3rd in department) and a Bachelor of Education. I build fast, responsive web applications in modern frontend frameworks and engineer data-driven digital growth campaigns with paid Meta &amp; Google ads, AI copywriting (Jasper, Copy.ai), Surfer SEO, and CRO. Actively available for on-site (Lahore), remote, and hybrid opportunities.
              </p>

              {/* Action Buttons (Resume/CV is kept strictly on the nav bar) */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('web-development')}
                  className="px-5 py-2.5 rounded-full bg-[#131b2e] text-white font-label-md text-[13px] font-bold hover:bg-[#4648d4] transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[17px]">code</span>
                  <span>Web Development</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('digital-marketing')}
                  className="px-5 py-2.5 rounded-full bg-[#dc2c4f] text-white font-label-md text-[13px] font-bold shadow-[0_4px_16px_rgba(220,44,79,0.25)] hover:bg-[#b90538] transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[17px]">trending_up</span>
                  <span>Digital Marketing</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-2.5 rounded-full bg-white text-[#131b2e] font-label-md text-[13px] font-bold border border-[#dae2fd] shadow-xs hover:bg-[#eaedff] transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[17px] text-[#4648d4]">mail</span>
                  <span>Contact Me</span>
                </button>
              </div>
            </div>

            {/* Portrait Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[340px] rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(19,27,46,0.12)] border border-[#dae2fd] bg-[#131b2e] group">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src="/zoha_pic.jpeg"
                    alt="Zoha Naeem"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e]/95 via-[#131b2e]/30 to-transparent pointer-events-none" />
                </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e]/95 via-[#131b2e]/30 to-transparent pointer-events-none" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-[18px]">{PERSONAL_INFO.name}</span>
                    <span className="material-symbols-outlined text-[18px] text-[#6ffbbe]" title="Verified Graduate">
                      verified
                    </span>
                  </div>
                  <p className="text-[12px] text-white/90 font-medium mt-0.5">
                    BS CS (Roll of Honor) · B.Ed. Graduate
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-white/75 mt-2 pt-2 border-t border-white/20">
                    <span>Lahore, Pakistan</span>
                    <span className="font-mono text-[#6ffbbe]">CGPA 3.78/4.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MY JOURNEY: STORY-LIKE STRUCTURE */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="max-w-3xl mb-12">
          <span className="font-label-sm text-[12px] text-[#b90538] font-bold uppercase tracking-wider">
            Background &amp; Narrative
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131b2e] tracking-tight mt-1">
            My Journey: How Structure Built My Craft
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#5b4041] mt-2 leading-relaxed">
            Every step of my academic and technical path has been anchored in one principle: when knowledge is organized with clarity and discipline, any complex challenge can be mastered.
          </p>
        </div>

        {/* Narrative Chapters in Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Chapter 1 */}
          <div className="p-7 rounded-3xl bg-white border border-[#dae2fd]/80 shadow-[0_4px_20px_rgba(70,72,212,0.04)] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#ffdadb] text-[#b90538] text-[11px] font-extrabold uppercase tracking-wider">
                  Chapter 01
                </span>
                <span className="material-symbols-outlined text-[24px] text-[#b90538]">school</span>
              </div>
              <h3 className="text-xl font-bold text-[#131b2e] mb-2">
                The Spark &amp; Academic Distinction (BS CS)
              </h3>
              <p className="text-[14px] text-[#5b4041] leading-relaxed">
                My journey began with a natural affinity for mathematical logic and computational problem solving. Enrolling in the BS Computer Science program at Govt. College Women University, Sialkot, I immersed myself in algorithms, data structures, relational databases, OOP, operating systems, and computer networks.
                <br /><br />
                As my culminating academic milestone, I conducted research for my <strong>Final Year Project: Recommendation System using Sentiment Analysis</strong>, engineering an NLP and sentiment classification engine in Python that was awarded a <strong>Grade A+</strong>. Through sustained dedication, I graduated with the <strong>Roll of Honor</strong>, earned <strong>3rd Position in the department</strong> (CGPA 3.78/4.00), secured <strong>A+ grades across 25 major subjects</strong>, and received the prestigious <strong>HEC Prime Minister&apos;s National Laptop Scheme award</strong>.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#dae2fd]/50 flex items-center justify-between text-[12px] font-semibold text-[#131b2e]">
              <span>GCWUS · BS Computer Science</span>
              <span className="text-[#b90538]">Roll of Honor (CGPA 3.78)</span>
            </div>
          </div>

          {/* Chapter 2 */}
          <div className="p-7 rounded-3xl bg-white border border-[#dae2fd]/80 shadow-[0_4px_20px_rgba(70,72,212,0.04)] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#e1e0ff] text-[#4648d4] text-[11px] font-extrabold uppercase tracking-wider">
                  Chapter 02
                </span>
                <span className="material-symbols-outlined text-[24px] text-[#4648d4]">code</span>
              </div>
              <h3 className="text-xl font-bold text-[#131b2e] mb-2">
                Frontend Web Development: Samsolutionz Software House
              </h3>
              <p className="text-[14px] text-[#5b4041] leading-relaxed">
                Translating core computer science principles into commercial web software, I joined <strong>Samsolutionz Software House (samsolutionz.com)</strong> as a <strong>Frontend Developer Intern</strong> (June 15 – September 15).
                <br /><br />
                Working within a fast-paced professional software development environment, I collaborated with cross-functional engineers, built responsive and accessible user interfaces using HTML5, CSS3/Tailwind, JavaScript, and React, converted design mockups into pixel-accurate layouts, and maintained clean Git version control workflows.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#dae2fd]/50 flex items-center justify-between text-[12px] font-semibold text-[#131b2e]">
              <span>Samsolutionz Software House</span>
              <span className="text-[#4648d4]">Frontend Web Development</span>
            </div>
          </div>

          {/* Chapter 3 */}
          <div className="p-7 rounded-3xl bg-white border border-[#dae2fd]/80 shadow-[0_4px_20px_rgba(70,72,212,0.04)] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#ffd8e4] text-[#b90538] text-[11px] font-extrabold uppercase tracking-wider">
                  Chapter 03
                </span>
                <span className="material-symbols-outlined text-[24px] text-[#b90538]">trending_up</span>
              </div>
              <h3 className="text-xl font-bold text-[#131b2e] mb-2">
                Digital Marketing &amp; Growth: Contractual E-Commerce Work
              </h3>
              <p className="text-[14px] text-[#5b4041] leading-relaxed">
                Expanding from software engineering into revenue-generating customer acquisition, I took on a <strong>contractual business engagement</strong> as Digital Marketing Expert for e-commerce store <strong>Dubi Homes (dubihomes.store)</strong>.
                <br /><br />
                I formulated and managed full-funnel digital marketing strategies: executing paid Meta Ads (Facebook &amp; Instagram) and Google Ads, managing official social channels, deploying state-of-the-art AI copywriting tools (<strong>Jasper AI, Copy.ai, Writesonic</strong>), performing NLP content optimization with <strong>Surfer SEO</strong>, and conducting A/B testing &amp; CRO. <em>(This contractual business project has been completed).</em>
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#dae2fd]/50 flex items-center justify-between text-[12px] font-semibold text-[#131b2e]">
              <span>Dubi Homes · Contractual Work</span>
              <span className="text-[#b90538]">Paid Ads, SEO &amp; AI Copy</span>
            </div>
          </div>

          {/* Chapter 4 */}
          <div className="p-7 rounded-3xl bg-white border border-[#dae2fd]/80 shadow-[0_4px_20px_rgba(70,72,212,0.04)] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#ecfdf5] text-[#047857] text-[11px] font-extrabold uppercase tracking-wider">
                  Chapter 04
                </span>
                <span className="material-symbols-outlined text-[24px] text-[#047857]">handshake</span>
              </div>
              <h3 className="text-xl font-bold text-[#131b2e] mb-2">
                Pedagogical Rigor, Soft Skills &amp; Availability
              </h3>
              <p className="text-[14px] text-[#5b4041] leading-relaxed">
                To master technical communication, I completed a <strong>Bachelor of Education (B.Ed.)</strong> at Virtual University of Pakistan, training 150+ students across two colleges with structured documentation and flawless record accuracy.
                <br /><br />
                This brings together engineering precision, data-driven marketing, and empathetic communication. Based in <strong>Lahore, Pakistan</strong>, I am actively available for <strong>On-site (Lahore), Remote, and Hybrid roles</strong> worldwide.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#dae2fd]/50 flex items-center justify-between text-[12px] font-semibold text-[#131b2e]">
              <span>Availability Worldwide</span>
              <span className="text-[#047857]">On-site (Lahore) · Remote · Hybrid</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL & SOFT SKILLS — SECTIONED BY DOMAIN */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-[#dae2fd]/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-label-sm text-[12px] text-[#4648d4] font-bold uppercase tracking-wider">
              Choose Your Work Domain
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131b2e] tracking-tight mt-1">
              What Type of Work Do You Need From Me?
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#5b4041] mt-2 max-w-2xl leading-relaxed">
              Select a work domain below to view my specific skills, deliverables, and capabilities tailored directly to your project or team requirement.
            </p>
          </div>
        </div>

        {/* Interactive Domain Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setSelectedDomain('all')}
            className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              selectedDomain === 'all'
                ? 'bg-[#131b2e] text-white shadow-sm'
                : 'bg-white text-[#5b4041] border border-[#dae2fd] hover:text-[#131b2e]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">apps</span>
            <span>All Capabilities ({domainSections.reduce((acc, d) => acc + d.skills.length, 0)})</span>
          </button>
          {domainSections.map((domain) => (
            <button
              key={domain.id}
              onClick={() => setSelectedDomain(domain.id)}
              className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                selectedDomain === domain.id
                  ? 'bg-[#131b2e] text-white shadow-sm'
                  : 'bg-white text-[#5b4041] border border-[#dae2fd] hover:text-[#131b2e]'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">{domain.icon}</span>
              <span>{domain.title}</span>
            </button>
          ))}
        </div>

        {/* Domain Sections & Skills Cards */}
        <div className="space-y-12">
          {filteredDomains.map((domain) => (
            <div key={domain.id} className="p-6 sm:p-8 rounded-3xl bg-white border border-[#dae2fd]/80 shadow-[0_4px_24px_rgba(70,72,212,0.03)]">
              {/* Domain Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#dae2fd]/60">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#f2f3ff] text-[#4648d4] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[26px]">{domain.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#131b2e]">
                      {domain.title}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] text-[#5b4041] mt-0.5">
                      {domain.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
                  {domain.id === 'web-dev' && (
                    <button
                      onClick={() => onNavigate('web-development')}
                      className="px-3.5 py-1.5 rounded-full bg-[#f2f3ff] text-[#4648d4] text-[12px] font-bold border border-[#dae2fd] hover:bg-[#4648d4] hover:text-white transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span>Web Dev Section</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </button>
                  )}
                  {domain.id === 'digital-marketing' && (
                    <button
                      onClick={() => onNavigate('digital-marketing')}
                      className="px-3.5 py-1.5 rounded-full bg-[#ffdadb]/60 text-[#b90538] text-[12px] font-bold border border-[#ffdadb] hover:bg-[#b90538] hover:text-white transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span>Digital Marketing Section</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </button>
                  )}
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${domain.badgeColor}`}>
                    {domain.skills.length} Key Competencies
                  </span>
                </div>
              </div>

              <p className="text-[14px] text-[#5b4041] mb-6 italic bg-[#faf8ff] p-3.5 rounded-xl border border-[#dae2fd]/50">
                &ldquo;{domain.summary}&rdquo;
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {domain.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 rounded-2xl bg-[#faf8ff] border border-[#dae2fd]/70 hover:border-[#b90538]/30 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="font-bold text-[15px] text-[#131b2e]">{skill.name}</h4>
                        <span className="px-2 py-0.5 rounded-full bg-white border border-[#dae2fd] text-[10px] font-bold text-[#5b4041]">
                          {skill.badge}
                        </span>
                      </div>

                      {/* Proficiency Bar */}
                      <div className="w-full bg-[#dae2fd]/50 h-1.5 rounded-full overflow-hidden mb-3">
                        <div
                          className="bg-gradient-to-r from-[#dc2c4f] to-[#4648d4] h-full rounded-full transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      <div className="text-[12px] text-[#131b2e] font-semibold mb-2 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px] text-[#006947]">task_alt</span>
                        <span>Deliverable:</span>
                      </div>
                      <p className="text-[12px] text-[#5b4041] leading-relaxed mb-3">
                        {skill.deliverable}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#dae2fd]/50 flex flex-wrap gap-1">
                      {skill.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-2 py-0.5 rounded-md bg-white text-[#131b2e] text-[10px] font-medium border border-[#dae2fd]/60"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EDUCATIONAL DETAILS (STRICTLY ACADEMIC ONLY — NO WORK EXPERIENCE) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-[#dae2fd]/60">
        <div className="max-w-2xl mb-12">
          <span className="font-label-sm text-[12px] text-[#006947] font-bold uppercase tracking-wider">
            Formal Qualifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131b2e] tracking-tight mt-1">
            Academic Degrees &amp; Distinctions
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#5b4041] mt-2 leading-relaxed">
            A solid academic foundation combining rigorous Computer Science theoretical mastery with certified educational design and evaluation.
          </p>
        </div>

        {/* Degree Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Degree 1: BS Computer Science */}
          <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#dae2fd]/80 shadow-[0_4px_24px_rgba(185,5,56,0.06)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffdadb]/40 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1 rounded-full bg-[#ffdadb] text-[#b90538] font-label-sm text-[11px] font-extrabold uppercase tracking-wider">
                  Degree of Distinction
                </span>
                <span className="font-mono text-[13px] text-[#5b4041] font-semibold">
                  2017 – 2021
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] tracking-tight">
                BS Computer Science
              </h3>
              <p className="text-[#b90538] font-bold text-[14px] mt-0.5">
                Roll of Honor · 3rd Position in Department
              </p>

              <div className="flex items-center gap-2 text-[14px] text-[#5b4041] font-medium mt-2">
                <span className="material-symbols-outlined text-[16px] text-[#4648d4]">account_balance</span>
                <span>Govt. College Women University, Sialkot (HEC Recognized)</span>
              </div>

              {/* CGPA Badge */}
              <div className="my-5 p-4 rounded-2xl bg-[#faf8ff] border border-[#dae2fd] flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5b4041]">Cumulative GPA</span>
                  <div className="text-2xl font-black text-[#131b2e] font-mono">3.78 / 4.00</div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#006947]">Grade Status</span>
                  <div className="text-lg font-bold text-[#006947]">A+ Distinction</div>
                </div>
              </div>

              <h4 className="font-bold text-[13px] text-[#131b2e] uppercase tracking-wider mb-2.5">
                Academic Honors &amp; Key Curricular Highlights:
              </h4>
              <ul className="space-y-2 text-[13px] sm:text-[14px] text-[#5b4041]">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#b90538] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Roll of Honor &amp; 3rd Position:</strong> Ranked in the top 3 graduates across the entire Computer Science department.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#b90538] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>25 Core Subjects with A+ Standing:</strong> Including Data Structures, Algorithms, DBMS, OOP, Operating Systems, Computer Networks, Software Engineering, and AI.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#b90538] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>HEC Prime Minister&apos;s Laptop Scheme:</strong> Awarded for sustained top-tier academic merit across university semesters.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#dae2fd]/60 flex items-center justify-between text-[12px] text-[#5b4041]">
              <span>Major: Computer Science</span>
              <span className="font-semibold text-[#131b2e]">HEC Verified Degree</span>
            </div>
          </div>

          {/* Degree 2: Bachelor of Education */}
          <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#dae2fd]/80 shadow-[0_4px_24px_rgba(70,72,212,0.06)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#e1e0ff]/40 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1 rounded-full bg-[#e1e0ff] text-[#4648d4] font-label-sm text-[11px] font-extrabold uppercase tracking-wider">
                  Professional Degree
                </span>
                <span className="font-mono text-[13px] text-[#5b4041] font-semibold">
                  2022 – 2024
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] tracking-tight">
                Bachelor of Education (B.Ed.)
              </h3>
              <p className="text-[#4648d4] font-bold text-[14px] mt-0.5">
                Instructional Design &amp; Performance Evaluation
              </p>

              <div className="flex items-center gap-2 text-[14px] text-[#5b4041] font-medium mt-2">
                <span className="material-symbols-outlined text-[16px] text-[#4648d4]">account_balance</span>
                <span>Virtual University of Pakistan (HEC Recognized)</span>
              </div>

              {/* CGPA Badge */}
              <div className="my-5 p-4 rounded-2xl bg-[#faf8ff] border border-[#dae2fd] flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5b4041]">Cumulative GPA</span>
                  <div className="text-2xl font-black text-[#131b2e] font-mono">3.12 / 4.00</div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#4648d4]">Focus Area</span>
                  <div className="text-lg font-bold text-[#4648d4]">Pedagogical Design</div>
                </div>
              </div>

              <h4 className="font-bold text-[13px] text-[#131b2e] uppercase tracking-wider mb-2.5">
                Pedagogical &amp; Evaluation Focus Areas:
              </h4>
              <ul className="space-y-2 text-[13px] sm:text-[14px] text-[#5b4041]">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#4648d4] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Instructional Design &amp; Curriculum Planning:</strong> Designing outcomes-based syllabi and technical learning modules from a blank page.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#4648d4] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Educational Psychology &amp; Cognitive Retention:</strong> Structuring technical concepts for mixed-baseline audiences to maximize retention.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#4648d4] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Quantitative Assessment &amp; Diagnostic Rubrics:</strong> Statistical measurement of performance indicators and objective evaluation criteria.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#dae2fd]/60 flex items-center justify-between text-[12px] text-[#5b4041]">
              <span>Field: Instructional Pedagogy</span>
              <span className="font-semibold text-[#131b2e]">HEC Verified Degree</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ENDORSEMENTS FROM MENTORS & DEPARTMENT HEADS */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-[#dae2fd]/60">
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <span className="font-label-sm text-[12px] text-[#b90538] font-bold uppercase tracking-wider">
            Institutional Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131b2e] tracking-tight">
            Endorsements from Mentors &amp; Department Heads
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#5b4041] max-w-xl">
            Testimonials from the educational leadership and academic mentors who observed my dedication, clarity, and intellectual rigor firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Testimonial 1 */}
          <div className="p-8 rounded-3xl bg-white border border-[#dae2fd]/80 shadow-[0_4px_24px_rgba(70,72,212,0.04)] flex flex-col justify-between">
            <p className="text-[15px] text-[#5b4041] italic leading-relaxed">
              &ldquo;Zoha possesses that rare gift of taking mathematically demanding and dense technical concepts and explaining them with effortless clarity. Her dedication to every learner, paired with her meticulous organization, made her an indispensable asset to our academic department.&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-6 mt-6 border-t border-[#dae2fd]/50">
              <div className="w-12 h-12 rounded-full bg-[#e1e0ff] text-[#4648d4] font-bold flex items-center justify-center text-sm">
                DH
              </div>
              <div>
                <p className="font-bold text-[15px] text-[#131b2e]">Department Head</p>
                <p className="text-[12px] text-[#5b4041]">Govt. Islamia Graduate College, Sambrial</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-8 rounded-3xl bg-white border border-[#dae2fd]/80 shadow-[0_4px_24px_rgba(70,72,212,0.04)] flex flex-col justify-between">
            <p className="text-[15px] text-[#5b4041] italic leading-relaxed">
              &ldquo;Securing 3rd Position in the department and the Roll of Honor is a testament to Zoha’s intellectual rigor. When you combine her A+ standing in 25 subjects with her formal education training, she brings structure, analytical depth, and excellence to any fast-moving team.&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-6 mt-6 border-t border-[#dae2fd]/50">
              <div className="w-12 h-12 rounded-full bg-[#ffdadb] text-[#b90538] font-bold flex items-center justify-center text-sm">
                FM
              </div>
              <div>
                <p className="font-bold text-[15px] text-[#131b2e]">Faculty Mentor</p>
                <p className="text-[12px] text-[#5b4041]">Govt. College Women University, Sialkot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 pt-6 pb-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#131b2e] via-[#283044] to-[#131b2e] text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <span className="font-label-sm text-[11px] text-[#ffdadb] uppercase tracking-widest font-bold">
              Ready to Collaborate?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Looking for structure, clarity &amp; follow-through?
            </h3>
            <p className="text-[14px] sm:text-[15px] text-white/80 max-w-xl">
              Available for software engineering, web development, digital growth initiatives, instructional design, and analytical roles.
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
              onClick={() => onNavigate('web-development')}
              className="px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 font-label-md text-[13px] font-bold transition-all border border-white/20 cursor-pointer"
            >
              Explore Web Development
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
