import { DesignToken } from '../types';

export const DESIGN_TOKENS: DesignToken[] = [
  // Primary Palette
  { name: 'Primary Blue', category: 'Color', value: '#3B82F6', description: 'Main brand accent color for active states & primary buttons', figmaName: 'Color/Primary/Blue-500' },
  { name: 'Primary Indigo', category: 'Color', value: '#4F46E5', description: 'Gradient secondary shade for dark accents & highlights', figmaName: 'Color/Primary/Indigo-600' },
  { name: 'Accent Light Blue', category: 'Color', value: '#EFF6FF', description: 'Soft background tint for cards and subtle badges', figmaName: 'Color/Primary/Blue-50' },
  
  // Service Icon Gradients
  { name: 'Icon Blue', category: 'Color', value: 'from-blue-500 to-indigo-600', description: 'AI & Web development icon container', figmaName: 'Gradient/Blue-Indigo' },
  { name: 'Icon Purple', category: 'Color', value: 'from-purple-500 to-indigo-500', description: 'Modern tech icon container', figmaName: 'Gradient/Purple' },
  { name: 'Icon Green', category: 'Color', value: 'from-emerald-400 to-teal-600', description: 'Scalable & Security icon container', figmaName: 'Gradient/Green' },
  { name: 'Icon Orange', category: 'Color', value: 'from-amber-400 to-orange-500', description: 'Fast & Efficient icon container', figmaName: 'Gradient/Orange' },
  { name: 'Icon Pink', category: 'Color', value: 'from-pink-500 to-rose-500', description: 'Partnership & Mobile icon container', figmaName: 'Gradient/Pink' },

  // Typography Tokens
  { name: 'Display Headline', category: 'Typography', value: 'font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight', description: 'Hero main title scale', figmaName: 'Typography/Display/Heading-1' },
  { name: 'Section Title', category: 'Typography', value: 'font-bold text-2xl md:text-3xl text-slate-900 dark:text-white', description: 'Primary section heading scale', figmaName: 'Typography/Heading/Heading-2' },
  { name: 'Eyebrow Subtitle', category: 'Typography', value: 'text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400', description: 'Section top label badge', figmaName: 'Typography/Label/Eyebrow' },
  { name: 'Body Large', category: 'Typography', value: 'text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed', description: 'Hero subtext and section intro text', figmaName: 'Typography/Body/Large' },
  { name: 'Body Medium', category: 'Typography', value: 'text-sm text-slate-600 dark:text-slate-400 leading-normal', description: 'Card descriptions and secondary body text', figmaName: 'Typography/Body/Medium' },

  // Spacing & Layout
  { name: 'Section Spacing', category: 'Spacing', value: 'py-16 md:py-24 px-4 sm:px-6 lg:px-8', description: 'Outer padding rhythm for sections', figmaName: 'Spacing/Section/Vertical' },
  { name: 'Container Max Width', category: 'Spacing', value: 'max-w-7xl mx-auto', description: 'Standard content container width', figmaName: 'Layout/Grid/Container' },
  { name: 'Card Inner Padding', category: 'Spacing', value: 'p-6 md:p-8', description: 'Padding inside interactive cards', figmaName: 'Spacing/Card/Padding' },

  // Radii & Elevation
  { name: 'Card Corner Radius', category: 'Border Radius', value: 'rounded-2xl', description: 'Standard 16px corner radius for cards', figmaName: 'Radius/Large' },
  { name: 'Button Corner Radius', category: 'Border Radius', value: 'rounded-xl', description: '12px corner radius for buttons', figmaName: 'Radius/Medium' },
  { name: 'Soft Drop Shadow', category: 'Shadow', value: 'shadow-xl shadow-slate-200/50 dark:shadow-none', description: 'Soft subtle elevation', figmaName: 'Elevation/Shadow-2' },
];
