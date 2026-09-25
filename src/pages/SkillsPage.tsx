import React, { useState } from 'react';
import { PageId } from '../types';

interface SkillsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenResume?: () => void;
}

type SkillFilter = 'all' | 'languages' | 'cs' | 'databases' | 'aiml' | 'web-git' | 'tools' | 'marketing';

export const SkillsPage: React.FC<SkillsPageProps> = ({ onNavigate, onOpenResume }) => {
  const [activeFilter, setActiveFilter] = useState<SkillFilter>('all');
  const [replRunning, setReplRunning] = useState<boolean>(false);
  const [replSuccess, setReplSuccess] = useState<boolean>(false);

  const handleRunRepl = () => {
    setReplRunning(true);
    setTimeout(() => {
      setReplRunning(false);
      setReplSuccess(true);
      setTimeout(() => {
        setReplSuccess(false);
      }, 5000);
    }, 450);
  };

  const isVisible = (category: string) => activeFilter === 'all' || activeFilter === category;

  return (
    <div className="w-full bg-[#faf8ff] pb-16">
      {/* Subtle Chromatic Ambient Background Lights */}
      <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 overflow-hidden pb-12">
        <div className="absolute -top-24 -left-20 w-96 h-96 bg-[#ffdadb]/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#e1e0ff]/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#6ffbbe]/30 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Editorial Header Section */}
        <div className="pt-10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e2e7ff]/70 backdrop-blur-md w-fit border border-[#dae2fd]/60">
              <span className="w-2 h-2 rounded-full bg-[#b90538] animate-pulse" />
              <span className="font-label-sm text-[11px] text-[#b90538] uppercase tracking-wider font-bold">
                Technical Taxonomy &amp; Systems
              </span>
            </div>
            <h1 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl text-[#131b2e] tracking-tight font-extrabold mt-1">
              Skills &amp; Tech Matrix.
            </h1>
            <p className="font-body-lg text-[15px] sm:text-[17px] text-[#5b4041] leading-relaxed">
              Bridging computer science fundamentals (Python, C++, SQL, Algorithms, Operating Systems, Networks) with AI/ML research (Grade A+ Sentiment Analysis FYP), web technologies, and quantitative digital marketing.
            </p>
          </div>

          {/* Quick Metrics Pill Stack */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 bg-white/80 backdrop-blur-md p-2 rounded-2xl shadow-sm border border-[#dae2fd]/60">
            <div className="flex flex-col px-4 py-1">
              <span className="font-label-sm text-[11px] text-[#5b4041] uppercase font-semibold">
                Core Tech
              </span>
              <span className="font-headline-sm text-xl sm:text-2xl text-[#b90538] font-extrabold tracking-tight">
                Python · C++
              </span>
            </div>
            <div className="h-8 w-px bg-[#dae2fd]" />
            <div className="flex flex-col px-4 py-1">
              <span className="font-label-sm text-[11px] text-[#5b4041] uppercase font-semibold">
                Honors
              </span>
              <span className="font-headline-sm text-xl sm:text-2xl text-[#4648d4] font-extrabold tracking-tight">
                Roll of Honor
              </span>
            </div>
            <div className="h-8 w-px bg-[#dae2fd]" />
            <div className="flex flex-col px-4 py-1">
              <span className="font-label-sm text-[11px] text-[#5b4041] uppercase font-semibold">
                Key Project
              </span>
              <span className="font-headline-sm text-xl sm:text-2xl text-[#006947] font-extrabold tracking-tight">
                Grade A+ FYP
              </span>
            </div>
          </div>
        </div>

        {/* Filter & View Switcher Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 mb-6">
          <div className="flex flex-wrap items-center gap-1 bg-[#f2f3ff]/90 backdrop-blur-md p-1 rounded-full shadow-sm border border-[#dae2fd]/60">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-full font-label-md text-[13px] transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-white text-[#131b2e] shadow-sm font-bold border border-[#dae2fd]/50'
                  : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              All Skills
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('languages')}
              className={`px-3.5 py-1.5 rounded-full font-label-md text-[13px] transition-all cursor-pointer ${
                activeFilter === 'languages'
                  ? 'bg-white text-[#131b2e] shadow-sm font-bold border border-[#dae2fd]/50'
                  : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              Languages
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('cs')}
              className={`px-3.5 py-1.5 rounded-full font-label-md text-[13px] transition-all cursor-pointer ${
                activeFilter === 'cs'
                  ? 'bg-white text-[#131b2e] shadow-sm font-bold border border-[#dae2fd]/50'
                  : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              CS Fundamentals
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('databases')}
              className={`px-3.5 py-1.5 rounded-full font-label-md text-[13px] transition-all cursor-pointer ${
                activeFilter === 'databases'
                  ? 'bg-white text-[#131b2e] shadow-sm font-bold border border-[#dae2fd]/50'
                  : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              Databases
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('aiml')}
              className={`px-3.5 py-1.5 rounded-full font-label-md text-[13px] transition-all cursor-pointer ${
                activeFilter === 'aiml'
                  ? 'bg-white text-[#131b2e] shadow-sm font-bold border border-[#dae2fd]/50'
                  : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              AI / ML &amp; NLP
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('web-git')}
              className={`px-3.5 py-1.5 rounded-full font-label-md text-[13px] transition-all cursor-pointer ${
                activeFilter === 'web-git'
                  ? 'bg-white text-[#131b2e] shadow-sm font-bold border border-[#dae2fd]/50'
                  : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              Web &amp; Git
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('tools')}
              className={`px-3.5 py-1.5 rounded-full font-label-md text-[13px] transition-all cursor-pointer ${
                activeFilter === 'tools'
                  ? 'bg-white text-[#131b2e] shadow-sm font-bold border border-[#dae2fd]/50'
                  : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              Tools
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('marketing')}
              className={`px-3.5 py-1.5 rounded-full font-label-md text-[13px] transition-all cursor-pointer ${
                activeFilter === 'marketing'
                  ? 'bg-white text-[#131b2e] shadow-sm font-bold border border-[#dae2fd]/50'
                  : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              Digital Marketing
            </button>
          </div>

          <div className="inline-flex items-center gap-1.5 text-[#5b4041] font-label-md text-[12px] px-3.5 py-1.5 bg-[#f2f3ff] rounded-full border border-[#dae2fd]/60 font-semibold">
            <span className="material-symbols-outlined text-[16px] text-[#006947]">verified</span>
            <span>Interactive Proficiency Filter</span>
          </div>
        </div>

        {/* Main Bento Grid Layout: Matrix Cards + Radar + Interactive Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Primary Competency Domains (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Domain 1: Languages */}
            {isVisible('languages') && (
              <div className="domain-card bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 border border-[#dae2fd]/60">
                <div className="flex items-center justify-between pb-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#ffdadb]/60 flex items-center justify-center text-[#b90538]">
                      <span className="material-symbols-outlined text-[20px]">terminal</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-[11px] text-[#b90538] uppercase font-bold tracking-wider">
                        Programming &amp; Scripting
                      </span>
                      <h2 className="font-headline-sm text-lg font-bold text-[#131b2e]">
                        Languages
                      </h2>
                    </div>
                  </div>
                  <span className="font-label-sm text-[11px] px-2.5 py-0.5 rounded-full bg-[#b90538]/10 text-[#b90538] font-bold">
                    Core Fluency
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col p-3 rounded-xl bg-[#f2f3ff]/70 border border-[#dae2fd]/40">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-label-md text-[13px] text-[#131b2e] font-bold">Python</span>
                      <span className="font-label-sm text-[11px] text-[#006947] font-semibold">Advanced · 4 yrs</span>
                    </div>
                    <span className="font-body-sm text-[12px] text-[#5b4041]">
                      Data processing, scripting, algorithmic problem solving, automation, and NLP pipelines.
                    </span>
                  </div>
                  <div className="flex flex-col p-3 rounded-xl bg-[#f2f3ff]/70 border border-[#dae2fd]/40">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-label-md text-[13px] text-[#131b2e] font-bold">JavaScript</span>
                      <span className="font-label-sm text-[11px] text-[#4648d4] font-semibold">Proficient · 3 yrs</span>
                    </div>
                    <span className="font-body-sm text-[12px] text-[#5b4041]">
                      Modern DOM manipulation, responsive web logic, asynchronous fetches, and interactive UI behavior.
                    </span>
                  </div>
                  <div className="flex flex-col p-3 rounded-xl bg-[#f2f3ff]/70 border border-[#dae2fd]/40">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-label-md text-[13px] text-[#131b2e] font-bold">C++</span>
                      <span className="font-label-sm text-[11px] text-[#006947] font-semibold">Advanced · 4 yrs</span>
                    </div>
                    <span className="font-body-sm text-[12px] text-[#5b4041]">
                      Object-oriented programming, memory management, pointer manipulation, and asymptotic efficiency.
                    </span>
                  </div>
                  <div className="flex flex-col p-3 rounded-xl bg-[#f2f3ff]/70 border border-[#dae2fd]/40">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-label-md text-[13px] text-[#131b2e] font-bold">SQL</span>
                      <span className="font-label-sm text-[11px] text-[#006947] font-semibold">Advanced · 3 yrs</span>
                    </div>
                    <span className="font-body-sm text-[12px] text-[#5b4041]">
                      Complex multi-table JOINs, aggregation queries, database constraints, and normalized schemas.
                    </span>
                  </div>
                  <div className="flex flex-col p-3 rounded-xl bg-[#f2f3ff]/70 border border-[#dae2fd]/40 sm:col-span-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-label-md text-[13px] text-[#131b2e] font-bold">HTML / CSS</span>
                      <span className="font-label-sm text-[11px] text-[#006947] font-semibold">Expert · 3+ yrs</span>
                    </div>
                    <span className="font-body-sm text-[12px] text-[#5b4041]">
                      Semantic markup, mobile-first responsive layouts, Flexbox/Grid architectures, and clean accessible styling.
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Domain 2: CS Fundamentals */}
            {isVisible('cs') && (
              <div className="domain-card bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 border border-[#dae2fd]/60">
                <div className="flex items-center justify-between pb-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#e1e0ff]/60 flex items-center justify-center text-[#4648d4]">
                      <span className="material-symbols-outlined text-[20px]">account_tree</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-[11px] text-[#4648d4] uppercase font-bold tracking-wider">
                        Academic Rigor · Roll of Honor
                      </span>
                      <h2 className="font-headline-sm text-lg font-bold text-[#131b2e]">
                        CS Fundamentals
                      </h2>
                    </div>
                  </div>
                  <span className="font-label-sm text-[11px] px-2.5 py-0.5 rounded-full bg-[#4648d4]/10 text-[#4648d4] font-bold">
                    25 A+ Subjects
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col p-3 rounded-xl bg-[#f2f3ff]/70 border border-[#dae2fd]/40">
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">Data Structures &amp; Algorithms</span>
                    <span className="font-body-sm text-[12px] text-[#5b4041] mt-1">
                      Binary trees, sorting, searching, hashing, dynamic programming, and O(n) algorithmic complexity.
                    </span>
                  </div>
                  <div className="flex flex-col p-3 rounded-xl bg-[#f2f3ff]/70 border border-[#dae2fd]/40">
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">Object-Oriented Programming (OOP)</span>
                    <span className="font-body-sm text-[12px] text-[#5b4041] mt-1">
                      Encapsulation, inheritance, polymorphism, abstraction, modular class modeling, and design patterns.
                    </span>
                  </div>
                  <div className="flex flex-col p-3 rounded-xl bg-[#f2f3ff]/70 border border-[#dae2fd]/40">
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">Operating Systems</span>
                    <span className="font-body-sm text-[12px] text-[#5b4041] mt-1">
                      Process lifecycle, CPU scheduling algorithms, multi-threading, concurrency, memory allocation, and virtual memory.
                    </span>
                  </div>
                  <div className="flex flex-col p-3 rounded-xl bg-[#f2f3ff]/70 border border-[#dae2fd]/40">
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">Computer Networks</span>
                    <span className="font-body-sm text-[12px] text-[#5b4041] mt-1">
                      OSI 7-layer reference model, TCP/IP stack, client-server socket communication, subnetting, and packet routing.
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Domain 3: Databases */}
            {isVisible('databases') && (
              <div className="domain-card bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 border border-[#dae2fd]/60">
                <div className="flex items-center justify-between pb-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#6ffbbe]/40 flex items-center justify-center text-[#006947]">
                      <span className="material-symbols-outlined text-[20px]">database</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-[11px] text-[#006947] uppercase font-bold tracking-wider">
                        Data Persistence &amp; Integrity
                      </span>
                      <h2 className="font-headline-sm text-lg font-bold text-[#131b2e]">
                        Databases
                      </h2>
                    </div>
                  </div>
                  <span className="font-label-sm text-[11px] px-2.5 py-0.5 rounded-full bg-[#006947]/10 text-[#006947] font-bold">
                    ACID Compliant
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#f2f3ff]/70 flex flex-col border border-[#dae2fd]/40">
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">SQL</span>
                    <span className="font-body-sm text-[12px] text-[#5b4041] mt-1.5">
                      Complex relational queries, indexing, integrity constraints, and query execution plans.
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f2f3ff]/70 flex flex-col border border-[#dae2fd]/40">
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">SQLite</span>
                    <span className="font-body-sm text-[12px] text-[#5b4041] mt-1.5">
                      Lightweight serverless embedded database modeling for local apps, testing, and rapid prototyping.
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f2f3ff]/70 flex flex-col border border-[#dae2fd]/40">
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">Database Design (DBMS)</span>
                    <span className="font-body-sm text-[12px] text-[#5b4041] mt-1.5">
                      ER modeling, schema normalization (1NF through 3NF/BCNF), relational mapping, and ACID consistency.
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Domain 4: AI / ML & NLP (Highlighting Grade A+ Key Project) */}
            {isVisible('aiml') && (
              <div className="domain-card bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 border border-[#dae2fd]/60">
                <div className="flex items-center justify-between pb-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#ffdadb]/60 flex items-center justify-center text-[#b90538]">
                      <span className="material-symbols-outlined text-[20px]">psychology</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-[11px] text-[#b90538] uppercase font-bold tracking-wider">
                        Applied Intelligence · Research FYP
                      </span>
                      <h2 className="font-headline-sm text-lg font-bold text-[#131b2e]">
                        AI / ML &amp; NLP
                      </h2>
                    </div>
                  </div>
                  <span className="font-label-sm text-[11px] px-2.5 py-0.5 rounded-full bg-[#ffdadb] text-[#b90538] font-bold">
                    Grade: A+ Research
                  </span>
                </div>

                {/* Key Project Featured Callout */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#fff1f2] to-[#f2f3ff] border border-[#ffdadb] mb-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[13px] font-bold text-[#131b2e] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[#b90538] text-[18px]">stars</span>
                      Key Project: Recommendation System using Sentiment Analysis
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-[#b90538] text-white text-[11px] font-extrabold">
                      Grade A+
                    </span>
                  </div>
                  <p className="text-[12px] text-[#5b4041] mt-1.5 leading-relaxed">
                    Research-based Final Year Project combining natural language processing, user review sentiment scoring, and machine learning recommendation heuristics at GCWUS.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-[#f2f3ff]/70 border border-[#dae2fd]/40">
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">Sentiment Analysis</span>
                    <p className="font-body-sm text-[12px] text-[#5b4041] mt-1">
                      Textual polarity classification, subjective opinion mining, and emotional polarity evaluation on review corpora.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f2f3ff]/70 border border-[#dae2fd]/40">
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">Natural Language Processing (NLP)</span>
                    <p className="font-body-sm text-[12px] text-[#5b4041] mt-1">
                      Tokenization, stop-word elimination, stemming, lemmatization, and TF-IDF feature vectorization.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f2f3ff]/70 border border-[#dae2fd]/40">
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">Machine Learning Concepts</span>
                    <p className="font-body-sm text-[12px] text-[#5b4041] mt-1">
                      Supervised learning foundations, classification algorithms, recommendation heuristics, and validation metrics (Precision, Recall, F1).
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f2f3ff]/70 border border-[#dae2fd]/40">
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">Data Preprocessing</span>
                    <p className="font-body-sm text-[12px] text-[#5b4041] mt-1">
                      Data cleansing, noise elimination, handling missing values, text normalization, and dataset formatting.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Domain 5: Version Control & Web Technologies */}
            {isVisible('web-git') && (
              <div className="domain-card bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 border border-[#dae2fd]/60">
                <div className="flex items-center justify-between pb-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#e1e0ff]/60 flex items-center justify-center text-[#4648d4]">
                      <span className="material-symbols-outlined text-[20px]">code</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-[11px] text-[#4648d4] uppercase font-bold tracking-wider">
                        Workflow &amp; Architecture
                      </span>
                      <h2 className="font-headline-sm text-lg font-bold text-[#131b2e]">
                        Version Control &amp; Web Technologies
                      </h2>
                    </div>
                  </div>
                  <span className="font-label-sm text-[11px] px-2.5 py-0.5 rounded-full bg-[#4648d4]/10 text-[#4648d4] font-bold">
                    Professional Standards
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#f2f3ff]/70 flex flex-col border border-[#dae2fd]/40">
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">Git (Basic)</span>
                    <p className="font-body-sm text-[12px] text-[#5b4041] mt-1.5">
                      Branching, commits, staging, local &amp; remote repositories, commit messages, and collaboration.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f2f3ff]/70 flex flex-col border border-[#dae2fd]/40">
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">HTML &amp; CSS (Foundational)</span>
                    <p className="font-body-sm text-[12px] text-[#5b4041] mt-1.5">
                      Document semantics, mobile responsiveness, layout primitives, and accessible design systems.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f2f3ff]/70 flex flex-col border border-[#dae2fd]/40">
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">Web App Architecture</span>
                    <p className="font-body-sm text-[12px] text-[#5b4041] mt-1.5">
                      Exposure to client-server communication, HTTP/HTTPS request cycles, REST conventions, and DOM lifecycles.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Domain 6: Tools */}
            {isVisible('tools') && (
              <div className="domain-card bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 border border-[#dae2fd]/60">
                <div className="flex items-center justify-between pb-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f2f3ff] flex items-center justify-center text-[#131b2e]">
                      <span className="material-symbols-outlined text-[20px]">construction</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-[11px] text-[#5b4041] uppercase font-bold tracking-wider">
                        Development &amp; Productivity
                      </span>
                      <h2 className="font-headline-sm text-lg font-bold text-[#131b2e]">
                        Tools
                      </h2>
                    </div>
                  </div>
                  <span className="font-label-sm text-[11px] px-2.5 py-0.5 rounded-full bg-[#dae2fd] text-[#131b2e] font-bold">
                    Everyday Stack
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#f2f3ff] flex flex-col items-center text-center border border-[#dae2fd]/50">
                    <span className="material-symbols-outlined text-[#4648d4] text-[24px] mb-1">integration_instructions</span>
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">VS Code</span>
                    <span className="font-label-sm text-[11px] text-[#5b4041] mt-0.5">Primary Editor</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f2f3ff] flex flex-col items-center text-center border border-[#dae2fd]/50">
                    <span className="material-symbols-outlined text-[#131b2e] text-[24px] mb-1">hub</span>
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">GitHub</span>
                    <span className="font-label-sm text-[11px] text-[#5b4041] mt-0.5">Repositories &amp; CI</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f2f3ff] flex flex-col items-center text-center border border-[#dae2fd]/50">
                    <span className="material-symbols-outlined text-[#b90538] text-[24px] mb-1">table_chart</span>
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">MS Office Suite</span>
                    <span className="font-label-sm text-[11px] text-[#5b4041] mt-0.5">Word, Excel, PPT</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f2f3ff] flex flex-col items-center text-center border border-[#dae2fd]/50">
                    <span className="material-symbols-outlined text-[#006947] text-[24px] mb-1">cloud</span>
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">Google Suite</span>
                    <span className="font-label-sm text-[11px] text-[#5b4041] mt-0.5">Docs, Sheets, Forms</span>
                  </div>
                </div>
              </div>
            )}

            {/* Domain 7: Digital Marketing */}
            {isVisible('marketing') && (
              <div className="domain-card bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 border border-[#dae2fd]/60">
                <div className="flex items-center justify-between pb-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#6ffbbe]/40 flex items-center justify-center text-[#006947]">
                      <span className="material-symbols-outlined text-[20px]">trending_up</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-[11px] text-[#006947] uppercase font-bold tracking-wider">
                        E-Commerce &amp; Growth Engine
                      </span>
                      <h2 className="font-headline-sm text-lg font-bold text-[#131b2e]">
                        Digital Marketing &amp; Growth
                      </h2>
                    </div>
                  </div>
                  <span className="font-label-sm text-[11px] px-2.5 py-0.5 rounded-full bg-[#006947]/10 text-[#006947] font-bold">
                    ROAS &amp; Acquisition
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-[#f2f3ff]/70 flex flex-col border border-[#dae2fd]/40">
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">Meta Ads &amp; Google Ads</span>
                    <p className="font-body-sm text-[12px] text-[#5b4041] mt-1">
                      Advantage+ shopping campaigns, custom retargeting audiences, Google search intent, and ROAS optimization.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f2f3ff]/70 flex flex-col border border-[#dae2fd]/40">
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">AI Copywriting Tools</span>
                    <p className="font-body-sm text-[12px] text-[#5b4041] mt-1">
                      Rapid creative generation and ad copywriting via Jasper AI, Copy.ai, and Writesonic.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f2f3ff]/70 flex flex-col border border-[#dae2fd]/40">
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">SEO &amp; Content Optimization</span>
                    <p className="font-body-sm text-[12px] text-[#5b4041] mt-1">
                      On-page NLP content scores with Surfer SEO, keyword research with SEMrush, and Google Search Console audits.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f2f3ff]/70 border border-[#dae2fd]/40">
                    <span className="font-label-md text-[13px] text-[#131b2e] font-bold">A/B Testing &amp; CRO</span>
                    <p className="font-body-sm text-[12px] text-[#5b4041] mt-1">
                      Creative split-testing, checkout friction removal, trust signal enhancement, and conversion rate optimization.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Visual Skill Radar, Certifications & Interactive Easter Egg (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Skill Equilibrium / Hexagon Radar Widget */}
            <div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-md flex flex-col border border-[#dae2fd]/60">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-headline-sm text-lg font-bold text-[#131b2e]">Capability Radar</h3>
                <span className="material-symbols-outlined text-[#4648d4] text-[20px]">radar</span>
              </div>
              <p className="font-body-sm text-[12px] text-[#5b4041] mb-4 leading-relaxed">
                Equilibrium between pure software craftsmanship, user psychology, and quantitative conversion engines.
              </p>

              {/* Bespoke Inline SVG Radar Chart */}
              <div className="relative w-full aspect-square flex items-center justify-center p-2">
                <svg
                  aria-label="Skill Proficiency Radar Chart"
                  className="w-full h-full max-w-[260px] overflow-visible"
                  viewBox="0 0 300 300"
                >
                  {/* Grid Webs */}
                  <polygon
                    fill="none"
                    opacity="0.35"
                    points="150,30 255,90 255,210 150,270 45,210 45,90"
                    stroke="#e3bdbf"
                    strokeDasharray="3 3"
                    strokeWidth="1"
                  />
                  <polygon
                    fill="none"
                    opacity="0.25"
                    points="150,70 220,110 220,190 150,230 80,190 80,110"
                    stroke="#e3bdbf"
                    strokeDasharray="2 2"
                    strokeWidth="1"
                  />

                  {/* Axes */}
                  <line opacity="0.3" stroke="#e3bdbf" strokeWidth="1" x1="150" x2="150" y1="150" y2="30" />
                  <line opacity="0.3" stroke="#e3bdbf" strokeWidth="1" x1="150" x2="255" y1="150" y2="90" />
                  <line opacity="0.3" stroke="#e3bdbf" strokeWidth="1" x1="150" x2="255" y1="150" y2="210" />
                  <line opacity="0.3" stroke="#e3bdbf" strokeWidth="1" x1="150" x2="150" y1="150" y2="270" />
                  <line opacity="0.3" stroke="#e3bdbf" strokeWidth="1" x1="150" x2="45" y1="150" y2="210" />
                  <line opacity="0.3" stroke="#e3bdbf" strokeWidth="1" x1="150" x2="45" y1="150" y2="90" />

                  {/* Filled Data Area */}
                  <polygon
                    className="transition-all duration-700 hover:fill-[#ffdadb]/40 cursor-pointer"
                    fill="rgba(185, 5, 56, 0.15)"
                    points="150,45 240,100 230,200 150,250 65,195 60,98"
                    stroke="#b90538"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  />

                  {/* Vertex Dots */}
                  <circle cx="150" cy="45" fill="#b90538" r="4" />
                  <circle cx="240" cy="100" fill="#4648d4" r="4" />
                  <circle cx="230" cy="200" fill="#4648d4" r="4" />
                  <circle cx="150" cy="250" fill="#006947" r="4" />
                  <circle cx="65" cy="195" fill="#006947" r="4" />
                  <circle cx="60" cy="98" fill="#b90538" r="4" />

                  {/* Axis Labels */}
                  <text className="text-[11px] font-bold fill-[#131b2e]" textAnchor="middle" x="150" y="20">
                    CS Fundamentals
                  </text>
                  <text className="text-[11px] font-bold fill-[#4648d4]" textAnchor="start" x="265" y="88">
                    Python &amp; C++
                  </text>
                  <text className="text-[11px] font-bold fill-[#4648d4]" textAnchor="start" x="265" y="215">
                    SQL &amp; DBMS
                  </text>
                  <text className="text-[11px] font-bold fill-[#006947]" textAnchor="middle" x="150" y="288">
                    AI / ML &amp; NLP
                  </text>
                  <text className="text-[11px] font-bold fill-[#006947]" textAnchor="end" x="35" y="215">
                    Web &amp; Git
                  </text>
                  <text className="text-[11px] font-bold fill-[#b90538]" textAnchor="end" x="35" y="88">
                    Marketing &amp; Growth
                  </text>
                </svg>
              </div>

              <div className="mt-4 p-2.5 rounded-xl bg-[#f2f3ff] text-center border border-[#dae2fd]/50">
                <span className="font-label-sm text-[11px] text-[#5b4041]">Profile:</span>
                <span className="font-label-md text-[12px] text-[#b90538] font-bold ml-1">
                  Computer Scientist &amp; Growth Specialist
                </span>
              </div>
            </div>

            {/* Industry Certifications Section */}
            <div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-md flex flex-col gap-4 border border-[#dae2fd]/60">
              <div className="flex items-center justify-between">
                <h3 className="font-headline-sm text-lg font-bold text-[#131b2e]">Academic Credentials</h3>
                <span className="font-label-sm text-[11px] text-[#006947] font-bold">Verified Honors</span>
              </div>

              {/* Credential 1 */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f2f3ff]/70 transition-transform hover:scale-[1.02] border border-[#dae2fd]/40">
                <div className="w-10 h-10 rounded-full bg-[#ffdadb] flex items-center justify-center text-[#b90538] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">military_tech</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-md text-[13px] text-[#131b2e] font-bold truncate">
                    Roll of Honor · 3rd Position
                  </span>
                  <span className="font-body-sm text-[12px] text-[#5b4041]">
                    GCWUS • BS Computer Science (CGPA 3.78)
                  </span>
                  <span className="font-label-sm text-[11px] text-[#b90538] font-semibold mt-0.5">
                    A+ in 25 Core Subjects
                  </span>
                </div>
              </div>

              {/* Credential 2 */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f2f3ff]/70 transition-transform hover:scale-[1.02] border border-[#dae2fd]/40">
                <div className="w-10 h-10 rounded-full bg-[#6ffbbe]/40 flex items-center justify-center text-[#006947] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-md text-[13px] text-[#131b2e] font-bold truncate">
                    HEC Prime Minister&apos;s Laptop Award
                  </span>
                  <span className="font-body-sm text-[12px] text-[#5b4041]">
                    Higher Education Commission of Pakistan
                  </span>
                  <span className="font-label-sm text-[11px] text-[#006947] font-semibold mt-0.5">
                    Academic Excellence Merit
                  </span>
                </div>
              </div>

              {/* Credential 3 */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f2f3ff]/70 transition-transform hover:scale-[1.02] border border-[#dae2fd]/40">
                <div className="w-10 h-10 rounded-full bg-[#e1e0ff] flex items-center justify-center text-[#4648d4] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">school</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-md text-[13px] text-[#131b2e] font-bold truncate">
                    Bachelor of Education (B.Ed.)
                  </span>
                  <span className="font-body-sm text-[12px] text-[#5b4041]">
                    Virtual University of Pakistan (CGPA 3.12)
                  </span>
                  <span className="font-label-sm text-[11px] text-[#4648d4] font-semibold mt-0.5">
                    Instructional Design Specialization
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive TypeScript Console Sandbox / Easter Egg */}
            <div className="bg-[#283044] text-[#eef0ff] p-6 rounded-2xl shadow-xl flex flex-col relative overflow-hidden border border-white/10">
              <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#dc2c4f] block" />
                  <span className="w-3 h-3 rounded-full bg-[#6063ee] block" />
                  <span className="w-3 h-3 rounded-full bg-[#00855b] block" />
                  <span className="font-label-sm text-[11px] opacity-70 ml-2 font-mono">zoha.config.ts</span>
                </div>
                <span className="font-label-sm text-[10px] text-[#ffb2b7] uppercase tracking-wider font-bold">
                  Live REPL
                </span>
              </div>

              <pre className="font-mono text-[12px] leading-relaxed overflow-x-auto text-[#f2f3ff] py-1">
                <code>
                  <span className="text-[#e1e0ff]">interface</span>{' '}
                  <span className="text-[#6ffbbe]">EducatorProfile</span> &#123;{'\n'}
                  {'  '}name: <span className="text-[#ffdadb]">&quot;Zoha Naeem&quot;</span>;{'\n'}
                  {'  '}degree: <span className="text-[#ffdadb]">&quot;BS Computer Science&quot;</span>;{'\n'}
                  {'  '}honors: <span className="text-[#ffdadb]">&quot;Roll of Honor · 3rd in Dept&quot;</span>;{'\n'}
                  {'  '}studentsTrained: <span className="text-[#6ffbbe]">150</span>;{'\n'}
                  &#125;{'\n'}
                  {'\n'}
                  <span className="text-[#e1e0ff]">export const</span> zoha:{' '}
                  <span className="text-[#6ffbbe]">EducatorProfile</span> = &#123;{'\n'}
                  {'  '}name: <span className="text-[#ffdadb]">&quot;Zoha Naeem&quot;</span>,{'\n'}
                  {'  '}degree: <span className="text-[#ffdadb]">&quot;BS CS (CGPA 3.78)&quot;</span>,{'\n'}
                  {'  '}honors: <span className="text-[#ffdadb]">&quot;25 A+ Subjects&quot;</span>,{'\n'}
                  {'  '}studentsTrained: <span className="text-[#6ffbbe]">150</span>{'\n'}
                  &#125;;
                </code>
              </pre>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <div
                  className={`font-label-sm text-[11px] flex items-center gap-1 font-semibold ${
                    replSuccess ? 'text-[#ffb2b7]' : 'text-[#6ffbbe]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {replSuccess ? 'done_all' : 'check_circle'}
                  </span>{' '}
                  {replRunning
                    ? 'Verifying records...'
                    : replSuccess
                    ? 'Compiled: 0 errors'
                    : 'Ready to execute'}
                </div>
                <button
                  type="button"
                  onClick={handleRunRepl}
                  disabled={replRunning}
                  className="px-4 py-1.5 rounded-full bg-[#dc2c4f] text-white font-label-sm text-[11px] font-bold hover:bg-[#b90538] transition-colors flex items-center gap-1 shadow-sm cursor-pointer disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-[14px]">play_arrow</span> Run Test
                </button>
              </div>

              {replSuccess && (
                <div className="mt-3 p-2 rounded-lg bg-black/40 font-mono text-[11px] text-[#6ffbbe] border border-[#6ffbbe]/20 transition-all">
                  &gt; Verified 150+ students trained &amp; 25 A+ CS subjects. Ready for high-impact roles.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Live Marketing & Engineering Collaboration Case Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#e2e7ff] via-[#eaedff] to-[#f2f3ff] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-[#dae2fd]/70">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#dc2c4f] text-white flex items-center justify-center shrink-0 shadow-md">
              <span className="material-symbols-outlined text-[32px]">school</span>
            </div>
            <div className="flex flex-col">
              <h3 className="font-headline-sm text-lg sm:text-xl font-extrabold text-[#131b2e]">
                Looking for technical rigor and structured follow-through?
              </h3>
              <p className="font-body-md text-[14px] text-[#5b4041] max-w-xl mt-1 leading-relaxed">
                Whether breaking down code complexity for student cohorts or engineering meticulous institutional systems, I bring clarity, organization, and dedication.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 rounded-full bg-[#b90538] text-white font-label-md text-[13px] font-bold shadow-md hover:bg-[#dc2c4f] transition-all cursor-pointer"
            >
              Contact Zoha
            </button>
            <button
              type="button"
              onClick={() => onNavigate('web-development')}
              className="px-5 py-2.5 rounded-full bg-white text-[#131b2e] font-label-md text-[13px] font-bold shadow-sm hover:bg-[#e2e7ff] transition-all border border-[#dae2fd]/60 cursor-pointer"
            >
              Explore Web &amp; Marketing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
