import React from 'react';
import { DAILY_TIMELINE } from '../data/preschoolData';
import {
  DoorOpen,
  Users,
  Laptop,
  Apple,
  Trees,
  Palette,
  BookOpen,
  Bus,
  Clock,
  Sparkles
} from 'lucide-react';

const ACTIVITY_CONFIG: Record<
  string,
  {
    icon: React.FC<{ className?: string }>;
    color: string;
    bg: string;
    glow: string;
  }
> = {
  '1': {
    icon: DoorOpen,
    color: 'text-amber-500',
    bg: 'from-amber-100 via-orange-50 to-amber-200/60',
    glow: 'from-amber-400/40 via-orange-300/30 to-yellow-400/40',
  },
  '2': {
    icon: Users,
    color: 'text-sky-500',
    bg: 'from-sky-100 via-cyan-50 to-blue-200/60',
    glow: 'from-sky-400/40 via-cyan-300/30 to-blue-400/40',
  },
  '3': {
    icon: Laptop,
    color: 'text-blue-600',
    bg: 'from-blue-100 via-indigo-50 to-sky-200/60',
    glow: 'from-blue-500/40 via-indigo-400/30 to-sky-400/40',
  },
  '4': {
    icon: Apple,
    color: 'text-emerald-500',
    bg: 'from-emerald-100 via-teal-50 to-green-200/60',
    glow: 'from-emerald-400/40 via-teal-300/30 to-green-400/40',
  },
  '5': {
    icon: Trees,
    color: 'text-teal-500',
    bg: 'from-teal-100 via-cyan-50 to-emerald-200/60',
    glow: 'from-teal-400/40 via-cyan-300/30 to-emerald-400/40',
  },
  '6': {
    icon: Palette,
    color: 'text-purple-500',
    bg: 'from-purple-100 via-fuchsia-50 to-pink-200/60',
    glow: 'from-purple-400/40 via-fuchsia-300/30 to-pink-400/40',
  },
  '7': {
    icon: BookOpen,
    color: 'text-indigo-600',
    bg: 'from-indigo-100 via-sky-50 to-purple-200/60',
    glow: 'from-indigo-400/40 via-sky-300/30 to-blue-400/40',
  },
  '8': {
    icon: Bus,
    color: 'text-rose-500',
    bg: 'from-rose-100 via-pink-50 to-red-200/60',
    glow: 'from-rose-400/40 via-pink-300/30 to-red-400/40',
  },
};

const SHORT_TITLES: Record<string, string> = {
  '1': 'Welcome',
  '2': 'Circle Time',
  '3': 'Learning',
  '4': 'Snack Break',
  '5': 'Outdoor Play',
  '6': 'Creative Art',
  '7': 'Story Time',
  '8': 'Goodbye',
};

