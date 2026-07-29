import React from 'react';
import { motion } from 'motion/react';
import { Rocket, ArrowRight } from 'lucide-react';
import { Button } from '../atoms/Button';
import { Language } from '../../types';
import { TRANSLATIONS } from '../../i18n/translations';

export interface CtaSectionProps {
  lang: Language;
  onOpenContact: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ lang, onOpenContact }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="contact" className="py-12 md:py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-100/70 dark:from-slate-800 dark:via-blue-950/40 dark:to-slate-800 border border-blue-200/60 dark:border-slate-700/80 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-blue-500/5"
        >
          {/* Left Icon + Text */}
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-slate-700 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 shadow-md">
              <Rocket size={32} className="animate-bounce" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {t.ctaHeading}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1 font-medium">
                {t.ctaSubtext}
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0">
            <Button size="lg" variant="primary" onClick={onOpenContact}>
              <span>{t.letsTalk}</span>
              <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
