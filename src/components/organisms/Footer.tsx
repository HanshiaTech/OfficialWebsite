import React from 'react';
import { Mail, MapPin, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { Logo } from '../atoms/Logo';
import { Language } from '../../types';
import { TRANSLATIONS } from '../../i18n/translations';
import { SITE_CONFIG } from '../../config/site';

export interface FooterProps {
  lang: Language;
  onNavigate: (sectionId: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate, onOpenLegal }) => {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo onClick={() => onNavigate('hero')} size="md" />

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              {t.footerTagline}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={SITE_CONFIG.telegramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Telegram @hanshiatech"
                className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 dark:hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </a>
              <a 
                href={SITE_CONFIG.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn Hanshia Tech"
                className="w-8 h-8 rounded-lg bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href={SITE_CONFIG.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub Hanshia Tech"
                className="w-8 h-8 rounded-lg bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors"
              >
                <Github size={16} />
              </a>
              <a 
                href={SITE_CONFIG.socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                title="X / Twitter Hanshia Tech"
                className="w-8 h-8 rounded-lg bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a 
                href={SITE_CONFIG.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                title="Instagram Hanshia Tech"
                className="w-8 h-8 rounded-lg bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Column 1: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {t.companyHeader}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li><button onClick={() => onNavigate('about')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">{t.aboutUs}</button></li>
              <li><button onClick={() => onNavigate('why-us')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">{t.process}</button></li>
              <li><button onClick={() => onNavigate('team')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">{t.ourTeam || t.careers}</button></li>
              <li><button onClick={() => onNavigate('portfolio')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">{t.ourWork || t.blog}</button></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {t.servicesHeader}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li><button onClick={() => onNavigate('services')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">{t.webDev}</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">{t.mobileDev}</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">{t.saasDev}</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">{t.maintenance}</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">{t.apiIntegration}</button></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              {t.contactHeader}
            </h4>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-sky-500 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
                <a
                  href={SITE_CONFIG.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-500 transition-colors flex items-center gap-1 font-medium text-sky-600 dark:text-sky-400"
                  title="Chat di Telegram"
                >
                  <span>Telegram: {SITE_CONFIG.telegramUsername}</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-blue-500 shrink-0" />
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SITE_CONFIG.contactEmail)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                  title="Buka di Gmail Web"
                >
                  <span>{SITE_CONFIG.contactEmail}</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-blue-500 shrink-0" />
                <span>{t.address}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{t.copyright}</p>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex gap-4">
              <button 
                onClick={(e) => { e.preventDefault(); onOpenLegal?.('privacy'); }} 
                className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={(e) => { e.preventDefault(); onOpenLegal?.('terms'); }} 
                className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
