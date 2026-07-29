import React from 'react';
import { TRANSLATIONS } from '../../i18n/translations';
import { Language } from '../../types';

export interface NavMenuProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  lang: Language;
  className?: string;
}

export const NavMenu: React.FC<NavMenuProps> = ({
  activeSection,
  onNavigate,
  lang,
  className = ''
}) => {
  const t = TRANSLATIONS[lang];

  const items = [
    { id: 'hero', label: t.home },
    { id: 'services', label: t.services },
    { id: 'why-us', label: t.products },
    { id: 'portfolio', label: t.portfolio },
    { id: 'about', label: t.aboutUs },
    { id: 'contact', label: t.contact }
  ];

  return (
    <nav className={`flex items-center gap-1 xl:gap-4 lg:gap-2 ${className}`}>
      {items.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`relative px-2.5 py-1.5 lg:px-3 lg:py-2 text-xs lg:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer select-none ${
              isActive
                ? 'text-blue-600 dark:text-blue-400 font-semibold'
                : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            {item.label}
            {isActive && (
              <span className="absolute bottom-0 left-2.5 right-2.5 lg:left-3 lg:right-3 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-in fade-in zoom-in duration-200" />
            )}
          </button>
        );
      })}
    </nav>
  );
};
