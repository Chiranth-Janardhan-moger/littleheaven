import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Star, Heart, Sun, Cloud, Smile, Palette, Compass, Flower2, Footprints } from 'lucide-react';

/**
 * Divider 1: Home -> About (HeroToMissionDivider)
 * Concept: Large flowing ocean wave with glowing blue gradient, layered waves, dotted particles, floating bubbles, subtle sparkles.
 */
export const HeroToMissionDivider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-10 -mt-2 pointer-events-none">
      {/* Soft Blue & Cyan Glow Backdrop Aura */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-r from-blue-600/30 via-sky-400/35 to-cyan-500/30 blur-2xl opacity-80" />

      {/* Layered Ocean Wave SVG */}
      <svg
        className="relative block w-full h-20 sm:h-28 lg:h-36 drop-shadow-[0_6px_16px_rgba(37,99,235,0.25)]"
        viewBox="0 0 1440 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="oceanWaveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="oceanWaveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="waveDottedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        {/* Back Ocean Wave Layer */}
        <path
          d="M0,50 C320,130 640,10 960,100 C1200,140 1360,60 1440,80 L1440,160 L0,160 Z"
          fill="url(#oceanWaveGrad1)"
        />

        {/* Middle Ocean Wave Layer */}
        <path
          d="M0,80 C280,20 600,120 920,40 C1200,100 1360,30 1440,70 L1440,160 L0,160 Z"
          fill="url(#oceanWaveGrad2)"
        />

        {/* Foreground Crest Wave Layer */}
        <path
          d="M0,100 C360,30 720,130 1080,50 C1260,80 1380,40 1440,60 L1440,160 L0,160 Z"
          fill="#FFFFFF"
          fillOpacity="0.98"
        />

        {/* Dotted Wave Crest Particles Accent Line */}
        <path
          d="M0,98 C360,28 720,128 1080,48 C1260,78 1380,38 1440,58"
          stroke="url(#waveDottedGrad)"
          strokeWidth="3.5"
          strokeDasharray="6 8"
          strokeLinecap="round"
          className="animate-wave-flow opacity-90"
        />
      </svg>
    </div>
  );
};

/**
 * Divider 2: About -> Programs (MissionToProgramsDivider)
 * Concept: Sequential animated toddler footsteps walking from left to right as user scrolls into view.
 */
