import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Rocket, Mail, Copy, Check, MessageSquare } from 'lucide-react';
import { Language } from '../../types';
import { TRANSLATIONS } from '../../i18n/translations';
import { SITE_CONFIG } from '../../config/site';

export interface CtaSectionProps {
  lang: Language;
  onOpenContact?: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const email = SITE_CONFIG.contactEmail; // hansia.tech@gmail.com
  const telegramUsername = SITE_CONFIG.telegramUsername; // @hanshiatech
  const telegramUrl = SITE_CONFIG.telegramUrl; // https://t.me/hanshiatech

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent('Inquiry Proyek Hanshia Tech')}`;

  return (
    <section id="contact" className="py-12 md:py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50/80 to-sky-100/70 dark:from-slate-800/90 dark:via-blue-950/50 dark:to-slate-800 border border-blue-200/80 dark:border-slate-700 p-8 sm:p-12 shadow-xl shadow-blue-500/5"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left Icon + Heading */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-5 text-center sm:text-left max-w-xl">
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-slate-700 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 shadow-md">
                <Rocket size={32} className="animate-bounce" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {t.ctaHeading}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1 font-medium">
                  {t.ctaSubtext}
                </p>
              </div>
            </div>

            {/* Right Direct Contact Channels: Email & Telegram */}
            <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-4 shrink-0">
              
              {/* Direct Email Card */}
              <div className="w-full sm:w-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 p-4 rounded-2xl shadow-sm flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                      {lang === 'id' ? 'Email Kami' : 'Our Email'}
                    </p>
                    <a
                      href={mailtoUrl}
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors select-all block truncate"
                      title={email}
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title={lang === 'id' ? 'Salin Email' : 'Copy Email'}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer shrink-0"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Direct Telegram Card */}
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 p-4 rounded-2xl shadow-sm flex items-center gap-3 hover:border-sky-300 dark:hover:border-sky-700 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-900/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                    Telegram
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {telegramUsername}
                  </p>
                </div>
              </a>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};


