import React from 'react';
import { WhyUsCard } from '../molecules/WhyUsCard';
import { SectionEyebrow, SectionTitle } from '../atoms/Typography';
import { WhyUsItem, Language } from '../../types';
import { TRANSLATIONS } from '../../i18n/translations';

export interface WhyUsSectionProps {
  items: WhyUsItem[];
  lang: Language;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ items, lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-slate-50/60 dark:bg-slate-950/60 border-y border-slate-200/60 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <SectionEyebrow>{t.whySectionEyebrow}</SectionEyebrow>
          <SectionTitle>{t.whySectionTitle}</SectionTitle>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, idx) => (
            <WhyUsCard key={item.id} item={item} lang={lang} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};
