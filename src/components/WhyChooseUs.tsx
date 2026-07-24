import React from 'react';
import { WHY_FEATURES } from '../data/preschoolData';
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
  Sparkle
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {

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
            A continuous stream of excellence, safety, and innovation across our world-class facilities.
          </p>
        </div>

      </div>

      {/* CONTINUOUS MOVING MARQUEE LINE (Clean background-less ribbon) */}
      <div className="relative w-full overflow-hidden py-6">
        
        {/* Gradient Fades on Left & Right Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#F8FCFF] via-[#F8FCFF]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#F8FCFF] via-[#F8FCFF]/80 to-transparent z-10 pointer-events-none" />

        {/* Animated Marquee Track */}
        <div className="flex items-center gap-6 animate-marquee-left whitespace-nowrap py-3 w-max select-none">
          {marqueeFeatures.map((feat, index) => {
            const IconComp = getFeatureIcon(feat.icon);
            return (
              <div
                key={`${feat.id}-${index}`}
                id={`why-pill-${feat.id}-${index}`}
                className="inline-flex items-center gap-4 px-6 py-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm shadow-slate-200/50 hover:shadow-md hover:border-blue-200 transition-all duration-300 shrink-0"
              >
                {/* Icon Badge */}
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-xs">
                  <IconComp className="w-5 h-5" />
                </div>

                {/* Text & Badge */}
                <div>
                  <div className="text-[10px] font-extrabold text-blue-600 uppercase tracking-widest">
                    {feat.badge}
                  </div>
                  <div className="text-sm font-extrabold text-slate-900">
                    {feat.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
