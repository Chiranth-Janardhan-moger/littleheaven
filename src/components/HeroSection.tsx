import React from 'react';
import { HERO_MAIN_IMAGE, HERO_STATS } from '../data/preschoolData';
import {
  ShieldCheck,
  Brain,
  Palette,
  Award,
  Sparkles,
  GraduationCap,
  ArrowRight,
  Heart,
  Star,
  CheckCircle2
} from 'lucide-react';

interface HeroSectionProps {
  onOpenEnroll: () => void;
  onExplorePrograms: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnroll, onExplorePrograms }) => {
  const floatingFeatures = [
    {
      title: 'Safe Environment',
      icon: ShieldCheck,
      color: 'from-blue-500 to-sky-400',
      position: 'top-4 -left-6 sm:-left-10',
      anim: 'animate-float-slow'
    },
    {
      title: 'Smart Learning',
      icon: Brain,
      color: 'from-sky-400 to-cyan-400',
      position: 'top-20 -right-6 sm:-right-10',
      anim: 'animate-float-reverse'
    },
    {
      title: 'Creative Activities',
      icon: Palette,
      color: 'from-blue-600 to-indigo-500',
      position: 'bottom-24 -left-6 sm:-left-10',
      anim: 'animate-float-reverse'
    },
    {
      title: 'Certified Teachers',
      icon: Award,
      color: 'from-cyan-500 to-blue-500',
      position: 'bottom-6 -right-6 sm:-right-10',
      anim: 'animate-float-slow'
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center bg-gradient-to-b from-sky-50/60 via-blue-50/30 to-white"
    >
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-12 left-10 w-96 h-96 bg-gradient-to-br from-sky-200/50 to-blue-300/40 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-gradient-to-tl from-blue-200/50 via-cyan-100/60 to-transparent rounded-full blur-3xl pointer-events-none animate-float-reverse" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-gradient-to-tr from-sky-100/70 to-indigo-100/50 rounded-full blur-2xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy, CTAs, Stats */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-white/90 backdrop-blur-xl shadow-sm shadow-blue-500/5">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping" />
              <span className="text-xs font-semibold tracking-wide text-blue-700 uppercase">
                Award-Winning Early Childhood Academy
              </span>
              <Sparkles className="w-3.5 h-3.5 text-sky-500 ml-1" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Where Little <br className="hidden sm:inline" />
              <span className="text-gradient-primary">Dreams Begin</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Experience an ultra-modern, glassmorphic learning sanctuary. We foster natural curiosity, emotional intelligence, and playful discovery in a 100% safe, loving environment.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenEnroll}
                id="hero-enroll-cta"
                className="reflection-shine w-full sm:w-auto px-9 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 border border-white/40 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Quick trust checkmarks removed per user request */}

            {/* Floating Statistics Grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.id}
                  className="glass-card glass-card-hover p-4 rounded-3xl text-center flex flex-col items-center justify-center relative overflow-hidden"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 tracking-tight flex items-center justify-center">
                    <span>{stat.number}</span>
                    <span className="text-sky-500">{stat.suffix}</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-800 mt-0.5">{stat.label}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{stat.sublabel}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase 2x2 Grid with Alternating Floating Animation */}
          <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0 py-2">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md lg:max-w-none">
              
              {/* Photo 1: Top Left - moves upward (animate-float-slow) */}
              <div className="relative animate-float-slow rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-[0_12px_30px_rgba(37,99,235,0.12)] border border-white/90 bg-white/80 group aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop"
                  alt="Toddler learning with wooden blocks"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
                
                {/* Letter 'A' Sticker */}
                <div className="absolute top-3 left-3 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-sky-500 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg -rotate-12 border-2 border-white">
                  A
                </div>
              </div>

              {/* Photo 2: Top Right - moves downward (animate-float-reverse) */}
              <div className="relative animate-float-reverse rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-[0_12px_30px_rgba(37,99,235,0.12)] border border-white/90 bg-white/80 group aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop"
                  alt="Smiling preschool boy with backpack"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
                
                {/* Lightbulb Sticker */}
                <div className="absolute top-3 right-3 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-amber-400 text-amber-950 rounded-2xl flex items-center justify-center shadow-lg rotate-12 border-2 border-white">
                  <span className="text-xl">💡</span>
                </div>
              </div>

              {/* Photo 3: Bottom Left - moves upward together with Top Left (animate-float-slow) */}
              <div className="relative animate-float-slow rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-[0_12px_30px_rgba(37,99,235,0.12)] border border-white/90 bg-white/80 group aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop"
                  alt="Toddler girl playing with building block"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
                
                {/* Letter 'B' / Toy Sticker */}
                <div className="absolute bottom-3 left-3 z-10 w-9 h-9 sm:w-11 sm:h-11 bg-rose-500 text-white rounded-2xl flex items-center justify-center font-black text-lg shadow-lg -rotate-6 border-2 border-white">
                  B
                </div>
              </div>

              {/* Photo 4: Bottom Right - moves downward together with Top Right (animate-float-reverse) */}
              <div className="relative animate-float-reverse rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-[0_12px_30px_rgba(37,99,235,0.12)] border border-white/90 bg-white/80 group aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=800&auto=format&fit=crop"
                  alt="Boy playing with creative toy set"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
