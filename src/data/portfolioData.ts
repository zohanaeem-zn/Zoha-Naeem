import { ExperienceItem, GrowthCaseStudy, Project, SkillCategory } from '../types';

export const ASSETS = {
  logo: '/zoha_pic.jpeg',
  avatar: '/zoha_pic.jpeg',
  heroWorkspace: '/zoha_pic.jpeg',
  candidDesk: '/zoha_pic.jpeg',
  projects: {
    lumina: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBytLIgTfmQtzKoxHJee5QnPoVtgh8uTMv6Qa-_DuXM_ebRDVwKET2s6C3h0jMrZfZdoCZSK-nBsWgG9fZcHChptbxMl9hga7u1CqJ1f6xAOFOHnct5cKLAIj12q1rKoKISQ0jrHV1EgXIbCZSzkoYM9EsN_4vgcuN_eXxx4zMSxSSVAoxE8ohESkt61SaVjaSs7-olje_xbXTFBs8HUpDgY4cfZHygTI7F_sjzDx4RS7JXmZrwE5Lv',
    bloom: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMS6ik_6RFrJRSRVDP2kklLvJ_A1wKGL7fF7tQliseK98VF3baoPfSx1p7UhxHqCtFmWjv7EhPhW2sOmi7qXg_4nBVmZZxs437d5_017kMdqXaVdk59x7cof03BfLGVB1Xi6Phwc9tacWhxAvUfQ_jDpavTpZoOvwafmcTqJeG6bcXk-NksSbg8EfYXUxtQb3xqowMJtEAt9zGVNVLRMACAbTge3rdegydRH1ztIBmbYSpA0zpvhq6',
    pulseflow: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNmR7ojTy_li6zETb1NlFcItM-s_-4za3bn2D2I0rP3KZjSUGzbAHpSbBQrlJDYrECKqu3waiilQbTAVyqCgTWOWc3CsmQ4O9GtG7S8AjXuCDxAsf3gZBEFBcF-H7OM_LKOWnHKFxipBuO8jSYM6G2aAvdZN1Esziv2u6g_DKTT2lazf86_FM0Dd6Vv2OiG4csa5aVOkpb7u1eBjl_HEtPuULVVTftezQHEvLQDHcAhfEZTxSiolLV',
    aura: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkeG0H7tv-262q3sK_BRWVcf4jGNVZ5D7OwL5HotxxA1Qykcmi5KtSUsXHqIk5BzmlycsoERrbO7Rrcku07mnhDFMMNPT-FLFQ5paNIMCFI7JFv9b7J6ZV2BDSAGozwKxLnB8scWMEYAitH9kxcGxSljjfVjqEVsjvrHLS2h3By0ptqa-V5w_pZ2Pa4IGAjPCQQl9apSi0tcTTFmcQ9KaKrLP-Xe1g8dJpHby9bt0nUfOXmq9qcnKJ',
    ecotrack: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJW631DsJ2U6aAvqGukZbdbZaZicqNIgvjuahA1jnBYz2ynZgudxDlBhpcV1Zvr9ybdCnkUpNsSWRRc0ndneMRSOxoNlZmChNepyMdPIXWTL2FOmUcM3r8m04EB4Ntt23WCSiYwU2FaOyGip9sQnVIlYTq5Fgy-foVSlVQT_K7Rbt033iPbbpfUSgF8kpohPn10BpdrGQdxRxcjpMBcikE6sM6m54aPZslwO4x0vY8VKZOlX7USsoi',
    hyperscale: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaA-h3ewE4Len7AuratP3ov67BI-J_4dhPIwOo9FIV1-Jy7V9DutN2Pk0tIolLQHEOcclRZ6iAZU9g2LSBxkPUt9fJnAnv6VaFK6yWZfMB2MxOUMVGb3Mz3mX6bWWZZkFAr7mh2iqbdLWGtUlJF1OIMjHrQ5ach-r2wGJD2anXtB2MiohIua34EAzjwaum92kbCcaquWBG1ZsrAxRauuLePqd501DuMpqxi6haVzzXaiNaEoaffb_3'
  },
  caseStudies: {
    viralLaunch: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOo7xtrGqYfUrfLRA64520hdcCSopiu2KxjfwEfX3Jf2p0zJELhpJhMxIEgYdrz_aUPIU8DJOk7f7Trcf9GrUhytPbDXbF9DYPmX8WdVW3cSARepegYt8uCZBjUqcQMUIG1uH-owvYVZVZ-Xhzb5MSuxQZMyXKtV8qvrsDxFRxUd5GRsGThNS4e52EYjqCuic6RhfSrm4k81dQweiV44P1MmdoJNtL_LAL0GlQpC53pHZdrgKtmFXu',
    ecommerceSeo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdpRt5AWaYcH7LQuWjErq3BYHabqBZKUYF_pwvRUeBmJXgO8f2RNS2tt4tYD81Vm_kR3Z15hoobAxYn6wuaNchO5HdLMSFAoQxLq4vP-nchkHyq1mfFzGsAsNtBnKh1vuAWOKxPzhkYRsanytmZb3mJbvwuGAVwdapsRnWIabwH9Wr679mQVzYKaWVtoPPOllL-WgzvoqAw-sCAGZv31K970NuTE7C4SJJrBuTWblLba-0xgNTafIy'
  }
};

