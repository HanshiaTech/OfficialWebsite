import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Mail, Copy, ExternalLink, Check } from 'lucide-react';
import { Button } from '../atoms/Button';
import { Input, Textarea } from '../atoms/Input';
import { postContactInquiry } from '../../lib/api';
import { Language } from '../../types';
import { TRANSLATIONS } from '../../i18n/translations';
import { SITE_CONFIG } from '../../config/site';

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, lang }) => {
  const t = TRANSLATIONS[lang];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('Custom Web Development');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const targetEmail = SITE_CONFIG.contactEmail;
  const phoneNumber = SITE_CONFIG.phoneNumber.replace(/[^0-9]/g, '');

  const emailSubject = `[Inquiry Proyek] ${serviceNeeded} - ${name || 'Klien Baru'}`;
  const emailBody = `Halo Tim Hanshia Tech,\n\nSaya bermaksud mengajukan konsultasi/inquiry proyek dengan rincian berikut:\n\n- Nama: ${name}\n- Email: ${email}\n- Layanan: ${serviceNeeded}\n\nRincian Pesan:\n${message}\n\nMohon konfirmasi dan informasi lebih lanjut.\nTerima kasih.`;

  // Direct Gmail Web link (no mail app installation needed)
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  
  // Standard mailto link for native mail clients
  const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  // WhatsApp link for direct instant chat
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Halo Hanshia Tech, saya ${name || 'klien'} (${email || 'email'}) ingin berkonsultasi mengenai ${serviceNeeded}. ${message}`)}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setError('Mohon lengkapi Nama dan Alamat Email Anda.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Send directly to Express API endpoint
      await postContactInquiry({ name, email, serviceNeeded, message });
      setIsSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Gagal mengirim pesan inquiry.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full cursor-pointer"
        >
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div className="py-4 space-y-5 text-center">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {lang === 'id' ? 'Pesan Berhasil Terkirim!' : 'Message Successfully Sent!'}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-sm mx-auto">
                {lang === 'id' ? (
                  <>Terima kasih, <span className="font-semibold">{name}</span>! Pesan Anda telah diterima langsung oleh sistem tim <span className="font-semibold text-blue-600 dark:text-blue-400">Hanshia Tech</span>.</>
                ) : (
                  <>Thank you, <span className="font-semibold">{name}</span>! Your message has been received directly by the <span className="font-semibold text-blue-600 dark:text-blue-400">Hanshia Tech</span> team.</>
                )}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-3 text-left">
              <div className="flex items-center justify-between text-xs font-mono border-b border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-slate-500">{lang === 'id' ? 'Status Pengiriman:' : 'Delivery Status:'}</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
                  {lang === 'id' ? '✓ Terkirim Langsung (Sent)' : '✓ Direct Delivery (Sent)'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-500 block">{lang === 'id' ? 'Tujuan Email:' : 'Recipient Email:'}</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">{targetEmail}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">{lang === 'id' ? 'Layanan:' : 'Service:'}</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">{serviceNeeded}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">{lang === 'id' ? 'Estimasi Respon:' : 'Est. Response:'}</span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">{lang === 'id' ? '< 24 Jam' : '< 24 Hours'}</span>
                </div>
              </div>

              {message && (
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 text-xs">
                  <span className="text-slate-500 block mb-0.5">{lang === 'id' ? 'Ringkasan Pesan:' : 'Message Summary:'}</span>
                  <p className="italic text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800">
                    "{message}"
                  </p>
                </div>
              )}
            </div>

            <div className="pt-2 flex justify-center">
              <Button onClick={handleReset} variant="primary" size="md" className="w-full sm:w-auto">
                <span>{lang === 'id' ? 'Selesai & Tutup' : 'Done & Close'}</span>
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.ctaHeading}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {lang === 'id' ? 'Kirim langsung ke:' : 'Send directly to:'} <span className="font-semibold text-blue-600 dark:text-blue-400">{targetEmail}</span>
                </p>
              </div>
            </div>

            {error && <p className="mb-4 p-3 bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-300 text-xs rounded-xl font-medium">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label={lang === 'id' ? 'Nama Anda *' : 'Your Name *'}
                  placeholder="e.g. Alex Johnson"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Input
                  label={lang === 'id' ? 'Alamat Email *' : 'Email Address *'}
                  type="email"
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  {lang === 'id' ? 'Layanan Yang Dibutuhkan' : 'Service Needed'}
                </label>
                <select
                  value={serviceNeeded}
                  onChange={(e) => setServiceNeeded(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm rounded-xl border border-slate-200 dark:border-slate-800 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Custom Web Development">{lang === 'id' ? 'Pengembangan Web Kustom' : 'Custom Web Development'}</option>
                  <option value="Mobile App Development">{lang === 'id' ? 'Pengembangan Aplikasi Seluler' : 'Mobile App Development'}</option>
                  <option value="SaaS Product Development">{lang === 'id' ? 'Pengembangan Produk SaaS' : 'SaaS Product Development'}</option>
                  <option value="API Integration">{lang === 'id' ? 'Integrasi API' : 'API Integration'}</option>
                  <option value="Maintenance & Support">{lang === 'id' ? 'Pemeliharaan & Dukungan' : 'Maintenance & Support'}</option>
                </select>
              </div>

              <Textarea
                label={lang === 'id' ? 'Rincian Proyek' : 'Project Details'}
                placeholder={lang === 'id' ? 'Jelaskan kebutuhan proyek, tenggat waktu, dan preferensi teknologi Anda...' : 'Describe your project requirements, timeline, and tech preferences...'}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <div className="pt-1 flex flex-col gap-2.5">
                <Button type="submit" isLoading={isLoading} size="lg" variant="primary" className="w-full">
                  <span>{lang === 'id' ? 'Kirim Pesan Email Sekarang' : 'Send Email Message Now'}</span>
                  <Send size={16} />
                </Button>

                <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                  <a
                    href={gmailWebUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
                  >
                    <Mail size={14} className="text-rose-500" />
                    <span>{lang === 'id' ? 'Buka via Gmail' : 'Open via Gmail'}</span>
                    <ExternalLink size={12} className="opacity-60" />
                  </a>
                  <a
                    href={mailtoUrl}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
                  >
                    <Mail size={14} className="text-blue-500" />
                    <span>{lang === 'id' ? 'Aplikasi Mail' : 'Mail App'}</span>
                  </a>
                </div>

                <div className="relative my-1 flex items-center justify-center">
                  <div className="border-t border-slate-200 dark:border-slate-800 w-full"></div>
                  <span className="bg-white dark:bg-slate-900 px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest absolute">
                    {lang === 'id' ? 'Atau Chat Instan' : 'Or Instant Chat'}
                  </span>
                </div>

                <a
                  href={`https://t.me/hanshiatech?text=${encodeURIComponent(`Halo Hanshia Tech, saya ${name || 'klien'} (${email || 'email'}) ingin berkonsultasi mengenai ${serviceNeeded}. ${message}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm transition-all shadow-md shadow-sky-500/20 active:scale-[0.99] cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                  <span>{lang === 'id' ? 'Chat Instan via Telegram (@hanshiatech)' : 'Instant Chat via Telegram (@hanshiatech)'}</span>
                  <ExternalLink size={14} className="ml-auto opacity-80" />
                </a>
                
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1 pt-1">
                  <span className="flex items-center gap-1">
                    <Mail size={13} className="text-blue-500" />
                    <span>{lang === 'id' ? 'Tujuan:' : 'Target:'} {targetEmail}</span>
                  </span>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {copiedEmail ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                    <span>{copiedEmail ? (lang === 'id' ? 'Tersalin!' : 'Copied!') : (lang === 'id' ? 'Salin Email' : 'Copy Email')}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

