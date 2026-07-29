import React, { useState } from 'react';
import { Sparkles, Send, Cpu, Zap } from 'lucide-react';
import { askAiAssistant } from '../../lib/api';
import { AIResponse, Language } from '../../types';
import { TRANSLATIONS } from '../../i18n/translations';

export interface AIAssistantWidgetProps {
  lang: Language;
}

export const AIAssistantWidget: React.FC<AIAssistantWidgetProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<AIResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    try {
      const res = await askAiAssistant(prompt);
      setResponse(res);
    } catch (err: any) {
      setError(err.message || 'Failed to communicate with AI Assistant');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 rounded-xl bg-gradient-to-r from-blue-600/90 to-indigo-600/90 text-white shadow-lg border border-blue-400/30">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-white/20 backdrop-blur-md">
            <Sparkles size={16} className="text-amber-300 animate-pulse" />
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-tight">{t.aiBadgeTitle}</h4>
            <p className="text-[10px] text-blue-100/80">{t.aiBadgeSubtext}</p>
          </div>
        </div>
        <span className="text-[10px] bg-white/10 border border-white/20 px-2 py-0.5 rounded-full font-mono flex items-center gap-1">
          <Zap size={10} className="text-amber-300" />
          <span>{lang === 'id' ? 'Maks Output: 250 Token' : 'Max Output: 250 Tokens'}</span>
        </span>
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-3">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={t.askAiPlaceholder}
          className="w-full bg-white/10 dark:bg-black/20 text-white placeholder-blue-100/60 text-xs rounded-lg border border-white/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300/50"
        />
        <button
          type="submit"
          disabled={isLoading || !prompt.trim()}
          className="px-3 py-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs rounded-lg transition-colors flex items-center gap-1 shrink-0 disabled:opacity-50 cursor-pointer"
        >
          {isLoading ? <Cpu size={14} className="animate-spin" /> : <Send size={14} />}
          <span className="hidden sm:inline">{t.askAiButton}</span>
        </button>
      </form>

      {error && <p className="text-[11px] text-rose-200 mt-2 bg-rose-900/40 p-2 rounded-md">{error}</p>}

      {response && (
        <div className="mt-3 p-3 rounded-lg bg-white/10 border border-white/15 text-xs animate-in fade-in slide-in-from-top-1 duration-200">
          <p className="text-slate-100 leading-relaxed font-sans">{response.answer}</p>
          <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-blue-100/70 font-mono">
            <span>{t.responseTokens}: <strong className="text-amber-300">{response.tokensUsed}</strong> / {response.maxTokensAllowed}</span>
            <span>{lang === 'id' ? 'Latensi:' : 'Latency:'} {response.latencyMs}ms</span>
          </div>
        </div>
      )}
    </div>
  );
};