export const PERSONAL_INFO = {
  name: 'Zoha Naeem',
  title: 'Web Developer & Digital Marketing Specialist',
  roleTag: 'BS CS (Roll of Honor, 3rd Position) · B.Ed. Graduate',
  email: 'zoha.naeem.zn@gmail.com',
  phone: '+92-328-933-4400',
  phoneRaw: '+923289334400',
  whatsapp: '+923289334400',
  whatsappUrl: 'https://wa.me/923289334400',
  location: 'Lahore, Pakistan',
  availability: 'Available for On-site (Lahore), Remote & Hybrid roles worldwide',
  github: 'https://github.com/zohanaeem-zn',
  linkedin: 'https://www.linkedin.com/in/zoha-naeem-b26a0a373/',
  summary:
    'Versatile software engineer, frontend web developer, and data-driven digital marketer with a BS in Computer Science (Roll of Honor, CGPA 3.78/4.00, 3rd Position, 25 A+ grades) and B.Ed. Graduate. Experienced in building responsive web applications (Samsolutionz Software House), running high-converting paid ad campaigns and e-commerce growth strategies (Dubi Homes contractual project), and structured technical training. Actively available for on-site (Lahore), remote, and hybrid opportunities.',
  cgpa: '3.78/4.00',
  studentsTrained: '150+',
  aPlusSubjects: '25 Core CS Courses'
};

