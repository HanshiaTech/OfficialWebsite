import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { NavMenu } from '../molecules/NavMenu';
import { ThemeToggle } from '../atoms/ThemeToggle';
import { LanguageSwitcher } from '../atoms/LanguageSwitcher';
import { Button } from '../atoms/Button';
import { Logo } from '../atoms/Logo';
import { Language } from '../../types';
import { TRANSLATIONS } from '../../i18n/translations';

export interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  lang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenContact: () => void;
  onOpenDevDocs?: () => void;
  onOpenFigma?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  isDark,
  onToggleTheme,
  lang,
  onSelectLang,
  onOpenContact
}) => {
  const t = TRANSLATIONS[lang];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Logo onClick={() => onNavigate('hero')} size="md" />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <NavMenu activeSection={activeSection} onNavigate={onNavigate} lang={lang} />
        </div>

        {/* Controls & CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <LanguageSwitcher currentLang={lang} onSelectLang={onSelectLang} />

          {/* Let's Talk CTA */}
          <Button onClick={onOpenContact} size="sm" variant="primary" className="whitespace-nowrap font-medium text-xs sm:text-sm px-4 py-2">
            <span>{t.letsTalk}</span>
            <ArrowRight size={14} />
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <NavMenu
            activeSection={activeSection}
            onNavigate={(id) => {
              onNavigate(id);
              setIsMobileMenuOpen(false);
            }}
            lang={lang}
            className="flex-col items-start gap-1"
          />
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <LanguageSwitcher currentLang={lang} onSelectLang={onSelectLang} />
            <div className="flex items-center gap-2">
              <Button onClick={onOpenContact} size="sm" variant="primary">
                {t.letsTalk}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
