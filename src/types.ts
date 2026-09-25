export type PageId = 'about' | 'web-development' | 'digital-marketing' | 'experience' | 'projects' | 'skills' | 'contact' | 'resume';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'full-stack' | 'frontend' | 'academic' | 'open-source' | 'client';
  categoryLabel: string;
  image: string;
  stats: { label: string; value: string }[];
  tags: string[];
  description: string;
  longDescription: string;
  architectureNotes: string[];
  growthHighlights: string[];
  demoUrl?: string;
  githubUrl?: string;
  featuredSnippet?: string;
}

export interface ExperienceItem {
  year: string;
  period: string;
  role: string;
  company: string;
  location: string;
  badge: string;
  badgeColor: 'primary' | 'secondary' | 'tertiary';
  summary: string;
  achievements: string[];
  technologies: string[];
  websiteUrl?: string;
  links?: { label: string; url: string; icon?: string }[];
  category?: 'frontend' | 'marketing' | 'teaching';
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    experience: string;
    description: string;
    tags?: string[];
  }[];
}

export interface GrowthCaseStudy {
  id: string;
  title: string;
  client: string;
  subtitle: string;
  metricHero: string;
  metricLabel: string;
  image: string;
  narrative: string;
  challenges: string;
  solutions: string[];
  results: { metric: string; detail: string }[];
  stack: string[];
}
