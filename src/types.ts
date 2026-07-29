export type Language = 'en' | 'id' | 'ja' | 'es';

export interface Service {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
  category: string;
  badge?: string;
  bgGradient: string;
}

export interface WhyUsItem {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
  badgeColor: string;
}

export interface Project {
  id: string;
  title: string;
  description: Record<Language, string>;
  tags: string[];
  category: 'SaaS' | 'Web' | 'Mobile' | 'AI' | 'Enterprise';
  imageUrl: string;
  metrics: {
    label: string;
    value: string;
  }[];
  client: string;
  timeline: string;
  caseStudy: {
    challenge: Record<Language, string>;
    solution: Record<Language, string>;
    results: Record<Language, string>[];
    technologies: string[];
  };
}

export interface StatItem {
  id: string;
  label: Record<Language, string>;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface AIResponse {
  answer: string;
  tokensUsed: number;
  maxTokensAllowed: number;
  latencyMs: number;
  timestamp: string;
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  company?: string;
  serviceNeeded: string;
  budget?: string;
  message: string;
  createdAt: string;
}

export interface UserAuth {
  uid: string;
  email: string | null;
  displayName: string | null;
  isGuest: boolean;
}

export interface DesignToken {
  name: string;
  category: 'Color' | 'Typography' | 'Spacing' | 'Border Radius' | 'Shadow';
  value: string;
  description: string;
  figmaName: string;
}
