import React from 'react';
import { ServiceCard } from '../molecules/ServiceCard';
import { SectionEyebrow, SectionTitle } from '../atoms/Typography';
import { Service, Language } from '../../types';
import { TRANSLATIONS } from '../../i18n/translations';

export interface ServicesSectionProps {
  services: Service[];
  lang: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services, lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <SectionEyebrow>{t.whatWeDoEyebrow}</SectionEyebrow>
          <SectionTitle>{t.whatWeDoTitle}</SectionTitle>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={service.id} service={service} lang={lang} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};
