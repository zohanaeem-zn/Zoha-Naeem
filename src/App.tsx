import { useState, useEffect } from 'react';
import { PageId, Project } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { AboutPage } from './pages/AboutPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { WebDevelopmentPage } from './pages/WebDevelopmentPage';
import { DigitalMarketingPage } from './pages/DigitalMarketingPage';
import { SkillsPage } from './pages/SkillsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('about');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sync with URL hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['about', 'web-development', 'digital-marketing', 'experience', 'projects', 'skills'].includes(hash)) {
        setCurrentPage(hash);
      } else if (hash === 'contact') {
        setTimeout(() => {
          document.getElementById('contact-credentials')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (hash === 'resume') {
        setIsResumeOpen(true);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page: PageId) => {
    if (page === 'resume') {
      setIsResumeOpen(true);
      return;
    }
    if (page === 'contact') {
      const footerCreds = document.getElementById('contact-credentials');
      if (footerCreds) {
        footerCreds.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
      return;
    }
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    const footerCreds = document.getElementById('contact-credentials');
    if (footerCreds) {
      footerCreds.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8ff] text-[#131b2e] font-sans antialiased selection:bg-[#ffdadb] selection:text-[#40000d]">
      {/* Fixed Sticky Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full flex-grow pt-20">
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenResume={() => setIsResumeOpen(true)}
            onSelectProject={(p) => setSelectedProject(p)}
          />
        )}

        {currentPage === 'web-development' && (
          <WebDevelopmentPage
            onNavigate={navigateTo}
            onOpenResume={() => setIsResumeOpen(true)}
            onSelectProject={(p) => setSelectedProject(p)}
          />
        )}

        {currentPage === 'digital-marketing' && (
          <DigitalMarketingPage
            onNavigate={navigateTo}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {currentPage === 'experience' && (
          <ExperiencePage
            onNavigate={navigateTo}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={navigateTo}
            onOpenResume={() => setIsResumeOpen(true)}
            onSelectProject={(p) => setSelectedProject(p)}
          />
        )}

        {currentPage === 'skills' && (
          <SkillsPage
            onNavigate={navigateTo}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}
      </main>

      {/* Global Footer with Credentials */}
      <Footer onNavigate={navigateTo} />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onNavigateToContact={() => {
          setIsResumeOpen(false);
          setTimeout(handleScrollToContact, 150);
        }}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigateToContact={() => {
          setSelectedProject(null);
          setTimeout(handleScrollToContact, 150);
        }}
      />
    </div>
  );
}
