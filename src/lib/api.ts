import { Service, WhyUsItem, Project, StatItem, AIResponse, ContactSubmission } from '../types';

export interface FetchOptions {
  bypassCache?: boolean;
}

export interface ApiPerformanceInfo {
  endpoint: string;
  responseMs: number;
  isCached: boolean;
  timestamp: string;
}

// Global store for developer debugging metrics
export const apiPerfLogs: ApiPerformanceInfo[] = [];

export async function fetchServices(options: FetchOptions = {}): Promise<{ data: Service[]; perf: ApiPerformanceInfo }> {
  const startTime = performance.now();
  const url = `/api/services${options.bypassCache ? '?nocache=1' : ''}`;
  const res = await fetch(url);
  const data = await res.json();
  const endTime = performance.now();

  const perf: ApiPerformanceInfo = {
    endpoint: '/api/services',
    responseMs: Math.round(endTime - startTime),
    isCached: res.headers.get('X-Cache-Status') === 'HIT',
    timestamp: new Date().toLocaleTimeString()
  };
  apiPerfLogs.unshift(perf);

  return { data: data.services, perf };
}

export async function fetchWhyUs(): Promise<{ data: WhyUsItem[]; perf: ApiPerformanceInfo }> {
  const startTime = performance.now();
  const res = await fetch('/api/why-us');
  const data = await res.json();
  const endTime = performance.now();

  const perf: ApiPerformanceInfo = {
    endpoint: '/api/why-us',
    responseMs: Math.round(endTime - startTime),
    isCached: res.headers.get('X-Cache-Status') === 'HIT',
    timestamp: new Date().toLocaleTimeString()
  };
  apiPerfLogs.unshift(perf);

  return { data: data.whyUs, perf };
}

export async function fetchProjects(): Promise<{ data: Project[]; perf: ApiPerformanceInfo }> {
  const startTime = performance.now();
  const res = await fetch('/api/projects');
  const data = await res.json();
  const endTime = performance.now();

  const perf: ApiPerformanceInfo = {
    endpoint: '/api/projects',
    responseMs: Math.round(endTime - startTime),
    isCached: res.headers.get('X-Cache-Status') === 'HIT',
    timestamp: new Date().toLocaleTimeString()
  };
  apiPerfLogs.unshift(perf);

  return { data: data.projects, perf };
}

export async function fetchStats(): Promise<{ data: StatItem[]; perf: ApiPerformanceInfo }> {
  const startTime = performance.now();
  const res = await fetch('/api/stats');
  const data = await res.json();
  const endTime = performance.now();

  const perf: ApiPerformanceInfo = {
    endpoint: '/api/stats',
    responseMs: Math.round(endTime - startTime),
    isCached: res.headers.get('X-Cache-Status') === 'HIT',
    timestamp: new Date().toLocaleTimeString()
  };
  apiPerfLogs.unshift(perf);

  return { data: data.stats, perf };
}

export async function askAiAssistant(prompt: string): Promise<AIResponse> {
  const res = await fetch('/api/ai-assistant', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Failed to query AI Assistant');
  }

  return await res.json();
}

export async function postContactInquiry(submission: Omit<ContactSubmission, 'id' | 'createdAt'>): Promise<{ success: boolean; submission: ContactSubmission }> {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(submission)
  });

  if (!res.ok) {
    throw new Error('Failed to submit inquiry via backend API');
  }

  return await res.json();
}
