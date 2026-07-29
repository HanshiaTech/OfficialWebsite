import React from 'react';
import { motion } from 'motion/react';
import { Laptop, Globe, Smartphone, Tablet, Sparkles } from 'lucide-react';
import { Language } from '../../types';

import pcLaptopImg from '../../assets/images/pc_laptop_app_1784883213110.jpg';
import webImg from '../../assets/images/web_ai_app_1784802484306.jpg';
import mobileImg from '../../assets/images/mobile_ai_app_1784802499229.jpg';
import tabletImg from '../../assets/images/tablet_11inch_app_1784883225755.jpg';

export interface MultiPlatformShowcaseProps {
  lang: Language;
}

export const MultiPlatformShowcase: React.FC<MultiPlatformShowcaseProps> = ({ lang }) => {
  const isIndo = lang === 'id';

  const platforms = [
    {
      id: 'desktop',
      icon: Laptop,
      title: isIndo ? 'Aplikasi PC & Laptop' : 'PC & Laptop Software',
      image: pcLaptopImg,
      badge: 'PC & Laptop'
    },
    {
      id: 'web',
      icon: Globe,
      title: isIndo ? 'Aplikasi Web & SaaS' : 'Web Application',
      image: webImg,
      badge: 'Web Browser'
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: isIndo ? 'Aplikasi Mobile (HP)' : 'Mobile Application',
      image: mobileImg,
      badge: 'Mobile Multi-Platform'
    },
    {
      id: 'tablet',
      icon: Tablet,
      title: isIndo ? 'Aplikasi Tablet' : 'Tablet Application',
      image: tabletImg,
      badge: 'Tablet'
    }
  ];

  return (
    <div className="w-full bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-2xl text-white">
      {/* Header Info */}
      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Sparkles size={16} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-100">
              {isIndo ? 'Solusi Multi-Platform' : 'Multi-Platform Solutions'}
            </h4>
            <p className="text-[11px] text-slate-400">
              {isIndo ? 'Pengembangan software untuk PC, Laptop, Web, Mobile, & Tablet' : 'Software development across PC, Laptop, Web, Mobile, and Tablet'}
            </p>
          </div>
        </div>
      </div>

      {/* Image Cards Grid */}
      <div className="grid grid-cols-2 gap-3.5">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          return (
            <motion.div
              key={platform.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="group relative rounded-xl bg-slate-800/80 border border-slate-700/70 hover:border-blue-500/60 overflow-hidden shadow-md flex flex-col cursor-pointer"
            >
              {/* Image Preview Area */}
              <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-950">
                <img
                  src={platform.image}
                  alt={platform.badge}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />

                {/* Top Badge */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-md border border-slate-700/80 text-[10px] sm:text-xs font-semibold text-slate-200 shadow-md">
                  <Icon size={13} className="text-blue-400" />
                  <span>{platform.badge}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

