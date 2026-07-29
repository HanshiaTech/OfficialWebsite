import React from 'react';
import { ProjectCard } from '../molecules/ProjectCard';
import { SectionEyebrow, SectionTitle } from '../atoms/Typography';
import { Project, Language } from '../../types';
import { TRANSLATIONS } from '../../i18n/translations';

export interface FeaturedProjectsSectionProps {
  projects: Project[];
  lang: Language;
  onOpenCaseStudy: (project: Project) => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  projects,
  lang,
  onOpenCaseStudy
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-slate-50/70 dark:bg-slate-950/70 border-t border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <SectionEyebrow>{t.ourWorkEyebrow}</SectionEyebrow>
          <SectionTitle>{t.ourWorkTitle}</SectionTitle>
        </div>

        {/* 3 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              lang={lang}
              onOpenCaseStudy={onOpenCaseStudy}
              index={idx}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
