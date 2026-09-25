import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onNavigateToContact }) => {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      const element = document.createElement('a');
      const file = new Blob([
        `ZOHA NAEEM
Lahore, Pakistan | Available for On-site (Lahore), Remote & Hybrid | zoha.naeem.zn@gmail.com | +92-328-933-4400

PROFESSIONAL SUMMARY
BS Computer Science graduate (CGPA 3.78/4.00, Roll of Honor, 3rd position in department) with a Bachelor of Education, frontend web engineering experience (Samsolutionz Software House), and contractual e-commerce digital marketing experience (Dubi Homes). Clear, disciplined communicator available for on-site (Lahore), remote, and hybrid roles.

CORE STRENGTHS
● Frontend Web Development: HTML5, CSS3, modern JavaScript, React, UI design, Git version control.
● Digital Marketing & Growth: Meta Ads, Google Ads, AI Copywriting (Jasper, Copy.ai, Writesonic), Surfer SEO, A/B Testing, CRO.
● Communication & Instruction: Explaining technical material clearly, building structured curriculum from scratch.
● Attention to Detail & Organization: Consistent, accurate record-keeping across full academic terms and projects.

PROFESSIONAL EXPERIENCE
Digital Marketing Expert (Contractual Business Work · Completed) — Dubi Homes (dubihomes.store) | 2024
● Managed end-to-end Meta Ads (Facebook & Instagram) and Google Ads campaigns, driving direct e-commerce conversions and brand awareness.
● Handled official social media channels, community management, and daily content scheduling for Dubi Homes.
● Authored high-converting copywriting, promotional campaign angles, and designed visual/video marketing content.

Frontend Developer Intern — Samsolutionz Software House (samsolutionz.com) | June 15 – September 15
● Gained practical frontend web development experience in an agile software house environment.
● Built responsive, accessible UI layouts using HTML5, CSS3, modern JavaScript, and Git version control workflows.
● Translated design mockups into pixel-accurate web pages with cross-browser compatibility and optimized performance.

College Teacher Internee — Govt. Islamia Graduate College, Sambrial | Nov 2024 – Apr 2025
● Delivered computer science and IT tool instruction to 100+ students across intermediate and BS levels, adapting explanations to each group's starting point.
● Designed and ran structured training sessions on MS Office and other digital tools from the ground up, producing supporting documentation and evaluation reports for each cohort.
● Tracked and analyzed student performance data throughout the term, applying consistent, detail-oriented record-keeping to catch learning gaps early.

College Teacher Internee — Govt. Associate College for Women, Sambrial | Jan 2023 – Jun 2023
● Prepared 50+ students for practical computer applications exams, producing lab session reports and learning assessments to track exam readiness.

EDUCATION
BS Computer Science — Govt. College Women University, Sialkot (HEC Recognized) | 2017 – 2021
● CGPA: 3.78/4.00 | Roll of Honor | 3rd Position in Department
● A+ in 25 subjects, including Data Structures, Algorithms, DBMS, Computer Networks, OOP, Software Engineering, AI
● Awarded HEC Prime Minister's Laptop Scheme for academic excellence

Bachelor of Education (B.Ed.) — Virtual University of Pakistan | 2022 – 2024
● CGPA: 3.12/4.00 | Focus on instructional design and performance evaluation

ADDITIONAL SKILLS
● Technical: Python, JavaScript, C++, SQL, HTML/CSS, Git, MS Office Suite, Google Suite
● Languages: English (Professional), Urdu (Native)
`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = 'Zoha_Naeem_CV.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      setDownloading(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#dae2fd] overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#f2f3ff] border-b border-[#dae2fd]">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#b90538] text-[24px]">description</span>
            <div>
              <h3 className="font-headline-sm text-[18px] font-bold text-[#131b2e]">Curriculum Vitae</h3>
              <p className="font-label-sm text-[11px] text-[#5b4041]">Zoha Naeem · Lahore, Pakistan · BS CS (Roll of Honor)</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#dc2c4f] hover:bg-[#b90538] text-white text-[12px] font-bold shadow-sm transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">file_download</span>
              {downloading ? 'Preparing...' : 'Download CV'}
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white hover:bg-[#eaedff] text-[#131b2e] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Resume Content Paper */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-white font-sans text-[#131b2e]">
          {/* Header section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#dae2fd]/70 gap-4">
            <img
                src="/zoha_pic.jpeg"
                alt="Zoha Naeem"
                className="w-16 h-16 rounded-2xl object-cover object-center border-2 border-[#b90538]/30 shadow-md shrink-0"
              />
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] tracking-tight">ZOHA NAEEM</h1>
                <p className="text-[#dc2c4f] font-semibold text-[14px] sm:text-[15px] mt-0.5">
                  Computer Science Graduate &amp; Technical Educator
                </p>
                <p className="text-[#5b4041] text-[12px] sm:text-[13px] mt-1">
                  Lahore, Pakistan · Open to On-Site &amp; Remote Worldwide
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:items-end gap-1.5 text-[13px] text-[#5b4041]">
              <div className="flex items-center gap-2">
                <span className="font-medium text-[#131b2e]">zoha.naeem.zn@gmail.com</span>
                <button
                  onClick={handleCopyEmail}
                  className="text-[#4648d4] hover:text-[#2f2ebe] text-[11px] font-bold underline cursor-pointer"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="flex items-center gap-2 text-[#5b4041]">
                <span className="material-symbols-outlined text-[15px] text-[#006947]">call</span>
                <span>+92-328-933-4400</span>
              </div>
              <div className="flex items-center gap-2 text-[#5b4041]">
                <span className="material-symbols-outlined text-[15px] text-[#4648d4]">pin_drop</span>
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-[14px] font-bold uppercase tracking-widest text-[#b90538] mb-2.5 pb-1 border-b border-[#ffdadb] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">person</span> Professional Summary
            </h2>
            <p className="text-[14px] text-[#5b4041] leading-relaxed">
              Clear, structured communicator with two years of experience designing and delivering technical training to 150+ students across two institutions. Known for breaking down complex material for mixed-level audiences, building curriculum and evaluation systems from scratch, and keeping meticulous, organized records. BS Computer Science graduate (CGPA 3.78/4.00, Roll of Honor, 3rd position in department) with a Bachelor of Education focused on instructional design and performance evaluation. Looking to bring the same structure and follow-through to a fast-moving team.
            </p>
          </div>

          {/* Core Strengths */}
          <div>
            <h2 className="text-[14px] font-bold uppercase tracking-widest text-[#4648d4] mb-3 pb-1 border-b border-[#e1e0ff] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">verified</span> Core Strengths
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px]">
              <div className="p-3 rounded-xl bg-[#f2f3ff] border border-[#dae2fd]/60">
                <span className="font-bold text-[#131b2e] block">Communication &amp; Instruction</span>
                <p className="text-[#5b4041] mt-0.5">Explaining technical and procedural material clearly to audiences at different levels.</p>
              </div>
              <div className="p-3 rounded-xl bg-[#f2f3ff] border border-[#dae2fd]/60">
                <span className="font-bold text-[#131b2e] block">Curriculum &amp; Training Design</span>
                <p className="text-[#5b4041] mt-0.5">Building structured sessions and supporting documentation from a blank page.</p>
              </div>
              <div className="p-3 rounded-xl bg-[#f2f3ff] border border-[#dae2fd]/60">
                <span className="font-bold text-[#131b2e] block">Performance Evaluation</span>
                <p className="text-[#5b4041] mt-0.5">Designing assessments and evaluation reports, and tracking outcomes over time.</p>
              </div>
              <div className="p-3 rounded-xl bg-[#f2f3ff] border border-[#dae2fd]/60">
                <span className="font-bold text-[#131b2e] block">Attention to Detail &amp; Organization</span>
                <p className="text-[#5b4041] mt-0.5">Consistent, accurate record-keeping across full academic terms.</p>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-5">
            <h2 className="text-[14px] font-bold uppercase tracking-widest text-[#006947] mb-3 pb-1 border-b border-[#6ffbbe]/40 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">work</span> Professional Experience
            </h2>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="font-bold text-[15px] text-[#131b2e]">
                  Digital Marketing Expert (Contractual Business Work) <span className="font-normal text-[#5b4041]">| Dubi Homes (dubihomes.store)</span>
                </h3>
                <span className="text-[12px] font-mono text-[#5b4041]">2024 · Completed Contract</span>
              </div>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-[13px] text-[#5b4041] leading-relaxed">
                <li>Formulated and managed end-to-end Meta Ads (Facebook &amp; Instagram) and Google Ads campaigns, driving online visibility and direct e-commerce conversions.</li>
                <li>Handled official social media channels, community management, content creation, and copywriting aligned with store brand identity.</li>
                <li>Tracked audience analytics, engagement metrics, and conversion funnels to continuously optimize return on ad spend.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="font-bold text-[15px] text-[#131b2e]">
                  Frontend Developer Intern <span className="font-normal text-[#5b4041]">| Samsolutionz Software House (samsolutionz.com)</span>
                </h3>
                <span className="text-[12px] font-mono text-[#5b4041]">June 15 – September 15</span>
              </div>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-[13px] text-[#5b4041] leading-relaxed">
                <li>Gained practical hands-on experience in modern frontend web development within a professional software house team.</li>
                <li>Built and styled responsive, accessible UI components using HTML5, CSS3, JavaScript, and Git collaboration workflows.</li>
                <li>Translated Figma UI mockups into clean, cross-browser compatible web pages with fast load times.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="font-bold text-[15px] text-[#131b2e]">
                  College Teacher Internee <span className="font-normal text-[#5b4041]">| Govt. Islamia Graduate College, Sambrial</span>
                </h3>
                <span className="text-[12px] font-mono text-[#5b4041]">Nov 2024 – Apr 2025</span>
              </div>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-[13px] text-[#5b4041] leading-relaxed">
                <li>Delivered computer science and IT tool instruction to 100+ students across intermediate and BS levels, adapting explanations to each group&apos;s starting point.</li>
                <li>Designed and ran structured training sessions on MS Office and other digital tools from the ground up, producing supporting documentation and evaluation reports for each cohort.</li>
                <li>Tracked and analyzed student performance data throughout the term, applying consistent, detail-oriented record-keeping to catch learning gaps early.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="font-bold text-[15px] text-[#131b2e]">
                  College Teacher Internee <span className="font-normal text-[#5b4041]">| Govt. Associate College for Women, Sambrial</span>
                </h3>
                <span className="text-[12px] font-mono text-[#5b4041]">Jan 2023 – Jun 2023</span>
              </div>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-[13px] text-[#5b4041] leading-relaxed">
                <li>Prepared 50+ students for practical computer applications exams, producing lab session reports and learning assessments to track exam readiness.</li>
                <li>Conducted targeted problem-solving workshops bridging theoretical computing principles with hands-on application execution.</li>
              </ul>
            </div>
          </div>

          {/* Key Project */}
          <div className="space-y-3">
            <h2 className="text-[14px] font-bold uppercase tracking-widest text-[#4648d4] mb-3 pb-1 border-b border-[#e1e0ff] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">stars</span> Key Project
            </h2>

            <div className="p-4 rounded-2xl bg-[#f2f3ff] border border-[#dae2fd]/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-[15px] text-[#131b2e]">
                  Recommendation System using Sentiment Analysis
                </h3>
                <span className="text-[12px] font-mono font-bold text-[#b90538] px-2.5 py-0.5 rounded-full bg-[#ffdadb]/80 w-fit">
                  Research-Based FYP · Grade: A+
                </span>
              </div>
              <p className="text-[12px] text-[#4648d4] font-medium mt-0.5">
                Govt. College Women University, Sialkot · Final Year Research Thesis &amp; Defense
              </p>
              <ul className="list-disc pl-5 mt-2.5 space-y-1.5 text-[13px] text-[#5b4041] leading-relaxed">
                <li>Formulated and defended an intelligent personalized recommendation system integrating Machine Learning concepts and Natural Language Processing (NLP) with user review text.</li>
                <li>Engineered an end-to-end data preprocessing pipeline in Python: text tokenization, stop-word removal, text cleaning, and sentiment polarity classification.</li>
                <li>Generated sentiment-weighted affinity scores to solve rating bias and cold-start limitations, outperforming traditional non-sentiment collaborative filtering baselines.</li>
                <li>Awarded the highest departmental mark of <strong>Grade A+</strong> by faculty examiners for empirical evaluation and research rigor.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-[14px] font-bold uppercase tracking-widest text-[#b90538] mb-3 pb-1 border-b border-[#ffdadb] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">school</span> Education
            </h2>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="font-bold text-[15px] text-[#131b2e]">Govt. College Women University, Sialkot (HEC Recognized)</h3>
                  <p className="text-[14px] text-[#5b4041]">
                    BS Computer Science · <span className="text-[#b90538] font-bold">CGPA: 3.78/4.00 | Roll of Honor | 3rd Position in Department</span>
                  </p>
                </div>
                <span className="text-[12px] font-mono text-[#5b4041] mt-1 sm:mt-0">2017 – 2021</span>
              </div>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-[13px] text-[#5b4041]">
                <li><strong className="text-[#131b2e]">A+ in 25 subjects</strong>, including Data Structures, Algorithms, DBMS, Computer Networks, Operating Systems, OOP, Software Engineering, AI.</li>
                <li>Awarded <strong className="text-[#131b2e]">HEC Prime Minister&apos;s Laptop Scheme</strong> for academic excellence.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="font-bold text-[15px] text-[#131b2e]">Virtual University of Pakistan</h3>
                  <p className="text-[14px] text-[#5b4041]">
                    Bachelor of Education (B.Ed.) · <span className="text-[#006947] font-bold">CGPA: 3.12/4.00</span>
                  </p>
                </div>
                <span className="text-[12px] font-mono text-[#5b4041] mt-1 sm:mt-0">2022 – 2024</span>
              </div>
              <p className="text-[13px] text-[#5b4041] mt-1 pl-5">
                Focus on instructional design, curriculum architecture, and objective performance evaluation.
              </p>
            </div>
          </div>

          {/* Technical Skills & Domains */}
          <div>
            <h2 className="text-[14px] font-bold uppercase tracking-widest text-[#006947] mb-3 pb-1 border-b border-[#6ffbbe]/50 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">code</span> Technical Skills &amp; Competencies
            </h2>
            <div className="space-y-2 text-[13px]">
              <div className="p-3 rounded-xl bg-[#faf8ff] border border-[#dae2fd]/70 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                <span className="font-bold text-[#131b2e] w-36 shrink-0">Languages:</span>
                <span className="text-[#5b4041]">Python, JavaScript, C++, SQL, HTML/CSS</span>
              </div>
              <div className="p-3 rounded-xl bg-[#faf8ff] border border-[#dae2fd]/70 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                <span className="font-bold text-[#131b2e] w-36 shrink-0">CS Fundamentals:</span>
                <span className="text-[#5b4041]">Data Structures &amp; Algorithms, OOP, Operating Systems, Computer Networks</span>
              </div>
              <div className="p-3 rounded-xl bg-[#faf8ff] border border-[#dae2fd]/70 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                <span className="font-bold text-[#131b2e] w-36 shrink-0">Databases:</span>
                <span className="text-[#5b4041]">SQL, SQLite, Database Design &amp; Management (DBMS coursework)</span>
              </div>
              <div className="p-3 rounded-xl bg-[#faf8ff] border border-[#dae2fd]/70 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                <span className="font-bold text-[#131b2e] w-36 shrink-0">Version Control:</span>
                <span className="text-[#5b4041]">Git (basic) — branching, commits, repositories</span>
              </div>
              <div className="p-3 rounded-xl bg-[#faf8ff] border border-[#dae2fd]/70 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                <span className="font-bold text-[#131b2e] w-36 shrink-0">Web Technologies:</span>
                <span className="text-[#5b4041]">HTML, CSS (foundational); exposure to web application architecture</span>
              </div>
              <div className="p-3 rounded-xl bg-[#faf8ff] border border-[#dae2fd]/70 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                <span className="font-bold text-[#131b2e] w-36 shrink-0">Tools:</span>
                <span className="text-[#5b4041]">VS Code, MS Office Suite, Google Suite, GitHub</span>
              </div>
              <div className="p-3 rounded-xl bg-[#faf8ff] border border-[#dae2fd]/70 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                <span className="font-bold text-[#131b2e] w-36 shrink-0">AI / ML:</span>
                <span className="text-[#5b4041]">Machine Learning concepts, NLP, Sentiment Analysis, Data Preprocessing</span>
              </div>
              <div className="p-3 rounded-xl bg-[#faf8ff] border border-[#dae2fd]/70 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                <span className="font-bold text-[#131b2e] w-36 shrink-0">Growth &amp; Marketing:</span>
                <span className="text-[#5b4041]">Meta Ads, Google Ads, AI Copywriting (Jasper AI, Copy.ai, Writesonic), Surfer SEO, CRO</span>
              </div>
              <div className="p-3 rounded-xl bg-[#faf8ff] border border-[#dae2fd]/70 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                <span className="font-bold text-[#131b2e] w-36 shrink-0">Languages Spoken:</span>
                <span className="text-[#5b4041]">English (Professional) · Urdu (Native)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-[#eaedff] border-t border-[#dae2fd] flex flex-wrap items-center justify-between gap-3">
          <span className="text-[12px] text-[#5b4041]">
            Looking to connect with Zoha Naeem?
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onNavigateToContact();
              }}
              className="px-4 py-2 rounded-full bg-[#131b2e] hover:bg-[#283044] text-white text-[12px] font-bold transition-all cursor-pointer"
            >
              Get in Touch / Message
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-white hover:bg-[#f2f3ff] text-[#131b2e] text-[12px] font-semibold border border-[#dae2fd] transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
