import { Service, WhyUsItem, Project, StatItem, AIResponse, ContactSubmission } from '../types';
import { INITIAL_SERVICES, INITIAL_WHY_US, INITIAL_PROJECTS, INITIAL_STATS } from '../data/initialData';
import { SITE_CONFIG } from '../config/site';

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
  
  try {
    const res = await fetch(url);
    const contentType = res.headers.get('content-type') || '';
    if (res.ok && contentType.includes('application/json')) {
      const data = await res.json();
      const endTime = performance.now();
      const perf: ApiPerformanceInfo = {
        endpoint: '/api/services',
        responseMs: Math.round(endTime - startTime),
        isCached: res.headers.get('X-Cache-Status') === 'HIT',
        timestamp: new Date().toLocaleTimeString()
      };
      apiPerfLogs.unshift(perf);
      return { data: data.services || INITIAL_SERVICES, perf };
    }
  } catch (e) {
    console.warn('API /api/services unavailable, using client dataset fallback:', e);
  }

  const endTime = performance.now();
  const perf: ApiPerformanceInfo = {
    endpoint: '/api/services (static fallback)',
    responseMs: Math.round(endTime - startTime),
    isCached: true,
    timestamp: new Date().toLocaleTimeString()
  };
  apiPerfLogs.unshift(perf);
  return { data: INITIAL_SERVICES, perf };
}

export async function fetchWhyUs(): Promise<{ data: WhyUsItem[]; perf: ApiPerformanceInfo }> {
  const startTime = performance.now();
  
  try {
    const res = await fetch('/api/why-us');
    const contentType = res.headers.get('content-type') || '';
    if (res.ok && contentType.includes('application/json')) {
      const data = await res.json();
      const endTime = performance.now();
      const perf: ApiPerformanceInfo = {
        endpoint: '/api/why-us',
        responseMs: Math.round(endTime - startTime),
        isCached: res.headers.get('X-Cache-Status') === 'HIT',
        timestamp: new Date().toLocaleTimeString()
      };
      apiPerfLogs.unshift(perf);
      return { data: data.whyUs || INITIAL_WHY_US, perf };
    }
  } catch (e) {
    console.warn('API /api/why-us unavailable, using client dataset fallback:', e);
  }

  const endTime = performance.now();
  const perf: ApiPerformanceInfo = {
    endpoint: '/api/why-us (static fallback)',
    responseMs: Math.round(endTime - startTime),
    isCached: true,
    timestamp: new Date().toLocaleTimeString()
  };
  apiPerfLogs.unshift(perf);
  return { data: INITIAL_WHY_US, perf };
}

export async function fetchProjects(): Promise<{ data: Project[]; perf: ApiPerformanceInfo }> {
  const startTime = performance.now();
  
  try {
    const res = await fetch('/api/projects');
    const contentType = res.headers.get('content-type') || '';
    if (res.ok && contentType.includes('application/json')) {
      const data = await res.json();
      const endTime = performance.now();
      const perf: ApiPerformanceInfo = {
        endpoint: '/api/projects',
        responseMs: Math.round(endTime - startTime),
        isCached: res.headers.get('X-Cache-Status') === 'HIT',
        timestamp: new Date().toLocaleTimeString()
      };
      apiPerfLogs.unshift(perf);
      return { data: data.projects || INITIAL_PROJECTS, perf };
    }
  } catch (e) {
    console.warn('API /api/projects unavailable, using client dataset fallback:', e);
  }

  const endTime = performance.now();
  const perf: ApiPerformanceInfo = {
    endpoint: '/api/projects (static fallback)',
    responseMs: Math.round(endTime - startTime),
    isCached: true,
    timestamp: new Date().toLocaleTimeString()
  };
  apiPerfLogs.unshift(perf);
  return { data: INITIAL_PROJECTS, perf };
}

