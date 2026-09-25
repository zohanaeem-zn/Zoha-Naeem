import React, { useState } from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  return (
    <footer id="contact-credentials" className="w-full bg-[#f2f3ff] border-t border-[#dae2fd]/60 shadow-[0_1px_12px_rgba(0,0,0,0.02)] mt-16 scroll-mt-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        
        {/* Credentials & Direct Contact Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(70,72,212,0.06)] border border-[#dae2fd]/80 mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#dae2fd]/60">
            <div className="flex items-center gap-4">
              <img
                src="/zoha_pic.jpeg"
                alt="Zoha Naeem"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover object-[center_42%] ring-2 ring-[#dc2c4f]/30 shadow-md shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-headline-sm text-2xl sm:text-3xl font-bold text-[#131b2e] tracking-tight">
                    {PERSONAL_INFO.name}
                  </h3>
                  <span className="material-symbols-outlined text-[20px] text-[#006947]" title="Verified Graduate">
                    verified
                  </span>
                </div>
                <p className="font-label-sm text-[13px] sm:text-[14px] text-[#dc2c4f] font-semibold mt-0.5">
                  BS Computer Science (Roll of Honor, CGPA 3.78) · Technical Educator
                </p>
                <p className="font-body-sm text-[12px] sm:text-[13px] text-[#5b4041] mt-0.5">
                  Lahore, Pakistan · Available for On-Site Instruction &amp; Remote Technical Roles
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eaedff] text-[#131b2e] text-[12px] font-semibold border border-[#dae2fd]">
              <span className="material-symbols-outlined text-[17px] text-[#b90538]">school</span>
              <span>HEC Recognized GCWUS · 3rd Position</span>
            </div>
          </div>

          {/* Quick Contact & Credentials Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {/* Email Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#faf8ff] border border-[#dae2fd]/70 hover:border-[#b90538]/40 hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#ffdadb]/70 text-[#b90538] flex items-center justify-center shadow-xs">
                    <span className="material-symbols-outlined text-[22px]">mail</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[11px] font-bold text-[#4648d4] hover:text-[#2f2ebe] flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-[#dae2fd] shadow-xs cursor-pointer transition-colors"
                  >
                    <span className="material-symbols-outlined text-[13px]">
                      {copiedEmail ? 'check' : 'content_copy'}
                    </span>
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#5b4041]">Direct Email</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="block text-[13px] sm:text-[14px] font-bold text-[#131b2e] hover:text-[#b90538] transition-colors break-all mt-1"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#b90538] hover:underline"
              >
                <span>Compose Email</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>

            {/* Direct Call Phone Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#faf8ff] border border-[#dae2fd]/70 hover:border-[#006947]/40 hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#d5e8cf] text-[#006947] flex items-center justify-center shadow-xs">
                    <span className="material-symbols-outlined text-[22px]">phone_in_talk</span>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="text-[11px] font-bold text-[#006947] hover:text-[#005236] flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-[#dae2fd] shadow-xs cursor-pointer transition-colors"
                  >
                    <span className="material-symbols-outlined text-[13px]">
                      {copiedPhone ? 'check' : 'content_copy'}
                    </span>
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#5b4041]">Phone Call</span>
                <a
                  href={`tel:${PERSONAL_INFO.phoneRaw}`}
                  className="block text-[14px] sm:text-[15px] font-bold text-[#131b2e] hover:text-[#006947] transition-colors mt-1 font-mono"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phoneRaw}`}
                className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#006947] hover:underline"
              >
                <span>Call Directly</span>
                <span className="material-symbols-outlined text-[14px]">call</span>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#faf8ff] border border-[#dae2fd]/70 hover:border-[#25D366]/60 hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#dcf8c6] text-[#075e54] flex items-center justify-center shadow-xs">
                    <svg className="w-5 h-5 fill-[#25D366]" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.954-1.398A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-[#075e54] px-2 py-0.5 rounded-full bg-[#dcf8c6]">
                    Instant Chat
                  </span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#5b4041]">WhatsApp</span>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-[14px] sm:text-[15px] font-bold text-[#131b2e] hover:text-[#25D366] transition-colors mt-1 font-mono"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#075e54] hover:underline"
              >
                <span>Chat on WhatsApp</span>
                <span className="material-symbols-outlined text-[14px]">send</span>
              </a>
            </div>

            {/* LinkedIn & GitHub Double Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#faf8ff] border border-[#dae2fd]/70 hover:border-[#4648d4]/40 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#5b4041]">Professional Profiles</span>
                <div className="flex flex-col gap-2 mt-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2 rounded-xl bg-white border border-[#dae2fd] hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all group/li"
                  >
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 fill-[#0077b5] group-hover/li:fill-white shrink-0 transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                      <span className="text-[12px] font-bold">LinkedIn</span>
                    </div>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2 rounded-xl bg-white border border-[#dae2fd] hover:bg-[#131b2e] hover:text-white hover:border-[#131b2e] transition-all group/gh"
                  >
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 fill-[#131b2e] group-hover/gh:fill-white shrink-0 transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span className="text-[12px] font-bold">GitHub</span>
                    </div>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>
              </div>
              <span className="text-[11px] text-[#5b4041] mt-3">@zohanaeem-zn</span>
            </div>
          </div>
        </div>

        {/* Lower Footer Navigation & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-[#dae2fd]/60 text-[#5b4041]">
          {/* Quick Page Jump Links */}
          <div className="flex flex-wrap gap-4 sm:gap-6 font-label-md text-[13px]">
            <button onClick={() => onNavigate('about')} className="hover:text-[#b90538] transition-colors cursor-pointer">
              About
            </button>
            <button onClick={() => onNavigate('web-development')} className="hover:text-[#b90538] transition-colors cursor-pointer">
              Web Development
            </button>
            <button onClick={() => onNavigate('digital-marketing')} className="hover:text-[#b90538] transition-colors cursor-pointer">
              Digital Marketing
            </button>
            <button onClick={() => onNavigate('experience')} className="hover:text-[#b90538] transition-colors cursor-pointer">
              Experience
            </button>
            <button onClick={() => onNavigate('projects')} className="hover:text-[#b90538] transition-colors cursor-pointer">
              Projects
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-right">
            <p className="font-body-sm text-[13px]">
              © {new Date().getFullYear()} Zoha Naeem · Lahore, Pakistan
            </p>
            <span className="hidden sm:inline text-[#dae2fd]">|</span>
            <span className="text-[12px] font-mono text-[#5b4041]">
              CGPA 3.78/4.00 (Roll of Honor)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
