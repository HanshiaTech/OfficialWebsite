import React from 'react';
import { Sun, Moon } from 'lucide-react';

export interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle, className = '' }) => {
  return (
    <div
      onClick={onToggle}
      className={`relative inline-flex items-center p-1 rounded-full bg-slate-200/80 dark:bg-slate-800 cursor-pointer border border-slate-300/50 dark:border-slate-700 select-none transition-colors ${className}`}
    >
      <div
        className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
          !isDark
            ? 'bg-white text-slate-800 shadow-sm'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <Sun size={13} className={!isDark ? 'text-amber-500 fill-amber-500/20' : ''} />
        <span>Light</span>
      </div>
      <div
        className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
          isDark
            ? 'bg-slate-900 text-blue-300 shadow-sm'
            : 'text-slate-500 hover:text-slate-700'
        }`}
      >
        <Moon size={13} className={isDark ? 'text-blue-400 fill-blue-400/20' : ''} />
        <span>Dark</span>
      </div>
    </div>
  );
};
