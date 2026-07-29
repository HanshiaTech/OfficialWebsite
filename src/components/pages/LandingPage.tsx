import React, { useEffect, useState } from 'react';
import { LandingPageTemplate } from '../templates/LandingPageTemplate';
import { fetchServices, fetchWhyUs, fetchProjects, fetchStats } from '../../lib/api';
import { Service, WhyUsItem, Project, StatItem } from '../../types';

export const LandingPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [whyUs, setWhyUs] = useState<WhyUsItem[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [stats, setStats] = useState<StatItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [servicesRes, whyUsRes, projectsRes, statsRes] = await Promise.all([
          fetchServices(),
          fetchWhyUs(),
          fetchProjects(),
          fetchStats()
        ]);

        setServices(servicesRes.data);
        setWhyUs(whyUsRes.data);
        setProjects(projectsRes.data);
        setStats(statsRes.data);
      } catch (err) {
        console.error('API Load Error:', err);
      } finally {
        setIsLoading(false);
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

