import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../atoms/Button';
import { MultiPlatformShowcase } from '../molecules/MultiPlatformShowcase';
import { AIAssistantWidget } from '../molecules/AIAssistantWidget';
import { StatItem, Language } from '../../types';
import { TRANSLATIONS } from '../../i18n/translations';

export interface HeroSectionProps {
  stats: StatItem[];
  lang: Language;
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  stats: _stats,
  lang,
  onOpenContact: _onOpenContact,
  onNavigate
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="hero" className="relative py-12 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 transition-colors">
      
      {/* Background Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              <span className="text-blue-600 dark:text-blue-400 block">{t.heroTitlePrefix}</span>
              <span>{t.heroTitleSuffix}</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {t.heroSubtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button size="lg" variant="primary" onClick={() => onNavigate('services')}>
                <span>{t.ourServicesBtn}</span>
                <ArrowRight size={18} />
              </Button>

              <Button size="lg" variant="outline" onClick={() => onNavigate('portfolio')}>
                <span>{t.viewPortfolioBtn}</span>
              </Button>
            </div>
          </motion.div>

          {/* Right Hero Showcase Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-4 sm:p-6 shadow-2xl shadow-blue-500/10">
              
              {/* Multi-Platform AI Development Showcase (PC, Laptop, Web, Mobile, Tablet) */}
              <div>
                <MultiPlatformShowcase lang={lang} />
              </div>

              {/* AI Assistant Callout Box */}
              <div className="mt-4">
                <AIAssistantWidget lang={lang} />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
