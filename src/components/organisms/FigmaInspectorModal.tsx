import React, { useState } from 'react';
import { X, Layout, Copy, Check, Palette, Type, Space, Box } from 'lucide-react';
import { DESIGN_TOKENS } from '../../design-system/tokens';
import { Button } from '../atoms/Button';

export interface FigmaInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FigmaInspectorModal: React.FC<FigmaInspectorModalProps> = ({ isOpen, onClose }) => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!isOpen) return null;

  const categories = ['All', 'Color', 'Typography', 'Spacing', 'Border Radius', 'Shadow'];

  const filteredTokens = selectedCategory === 'All'
    ? DESIGN_TOKENS
    : DESIGN_TOKENS.filter((t) => t.category === selectedCategory);

  const handleCopy = (text: string, tokenName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(tokenName);
    setTimeout(() => setCopiedToken(null), 2000);
  };

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
          <div className="p-3 rounded-2xl bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">
            <Layout size={24} />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Figma Design System Inspector</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Reusable Atomic tokens matching Figma specifications.</p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap cursor-pointer transition-colors ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tokens List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTokens.map((token) => (
            <div
              key={token.name}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">{token.name}</span>
                  <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded-md font-semibold">
                    {token.figmaName}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{token.description}</p>
              </div>

              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between font-mono text-xs">
                <span className="text-slate-800 dark:text-slate-200 truncate mr-2">{token.value}</span>
                <button
                  onClick={() => handleCopy(token.value, token.name)}
                  className="p-1.5 text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer shrink-0 transition-colors"
                  title="Copy token value"
                >
                  {copiedToken === token.name ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <Button onClick={onClose} variant="primary">
            Close Inspector
          </Button>
        </div>

      </div>
    </div>
  );
};
