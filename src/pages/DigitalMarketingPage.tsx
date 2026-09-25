import React, { useState, useMemo } from 'react';
import { PageId } from '../types';
import { EXPERIENCES } from '../data/portfolioData';

interface DigitalMarketingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

interface MarketingSkill {
  name: string;
  level: number;
  category: 'paid' | 'seo' | 'copy' | 'cro' | 'social';
  badge: string;
  experience: string;
  deliverable: string;
  tags: string[];
}

interface MarketingTool {
  name: string;
  category: 'ai' | 'seo' | 'paid' | 'analytics' | 'creative';
  categoryLabel: string;
  badge: string;
  badgeColor: 'primary' | 'secondary' | 'tertiary' | 'neutral';
  role: string;
  useCase: string;
  icon: string;
  features: string[];
}

export const DigitalMarketingPage: React.FC<DigitalMarketingPageProps> = ({
  onNavigate,
  onOpenResume
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'paid' | 'seo' | 'copy' | 'cro' | 'social'>('all');
  const [activeToolTab, setActiveToolTab] = useState<'all' | 'ai' | 'seo' | 'paid' | 'analytics' | 'creative'>('all');

  // Interactive Funnel ROI Calculator State
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(35000);
  const [currentCr, setCurrentCr] = useState<number>(2.0);
  const [aov, setAov] = useState<number>(85);
  const [liftPct, setLiftPct] = useState<number>(25);

  const calculation = useMemo(() => {
    const currentOrders = monthlyVisitors * (currentCr / 100);
    const currentRev = currentOrders * aov;

    const newCr = currentCr * (1 + liftPct / 100);
    const newOrders = monthlyVisitors * (newCr / 100);
    const newRev = newOrders * aov;

    const monthlyUpside = newRev - currentRev;
    const annualUpside = monthlyUpside * 12;

    return {
      currentOrders: Math.round(currentOrders),
      newOrders: Math.round(newOrders),
      currentRev: Math.round(currentRev),
      newRev: Math.round(newRev),
      monthlyUpside: Math.round(monthlyUpside),
      annualUpside: Math.round(annualUpside),
      newCrFormatted: newCr.toFixed(2)
    };
  }, [monthlyVisitors, currentCr, aov, liftPct]);

  const marketingExperience = EXPERIENCES.find((exp) => exp.category === 'marketing') || {
    year: '2024 (Contract)',
    period: '2024 · Contractual Business Engagement (Completed)',
    role: 'Digital Marketing Expert (Contractual)',
    company: 'Dubi Homes',
    location: 'E-Commerce Growth (Remote)',
    badge: 'Contractual Business Project · Completed',
    badgeColor: 'primary' as const,
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
  };

  // Tools used by Zoha
  const marketingTools: MarketingTool[] = [
    {
      name: 'Jasper AI',
      category: 'ai',
      categoryLabel: 'AI Copywriting',
      badge: 'Ad Copy Engine',
      badgeColor: 'primary',
      role: 'Content Generation & Creative Iteration',
      useCase: 'Formulated high-converting Facebook and Google ad variants, promotional campaign hooks, SEO-aligned blog outlines, and tailored e-commerce brand storytelling.',
      icon: 'auto_awesome',
      features: ['Ad Copy Variants', 'Brand Voice Mode', 'AIDA & PAS Frameworks', 'Long-Form Content']
    },
    {
      name: 'Copy.ai',
      category: 'ai',
      categoryLabel: 'AI Copywriting',
      badge: 'Rapid Social Hooks',
      badgeColor: 'primary',
      role: 'Social & Product Messaging',
      useCase: 'Rapidly drafted high-impact social media captions, irresistible product feature-benefit descriptions, pain-point hooks, and subject lines for email broadcasts.',
      icon: 'psychology',
      features: ['Social Caption Hooks', 'Product Descriptions', 'Value Props', 'Pain-Point Angles']
    },
    {
      name: 'Writesonic',
      category: 'ai',
      categoryLabel: 'AI Copywriting',
      badge: 'Web & Landing Pages',
      badgeColor: 'primary',
      role: 'E-Commerce & Search Content',
      useCase: 'Generated search-optimized landing page copy, real-time factual research via Chatsonic, and persuasive promotional headlines for promotional sales events.',
      icon: 'bolt',
      features: ['Landing Page Copy', 'Chatsonic Research', 'Promo Headlines', 'Benefit Bullet Points']
    },
    {
      name: 'ChatGPT & Claude',
      category: 'ai',
      categoryLabel: 'AI Copywriting',
      badge: 'Prompt Engineering',
      badgeColor: 'primary',
      role: 'Persona Synthesis & Strategy',
      useCase: 'Engineered multi-stage prompting frameworks to analyze customer objections, construct buyer persona archetypes, and draft end-to-end nurture email sequences.',
      icon: 'terminal',
      features: ['Prompt Engineering', 'Customer Persona Modeling', 'Objection Handling', 'Email Drip Logic']
    },
    {
      name: 'Surfer SEO',
      category: 'seo',
      categoryLabel: 'SEO & Optimization',
      badge: 'NLP Optimization',
      badgeColor: 'secondary',
      role: 'On-Page Content Intelligence',
      useCase: 'Utilized real-time content scoring, NLP keyword entity extraction, and competitor SERP density audits to ensure content outranks top organic search competitors.',
      icon: 'query_stats',
      features: ['NLP Content Score', 'Keyword Density', 'SERP Analysis', 'Heading & Semantic Hierarchy']
    },
    {
      name: 'SEMrush & Ahrefs',
      category: 'seo',
      categoryLabel: 'SEO & Optimization',
      badge: 'Competitive Intelligence',
      badgeColor: 'secondary',
      role: 'Keyword & Backlink Auditing',
      useCase: 'Identified high-intent, low-competition commercial keywords, evaluated keyword difficulty (KD%), audited competitor search footprint, and tracked organic SERP positions.',
      icon: 'search_insights',
      features: ['Keyword Difficulty (KD%)', 'Competitor Gap Analysis', 'Search Volume Forecasting', 'Backlink Audits']
    },
    {
      name: 'Google Search Console',
      category: 'seo',
      categoryLabel: 'SEO & Optimization',
      badge: 'Search Diagnostics',
      badgeColor: 'secondary',
      role: 'CTR & Indexing Telemetry',
      useCase: 'Analyzed organic search queries, identified high-impression but low-CTR pages for headline optimization, and monitored site indexation health and mobile usability.',
      icon: 'travel_explore',
      features: ['CTR Diagnostics', 'Query Performance', 'Indexing Health', 'Mobile Usability']
    },
    {
      name: 'Google Keyword Planner',
      category: 'seo',
      categoryLabel: 'SEO & Optimization',
      badge: 'Search Intent Data',
      badgeColor: 'secondary',
      role: 'Commercial Intent Mapping',
      useCase: 'Discovered high-converting transactional search queries, forecasted seasonal search volumes, and calculated CPC estimates for paid search campaign budgeting.',
      icon: 'manage_search',
      features: ['Search Volume Trends', 'CPC Estimation', 'Commercial Intent', 'Seed Keyword Clustering']
    },
    {
      name: 'Meta Ads Manager',
      category: 'paid',
      categoryLabel: 'Paid Media',
      badge: 'E-Commerce Acquisition',
      badgeColor: 'tertiary',
      role: 'Full-Funnel Campaign Architecture',
      useCase: 'Set up Advantage+ shopping campaigns, custom retargeting audiences, lookalike segments, and pixel conversion tracking to drive direct store sales for Dubi Homes.',
      icon: 'ads_click',
      features: ['Custom & Lookalike Audiences', 'Pixel Conversion Tracking', 'CBO / Advantage+ Bidding', 'Retargeting Funnels']
    },
    {
      name: 'Google Ads',
      category: 'paid',
      categoryLabel: 'Paid Media',
      badge: 'High-Intent Search',
      badgeColor: 'tertiary',
      role: 'Search & Shopping Campaigns',
      useCase: 'Configured high-intent exact and phrase match keywords, built negative keyword libraries to prevent ad waste, and optimized Quality Scores to maximize ROAS.',
      icon: 'campaign',
      features: ['Exact & Phrase Match', 'Negative Keyword Lists', 'Quality Score Optimization', 'ROAS Tracking']
    },
    {
      name: 'Meta Business Suite',
      category: 'paid',
      categoryLabel: 'Paid Media',
      badge: 'Channel Management',
      badgeColor: 'tertiary',
      role: 'Social Publishing & Operations',
      useCase: 'Unified Facebook & Instagram operations, scheduled promotional calendar drops, reviewed audience demographic growth, and handled customer direct messaging.',
      icon: 'hub',
      features: ['Unified Post Scheduling', 'Audience Analytics', 'Facebook & IG Management', 'Direct DM Engagement']
    },
    {
      name: 'Google Analytics 4 (GA4)',
      category: 'analytics',
      categoryLabel: 'Analytics & CRO',
      badge: 'Funnel Telemetry',
      badgeColor: 'neutral',
      role: 'Traffic & Conversion Attribution',
      useCase: 'Tracked user acquisition channels, evaluated checkout drop-off funnels, configured custom event triggers, and calculated Return on Ad Spend (ROAS).',
      icon: 'analytics',
      features: ['Event-Driven Tracking', 'Conversion Funnel Drop-offs', 'Attribution Modeling', 'UTM Campaign Tracking']
    },
    {
      name: 'Google Tag Manager (GTM)',
      category: 'analytics',
      categoryLabel: 'Analytics & CRO',
      badge: 'Event Triggering',
      badgeColor: 'neutral',
      role: 'Tag & Pixel Infrastructure',
      useCase: 'Configured custom click events, Meta Pixel triggers, purchase conversion scripts, and scroll depth tracking without modifying website source code directly.',
      icon: 'integration_instructions',
      features: ['Custom Event Triggers', 'Meta Pixel Firing', 'E-Commerce Tracking', 'No-Code Tag Setup']
    },
    {
      name: 'Hotjar & Microsoft Clarity',
      category: 'analytics',
      categoryLabel: 'Analytics & CRO',
      badge: 'Behavioral Insights',
      badgeColor: 'neutral',
      role: 'Heatmaps & Friction Discovery',
      useCase: 'Analyzed user click heatmaps and session recordings to identify mobile navigation friction, rage clicks, and cart abandonment triggers to optimize store conversion rates.',
      icon: 'visibility',
      features: ['Click & Scroll Heatmaps', 'Session Recordings', 'Rage Click Detection', 'Friction Audit']
    },
    {
      name: 'Canva Pro',
      category: 'creative',
      categoryLabel: 'Creative & Automation',
      badge: 'Visual Asset Design',
      badgeColor: 'primary',
      role: 'Social & Ad Creative Assets',
      useCase: 'Designed eye-catching Instagram feed posts, promotional story banners, product lifestyle highlights, and multi-slide carousel graphics that increase CTR.',
      icon: 'palette',
      features: ['Ad Creative Templates', 'Instagram Carousels', 'Brand Kit Consistency', 'Promotional Banners']
    },
    {
      name: 'CapCut & Premiere Rush',
      category: 'creative',
      categoryLabel: 'Creative & Automation',
      badge: 'Short-Form Video',
      badgeColor: 'primary',
      role: 'Reels & TikTok Editing',
      useCase: 'Crafted dynamic short-form video reels with hook-first pacing, synchronized audio trends, engaging on-screen text overlays, and clear call-to-actions.',
      icon: 'movie',
      features: ['Hook-First Pacing', 'Dynamic Text Captions', 'Trend Audio Sync', 'Visual Transitions']
    },
    {
      name: 'Klaviyo & Mailchimp',
      category: 'creative',
      categoryLabel: 'Creative & Automation',
      badge: 'Retention Flows',
      badgeColor: 'primary',
      role: 'Email Marketing & Retention',
      useCase: 'Set up automated abandoned cart recovery sequences, welcome series for new subscribers, and segmented promotional campaign blasts for returning customers.',
      icon: 'mail',
      features: ['Abandoned Cart Flows', 'Customer Welcome Series', 'Audience Segmentation', 'Open/CTR Optimization']
    }
  ];

  // Comprehensive Skills in Digital Marketing (Including SEO, A/B testing, CRO, AI Copy, etc.)
  const marketingSkills: MarketingSkill[] = [
    {
      name: 'A/B Testing & Split Experimentation',
      level: 93,
      category: 'cro',
      badge: 'Scientific CRO',
      experience: '2+ Years',
      deliverable: 'Hypothesis-driven creative split tests (headline hooks, creatives, CTA buttons, landing page variations) validated via statistical significance.',
      tags: ['Hypothesis Testing', 'Creative Split Testing', 'Variant Design', 'Statistical Significance']
    },
    {
      name: 'Search Engine Optimization (SEO)',
      level: 92,
      category: 'seo',
      badge: 'Organic Search',
      experience: '3+ Years',
      deliverable: 'End-to-end on-page SEO, search intent mapping, technical meta schema, heading architecture, and topical authority clustering.',
      tags: ['On-Page SEO', 'Search Intent', 'Topical Authority', 'Meta Tags & Schema']
    },
    {
      name: 'Conversion Rate Optimization (CRO)',
      level: 91,
      category: 'cro',
      badge: 'Funnel Lift',
      experience: '2+ Years',
      deliverable: 'Auditing storefronts for UX friction, optimizing mobile checkout funnels, positioning trust signals, and increasing visitor-to-customer conversion.',
      tags: ['Checkout UX', 'Friction Elimination', 'Trust Signals', 'Bounce Rate Reduction']
    },
    {
      name: 'AI-Powered Copywriting & Prompting',
      level: 95,
      category: 'copy',
      badge: 'AI Acceleration',
      experience: '2+ Years',
      deliverable: 'Leveraging Jasper AI, Copy.ai, Writesonic, and ChatGPT to rapidly iterate compelling ad angles, landing page copy, and customer-centric messaging.',
      tags: ['Jasper AI', 'Copy.ai', 'Writesonic', 'Prompt Engineering']
    },
    {
      name: 'Meta Ads (Facebook & Instagram)',
      level: 92,
      category: 'paid',
      badge: 'Paid Acquisition',
      experience: '2+ Years',
      deliverable: 'Custom audience sets, lookalikes, retargeting funnels, advantage+ campaigns, and pixel event conversion tracking driving direct store sales.',
      tags: ['Meta Ads Manager', 'Pixel Tracking', 'Custom Audiences', 'Advantage+ Campaigns']
    },
    {
      name: 'Google Ads (Search & Shopping)',
      level: 90,
      category: 'paid',
      badge: 'Intent Search',
      experience: '2+ Years',
      deliverable: 'High-intent search campaigns, keyword bidding strategies, negative keyword filtering, and ROAS optimization.',
      tags: ['Google Search Ads', 'Keyword Match Types', 'ROAS Optimization', 'Quality Score']
    },
    {
      name: 'Social Media Marketing & Meta Handling',
      level: 94,
      category: 'social',
      badge: 'Channel Growth',
      experience: '3+ Years',
      deliverable: 'End-to-end brand management across Facebook & Instagram, publishing schedules, community engagement, and brand identity stewardship.',
      tags: ['Meta Business Suite', 'Audience Growth', 'Community Engagement', 'Brand Identity']
    },
    {
      name: 'Content Creation & Multimedia Assets',
      level: 92,
      category: 'social',
      badge: 'Visual Assets',
      experience: '3+ Years',
      deliverable: 'Engaging creative assets formatted for feed posts, dynamic reels, stories, and promo banners using Canva Pro and short-form video editors.',
      tags: ['Social Content Creation', 'Reels & Stories', 'Canva Pro', 'Promotional Creatives']
    },
    {
      name: 'Persuasive Copywriting & Product Messaging',
      level: 95,
      category: 'copy',
      badge: 'Conversion Copy',
      experience: '3+ Years',
      deliverable: 'Compelling ad headlines, high-converting product descriptions, value propositions, and email copy driven by direct response principles.',
      tags: ['Direct Response Copy', 'Product Descriptions', 'Ad Headlines', 'Call to Action (CTA)']
    },
    {
      name: 'Email Marketing & Automated Retention',
      level: 89,
      category: 'copy',
      badge: 'Customer Retention',
      experience: '2+ Years',
      deliverable: 'Welcome series drip funnels, abandoned cart recovery triggers, promotional discount broadcasts, and customer segmentation.',
      tags: ['Abandoned Cart Recovery', 'Drip Campaigns', 'List Segmentation', 'Customer LTV']
    },
    {
      name: 'Performance Attribution & GA4 Analytics',
      level: 90,
      category: 'seo',
      badge: 'Data Diagnostics',
      experience: '3+ Years',
      deliverable: 'Google Analytics 4 event stream setup, UTM tracking taxonomy, acquisition channel reporting, and click-through rate diagnostics.',
      tags: ['Google Analytics 4', 'UTM Taxonomy', 'Attribution Modeling', 'Search Console']
    },
    {
      name: 'Customer Journey Mapping & Funnel Architecture',
      level: 91,
      category: 'cro',
      badge: 'Funnel Strategy',
      experience: '2+ Years',
      deliverable: 'Mapping touchpoints from Top-of-Funnel (TOFU) awareness to Bottom-of-Funnel (BOFU) purchases to maximize customer lifetime value.',
      tags: ['TOFU / MOFU / BOFU', 'Customer Journeys', 'Retention Loops', 'Offer Positioning']
    }
  ];

  const filteredSkills = activeCategory === 'all'
    ? marketingSkills
    : marketingSkills.filter((s) => s.category === activeCategory);

  const filteredTools = activeToolTab === 'all'
    ? marketingTools
    : marketingTools.filter((t) => t.category === activeToolTab);

  return (
    <div className="w-full bg-[#faf8ff] pb-16">
      {/* 1. HERO HEADER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f3ff]/90 via-[#faf8ff] to-[#faf8ff] pt-12 pb-16 border-b border-[#dae2fd]/60">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#b90538] font-label-sm text-[12px] font-bold shadow-xs border border-[#ffdadb]">
                <span className="material-symbols-outlined text-[15px]">trending_up</span>
                Digital Marketing &amp; Growth Strategy
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#4648d4] font-label-sm text-[12px] font-bold shadow-xs border border-[#dae2fd]">
                <span className="material-symbols-outlined text-[15px]">shopping_bag</span>
                Dubi Homes (Contractual)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ecfdf5] text-[#047857] font-label-sm text-[12px] font-bold shadow-xs border border-[#a7f3d0]">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                Available for On-site (Lahore), Remote &amp; Hybrid
              </span>
            </div>

            <h1 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e] tracking-tight leading-[1.15]">
              Data-Informed Digital Marketing &amp; Brand Scaling
            </h1>

            <p className="text-[16px] sm:text-[18px] text-[#5b4041] leading-relaxed">
              Formulating and executing high-ROI paid acquisition campaigns, social media management, persuasive copywriting, and conversion funnels that transform clicks into loyal customers.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-full bg-[#dc2c4f] text-white font-label-md text-[13px] font-bold shadow-[0_4px_18px_rgba(220,44,79,0.3)] hover:bg-[#b90538] transition-all cursor-pointer flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                <span>Hire as Digital Marketing Expert</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('web-development')}
                className="px-6 py-3 rounded-full bg-white text-[#131b2e] font-label-md text-[13px] font-bold border border-[#dae2fd] shadow-xs hover:bg-[#eaedff] transition-all cursor-pointer flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px] text-[#4648d4]">code</span>
                <span>Explore Web Development</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-6 border-t border-[#dae2fd]/60">
            <div className="p-4 rounded-2xl bg-white shadow-xs border border-[#dae2fd]/70">
              <span className="text-xl sm:text-2xl font-black text-[#b90538]">Dubi Homes</span>
              <p className="text-[12px] text-[#5b4041] font-semibold mt-0.5">E-Commerce Growth Expert</p>
            </div>
            <div className="p-4 rounded-2xl bg-white shadow-xs border border-[#dae2fd]/70">
              <span className="text-xl sm:text-2xl font-black text-[#4648d4]">Jasper &amp; AI Copy</span>
              <p className="text-[12px] text-[#5b4041] font-semibold mt-0.5">Copy.ai, Writesonic &amp; Prompts</p>
            </div>
            <div className="p-4 rounded-2xl bg-white shadow-xs border border-[#dae2fd]/70">
              <span className="text-xl sm:text-2xl font-black text-[#006947]">Surfer SEO &amp; GSC</span>
              <p className="text-[12px] text-[#5b4041] font-semibold mt-0.5">NLP Scoring &amp; Search Visibility</p>
            </div>
            <div className="p-4 rounded-2xl bg-white shadow-xs border border-[#dae2fd]/70">
              <span className="text-xl sm:text-2xl font-black text-[#131b2e]">Meta &amp; Google Ads</span>
              <p className="text-[12px] text-[#5b4041] font-semibold mt-0.5">ROAS &amp; A/B Testing Funnels</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRACTICAL WORK EXPERIENCE IN DIGITAL MARKETING */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-14">
        <div className="mb-8">
          <span className="font-label-sm text-[12px] text-[#b90538] font-bold uppercase tracking-wider">
            Hands-On Industry Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] tracking-tight mt-1">
            Digital Marketing Work Experience
          </h2>
          <p className="text-[14px] sm:text-[15px] text-[#5b4041] mt-1 max-w-2xl">
            Real-world brand growth for Dubi Homes, driving e-commerce conversions, running Meta &amp; Google ads, creating content, and handling official channels.
          </p>
        </div>

        {/* Dubi Homes Experience Card */}
        <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#dae2fd]/80 shadow-[0_6px_28px_rgba(185,5,56,0.05)] hover:shadow-lg transition-all flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#dae2fd]/60">
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h3 className="text-2xl font-extrabold text-[#131b2e]">
                  {marketingExperience.role}
                </h3>
                <span className="px-3 py-1 rounded-full bg-[#ffdadb] text-[#b90538] text-[11px] font-bold">
                  {marketingExperience.badge}
                </span>
              </div>
              <div className="flex items-center gap-3 text-[14px] text-[#5b4041] mt-1.5 flex-wrap">
                <a
                  href="https://dubihomes.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#131b2e] hover:text-[#b90538] flex items-center gap-1.5 underline underline-offset-2 decoration-[#dae2fd]"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#b90538]">shopping_bag</span>
                  <span>{marketingExperience.company}</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">public</span>
                  <span>{marketingExperience.location}</span>
                </span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2f3ff] text-[#131b2e] font-mono text-[12px] font-semibold w-fit self-start sm:self-auto">
              <span className="material-symbols-outlined text-[14px] text-[#4648d4]">calendar_today</span>
              {marketingExperience.period}
            </span>
          </div>

          <p className="text-[15px] text-[#5b4041] leading-relaxed bg-[#faf8ff] p-4 rounded-2xl border border-[#dae2fd]/50">
            {marketingExperience.summary}
          </p>

          {/* Live External Links for Dubi Homes */}
          <div className="flex items-center gap-2 flex-wrap p-4 rounded-2xl bg-[#f2f3ff]/70 border border-[#dae2fd]">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#131b2e] mr-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-[#b90538]">link</span>
              Live Store &amp; Social Channels:
            </span>
            {marketingExperience.links?.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#131b2e] text-[12px] font-bold border border-[#dae2fd] hover:border-[#b90538] hover:text-[#b90538] transition-all shadow-xs"
              >
                <span className="material-symbols-outlined text-[14px] text-[#dc2c4f]">
                  {link.icon || 'link'}
                </span>
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-[12px] opacity-70">open_in_new</span>
              </a>
            ))}
          </div>

          <div>
            <h4 className="font-label-sm text-[12px] font-bold text-[#131b2e] uppercase tracking-wider mb-3">
              Key Responsibilities &amp; Campaign Deliverables:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {marketingExperience.achievements.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#dae2fd]/60">
                  <span className="material-symbols-outlined text-[16px] text-[#b90538] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span className="text-[13px] text-[#5b4041] leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#dae2fd]/50 flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-bold text-[#131b2e] uppercase tracking-wider mr-2">
              Skills Applied:
            </span>
            {marketingExperience.technologies.map((tech) => (
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

      {/* 3. DEDICATED TOOLS I HAVE USED SO FAR SECTION */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-14 border-t border-[#dae2fd]/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2f3ff] border border-[#dae2fd] text-[#4648d4] font-bold text-[12px] uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[15px]">construction</span>
              <span>Marketing Tech Stack &amp; Software</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] tracking-tight">
              Tools I Have Used So Far
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#5b4041] mt-1 max-w-2xl">
              Practical, hands-on tool experience spanning AI copywriting generators (Jasper AI, Copy.ai, Writesonic), SERP content intelligence (Surfer SEO, SEMrush), advertising platforms, and conversion analytics.
            </p>
          </div>

          {/* Tool Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#f2f3ff] rounded-full border border-[#dae2fd]/60 self-start md:self-auto flex-wrap">
            <button
              onClick={() => setActiveToolTab('all')}
              className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeToolTab === 'all' ? 'bg-[#131b2e] text-white font-bold' : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              All Tools ({marketingTools.length})
            </button>
            <button
              onClick={() => setActiveToolTab('ai')}
              className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeToolTab === 'ai' ? 'bg-[#131b2e] text-white font-bold' : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              AI Copywriting ({marketingTools.filter((t) => t.category === 'ai').length})
            </button>
            <button
              onClick={() => setActiveToolTab('seo')}
              className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeToolTab === 'seo' ? 'bg-[#131b2e] text-white font-bold' : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              SEO &amp; Search ({marketingTools.filter((t) => t.category === 'seo').length})
            </button>
            <button
              onClick={() => setActiveToolTab('paid')}
              className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeToolTab === 'paid' ? 'bg-[#131b2e] text-white font-bold' : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              Paid Media ({marketingTools.filter((t) => t.category === 'paid').length})
            </button>
            <button
              onClick={() => setActiveToolTab('analytics')}
              className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeToolTab === 'analytics' ? 'bg-[#131b2e] text-white font-bold' : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              Analytics &amp; CRO ({marketingTools.filter((t) => t.category === 'analytics').length})
            </button>
            <button
              onClick={() => setActiveToolTab('creative')}
              className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeToolTab === 'creative' ? 'bg-[#131b2e] text-white font-bold' : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              Creative &amp; Email ({marketingTools.filter((t) => t.category === 'creative').length})
            </button>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              className="p-6 rounded-2xl bg-white border border-[#dae2fd]/80 hover:border-[#b90538]/40 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#f2f3ff] to-[#e1e0ff] border border-[#dae2fd] flex items-center justify-center text-[#4648d4] group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-[24px]">
                        {tool.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[17px] text-[#131b2e] leading-snug">
                        {tool.name}
                      </h3>
                      <span className="text-[11px] font-semibold text-[#5b4041]">
                        {tool.categoryLabel}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-[#ffdadb] text-[#b90538] text-[10px] font-extrabold uppercase tracking-wide shrink-0">
                    {tool.badge}
                  </span>
                </div>

                <div className="text-[11px] font-bold text-[#4648d4] uppercase tracking-wider mb-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">verified</span>
                  <span>{tool.role}</span>
                </div>

                <p className="text-[13px] text-[#5b4041] leading-relaxed mb-4 bg-[#faf8ff] p-3 rounded-xl border border-[#dae2fd]/50">
                  {tool.useCase}
                </p>
              </div>

              <div className="pt-3 border-t border-[#dae2fd]/50">
                <span className="text-[10px] font-bold text-[#131b2e] uppercase tracking-wider block mb-1.5">
                  Core Capabilities &amp; Workflows:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {tool.features.map((feat) => (
                    <span
                      key={feat}
                      className="px-2 py-0.5 rounded-md bg-[#f2f3ff] text-[#131b2e] text-[10px] font-medium border border-[#dae2fd]"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DOMAIN SKILLS DETAILS FOR DIGITAL MARKETING */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-14 border-t border-[#dae2fd]/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-label-sm text-[12px] text-[#b90538] font-bold uppercase tracking-wider">
              Marketing Capabilities &amp; Methodologies
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] tracking-tight mt-1">
              Digital Marketing Skills &amp; Deliverables
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#5b4041] mt-1 max-w-2xl">
              Specialized expertise in A/B testing, search engine optimization (SEO), conversion rate optimization (CRO), AI-assisted copywriting, and paid acquisition.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#f2f3ff] rounded-full border border-[#dae2fd]/60 self-start md:self-auto flex-wrap">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeCategory === 'all' ? 'bg-[#131b2e] text-white font-bold' : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              All Skills ({marketingSkills.length})
            </button>
            <button
              onClick={() => setActiveCategory('cro')}
              className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeCategory === 'cro' ? 'bg-[#131b2e] text-white font-bold' : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              A/B Testing &amp; CRO
            </button>
            <button
              onClick={() => setActiveCategory('seo')}
              className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeCategory === 'seo' ? 'bg-[#131b2e] text-white font-bold' : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              SEO &amp; Analytics
            </button>
            <button
              onClick={() => setActiveCategory('copy')}
              className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeCategory === 'copy' ? 'bg-[#131b2e] text-white font-bold' : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              Copywriting &amp; AI
            </button>
            <button
              onClick={() => setActiveCategory('paid')}
              className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeCategory === 'paid' ? 'bg-[#131b2e] text-white font-bold' : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              Paid Ads (Meta &amp; Google)
            </button>
            <button
              onClick={() => setActiveCategory('social')}
              className={`px-3 py-1 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                activeCategory === 'social' ? 'bg-[#131b2e] text-white font-bold' : 'text-[#5b4041] hover:text-[#131b2e]'
              }`}
            >
              Social &amp; Content
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-white border border-[#dae2fd]/80 hover:border-[#b90538]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-[#ffdadb] text-[10px] font-extrabold text-[#b90538] uppercase">
                    {skill.badge}
                  </span>
                  <span className="text-[11px] font-mono text-[#5b4041]">{skill.experience}</span>
                </div>

                <h3 className="font-bold text-[15px] text-[#131b2e] mb-2">{skill.name}</h3>

                {/* Progress bar */}
                <div className="w-full bg-[#dae2fd]/50 h-1.5 rounded-full overflow-hidden mb-3">
                  <div
                    className="bg-gradient-to-r from-[#dc2c4f] to-[#4648d4] h-full rounded-full"
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

      {/* 4. DIGITAL MARKETING PROJECTS & CAMPAIGN CASE STUDIES */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-14 border-t border-[#dae2fd]/60">
        <div className="mb-10">
          <span className="font-label-sm text-[12px] text-[#4648d4] font-bold uppercase tracking-wider">
            Campaign Highlights &amp; Case Studies
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] tracking-tight mt-1">
            Featured Marketing Projects &amp; Funnel Optimization
          </h2>
          <p className="text-[14px] sm:text-[15px] text-[#5b4041] mt-1 max-w-2xl">
            Real campaign executions driving measurable traffic, higher average order value, and improved ROAS.
          </p>
        </div>

        {/* Project 1: Dubi Homes Full-Funnel Growth */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#dae2fd]/80 shadow-[0_4px_24px_rgba(70,72,212,0.04)] mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 mb-6 border-b border-[#dae2fd]/60">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#ffdadb] text-[#b90538] text-[11px] font-extrabold uppercase">
                  Flagship Growth Project
                </span>
                <span className="text-[13px] text-[#5b4041] font-mono">E-Commerce Retailing</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#131b2e]">
                Dubi Homes — Multi-Channel Digital Acquisition
              </h3>
              <p className="text-[14px] text-[#5b4041] mt-1">
                Storefront: <a href="https://dubihomes.store" target="_blank" rel="noopener noreferrer" className="text-[#b90538] font-bold underline">dubihomes.store</a>
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <a
                href="https://dubihomes.store"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#131b2e] text-white text-[12px] font-bold hover:bg-[#b90538] transition-all flex items-center gap-1.5 shadow-xs"
              >
                <span>Visit Store</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
              <a
                href="https://www.facebook.com/people/Dubi-Homes/61583503002441/?rdid=qpGIBfrp5dJQlmJa&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17Z8t4r9Ad%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#f2f3ff] text-[#131b2e] text-[12px] font-bold hover:bg-[#e1e0ff] transition-all flex items-center gap-1.5 border border-[#dae2fd]"
              >
                <span>Facebook</span>
                <span className="material-symbols-outlined text-[14px]">share</span>
              </a>
              <a
                href="https://www.instagram.com/dubi_homes?igsh=MTFzYng3bjduZGRrdQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#f2f3ff] text-[#131b2e] text-[12px] font-bold hover:bg-[#e1e0ff] transition-all flex items-center gap-1.5 border border-[#dae2fd]"
              >
                <span>Instagram</span>
                <span className="material-symbols-outlined text-[14px]">photo_camera</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="p-4 rounded-2xl bg-[#faf8ff] border border-[#dae2fd]/60">
              <div className="flex items-center gap-2 text-[#b90538] font-bold text-[14px] mb-1">
                <span className="material-symbols-outlined text-[18px]">ads_click</span>
                <span>Paid Ads Strategy</span>
              </div>
              <p className="text-[13px] text-[#5b4041] leading-relaxed">
                Deployed granular interest-based &amp; lookalike Meta Ad campaigns paired with Google intent keywords to direct qualified shoppers into product checkout pages.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#faf8ff] border border-[#dae2fd]/60">
              <div className="flex items-center gap-2 text-[#4648d4] font-bold text-[14px] mb-1">
                <span className="material-symbols-outlined text-[18px]">edit_note</span>
                <span>Copywriting &amp; Creative</span>
              </div>
              <p className="text-[13px] text-[#5b4041] leading-relaxed">
                Wrote benefit-focused product copy, engaging social captions, and urgent promotional CTAs that elevated click-through rates across social touchpoints.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#faf8ff] border border-[#dae2fd]/60">
              <div className="flex items-center gap-2 text-[#006947] font-bold text-[14px] mb-1">
                <span className="material-symbols-outlined text-[18px]">query_stats</span>
                <span>Funnel Diagnostics</span>
              </div>
              <p className="text-[13px] text-[#5b4041] leading-relaxed">
                Audited the e-commerce storefront layout, streamlined product presentation, and eliminated checkout friction to improve conversion rates.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#dae2fd]/50">
            <span className="text-[11px] font-bold text-[#131b2e] uppercase mr-1">Skills:</span>
            {['Meta Ads', 'Google Ads', 'Meta Handling', 'Content Creation', 'Copywriting', 'E-Commerce Growth'].map((tag) => (
              <span key={tag} className="px-2.5 py-0.5 rounded-full bg-[#f2f3ff] text-[#131b2e] text-[11px] font-medium border border-[#dae2fd]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project 2: Interactive Funnel Calculator */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#dae2fd]/80 shadow-[0_4px_24px_rgba(70,72,212,0.04)]">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-[#e1e0ff] text-[#4648d4] text-[11px] font-extrabold uppercase">
              Interactive Tool
            </span>
            <span className="text-[13px] text-[#5b4041] font-mono">CRO &amp; ROI Modeling</span>
          </div>
          <h3 className="text-2xl font-extrabold text-[#131b2e] mb-1">
            Conversion Rate &amp; Revenue Lift Simulator
          </h3>
          <p className="text-[14px] text-[#5b4041] mb-6 max-w-2xl">
            Simulate the bottom-line financial impact of improving your marketing conversion rate and optimizing paid traffic.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="flex justify-between text-[13px] font-bold text-[#131b2e] mb-1">
                  <span>Monthly Store Visitors</span>
                  <span className="font-mono text-[#b90538]">{monthlyVisitors.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="200000"
                  step="5000"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  className="w-full accent-[#b90538] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[13px] font-bold text-[#131b2e] mb-1">
                  <span>Current Conversion Rate (CR)</span>
                  <span className="font-mono text-[#4648d4]">{currentCr.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="6.0"
                  step="0.1"
                  value={currentCr}
                  onChange={(e) => setCurrentCr(Number(e.target.value))}
                  className="w-full accent-[#4648d4] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[13px] font-bold text-[#131b2e] mb-1">
                  <span>Average Order Value (AOV)</span>
                  <span className="font-mono text-[#006947]">${aov}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="300"
                  step="5"
                  value={aov}
                  onChange={(e) => setAov(Number(e.target.value))}
                  className="w-full accent-[#006947] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[13px] font-bold text-[#131b2e] mb-1">
                  <span>Targeted Conversion Rate Lift</span>
                  <span className="font-mono text-[#dc2c4f]">+{liftPct}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="80"
                  step="5"
                  value={liftPct}
                  onChange={(e) => setLiftPct(Number(e.target.value))}
                  className="w-full accent-[#dc2c4f] cursor-pointer"
                />
              </div>
            </div>

            {/* Calculated Results Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-[#131b2e] to-[#283044] text-white flex flex-col justify-between shadow-md">
              <span className="font-label-sm text-[11px] text-[#6ffbbe] uppercase tracking-wider font-bold">
                Projected Revenue Upside
              </span>

              <div className="my-4">
                <span className="text-[12px] text-white/70">Estimated Monthly Additional Revenue:</span>
                <div className="text-3xl font-black text-[#6ffbbe] font-mono mt-0.5">
                  +${calculation.monthlyUpside.toLocaleString()}
                </div>
                <div className="text-[12px] text-white/80 mt-1">
                  Annualized Growth: <strong className="text-white">+${calculation.annualUpside.toLocaleString()}</strong>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 space-y-1.5 text-[12px] text-white/80">
                <div className="flex justify-between">
                  <span>New Optimized CR:</span>
                  <span className="font-bold text-white font-mono">{calculation.newCrFormatted}%</span>
                </div>
                <div className="flex justify-between">
                  <span>New Monthly Orders:</span>
                  <span className="font-bold text-white font-mono">{calculation.newOrders.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 pt-6 pb-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#131b2e] via-[#283044] to-[#131b2e] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 max-w-xl text-center md:text-left">
            <span className="font-label-sm text-[11px] text-[#ffdadb] uppercase tracking-widest font-bold">
              Scale Your Brand
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to accelerate your digital growth?
            </h3>
            <p className="text-[14px] text-white/80">
              Let&apos;s run high-converting Meta &amp; Google ad campaigns, optimize your e-commerce conversion funnel, and write compelling copy.
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
