import React from 'react';

export const DashboardChart: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {/* Line Chart */}
      <div className="md:col-span-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Project Overview</span>
          <span className="text-[10px] text-slate-500 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-2 py-0.5 font-medium">This Year ▾</span>
        </div>
        
        {/* SVG Curve Line Chart */}
        <div className="relative h-28 w-full flex items-end">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Grid lines */}
            <line x1="0" y1="20" x2="300" y2="20" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
            <line x1="0" y1="40" x2="300" y2="40" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
            <line x1="0" y1="60" x2="300" y2="60" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />

            {/* Area path */}
            <path
              d="M 0 60 Q 30 45, 60 55 T 120 30 T 180 45 T 240 25 T 300 10 L 300 80 L 0 80 Z"
              fill="url(#chartGradient)"
            />
            {/* Stroke path */}
            <path
              d="M 0 60 Q 30 45, 60 55 T 120 30 T 180 45 T 240 25 T 300 10"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Active Data Point */}
            <circle cx="300" cy="10" r="4" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
          </svg>
        </div>

        {/* X Axis Labels */}
        <div className="flex justify-between text-[10px] text-slate-400 dark:text-slate-500 mt-2 font-medium">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
        </div>
      </div>

      {/* Donut Chart */}
      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-2">Top Services</span>
        <div className="flex items-center gap-3">
          {/* SVG Donut */}
          <div className="relative w-16 h-16 shrink-0">
            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="5"
                className="dark:stroke-slate-800"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="5"
                strokeDasharray="45, 100"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="5"
                strokeDasharray="30, 100"
                strokeDashoffset="-45"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#10B981"
                strokeWidth="5"
                strokeDasharray="15, 100"
                strokeDashoffset="-75"
              />
            </svg>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-1 text-[10px] w-full">
            <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span> Web App</span>
              <span className="font-bold">45%</span>
            </div>
            <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-purple-500 inline-block"></span> Mobile App</span>
              <span className="font-bold">30%</span>
            </div>
            <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span> SaaS</span>
              <span className="font-bold">15%</span>
            </div>
            <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-400 inline-block"></span> Others</span>
              <span className="font-bold">10%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
