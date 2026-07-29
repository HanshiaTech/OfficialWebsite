import React from 'react';

export const DisplayHeading: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h1 className={`font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-white leading-[1.15] ${className}`}>
    {children}
  </h1>
);

export const SectionEyebrow: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 ${className}`}>
    {children}
  </div>
);

export const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h2 className={`font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white tracking-tight leading-snug ${className}`}>
    {children}
  </h2>
);

export const SubtitleText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl ${className}`}>
    {children}
  </p>
);

export const BodyText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed ${className}`}>
    {children}
  </p>
);