export const PROJECTS: Project[] = [
  {
    id: 'recommendation-system-sentiment-analysis',
    title: 'Recommendation System using Sentiment Analysis',
    tagline: 'Research-Based Final Year Project | Grade: A+ (GCWUS Roll of Honor)',
    category: 'academic',
    categoryLabel: 'Key Project · Final Year Research (Grade: A+)',
    image: ASSETS.projects.lumina,
    stats: [
      { label: 'Evaluation Grade', value: 'Grade: A+' },
      { label: 'Project Type', value: 'Research-Based FYP' },
      { label: 'Core AI Domain', value: 'NLP & Recommenders' }
    ],
    tags: [
      'Python',
      'Sentiment Analysis',
      'NLP',
      'Machine Learning',
      'Data Preprocessing',
      'Recommendation Systems',
      'Research'
    ],
    description:
      'A research-based Final Year Project (FYP) that designs and evaluates an intelligent recommendation system leveraging natural language processing and sentiment analysis on user reviews, awarded the highest departmental grade of A+.',
    longDescription:
      'Developed as a flagship research-based Final Year Project at Govt. College Women University, Sialkot. The system integrates machine learning concepts with natural language processing to extract user sentiment polarities from unstructured textual feedback. Through rigorous data preprocessing (tokenization, stop-word removal, and feature vectorization), the model computes sentiment-weighted affinity scores that significantly improve recommendation relevance over baseline collaborative filtering approaches.',
    architectureNotes: [
      'Multi-stage data preprocessing pipeline: text cleaning, tokenization, stop-word removal, and TF-IDF / polarity scoring',
      'Sentiment analysis engine extracting positive/negative emotional orientation to understand qualitative user preferences',
      'Hybrid recommendation algorithmic architecture combining numerical rating matrices with qualitative sentiment weights',
      'Rigorous research methodology with empirical evaluation, benchmark testing, and formal thesis defense'
    ],
    growthHighlights: [
      'Awarded Grade: A+ by the academic evaluation committee and external examiners',
      'Demonstrated superior recommendation accuracy and user satisfaction over traditional non-sentiment models'
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/zohanaeem-zn/recommendation-system-sentiment-analysis',
    featuredSnippet: `// Recommendation System using NLP Sentiment Scoring
def generate_sentiment_recommendations(user_id, item_catalog, review_corpus):
    user_sentiment_profile = extract_user_sentiment_preferences(user_id, review_corpus)
    ranked_candidates = []
    
    for item in item_catalog:
        # Preprocess reviews & compute sentiment polarity
        reviews = review_corpus.get_reviews(item['id'])
        preprocessed = [preprocess_text(r['content']) for r in reviews]
        polarity_score = compute_sentiment_polarity(preprocessed)
        
        # Hybrid recommendation formula combining base rating & sentiment
        composite_score = (0.55 * item['base_rating']) + (0.45 * (polarity_score * 5.0))
        ranked_candidates.append({'item': item['title'], 'score': composite_score})
        
    return sorted(ranked_candidates, key=lambda x: x['score'], reverse=True)`
  },
  {
    id: 'luminar-learning',
    title: 'Luminar Learning',
    tagline: 'Interactive Course Delivery & Educational Management Web Application',
    category: 'full-stack',
    categoryLabel: 'Full-Stack Web Application · Open Source',
    image: ASSETS.projects.bloom,
    stats: [
      { label: 'Project Type', value: 'Web Platform' },
      { label: 'Architecture', value: 'Full-Stack / Modern Web' },
      { label: 'Repository', value: 'GitHub Open' }
    ],
    tags: [
      'React',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Web Development',
      'Educational Platform',
      'UI/UX Engineering',
      'Git'
    ],
    description:
      'An educational web platform designed to streamline course delivery, interactive module progression, and student skill advancement with responsive, accessible user interfaces.',
    longDescription:
      'Luminar Learning is an educational web application developed by Zoha Naeem (github.com/zohanaeem-zn/Luminar_Learning). Engineered to bridge pedagogical structure with clean frontend software development, the application delivers structured learning pathways, interactive curriculum modules, responsive lesson navigation, and real-time student engagement checkpoints. Built with a focus on intuitive user experience and clean code organization.',
    architectureNotes: [
      'Component-driven interface structure delivering smooth lesson navigation and progress tracking',
      'Responsive, mobile-friendly design system ensuring seamless accessibility across devices',
      'Interactive modules and curriculum roadmaps mapped to progressive student learning outcomes',
      'Open-source repository with clean Git version control workflows and modular code structure'
    ],
    growthHighlights: [
      'Published on GitHub at https://github.com/zohanaeem-zn/Luminar_Learning',
      'Combines computer science web development standards with pedagogical curriculum design'
    ],
    demoUrl: 'https://github.com/zohanaeem-zn/Luminar_Learning',
    githubUrl: 'https://github.com/zohanaeem-zn/Luminar_Learning',
    featuredSnippet: `// Luminar Learning - Course module state & student progress tracker
interface CourseModule {
  id: string;
  title: string;
  topic: string;
  durationMinutes: number;
  completed: boolean;
}

export function trackProgress(modules: CourseModule[]): {
  completedPercent: number;
  remainingCount: number;
} {
  const completedCount = modules.filter(m => m.completed).length;
  const completedPercent = modules.length > 0 
    ? Math.round((completedCount / modules.length) * 100) 
    : 0;
  return {
    completedPercent,
    remainingCount: modules.length - completedCount
  };
}`
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website (Made by Zoha Naeem)',
    tagline: 'Custom-Engineered Full-Feature Portfolio Built From Scratch by Zoha Naeem',
    category: 'frontend',
    categoryLabel: 'Custom Built by Me · React & TypeScript',
    image: ASSETS.projects.pulseflow,
    stats: [
      { label: 'Built By', value: 'Zoha Naeem' },
      { label: 'Tech Stack', value: 'React + TypeScript' },
      { label: 'Styling', value: 'Tailwind CSS' }
    ],
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Single Page App',
      'Frontend Architecture',
      'UI/UX Design',
      'Responsive Design'
    ],
    description:
      'This entire portfolio website was designed, coded, and built by me (Zoha Naeem) from the ground up, highlighting my dual competencies in modern web development and digital marketing.',
    longDescription:
      'This portfolio website is a custom-engineered web application crafted entirely by Zoha Naeem. Designed and built from scratch without using cookie-cutter templates, it utilizes React 19, TypeScript, Vite, and Tailwind CSS. The site features an interactive single-page application (SPA) architecture with hash-based routing, deep project case study modals with syntax-highlighted code inspection, interactive multi-domain skill competency matrices, live printable resume viewing, and responsive layout adaptations across all mobile and desktop screens.',
    architectureNotes: [
      'Engineered 100% custom from scratch by Zoha Naeem with clean React functional components and hooks',
      'Fully responsive, mobile-first design with custom modal dialogues, sliding drawers, and fluid typography',
      'Strongly typed data model with strict TypeScript interfaces ensuring compile-time safety and zero bugs',
      'Lightweight bundle footprint with zero exterior component framework bloat and instant load velocity'
    ],
    growthHighlights: [
      'Designed and coded by Zoha Naeem to present her software engineering, research FYP, and digital marketing work',
      'Showcases pixel-perfect attention to detail, typography, and responsive frontend craftsmanship'
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/zohanaeem-zn',
    featuredSnippet: `// Portfolio Website Architecture - Built by Zoha Naeem
import React, { useState } from 'react';
import { PageId, Project } from './types';

export const PortfolioApp: React.FC = () => {
  const [activePage, setActivePage] = useState<PageId>('about');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Custom portfolio engineered by Zoha Naeem
  return (
    <div className="portfolio-root bg-[#faf8ff] text-[#131b2e]">
      <Header activePage={activePage} onNavigate={setActivePage} />
      <MainContent 
        page={activePage} 
        onSelectProject={(project) => setSelectedProject(project)} 
      />
      <Footer author="Zoha Naeem" />
    </div>
  );
};`
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    year: '2024 (Contract)',
    period: '2024 · Contractual Business Engagement (Completed)',
    role: 'Digital Marketing Expert (Contractual)',
    company: 'Dubi Homes',
    location: 'E-Commerce Growth (Remote)',
    badge: 'Contractual Business Project · Completed',
    badgeColor: 'primary',
    category: 'marketing',
    websiteUrl: 'https://dubihomes.store',
    links: [
      { label: 'dubihomes.store', url: 'https://dubihomes.store', icon: 'language' },
      { label: 'Facebook Page', url: 'https://www.facebook.com/people/Dubi-Homes/61583503002441/?rdid=qpGIBfrp5dJQlmJa&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17Z8t4r9Ad%2F', icon: 'share' },
      { label: 'Instagram Profile', url: 'https://www.instagram.com/dubi_homes?igsh=MTFzYng3bjduZGRrdQ%3D%3D', icon: 'photo_camera' }
    ],
    summary:
      'Executed full-funnel digital marketing strategies on a contractual business engagement for Dubi Homes, driving brand discovery, paid customer acquisition, social engagement, and e-commerce conversions across Google, Meta, and web platforms.',
    achievements: [
      'Executed high-converting Meta Ads campaigns (Facebook & Instagram), leveraging custom audiences, behavioral retargeting, and pixel conversion tracking to drive direct store sales.',
      'Designed and optimized high-intent Google Ads search and shopping campaigns to capture qualified buyer intent and maximize ROAS.',
      'Managed end-to-end Meta brand presence across official Facebook and Instagram channels, maintaining cohesive visual identity and active customer engagement.',
      'Authored persuasive marketing copywriting, campaign slogans, promotional emails, and high-converting product descriptions.',
      'Produced creative multimedia content tailored for feed, stories, and reels, significantly boosting organic reach and brand authority.'
    ],
    technologies: [
      'Social Media Marketing',
      'Meta Handling',
      'Google Ads',
      'Meta Ads',
      'Digital Marketing',
      'Content Creation',
      'Copywriting',
      'Conversion Rate Optimization (CRO)'
    ]
  },
  {
    year: 'June 15 – Sept 15',
    period: 'June 15 – September 15',
    role: 'Frontend Developer Intern',
    company: 'Samsolutionz Software House',
    location: 'Software House',
    badge: 'Frontend Web Engineering',
    badgeColor: 'secondary',
    category: 'frontend',
    websiteUrl: 'https://samsolutionz.com',
    links: [
      { label: 'samsolutionz.com', url: 'https://samsolutionz.com', icon: 'language' }
    ],
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
  },
  {
    year: '2024 — 2025',
    period: 'Nov 2024 – Apr 2025',
    role: 'College Teacher Internee',
    company: 'Govt. Islamia Graduate College, Sambrial',
    location: 'Sambrial, Pakistan',
    badge: '100+ Students Instructed',
    badgeColor: 'tertiary',
    category: 'teaching',
    summary:
      'Delivered rigorous Computer Science and modern IT tool instruction to 100+ students across intermediate and BS levels, adapting pedagogical methods to mixed-level starting points.',
    achievements: [
      'Delivered computer science and IT tool instruction to 100+ students across intermediate and BS levels, adapting explanations to each group’s starting point.',
      'Designed and ran structured training sessions on MS Office Suite and digital tools from the ground up, producing supporting documentation and evaluation reports for each cohort.',
      'Tracked and analyzed student performance data throughout the term, applying consistent, detail-oriented record-keeping to catch learning gaps early.',
      'Created clear assessment rubrics, hands-on laboratory exercises, and standardized progress evaluation frameworks.'
    ],
    technologies: ['Computer Science', 'Python', 'MS Office Suite', 'Google Suite', 'Instructional Design', 'Performance Evaluation']
  },
  {
    year: '2023',
    period: 'Jan 2023 – Jun 2023',
    role: 'College Teacher Internee',
    company: 'Govt. Associate College for Women, Sambrial',
    location: 'Sambrial, Pakistan',
    badge: 'Practical Exam Readiness',
    badgeColor: 'secondary',
    category: 'teaching',
    summary:
      'Prepared 50+ students for practical computer applications examinations, producing comprehensive laboratory session reports and continuous learning assessments.',
    achievements: [
      'Prepared 50+ students for practical computer applications exams, producing lab session reports and learning assessments to track exam readiness.',
      'Structured hands-on laboratory sessions bridging theoretical concepts with tactile software execution.',
      'Delivered personalized academic guidance and troubleshooting assistance to help struggling students achieve benchmark proficiency.',
      'Maintained meticulous, audit-ready student records and evaluation ledgers across the entire academic term.'
    ],
    technologies: ['Computer Applications', 'Lab Instruction', 'Assessment Design', 'Data Organization', 'MS Office']
  }
];

export const EDUCATION_LIST = [
  {
    degree: 'BS Computer Science',
    institution: 'Govt. College Women University, Sialkot (HEC Recognized)',
    period: '2017 – 2021',
    honors: 'CGPA: 3.78/4.00 | Roll of Honor | 3rd Position in Department',
    highlights: [
      'A+ in 25 subjects, including Data Structures, Algorithms, DBMS, Computer Networks, OOP, Software Engineering, and AI',
      'Awarded HEC Prime Minister’s Laptop Scheme for academic excellence'
    ]
  },
  {
    degree: 'Bachelor of Education (B.Ed.)',
    institution: 'Virtual University of Pakistan',
    period: '2022 – 2024',
    honors: 'CGPA: 3.12/4.00',
    highlights: [
      'Specialized focus on instructional design, curriculum architecture, and performance evaluation',
      'Designed objective rubrics and adaptive assessment frameworks for mixed-level technical learners'
    ]
  }
];

export const CORE_STRENGTHS = [
  {
    title: 'Communication & Instruction',
    description: 'Explaining technical, procedural, and algorithmic material clearly to audiences across diverse experience levels.',
    icon: 'record_voice_over'
  },
  {
    title: 'Curriculum & Training Design',
    description: 'Building structured technical sessions, laboratory manuals, and supporting documentation from a blank page.',
    icon: 'menu_book'
  },
  {
    title: 'Performance Evaluation',
    description: 'Designing diagnostic assessments and evaluation reports, and tracking outcomes over time with zero discrepancies.',
    icon: 'analytics'
  },
  {
    title: 'Attention to Detail & Organization',
    description: 'Consistent, accurate record-keeping, structured data ledgers, and systematic follow-through across full terms.',
    icon: 'fact_check'
  },
  {
    title: 'Adaptability & Empathy',
    description: 'Working seamlessly across two institutions and multiple student levels from intermediate through BS degree cohorts.',
    icon: 'psychology'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'terminal',
    description: 'Core programming and scripting languages applied across software development and data processing.',
    skills: [
      { name: 'Python', level: 93, experience: '4 years', description: 'Data processing, scripting, algorithmic problem solving, machine learning concepts, and NLP pipelines.' },
      { name: 'JavaScript', level: 88, experience: '3 years', description: 'Dynamic web interactions, DOM manipulation, asynchronous event handling, and modern UI logic.' },
      { name: 'C++', level: 90, experience: '4 years', description: 'Object-oriented programming, memory management, pointers, and computational complexity.' },
      { name: 'SQL', level: 92, experience: '3 years', description: 'Relational queries, multi-table JOINs, schema architecture, aggregation, and integrity constraints.' },
      { name: 'HTML/CSS', level: 92, experience: '3+ years', description: 'Semantic document structure, responsive layouts, Flexbox/Grid styling, and clean cross-browser design.' }
    ]
  },
  {
    title: 'CS Fundamentals',
    icon: 'account_tree',
    description: 'Foundational computer science principles backed by 25 A+ grades and Roll of Honor standing at GCWUS.',
    skills: [
      { name: 'Data Structures & Algorithms', level: 95, experience: '4 years', description: 'Binary trees, graph traversals, dynamic programming, sorting/searching pipelines, and asymptotic complexity.' },
      { name: 'Object-Oriented Programming (OOP)', level: 94, experience: '4 years', description: 'Encapsulation, inheritance, polymorphism, abstraction, modular class architecture, and clean design patterns.' },
      { name: 'Operating Systems', level: 90, experience: '3 years', description: 'Process lifecycle, CPU scheduling, multi-threading, concurrency, memory allocation, and virtual memory.' },
      { name: 'Computer Networks', level: 90, experience: '3 years', description: 'OSI 7-layer reference model, TCP/IP protocols, client-server socket communication, subnetting, and packet routing.' }
    ]
  },
  {
    title: 'Databases & Management',
    icon: 'database',
    description: 'Relational database architecture, theoretical DBMS coursework, and transactional data integrity.',
    skills: [
      { name: 'SQL', level: 92, experience: '3 years', description: 'Structured Query Language, complex analytical queries, views, constraints, and execution plan optimization.' },
      { name: 'SQLite', level: 88, experience: '2+ years', description: 'Lightweight, serverless embedded database modeling for local applications, testing, and rapid prototypes.' },
      { name: 'Database Design & Management (DBMS)', level: 94, experience: '3 years', description: 'Entity-Relationship (ER) modeling, normalization (1NF through 3NF/BCNF), indexing strategies, and ACID consistency.' }
    ]
  },
  {
    title: 'AI / ML & NLP',
    icon: 'psychology',
    description: 'Applied machine learning concepts and natural language processing powering her Grade A+ Final Year Project.',
    skills: [
      { name: 'Sentiment Analysis', level: 94, experience: '2 years', description: 'Textual sentiment polarity scoring, subjective user opinion mining, and emotional classification algorithms.' },
      { name: 'Natural Language Processing (NLP)', level: 92, experience: '2 years', description: 'Tokenization, stop-word elimination, stemming, lemmatization, and TF-IDF feature vectorization.' },
      { name: 'Machine Learning Concepts', level: 89, experience: '2 years', description: 'Supervised classification, recommendation heuristics, collaborative filtering, and evaluation metrics (Precision, Recall, F1).' },
      { name: 'Data Preprocessing', level: 93, experience: '3 years', description: 'Data cleaning, handling missing values, text normalization, dataset transformation, and pipeline structuring.' }
    ]
  },
  {
    title: 'Version Control & Web Technologies',
    icon: 'code',
    description: 'Modern development workflows, version tracking, and web architecture fundamentals.',
    skills: [
      { name: 'Git (Basic)', level: 88, experience: '3 years', description: 'Branching, commit histories, local & remote repositories, staging, merge workflows, and code tracking.' },
      { name: 'HTML & CSS (Foundational)', level: 92, experience: '3+ years', description: 'Semantic markup, accessible UI components, responsive media queries, and modern styling.' },
      { name: 'Web Application Architecture', level: 86, experience: '2+ years', description: 'Exposure to client-server paradigms, RESTful API conventions, request-response lifecycles, and DOM rendering.' }
    ]
  },
  {
    title: 'Tools & Productivity',
    icon: 'construction',
    description: 'Everyday developer environments, cloud productivity platforms, and enterprise office suites.',
    skills: [
      { name: 'VS Code & GitHub', level: 94, experience: '4 years', description: 'Code editing, extensions, integrated terminal debugging, GitHub repositories, and version management.' },
      { name: 'MS Office Suite (Word, Excel, PPT)', level: 96, experience: '5+ years', description: 'Advanced Excel formulas, data modeling, computational ledgers, publication-grade Word documents, and slide decks.' },
      { name: 'Google Suite (Docs, Sheets, Slides, Forms)', level: 95, experience: '4+ years', description: 'Collaborative cloud workflows, automated student assessment forms, and shared administrative records.' }
    ]
  },
  {
    title: 'Digital Marketing & Growth Strategy',
    icon: 'trending_up',
    description: 'E-commerce scaling, contractual paid ads, AI copywriting tools, and conversion rate optimization.',
    skills: [
      { name: 'Meta Ads & Google Ads', level: 92, experience: '2+ years', description: 'High-intent search, shopping campaigns, Meta Advantage+ funnels, custom retargeting, and ROAS optimization.' },
      { name: 'AI Copywriting Tools (Jasper, Copy.ai, Writesonic)', level: 95, experience: '2+ years', description: 'Prompt engineering, high-converting ad copy angles, product descriptions, and promotional marketing collateral.' },
      { name: 'SEO & Search Intelligence (Surfer SEO, SEMrush, GSC)', level: 92, experience: '3+ years', description: 'NLP content scoring, keyword clustering, on-page optimization, Google Search Console audits, and organic rankings.' },
      { name: 'A/B Testing & Conversion Rate Optimization (CRO)', level: 91, experience: '2+ years', description: 'Split test variants, checkout UX audits, customer friction reduction, and measurable revenue lift.' }
    ]
  },
  {
    title: 'Curriculum Design & Instruction',
    icon: 'school',
    description: 'Formal pedagogical methodology reinforced by a Bachelor of Education (B.Ed.) from Virtual University.',
    skills: [
      { name: 'Curriculum & Module Architecture', level: 95, experience: '2+ years', description: 'Building structured technical learning pathways and laboratory manuals from a blank page.' },
      { name: 'Technical Training & Lecture Delivery', level: 94, experience: '2+ years', description: 'Breaking down complex technical material for 150+ students across intermediate and BS levels.' },
      { name: 'Objective Assessment & Rubric Design', level: 92, experience: '2+ years', description: 'Formulating fair, reproducible evaluation matrices and practical exam standards.' }
    ]
  }
];

export const GROWTH_CASE_STUDIES: GrowthCaseStudy[] = [
  {
    id: 'case-instructional-scale',
    title: 'Institutional Technical Training Initiative',
    client: 'Govt. Islamia Graduate College, Sambrial',
    subtitle: 'Training 100+ students in Computer Science & modern digital tools from the ground up',
    metricHero: '100+',
    metricLabel: 'Students Trained Across Intermediate & BS',
    image: ASSETS.caseStudies.viralLaunch,
    narrative:
      'Students entered with starkly mixed technical baselines, from complete digital beginners to advanced BS undergraduates. Zoha developed a structured curriculum with tailored explanations, interactive lab workshops, and continuous assessments to bridge the gap.',
    challenges:
      'Wide variance in prior computing exposure, limited individual lab hardware time, and lack of standardized evaluation rubrics for practical assessments.',
    solutions: [
      'Designed structured modular training sessions starting from foundational computing up to advanced concepts',
      'Authored clear laboratory documentation and step-by-step practical guides for each cohort',
      'Implemented periodic diagnostic check-ins and performance ledgers to catch learning gaps weeks before finals'
    ],
    results: [
      { metric: '100+', detail: 'Students actively instructed across intermediate and BS levels' },
      { metric: '95%+', detail: 'Cohort completion and retention rate across full academic terms' },
      { metric: '0%', detail: 'Record discrepancies across all official grading ledgers' },
      { metric: '100%', detail: 'On-schedule syllabus coverage with comprehensive practical exams' }
    ],
    stack: ['Python', 'Computer Science Curricula', 'MS Office Suite', 'Google Suite', 'Assessment Design']
  },
  {
    id: 'case-practical-exam-readiness',
    title: 'Practical Computer Applications Exam Acceleration',
    client: 'Govt. Associate College for Women, Sambrial',
    subtitle: 'Rigorous exam preparation and hands-on laboratory assessment system for 50+ students',
    metricHero: '50+',
    metricLabel: 'Students Prepared for Practical Exams',
    image: ASSETS.caseStudies.ecommerceSeo,
    narrative:
      'Preparing students for external board practical examinations required hands-on familiarity with software tools, rapid debugging under time constraints, and clear conceptual articulation.',
    challenges:
      'High student test anxiety, difficulty translating textbook concepts into live software workflows, and fragmented preparation tracking.',
    solutions: [
      'Constructed hands-on exam simulation scenarios mirroring external board practical standards',
      'Produced detailed weekly lab reports and individual learning assessments to benchmark readiness',
      'Conducted focused small-group remediation sessions on complex spreadsheet and database tasks'
    ],
    results: [
      { metric: '100%', detail: 'Lab attendance and practical task submission compliance' },
      { metric: 'Top Tier', detail: 'Consistently high practical exam scores achieved by the cohort' },
      { metric: '24+', detail: 'Comprehensive lab session reports delivered to departmental leadership' },
      { metric: '100%', detail: 'Student confidence rating in practical software applications' }
    ],
    stack: ['Computer Applications', 'Lab Reports', 'Exam Simulations', 'MS Excel / Word', 'Rubrics']
  }
];

export const TESTIMONIALS = [
  {
    quote:
      'Zoha possesses that rare gift of taking mathematically demanding and dense technical concepts and explaining them with effortless clarity. Her dedication to every student, paired with her meticulous organization, made her an indispensable asset to our academic department.',
    author: 'Department Head',
    title: 'Govt. Islamia Graduate College, Sambrial',
    avatarInitials: 'DH',
    badgeColor: 'secondary'
  },
  {
    quote:
      'Securing 3rd Position in the department and the Roll of Honor is a testament to Zoha’s intellectual rigor. When you combine her A+ standing in 25 subjects with her formal education training, she brings structure and excellence to any fast-moving team.',
    author: 'Faculty Mentor',
    title: 'Govt. College Women University, Sialkot',
    avatarInitials: 'FM',
    badgeColor: 'primary'
  },
  {
    quote:
      'Her lab documentation and student evaluation reports set a new benchmark for clarity and thoroughness. Zoha is dependable, structured, and approaches every challenge with proactive follow-through.',
    author: 'Senior Instructor',
    title: 'Govt. Associate College for Women, Sambrial',
    avatarInitials: 'SI',
    badgeColor: 'tertiary'
  }
];

export const FAQS = [
  {
    question: 'What roles is Zoha currently seeking?',
    answer:
      'Zoha is actively seeking roles in Frontend / Full-Stack Web Development, Digital Marketing & Paid Acquisition (Meta & Google Ads, SEO, AI Copywriting), and Technical Software Consulting. She is available for on-site (Lahore), remote, and hybrid roles worldwide.'
  },
  {
    question: 'What is Zoha’s academic background?',
    answer:
      'Zoha holds a BS in Computer Science from Govt. College Women University, Sialkot (CGPA 3.78/4.00, Roll of Honor, 3rd Position in Department) with A+ grades in 25 core subjects, and a Bachelor of Education (B.Ed.) from Virtual University of Pakistan focused on instructional design and performance evaluation.'
  },
  {
    question: 'What is Zoha’s experience in web development and digital marketing?',
    answer:
      'She completed a Frontend Developer Internship at Samsolutionz Software House (June 15 – September 15) building responsive web applications, and executed contractual business growth marketing for e-commerce store Dubi Homes (dubihomes.store), running Meta Ads, Google Ads, SEO, and AI-powered copy.'
  },
  {
    question: 'Where is Zoha located and what is her work availability?',
    answer:
      'Zoha is based in Lahore, Pakistan and is actively available for on-site opportunities in Lahore, as well as fully remote and hybrid roles worldwide.'
  }
];
