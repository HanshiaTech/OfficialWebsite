import React, { useState, useEffect } from 'react';
import { Navbar } from '../organisms/Navbar';
import { HeroSection } from '../organisms/HeroSection';
import { WhyUsSection } from '../organisms/WhyUsSection';
import { ServicesSection } from '../organisms/ServicesSection';
import { FeaturedProjectsSection } from '../organisms/FeaturedProjectsSection';
import { AboutSection } from '../organisms/AboutSection';
import { CtaSection } from '../organisms/CtaSection';
import { Footer } from '../organisms/Footer';
import { ContactModal } from '../organisms/ContactModal';
import { CaseStudyModal } from '../organisms/CaseStudyModal';
import { DeveloperDocsModal } from '../organisms/DeveloperDocsModal';
import { FigmaInspectorModal } from '../organisms/FigmaInspectorModal';
import { LegalModal } from '../organisms/LegalModal';
import { ScrollToTopButton } from '../atoms/ScrollToTopButton';
import { Service, WhyUsItem, Project, StatItem, Language } from '../../types';
import { ShieldAlert } from 'lucide-react';
import { TRANSLATIONS } from '../../i18n/translations';

export interface LandingPageTemplateProps {
  services: Service[];
  whyUs: WhyUsItem[];
  projects: Project[];
  stats: StatItem[];
  isLoading: boolean;
}

export const LandingPageTemplate: React.FC<LandingPageTemplateProps> = ({
  services,
  whyUs,
  projects,
  stats,
  isLoading
}) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') return true;
      if (savedTheme === 'light') return false;
    }
    const currentHour = new Date().getHours();
    return currentHour >= 19 || currentHour < 6;
  });
  const [lang, setLang] = useState<Language>('id');
  const [showToast, setShowToast] = useState(false);

  // Modals state
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [isDevDocsOpen, setIsDevDocsOpen] = useState(false);
  const [isFigmaOpen, setIsFigmaOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'privacy' | 'terms'>('terms');

  // Sync theme with DOM and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'IMG' || target.closest('img') || target.classList.contains('protected-img'))) {
        e.preventDefault();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
      }
    };

    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'IMG' || target.closest('img'))) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'contact') {
      setIsContactOpen(true);
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors ${isDark ? 'dark' : ''}`}>
      
      {/* Top Sticky Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        lang={lang}
        onSelectLang={setLang}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <HeroSection
          stats={stats}
          lang={lang}
          onOpenContact={() => setIsContactOpen(true)}
          onNavigate={handleNavigate}
        />

        <WhyUsSection
          items={whyUs}
          lang={lang}
        />

        <ServicesSection
          services={services}
          lang={lang}
        />

        <FeaturedProjectsSection
          projects={projects}
          lang={lang}
          onOpenCaseStudy={setSelectedCaseStudy}
        />

        <AboutSection
          lang={lang}
        />

        <CtaSection
          lang={lang}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onNavigate={handleNavigate}
        onOpenLegal={(tab) => {
          setLegalTab(tab);
          setIsLegalOpen(true);
        }}
      />

      {/* Scroll to Top Floating Button */}
      <ScrollToTopButton lang={lang} />

      {/* Modals & Drawers */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        lang={lang}
      />

      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        lang={lang}
      />

      <DeveloperDocsModal
        isOpen={isDevDocsOpen}
        onClose={() => setIsDevDocsOpen(false)}
      />

      <FigmaInspectorModal
        isOpen={isFigmaOpen}
        onClose={() => setIsFigmaOpen(false)}
      />

      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
        defaultTab={legalTab}
        lang={lang}
      />

      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900/90 text-white px-4 py-3 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-fade-in backdrop-blur-md text-xs sm:text-sm font-medium">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
          <span>{TRANSLATIONS[lang]?.imageProtectionNotice || TRANSLATIONS.en.imageProtectionNotice}</span>
        </div>
      )}

    </div>
  );
};
