import React from 'react';
import { StatItem, Language } from '../../types';

export interface StatCardProps {
  stat: StatItem;
  lang: Language;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ stat, lang, className = '' }) => {
  return (
    <div className={`p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between ${className}`}>
      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
        {stat.label[lang] || stat.label['en']}
      </span>
      <div className="flex items-baseline justify-between mt-1 gap-2">
        <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
          {stat.value}
        </span>
        <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded-full ${
          stat.isPositive
            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400'
            : 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400'
        }`}>
          {stat.change}
        </span>
      </div>
    </div>
  );
};
