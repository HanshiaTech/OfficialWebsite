import React from 'react';

export interface LogoProps {
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ onClick, className = '', size = 'md' }) => {
  const iconSizes = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-10 h-10 rounded-xl',
    lg: 'w-12 h-12 rounded-2xl'
  };

  const svgSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-7 h-7'
  };

  const nameTextSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl'
  };

  const techTextSizes = {
    sm: 'text-[10px]',
    md: 'text-xs',
    lg: 'text-sm'
  };

  return (
    <div 
      className={`flex items-center gap-3 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      <div className={`${iconSizes[size]} bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/30 shrink-0`}>
        <svg className={`${svgSizes[size]} fill-current`} viewBox="0 0 24 24">
          <path d="M6 3h4v7H6V3zm8 0h4v18h-4V3zM6 14h4v7H6v-7z" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`font-black ${nameTextSizes[size]} tracking-tight text-slate-900 dark:text-white leading-none`}>
          HANSHIA
        </span>
        <span className={`font-bold ${techTextSizes[size]} tracking-widest text-blue-600 dark:text-blue-400`}>
          TECH
        </span>
      </div>
    </div>
  );
};
