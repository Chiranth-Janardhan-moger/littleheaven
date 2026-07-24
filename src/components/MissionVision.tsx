import React from 'react';
import { Compass, Eye, Heart, Sparkles, Award, ShieldCheck, Smile, UserCheck, Star } from 'lucide-react';
import { Badge } from './ui/Badge';
import { Card } from './ui/Card';

export const MissionVision: React.FC = () => {
  const corePillars = [
    {
      icon: ShieldCheck,
      title: 'Safety Sanctuary',
      description: 'CCTV monitored campus, child-safe ergonomic play zones, and strict 1:8 teacher-to-child supervision ratio.',
      badgeText: '100% Secure',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    },
    {
      icon: Sparkles,
      title: 'Play-Based Mastery',
      description: 'Hands-on sensory exploration, creative arts, and early STEM discovery tailored for toddlers and preschoolers.',
      badgeText: 'Holistic Growth',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
      icon: UserCheck,
      title: 'Certified Educators',
      description: 'Passionate, background-checked early childhood specialists trained in Montessori and reggio emilia methodologies.',
      badgeText: 'Expert Staff',
      iconBg: 'bg-sky-50 text-sky-600 border-sky-100'
    },
    {
      icon: Smile,
      title: 'Warm Nurturing Environment',
      description: 'A second home where emotional well-being, empathy, and positive social interaction flourish every day.',
      badgeText: 'Joy First',
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100'
    }
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-sky-50/30 to-blue-50/20 overflow-hidden">
      
      {/* Background ambient glowing circles */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-200/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-200/35 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Floating Badge */}
      <div className="hidden lg:block absolute top-20 right-12 animate-float-reverse pointer-events-none z-10">
        <Badge variant="sky" className="bg-white/85 backdrop-blur-md shadow-md py-2 px-4">
          <Award className="w-4 h-4 text-sky-500" />
          <span>World-Class Standard</span>
        </Badge>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="primary">
            <Heart className="w-3.5 h-3.5 text-blue-600 fill-blue-500/20" />
            <span>About Little's Heaven</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Where Early Wonder Meets <br />
            <span className="text-gradient-primary">Nurturing Foundation</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Founded with a vision to create a safe, vibrant, and inspiring early childhood sanctuary, Little's Heaven provides every child with the emotional warmth, intellectual curiosity, and creative confidence to shine.
          </p>
        </div>

        {/* Mission & Vision Rectangular Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Mission Card */}
          <Card className="p-8 sm:p-10 flex flex-col justify-between group relative overflow-hidden border-blue-100/80 hover:border-blue-300">
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-xs group-hover:scale-110 transition-transform duration-300">
                  <Compass className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-blue-50 text-blue-700 tracking-wider uppercase border border-blue-100">
                  OUR PHILOSOPHY
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors pt-2">
                Our Mission
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                To provide a safe, joyful, and stimulating environment where toddlers explore curiosity, build foundational social skills, and unlock their unique potential through play-based discovery.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-blue-600">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span>Nurturing Curiosity Every Day</span>
            </div>
          </Card>

          {/* Vision Card */}
          <Card className="p-8 sm:p-10 flex flex-col justify-between group relative overflow-hidden border-sky-100/80 hover:border-sky-300">
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shadow-xs group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-sky-50 text-sky-700 tracking-wider uppercase border border-sky-100">
                  OUR HORIZON
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors pt-2">
                Our Vision
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                To set the standard in early childhood learning by inspiring happy, resilient, and creative lifelong learners empowered to thrive in tomorrow's world.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-sky-600">
              <Award className="w-4 h-4 text-sky-500" />
              <span>Empowering Future Leaders</span>
            </div>
          </Card>

        </div>

        {/* Core Pillars Bento Grid */}
        <div className="space-y-8 pt-4">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Four Pillars of Our Care
            </h3>
            <p className="text-slate-600 text-sm">
              The core principles that guide our educators every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <Card key={idx} className="space-y-4 p-6 flex flex-col justify-between group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl ${pillar.iconBg} border flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                        {pillar.badgeText}
                      </span>
                    </div>
                    <h4 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
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

        {/* Founder Philosophy Card */}
        <Card className="p-8 sm:p-10 bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 text-white relative overflow-hidden rounded-3xl border-slate-800">
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <blockquote className="text-base sm:text-xl font-medium leading-relaxed italic text-slate-200">
              "Every child enters early education with an infinite capacity for curiosity and wonder. Our responsibility is not to fill a vessel, but to ignite a flame that lasts a lifetime."
            </blockquote>
            <div className="pt-2">
              <p className="font-extrabold text-white text-base">Directorship & Academic Council</p>
              <p className="text-xs text-sky-400 font-semibold">Little's Heaven Child Care & Early Learning Sanctuary</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        </Card>

      </div>
    </section>
  );
};