export const MissionToProgramsDivider: React.FC = () => {
  const steps = [
    { x: '5%', y: '45%', rotate: 75, scale: 0.85 },
    { x: '15%', y: '60%', rotate: 105, scale: 0.85 },
    { x: '25%', y: '40%', rotate: 78, scale: 0.9 },
    { x: '35%', y: '58%', rotate: 102, scale: 0.9 },
    { x: '45%', y: '42%', rotate: 76, scale: 0.95 },
    { x: '55%', y: '60%', rotate: 104, scale: 0.95 },
    { x: '65%', y: '40%', rotate: 78, scale: 1 },
    { x: '75%', y: '58%', rotate: 102, scale: 1 },
    { x: '85%', y: '42%', rotate: 75, scale: 1.05 },
    { x: '95%', y: '60%', rotate: 105, scale: 1.05 },
  ];

  return (
    <div className="relative w-full py-12 sm:py-16 overflow-hidden bg-gradient-to-b from-blue-50/20 via-sky-50/30 to-blue-50/20">
      
      {/* Soft Glow Horizon */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-16 bg-gradient-to-r from-blue-500/10 via-sky-400/20 to-cyan-500/10 blur-xl pointer-events-none" />

      {/* Walking Toddler Footsteps Trail */}
      <div className="relative mx-auto max-w-7xl px-4 h-16 sm:h-20 flex items-center justify-between pointer-events-none">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0, y: 15 }}
            whileInView={{ opacity: 1, scale: step.scale, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{
              duration: 0.4,
              delay: idx * 0.12,
              ease: [0.16, 1, 0.3, 1]
            }}
            style={{
              position: 'absolute',
              left: step.x,
              top: step.y,
              transform: `translate(-50%, -50%) rotate(${step.rotate}deg)`
            }}
            className="text-blue-600/80 drop-shadow-[0_4px_10px_rgba(37,99,235,0.22)]"
          >
            <Footprints className="w-6 h-6 sm:w-7 sm:h-7" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/**
 * Divider 3: Programs -> Daily Routine (ProgramsToTimelineDivider)
 * Concept: Ribbon-style wave flowing across the page. Gradient ribbon, dotted highlights, floating particles.
 */
export const ProgramsToTimelineDivider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-10 -mb-1 bg-blue-50/20">
      
      {/* Outer Blue Glow Layer */}
      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-r from-blue-600/25 via-sky-400/35 to-cyan-500/25 blur-xl" />

      {/* Floating Particles & Stars */}
      <div className="absolute top-4 inset-x-0 flex justify-between px-8 sm:px-28 z-20 pointer-events-none opacity-90">
        <Sparkles className="w-5 h-5 text-cyan-500 animate-float-slow drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-blue-300 shadow-md shadow-sky-500/20 text-xs font-extrabold text-blue-900">
          <Palette className="w-4 h-4 text-cyan-500 drop-shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
          <span>Interactive Routine Flow</span>
        </div>
        <Flower2 className="w-5 h-5 text-sky-400 animate-float-reverse hidden sm:block drop-shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
      </div>

      {/* Ribbon-Style Wave SVG */}
      <svg
        className="relative block w-full h-20 sm:h-28 lg:h-32 drop-shadow-[0_6px_16px_rgba(37,99,235,0.25)]"
        viewBox="0 0 1440 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ribbonMainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="ribbonShimmerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Back Ribbon Layer */}
        <path
          d="M0 30 C 360 110, 720 -10, 1080 90, 1440 20 L 1440 90 C 1080 160, 720 60, 360 140, 0 80 Z"
          fill="url(#ribbonMainGrad)"
        />

        {/* Ribbon Fold Shimmer */}
        <path
          d="M0 45 C 300 115, 650 10, 1000 95, 1440 35 L 1440 65 C 1000 125, 650 35, 300 130, 0 70 Z"
          fill="url(#ribbonShimmerGrad)"
        />

        {/* Dotted Ribbon Highlight Line */}
        <path
          d="M0 35 C 360 115, 720 -5, 1080 95, 1440 25"
          stroke="#ffffff"
          strokeWidth="3"
          strokeDasharray="6 6"
          strokeLinecap="round"
          className="animate-dash-flow opacity-90"
        />

        {/* Smooth Transition Fill into Next Section */}
        <path
          d="M0,90 C360,150 720,70 1080,120 L1440,80 L1440,140 L0,140 Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
};

/**
 * Divider 4: Daily Routine -> Why Choose Us (TimelineToWhyChooseUsDivider)
 * Concept: Cloud-style separator with fluffy cloud curves, bubbles, tiny hearts, stars, soft glow.
 */
