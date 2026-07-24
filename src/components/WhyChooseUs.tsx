import React, { useState } from 'react';
import { WHY_FEATURES } from '../data/preschoolData';
import { WhyFeature } from '../types';
import {
  Award,
  ShieldCheck,
  Video,
  Sparkles,
  Monitor,
  Gamepad2,
  Sun,
  MessageCircle,
  UserCheck,
  Sparkle,
  CheckCircle2,
  X
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<WhyFeature | null>(null);

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return Award;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Video':
        return Video;
      case 'Sparkles':
        return Sparkles;
      case 'Monitor':
        return Monitor;
      case 'Gamepad2':
        return Gamepad2;
      case 'Sun':
        return Sun;
      case 'MessageCircle':
        return MessageCircle;
      case 'UserCheck':
        return UserCheck;
      case 'Sparkle':
        return Sparkle;
      default:
        return Sparkles;
    }
  };

  // Duplicate the list 3 times to ensure a seamlessly infinite loop
  const marqueeFeatures = [...WHY_FEATURES, ...WHY_FEATURES, ...WHY_FEATURES];

  return (
    <section id="why-us" className="relative py-20 lg:py-28 bg-gradient-to-b from-sky-50/30 via-white to-blue-50/20 overflow-hidden">
      
      {/* Background glowing blurred circles */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>The Little's Heaven Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Parents Choose Us <br />
            <span className="text-gradient-primary">Every Single Day</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A continuous stream of excellence, safety, and innovation. Hover over any feature pill to pause and inspect our world-class facilities.
          </p>
        </div>

      </div>

      {/* CONTINUOUS MOVING MARQUEE LINE (Front to Back Continuous Infinite Motion) */}
      <div className="relative w-full overflow-hidden py-6 border-y border-white/80 bg-white/40 backdrop-blur-md shadow-inner">
        
        {/* Gradient Fades on Left & Right Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Animated Marquee Track with w-max for infinite seamless ribbon */}
        <div className="flex items-center gap-6 animate-marquee-left whitespace-nowrap py-2 w-max cursor-pointer">
          {marqueeFeatures.map((feat, index) => {
            const IconComp = getFeatureIcon(feat.icon);
            return (
              <div
                key={`${feat.id}-${index}`}
                onClick={() => setSelectedFeature(feat)}
                id={`why-pill-${feat.id}-${index}`}
                className="inline-flex items-center gap-4 px-6 py-4 rounded-[28px] bg-white/85 backdrop-blur-2xl border border-white/95 shadow-[0_8px_24px_rgba(37,99,235,0.08)] hover:bg-white hover:border-blue-400 hover:shadow-[0_12px_36px_rgba(37,99,235,0.2)] hover:scale-105 active:scale-95 transition-all duration-300 group shrink-0"
              >
                {/* Glowing Icon Badge */}
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:rotate-12 transition-transform">
                  <IconComp className="w-5.5 h-5.5" />
                </div>

                {/* Text & Badge */}
                <div>
                  <div className="text-[11px] font-extrabold text-blue-600 uppercase tracking-widest flex items-center gap-1">
                    <span>{feat.badge}</span>
                  </div>
                  <div className="text-sm font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {feat.title}
                  </div>
                </div>

                {/* Subtle Hover Arrow indicator */}
                <span className="text-sm font-bold text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all ml-1">
                  →
                </span>
              </div>
            );
          })}
        </div>

      </div>

      {/* Feature Deep Dive Modal / Popover */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg glass-card bg-white/95 backdrop-blur-2xl border border-white/95 rounded-[32px] p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedFeature(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-lg">
                {React.createElement(getFeatureIcon(selectedFeature.icon), { className: 'w-6 h-6' })}
              </div>

              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">{selectedFeature.badge}</span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-0.5">{selectedFeature.title}</h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">{selectedFeature.description}</p>

              <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-100 flex items-center gap-2.5 text-xs font-semibold text-blue-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{selectedFeature.highlight}</span>
              </div>

              <div className="pt-2 text-right">
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
