import React from 'react';
import * as Icons from 'lucide-react';

export interface IconWrapperProps {
  name: string;
  className?: string;
  colorVariant?: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'cyan';
  size?: number;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  name,
  className = '',
  colorVariant = 'blue',
  size = 24
}) => {
  // Dynamic icon resolve from Lucide
  const IconComponent = (Icons as any)[name] || Icons.Code;

  const variantStyles = {
    blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400',
    purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400',
    green: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400',
    orange: 'bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400',
    pink: 'bg-pink-100 text-pink-600 dark:bg-pink-900/50 dark:text-pink-400',
    cyan: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/50 dark:text-cyan-400'
  };

  return (
    <div className={`p-3 rounded-xl inline-flex items-center justify-center shrink-0 ${variantStyles[colorVariant]} ${className}`}>
      <IconComponent size={size} strokeWidth={2} />
    </div>
  );
};
