import React from 'react';
import { Compass, Eye, Heart, Sparkles, ShieldCheck, Smile, UserCheck, CheckCircle2 } from 'lucide-react';
import { Card } from './ui/Card';

export const MissionVision: React.FC = () => {
  const corePillars = [
    {
      icon: ShieldCheck,
      title: 'Safety Sanctuary',
      description: 'CCTV monitored campus, child-safe ergonomic play zones & 1:8 supervision.',
      badgeText: '100% Secure',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    },
    {
      icon: Sparkles,
      title: 'Play-Based Mastery',
      description: 'Hands-on sensory exploration, creative arts & early STEM discovery.',
      badgeText: 'Holistic Growth',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
      icon: UserCheck,
      title: 'Certified Educators',
      description: 'Montessori & Reggio Emilia trained early childhood specialists.',
      badgeText: 'Expert Staff',
      iconBg: 'bg-sky-50 text-sky-600 border-sky-100'
    },
    {
      icon: Smile,
      title: 'Warm Nurturing',
      description: 'A second home where emotional warmth and social empathy flourish.',
      badgeText: 'Joy First',
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100'
    }
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-sky-50/20 to-blue-50/20 overflow-hidden">
      
      {/* Soft Background Aura Glows */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-sky-200/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase">
            <Heart className="w-3.5 h-3.5 text-blue-600 fill-blue-500/20" />
            <span>About Little's Heaven</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Where Early Wonder Meets <br />
            <span className="text-gradient-primary">Nurturing Foundation</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Founded to create an inspiring early childhood sanctuary where every child gains emotional warmth, intellectual curiosity, and creative confidence.
          </p>
        </div>

        {/* Compact & Beautiful Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Mission Card */}
          <Card className="p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden border border-slate-100 hover:border-blue-300 transition-all duration-300">
            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <Compass className="w-5.5 h-5.5" />
                </div>
                <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-blue-50 text-blue-700 tracking-wider uppercase border border-blue-100">
                  OUR PHILOSOPHY
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors pt-1">
                Our Mission
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                To provide a safe, joyful, and stimulating sanctuary where toddlers explore curiosity, build foundational social skills, and unlock their potential through play-based discovery.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-blue-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
              <span>Nurturing Curiosity & Play-Based Learning</span>
            </div>
          </Card>

          {/* Vision Card */}
          <Card className="p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden border border-slate-100 hover:border-sky-300 transition-all duration-300">
            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <Eye className="w-5.5 h-5.5" />
                </div>
                <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-sky-50 text-sky-700 tracking-wider uppercase border border-sky-100">
                  OUR HORIZON
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors pt-1">
                Our Vision
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                To set the benchmark in early childhood care by inspiring happy, resilient, and creative lifelong learners empowered to thrive in tomorrow’s world.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-sky-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
              <span>Empowering Lifelong Creative Minds</span>
            </div>
          </Card>

        </div>

        {/* Four Pillars of Our Care */}
        <div className="space-y-6 pt-2">
          <div className="text-center max-w-xl mx-auto space-y-1.5">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Four Pillars of Our Care
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm font-medium">
              The foundational principles guiding our educators every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {corePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <Card key={idx} className="p-5 flex flex-col justify-between group border border-slate-100 hover:border-blue-200">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl ${pillar.iconBg} border flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-100">
                        {pillar.badgeText}
                      </span>
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed font-medium">
                      {pillar.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