export const TimelineToWhyChooseUsDivider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-10 -mt-1 -mb-1 bg-gradient-to-r from-blue-50/50 via-white to-sky-50/50">
      
      {/* Outer Glowing Halo Aura */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-20 bg-gradient-to-r from-blue-500/20 via-sky-400/30 to-cyan-500/20 blur-2xl pointer-events-none" />

      {/* Floating Fluffy Clouds, Hearts & Stars */}
      <div className="absolute inset-0 flex justify-around items-center px-6 sm:px-20 z-20 pointer-events-none">
        <Cloud className="w-7 h-7 text-sky-400/80 animate-float-slow drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
        <Heart className="w-5 h-5 text-pink-400 fill-pink-300 animate-bounce drop-shadow-[0_0_6px_rgba(244,114,182,0.8)]" />
        <Star className="w-5 h-5 text-amber-300 fill-amber-200 animate-pulse drop-shadow-[0_0_8px_rgba(252,211,77,0.8)]" />
        <div className="w-4 h-4 rounded-full bg-cyan-300 animate-ping opacity-70 shadow-[0_0_10px_rgba(6,182,212,0.9)]" />
        <Cloud className="w-8 h-8 text-blue-400/70 animate-float-reverse hidden sm:block drop-shadow-[0_0_10px_rgba(37,99,235,0.6)]" />
      </div>

      {/* Fluffy Cloud SVG Curve Path */}
      <svg
        className="relative block w-full h-20 sm:h-28 lg:h-32 text-sky-100/80 drop-shadow-[0_6px_16px_rgba(37,99,235,0.2)]"
        viewBox="0 0 1440 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,90 Q 60,30 120,90 Q 180,20 240,90 Q 300,40 360,90 Q 420,10 480,90 Q 540,30 600,90 Q 660,15 720,90 Q 780,35 840,90 Q 900,10 960,90 Q 1020,30 1080,90 Q 1140,20 1200,90 Q 1260,40 1320,90 Q 1380,15 1440,90 L 1440,140 L 0,140 Z"
          fill="#E0F2FE"
          fillOpacity="0.85"
        />
        <path
          d="M0,105 Q 60,50 120,105 Q 180,40 240,105 Q 300,60 360,105 Q 420,30 480,105 Q 540,50 600,105 Q 660,35 720,105 Q 780,55 840,105 Q 900,30 960,105 Q 1020,50 1080,105 Q 1140,40 1200,105 Q 1260,60 1320,105 Q 1380,35 1440,105 L 1440,140 L 0,140 Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
};

/**
 * Divider 5: Why Choose Us -> Gallery (WhyChooseUsToGalleryDivider)
 * Concept: Smooth abstract paint splash/blob with blue gradient, dotted texture, tiny sparkles.
 */
export const WhyChooseUsToGalleryDivider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-10 -mt-1 -mb-1">
      
      {/* Outer Blue Glow Aura */}
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-r from-blue-600/30 via-sky-400/40 to-cyan-500/30 blur-xl" />

      {/* Floating Sparkles & Compass Badge */}
      <div className="absolute top-4 inset-x-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="px-5 py-2 rounded-full bg-white/95 border border-blue-300 shadow-lg shadow-sky-500/25 text-xs font-extrabold text-blue-900 flex items-center gap-2">
          <Compass className="w-4 h-4 text-cyan-500 animate-spin-slow drop-shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
          <span>Moments of Joy & Discovery</span>
        </div>
      </div>

      {/* Abstract Paint Splash SVG with Pattern Texture */}
      <svg
        className="relative block w-full h-20 sm:h-28 lg:h-36 drop-shadow-[0_6px_16px_rgba(37,99,235,0.25)]"
        viewBox="0 0 1440 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="splashGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.85" />
          </linearGradient>

          <pattern id="splashDots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="8" cy="8" r="2" fill="#38bdf8" opacity="0.5" />
          </pattern>
        </defs>

        {/* Abstract Smooth Fluid Splash Path */}
        <path
          d="M0,40 C 220,130 380,-20 580,90 C 780,160 950,10 1140,90 C 1280,140 1380,30 1440,60 L 1440,150 L 0,150 Z"
          fill="url(#splashGrad)"
        />

        {/* Dotted Texture Overlay on Splash */}
        <path
          d="M0,40 C 220,130 380,-20 580,90 C 780,160 950,10 1140,90 C 1280,140 1380,30 1440,60 L 1440,150 L 0,150 Z"
          fill="url(#splashDots)"
        />

        {/* Foreground White Wave Transition */}
        <path
          d="M0,80 C 260,140 520,30 780,110 C 1040,160 1280,60 1440,90 L 1440,150 L 0,150 Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
};

/**
 * Divider 6: Gallery -> Reviews (GalleryToReviewsDivider)
 * Concept: Floating bubbles separator. Different sized circles, some outlined, some filled, tiny glowing particles.
 */