export const TimelineSection: React.FC = () => {
  return (
    <section id="activities" className="relative py-16 lg:py-24 bg-gradient-to-b from-white via-blue-50/20 to-sky-50/30 overflow-hidden">
      
      {/* Background ambient floating bubbles and subtle glows */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-8 left-1/4 w-10 h-10 rounded-full bg-sky-300/30 blur-sm animate-float-slow pointer-events-none" />
      <div className="absolute bottom-12 right-1/3 w-14 h-14 rounded-full bg-blue-300/20 blur-md animate-float-reverse pointer-events-none" />
      <div className="absolute top-1/3 right-12 w-6 h-6 rounded-full bg-indigo-300/25 blur-xs animate-pulse pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase shadow-xs">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>Daily Routine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Daily Routine <br />
            <span className="text-gradient-primary">Playful & Gentle Rhythm</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            A harmonious, joyful day designed for active discovery and creative play.
          </p>
        </div>

        {/* Compact Glassmorphism Stage Card */}
        <div className="glass-card bg-white/80 backdrop-blur-2xl border border-white/90 rounded-[32px] p-5 sm:p-8 lg:p-10 shadow-[0_12px_40px_rgba(37,99,235,0.06)] relative overflow-hidden">
          
          {/* DESKTOP & LAPTOP SINGLE HORIZONTAL ROW (ALL 8 ACTIVITIES) */}
          <div className="hidden lg:block relative py-12">
            
            {/* Dotted SVG Wave Line with Prominent Gradient & Moving Glitter */}
            <div className="absolute inset-0 pointer-events-none z-0 flex items-center px-4">
              <svg className="w-full h-32 overflow-visible drop-shadow-[0_2px_8px_rgba(37,99,235,0.3)]" viewBox="0 0 1200 120" fill="none" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="richDottedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.9" />
                    <stop offset="45%" stopColor="#38bdf8" stopOpacity="1" />
                    <stop offset="80%" stopColor="#06b6d4" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                
                {/* Dotted Base Wave Path (Thicker 3px) */}
                <path
                  d="M 0 60 C 37.5 30, 37.5 30, 75 30 C 150 30, 150 90, 225 90 C 300 90, 300 30, 375 30 C 450 30, 450 90, 525 90 C 600 90, 600 30, 675 30 C 750 30, 750 90, 825 90 C 900 90, 900 30, 975 30 C 1050 30, 1050 90, 1125 90 C 1162.5 90, 1162.5 60, 1200 60"
                  stroke="url(#richDottedGradient)"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                />

                {/* Animated Moving Dash Flow Overlay for Glitter Particles */}
                <path
                  d="M 0 60 C 37.5 30, 37.5 30, 75 30 C 150 30, 150 90, 225 90 C 300 90, 300 30, 375 30 C 450 30, 450 90, 525 90 C 600 90, 600 30, 675 30 C 750 30, 750 90, 825 90 C 900 90, 900 30, 975 30 C 1050 30, 1050 90, 1125 90 C 1162.5 90, 1162.5 60, 1200 60"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  strokeDasharray="3 6"
                  strokeLinecap="round"
                  className="animate-wave-flow opacity-90"
                />

                {/* Glowing Dots & Twinkling Sparkles on Wave Centers (~20% Larger) */}
                {[
                  { x: 75, y: 30 },
                  { x: 225, y: 90 },
                  { x: 375, y: 30 },
                  { x: 525, y: 90 },
                  { x: 675, y: 30 },
                  { x: 825, y: 90 },
                  { x: 975, y: 30 },
                  { x: 1125, y: 90 },
                ].map((pt, i) => (
                  <g key={`dot-${i}`}>
                    <circle cx={pt.x} cy={pt.y} r="6" fill="#38bdf8" className="animate-ping opacity-60" />
                    <circle cx={pt.x} cy={pt.y} r="4.2" fill="#2563eb" />
                    {i % 2 === 0 && (
                      <path
                        d={`M ${pt.x} ${pt.y - 12} L ${pt.x + 2} ${pt.y - 8} L ${pt.x + 6} ${pt.y - 8} L ${pt.x + 3} ${pt.y - 5} L ${pt.x + 4} ${pt.y - 1} L ${pt.x} ${pt.y - 3} L ${pt.x - 4} ${pt.y - 1} L ${pt.x - 3} ${pt.y - 5} L ${pt.x - 6} ${pt.y - 8} L ${pt.x - 2} ${pt.y - 8} Z`}
                        fill="#06b6d4"
                        className="animate-pulse opacity-95"
                        transform={`scale(0.7) translate(${pt.x * 0.43}, ${pt.y * 0.43})`}
                      />
                    )}
                  </g>
                ))}
              </svg>
            </div>

            {/* 8 Horizontal Activity Nodes in 1 Line */}
            <div className="grid grid-cols-8 gap-1.5 relative z-10 items-center">
              {DAILY_TIMELINE.map((step, index) => {
                const isEven = index % 2 === 0; // Crest (Top) vs Trough (Bottom)
                const config = ACTIVITY_CONFIG[step.id] || {
                  icon: Sparkles,
                  color: 'text-blue-600',
                  bg: 'from-blue-50 to-sky-100',
                  glow: 'from-blue-400/40 to-sky-400/40',
                };
                const IconComp = config.icon;
                const shortTitle = SHORT_TITLES[step.id] || step.title;

                return (
                  <div
                    key={step.id}
                    className={`flex flex-col items-center text-center transition-all duration-300 group ${
                      isEven ? '-translate-y-10' : 'translate-y-10'
                    }`}
                  >
                    {/* Glassmorphism Circular Icon Container with Number Badge */}
                    <div className={`relative cursor-pointer transition-transform duration-300 group-hover:scale-105 ${isEven ? 'animate-float-slow' : 'animate-float-reverse'}`}>
                      
                      {/* Soft Glow Halo behind icon */}
                      <div className={`absolute -inset-2 bg-gradient-to-tr ${config.glow} rounded-full blur-md opacity-30 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`} />

                      {/* Small Step Number Badge above icon */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20 w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white text-[10px] font-black flex items-center justify-center shadow-xs">
                        {index + 1}
                      </div>

                      {/* Glass Circular Icon Pod */}
                      <div className="relative w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-white/95 backdrop-blur-xl border border-white/90 shadow-md group-hover:shadow-sky-300/50 flex items-center justify-center transition-all duration-300">
                        <div className={`w-11 h-11 xl:w-13 xl:h-13 rounded-full bg-gradient-to-br ${config.bg} flex items-center justify-center shadow-inner`}>
                          <IconComp className={`w-6 h-6 xl:w-7 xl:h-7 ${config.color} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`} />
                        </div>
                      </div>
                    </div>

                    {/* Short Activity Heading Only (1 line) */}
                    <h4 className="text-xs font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors tracking-tight max-w-[100px] truncate mt-2.5">
                      {shortTitle}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>

          {/* TABLET & MOBILE 2-COLUMN CONTINUOUS DOTTED WAVE LAYOUT */}
          <div className="lg:hidden relative py-4 sm:py-6">
            
            {/* Continuous SVG Serpentine Dotted Wave Path Connecting 1->2->3->4->5->6->7->8 */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient id="mobileDottedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
                  <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.95" />
                  <stop offset="70%" stopColor="#6366f1" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Dotted Base Wave Path */}
              <path
                d="M 25 12.5 L 75 12.5 C 95 12.5, 5 37.5, 25 37.5 L 75 37.5 C 95 37.5, 5 62.5, 25 62.5 L 75 62.5 C 95 62.5, 5 87.5, 25 87.5 L 75 87.5"
                stroke="url(#mobileDottedGradient)"
                strokeWidth="1.5"
                strokeDasharray="2 2"
                strokeLinecap="round"
              />

              {/* Moving Dash Flow for Particle Motion */}
              <path
                d="M 25 12.5 L 75 12.5 C 95 12.5, 5 37.5, 25 37.5 L 75 37.5 C 95 37.5, 5 62.5, 25 62.5 L 75 62.5 C 95 62.5, 5 87.5, 25 87.5 L 75 87.5"
                stroke="#38bdf8"
                strokeWidth="1"
                strokeDasharray="1.5 3"
                strokeLinecap="round"
                className="animate-wave-flow opacity-80"
              />

              {/* Glowing Dots at Card Node Centers */}
              {[
                { x: 25, y: 12.5 },
                { x: 75, y: 12.5 },
                { x: 25, y: 37.5 },
                { x: 75, y: 37.5 },
                { x: 25, y: 62.5 },
                { x: 75, y: 62.5 },
                { x: 25, y: 87.5 },
                { x: 75, y: 87.5 },
              ].map((pt, i) => (
                <g key={`mob-dot-${i}`}>
                  <circle cx={pt.x} cy={pt.y} r="1.8" fill="#38bdf8" className="animate-ping opacity-30" />
                  <circle cx={pt.x} cy={pt.y} r="1" fill="#2563eb" />
                </g>
              ))}
            </svg>

            {/* 2 Activity Cards Per Row Grid */}
            <div className="grid grid-cols-2 gap-3.5 sm:gap-5 relative z-10">
              {DAILY_TIMELINE.map((step, index) => {
                const config = ACTIVITY_CONFIG[step.id] || {
                  icon: Sparkles,
                  color: 'text-blue-600',
                  bg: 'from-blue-50 to-sky-100',
                  glow: 'from-blue-400/40 to-sky-400/40',
                };
                const IconComp = config.icon;
                const shortTitle = SHORT_TITLES[step.id] || step.title;

                return (
                  <div
                    key={step.id}
                    className="glass-card p-3 sm:p-4 rounded-2xl border border-white/95 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center text-center bg-white/90 backdrop-blur-md relative group hover:scale-[1.03] active:scale-[0.98]"
                  >
                    {/* Step Number Badge */}
                    <div className="absolute top-2 left-2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white text-[10px] font-black flex items-center justify-center shadow-2xs">
                      {index + 1}
                    </div>

                    {/* Circular Glass Icon Bubble with Glow Halo */}
                    <div className="relative my-1">
                      <div className={`absolute -inset-1.5 bg-gradient-to-tr ${config.glow} rounded-full blur-xs opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />
                      <div className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${config.bg} border border-white shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComp className={`w-6 h-6 sm:w-7 sm:h-7 ${config.color} group-hover:rotate-6 transition-transform duration-300`} />
                      </div>
                    </div>

                    {/* Short Heading Only */}
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors tracking-tight leading-snug line-clamp-1 mt-1 px-1">
                      {shortTitle}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


