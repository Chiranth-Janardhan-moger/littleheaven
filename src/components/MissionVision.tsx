import React, { useState } from 'react';
import { Compass, Eye, Heart, Sparkles, Award } from 'lucide-react';

export const MissionVision: React.FC = () => {
  const [missionRotate, setMissionRotate] = useState({ x: 0, y: 0 });
  const [visionRotate, setVisionRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    setter: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
  ) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setter({
      x: (y / rect.height) * -10,
      y: (x / rect.width) * 10
    });
  };

  const handleMouseLeave = (
    setter: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
  ) => {
    setter({ x: 0, y: 0 });
  };

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-sky-50/40 to-blue-50/20 overflow-hidden">
      
      {/* Background soft ambient glowing circles */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Decorative Floating Glass Badges */}
      <div className="hidden lg:block absolute top-12 left-12 animate-float-slow pointer-events-none z-10">
        <div className="px-4 py-2 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 shadow-lg text-xs font-bold text-blue-600 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-500 fill-blue-400/30" />
          <span>Child-Centric Growth</span>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-16 right-12 animate-float-reverse pointer-events-none z-10">
        <div className="px-4 py-2 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 shadow-lg text-xs font-bold text-sky-600 flex items-center gap-2">
          <Award className="w-4 h-4 text-sky-500" />
          <span>World-Class Standard</span>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase shadow-sm">
            <Heart className="w-3.5 h-3.5 text-blue-600 fill-blue-500/20" />
            <span>Our Guiding Compass</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nurturing Young Minds with <br />
            <span className="text-gradient-primary">Purpose & Wonder</span>
          </h2>
        </div>

        {/* Floating Circular Glass Orbs */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16 perspective-1000">
          
          {/* Mission Circle Orb */}
          <div className="animate-float-slow">
            <div
              onMouseMove={(e) => handleMouseMove(e, setMissionRotate)}
              onMouseLeave={() => handleMouseLeave(setMissionRotate)}
              style={{
                transform: `perspective(1000px) rotateX(${missionRotate.x}deg) rotateY(${missionRotate.y}deg)`,
                transition: 'transform 0.2s ease-out'
              }}
              className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] rounded-full p-1 bg-gradient-to-tr from-blue-500 via-sky-400 to-cyan-300 shadow-[0_20px_60px_rgba(37,99,235,0.18)] hover:shadow-[0_25px_70px_rgba(37,99,235,0.28)] transition-all duration-300 group cursor-pointer"
            >
              {/* Inner Glass Circle Content */}
              <div className="w-full h-full rounded-full bg-white/85 backdrop-blur-2xl border border-white/90 p-8 sm:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
                
                {/* Background Glass Accent Glow */}
                <div className="absolute -top-10 -right-10 w-44 h-44 bg-blue-300/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />

                {/* Orb Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 p-0.5 shadow-md shadow-blue-500/30 mb-3 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full bg-white/90 rounded-full flex items-center justify-center">
                    <Compass className="w-8 h-8 text-blue-600" />
                  </div>
                </div>

                {/* Subtitle Badge */}
                <span className="text-[11px] font-extrabold text-blue-600 uppercase tracking-widest mb-1">
                  OUR PHILOSOPHY
                </span>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
                  Our Mission
                </h3>

                {/* Concise Text */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium max-w-xs">
                  To provide a warm, play-centric environment where children build emotional confidence, cognitive mastery & social empathy.
                </p>

              </div>
            </div>
          </div>

          {/* Vision Circle Orb */}
          <div className="animate-float-reverse">
            <div
              onMouseMove={(e) => handleMouseMove(e, setVisionRotate)}
              onMouseLeave={() => handleMouseLeave(setVisionRotate)}
              style={{
                transform: `perspective(1000px) rotateX(${visionRotate.x}deg) rotateY(${visionRotate.y}deg)`,
                transition: 'transform 0.2s ease-out'
              }}
              className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] rounded-full p-1 bg-gradient-to-tr from-sky-500 via-cyan-400 to-indigo-500 shadow-[0_20px_60px_rgba(56,189,248,0.18)] hover:shadow-[0_25px_70px_rgba(56,189,248,0.28)] transition-all duration-300 group cursor-pointer"
            >
              {/* Inner Glass Circle Content */}
              <div className="w-full h-full rounded-full bg-white/85 backdrop-blur-2xl border border-white/90 p-8 sm:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
                
                {/* Background Glass Accent Glow */}
                <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-sky-300/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />

                {/* Orb Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 p-0.5 shadow-md shadow-sky-500/30 mb-3 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full bg-white/90 rounded-full flex items-center justify-center">
                    <Eye className="w-8 h-8 text-sky-600" />
                  </div>
                </div>

                {/* Subtitle Badge */}
                <span className="text-[11px] font-extrabold text-sky-600 uppercase tracking-widest mb-1">
                  FUTURE HORIZON
                </span>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
                  Our Vision
                </h3>

                {/* Concise Text */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium max-w-xs">
                  To be globally recognized in early learning—shaping happy, resilient & compassionate lifelong leaders.
                </p>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};



