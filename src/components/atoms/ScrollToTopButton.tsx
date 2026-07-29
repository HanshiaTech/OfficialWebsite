import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, ArrowUp } from 'lucide-react';
import { Language } from '../../types';
import { TRANSLATIONS } from '../../i18n/translations';

export interface ScrollToTopButtonProps {
  lang?: Language;
  threshold?: number;
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  lang = 'en',
  threshold = 250
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="scroll-to-top-btn"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={scrollToTop}
          aria-label={t.scrollToTop || 'Scroll to top'}
          title={t.scrollToTop || 'Scroll to top'}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-3.5 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 dark:shadow-blue-900/50 border border-blue-400/30 transition-all duration-200 cursor-pointer group active:scale-95 hover:pr-4"
        >
          <div className="p-0.5 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
            <ArrowUp size={16} className="text-white transform group-hover:-translate-y-0.5 transition-transform duration-200" />
          </div>
          <span className="text-xs font-bold tracking-wide uppercase">UP</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