export async function fetchStats(): Promise<{ data: StatItem[]; perf: ApiPerformanceInfo }> {
  const startTime = performance.now();
  
  try {
    const res = await fetch('/api/stats');
    const contentType = res.headers.get('content-type') || '';
    if (res.ok && contentType.includes('application/json')) {
      const data = await res.json();
      const endTime = performance.now();
      const perf: ApiPerformanceInfo = {
        endpoint: '/api/stats',
        responseMs: Math.round(endTime - startTime),
        isCached: res.headers.get('X-Cache-Status') === 'HIT',
        timestamp: new Date().toLocaleTimeString()
      };
      apiPerfLogs.unshift(perf);
      return { data: data.stats || INITIAL_STATS, perf };
    }
  } catch (e) {
    console.warn('API /api/stats unavailable, using client dataset fallback:', e);
  }

  const endTime = performance.now();
  const perf: ApiPerformanceInfo = {
    endpoint: '/api/stats (static fallback)',
    responseMs: Math.round(endTime - startTime),
    isCached: true,
    timestamp: new Date().toLocaleTimeString()
  };
  apiPerfLogs.unshift(perf);
  return { data: INITIAL_STATS, perf };
}

export async function askAiAssistant(prompt: string): Promise<AIResponse> {
  try {
    const res = await fetch('/api/ai-assistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const contentType = res.headers.get('content-type') || '';
    if (res.ok && contentType.includes('application/json')) {
      return await res.json();
    }
  } catch (e) {
    console.warn('API /api/ai-assistant unavailable, using fallback response:', e);
  }

  // Fallback response for static deployments (Vercel / GitHub Pages)
  return {
    answer: `Hanshia AI Analysis: For "${prompt.slice(0, 40)}...", we recommend using modern React 19 architecture, Tailwind CSS, and serverless edge functions for optimal performance.`,
    tokensUsed: 48,
    maxTokensAllowed: 250,
    latencyMs: 120,
    timestamp: new Date().toISOString()
  };
}

export async function postContactInquiry(submission: Omit<ContactSubmission, 'id' | 'createdAt'>): Promise<{ success: boolean; submission: ContactSubmission }> {
  const newSubmission: ContactSubmission = {
    ...submission,
    id: 'sub_' + Math.random().toString(36).substring(2, 9),
    createdAt: new Date().toISOString()
  };

  const recipientEmail = import.meta.env.VITE_CONTACT_EMAIL || SITE_CONFIG.contactEmail || 'hanshiatech@gmail.com';

  // 1. Try sending via FormSubmit.co (Zero-Config email service)
  try {
    const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `[Website Hanshia Tech] Pesan Baru dari ${submission.name}`,
        _template: 'table',
        Nama: submission.name,
        Email: submission.email,
        Layanan: submission.serviceNeeded,
        Pesan: submission.message
      })
    });

    if (formSubmitRes.ok) {
      const data = await formSubmitRes.json().catch(() => ({}));
      if (data.success === 'true' || data.success === true || formSubmitRes.status === 200) {
        console.log('FormSubmit email sent successfully to', recipientEmail);
        return { success: true, submission: newSubmission };
      }
    }
  } catch (e) {
    console.warn('FormSubmit email delivery failed, trying Web3Forms/server fallbacks:', e);
  }

  // 2. Try sending via Web3Forms API (if VITE_WEB3FORMS_ACCESS_KEY is set)
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (web3FormsKey) {
    try {
      const web3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: submission.name,
          email: submission.email,
          service: submission.serviceNeeded,
          message: submission.message,
          subject: `[Inquiry Proyek Hanshia Tech] ${submission.serviceNeeded} - ${submission.name}`,
          from_name: 'Hanshia Tech Web Form'
        })
      });

      if (web3Res.ok) {
        return { success: true, submission: newSubmission };
      }
    } catch (e) {
      console.warn('Web3Forms email delivery failed, trying fallback endpoints:', e);
    }
  }

  // 3. Try sending to Express / Serverless API endpoint
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submission)
    });

    const contentType = res.headers.get('content-type') || '';
    if (res.ok && contentType.includes('application/json')) {
      const data = await res.json();
      if (data.success) {
        return data;
      }
    }
  } catch (e) {
    console.warn('API /api/contact unavailable:', e);
  }

  // Return failure if all delivery attempts failed
  return {
    success: false,
    submission: newSubmission
  };
}
