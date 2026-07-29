import React from 'react';
import { Calendar, MapPin, Award, CheckCircle2, Users, Code, Sparkles, Target, Compass } from 'lucide-react';
import { SectionEyebrow, SectionTitle } from '../atoms/Typography';
import { Language } from '../../types';
import { TRANSLATIONS } from '../../i18n/translations';
import { SITE_CONFIG } from '../../config/site';

export interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
  
  const visionText = SITE_CONFIG.vision[lang] || SITE_CONFIG.vision.en;

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800 transition-colors relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionEyebrow>{t.aboutUs ? t.aboutUs.toUpperCase() : (lang === 'id' ? 'TENTANG KAMI' : 'ABOUT US')}</SectionEyebrow>
          <SectionTitle>
            {lang === 'id'
              ? 'Membangun Masa Depan Digital Dengan Inovasi & Presisi Rekayasa'
              : 'Building the Digital Future with Innovation & Engineering Precision'}
          </SectionTitle>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {lang === 'id'
              ? 'HANSHIA TECH adalah perusahaan pengembang perangkat lunak berbasis di Indonesia yang berdedikasi menciptakan aplikasi web, mobile, dan sistem SaaS berperforma tinggi dengan integrasi kecerdasan buatan (AI).'
              : 'HANSHIA TECH is an Indonesian-based software development company dedicated to crafting high-performance web, mobile, and SaaS applications integrated with artificial intelligence (AI).'}
          </p>
        </div>

        {/* Company Quick Facts Cards (3 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-4 shadow-sm">
            <div className="p-3 rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
              <Calendar size={22} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {lang === 'id' ? 'Berdiri Sejak' : 'Established'}
              </p>
              <p className="text-lg font-bold text-slate-900 dark:text-white">{SITE_CONFIG.establishedYear}</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-4 shadow-sm">
            <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
              <MapPin size={22} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {lang === 'id' ? 'Lokasi Utama' : 'Primary Location'}
              </p>
              <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{SITE_CONFIG.location}</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center gap-4 shadow-sm">
            <div className="p-3 rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
              <Award size={22} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {lang === 'id' ? 'Kualitas Produk' : 'Product Quality'}
              </p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Best Practice</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Vision Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-600/20 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Compass size={160} />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold tracking-wider uppercase mb-6 border border-white/20">
                <Target size={14} />
                <span>{lang === 'id' ? 'VISI PERUSAHAAN' : 'COMPANY VISION'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 leading-snug">
                "{visionText}"
              </h3>
            </div>
            <div className="pt-6 border-t border-white/20 relative z-10 flex items-center gap-3 text-xs text-blue-100 font-medium">
              <Sparkles size={16} className="text-amber-300" />
              <span>
                {lang === 'id'
                  ? 'Inovasi Terdepan • Standard Rekayasa Tinggi • Berkelanjutan'
                  : 'Leading Innovation • High Engineering Standards • Sustainable'}
              </span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6">
                <Compass size={14} />
                <span>{lang === 'id' ? 'MISI UTAMA KAMI' : 'OUR CORE MISSION'}</span>
              </div>
              <ul className="space-y-4">
                {SITE_CONFIG.mission.map((m, idx) => {
                  const missionText = m[lang] || m.en;
                  return (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-blue-600 text-white mt-0.5 shrink-0">
                        <CheckCircle2 size={14} />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {missionText}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-400">
              {lang === 'id'
                ? 'Berkomitmen memberikan dampak nyata bagi setiap mitra bisnis.'
                : 'Committed to delivering real impact for every business partner.'}
            </div>
          </div>

        </div>

        {/* Tech Stack Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Code className="text-blue-600 dark:text-blue-400" size={22} />
                <span>{lang === 'id' ? 'Tech Stack & Fondasi Teknologi' : 'Tech Stack & Engineering Foundation'}</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {lang === 'id'
                  ? 'Kami menggunakan ekosistem teknologi modern terbaik yang aman, stabil, dan siap pakai.'
                  : 'We leverage the finest modern technology ecosystem—secure, stable, and production-ready.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SITE_CONFIG.techStack.map((tech, idx) => {
              const techDesc = typeof tech.desc === 'object' ? (tech.desc[lang] || tech.desc.en) : tech.desc;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tech.name}
                    </span>
                    <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                      {tech.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {techDesc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div id="team" className="scroll-mt-24">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2">
              <Users className="text-blue-600 dark:text-blue-400" size={22} />
              <span>{lang === 'id' ? 'Tim Di Balik Hanshia Tech' : 'The Team Behind Hanshia Tech'}</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {lang === 'id'
                ? 'Para insinyur software, desainer produk, dan spesialis AI berketerampilan tinggi.'
                : 'Highly skilled software engineers, product designers, and AI specialists.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SITE_CONFIG.teamMembers.map((member, idx) => {
              const memberRole = typeof member.role === 'object' ? (member.role[lang] || member.role.en) : member.role;
              const memberBio = typeof member.bio === 'object' ? (member.bio[lang] || member.bio.en) : member.bio;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center flex flex-col items-center hover:shadow-lg transition-all"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0D8ABC&color=fff`;
                    }}
                    className="w-20 h-20 rounded-2xl object-cover mb-4 shadow-md border-2 border-white dark:border-slate-800"
                  />
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">{member.name}</h4>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">{memberRole}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{memberBio}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
