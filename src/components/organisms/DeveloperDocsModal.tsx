import React from 'react';
import { X, Code, Cpu, Server, Database, Layers, Zap } from 'lucide-react';
import { Button } from '../atoms/Button';
import { apiPerfLogs } from '../../lib/api';

export interface DeveloperDocsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeveloperDocsModal: React.FC<DeveloperDocsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
            <Code size={24} />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Technical Documentation & Architecture</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">System specification for future developers and maintainers.</p>
          </div>
        </div>

        <div className="space-y-6 text-xs sm:text-sm">
          {/* 1. Atomic Design Structure */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400 font-bold">
              <Layers size={18} />
              <h4 className="text-sm">1. Atomic Design Component Hierarchy</h4>
            </div>
            <ul className="space-y-1.5 text-slate-600 dark:text-slate-300 font-mono text-xs">
              <li>• <strong className="text-blue-500">Atoms</strong> (/src/components/atoms/): Button, Badge, Typography, Input, ThemeToggle, LanguageSwitcher</li>
              <li>• <strong className="text-purple-500">Molecules</strong> (/src/components/molecules/): NavMenu, StatCard, ServiceCard, WhyUsCard, ProjectCard, AIAssistantWidget, DashboardChart</li>
              <li>• <strong className="text-emerald-500">Organisms</strong> (/src/components/organisms/): Navbar, HeroSection, WhyUsSection, ServicesSection, FeaturedProjectsSection, CtaSection, Footer, ContactModal</li>
              <li>• <strong className="text-amber-500">Templates & Pages</strong>: LandingPageTemplate, LandingPage</li>
            </ul>
          </div>

          {/* 2. Gemini API Token Limits */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-2 text-amber-600 dark:text-amber-400 font-bold">
              <Zap size={18} />
              <h4 className="text-sm">2. Google Gemini API Strict Output Token Limits</h4>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              To satisfy ultra-fast web performance requirements (&lt; 250 tokens per request), the backend endpoint <code className="bg-slate-200 dark:bg-slate-900 px-1 py-0.5 rounded font-mono text-xs">POST /api/ai-assistant</code> explicitly configures:
            </p>
            <pre className="mt-2 p-3 rounded-xl bg-slate-900 text-amber-300 font-mono text-[11px] overflow-x-auto">
{`config: {
  maxOutputTokens: 250,
  temperature: 0.7
}`}
            </pre>
          </div>

          {/* 3. Caching Layer */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400 font-bold">
              <Server size={18} />
              <h4 className="text-sm">3. Express API Caching & X-Cache-Status Headers</h4>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              Server API routes utilize an in-memory TTL cache store (60s default). Responses include custom <code className="bg-slate-200 dark:bg-slate-900 px-1.5 py-0.5 rounded font-mono text-xs">X-Cache-Status: HIT | MISS</code> headers.
            </p>

            {/* Live Performance Log */}
            <div className="bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">Live API Telemetry Log</span>
              {apiPerfLogs.length === 0 ? (
                <span className="text-xs text-slate-400 italic">No API requests recorded yet.</span>
              ) : (
                <div className="space-y-1 font-mono text-[11px]">
                  {apiPerfLogs.slice(0, 4).map((log, idx) => (
                    <div key={idx} className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                      <span>{log.endpoint}</span>
                      <span className="flex gap-2">
                        <span className={log.isCached ? 'text-emerald-500 font-bold' : 'text-blue-500'}>
                          {log.isCached ? 'CACHE HIT' : 'NETWORK MISS'}
                        </span>
                        <span className="text-slate-400">{log.responseMs}ms</span>
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 4. Firebase Persistence */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-2 text-purple-600 dark:text-purple-400 font-bold">
              <Database size={18} />
              <h4 className="text-sm">4. Firebase Firestore & Auth Layer</h4>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Integrated in <code className="bg-slate-200 dark:bg-slate-900 px-1 py-0.5 rounded font-mono text-xs">/src/lib/firebase.ts</code>. Supports Google OAuth, Email, and Guest Demo sessions. Firestore stores project inquiries with automatic LocalStorage fallback when offline.
            </p>
          </div>

          {/* 5. Content Helper & Maintenance Guide */}
          <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 mb-2 text-blue-700 dark:text-blue-300 font-bold">
              <Code size={18} />
              <h4 className="text-sm">5. Content Management & Helper Guide</h4>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
              All company details, team members (including AI UI/UX Designer), services, and emails (<code className="bg-white dark:bg-slate-900 px-1 py-0.5 rounded font-mono text-[11px]">hanshiatech@gmail.com</code>) are centralized in <code className="bg-white dark:bg-slate-900 px-1 py-0.5 rounded font-mono text-[11px]">/src/config/site.ts</code>. Refer to <code className="bg-white dark:bg-slate-900 px-1 py-0.5 rounded font-mono text-[11px]">/README.md</code> for step-by-step editing instructions.
            </p>
          </div>

        </div>

        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <Button onClick={onClose} variant="primary">
            Close Technical Docs
          </Button>
        </div>

      </div>
    </div>
  );
};
