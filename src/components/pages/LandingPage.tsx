import React, { useEffect, useState } from 'react';
import { LandingPageTemplate } from '../templates/LandingPageTemplate';
import { fetchServices, fetchWhyUs, fetchProjects, fetchStats } from '../../lib/api';
import { Service, WhyUsItem, Project, StatItem } from '../../types';
import { INITIAL_SERVICES, INITIAL_WHY_US, INITIAL_PROJECTS, INITIAL_STATS } from '../../data/initialData';

export const LandingPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>(INITIAL_SERVICES);
  const [whyUs, setWhyUs] = useState<WhyUsItem[]>(INITIAL_WHY_US);
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [stats, setStats] = useState<StatItem[]>(INITIAL_STATS);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const [servicesRes, whyUsRes, projectsRes, statsRes] = await Promise.all([
          fetchServices(),
          fetchWhyUs(),
          fetchProjects(),
          fetchStats()
        ]);

        if (servicesRes.data && servicesRes.data.length > 0) setServices(servicesRes.data);
        if (whyUsRes.data && whyUsRes.data.length > 0) setWhyUs(whyUsRes.data);
        if (projectsRes.data && projectsRes.data.length > 0) setProjects(projectsRes.data);
        if (statsRes.data && statsRes.data.length > 0) setStats(statsRes.data);
      } catch (err) {
        console.error('API Load Error:', err);
      }
    }

    loadData();
  }, []);

  return (
    <LandingPageTemplate
      services={services}
      whyUs={whyUs}
      projects={projects}
      stats={stats}
      isLoading={isLoading}
    />
  );
};

