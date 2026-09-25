import React, { useState } from 'react';
import { PageId } from '../types';
import { ASSETS, PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'digital-marketing', label: 'Digital Marketing' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  const handleNav = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#faf8ff]/85 backdrop-blur-xl border-b border-[#e2e7ff]/60 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNav('about')}
            className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-2 ring-[#b90538]/20 shadow-sm group-hover:scale-105 group-hover:ring-[#b90538]/40 transition-all shrink-0 bg-[#131b2e]">
              <img
                src="/zoha_profile.jpg"
                alt="Zoha Naeem"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-[19px] font-bold text-[#131b2e] tracking-tight leading-none group-hover:text-[#b90538] transition-colors">
                Zoha Naeem
              </span>
              <span className="font-label-sm text-[11px] text-[#5b4041] tracking-wider uppercase mt-0.5">
                BS CS · Roll of Honor
              </span>
            </div>
          </button>
        </div>

        {/* Center: Desktop Navigation Bar */}
        <nav className="hidden lg:flex items-center p-1 bg-[#f2f3ff]/95 rounded-full border border-[#dae2fd]/50 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`px-3.5 py-1.5 transition-all text-[13px] font-semibold rounded-full cursor-pointer focus:outline-none ${
                  isActive
                    ? 'bg-[#e2e7ff] text-[#131b2e] shadow-[0_2px_12px_rgba(70,72,212,0.12)] font-bold'
                    : 'text-[#5b4041] hover:text-[#131b2e] hover:bg-white/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Social, Resume & Let's Connect */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick social & communication links */}
          <div className="hidden sm:flex items-center gap-1.5">
            <a
              aria-label="GitHub Profile"
              target="_blank"
              rel="noreferrer"
              href={PERSONAL_INFO.github}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f2f3ff] text-[#131b2e] hover:bg-[#131b2e] hover:text-white hover:scale-105 transition-all shadow-xs"
              title="GitHub Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noreferrer"
              href={PERSONAL_INFO.linkedin}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f2f3ff] text-[#0077b5] hover:bg-[#0077b5] hover:text-white hover:scale-105 transition-all shadow-xs"
              title="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a
              aria-label="WhatsApp Chat"
              target="_blank"
              rel="noreferrer"
              href={PERSONAL_INFO.whatsappUrl}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f2f3ff] text-[#25D366] hover:bg-[#25D366] hover:text-white hover:scale-105 transition-all shadow-xs"
              title={`Chat on WhatsApp (${PERSONAL_INFO.phone})`}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.09-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.09-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.17 1.74 2.65 4.2 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
              </svg>
            </a>
            <a
              aria-label="Send Email via Gmail"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f2f3ff] text-[#EA4335] hover:bg-[#EA4335] hover:text-white hover:scale-105 transition-all shadow-xs"
              title={`Send Email (${PERSONAL_INFO.email})`}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>

          {/* Resume CTA */}
          <button
            onClick={onOpenResume}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#dc2c4f] text-[#fffbff] font-label-md text-[13px] font-semibold shadow-[0_4px_16px_rgba(220,44,79,0.25)] hover:bg-[#b90538] hover:shadow-[0_6px_20px_rgba(220,44,79,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">description</span>
            <span>Resume / CV</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#131b2e] hover:bg-[#eaedff] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf8ff] border-b border-[#dae2fd] px-6 py-4 shadow-xl animate-fadeIn">
          {/* Mobile Profile Preview */}
          <div className="flex items-center gap-3 pb-3 mb-2 border-b border-[#dae2fd]/60">
            <img
              src="/zoha_profile.jpg"
              alt="Zoha Naeem"
              className="w-11 h-11 rounded-xl object-cover object-top ring-2 ring-[#dc2c4f]/30 shadow-sm"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-bold text-[#131b2e] text-[15px]">Zoha Naeem</span>
              <span className="text-[11px] text-[#5b4041]">BS CS · Roll of Honor</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-[14px] font-semibold transition-all ${
                  currentPage === item.id
                    ? 'bg-[#e2e7ff] text-[#131b2e] font-bold'
                    : 'text-[#5b4041] hover:bg-[#eaedff]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="h-px bg-[#dae2fd]/60 my-2" />
            <div className="flex items-center justify-between pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center gap-2 text-[13px] font-semibold text-[#b90538] hover:underline"
              >
                <span className="material-symbols-outlined text-[18px]">description</span>
                View Full Resume / CV
              </button>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#131b2e] p-1.5 hover:text-[#b90538] transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0077b5] p-1.5 hover:text-[#005582] transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#25D366] p-1.5 hover:text-[#1ebe5d] transition-colors"
                  aria-label="WhatsApp Chat"
                  title="WhatsApp Chat"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.09-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.09-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.17 1.74 2.65 4.2 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
                  </svg>
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-[#EA4335] p-1.5 hover:text-[#d33426] transition-colors"
                  aria-label="Gmail"
                  title="Gmail"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
