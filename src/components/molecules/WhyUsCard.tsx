import React from 'react';
import { motion } from 'motion/react';
import { WhyUsItem, Language } from '../../types';
import { IconWrapper } from '../atoms/IconWrapper';

export interface WhyUsCardProps {
  item: WhyUsItem;
  lang: Language;
  index: number;
}

export const WhyUsCard: React.FC<WhyUsCardProps> = ({ item, lang, index }) => {
  const iconVariants: Record<string, 'blue' | 'purple' | 'green' | 'orange' | 'pink'> = {
    'ai-assisted': 'blue',
    'modern-tech': 'purple',
    'scalable-reliable': 'green',
    'fast-efficient': 'orange',
    'long-term-partner': 'pink'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      viewport={{ once: true, amount: 0.01 }}
      whileHover={{ y: -4 }}
      className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        <div className="mb-4">
          <IconWrapper
            name={item.icon}
            colorVariant={iconVariants[item.id] || 'blue'}
            size={24}
          />
        </div>
        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {item.title[lang] || item.title['en']}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {item.description[lang] || item.description['en']}
        </p>
      </div>
    </motion.div>
  );
};
