import React from 'react';
import { HERO_STATS } from '../data/preschoolData';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card } from './ui/Card';

interface HeroSectionProps {
  onOpenEnroll: () => void;
  onExplorePrograms: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnroll }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center bg-gradient-to-b from-sky-50/70 via-blue-50/30 to-white"
    >
      {/* Soft Ambient Glowing Aura */}
      <div className="absolute top-12 left-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-sky-200/50 rounded-full blur-3xl pointer-events-none animate-float-reverse" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-cyan-100/60 rounded-full blur-2xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hallmark Asymmetric Hero Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Live Status Pill */}
            <Badge variant="primary" className="bg-white/90 border-white backdrop-blur-xl shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping mr-1" />
              <span>Admissions Open 2026-27</span>
              <Sparkles className="w-3.5 h-3.5 text-sky-500 ml-1" />
            </Badge>

            {/* Display Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Where Little <br className="hidden sm:inline" />
              <span className="text-gradient-primary">Dreams Begin</span>
            </h1>

            {/* Authentic Body Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Experience an ultra-modern, glassmorphic early learning sanctuary. We foster natural curiosity, emotional intelligence, and play-based discovery in a safe, loving environment.
            </p>

            {/* Hallmark 8-State Interactive CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button onClick={onOpenEnroll} id="hero-enroll-cta" size="lg" variant="primary">
                <span>Enroll Now</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Floating Statistics Bento Grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {HERO_STATS.map((stat) => (
                <Card key={stat.id} className="p-4 text-center flex flex-col items-center justify-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 tracking-tight flex items-center justify-center">
                    <span>{stat.number}</span>
                    <span className="text-sky-500">{stat.suffix}</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-800 mt-0.5">{stat.label}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{stat.sublabel}</div>
                </Card>
              ))}
            </div>

          </div>

          {/* Right Showcase Column */}
          <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0 py-2">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md lg:max-w-none">
              
              <div className="relative animate-float-slow rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-[0_12px_30px_rgba(37,99,235,0.12)] border border-white/90 bg-white/80 group aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop"
                  alt="Toddler learning with blocks"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-sky-500 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg -rotate-12 border-2 border-white">
                  A
                </div>
              </div>

              <div className="relative animate-float-reverse rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-[0_12px_30px_rgba(37,99,235,0.12)] border border-white/90 bg-white/80 group aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop"
                  alt="Smiling preschool student"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 right-3 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-amber-400 text-amber-950 rounded-2xl flex items-center justify-center shadow-lg rotate-12 border-2 border-white">
                  <span className="text-xl">💡</span>
                </div>
              </div>

              <div className="relative animate-float-slow rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-[0_12px_30px_rgba(37,99,235,0.12)] border border-white/90 bg-white/80 group aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop"
                  alt="Toddler girl playing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 z-10 w-9 h-9 sm:w-11 sm:h-11 bg-rose-500 text-white rounded-2xl flex items-center justify-center font-black text-lg shadow-lg -rotate-6 border-2 border-white">
                  B
                </div>
              </div>

              <div className="relative animate-float-reverse rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-[0_12px_30px_rgba(37,99,235,0.12)] border border-white/90 bg-white/80 group aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=800&auto=format&fit=crop"
                  alt="Boy playing with toys"
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