export const GalleryToReviewsDivider: React.FC = () => {
  return (
    <div className="relative w-full py-10 overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-sky-50/60">
      
      {/* Outer Blue Glow Aura */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-20 bg-gradient-to-r from-blue-500/20 via-sky-400/30 to-cyan-500/20 blur-2xl pointer-events-none" />

      {/* Array of Floating Glass Bubbles Across Section */}
      <div className="absolute inset-0 flex justify-around items-center px-4 sm:px-16 pointer-events-none z-10">
        <div className="w-12 h-12 rounded-full bg-cyan-400/30 border border-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.6)] animate-float-slow backdrop-blur-2xs" />
        <div className="w-6 h-6 rounded-full border-2 border-sky-400 animate-float-reverse opacity-80" />
        <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-300 shadow-[0_0_16px_rgba(37,99,235,0.5)] animate-float-slow backdrop-blur-2xs hidden sm:block" />
        <div className="w-8 h-8 rounded-full bg-sky-300/40 border border-white animate-pulse" />
        <div className="w-14 h-14 rounded-full border-2 border-cyan-400/80 bg-cyan-300/10 shadow-[0_0_14px_rgba(6,182,212,0.6)] animate-float-reverse backdrop-blur-2xs" />
        <div className="w-5 h-5 rounded-full bg-blue-400/50 animate-float-slow" />
      </div>

      {/* Center Glass pill Badge */}
      <div className="relative max-w-5xl mx-auto px-4 flex items-center justify-between z-20">
        <div className="w-16 sm:w-40 h-1 bg-gradient-to-r from-transparent via-sky-400 to-blue-600 rounded-full opacity-90 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />

        <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-blue-300 shadow-lg shadow-blue-500/20 text-xs font-extrabold text-slate-800">
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
          <span>Loved by 1,200+ Happy Families</span>
        </div>

        <div className="w-16 sm:w-40 h-1 bg-gradient-to-l from-transparent via-sky-400 to-blue-600 rounded-full opacity-90 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
      </div>

    </div>
  );
};

/**
 * Divider 7: Reviews -> Contact (ReviewsToEnquiryDivider)
 * Concept: Curved dotted wave / magical path. Moving dotted line, animated sparkles, gradient glow.
 */
export const ReviewsToContactDivider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-10 -mb-1 bg-white">
      
      {/* Soft Glow Backdrop */}
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-r from-blue-600/25 via-sky-400/35 to-cyan-500/25 blur-xl" />

      {/* Magical Flowing Path SVG */}
      <svg
        className="relative block w-full h-20 sm:h-28 lg:h-32 drop-shadow-[0_6px_16px_rgba(37,99,235,0.25)]"
        viewBox="0 0 1440 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="magicalPathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        {/* Translucent Wave Background */}
        <path
          d="M0,30 C360,110 720,-10 1080,80 C1260,115 1380,55 1440,40 L1440,130 L0,130 Z"
          fill="#F0F9FF"
        />

        {/* Animated Moving Dotted Line */}
        <path
          d="M0,28 C360,108 720,-12 1080,78 C1260,113 1380,53 1440,38"
          stroke="url(#magicalPathGrad)"
          strokeWidth="4"
          strokeDasharray="8 8"
          strokeLinecap="round"
          className="animate-dash-flow opacity-95"
        />
      </svg>

      {/* Center Floating Invitation Pill */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="px-5 py-2.5 rounded-full bg-white/95 border border-blue-300 shadow-xl shadow-sky-400/30 text-xs font-extrabold text-blue-900 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-500 animate-pulse drop-shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
          <span>Get in Touch With Us</span>
        </div>
      </div>

    </div>
  );
};

/**
 * Divider 8: Contact -> Footer (ContactToFooterDivider)
 * Concept: Ultra-clean smooth wave transition into dark navy footer (#0A1128).
 */
export const ContactToFooterDivider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-10 -mb-1 bg-[#F8FCFF]">
      
      {/* Layered Wave Transition into Dark Navy #0A1128 */}
      <svg
        className="relative block w-full h-16 sm:h-24 lg:h-32 text-[#0A1128]"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="footerWaveSoft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Soft Background Wave Layer */}
        <path
          d="M0,40 C320,100 640,0 960,70 C1280,120 1380,20 1440,50 L1440,120 L0,120 Z"
          fill="url(#footerWaveSoft)"
        />

        {/* Deep Navy Foreground Footer Wave */}
        <path
          d="M0,65 C360,125 720,25 1080,85 C1260,115 1380,45 1440,65 L1440,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

