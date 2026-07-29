import React from 'react';
import { motion } from 'motion/react';
import { Service, Language } from '../../types';
import { IconWrapper } from '../atoms/IconWrapper';

export interface ServiceCardProps {
  service: Service;
  lang: Language;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, lang, index }) => {
  const iconVariants: Record<string, 'blue' | 'purple' | 'cyan' | 'green' | 'orange' | 'pink'> = {
    'custom-web': 'blue',
    'mobile-app': 'purple',
    'saas-product': 'cyan',
    'api-integration': 'green',
    'maintenance-support': 'orange',
    'system-modernization': 'pink'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        <div className="mb-4 flex items-center justify-between">
          <IconWrapper
            name={service.icon}
            colorVariant={iconVariants[service.id] || 'blue'}
            size={24}
          />
          <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            {service.category}
          </span>
        </div>
        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {service.title[lang] || service.title['en']}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {service.description[lang] || service.description['en']}
        </p>
      </div>
    </motion.div>
  );
};
