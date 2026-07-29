import React from 'react';
import { X, CheckCircle2, Cpu, ExternalLink } from 'lucide-react';
import { Project, Language } from '../../types';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';

export interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  lang: Language;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, lang }) => {
  if (!project) return null;

  const cs = project.caseStudy;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Header Image */}
        <div className="relative h-48 sm:h-60 rounded-2xl overflow-hidden mb-6">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
            <div>
              <div className="flex gap-2 mb-1">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="blue" size="sm">{tag}</Badge>
                ))}
              </div>
              <h2 className="text-2xl font-extrabold text-white">{project.title}</h2>
              <p className="text-xs text-blue-200">
                {lang === 'id' ? 'Klien:' : 'Client:'} {project.client} • {lang === 'id' ? 'Waktu Pengerjaan:' : 'Timeline:'} {project.timeline}
              </p>
            </div>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              {lang === 'id' ? 'Tantangan Utama' : 'The Challenge'}
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {cs.challenge[lang] || cs.challenge['en']}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
              {lang === 'id' ? 'Solusi Rekayasa Software' : 'Engineering Solution'}
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {cs.solution[lang] || cs.solution['en']}
            </p>
          </div>

          {/* Key Results */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
              {lang === 'id' ? 'Dampak Bisnis Terukur' : 'Quantifiable Business Impact'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cs.results.map((res, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {res[lang] || res['en']}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              {lang === 'id' ? 'Teknologi Yang Digunakan' : 'Technologies Used'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {cs.technologies.map((tech) => (
                <Badge key={tech} variant="slate">{tech}</Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <Button onClick={onClose} variant="primary">
            {lang === 'id' ? 'Tutup Studi Kasus' : 'Close Case Study'}
          </Button>
        </div>

      </div>
    </div>
  );
};
