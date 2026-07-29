import React, { useState } from 'react';
import { X, ShieldCheck, FileText, CheckCircle2, AlertCircle, FileCode } from 'lucide-react';
import { Language } from '../../types';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'privacy' | 'terms';
  lang: Language;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'terms',
  lang
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(defaultTab);

  if (!isOpen) return null;

  const isIndo = lang === 'id';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[85vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden text-slate-800 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
              {activeTab === 'privacy' ? <ShieldCheck size={22} /> : <FileText size={22} />}
            </div>
            <div>
              <h3 className="text-lg font-bold">
                {activeTab === 'privacy' 
                  ? (isIndo ? 'Kebijakan Privasi (Privacy Policy)' : 'Privacy Policy')
                  : (isIndo ? 'Syarat & Ketentuan Layanan (Terms of Service)' : 'Terms of Service')}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isIndo ? 'Ketentuan resmi kerjasama & hak cipta Hanshia Tech' : 'Official terms of service & software copyright policies'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-950/40 px-5 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-t-lg transition-colors border-b-2 ${
              activeTab === 'terms'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <FileText size={16} />
            <span>{isIndo ? 'Syarat & Ketentuan (Terms)' : 'Terms of Service'}</span>
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-t-lg transition-colors border-b-2 ${
              activeTab === 'privacy'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            <ShieldCheck size={16} />
            <span>{isIndo ? 'Kebijakan Privasi (Privacy)' : 'Privacy Policy'}</span>
          </button>
        </div>

        {/* Modal Content Area */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {activeTab === 'terms' ? (
            /* TERMS OF SERVICE CONTENT */
            <div className="space-y-6">
              {/* Highlight Box regarding Source Code Ownership */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 flex items-start gap-3">
                <FileCode size={22} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs sm:text-sm">
                  <h4 className="font-bold text-amber-900 dark:text-amber-300">
                    {isIndo ? 'Ketentuan Penting: Hak Milik Kode Sumber (Source Code Ownership)' : 'Important Notice: Source Code Ownership'}
                  </h4>
                  <p>
                    {isIndo
                      ? 'Penyerahan Kode Sumber (Source Code) TIDAK diberikan secara otomatis setelah proyek selesai. Hak milik atau akses kode sumber merupakan OPSI khusus yang dipilih saat penawaran harga (Quotation) / Kesepakatan Kontrak Kerja.'
                      : 'Source code delivery is NOT automatically granted upon project completion. Source code ownership/access is an explicit OPTION selected during the Quotation / Contract Agreement stage.'}
                  </p>
                </div>
              </div>

              <section className="space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  1. Ketentuan Penawaran & Kepemilikan Source Code
                </h4>
                <p>
                  {isIndo
                    ? 'Saat Anda mengajukan pembuatan aplikasi ke Hanshia Tech, struktur biaya dan hak milik dibedakan berdasarkan paket penawaran yang disepakati:'
                    : 'When requesting software development with Hanshia Tech, cost structure and code ownership depend on the agreed quotation package:'}
                </p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-blue-500">
                  <li>
                    <strong>{isIndo ? 'Opsi Layanan Siap Pakai (Deployment / Executable Only):' : 'Deployment / Executable Only Option:'}</strong>{' '}
                    {isIndo
                      ? 'Klien menerima aplikasi yang telah di-deploy (siap digunakan di server/cloud atau file installer). Source code tetap menjadi milik Hanshia Tech dan tidak diserahkan.'
                      : 'Client receives the deployed application (ready to use on cloud/server or installer executable). Source code remains property of Hanshia Tech.'}
                  </li>
                  <li>
                    <strong>{isIndo ? 'Opsi Transfer Full Source Code (Paket Lengkap):' : 'Full Source Code Transfer Option:'}</strong>{' '}
                    {isIndo
                      ? 'Jika dipilih dalam dokumen penawaran harga, Hanshia Tech akan menyerahkan 100% source code repository, dokumentasi, serta hak guna eksklusif setelah pelunasan proyek.'
                      : 'If explicitly selected in the quotation agreement, Hanshia Tech transfers 100% source code repository, documentation, and usage rights upon final payment.'}
                  </li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  2. Ruang Lingkup Proyek & Perubahan Fitur (Change Request)
                </h4>
                <p>
                  {isIndo
                    ? 'Setiap proyek dikerjakan berdasarkan dokumen spesifikasi kebutuhan (Requirements Sheet) yang disetujui bersama. Permintaan fitur tambahan di luar kesepakatan awal (Change Request) akan dikenakan biaya tambahan dan penyesuaian jadwal rilis.'
                    : 'Projects are executed based on agreed Requirements Sheets. Additional feature requests beyond the initial scope (Change Request) will be billed separately with adjusted timelines.'}
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  3. Skema Pembayaran & Garansi Pemeliharaan
                </h4>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-blue-500">
                  <li>
                    {isIndo
                      ? 'Pembayaran dilakukan secara bertahap (Down Payment / Termijn) sesuai milestone yang disepakati.'
                      : 'Payments are made in stages (Down Payment / Milestones) as stipulated in the contract.'}
                  </li>
                  <li>
                    {isIndo
                      ? 'Hanshia Tech memberikan Garansi Perbaikan Bug (Bug Fixing Guarantee) gratis selama periode garansi yang tertera di surat perjanjian.'
                      : 'Hanshia Tech offers a free Bug Fixing Guarantee for the period specified in the project agreement.'}
                  </li>
                </ul>
              </section>

              <section className="space-y-2 border-t border-slate-200 dark:border-slate-800 pt-4">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  4. Batasan Tanggung Jawab
                </h4>
                <p>
                  {isIndo
                    ? 'Hanshia Tech tidak bertanggung jawab atas kerugian operasional akibat penyalahgunaan aplikasi oleh pihak ketiga, kebocoran akun akibat kelalaian klien, atau perubahan kebijakan server pihak ketiga setelah penyerahan proyek.'
                    : 'Hanshia Tech is not liable for operational losses resulting from client credential negligence, misuse by third parties, or third-party server policy changes after handover.'}
                </p>
              </section>
            </div>
          ) : (
            /* PRIVACY POLICY CONTENT */
            <div className="space-y-6">
              <section className="space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  1. Perlindungan Kerahasiaan Ide & Data Klien (NDA)
                </h4>
                <p>
                  {isIndo
                    ? 'Atas prinsip profesionalitas, seluruh ide bisnis, dokumen arsitektur, data kredensial, dan materi proyek yang Anda bagikan kepada Hanshia Tech bersifat rahasia dan dilindungi penuh di bawah kesepakatan Non-Disclosure Agreement (NDA).'
                    : 'In accordance with professional standards, all business ideas, architecture documents, credentials, and project materials shared with Hanshia Tech are confidential and strictly protected under Non-Disclosure Agreements (NDA).'}
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  2. Informasi Yang Kami Kumpulkan
                </h4>
                <p>
                  {isIndo
                    ? 'Kami mengumpulkan informasi terbatas yang diperlukan untuk keperluan estimasi penawaran dan pengembangan aplikasi:'
                    : 'We collect limited necessary information for quotation estimation and software development:'}
                </p>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-blue-500">
                  <li>{isIndo ? 'Nama lengkap, nama perusahaan, email, akun Telegram, dan nomor telepon.' : 'Full name, company name, email address, Telegram handle, and contact number.'}</li>
                  <li>{isIndo ? 'Dokumen kebutuhan proyek (PRD, Wireframe, atau acuan fitur).' : 'Project requirement documents (PRDs, wireframes, or feature specifications).'}</li>
                  <li>{isIndo ? 'Data analitik lalu lintas website non-personal untuk peningkatan kualitas layanan.' : 'Non-personal website traffic analytics for service quality improvement.'}</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  3. Penggunaan & Keamanan Data
                </h4>
                <p>
                  {isIndo
                    ? 'Data Anda hanya digunakan secara internal oleh tim Hanshia Tech untuk komunikasi proyek, pengerjaan software, dan invoicing. Kami TIDAK PERNAH menjual, menyewakan, atau membagikan data klien kepada pihak ketiga mana pun.'
                    : 'Your data is strictly used internally by Hanshia Tech team for project communication, software engineering, and invoicing. We NEVER sell, rent, or distribute client data to any third parties.'}
                </p>
              </section>

              <section className="space-y-2 border-t border-slate-200 dark:border-slate-800 pt-4">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  4. Kontak Kebijakan Privasi
                </h4>
                <p>
                  {isIndo
                    ? 'Jika Anda memiliki pertanyaan seputar kebijakan privasi atau ingin mengajukan penghapusan data kontak, silakan hubungi tim legal kami melalui email: '
                    : 'For questions regarding our privacy policy or to request data removal, please contact our team at: '}
                  <a href="mailto:hanshiatech@gmail.com" className="text-blue-600 dark:text-blue-400 underline font-semibold">
                    hanshiatech@gmail.com
                  </a>
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors cursor-pointer shadow-md"
          >
            {isIndo ? 'Saya Mengerti & Setuju' : 'I Understand & Agree'}
          </button>
        </div>
      </div>
    </div>
  );
};
